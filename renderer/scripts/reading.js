// 语文小霸王 - 阅读界面模块

// 阅读状态管理
const ReadingState = {
  fontSize: 16,
  lineHeight: 1.8,
  theme: 'default',
  isFullscreen: false,
  bookmarks: [],
  notes: [],
  highlights: [],
  currentScrollPosition: 0,
  readingTime: 0,
  readingStartTime: null,
};

// 主题配置
const THEMES = {
  default: {
    name: '默认',
    background: '#FFFFFF',
    text: '#333333',
    accent: '#FF6B6B',
  },
  warm: {
    name: '暖色',
    background: '#FFF8F0',
    text: '#5D4E37',
    accent: '#E8A87C',
  },
  cool: {
    name: '冷色',
    background: '#F0F8FF',
    text: '#2C3E50',
    accent: '#3498DB',
  },
  night: {
    name: '夜间',
    background: '#1A1A2E',
    text: '#E6E6E6',
    accent: '#E94560',
  },
  green: {
    name: '护眼',
    background: '#CCE8CF',
    text: '#2D5F2D',
    accent: '#4CAF50',
  },
};

// 初始化阅读模块
function initReading() {
  console.log('阅读模块初始化...');

  // 绑定阅读界面事件
  bindReadingEvents();

  // 加载阅读设置
  loadReadingSettings();

  // 初始化阅读统计
  initReadingStats();

  console.log('阅读模块初始化完成');
}

// 绑定阅读事件
function bindReadingEvents() {
  // 返回按钮
  const btnBack = document.getElementById('btn-back-to-learn');
  if (btnBack) {
    btnBack.addEventListener('click', () => {
      saveReadingProgress();
      switchSection('learn');
    });
  }

  // 字体大小按钮
  const btnFontSize = document.getElementById('btn-font-size');
  if (btnFontSize) {
    btnFontSize.addEventListener('click', toggleFontSizeMenu);
  }

  // 主题按钮
  const btnTheme = document.getElementById('btn-theme');
  if (btnTheme) {
    btnTheme.addEventListener('click', toggleThemeMenu);
  }

  // 书签按钮
  const btnBookmark = document.getElementById('btn-bookmark');
  if (btnBookmark) {
    btnBookmark.addEventListener('click', addBookmark);
  }

  // 查词按钮
  const btnDictionary = document.getElementById('btn-dictionary');
  if (btnDictionary) {
    btnDictionary.addEventListener('click', openDictionary);
  }

  // 笔记按钮
  const btnNotes = document.getElementById('btn-notes');
  if (btnNotes) {
    btnNotes.addEventListener('click', openNotes);
  }

  // 标注按钮
  const btnHighlight = document.getElementById('btn-highlight');
  if (btnHighlight) {
    btnHighlight.addEventListener('click', toggleHighlightMode);
  }

  // 阅读文本区域事件
  const readingText = document.getElementById('reading-text');
  if (readingText) {
    // 文本选择事件
    readingText.addEventListener('mouseup', handleTextSelection);

    // 滚动事件
    readingText.addEventListener('scroll', handleScroll);
  }
}

// 切换字体大小菜单
function toggleFontSizeMenu() {
  const menu = document.getElementById('font-size-menu');
  if (menu) {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  } else {
    createFontSizeMenu();
  }
}

