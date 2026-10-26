// 语文小霸王 - 主应用逻辑

// ============ 渲染进程日志系统 ============
const Logger = {
  logs: [],

  log(level, message, data = null) {
    const entry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
    };
    this.logs.push(entry);

    // 输出到控制台
    const consoleMsg = `[${level}] ${message}`;
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

    // 尝试发送到主进程
    if (window.electronAPI && window.electronAPI.writeLog) {
      window.electronAPI.writeLog(level, message, data).catch(() => {});
    }
  },

  info(message, data) {
    this.log('INFO', message, data);
  },
  warn(message, data) {
    this.log('WARN', message, data);
  },
  error(message, data) {
    this.log('ERROR', message, data);
  },

  getLogs() {
    return this.logs;
  },
  clearLogs() {
    this.logs = [];
  },
};

// ============ 模块自检系统 ============
const ModuleChecker = {
  modules: {},

  register(name, checkFn) {
    this.modules[name] = { check: checkFn, status: 'pending', error: null };
  },

  async checkAll() {
    Logger.info('开始模块自检...');
    const results = {};

    for (const [name, module] of Object.entries(this.modules)) {
      try {
        const result = await module.check();
        module.status = result ? 'ok' : 'fail';
        results[name] = { status: module.status };
        Logger.info(`模块 ${name}: ${module.status}`);
      } catch (err) {
        module.status = 'error';
        module.error = err.message;
        results[name] = { status: 'error', error: err.message };
        Logger.error(`模块 ${name} 检查失败`, err.message);
      }
    }

    Logger.info('模块自检完成', results);
    return results;
  },

  getStatus() {
    const status = {};
    for (const [name, module] of Object.entries(this.modules)) {
      status[name] = { status: module.status, error: module.error };
    }
    return status;
  },
};

// ============ 数据合并 ============
// 将16个数据文件合并为统一的CONTENT_DATA对象（每班80篇）
const CONTENT_DATA = {};

// 二年级
if (typeof CONTENT_GRADE_2 !== 'undefined') CONTENT_DATA[2] = [...CONTENT_GRADE_2];
if (typeof CONTENT_GRADE_2_EXTRA !== 'undefined')
  CONTENT_DATA[2] = [...(CONTENT_DATA[2] || []), ...CONTENT_GRADE_2_EXTRA];
if (typeof CONTENT_GRADE_2_EXTRA2 !== 'undefined')
  CONTENT_DATA[2] = [...(CONTENT_DATA[2] || []), ...CONTENT_GRADE_2_EXTRA2];
if (typeof CONTENT_GRADE_2_EXTRA3 !== 'undefined')
  CONTENT_DATA[2] = [...(CONTENT_DATA[2] || []), ...CONTENT_GRADE_2_EXTRA3];

// 三年级
if (typeof CONTENT_GRADE_3 !== 'undefined') CONTENT_DATA[3] = [...CONTENT_GRADE_3];
if (typeof CONTENT_GRADE_3_EXTRA !== 'undefined')
  CONTENT_DATA[3] = [...(CONTENT_DATA[3] || []), ...CONTENT_GRADE_3_EXTRA];
if (typeof CONTENT_GRADE_3_EXTRA2 !== 'undefined')
  CONTENT_DATA[3] = [...(CONTENT_DATA[3] || []), ...CONTENT_GRADE_3_EXTRA2];
if (typeof CONTENT_GRADE_3_EXTRA3 !== 'undefined')
  CONTENT_DATA[3] = [...(CONTENT_DATA[3] || []), ...CONTENT_GRADE_3_EXTRA3];

// 四年级
if (typeof CONTENT_GRADE_4 !== 'undefined') CONTENT_DATA[4] = [...CONTENT_GRADE_4];
if (typeof CONTENT_GRADE_4_EXTRA !== 'undefined')
  CONTENT_DATA[4] = [...(CONTENT_DATA[4] || []), ...CONTENT_GRADE_4_EXTRA];
if (typeof CONTENT_GRADE_4_EXTRA2 !== 'undefined')
  CONTENT_DATA[4] = [...(CONTENT_DATA[4] || []), ...CONTENT_GRADE_4_EXTRA2];
if (typeof CONTENT_GRADE_4_EXTRA3 !== 'undefined')
  CONTENT_DATA[4] = [...(CONTENT_DATA[4] || []), ...CONTENT_GRADE_4_EXTRA3];

