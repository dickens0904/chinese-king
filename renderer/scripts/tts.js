// 语文小霸王 - Edge TTS 语音朗读模块
// 主引擎：Edge TTS（通过主进程调用 edge-tts CLI，支持SSML情感）
// 降级：Web Speech API（浏览器自带，质量较差）

// TTS状态管理
const TTSState = {
  isPlaying: false,
  isPaused: false,
  engine: 'pending', // 'edge-tts' | 'webspeech' | 'pending'
  currentVoice: 'zh-CN-XiaoxiaoNeural',
  currentSpeed: 1.0,
  currentEmotion: 'default',
  currentText: '',
  currentPosition: 0,
  totalLength: 0,
  audioElement: null, // HTML5 Audio 元素用于播放 Edge TTS 生成的音频
  utterance: null, // Web Speech API 降级方案
  _boundaryTimer: null,
};

// 可用的中文语音列表
const AVAILABLE_VOICES = {
  'zh-CN-XiaoxiaoNeural': {
    name: '晓晓',
    gender: 'female',
    description: '年轻女声，活泼可爱',
    styles: [
      'default',
      'cheerful',
      'sad',
      'angry',
      'fearful',
      'disgruntled',
      'serious',
      'affectionate',
      'gentle',
      'lyrical',
    ],
  },
  'zh-CN-YunxiNeural': {
    name: '云希',
    gender: 'male',
    description: '年轻男声，阳光开朗',
    styles: [
      'default',
      'cheerful',
      'sad',
      'angry',
      'fearful',
      'disgruntled',
      'serious',
      'depressed',
      'embarrassed',
    ],
  },
  'zh-CN-YunjianNeural': {
    name: '云健',
    gender: 'male',
    description: '成熟男声，沉稳有力',
    styles: [
      'default',
      'cheerful',
      'sad',
      'angry',
      'fearful',
      'disgruntled',
      'serious',
      'depressed',
      'narration',
    ],
  },
  'zh-CN-XiaoyiNeural': {
    name: '晓伊',
    gender: 'female',
    description: '温柔女声，亲切自然',
    styles: [
      'default',
      'cheerful',
      'sad',
      'angry',
      'fearful',
      'disgruntled',
      'serious',
      'gentle',
      'affectionate',
    ],
  },
  'zh-CN-YunyangNeural': {
    name: '云扬',
    gender: 'male',
    description: '新闻播音风格，专业标准',
    styles: [
      'default',
      'narration',
      'cheerful',
      'sad',
      'angry',
      'fearful',
      'disgruntled',
      'serious',
    ],
  },
};

// 情感样式映射
const EMOTION_STYLES = {
  default: '',
  cheerful: 'cheerful',
  serious: 'serious',
  sad: 'sad',
  angry: 'angry',
  gentle: 'gentle',
  affectionate: 'affectionate',
  lyrical: 'lyrical',
  narration: 'narration',
};

// ============ 初始化 ============
async function initTTS() {
  console.log('TTS模块初始化...');

  bindTTSEvents();
  loadTTSSettings();

  // 检测 Edge TTS 可用性
  if (window.electronAPI && window.electronAPI.ttsCheck) {
    try {
      const result = await window.electronAPI.ttsCheck();
      if (result.available) {
        TTSState.engine = 'edge-tts';
        console.log('TTS引擎: Edge TTS ' + result.version);
        updateTTSStatus('就绪 (Edge TTS)');
      } else {
        TTSState.engine = 'webspeech';
        console.warn('Edge TTS 不可用，降级到 Web Speech API');
        updateTTSStatus('就绪 (Web Speech)');
      }
    } catch (e) {
      TTSState.engine = 'webspeech';
      console.warn('Edge TTS 检测失败，降级:', e.message);
      updateTTSStatus('就绪 (Web Speech)');
    }
  } else {
    TTSState.engine = 'webspeech';
    console.log('TTS引擎: Web Speech API (非Electron环境)');
    updateTTSStatus('就绪 (Web Speech)');
  }

  console.log('TTS模块初始化完成, 引擎:', TTSState.engine);
}