// 创建字体大小菜单
function createFontSizeMenu() {
  const menu = document.createElement('div');
  menu.id = 'font-size-menu';
  menu.className = 'dropdown-menu';
  menu.innerHTML = `
    <div class="menu-content">
      <h4>字体大小</h4>
      <div class="font-size-options">
        <button class="btn-size" data-size="14">小</button>
        <button class="btn-size" data-size="16">中</button>
        <button class="btn-size" data-size="18">大</button>
        <button class="btn-size" data-size="20">特大</button>
      </div>
      <div class="line-height-options">
        <h4>行间距</h4>
        <button class="btn-height" data-height="1.5">紧凑</button>
        <button class="btn-height" data-height="1.8">标准</button>
        <button class="btn-height" data-height="2.0">宽松</button>
      </div>
    </div>
  `;

  // 添加样式
  menu.style.cssText = `
    position: absolute;
    top: 60px;
    right: 100px;
    background: var(--bg-card);
    border-radius: var(--border-radius-medium);
    box-shadow: var(--shadow-heavy);
    padding: var(--spacing-md);
    z-index: 1000;
    min-width: 200px;
  `;

  // 绑定事件
  menu.querySelectorAll('.btn-size').forEach(btn => {
    btn.addEventListener('click', () => {
      const size = parseInt(btn.dataset.size);
      setFontSize(size);
      menu.remove();
    });
  });

  menu.querySelectorAll('.btn-height').forEach(btn => {
    btn.addEventListener('click', () => {
      const height = parseFloat(btn.dataset.height);
      setLineHeight(height);
      menu.remove();
    });
  });

  document.body.appendChild(menu);

  // 点击外部关闭菜单
  setTimeout(() => {
    document.addEventListener('click', function closeMenu(e) {
      if (!menu.contains(e.target) && e.target.id !== 'btn-font-size') {
        menu.remove();
        document.removeEventListener('click', closeMenu);
      }
    });
  }, 100);
}

// 设置字体大小
function setFontSize(size) {
  ReadingState.fontSize = size;
  const readingText = document.getElementById('reading-text');
  if (readingText) {
    readingText.style.fontSize = `${size}px`;
  }
  saveReadingSettings();
  showNotification(`字体大小已设置为${size}px`, 'success');
}

// 设置行间距
function setLineHeight(height) {
  ReadingState.lineHeight = height;
  const readingText = document.getElementById('reading-text');
  if (readingText) {
    readingText.style.lineHeight = height;
  }
  saveReadingSettings();
  showNotification(`行间距已设置为${height}`, 'success');
}

// 切换主题菜单
function toggleThemeMenu() {
  const menu = document.getElementById('theme-menu');
  if (menu) {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  } else {
    createThemeMenu();
  }
}

// 创建主题菜单
function createThemeMenu() {
  const menu = document.createElement('div');
  menu.id = 'theme-menu';
  menu.className = 'dropdown-menu';
  menu.innerHTML = `
    <div class="menu-content">
      <h4>阅读主题</h4>
      <div class="theme-options">
        ${Object.entries(THEMES)
          .map(
            ([key, theme]) => `
          <button class="btn-theme ${key === ReadingState.theme ? 'active' : ''}" data-theme="${key}">
            <span class="theme-preview" style="background: ${theme.background}; color: ${theme.text};">Aa</span>
            <span class="theme-name">${theme.name}</span>
          </button>
        `
          )
          .join('')}
      </div>
    </div>
  `;

  // 添加样式
  menu.style.cssText = `
    position: absolute;
    top: 60px;
    right: 60px;
    background: var(--bg-card);
    border-radius: var(--border-radius-medium);
    box-shadow: var(--shadow-heavy);
    padding: var(--spacing-md);
    z-index: 1000;
    min-width: 250px;
  `;

  // 绑定事件
  menu.querySelectorAll('.btn-theme').forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme;
      setTheme(theme);
      menu.remove();
    });
  });

  document.body.appendChild(menu);

  // 点击外部关闭菜单
  setTimeout(() => {
    document.addEventListener('click', function closeMenu(e) {
      if (!menu.contains(e.target) && e.target.id !== 'btn-theme') {
        menu.remove();
        document.removeEventListener('click', closeMenu);
      }
    });
  }, 100);
}