// 五年级
if (typeof CONTENT_GRADE_5 !== 'undefined') CONTENT_DATA[5] = [...CONTENT_GRADE_5];
if (typeof CONTENT_GRADE_5_EXTRA !== 'undefined')
  CONTENT_DATA[5] = [...(CONTENT_DATA[5] || []), ...CONTENT_GRADE_5_EXTRA];
if (typeof CONTENT_GRADE_5_EXTRA2 !== 'undefined')
  CONTENT_DATA[5] = [...(CONTENT_DATA[5] || []), ...CONTENT_GRADE_5_EXTRA2];
if (typeof CONTENT_GRADE_5_EXTRA3 !== 'undefined')
  CONTENT_DATA[5] = [...(CONTENT_DATA[5] || []), ...CONTENT_GRADE_5_EXTRA3];

// ============ 状态管理 ============
const AppState = {
  currentSection: 'home',
  currentGrade: 2,
  currentContent: null,
  practice: {
    currentQuestion: 0,
    answers: {},
    submitted: false,
  },
  stats: {
    totalMinutes: 0,
    lessonsCompleted: 0,
    totalQuestions: 0,
    correctAnswers: 0,
    streak: 0,
    lastStudyDate: null,
  },
};

// ============ 拼音渲染 ============
function renderPinyin(text) {
  return text.replace(/\{([^|]+)\|([^}]+)\}/g, '<ruby class="pinyin-word">$1<rt>$2</rt></ruby>');
}

// ============ 初始化 ============
function initApp() {
  Logger.info('应用初始化开始...');

  // 注册模块检查
  registerModuleChecks();

  loadStats();
  bindEvents();
  updateTime();
  setInterval(updateTime, 1000);
  updateGradeCounts();

  Logger.info('初始化游戏化系统...');
  initGamification();
  initGamePanels();

  Logger.info('初始化护眼系统...');
  initEyeCare();
  initEyeCarePanel();

  Logger.info('初始化成语纵横游戏...');
  initChengYuGame();

  Logger.info('初始化AI智能练习...');
  initSmartQuiz();

  Logger.info('初始化自动组卷模块...');
  initExamPrint();

  Logger.info('应用初始化完成');

  // 运行模块自检
  setTimeout(async () => {
    const results = await ModuleChecker.checkAll();
    showModuleStatus(results);
  }, 1000);
}

// ============ 注册模块检查 ============
function registerModuleChecks() {
  // 检查内容数据
  ModuleChecker.register('CONTENT_DATA', () => {
    return CONTENT_DATA && Object.keys(CONTENT_DATA).length > 0;
  });

  // 检查成语数据
  ModuleChecker.register('CHENGYU_DATABASE', () => {
    return typeof CHENGYU_DATABASE !== 'undefined' && CHENGYU_DATABASE.length > 0;
  });

  // 检查游戏化系统
  ModuleChecker.register('GameData', () => {
    return typeof GameData !== 'undefined';
  });

  // 检查护眼系统
  ModuleChecker.register('EyeCareData', () => {
    return typeof EyeCareData !== 'undefined';
  });

  // 检查成语纵横游戏
  ModuleChecker.register('ChengYuGameState', () => {
    return typeof ChengYuGameState !== 'undefined';
  });

  // 检查成语消消乐
  ModuleChecker.register('ChengYuMatchState', () => {
    return typeof ChengYuMatchState !== 'undefined';
  });

  // 检查智能练习
  ModuleChecker.register('WrongAnswerBank', () => {
    return typeof WrongAnswerBank !== 'undefined';
  });

  // 检查组卷模块
  ModuleChecker.register('ExamPrintState', () => {
    return typeof ExamPrintState !== 'undefined';
  });

  // 检查TTS
  ModuleChecker.register('TTS', () => {
    return typeof EdgeTTS !== 'undefined' || typeof speakText === 'function';
  });
}

// ============ 显示模块状态 ============
function showModuleStatus(results) {
  Logger.info('模块状态报告', results);

  const failedModules = Object.entries(results)
    .filter(([_, r]) => r.status !== 'ok')
    .map(([name, _]) => name);

  if (failedModules.length > 0) {
    Logger.warn('以下模块检查失败: ' + failedModules.join(', '));
  } else {
    Logger.info('所有模块检查通过！');
  }
}