// ============ 事件绑定 ============
function bindTTSEvents() {
  const btnPlay = document.getElementById('btn-play');
  if (btnPlay) btnPlay.addEventListener('click', playTTS);

  const btnPause = document.getElementById('btn-pause');
  if (btnPause) btnPause.addEventListener('click', pauseTTS);

  const btnStop = document.getElementById('btn-stop');
  if (btnStop) btnStop.addEventListener('click', stopTTS);

  const voiceSelect = document.getElementById('voice-select');
  if (voiceSelect) {
    voiceSelect.addEventListener('change', e => {
      TTSState.currentVoice = e.target.value;
      saveTTSSettings();
      updateVoiceInfo();
    });
  }

  const speedRange = document.getElementById('speed-range');
  if (speedRange) {
    speedRange.addEventListener('input', e => {
      TTSState.currentSpeed = parseFloat(e.target.value);
      updateSpeedDisplay();
      saveTTSSettings();
    });
  }

  const emotionSelect = document.getElementById('emotion-select');
  if (emotionSelect) {
    emotionSelect.addEventListener('change', e => {
      TTSState.currentEmotion = e.target.value;
      saveTTSSettings();
    });
  }
}

// ============ 播放控制 ============
function playTTS() {
  const readingText = document.getElementById('reading-text');
  if (!readingText) {
    showNotification('没有可朗读的文本', 'warning');
    return;
  }

  const text = extractTextFromHTML(readingText.innerHTML);
  if (!text.trim()) {
    showNotification('文本内容为空', 'warning');
    return;
  }

  if (TTSState.isPaused) {
    resumeTTS();
    return;
  }

  stopTTS();

  TTSState.currentText = text;
  TTSState.isPlaying = true;
  TTSState.isPaused = false;
  TTSState.currentPosition = 0;
  TTSState.totalLength = text.length;
  updateTTSUI();

  // 根据引擎选择播放方式
  if (TTSState.engine === 'edge-tts') {
    speakWithEdgeTTS(text);
  } else {
    speakWithWebSpeech(text);
  }
}

function pauseTTS() {
  if (!TTSState.isPlaying || TTSState.isPaused) return;

  if (TTSState.audioElement) {
    TTSState.audioElement.pause();
  } else if (window.speechSynthesis) {
    window.speechSynthesis.pause();
  }

  TTSState.isPaused = true;
  updateTTSUI();
  updateTTSStatus('已暂停');
}

function resumeTTS() {
  if (!TTSState.isPaused) return;

  if (TTSState.audioElement) {
    TTSState.audioElement.play();
  } else if (window.speechSynthesis) {
    window.speechSynthesis.resume();
  }

  TTSState.isPaused = false;
  updateTTSUI();
  updateTTSStatus('正在朗读...');
}

function stopTTS() {
  // 停止音频播放
  if (TTSState.audioElement) {
    TTSState.audioElement.pause();
    TTSState.audioElement.currentTime = 0;
    TTSState.audioElement.src = '';
    TTSState.audioElement = null;
  }

  // 停止 Web Speech API
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }

  // 通知主进程停止合成
  if (window.electronAPI && window.electronAPI.ttsStop) {
    window.electronAPI.ttsStop().catch(() => {});
  }

  // 清除边界计时器
  if (TTSState._boundaryTimer) {
    clearInterval(TTSState._boundaryTimer);
    TTSState._boundaryTimer = null;
  }

  TTSState.isPlaying = false;
  TTSState.isPaused = false;
  TTSState.currentPosition = 0;
  updateTTSUI();
  clearTextHighlight();
}

