// 语文小霸王 - 游戏化系统
// 积分、等级、徽章、签到、成长树

// ============ 游戏化状态 ============
const GameData = {
  points: 0, // 积分
  exp: 0, // 经验值
  level: 1, // 等级
  title: '语文新手', // 称号
  badges: [], // 已获得徽章
  streak: 0, // 连续学习天数
  lastSignDate: null, // 上次签到日期
  signHistory: [], // 签到记录（最近7天）
  totalLessons: 0, // 完成课文数
  totalQuestions: 0, // 总答题数
  correctAnswers: 0, // 正确答题数
  perfectScores: 0, // 满分次数
  readingMinutes: 0, // 阅读分钟数
  treeLevel: 1, // 成长树等级
  treeExp: 0, // 成长树经验
};

// ============ 等级配置 ============
const LEVEL_CONFIG = [
  { level: 1, title: '语文新手', exp: 0, icon: '🌱' },
  { level: 2, title: '识字小能手', exp: 100, icon: '🌿' },
  { level: 3, title: '阅读小达人', exp: 300, icon: '🌲' },
  { level: 4, title: '诗词小才子', exp: 600, icon: '🎋' },
  { level: 5, title: '成语小博士', exp: 1000, icon: '🌳' },
  { level: 6, title: '国学小名士', exp: 1500, icon: '🏆' },
  { level: 7, title: '语文小状元', exp: 2200, icon: '👑' },
  { level: 8, title: '文学小巨匠', exp: 3000, icon: '⭐' },
  { level: 9, title: '博学小夫子', exp: 4000, icon: '🎓' },
  { level: 10, title: '语文小霸王', exp: 5500, icon: '🌟' },
];

// ============ 徽章配置 ============
const BADGE_CONFIG = [
  {
    id: 'first_lesson',
    name: '初出茅庐',
    desc: '完成第一篇课文',
    icon: '📖',
    condition: d => d.totalLessons >= 1,
  },
  {
    id: 'lesson_5',
    name: '勤学好问',
    desc: '完成5篇课文',
    icon: '📚',
    condition: d => d.totalLessons >= 5,
  },
  {
    id: 'lesson_10',
    name: '学富五车',
    desc: '完成10篇课文',
    icon: '🎒',
    condition: d => d.totalLessons >= 10,
  },
  {
    id: 'lesson_20',
    name: '博览群书',
    desc: '完成20篇课文',
    icon: '🏫',
    condition: d => d.totalLessons >= 20,
  },
  {
    id: 'lesson_30',
    name: '满腹经纶',
    desc: '完成30篇课文',
    icon: '🎓',
    condition: d => d.totalLessons >= 30,
  },
  {
    id: 'perfect_1',
    name: '一鸣惊人',
    desc: '首次获得满分',
    icon: '💯',
    condition: d => d.perfectScores >= 1,
  },
  {
    id: 'perfect_5',
    name: '才高八斗',
    desc: '获得5次满分',
    icon: '⭐',
    condition: d => d.perfectScores >= 5,
  },
  {
    id: 'streak_3',
    name: '三天打鱼',
    desc: '连续学习3天',
    icon: '🔥',
    condition: d => d.streak >= 3,
  },
  {
    id: 'streak_7',
    name: '一周坚持',
    desc: '连续学习7天',
    icon: '💪',
    condition: d => d.streak >= 7,
  },
  {
    id: 'streak_14',
    name: '两周不辍',
    desc: '连续学习14天',
    icon: '🏆',
    condition: d => d.streak >= 14,
  },
  {
    id: 'streak_30',
    name: '月度之星',
    desc: '连续学习30天',
    icon: '🌟',
    condition: d => d.streak >= 30,
  },
  { id: 'level_5', name: '小有成就', desc: '达到5级', icon: '🥉', condition: d => d.level >= 5 },
  { id: 'level_10', name: '登峰造极', desc: '达到10级', icon: '🥇', condition: d => d.level >= 10 },
  {
    id: 'reader_60',
    name: '阅读达人',
    desc: '累计阅读60分钟',
    icon: '⏰',
    condition: d => d.readingMinutes >= 60,
  },
  {
    id: 'accuracy_90',
    name: '精准阅读',
    desc: '正确率超过90%',
    icon: '🎯',
    condition: d => d.totalQuestions >= 10 && d.correctAnswers / d.totalQuestions >= 0.9,
  },
];