// 设置主题
function setTheme(themeName) {
  const theme = THEMES[themeName];
  if (!theme) return;

  ReadingState.theme = themeName;

  const readingText = document.getElementById('reading-text');
  const readingView = document.querySelector('.reading-view');

  if (readingText) {
    readingText.style.backgroundColor = theme.background;
    readingText.style.color = theme.text;
  }

  if (readingView) {
    readingView.style.backgroundColor = theme.background;
  }

  // 更新CSS变量
  document.documentElement.style.setProperty('--reading-bg', theme.background);
  document.documentElement.style.setProperty('--reading-text', theme.text);
  document.documentElement.style.setProperty('--reading-accent', theme.accent);

  saveReadingSettings();
  showNotification(`已切换到${theme.name}主题`, 'success');
}

// 添加书签
function addBookmark() {
  const readingText = document.getElementById('reading-text');
  if (!readingText) return;

  const scrollTop = readingText.scrollTop;
  const scrollHeight = readingText.scrollHeight;
  const clientHeight = readingText.clientHeight;

  const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;

  const bookmark = {
    id: Date.now(),
    title: AppState.content.currentTitle,
    position: scrollTop,
    progress: progress.toFixed(1),
    timestamp: new Date().toISOString(),
    contentId: AppState.content.currentId,
  };

  ReadingState.bookmarks.push(bookmark);
  saveReadingSettings();

  showNotification(`书签已添加（${progress.toFixed(1)}%）`, 'success');
  console.log('添加书签:', bookmark);
}

// 打开词典
function openDictionary() {
  const selectedText = getSelectedText();
  if (selectedText) {
    showDictionaryPopup(selectedText);
  } else {
    showNotification('请先选择要查询的词语', 'info');
  }
}

// 获取选中的文本
function getSelectedText() {
  const selection = window.getSelection();
  if (!selection.rangeCount) return '';

  // 克隆选区内容，移除拼音标注（<rt>标签），避免TTS读出拼音
  const range = selection.getRangeAt(0);
  const fragment = range.cloneContents();
  const div = document.createElement('div');
  div.appendChild(fragment);
  // 移除 <rt> 标签中的拼音
  div.querySelectorAll('rt').forEach(el => el.remove());
  // 移除 <rp> 标签（ruby fallback）
  div.querySelectorAll('rp').forEach(el => el.remove());
  return div.textContent.trim();
}

