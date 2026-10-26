const { contextBridge, ipcRenderer } = require('electron');

// 暴露安全的API给渲染进程
contextBridge.exposeInMainWorld('electronAPI', {
  // 应用信息
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  getAppPath: () => ipcRenderer.invoke('get-app-path'),

  // 日志功能
  getLogPath: () => ipcRenderer.invoke('get-log-path'),
  writeLog: (level, message, data) => ipcRenderer.invoke('write-log', level, message, data),

  // PDF导出
  exportPDF: (paperHTML, answerHTML) => ipcRenderer.invoke('export-pdf', paperHTML, answerHTML),

  // TTS相关功能 - Edge TTS
  ttsSynthesize: (text, options) => ipcRenderer.invoke('tts-synthesize', text, options),
  ttsStop: () => ipcRenderer.invoke('tts-stop'),
  ttsCheck: () => ipcRenderer.invoke('tts-check'),
  // 保留旧接口兼容
  speakText: (text, options) => ipcRenderer.invoke('tts-synthesize', text, options),
  stopSpeaking: () => ipcRenderer.invoke('tts-stop'),
  pauseSpeaking: () => Promise.resolve(),
  resumeSpeaking: () => Promise.resolve(),

  // 文件操作
  readFile: filePath => ipcRenderer.invoke('read-file', filePath),
  writeFile: (filePath, content) => ipcRenderer.invoke('write-file', filePath, content),

  // 数据存储
  saveData: (key, data) => ipcRenderer.invoke('save-data', key, data),
  loadData: key => ipcRenderer.invoke('load-data', key),

  // 窗口控制
  minimizeWindow: () => ipcRenderer.invoke('minimize-window'),
  maximizeWindow: () => ipcRenderer.invoke('maximize-window'),
  closeWindow: () => ipcRenderer.invoke('close-window'),

  // 事件监听
  onTTSProgress: callback => {
    ipcRenderer.on('tts-progress', (event, data) => callback(data));
  },
  onTTSError: callback => {
    ipcRenderer.on('tts-error', (event, error) => callback(error));
  },
});