// ============ 签到奖励配置 ============
const SIGN_REWARDS = [
  { day: 1, points: 10, exp: 5, icon: '🌟' },
  { day: 2, points: 15, exp: 8, icon: '🌟' },
  { day: 3, points: 20, exp: 12, icon: '🌟' },
  { day: 4, points: 25, exp: 15, icon: '⭐' },
  { day: 5, points: 30, exp: 20, icon: '⭐' },
  { day: 6, points: 40, exp: 25, icon: '⭐' },
  { day: 7, points: 100, exp: 50, icon: '🏆' }, // 第7天大奖
];

// ============ 成长树等级 ============
const TREE_LEVELS = [
  { level: 1, name: '种子', emoji: '🌱', exp: 0 },
  { level: 2, name: '发芽', emoji: '🌿', exp: 50 },
  { level: 3, name: '小苗', emoji: '☘️', exp: 150 },
  { level: 4, name: '小树', emoji: '🪴', exp: 300 },
  { level: 5, name: '成长', emoji: '🌲', exp: 500 },
  { level: 6, name: '开花', emoji: '🌸', exp: 800 },
  { level: 7, name: '结果', emoji: '🍎', exp: 1200 },
  { level: 8, name: '参天大树', emoji: '🌳', exp: 1800 },
  { level: 9, name: '智慧之树', emoji: '🎄', exp: 2500 },
  { level: 10, name: '语文神树', emoji: '✨', exp: 3500 },
];

// ============ 初始化游戏化系统 ============
function initGamification() {
  loadGameData();
  updateTreeDisplay();
  console.log('游戏化系统初始化完成');
}

// ============ 加载游戏数据 ============
function loadGameData() {
  const saved = localStorage.getItem('yuwen-gamedata');
  if (saved) {
    try {
      Object.assign(GameData, JSON.parse(saved));
    } catch (e) {}
  }
}

// ============ 保存游戏数据 ============
function saveGameData() {
  localStorage.setItem('yuwen-gamedata', JSON.stringify(GameData));
}

// ============ 增加积分和经验 ============
function addRewards(points, exp) {
  GameData.points += points;
  GameData.exp += exp;
  GameData.treeExp += exp;

  // 检查升级
  checkLevelUp();
  checkTreeLevelUp();

  saveGameData();
  updateLevelDisplay();
  updateTreeDisplay();

  return { points, exp };
}

// ============ 检查等级提升 ============
function checkLevelUp() {
  const currentLevel = LEVEL_CONFIG.find(l => l.level === GameData.level);
  const nextLevel = LEVEL_CONFIG.find(l => l.level === GameData.level + 1);

  if (nextLevel && GameData.exp >= nextLevel.exp) {
    GameData.level = nextLevel.level;
    GameData.title = nextLevel.title;
    showLevelUpAnimation(nextLevel);
    addRewards(0, 0); // 递归检查是否连续升级
  }
}

// ============ 检查成长树升级 ============
function checkTreeLevelUp() {
  const currentTree = TREE_LEVELS.find(t => t.level === GameData.treeLevel);
  const nextTree = TREE_LEVELS.find(t => t.level === GameData.treeLevel + 1);

  if (nextTree && GameData.treeExp >= nextTree.exp) {
    GameData.treeLevel = nextTree.level;
    showNotification(`🌳 成长树升级了！变成了「${nextTree.name}」`, 'success');
  }
}

// ============ 检查徽章解锁 ============
function checkBadges() {
  const newBadges = [];

  BADGE_CONFIG.forEach(badge => {
    if (!GameData.badges.includes(badge.id) && badge.condition(GameData)) {
      GameData.badges.push(badge.id);
      newBadges.push(badge);
    }
  });

  if (newBadges.length > 0) {
    saveGameData();
    newBadges.forEach((badge, index) => {
      setTimeout(() => {
        showBadgeUnlockAnimation(badge);
      }, index * 1500);
    });
  }

  return newBadges;
}