// 显示词典弹窗
function showDictionaryPopup(word) {
  // 移除现有的弹窗
  const existingPopup = document.getElementById('dictionary-popup');
  if (existingPopup) {
    existingPopup.remove();
  }

  // 创建词典弹窗
  const popup = document.createElement('div');
  popup.id = 'dictionary-popup';
  popup.className = 'dictionary-popup';
  popup.innerHTML = `
    <div class="popup-header">
      <h3>词典查询</h3>
      <button class="btn-close" onclick="this.parentElement.parentElement.remove()">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <div class="popup-content">
      <div class="word-info">
        <h4>${word}</h4>
        <p class="pinyin">正在查询拼音...</p>
      </div>
      <div class="word-definition">
        <h5>释义</h5>
        <p>正在查询释义...</p>
      </div>
      <div class="word-example">
        <h5>例句</h5>
        <p>正在查询例句...</p>
      </div>
    </div>
    <div class="popup-footer">
      <button class="btn-add-note" onclick="addWordToNotes('${word}')">
        <i class="fas fa-plus"></i> 添加到笔记
      </button>
    </div>
  `;

  // 添加样式
  popup.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--bg-card);
    border-radius: var(--border-radius-large);
    box-shadow: var(--shadow-heavy);
    padding: var(--spacing-lg);
    z-index: 1001;
    min-width: 300px;
    max-width: 400px;
  `;

  document.body.appendChild(popup);

  // 模拟查询（实际应用中应该调用词典API）
  setTimeout(() => {
    const pinyin = popup.querySelector('.pinyin');
    const definition = popup.querySelector('.word-definition p');
    const example = popup.querySelector('.word-example p');

    if (pinyin) pinyin.textContent = '拼音查询功能开发中';
    if (definition) definition.textContent = '释义查询功能开发中';
    if (example) example.textContent = '例句查询功能开发中';
  }, 500);

  console.log('查询词语:', word);
}

// 添加词语到笔记
function addWordToNotes(word) {
  const note = {
    id: Date.now(),
    word: word,
    timestamp: new Date().toISOString(),
    contentId: AppState.content.currentId,
  };

  ReadingState.notes.push(note);
  saveReadingSettings();

  showNotification(`"${word}"已添加到笔记`, 'success');
}

// 打开笔记
function openNotes() {
  showNotification('笔记功能开发中...', 'info');
}

// 切换标注模式
function toggleHighlightMode() {
  const btn = document.getElementById('btn-highlight');
  if (btn) {
    btn.classList.toggle('active');
    const isActive = btn.classList.contains('active');
    showNotification(isActive ? '标注模式已开启' : '标注模式已关闭', 'info');
  }
}

// 处理文本选择
function handleTextSelection() {
  const selectedText = getSelectedText();
  if (selectedText && selectedText.length > 0) {
    // 显示选择工具栏
    showSelectionToolbar(selectedText);
  }
}

// 显示选择工具栏
function showSelectionToolbar(text) {
  // 移除现有的工具栏
  const existingToolbar = document.getElementById('selection-toolbar');
  if (existingToolbar) {
    existingToolbar.remove();
  }

  // 获取选择位置
  const selection = window.getSelection();
  if (selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);
  const rect = range.getBoundingClientRect();

  // 创建工具栏
  const toolbar = document.createElement('div');
  toolbar.id = 'selection-toolbar';
  toolbar.className = 'selection-toolbar';
  toolbar.innerHTML = `
    <button class="btn-toolbar" onclick="speakSelectedText('${text.replace(/'/g, "\\'")}')">
      <i class="fas fa-volume-up"></i>
    </button>
    <button class="btn-toolbar" onclick="lookupWord('${text.replace(/'/g, "\\'")}')">
      <i class="fas fa-search"></i>
    </button>
    <button class="btn-toolbar" onclick="highlightText()">
      <i class="fas fa-highlighter"></i>
    </button>
    <button class="btn-toolbar" onclick="copyText('${text.replace(/'/g, "\\'")}')">
      <i class="fas fa-copy"></i>
    </button>
  `;

  // 添加样式
  toolbar.style.cssText = `
    position: fixed;
    top: ${rect.top - 50}px;
    left: ${rect.left + rect.width / 2}px;
    transform: translateX(-50%);
    background: var(--text-primary);
    color: var(--text-white);
    border-radius: var(--border-radius-small);
    padding: var(--spacing-xs) var(--spacing-sm);
    display: flex;
    gap: var(--spacing-xs);
    z-index: 1000;
    box-shadow: var(--shadow-medium);
  `;

  document.body.appendChild(toolbar);

  // 3秒后自动移除
  setTimeout(() => {
    toolbar.remove();
  }, 3000);
}

// 朗读选中文本
function speakSelectedText(text) {
  if (text) {
    speakText(text);
  }
}

// 查询词语
function lookupWord(word) {
  showDictionaryPopup(word);
}

// 高亮文本
function highlightText() {
  const selection = window.getSelection();
  if (selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);
  const highlightSpan = document.createElement('span');
  highlightSpan.className = 'user-highlight';
  highlightSpan.style.cssText = `
    background-color: var(--accent-color);
    padding: 2px 4px;
    border-radius: 4px;
  `;

  range.surroundContents(highlightSpan);
  selection.removeAllRanges();

  // 保存高亮
  ReadingState.highlights.push({
    id: Date.now(),
    text: highlightSpan.textContent,
    timestamp: new Date().toISOString(),
    contentId: AppState.content.currentId,
  });

  saveReadingSettings();
  showNotification('文本已高亮', 'success');
}

// 复制文本
function copyText(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      showNotification('文本已复制到剪贴板', 'success');
    })
    .catch(() => {
      showNotification('复制失败', 'error');
    });
}

// 处理滚动
function handleScroll() {
  const readingText = document.getElementById('reading-text');
  if (!readingText) return;

  ReadingState.currentScrollPosition = readingText.scrollTop;

  // 更新阅读进度
  updateReadingProgress();
}

// 更新阅读进度
function updateReadingProgress() {
  const readingText = document.getElementById('reading-text');
  if (!readingText) return;

  const scrollTop = readingText.scrollTop;
  const scrollHeight = readingText.scrollHeight;
  const clientHeight = readingText.clientHeight;

  const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;

  // 更新进度条
  const progressBar = document.querySelector('.reading-progress-bar .progress');
  if (progressBar) {
    progressBar.style.width = `${progress}%`;
  }

  // 更新进度文本
  const progressText = document.querySelector('.reading-progress-text');
  if (progressText) {
    progressText.textContent = `${progress.toFixed(1)}%`;
  }
}

// 保存阅读进度
function saveReadingProgress() {
  const progress = {
    contentId: AppState.content.currentId,
    scrollPosition: ReadingState.currentScrollPosition,
    timestamp: new Date().toISOString(),
    readingTime: ReadingState.readingTime,
  };

  localStorage.setItem(`reading-progress-${AppState.content.currentId}`, JSON.stringify(progress));
  console.log('阅读进度已保存');
}

// 加载阅读进度
function loadReadingProgress(contentId) {
  const savedProgress = localStorage.getItem(`reading-progress-${contentId}`);
  if (savedProgress) {
    try {
      const progress = JSON.parse(savedProgress);
      const readingText = document.getElementById('reading-text');
      if (readingText && progress.scrollPosition) {
        setTimeout(() => {
          readingText.scrollTop = progress.scrollPosition;
        }, 100);
      }
      console.log('阅读进度已加载');
    } catch (error) {
      console.error('加载阅读进度失败:', error);
    }
  }
}

// 初始化阅读统计
function initReadingStats() {
  ReadingState.readingStartTime = new Date();

  // 每分钟更新阅读时间
  setInterval(() => {
    if (ReadingState.readingStartTime) {
      const now = new Date();
      ReadingState.readingTime = Math.floor((now - ReadingState.readingStartTime) / 1000 / 60);
    }
  }, 60000);
}

// 加载阅读设置
function loadReadingSettings() {
  const savedSettings = localStorage.getItem('yuwen-reading-settings');
  if (savedSettings) {
    try {
      const settings = JSON.parse(savedSettings);
      Object.assign(ReadingState, settings);

      // 应用设置
      applyReadingSettings();

      console.log('阅读设置加载成功');
    } catch (error) {
      console.error('加载阅读设置失败:', error);
    }
  }
}

// 保存阅读设置
function saveReadingSettings() {
  try {
    const settings = {
      fontSize: ReadingState.fontSize,
      lineHeight: ReadingState.lineHeight,
      theme: ReadingState.theme,
      bookmarks: ReadingState.bookmarks,
      notes: ReadingState.notes,
      highlights: ReadingState.highlights,
    };
    localStorage.setItem('yuwen-reading-settings', JSON.stringify(settings));
    console.log('阅读设置保存成功');
  } catch (error) {
    console.error('保存阅读设置失败:', error);
  }
}

// 应用阅读设置
function applyReadingSettings() {
  // 应用字体大小
  setFontSize(ReadingState.fontSize);

  // 应用行间距
  setLineHeight(ReadingState.lineHeight);

  // 应用主题
  setTheme(ReadingState.theme);
}

// 导出阅读模块
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ReadingState,
    THEMES,
    initReading,
    setFontSize,
    setLineHeight,
    setTheme,
    addBookmark,
    openDictionary,
    openNotes,
    toggleHighlightMode,
  };
}

// 页面加载完成后初始化阅读模块
document.addEventListener('DOMContentLoaded', () => {
  // 延迟初始化，确保其他模块已加载
  setTimeout(initReading, 200);
});