// ============ Edge TTS 播放（主引擎） ============
async function speakWithEdgeTTS(text) {
  try {
    updateTTSStatus('正在合成语音...');

    const result = await window.electronAPI.ttsSynthesize(text, {
      voice: TTSState.currentVoice,
      rate: TTSState.currentSpeed,
      pitch: 1.0, // Edge TTS 通过 SSML 控制情感，不依赖 pitch
      style: EMOTION_STYLES[TTSState.currentEmotion] || '',
    });

    if (!result.success) {
      console.error('Edge TTS 合成失败:', result.error);
      // 降级到 Web Speech API
      console.warn('降级到 Web Speech API');
      TTSState.engine = 'webspeech';
      speakWithWebSpeech(text);
      return;
    }

    // 使用 HTML5 Audio 播放生成的音频
    const audio = new Audio('file:///' + result.file.replace(/\\/g, '/'));
    TTSState.audioElement = audio;

    audio.onplay = () => {
      updateTTSStatus('正在朗读...');
      startBoundarySimulation(text);
    };

    audio.onended = () => {
      console.log('Edge TTS 播放结束');
      TTSState.isPlaying = false;
      TTSState.isPaused = false;
      TTSState.audioElement = null;
      if (TTSState._boundaryTimer) {
        clearInterval(TTSState._boundaryTimer);
        TTSState._boundaryTimer = null;
      }
      updateTTSUI();
      updateTTSStatus('朗读完成');
      clearTextHighlight();
    };

    audio.onerror = e => {
      console.error('音频播放错误:', e);
      TTSState.isPlaying = false;
      TTSState.isPaused = false;
      TTSState.audioElement = null;
      updateTTSUI();
      updateTTSStatus('播放出错');
      showNotification('音频播放出错，正在降级...', 'warning');
      TTSState.engine = 'webspeech';
      speakWithWebSpeech(text);
    };

    audio.ontimeupdate = () => {
      if (audio.duration) {
        const progress = audio.currentTime / audio.duration;
        TTSState.currentPosition = Math.floor(progress * TTSState.totalLength);
        updateReadingProgress();
      }
    };

    // 设置播放速率
    audio.playbackRate = TTSState.currentSpeed;

    await audio.play();
    console.log('Edge TTS 播放开始');
  } catch (error) {
    console.error('Edge TTS 错误:', error);
    // 降级到 Web Speech API
    TTSState.engine = 'webspeech';
    speakWithWebSpeech(text);
  }
}

// 模拟文本边界高亮（Edge TTS 播放音频时无法获取精确的字边界，用时间估算）
function startBoundarySimulation(text) {
  if (TTSState._boundaryTimer) clearInterval(TTSState._boundaryTimer);

  const audio = TTSState.audioElement;
  if (!audio || !audio.duration) return;

  const charsPerSecond = text.length / audio.duration;
  let lastCharIndex = -1;

  TTSState._boundaryTimer = setInterval(() => {
    if (!TTSState.audioElement || TTSState.isPaused) return;

    const currentTime = TTSState.audioElement.currentTime;
    const charIndex = Math.min(Math.floor(currentTime * charsPerSecond), text.length - 1);

    if (charIndex !== lastCharIndex && charIndex < text.length) {
      lastCharIndex = charIndex;
      highlightCurrentText(charIndex, 1);
    }
  }, 100);
}

// ============ Web Speech API 降级方案 ============
function speakWithWebSpeech(text) {
  if (!window.speechSynthesis) {
    showNotification('浏览器不支持语音合成', 'error');
    return;
  }

  updateTTSStatus('正在朗读 (Web Speech)...');

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-CN';
  utterance.rate = TTSState.currentSpeed;
  utterance.pitch = getEmotionPitch(TTSState.currentEmotion);
  utterance.volume = 1;

  // 尝试匹配语音名称
  const voices = window.speechSynthesis.getVoices();
  const matched = voices.find(v => v.name === TTSState.currentVoice);
  if (matched) {
    utterance.voice = matched;
  }

  utterance.onstart = () => updateTTSStatus('正在朗读...');
  utterance.onend = () => {
    TTSState.isPlaying = false;
    TTSState.isPaused = false;
    updateTTSUI();
    updateTTSStatus('朗读完成');
    clearTextHighlight();
  };
  utterance.onerror = e => {
    console.error('Web Speech 错误:', e.error);
    TTSState.isPlaying = false;
    TTSState.isPaused = false;
    updateTTSUI();
    updateTTSStatus('朗读出错');
  };
  utterance.onboundary = e => {
    TTSState.currentPosition = e.charIndex;
    updateReadingProgress();
    highlightCurrentText(e.charIndex, e.charLength || 1);
  };

  TTSState.utterance = utterance;
  window.speechSynthesis.speak(utterance);
}

