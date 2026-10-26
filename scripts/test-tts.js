// TTS 端到端测试脚本
const { execFile, spawn } = require('child_process');
const os = require('os');
const path = require('path');
const fs = require('fs');

console.log('=== Edge TTS 端到端测试 ===\n');

// 测试1: edge-tts 可用性
console.log('--- 测试1: edge-tts CLI 可用性 ---');
execFile('edge-tts', ['--version'], { windowsHide: true, timeout: 5000 }, (err, stdout) => {
  if (err) {
    console.log('FAIL: edge-tts 不可用 -', err.message);
    process.exit(1);
  }
  console.log('PASS: edge-tts', stdout.trim());
  runSynthesizeTest();
});

// 测试2: 纯文本合成
function runSynthesizeTest() {
  console.log('\n--- 测试2: 纯文本合成 ---');
  const tmpFile = path.join(os.tmpdir(), 'yuwen-tts-test-plain.mp3');
  const proc = spawn('edge-tts', [
    '--text', '池塘里有一群小蝌蚪，大大的脑袋，黑灰色的身子。',
    '--voice', 'zh-CN-XiaoxiaoNeural',
    '--write-media', tmpFile,
  ], { windowsHide: true });

  proc.on('close', (code) => {
    if (code === 0 && fs.existsSync(tmpFile)) {
      const stat = fs.statSync(tmpFile);
      console.log('PASS: 纯文本合成成功 -', stat.size, 'bytes');
      fs.unlinkSync(tmpFile);
    } else {
      console.log('FAIL: 纯文本合成失败 - exit code', code);
    }
    runSSMLTest();
  });
}

// 测试3: SSML 情感合成
function runSSMLTest() {
  console.log('\n--- 测试3: SSML 情感合成 (cheerful) ---');
  const tmpFile = path.join(os.tmpdir(), 'yuwen-tts-test-ssml.mp3');
  const ssml = "<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='zh-CN'><voice name='zh-CN-XiaoxiaoNeural'><mstts:express-as style='cheerful' styledegree='2'><prosody rate='0%'>池塘里有一群小蝌蚪，大大的脑袋，黑灰色的身子。</prosody></mstts:express-as></voice></speak>";

  const proc = spawn('edge-tts', [
    '--text', ssml,
    '--voice', 'zh-CN-XiaoxiaoNeural',
    '--write-media', tmpFile,
  ], { windowsHide: true });

  proc.on('close', (code) => {
    if (code === 0 && fs.existsSync(tmpFile)) {
      const stat = fs.statSync(tmpFile);
      console.log('PASS: SSML 情感合成成功 -', stat.size, 'bytes');
      fs.unlinkSync(tmpFile);
    } else {
      console.log('FAIL: SSML 情感合成失败 - exit code', code);
    }
    runVoiceTest();
  });
}

// 测试4: 多语音测试
function runVoiceTest() {
  console.log('\n--- 测试4: 多语音测试 ---');
  const voices = ['zh-CN-XiaoxiaoNeural', 'zh-CN-YunxiNeural', 'zh-CN-YunjianNeural'];
  let completed = 0;

  for (const voice of voices) {
    const tmpFile = path.join(os.tmpdir(), `yuwen-tts-test-${voice}.mp3`);
    const proc = spawn('edge-tts', [
      '--text', '你好，我是语文小霸王。',
      '--voice', voice,
      '--write-media', tmpFile,
    ], { windowsHide: true });

    proc.on('close', (code) => {
      if (code === 0 && fs.existsSync(tmpFile)) {
        const stat = fs.statSync(tmpFile);
        console.log(`PASS: ${voice} - ${stat.size} bytes`);
        fs.unlinkSync(tmpFile);
      } else {
        console.log(`FAIL: ${voice} - exit code ${code}`);
      }
      completed++;
      if (completed === voices.length) {
        runSpeedTest();
      }
    });
  }
}

// 测试5: 语速控制
function runSpeedTest() {
  console.log('\n--- 测试5: 语速控制 ---');
  const speeds = [
    { rate: '-20%', label: '慢速' },
    { rate: '+0%', label: '正常' },
    { rate: '+30%', label: '快速' },
  ];
  let completed = 0;

  for (const speed of speeds) {
    const tmpFile = path.join(os.tmpdir(), `yuwen-tts-test-speed-${speed.label}.mp3`);
    const proc = spawn('edge-tts', [
      '--text', '春风又绿江南岸，明月何时照我还。',
      '--voice', 'zh-CN-XiaoxiaoNeural',
      '--rate', speed.rate,
      '--write-media', tmpFile,
    ], { windowsHide: true });

    proc.on('close', (code) => {
      if (code === 0 && fs.existsSync(tmpFile)) {
        const stat = fs.statSync(tmpFile);
        console.log(`PASS: ${speed.label} (${speed.rate}) - ${stat.size} bytes`);
        fs.unlinkSync(tmpFile);
      } else {
        console.log(`FAIL: ${speed.label} - exit code ${code}`);
      }
      completed++;
      if (completed === speeds.length) {
        console.log('\n=== 所有测试完成 ===');
      }
    });
  }
}
