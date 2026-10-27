const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const { execFile, spawn } = require('child_process');
const os = require('os');

// ============ 禁用硬件加速 + 内联GPU进程（避免沙箱环境下GPU缓存权限问题） ============
app.disableHardwareAcceleration();
app.commandLine.appendSwitch('disable-gpu');
app.commandLine.appendSwitch('in-process-gpu');

// ============ 设置应用数据目录到项目下（必须在 requestSingleInstanceLock 之前） ============
const APP_DATA_DIR = path.join(__dirname, 'app-data');
const LOG_DIR = path.join(APP_DATA_DIR, 'logs');

// 确保目录存在
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    try {
      fs.mkdirSync(dir, { recursive: true });
      console.log('创建目录: ' + dir);
    } catch (e) {
      console.error('创建目录失败: ' + dir, e.message);
    }
  }
}

ensureDir(APP_DATA_DIR);
ensureDir(LOG_DIR);

// 设置Electron的userData路径到项目目录（影响lockfile位置）
app.setPath('userData', APP_DATA_DIR);
app.setPath('appData', APP_DATA_DIR);

// ============ 单实例锁（避免多开） ============
let gotTheLock;
try {
  gotTheLock = app.requestSingleInstanceLock();
} catch (e) {
  console.warn('单实例锁创建失败，继续启动:', e.message);
  gotTheLock = true;
}
if (!gotTheLock) {
  app.quit();
}

// ============ 日志系统 ============
const LOG_FILE = path.join(LOG_DIR, `app-${new Date().toISOString().split('T')[0]}.log`);

function log(level, message, data = null) {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    level,
    message,
    data,
  };

  const logLine = JSON.stringify(logEntry) + '\n';

  try {
    fs.appendFileSync(LOG_FILE, logLine);
  } catch (e) {
    console.error('写入日志失败:', e.message);
  }

  // 同时输出到控制台
  const consoleMsg = `[${timestamp}] [${level}] ${message}`;
  switch (level) {
    case 'ERROR':
      console.error(consoleMsg, data || '');
      break;
    case 'WARN':
      console.warn(consoleMsg, data || '');
      break;
    default:
      console.log(consoleMsg, data || '');
  }
}

// ============ 主窗口 ============
let mainWindow;

function createWindow() {
  log('INFO', '创建主窗口...');

  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 1000,
    minHeight: 700,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js'),
    },
    title: '语文小霸王',
    show: false,
    backgroundColor: '#FFF8F0',
  });

  // 加载应用
  const indexPath = path.join(__dirname, 'renderer', 'index.html');
  log('INFO', '加载页面: ' + indexPath);

  mainWindow
    .loadFile(indexPath)
    .then(() => {
      log('INFO', '页面加载成功');
    })
    .catch(err => {
      log('ERROR', '页面加载失败', err.message);
    });

  // 窗口准备好后显示
  mainWindow.once('ready-to-show', () => {
    log('INFO', '窗口准备就绪，显示窗口');
    mainWindow.show();
  });

  // 开发模式下打开开发者工具
  if (process.argv.includes('--dev')) {
    mainWindow.webContents.openDevTools();
    log('INFO', '开发者工具已打开');
  }

  // 监听渲染进程消息
  mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
    log('ERROR', '页面加载失败', { errorCode, errorDescription });
  });

  mainWindow.webContents.on('crashed', () => {
    log('ERROR', '渲染进程崩溃');
  });

  mainWindow.on('closed', () => {
    log('INFO', '主窗口已关闭');
    mainWindow = null;
  });
}

// ============ IPC通信 ============
ipcMain.handle('get-app-version', () => {
  return app.getVersion();
});

ipcMain.handle('get-app-path', () => {
  return app.getAppPath();
});

ipcMain.handle('get-log-path', () => {
  return LOG_FILE;
});

ipcMain.handle('write-log', (event, level, message, data) => {
  log(level, message, data);
  return true;
});