// ============ 每日签到 ============
function doDailySign() {
  const today = new Date().toDateString();

  if (GameData.lastSignDate === today) {
    showNotification('今天已经签到过了哦~', 'info');
    return false;
  }

  const yesterday = new Date(Date.now() - 86400000).toDateString();
  const isConsecutive = GameData.lastSignDate === yesterday;

  if (isConsecutive) {
    GameData.streak++;
  } else {
    GameData.streak = 1;
  }

  // 计算签到奖励
  const signDay = Math.min(GameData.streak, 7);
  const reward = SIGN_REWARDS[signDay - 1];

  GameData.lastSignDate = today;
  GameData.signHistory.unshift({
    date: today,
    day: signDay,
    points: reward.points,
    exp: reward.exp,
  });

  // 只保留最近7天记录
  if (GameData.signHistory.length > 7) {
    GameData.signHistory = GameData.signHistory.slice(0, 7);
  }

  addRewards(reward.points, reward.exp);
  saveGameData();

  showSignSuccessAnimation(reward, signDay);
  checkBadges();

  return true;
}

// ============ 完成课文奖励 ============
function rewardLessonComplete(isPerfect, questionsCorrect, questionsTotal, readingTime) {
  GameData.totalLessons++;
  GameData.totalQuestions += questionsTotal;
  GameData.correctAnswers += questionsCorrect;
  GameData.readingMinutes += readingTime;

  if (isPerfect) {
    GameData.perfectScores++;
  }

  // 基础奖励
  let points = 20;
  let exp = 15;

  // 正确率奖励
  const accuracy = questionsCorrect / questionsTotal;
  if (accuracy >= 0.8) {
    points += 15;
    exp += 10;
  }
  if (accuracy >= 0.9) {
    points += 10;
    exp += 8;
  }
  if (isPerfect) {
    points += 30;
    exp += 20;
  }

  // 阅读时长奖励
  if (readingTime >= 8) {
    points += 10;
    exp += 5;
  }

  addRewards(points, exp);
  checkBadges();
  saveGameData();
  updateLevelDisplay();

  return { points, exp };
}

// ============ 更新等级显示 ============
function updateLevelDisplay() {
  const levelEl = document.getElementById('user-level');
  const pointsEl = document.getElementById('user-points');
  const expBarEl = document.getElementById('exp-bar');
  const titleEl = document.getElementById('user-title');

  if (levelEl) levelEl.textContent = `Lv.${GameData.level}`;
  if (pointsEl) pointsEl.textContent = GameData.points;
  if (titleEl) titleEl.textContent = GameData.title;

  // 计算经验进度
  const currentLevelConfig = LEVEL_CONFIG.find(l => l.level === GameData.level);
  const nextLevelConfig = LEVEL_CONFIG.find(l => l.level === GameData.level + 1);

  if (expBarEl && nextLevelConfig) {
    const currentExp = GameData.exp - currentLevelConfig.exp;
    const neededExp = nextLevelConfig.exp - currentLevelConfig.exp;
    const progress = Math.min((currentExp / neededExp) * 100, 100);
    expBarEl.style.width = `${progress}%`;

    const expTextEl = document.getElementById('exp-text');
    if (expTextEl) expTextEl.textContent = `${currentExp}/${neededExp}`;
  }
}

// ============ 更新成长树显示 ============
function updateTreeDisplay() {
  const treeEl = document.getElementById('growth-tree');
  const treeNameEl = document.getElementById('tree-name');
  const treeBarEl = document.getElementById('tree-bar');

  const currentTree = TREE_LEVELS.find(t => t.level === GameData.treeLevel);

  if (treeEl && currentTree) {
    treeEl.textContent = currentTree.emoji;
    treeEl.className = 'tree-emoji tree-level-' + GameData.treeLevel;
  }

  if (treeNameEl && currentTree) {
    treeNameEl.textContent = currentTree.name;
  }

  if (treeBarEl) {
    const nextTree = TREE_LEVELS.find(t => t.level === GameData.treeLevel + 1);
    if (nextTree) {
      const currentExp = GameData.treeExp - currentTree.exp;
      const neededExp = nextTree.exp - currentTree.exp;
      treeBarEl.style.width = `${Math.min((currentExp / neededExp) * 100, 100)}%`;
    } else {
      treeBarEl.style.width = '100%';
    }
  }
}