// 获取情感音调（Web Speech API 降级用）
function getEmotionPitch(emotion) {
  const pitchMap = {
    default: 1,
    cheerful: 1.2,
    serious: 0.8,
    sad: 0.7,
    angry: 1.3,
    gentle: 0.9,
    affectionate: 1.1,
    lyrical: 1.0,
    narration: 0.9,
  };
  return pitchMap[emotion] || 1;
}

// ============ 文本处理 ============
function extractTextFromHTML(html) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  // 移除拼音标注（<rt>标签），避免TTS读出拼音
  tempDiv.querySelectorAll('rt').forEach(el => el.remove());
  // 移除<script>和<style>标签
  tempDiv.querySelectorAll('script, style').forEach(el => el.remove());
  // 提取纯文本，用换行分隔段落
  const lines = [];
  tempDiv.querySelectorAll('p, div, h1, h2, h3, h4, br').forEach(el => {
    const text = el.textContent.trim();
    if (text) lines.push(text);
  });
  // 如果没有找到段落标签，直接取全部文本
  if (lines.length === 0) {
    return (tempDiv.textContent || '').trim();
  }
  return lines.join('\n');
}

// ============ 文本高亮 ============
function highlightCurrentText(charIndex, charLength) {
  const readingText = document.getElementById('reading-text');
  if (!readingText) return;

  clearTextHighlight();

  const textNodes = getTextNodes(readingText);
  let currentIndex = 0;

  for (const node of textNodes) {
    const nodeLength = node.textContent.length;

    if (currentIndex + nodeLength > charIndex) {
      const localIndex = charIndex - currentIndex;
      const highlightLength = Math.min(charLength, nodeLength - localIndex);

      try {
        const range = document.createRange();
        range.setStart(node, localIndex);
        range.setEnd(node, localIndex + highlightLength);

        const highlightSpan = document.createElement('span');
        highlightSpan.className = 'tts-highlight';
        highlightSpan.style.cssText = `
          background-color: var(--accent-color);
          color: var(--text-primary);
          padding: 2px 4px;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        `;

        range.surroundContents(highlightSpan);
        highlightSpan.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } catch (e) {
        // Range 操作可能因为 DOM 变化失败，忽略
      }
      break;
    }

    currentIndex += nodeLength;
  }
}

function clearTextHighlight() {
  const highlights = document.querySelectorAll('.tts-highlight');
  highlights.forEach(highlight => {
    const parent = highlight.parentNode;
    if (parent) {
      parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
      parent.normalize();
    }
  });
}

function getTextNodes(element) {
  const textNodes = [];
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
  let node = walker.nextNode();
  while (node !== null) {
    textNodes.push(node);
    node = walker.nextNode();
  }
  return textNodes;
}

// ============ UI 更新 ============
function updateTTSUI() {
  const btnPlay = document.getElementById('btn-play');
  const btnPause = document.getElementById('btn-pause');
  const btnStop = document.getElementById('btn-stop');

  if (btnPlay) {
    btnPlay.disabled = TTSState.isPlaying && !TTSState.isPaused;
    btnPlay.style.opacity = TTSState.isPlaying && !TTSState.isPaused ? '0.5' : '1';
  }
  if (btnPause) {
    btnPause.disabled = !TTSState.isPlaying || TTSState.isPaused;
    btnPause.style.opacity = !TTSState.isPlaying || TTSState.isPaused ? '0.5' : '1';
  }
  if (btnStop) {
    btnStop.disabled = !TTSState.isPlaying;
    btnStop.style.opacity = !TTSState.isPlaying ? '0.5' : '1';
  }
}