// ============ 初始化护眼面板 ============
function initEyeCarePanel() {
  const panel = document.getElementById('eyecare-panel');
  if (panel) {
    panel.innerHTML = getEyeCarePanelHTML();
  }
}

// ============ 初始化游戏化面板 ============
function initGamePanels() {
  // 渲染签到面板
  const signPanel = document.getElementById('sign-panel');
  if (signPanel) {
    signPanel.innerHTML = getSignPanelHTML();
  }

  // 渲染成长树面板
  const treePanel = document.getElementById('tree-panel');
  if (treePanel) {
    treePanel.innerHTML = getTreePanelHTML();
  }

  // 更新今日任务状态
  updateDailyTasks();

  // 渲染最近徽章
  updateRecentBadges();

  // 更新等级显示
  updateLevelDisplay();
}

// ============ 更新今日任务 ============
function updateDailyTasks() {
  const today = new Date().toDateString();

  // 签到任务
  const taskSign = document.getElementById('task-sign');
  if (taskSign) {
    if (GameData.lastSignDate === today) {
      taskSign.classList.add('completed');
      taskSign.querySelector('.task-status').textContent = '✅';
    }
  }

  // 完成课文任务
  const taskLesson = document.getElementById('task-lesson');
  if (taskLesson) {
    const todayLessons = getTodayLessons();
    if (todayLessons > 0) {
      taskLesson.classList.add('completed');
      taskLesson.querySelector('.task-status').textContent = '✅';
    }
  }
}

// ============ 获取今日完成的课文数 ============
function getTodayLessons() {
  const saved = localStorage.getItem('yuwen-today-lessons');
  if (saved) {
    const data = JSON.parse(saved);
    if (data.date === new Date().toDateString()) {
      return data.count;
    }
  }
  return 0;
}

// ============ 记录今日完成课文 ============
function recordTodayLesson() {
  const today = new Date().toDateString();
  const saved = localStorage.getItem('yuwen-today-lessons');
  let count = 0;

  if (saved) {
    const data = JSON.parse(saved);
    if (data.date === today) {
      count = data.count;
    }
  }

  count++;
  localStorage.setItem('yuwen-today-lessons', JSON.stringify({ date: today, count }));
  return count;
}

// ============ 更新最近徽章 ============
function updateRecentBadges() {
  const container = document.getElementById('badges-scroll');
  if (!container) return;

  if (GameData.badges.length === 0) {
    container.innerHTML = '<div class="no-badges">完成课文学习，解锁更多徽章！</div>';
    return;
  }

  const recentBadges = GameData.badges.slice(-5).reverse();
  const badgesHTML = recentBadges
    .map(badgeId => {
      const badge = BADGE_CONFIG.find(b => b.id === badgeId);
      if (!badge) return '';
      return `
      <div class="badge-item unlocked">
        <div class="badge-icon">${badge.icon}</div>
        <div class="badge-name">${badge.name}</div>
      </div>
    `;
    })
    .join('');

  container.innerHTML = badgesHTML;
}

// ============ 显示成就中心 ============
function showAchievements() {
  // 移除现有模态框
  const existing = document.getElementById('achievements-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'achievements-modal';
  modal.className = 'achievements-modal';
  modal.innerHTML = `
    <div class="achievements-content">
      <div class="achievements-header">
        <h2>🏆 成就中心</h2>
        <button class="btn-close-modal" onclick="document.getElementById('achievements-modal').remove()">
          <i class="fas fa-times"></i>
        </button>
      </div>
      
      <div class="achievements-stats">
        <div class="achie-stat">
          <span class="achie-stat-value">${GameData.level}</span>
          <span class="achie-stat-label">等级</span>
        </div>
        <div class="achie-stat">
          <span class="achie-stat-value">${GameData.points}</span>
          <span class="achie-stat-label">积分</span>
        </div>
        <div class="achie-stat">
          <span class="achie-stat-value">${GameData.badges.length}</span>
          <span class="achie-stat-label">徽章</span>
        </div>
        <div class="achie-stat">
          <span class="achie-stat-value">${GameData.streak}</span>
          <span class="achie-stat-label">连续天数</span>
        </div>
      </div>
      
      ${getBadgesPanelHTML()}
    </div>
  `;

  // 点击背景关闭
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.remove();
  });

  document.body.appendChild(modal);
}