// ============ Edge TTS 语音合成 ============
// 情感样式映射
const EDGE_TTS_STYLES = {
  default: '',
  cheerful: 'cheerful',
  serious: 'serious',
  sad: 'sad',
  angry: 'angry',
  gentle: 'gentle',
  affectionate: 'affectionate',
  lyrical: 'lyrical',
  narration: 'narration',
  embarrassed: 'embarrassed',
  depressed: 'depressed',
  fearful: 'fearful',
  disgruntled: 'disgruntled',
};

// TTS播放状态
let ttsProcess = null;
let ttsAudioPath = null;

// 生成SSML文本
function buildSSML(text, voice, style, rate, pitch) {
  const styleAttr = style && style !== 'default' ? ` style='${style}' styledegree='2'` : '';
  const rateAttr = rate ? ` rate='${Math.round((rate - 1) * 100)}%'` : '';
  const pitchAttr = pitch && pitch !== 1 ? ` pitch='${Math.round((pitch - 1) * 50)}Hz'` : '';

  return `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='zh-CN'>
  <voice name='${voice}'>
    <mstts:express-as${styleAttr}>
      <prosody${rateAttr}${pitchAttr}>${text}</prosody>
    </mstts:express-as>
  </voice>
</speak>`;
}

// 解析版本号为可比较数组
function parseVersion(v) {
  const m = /(\d+)\.(\d+)\.(\d+)/.exec(v || '');
  if (!m) return null;
  return [Number(m[1]), Number(m[2]), Number(m[3])];
}

function versionGte(v, min) {
  const p = parseVersion(v);
  if (!p) return false;
  for (let i = 0; i < 3; i++) {
    if (p[i] > min[i]) return true;
    if (p[i] < min[i]) return false;
  }
  return true;
}

// edge-tts Python CLI 需要 ≥ 6.1.9 才内置 Sec-MS-GEC 令牌，避免 403 风控
const MIN_EDGE_TTS_VERSION = [6, 1, 9];

// 缓存 CLI 版本检测结果，避免每次合成都 spawn 一次
let _cliVersionCache = null;
function checkEdgeTTSVersion() {
  if (_cliVersionCache !== null) return _cliVersionCache;
  _cliVersionCache = new Promise(resolve => {
    execFile('edge-tts', ['--version'], { windowsHide: true, timeout: 5000 }, (err, stdout) => {
      if (err) resolve({ available: false, error: err.message });
      else resolve({ available: true, version: stdout.trim() });
    });
  });
  return _cliVersionCache;
}

// 使用 edge-tts CLI 生成音频
async function generateEdgeTTS(text, options) {
  const {
    voice = 'zh-CN-XiaoxiaoNeural',
    rate = 1.0,
    pitch = 1.0,
    style = 'default',
  } = options || {};

  // 合成前检测 CLI 版本
  const cliInfo = await checkEdgeTTSVersion();
  if (!cliInfo.available) {
    throw new Error('edge-tts CLI 未安装，请先执行：pip install edge-tts');
  }
  if (!versionGte(cliInfo.version, MIN_EDGE_TTS_VERSION)) {
    log('WARN', `edge-tts 版本 ${cliInfo.version} 偏低，建议 ≥ ${MIN_EDGE_TTS_VERSION.join('.')}（Sec-MS-GEC 令牌支持）`);
  }

  // 创建临时文件
  const tmpDir = os.tmpdir();
  const tmpFile = path.join(tmpDir, `yuwen-tts-${Date.now()}.mp3`);
  ttsAudioPath = tmpFile;

  // 构建参数
  const args = [];
  const ssml = buildSSML(text, voice, style, rate, pitch);
  args.push('--text', ssml);
  args.push('--voice', voice);
  args.push('--write-media', tmpFile);

  log('INFO', 'Edge TTS 开始合成', { voice, style, rate, pitch, textLength: text.length });

  // 403/401 时最多重试 3 次（退避 2s/4s），其余错误直接抛出
  const MAX_RETRIES = 3;
  let lastErr = null;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const result = await new Promise((resolve, reject) => {
        // 使用 spawn 实时获取进度
        const proc = spawn('edge-tts', args, {
          windowsHide: true,
          timeout: 60000, // 60秒超时
        });

        ttsProcess = proc;

        let stderr = '';
        proc.stderr.on('data', chunk => {
          stderr += chunk.toString();
        });

        proc.on('close', code => {
          ttsProcess = null;
          if (code === 0 && fs.existsSync(tmpFile)) {
            const stat = fs.statSync(tmpFile);
            log('INFO', 'Edge TTS 合成成功', { file: tmpFile, size: stat.size });
            resolve({ success: true, file: tmpFile, size: stat.size });
          } else {
            log('ERROR', 'Edge TTS 合成失败', { code, stderr });
            reject(new Error(`edge-tts 退出码 ${code}: ${stderr}`));
          }
        });

        proc.on('error', err => {
          ttsProcess = null;
          log('ERROR', 'Edge TTS 进程错误', err.message);
          reject(err);
        });
      });
      return result;
    } catch (err) {
      lastErr = err;
      const isAuthError = /403|401/i.test(String(err.message || err));
      if (isAuthError && attempt < MAX_RETRIES) {
        const backoff = 2000 * attempt;
        log('WARN', `Edge TTS 认证失败，${backoff}ms 后重试`, { attempt, err: err.message });
        await new Promise(r => setTimeout(r, backoff));
        // 清理上一次残留的临时文件
        try { if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile); } catch (_) { /* ignore */ }
        continue;
      }
      throw err;
    }
  }
  throw lastErr;
}