// ============ 动画效果 ============

// 升级动画
function showLevelUpAnimation(levelConfig) {
  const overlay = document.createElement('div');
  overlay.className = 'animation-overlay level-up-overlay';
  overlay.innerHTML = `
    <div class="level-up-content">
      <div class="level-up-icon">${levelConfig.icon}</div>
      <h2 class="level-up-title">恭喜升级！</h2>
      <div class="level-up-level">Lv.${levelConfig.level}</div>
      <div class="level-up-name">${levelConfig.title}</div>
      <div class="level-up-particles" id="level-particles"></div>
    </div>
  `;

  document.body.appendChild(overlay);
  createParticles('level-particles', 30);

  setTimeout(() => {
    overlay.classList.add('fade-out');
    setTimeout(() => overlay.remove(), 500);
  }, 3000);

  playSound('levelup');
}

// 徽章解锁动画
function showBadgeUnlockAnimation(badge) {
  const overlay = document.createElement('div');
  overlay.className = 'animation-overlay badge-overlay';
  overlay.innerHTML = `
    <div class="badge-unlock-content">
      <h3>🎖️ 新徽章解锁！</h3>
      <div class="badge-icon">${badge.icon}</div>
      <div class="badge-name">${badge.name}</div>
      <div class="badge-desc">${badge.desc}</div>
    </div>
  `;

  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.classList.add('fade-out');
    setTimeout(() => overlay.remove(), 500);
  }, 2500);

  playSound('badge');
}

// 签到成功动画
function showSignSuccessAnimation(reward, day) {
  const overlay = document.createElement('div');
  overlay.className = 'animation-overlay sign-overlay';
  overlay.innerHTML = `
    <div class="sign-success-content">
      <h3>✅ 签到成功！</h3>
      <div class="sign-day">第 ${day} 天</div>
      <div class="sign-rewards">
        <span class="reward-item">🌟 +${reward.points} 积分</span>
        <span class="reward-item">⚡ +${reward.exp} 经验</span>
      </div>
      ${day === 7 ? '<div class="sign-bonus">🎁 连续7天大奖！</div>' : ''}
    </div>
  `;

  document.body.appendChild(overlay);
  createParticlesInElement(overlay, 20);

  setTimeout(() => {
    overlay.classList.add('fade-out');
    setTimeout(() => overlay.remove(), 500);
  }, 2500);

  playSound('sign');
}

// 积分飞入动画
function showPointsAnimation(points) {
  const el = document.createElement('div');
  el.className = 'points-fly';
  el.textContent = `+${points}`;
  el.style.left = `${Math.random() * 60 + 20}%`;
  el.style.top = `${Math.random() * 40 + 30}%`;

  document.body.appendChild(el);

  setTimeout(() => el.remove(), 1500);
}

// 粒子效果
function createParticles(containerId, count) {
  const container = document.getElementById(containerId);
  if (!container) return;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 1}s`;
    particle.style.background = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF'][
      Math.floor(Math.random() * 4)
    ];
    container.appendChild(particle);
  }
}

function createParticlesInElement(element, count) {
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.position = 'absolute';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 0.5}s`;
    particle.style.background = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF'][
      Math.floor(Math.random() * 4)
    ];
    element.appendChild(particle);
  }
}

// ============ 音效系统 ============
const SOUNDS = {
  correct: { freq: 523, duration: 200, type: 'sine' },
  wrong: { freq: 200, duration: 300, type: 'square' },
  levelup: { freq: 440, duration: 500, type: 'sine', sequence: [523, 659, 784] },
  badge: { freq: 660, duration: 400, type: 'sine', sequence: [523, 659, 784, 1047] },
  sign: { freq: 587, duration: 300, type: 'sine', sequence: [440, 554, 659] },
  click: { freq: 800, duration: 50, type: 'sine' },
};

function playSound(soundName) {
  try {
    const sound = SOUNDS[soundName];
    if (!sound) return;

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    if (sound.sequence) {
      sound.sequence.forEach((freq, i) => {
        setTimeout(
          () => {
            playTone(audioCtx, freq, sound.duration / sound.sequence.length, sound.type);
          },
          i * (sound.duration / sound.sequence.length)
        );
      });
    } else {
      playTone(audioCtx, sound.freq, sound.duration, sound.type);
    }
  } catch (e) {
    // 静默失败
  }
}