// ============ 事件绑定 ============
function bindEvents() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      switchSection(item.dataset.section);
    });
  });

  document.querySelectorAll('.grade-card').forEach(card => {
    card.addEventListener('click', () => {
      const grade = parseInt(card.dataset.grade);
      AppState.currentGrade = grade;
      document.getElementById('grade-select').value = grade;
      loadContentList(grade);
      switchSection('learn');
    });
  });

  document.getElementById('grade-select').addEventListener('change', e => {
    AppState.currentGrade = parseInt(e.target.value);
    loadContentList(AppState.currentGrade);
  });

  document.getElementById('btn-back-to-learn').addEventListener('click', () => {
    stopTTSIfPlaying();
    switchSection('learn');
  });
  document
    .getElementById('btn-back-to-reading')
    .addEventListener('click', () => switchSection('reading'));
  document
    .getElementById('btn-back-to-explanation')
    .addEventListener('click', () => switchSection('explanation'));

  document.getElementById('btn-go-explanation').addEventListener('click', () => {
    stopTTSIfPlaying();
    showExplanation();
    switchSection('explanation');
  });
  document.getElementById('btn-go-practice').addEventListener('click', () => {
    showPractice();
    switchSection('practice');
  });
}

// ============ 页面切换 ============
function switchSection(sectionName) {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.section === sectionName);
  });
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.toggle('active', section.id === sectionName);
  });
  AppState.currentSection = sectionName;

  // 切换到学习中心时加载内容列表
  if (sectionName === 'learn') {
    loadContentList(AppState.currentGrade);
  }

  // 切换到成语纵横时初始化游戏
  if (sectionName === 'chengyu-game') {
    refreshChengYuGame();
  }

  // 切换到成语消消乐时初始化游戏
  if (sectionName === 'match-game') {
    initMatchGame();
  }

  // 切换到AI智能练习时初始化
  if (sectionName === 'smart-quiz') {
    renderSmartQuiz(AppState.currentGrade);
  }

  // 切换到组卷模块时初始化
  if (sectionName === 'exam-print') {
    renderExamPrint(AppState.currentGrade);
  }
}

// ============ 初始化成语纵横游戏 ============
function initChengYuGame() {
  const puzzle = generateChengYuPuzzle(1);
  renderChengYuGame(puzzle);
}

// ============ 切换成语纵横关卡 ============
function changeChengYuLevel(level) {
  ChengYuGameState.currentLevel = parseInt(level);
  refreshChengYuGame();
}

// ============ 切换AI智能练习年级 ============
function changeSmartQuizGrade(grade) {
  renderSmartQuiz(parseInt(grade));
}

// ============ 课文列表加载 ============
function loadContentList(grade) {
  const grid = document.getElementById('content-grid');
  const lessons = CONTENT_DATA[grade] || [];
  document.getElementById('learn-title').textContent = `${grade}年级 · 每日课文`;

  grid.innerHTML = lessons
    .map(
      lesson => `
    <div class="content-card" data-id="${lesson.id}">
      <div class="card-image">
        ${
          lesson.image
            ? `<img src="${lesson.image}" alt="${lesson.title}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'image-placeholder\\'><i class=\\'fas ${getCategoryIcon(lesson.category)}\\'></i></div>'">`
            : `<div class="image-placeholder"><i class="fas ${getCategoryIcon(lesson.category)}"></i></div>`
        }
        <div class="card-day">第${lesson.day}天</div>
      </div>
      <div class="card-content">
        <h3>${lesson.title}</h3>
        <p>${lesson.author ? lesson.author + ' · ' : ''}${lesson.categoryLabel}</p>
        <div class="card-meta">
          <span class="meta-item"><i class="fas fa-clock"></i> ${lesson.readingTime}分钟</span>
          <span class="meta-item"><i class="fas fa-star"></i> ${lesson.grade}年级</span>
        </div>
      </div>
    </div>
  `
    )
    .join('');

  grid.querySelectorAll('.content-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.id);
      openLesson(id);
    });
  });
}

function getCategoryIcon(category) {
  const icons = {
    textbook: 'fa-book-reader',
    poetry: 'fa-feather-alt',
    story: 'fa-theater-masks',
    classic: 'fa-landmark',
  };
  return icons[category] || 'fa-book';
}