function updateReadingProgress() {
  if (TTSState.totalLength > 0) {
    const progress = (TTSState.currentPosition / TTSState.totalLength) * 100;
    const progressBar = document.querySelector('.reading-progress .progress');
    if (progressBar) progressBar.style.width = `${progress}%`;
  }
}

function updateSpeedDisplay() {
  const speedValue = document.getElementById('speed-value');
  if (speedValue) speedValue.textContent = `${TTSState.currentSpeed.toFixed(1)}x`;
}

function updateVoiceInfo() {
  const voiceInfo = AVAILABLE_VOICES[TTSState.currentVoice];
  if (voiceInfo) {
    const voiceName = document.querySelector('.voice-name');
    if (voiceName) voiceName.textContent = voiceInfo.name;
    const voiceDesc = document.querySelector('.voice-desc');
    if (voiceDesc) voiceDesc.textContent = voiceInfo.description;
  }
}

function updateTTSStatus(status) {
  const statusElement = document.querySelector('.tts-status');
  if (statusElement) statusElement.textContent = status;
}

// ============ 设置持久化 ============
function loadTTSSettings() {
  const saved = localStorage.getItem('yuwen-tts-settings');
  if (saved) {
    try {
      const settings = JSON.parse(saved);
      Object.assign(TTSState, settings);

      const voiceSelect = document.getElementById('voice-select');
      if (voiceSelect) voiceSelect.value = TTSState.currentVoice;

      const speedRange = document.getElementById('speed-range');
      if (speedRange) {
        speedRange.value = TTSState.currentSpeed;
        updateSpeedDisplay();
      }

      const emotionSelect = document.getElementById('emotion-select');
      if (emotionSelect) emotionSelect.value = TTSState.currentEmotion;
    } catch (e) {
      console.error('加载TTS设置失败:', e);
    }
  }
}

function saveTTSSettings() {
  try {
    localStorage.setItem(
      'yuwen-tts-settings',
      JSON.stringify({
        currentVoice: TTSState.currentVoice,
        currentSpeed: TTSState.currentSpeed,
        currentEmotion: TTSState.currentEmotion,
      })
    );
  } catch (e) {
    console.error('保存TTS设置失败:', e);
  }
}

// ============ 兼容接口 ============
// speakWithEdgeTTS 已在上面定义为 Edge TTS 播放函数
// 这里提供一个直接调用的便捷接口供外部使用
async function speakText(text) {
  if (TTSState.engine === 'edge-tts') {
    await speakWithEdgeTTS(text);
  } else {
    speakWithWebSpeech(text);
  }
}

async function getAvailableVoices() {
  if (window.electronAPI && window.electronAPI.ttsCheck) {
    return Object.entries(AVAILABLE_VOICES).map(([id, info]) => ({
      id,
      ...info,
    }));
  }
  if (window.speechSynthesis) {
    return window.speechSynthesis.getVoices();
  }
  return [];
}

async function testVoice() {
  const testText = '你好，我是语文小霸王，让我们一起学习语文吧！';
  playTTS(); // 会自动读取阅读区文本，这里改为直接测试
}

// ============ stopTTSIfPlaying（供 app.js 调用） ============
function stopTTSIfPlaying() {
  if (TTSState.isPlaying) {
    stopTTS();
  }
}

// ============ 模块导出 ============
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    TTSState,
    AVAILABLE_VOICES,
    EMOTION_STYLES,
    initTTS,
    playTTS,
    pauseTTS,
    resumeTTS,
    stopTTS,
    speakText,
    speakWithEdgeTTS,
    speakWithWebSpeech,
    getAvailableVoices,
    testVoice,
  };
}

// ============ 启动 ============
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(initTTS, 100);
});