function playTone(audioCtx, freq, duration, type) {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.type = type;
  oscillator.frequency.value = freq;
  gainNode.gain.value = 0.1;

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.start();
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration / 1000);
  oscillator.stop(audioCtx.currentTime + duration / 1000);
}

// ============ 获取签到面板HTML ============
function getSignPanelHTML() {
  const today = new Date().toDateString();
  const isSignedToday = GameData.lastSignDate === today;

  let daysHTML = '';
  for (let i = 0; i < 7; i++) {
    const isSigned = GameData.signHistory.length > i;
    const reward = SIGN_REWARDS[i];
    daysHTML += `
      <div class="sign-day-item ${isSigned ? 'signed' : ''} ${i === GameData.streak % 7 ? 'today' : ''}">
        <div class="sign-day-num">第${i + 1}天</div>
        <div class="sign-day-icon">${reward.icon}</div>
        <div class="sign-day-reward">+${reward.points}</div>
      </div>
    `;
  }

  return `
    <div class="sign-panel">
      <h3>📅 每日签到</h3>
      <div class="sign-streak">🔥 连续签到: ${GameData.streak} 天</div>
      <div class="sign-days">${daysHTML}</div>
      <button class="btn-sign ${isSignedToday ? 'signed' : ''}" onclick="doDailySign()" ${isSignedToday ? 'disabled' : ''}>
        ${isSignedToday ? '✅ 今日已签到' : '🌟 立即签到'}
      </button>
    </div>
  `;
}

// ============ 获取徽章面板HTML ============
function getBadgesPanelHTML() {
  let badgesHTML = BADGE_CONFIG.map(badge => {
    const isUnlocked = GameData.badges.includes(badge.id);
    return `
      <div class="badge-item ${isUnlocked ? 'unlocked' : 'locked'}">
        <div class="badge-icon">${isUnlocked ? badge.icon : '🔒'}</div>
        <div class="badge-name">${badge.name}</div>
        <div class="badge-desc">${badge.desc}</div>
      </div>
    `;
  }).join('');

  return `
    <div class="badges-panel">
      <h3>🎖️ 成就徽章</h3>
      <div class="badges-grid">${badgesHTML}</div>
    </div>
  `;
}

// ============ 获取成长树面板HTML ============
function getTreePanelHTML() {
  const currentTree = TREE_LEVELS.find(t => t.level === GameData.treeLevel);
  const nextTree = TREE_LEVELS.find(t => t.level === GameData.treeLevel + 1);

  return `
    <div class="tree-panel">
      <h3>🌳 我的成长树</h3>
      <div class="tree-display">
        <div class="tree-emoji-large">${currentTree.emoji}</div>
        <div class="tree-info">
          <span class="tree-name">${currentTree.name}</span>
          <span class="tree-level">等级 ${GameData.treeLevel}</span>
        </div>
      </div>
      ${
        nextTree
          ? `
        <div class="tree-progress">
          <div class="tree-progress-bar">
            <div class="tree-progress-fill" id="tree-bar" style="width: ${Math.min(((GameData.treeExp - currentTree.exp) / (nextTree.exp - currentTree.exp)) * 100, 100)}%"></div>
          </div>
          <span class="tree-progress-text">${GameData.treeExp - currentTree.exp}/${nextTree.exp - currentTree.exp}</span>
        </div>
        <div class="tree-next">下一阶段: ${nextTree.emoji} ${nextTree.name}</div>
      `
          : '<div class="tree-maxed">🎉 已达到最高等级！</div>'
      }
    </div>
  `;
}

// ============ 导出 ============
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    GameData,
    LEVEL_CONFIG,
    BADGE_CONFIG,
    initGamification,
    loadGameData,
    saveGameData,
    addRewards,
    doDailySign,
    rewardLessonComplete,
    checkBadges,
    updateLevelDisplay,
    updateTreeDisplay,
    getSignPanelHTML,
    getBadgesPanelHTML,
    getTreePanelHTML,
    playSound,
    showPointsAnimation,
  };
}