// ============ 打开课文 ============
function openLesson(contentId) {
  const lessons = CONTENT_DATA[AppState.currentGrade] || [];
  const lesson = lessons.find(l => l.id === contentId);
  if (!lesson) return;

  AppState.currentContent = lesson;
  AppState.practice = { currentQuestion: 0, answers: {}, submitted: false };

  document.getElementById('reading-title').textContent = lesson.title;
  document.getElementById('reading-meta').textContent =
    `${lesson.author || ''} · ${lesson.source || ''} · ${lesson.categoryLabel} · 约${lesson.readingTime}分钟`;

  // 构建阅读内容：配图 + 正文
  let readingHtml = '';
  if (lesson.image) {
    readingHtml += `<div class="reading-illustration"><img src="${lesson.image}" alt="${lesson.title}" onerror="this.parentElement.style.display='none'"></div>`;
  }
  readingHtml += renderPinyin(lesson.text);
  document.getElementById('reading-text').innerHTML = readingHtml;

  switchSection('reading');
}

// ============ 课文讲解 ============
function showExplanation() {
  const lesson = AppState.currentContent;
  if (!lesson) return;

  document.getElementById('explanation-title').textContent = lesson.title + ' · 讲解';
  const exp = lesson.explanation;

  let html = '';

  html += `
    <div class="exp-section">
      <h3><i class="fas fa-book-open"></i> 内容概括</h3>
      <div class="exp-card exp-summary">
        <p>${exp.summary}</p>
      </div>
    </div>
  `;

  html += `
    <div class="exp-section">
      <h3><i class="fas fa-lightbulb"></i> 要点分析</h3>
      <div class="exp-card">
        <ul class="exp-points">
          ${exp.keyPoints.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  if (exp.vocabulary && exp.vocabulary.length > 0) {
    html += `
      <div class="exp-section">
        <h3><i class="fas fa-spell-check"></i> 词汇学习</h3>
        <div class="exp-card">
          <div class="vocab-grid">
            ${exp.vocabulary
              .map(
                v => `
              <div class="vocab-item">
                <div class="vocab-word">${v.word}</div>
                <div class="vocab-pinyin">${v.pinyin}</div>
                <div class="vocab-meaning">${v.meaning}</div>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      </div>
    `;
  }

  if (exp.moral) {
    html += `
      <div class="exp-section">
        <h3><i class="fas fa-star"></i> 道理启示</h3>
        <div class="exp-card exp-moral">
          <p>${exp.moral}</p>
        </div>
      </div>
    `;
  }

  document.getElementById('explanation-content').innerHTML = html;
}

// ============ 阅读理解练习 ============
function showPractice() {
  const lesson = AppState.currentContent;
  if (!lesson) return;

  AppState.practice = { currentQuestion: 0, answers: {}, submitted: false };
  document.getElementById('practice-title').textContent = lesson.title + ' · 阅读理解';
  renderQuestion();
}

function renderQuestion() {
  const lesson = AppState.currentContent;
  const pr = AppState.practice;
  const questions = lesson.questions;
  const q = questions[pr.currentQuestion];
  const total = questions.length;
  const selected = pr.answers[q.id] || null;
  const answered = pr.answers[q.id] !== undefined;

  let html = `
    <div class="practice-question">
      <div class="question-header">
        <span class="question-number">第 ${pr.currentQuestion + 1} / ${total} 题</span>
        <span class="question-type">选择题</span>
      </div>

      <div class="question-text">
        <p>${q.question}</p>
      </div>

      <div class="question-options">
        ${q.options
          .map(opt => {
            let cls = 'option';
            if (selected === opt.label) cls += ' selected';
            if (answered && pr.submitted) {
              if (opt.label === q.answer) cls += ' correct';
              else if (opt.label === selected && opt.label !== q.answer) cls += ' wrong';
            }
            return `
            <div class="${cls}" data-option="${opt.label}">
              <span class="option-letter">${opt.label}</span>
              <span class="option-text">${opt.text}</span>
            </div>
          `;
          })
          .join('')}
      </div>

      <div class="question-actions">
        ${
          !answered
            ? `
          <button class="btn-submit" id="btn-submit-answer" ${!selected ? 'disabled' : ''}>确认答案</button>
        `
            : `
          <button class="btn-submit" id="btn-next-question">
            ${pr.currentQuestion < total - 1 ? '下一题 <i class="fas fa-arrow-right"></i>' : '查看成绩 <i class="fas fa-flag-checkered"></i>'}
          </button>
        `
        }
      </div>

      ${
        answered
          ? `
        <div class="question-feedback ${selected === q.answer ? 'feedback-correct' : 'feedback-wrong'}">
          <div class="feedback-icon">
            <i class="fas ${selected === q.answer ? 'fa-check-circle' : 'fa-times-circle'}"></i>
          </div>
          <div class="feedback-text">
            <h4>${selected === q.answer ? '回答正确！' : '回答错误'}</h4>
            <p>${q.explanation}</p>
          </div>
        </div>
      `
          : ''
      }

      <div class="practice-progress">
        <div class="progress-info">
          <span>进度：${pr.currentQuestion + (answered ? 1 : 0)}/${total}</span>
          <span>已答：${Object.keys(pr.answers).length}/${total}</span>
        </div>
        <div class="progress-bar">
          <div class="progress" style="width: ${(Object.keys(pr.answers).length / total) * 100}%"></div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('practice-content').innerHTML = html;
  bindPracticeEvents();
}

function bindPracticeEvents() {
  document.querySelectorAll('#practice-content .option').forEach(opt => {
    opt.addEventListener('click', () => {
      if (AppState.practice.answers[getCurrentQuestion().id] !== undefined) return;

      document
        .querySelectorAll('#practice-content .option')
        .forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');

      const btn = document.getElementById('btn-submit-answer');
      if (btn) btn.disabled = false;
    });
  });

  const btnSubmit = document.getElementById('btn-submit-answer');
  if (btnSubmit) {
    btnSubmit.addEventListener('click', () => {
      const selected = document.querySelector('#practice-content .option.selected');
      if (!selected) return;
      const q = getCurrentQuestion();
      AppState.practice.answers[q.id] = selected.dataset.option;
      AppState.practice.submitted = true;
      renderQuestion();
    });
  }

  const btnNext = document.getElementById('btn-next-question');
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (AppState.practice.currentQuestion < AppState.currentContent.questions.length - 1) {
        AppState.practice.currentQuestion++;
        AppState.practice.submitted = false;
        renderQuestion();
      } else {
        showResult();
      }
    });
  }
}

function getCurrentQuestion() {
  return AppState.currentContent.questions[AppState.practice.currentQuestion];
}

// ============ 成绩展示 ============
function showResult() {
  const lesson = AppState.currentContent;
  const answers = AppState.practice.answers;
  const questions = lesson.questions;
  const total = questions.length;
  let correct = 0;

  questions.forEach(q => {
    if (answers[q.id] === q.answer) correct++;
  });

  const accuracy = Math.round((correct / total) * 100);
  const stars = accuracy >= 80 ? 3 : accuracy >= 60 ? 2 : 1;
  const starHtml = Array(3)
    .fill(0)
    .map((_, i) => `<i class="fas fa-star ${i < stars ? 'star-active' : 'star-inactive'}"></i>`)
    .join('');

  let message;
  if (accuracy === 100) message = '太棒了！全部答对！';
  else if (accuracy >= 80) message = '非常好！继续加油！';
  else if (accuracy >= 60) message = '不错哦！再接再厉！';
  else message = '没关系，多读几遍课文吧！';

  let html = `
    <div class="result-card">
      <div class="result-header">
        <h2>练习完成！</h2>
        <p class="result-lesson">${lesson.title}</p>
      </div>
      <div class="result-stars">${starHtml}</div>
      <div class="result-score">
        <div class="score-circle">
          <span class="score-number">${accuracy}%</span>
        </div>
      </div>
      <div class="result-stats">
        <div class="result-stat">
          <span class="stat-label">总题数</span>
          <span class="stat-num">${total}</span>
        </div>
        <div class="result-stat">
          <span class="stat-label">正确</span>
          <span class="stat-num correct-num">${correct}</span>
        </div>
        <div class="result-stat">
          <span class="stat-label">错误</span>
          <span class="stat-num wrong-num">${total - correct}</span>
        </div>
      </div>
      <p class="result-message">${message}</p>
      <div class="result-actions">
        <button class="btn-submit" id="btn-review-answers">查看解析</button>
        <button class="btn-hint" id="btn-back-home">返回首页</button>
      </div>

      <div class="result-review" id="result-review" style="display:none;">
        <h3>答案解析</h3>
        ${questions
          .map((q, i) => {
            const userAnswer = answers[q.id];
            const isCorrect = userAnswer === q.answer;
            return `
            <div class="review-item ${isCorrect ? 'review-correct' : 'review-wrong'}">
              <div class="review-header">
                <span class="review-number">第${i + 1}题</span>
                <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
              </div>
              <p class="review-question">${q.question}</p>
              <p class="review-answer">你的答案：${userAnswer || '未答'} | 正确答案：${q.answer}</p>
              <p class="review-explanation">${q.explanation}</p>
            </div>
          `;
          })
          .join('')}
      </div>
    </div>
  `;

  document.getElementById('result-container').innerHTML = html;
  switchSection('result');

  updateStats(correct, total);

  // 游戏化奖励
  const isPerfect = correct === total;
  const rewards = rewardLessonComplete(isPerfect, correct, total, lesson.readingTime || 10);

  // 显示积分飞入动画
  if (rewards && rewards.points) {
    setTimeout(() => {
      showPointsAnimation(rewards.points);
    }, 500);
  }

  // 记录今日完成课文
  recordTodayLesson();

  // 播放音效
  if (isPerfect) {
    playSound('correct');
  } else if (correct >= total * 0.6) {
    playSound('sign');
  }

  document.getElementById('btn-review-answers').addEventListener('click', () => {
    const review = document.getElementById('result-review');
    review.style.display = review.style.display === 'none' ? 'block' : 'none';
  });
  document.getElementById('btn-back-home').addEventListener('click', () => {
    initGamePanels(); // 返回首页时刷新游戏面板
    switchSection('home');
  });
}

// ============ 统计 ============
function loadStats() {
  const saved = localStorage.getItem('yuwen-stats');
  if (saved) {
    try {
      Object.assign(AppState.stats, JSON.parse(saved));
    } catch (e) {}
  }
  updateStatsDisplay();
}

function saveStats() {
  localStorage.setItem('yuwen-stats', JSON.stringify(AppState.stats));
}

function updateStats(correct, total) {
  const s = AppState.stats;
  s.lessonsCompleted++;
  s.totalQuestions += total;
  s.correctAnswers += correct;
  s.totalMinutes += AppState.currentContent ? AppState.currentContent.readingTime : 10;

  const today = new Date().toDateString();
  if (s.lastStudyDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    s.streak = s.lastStudyDate === yesterday ? s.streak + 1 : 1;
    s.lastStudyDate = today;
  }

  saveStats();
  updateStatsDisplay();
}

function updateStatsDisplay() {
  const s = AppState.stats;
  const el = id => document.getElementById(id);
  if (el('stat-time')) el('stat-time').textContent = `${s.totalMinutes}分钟`;
  if (el('stat-lessons')) el('stat-lessons').textContent = `${s.lessonsCompleted}篇`;
  if (el('stat-accuracy'))
    el('stat-accuracy').textContent =
      s.totalQuestions > 0 ? `${Math.round((s.correctAnswers / s.totalQuestions) * 100)}%` : '0%';
  if (el('stat-streak')) el('stat-streak').textContent = `${s.streak}天`;
}

// ============ 工具函数 ============
function updateGradeCounts() {
  for (let g = 2; g <= 5; g++) {
    const count = (CONTENT_DATA[g] || []).length;
    const el = document.getElementById(`grade-count-${g}`);
    if (el) el.textContent = `${count}篇课文`;
  }
}

function updateTime() {
  const el = document.getElementById('current-time');
  if (el) {
    el.textContent = new Date().toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }
}

function stopTTSIfPlaying() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  const colors = { info: '#4ECDC4', success: '#4ECDC4', warning: '#FFE66D', error: '#FF6B6B' };
  const icons = {
    info: 'info-circle',
    success: 'check-circle',
    warning: 'exclamation-triangle',
    error: 'times-circle',
  };
  notification.style.cssText = `
    position:fixed;top:20px;right:20px;background:#fff;padding:16px 24px;border-radius:12px;
    box-shadow:0 4px 12px rgba(0,0,0,0.15);z-index:1000;display:flex;align-items:center;gap:12px;
    border-left:4px solid ${colors[type]};animation:slideIn 0.3s ease;font-family:var(--font-family);
  `;
  notification.innerHTML = `<i class="fas fa-${icons[type]}" style="color:${colors[type]}"></i><span>${message}</span>`;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ============ 启动 ============
document.addEventListener('DOMContentLoaded', initApp);

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AppState, initApp, switchSection, renderPinyin, showNotification };
}