// IPC: 合成语音并返回音频文件路径
ipcMain.handle('tts-synthesize', async (event, text, options) => {
  try {
    // 停止之前的合成
    if (ttsProcess) {
      ttsProcess.kill();
      ttsProcess = null;
    }
    // 清理旧文件
    if (ttsAudioPath && fs.existsSync(ttsAudioPath)) {
      try {
        fs.unlinkSync(ttsAudioPath);
      } catch (e) {
        /* ignore */
      }
    }

    const result = await generateEdgeTTS(text, options);
    return result;
  } catch (err) {
    log('ERROR', 'tts-synthesize 失败', err.message);
    return { success: false, error: err.message };
  }
});

// IPC: 停止TTS
ipcMain.handle('tts-stop', async () => {
  if (ttsProcess) {
    ttsProcess.kill();
    ttsProcess = null;
  }
  // 清理临时文件
  if (ttsAudioPath && fs.existsSync(ttsAudioPath)) {
    try {
      fs.unlinkSync(ttsAudioPath);
    } catch (e) {
      /* ignore */
    }
    ttsAudioPath = null;
  }
  return true;
});

// IPC: 检查 edge-tts 是否可用及版本
ipcMain.handle('tts-check', async () => {
  const info = await checkEdgeTTSVersion();
  if (!info.available) {
    return { available: false, error: info.error };
  }
  return {
    available: true,
    version: info.version,
    minRecommendedVersion: MIN_EDGE_TTS_VERSION.join('.'),
    versionOk: versionGte(info.version, MIN_EDGE_TTS_VERSION),
  };
});

// 应用退出时清理TTS临时文件
app.on('before-quit', () => {
  if (ttsProcess) {
    ttsProcess.kill();
  }
  if (ttsAudioPath && fs.existsSync(ttsAudioPath)) {
    try {
      fs.unlinkSync(ttsAudioPath);
    } catch (e) {
      /* ignore */
    }
  }
});

// PDF导出功能
ipcMain.handle('export-pdf', async (event, paperHTML, answerHTML) => {
  try {
    const { BrowserWindow } = require('electron');
    const { dialog } = require('electron');

    // 选择保存路径
    const result = await dialog.showSaveDialog(mainWindow, {
      title: '保存试卷PDF',
      defaultPath: `试卷_${new Date().toISOString().split('T')[0]}.pdf`,
      filters: [{ name: 'PDF文件', extensions: ['pdf'] }],
    });

    if (result.canceled) return { success: false, error: '已取消' };

    // 创建隐藏窗口渲染试卷
    const printWin = new BrowserWindow({
      show: false,
      width: 800,
      height: 1100,
      webPreferences: { nodeIntegration: false, contextIsolation: true },
    });

    const fullHTML = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>试卷</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Noto Sans SC', 'SimSun', '宋体', sans-serif; font-size: 14px; line-height: 1.8; color: #333; padding: 20px; }
  .exam-paper { max-width: 760px; margin: 0 auto; }
  .exam-paper-header { text-align: center; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 2px solid #333; }
  .exam-school-info { font-size: 12px; color: #666; margin-bottom: 5px; }
  .exam-school-info span { margin: 0 10px; }
  .exam-title { font-size: 22px; font-weight: bold; margin: 10px 0; }
  .exam-meta { font-size: 13px; color: #555; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
  .exam-notice { background: #f9f9f9; padding: 10px 15px; border-radius: 5px; margin-bottom: 20px; font-size: 13px; }
  .exam-section { margin-bottom: 25px; }
  .exam-section-title { font-size: 16px; font-weight: bold; margin-bottom: 12px; padding-bottom: 5px; border-bottom: 1px solid #ddd; }
  .exam-question { margin-bottom: 15px; page-break-inside: avoid; }
  .exam-q-header { display: flex; align-items: baseline; gap: 5px; margin-bottom: 5px; }
  .exam-q-number { font-weight: bold; }
  .exam-q-score { font-size: 12px; color: #888; }
  .exam-q-text { font-size: 14px; }
  .exam-char-large { font-size: 20px; letter-spacing: 3px; }
  .exam-poetry { font-size: 16px; letter-spacing: 2px; line-height: 2.2; }
  .exam-options { margin-top: 8px; padding-left: 20px; }
  .exam-option { margin-bottom: 5px; }
  .exam-option-label { font-weight: bold; margin-right: 5px; }
  .exam-q-hint { font-size: 12px; color: #888; margin-top: 5px; }
  .exam-essay-lines { margin-top: 10px; }
  .exam-essay-line { border-bottom: 1px solid #ccc; height: 30px; margin-bottom: 5px; }
  .exam-answer-sheet { page-break-before: always; margin-top: 30px; padding-top: 20px; border-top: 2px dashed #999; }
  .exam-answer-title { text-align: center; font-size: 18px; margin-bottom: 15px; }
  .exam-answer-section { margin-bottom: 15px; }
  .exam-answer-section h4 { font-size: 14px; margin-bottom: 8px; color: #555; }
  .exam-answer-item { margin-bottom: 5px; font-size: 13px; }
  .exam-answer-num { font-weight: bold; margin-right: 5px; }
  .exam-answer-val { color: #e74c3c; font-weight: bold; margin-right: 8px; }
  .exam-answer-explain { color: #666; font-size: 12px; }
</style>
</head><body>${paperHTML}${answerHTML}</body></html>`;

    await printWin.loadURL('data:text/html;charset=utf-8,' + encodeURIComponent(fullHTML));

    const pdfData = await printWin.webContents.printToPDF({
      pageSize: 'A4',
      printBackground: true,
      margins: { top: 10, bottom: 10, left: 15, right: 15 },
    });

    require('fs').writeFileSync(result.filePath, pdfData);
    printWin.close();

    log('INFO', 'PDF导出成功', result.filePath);
    return { success: true, path: result.filePath };
  } catch (err) {
    log('ERROR', 'PDF导出失败', err.message);
    return { success: false, error: err.message };
  }
});

// ============ 应用启动 ============
app.whenReady().then(() => {
  log('INFO', '应用启动', {
    version: app.getVersion(),
    platform: process.platform,
    arch: process.arch,
    electron: process.versions.electron,
    node: process.versions.node,
  });

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// ============ 第二次启动时，聚焦已有窗口 ============
app.on('second-instance', () => {
  if (mainWindow) {
    if (mainWindow.isMinimized()) {
      mainWindow.restore();
    }
    mainWindow.show();
    mainWindow.focus();
  }
});

app.on('window-all-closed', () => {
  log('INFO', '所有窗口已关闭');
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('before-quit', () => {
  log('INFO', '应用即将退出');
});

// 捕获未处理的错误
process.on('uncaughtException', error => {
  log('ERROR', '未捕获的异常', error.message);
});

process.on('unhandledRejection', reason => {
  log('ERROR', '未处理的Promise拒绝', String(reason));
});

log('INFO', '主进程初始化完成');
