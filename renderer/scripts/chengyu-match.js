// 成语消消乐游戏模块

// ============ 游戏状态 ============
const ChengYuMatchState = {
  currentLevel: 1,
  score: 0,
  combo: 0,
  maxCombo: 0,
  timer: 0,
  timerInterval: null,
  lives: 3,
  currentChars: [],
  selectedChars: [],
  targetChengYu: [],
  completedCount: 0,
  totalTarget: 0,
  isPlaying: false,
};

// ============ 游戏配置 ============
const CHENGYU_MATCH_CONFIG = {
  levels: [
    { level: 1, count: 4, time: 120, lives: 3, grade: 2, gridSize: 16 },
    { level: 2, count: 5, time: 100, lives: 3, grade: 2, gridSize: 20 },
    { level: 3, count: 6, time: 90, lives: 3, grade: 3, gridSize: 24 },
    { level: 4, count: 7, time: 80, lives: 3, grade: 3, gridSize: 28 },
    { level: 5, count: 8, time: 70, lives: 2, grade: 4, gridSize: 32 },
    { level: 6, count: 9, time: 60, lives: 2, grade: 4, gridSize: 36 },
    { level: 7, count: 10, time: 50, lives: 2, grade: 5, gridSize: 40 },
    { level: 8, count: 12, time: 45, lives: 1, grade: 5, gridSize: 48 },
    { level: 9, count: 14, time: 40, lives: 1, grade: 5, gridSize: 56 },
    { level: 10, count: 16, time: 35, lives: 1, grade: 5, gridSize: 64 },
  ],
  comboBonus: [0, 10, 25, 50, 100],
  scorePerChar: 10,
};

// ============ 生成消消乐游戏 ============
function generateMatchGame(level) {
  const config = CHENGYU_MATCH_CONFIG.levels[level - 1] || CHENGYU_MATCH_CONFIG.levels[0];
  const grade = config.grade;
  const count = config.count;

  // 选择目标成语
  const availableChengYu = CHENGYU_DATABASE.filter(c => c.grade <= grade);
  const selectedChengYu = selectRandomItems(availableChengYu, count);

  // 生成字符网格
  const allChars = [];
  const targetChars = [];

  // 添加目标成语的字符
  selectedChengYu.forEach(cy => {
    const chars = cy.chars.split('');
    chars.forEach(char => {
      allChars.push({ char, belongTo: cy.id, isTarget: true });
      targetChars.push(char);
    });
  });

  // 添加干扰字符
  const otherChars = getDistractorChars(targetChars, config.gridSize - targetChars.length);
  otherChars.forEach(char => {
    allChars.push({ char, belongTo: null, isTarget: false });
  });

  // 打乱顺序
  const shuffledChars = shuffleArray(allChars);

  return {
    level,
    config,
    chengYu: selectedChengYu,
    chars: shuffledChars,
    targetCount: count,
    gridSize: config.gridSize,
  };
}

// ============ 获取干扰字符 ============
function getDistractorChars(targetChars, count) {
  const commonChars =
    '的一是了我不人在他有这个上们来到时大地为子中你说生国年着就那和要她出也得里后自以会家可下而过天去能对小多然于心学么之都好好大';
  const distractors = [];

  // 从常用字中随机选择
  for (let i = 0; i < count && i < commonChars.length; i++) {
    let char;
    do {
      char = commonChars[Math.floor(Math.random() * commonChars.length)];
    } while (targetChars.includes(char) || distractors.includes(char));
    distractors.push(char);
  }

  // 如果不够，从目标字符中随机选一些相似的
  while (distractors.length < count) {
    const randomTarget = targetChars[Math.floor(Math.random() * targetChars.length)];
    if (!distractors.includes(randomTarget)) {
      distractors.push(randomTarget);
    }
  }

  return distractors.slice(0, count);
}

// ============ 选择随机项 ============
function selectRandomItems(array, count) {
  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, array.length));
}

// ============ 打乱数组 ============
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// ============ 渲染消消乐游戏 ============
function renderMatchGame(gameData) {
  const container = document.getElementById('match-game-content');
  if (!container) return;

  const { level, config, chengYu, chars, targetCount, gridSize } = gameData;

  // 初始化游戏状态
  ChengYuMatchState.currentLevel = level;
  ChengYuMatchState.score = 0;
  ChengYuMatchState.combo = 0;
  ChengYuMatchState.maxCombo = 0;
  ChengYuMatchState.lives = config.lives;
  ChengYuMatchState.timer = config.time;
  ChengYuMatchState.currentChars = chars;
  ChengYuMatchState.selectedChars = [];
  ChengYuMatchState.targetChengYu = chengYu;
  ChengYuMatchState.completedCount = 0;
  ChengYuMatchState.totalTarget = targetCount;
  ChengYuMatchState.isPlaying = true;

  // 计算网格列数
  const cols = Math.ceil(Math.sqrt(gridSize));

  let html = `
    <div class="match-game-header">
      <div class="match-game-info">
        <div class="match-level">
          <span class="level-badge">第${level}关</span>
          <span class="target-count">目标: ${targetCount}个成语</span>
        </div>
        <div class="match-stats">
          <div class="match-stat">
            <span class="stat-icon">⏱️</span>
            <span class="stat-value" id="match-timer">${config.time}</span>
            <span class="stat-label">秒</span>
          </div>
          <div class="match-stat">
            <span class="stat-icon">❤️</span>
            <span class="stat-value" id="match-lives">${config.lives}</span>
            <span class="stat-label">生命</span>
          </div>
          <div class="match-stat">
            <span class="stat-icon">🔥</span>
            <span class="stat-value" id="match-combo">0</span>
            <span class="stat-label">连击</span>
          </div>
          <div class="match-stat">
            <span class="stat-icon">⭐</span>
            <span class="stat-value" id="match-score">0</span>
            <span class="stat-label">得分</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="match-game-body">
      <div class="match-target-area">
        <h3>待组成成语</h3>
        <div class="target-list">
          ${chengYu
            .map(
              (cy, idx) => `
            <div class="target-item" id="target-${idx}" data-id="${cy.id}">
              <span class="target-number">${idx + 1}.</span>
              <span class="target-clue">${cy.meaning}</span>
              <div class="target-chars">
                ${cy.chars
                  .split('')
                  .map(
                    (char, charIdx) => `
                  <span class="target-char-slot" id="slot-${idx}-${charIdx}" data-char="${char}">?</span>
                `
                  )
                  .join('')}
              </div>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
      
      <div class="match-selected-area">
        <div class="selected-chars" id="selected-chars">
          <span class="placeholder">点击下方汉字组成成语</span>
        </div>
        <div class="selected-actions">
          <button class="btn-clear" onclick="clearSelectedChars()">
            <i class="fas fa-eraser"></i> 清空
          </button>
          <button class="btn-submit" onclick="submitMatchAnswer()">
            <i class="fas fa-check"></i> 确认
          </button>
        </div>
      </div>
      
      <div class="match-grid-area">
        <div class="match-grid" style="grid-template-columns: repeat(${cols}, 1fr);">
          ${chars
            .map(
              (item, idx) => `
            <div class="match-char-cell ${item.isTarget ? 'target' : 'distractor'}" 
                 id="match-char-${idx}" 
                 data-index="${idx}"
                 data-char="${item.char}"
                 data-target="${item.isTarget}"
                 onclick="selectMatchChar(${idx})">
              <span class="char-text">${item.char}</span>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;

  // 启动计时器
  startMatchTimer();
}

// ============ 选择字符 ============
function selectMatchChar(index) {
  if (!ChengYuMatchState.isPlaying) return;

  const cell = document.getElementById(`match-char-${index}`);
  if (!cell || cell.classList.contains('used')) return;

  // 取消选择
  if (cell.classList.contains('selected')) {
    cell.classList.remove('selected');
    ChengYuMatchState.selectedChars = ChengYuMatchState.selectedChars.filter(
      c => c.index !== index
    );
    updateSelectedDisplay();
    return;
  }

  // 最多选择4个字符
  if (ChengYuMatchState.selectedChars.length >= 4) {
    showMatchNotification('最多只能选择4个汉字！', 'warning');
    return;
  }

  // 选中字符
  cell.classList.add('selected');
  const char = cell.dataset.char;
  ChengYuMatchState.selectedChars.push({ char, index });

  updateSelectedDisplay();
}

// ============ 更新已选显示 ============
function updateSelectedDisplay() {
  const container = document.getElementById('selected-chars');
  if (!container) return;

  if (ChengYuMatchState.selectedChars.length === 0) {
    container.innerHTML = '<span class="placeholder">点击下方汉字组成成语</span>';
    return;
  }

  container.innerHTML = ChengYuMatchState.selectedChars
    .map(
      (item, idx) => `
    <span class="selected-char" data-index="${item.index}" onclick="removeSelectedChar(${idx})">
      ${item.char}
      <span class="remove-icon">×</span>
    </span>
  `
    )
    .join('');
}

// ============ 移除已选字符 ============
function removeSelectedChar(selectedIndex) {
  const removed = ChengYuMatchState.selectedChars[selectedIndex];
  if (!removed) return;

  // 取消单元格选中状态
  const cell = document.getElementById(`match-char-${removed.index}`);
  if (cell) cell.classList.remove('selected');

  // 从已选列表中移除
  ChengYuMatchState.selectedChars.splice(selectedIndex, 1);
  updateSelectedDisplay();
}

// ============ 清空已选字符 ============
function clearSelectedChars() {
  ChengYuMatchState.selectedChars.forEach(item => {
    const cell = document.getElementById(`match-char-${item.index}`);
    if (cell) cell.classList.remove('selected');
  });

  ChengYuMatchState.selectedChars = [];
  updateSelectedDisplay();
}

// ============ 提交答案 ============
function submitMatchAnswer() {
  if (!ChengYuMatchState.isPlaying) return;

  if (ChengYuMatchState.selectedChars.length !== 4) {
    showMatchNotification('请选择4个汉字！', 'warning');
    return;
  }

  const selectedString = ChengYuMatchState.selectedChars.map(c => c.char).join('');

  // 检查是否匹配目标成语
  const matchedChengYu = ChengYuMatchState.targetChengYu.find(cy => {
    return cy.chars === selectedString;
  });

  if (matchedChengYu) {
    // 匹配成功
    handleMatchSuccess(matchedChengYu);
  } else {
    // 匹配失败
    handleMatchFail();
  }
}

// ============ 处理匹配成功 ============
function handleMatchSuccess(chengYu) {
  // 增加连击
  ChengYuMatchState.combo++;
  if (ChengYuMatchState.combo > ChengYuMatchState.maxCombo) {
    ChengYuMatchState.maxCombo = ChengYuMatchState.combo;
  }

  // 计算得分
  const comboBonus =
    CHENGYU_MATCH_CONFIG.comboBonus[Math.min(ChengYuMatchState.combo - 1, 4)] || 100;
  const baseScore = 4 * CHENGYU_MATCH_CONFIG.scorePerChar;
  const totalScore = baseScore + comboBonus;
  ChengYuMatchState.score += totalScore;

  // 标记已使用字符
  ChengYuMatchState.selectedChars.forEach(item => {
    const cell = document.getElementById(`match-char-${item.index}`);
    if (cell) {
      cell.classList.remove('selected');
      cell.classList.add('used');
      cell.onclick = null;
    }
  });

  // 标记目标成语已完成
  const targetIndex = ChengYuMatchState.targetChengYu.findIndex(cy => cy.id === chengYu.id);
  if (targetIndex !== -1) {
    const targetItem = document.getElementById(`target-${targetIndex}`);
    if (targetItem) {
      targetItem.classList.add('completed');

      // 显示完整成语
      const charSlots = targetItem.querySelectorAll('.target-char-slot');
      chengYu.chars.split('').forEach((char, idx) => {
        if (charSlots[idx]) {
          charSlots[idx].textContent = char;
          charSlots[idx].classList.add('filled');
        }
      });
    }
  }

  // 更新完成计数
  ChengYuMatchState.completedCount++;

  // 清空已选
  ChengYuMatchState.selectedChars = [];
  updateSelectedDisplay();

  // 更新显示
  updateMatchStats();

  // 显示成功提示
  showMatchNotification(`🎉 ${chengYu.chars} +${totalScore}分！`, 'success');

  // 检查是否完成所有目标
  if (ChengYuMatchState.completedCount >= ChengYuMatchState.totalTarget) {
    setTimeout(() => showMatchVictory(), 1000);
  }
}

// ============ 处理匹配失败 ============
function handleMatchFail() {
  // 重置连击
  ChengYuMatchState.combo = 0;

  // 减少生命
  ChengYuMatchState.lives--;

  // 清空已选
  clearSelectedChars();

  // 更新显示
  updateMatchStats();

  // 显示失败提示
  showMatchNotification('❌ 答案不对，再试试！', 'error');

  // 检查游戏结束
  if (ChengYuMatchState.lives <= 0) {
    setTimeout(() => showMatchGameOver(), 1000);
  }
}

// ============ 更新统计显示 ============
function updateMatchStats() {
  const timerEl = document.getElementById('match-timer');
  const livesEl = document.getElementById('match-lives');
  const comboEl = document.getElementById('match-combo');
  const scoreEl = document.getElementById('match-score');

  if (timerEl) timerEl.textContent = ChengYuMatchState.timer;
  if (livesEl) livesEl.textContent = ChengYuMatchState.lives;
  if (comboEl) comboEl.textContent = ChengYuMatchState.combo;
  if (scoreEl) scoreEl.textContent = ChengYuMatchState.score;
}

// ============ 启动计时器 ============
function startMatchTimer() {
  if (ChengYuMatchState.timerInterval) {
    clearInterval(ChengYuMatchState.timerInterval);
  }

  ChengYuMatchState.timerInterval = setInterval(() => {
    if (!ChengYuMatchState.isPlaying) return;

    ChengYuMatchState.timer--;
    updateMatchStats();

    if (ChengYuMatchState.timer <= 0) {
      clearInterval(ChengYuMatchState.timerInterval);
      showMatchGameOver();
    }
  }, 1000);
}

// ============ 显示通知 ============
function showMatchNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `match-notification ${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add('show');
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 1500);
  }, 10);
}

// ============ 显示胜利界面 ============
function showMatchVictory() {
  ChengYuMatchState.isPlaying = false;
  if (ChengYuMatchState.timerInterval) {
    clearInterval(ChengYuMatchState.timerInterval);
  }

  const container = document.getElementById('match-game-content');
  if (!container) return;

  // 计算奖励
  const timeBonus = ChengYuMatchState.timer * 5;
  const comboBonus = ChengYuMatchState.maxCombo * 20;
  const totalScore = ChengYuMatchState.score + timeBonus + comboBonus;

  // 更新游戏化数据
  if (typeof GameData !== 'undefined') {
    GameData.points += totalScore;
    GameData.exp += totalScore;
    if (typeof saveGameData === 'function') saveGameData();
  }

  const stars = calculateStars();

  container.innerHTML = `
    <div class="match-victory">
      <div class="victory-stars">
        ${'⭐'.repeat(stars)}${'☆'.repeat(3 - stars)}
      </div>
      <div class="victory-icon">🎉</div>
      <h2>恭喜通关！</h2>
      <p class="victory-subtitle">你成功组成了所有成语！</p>
      
      <div class="victory-stats">
        <div class="victory-stat">
          <span class="stat-label">基础得分</span>
          <span class="stat-value">${ChengYuMatchState.score}</span>
        </div>
        <div class="victory-stat">
          <span class="stat-label">时间奖励</span>
          <span class="stat-value">+${timeBonus}</span>
        </div>
        <div class="victory-stat">
          <span class="stat-label">最高连击</span>
          <span class="stat-value">${ChengYuMatchState.maxCombo}连击</span>
        </div>
        <div class="victory-stat total">
          <span class="stat-label">总得分</span>
          <span class="stat-value">${totalScore}</span>
        </div>
      </div>
      
      <div class="victory-chengyu">
        <h3>本关成语</h3>
        <div class="chengyu-cards">
          ${ChengYuMatchState.targetChengYu
            .map(
              cy => `
            <div class="chengyu-card">
              <span class="chengyu-chars">${cy.chars}</span>
              <span class="chengyu-pinyin">${cy.pinyin}</span>
              <span class="chengyu-meaning">${cy.meaning}</span>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
      
      <div class="victory-buttons">
        <button class="btn-next-level" onclick="nextMatchLevel()">
          <i class="fas fa-arrow-right"></i> 下一关
        </button>
        <button class="btn-replay" onclick="refreshMatchGame()">
          <i class="fas fa-redo"></i> 再玩一次
        </button>
      </div>
    </div>
  `;
}

// ============ 计算星级 ============
function calculateStars() {
  const { lives, timer, totalTarget } = ChengYuMatchState;
  const config = CHENGYU_MATCH_CONFIG.levels[ChengYuMatchState.currentLevel - 1];

  if (lives === config.lives && timer > config.time / 2) return 3;
  if (lives >= 2) return 2;
  return 1;
}

// ============ 显示游戏结束 ============
function showMatchGameOver() {
  ChengYuMatchState.isPlaying = false;
  if (ChengYuMatchState.timerInterval) {
    clearInterval(ChengYuMatchState.timerInterval);
  }

  const container = document.getElementById('match-game-content');
  if (!container) return;

  container.innerHTML = `
    <div class="match-gameover">
      <div class="gameover-icon">😢</div>
      <h2>游戏结束</h2>
      <p class="gameover-subtitle">${ChengYuMatchState.lives <= 0 ? '生命用完了！' : '时间到了！'}</p>
      
      <div class="gameover-stats">
        <div class="gameover-stat">
          <span class="stat-label">得分</span>
          <span class="stat-value">${ChengYuMatchState.score}</span>
        </div>
        <div class="gameover-stat">
          <span class="stat-label">完成</span>
          <span class="stat-value">${ChengYuMatchState.completedCount}/${ChengYuMatchState.totalTarget}</span>
        </div>
        <div class="gameover-stat">
          <span class="stat-label">最高连击</span>
          <span class="stat-value">${ChengYuMatchState.maxCombo}</span>
        </div>
      </div>
      
      <div class="gameover-buttons">
        <button class="btn-retry" onclick="refreshMatchGame()">
          <i class="fas fa-redo"></i> 再试一次
        </button>
        <button class="btn-back" onclick="renderMatchGameMenu()">
          <i class="fas fa-arrow-left"></i> 返回选关
        </button>
      </div>
    </div>
  `;
}

// ============ 下一关 ============
function nextMatchLevel() {
  const nextLevel = Math.min(ChengYuMatchState.currentLevel + 1, 10);
  const gameData = generateMatchGame(nextLevel);
  renderMatchGame(gameData);
}

// ============ 刷新游戏 ============
function refreshMatchGame() {
  const gameData = generateMatchGame(ChengYuMatchState.currentLevel);
  renderMatchGame(gameData);
}

// ============ 渲染选关菜单 ============
function renderMatchGameMenu() {
  const container = document.getElementById('match-game-content');
  if (!container) return;

  container.innerHTML = `
    <div class="match-menu">
      <div class="match-menu-header">
        <h2>🏮 成语消消乐</h2>
        <p>选择汉字，组成成语！</p>
      </div>
      
      <div class="match-levels">
        ${CHENGYU_MATCH_CONFIG.levels
          .map(
            level => `
          <div class="match-level-card" onclick="startMatchLevel(${level.level})">
            <div class="level-number">第${level.level}关</div>
            <div class="level-info">
              <span class="level-count">${level.count}个成语</span>
              <span class="level-time">${level.time}秒</span>
              <span class="level-lives">${level.lives}❤️</span>
            </div>
            <div class="level-difficulty ${getDifficultyClass(level.level)}">
              ${getDifficultyName(level.level)}
            </div>
          </div>
        `
          )
          .join('')}
      </div>
      
      <div class="match-rules">
        <h3>游戏规则</h3>
        <ul>
          <li>根据释义提示，选择正确的汉字组成成语</li>
          <li>每次选择4个汉字，组成一个四字成语</li>
          <li>连续答对可获得连击奖励</li>
          <li>答错会扣除生命，生命用完游戏结束</li>
          <li>在时间内完成所有成语即可过关</li>
        </ul>
      </div>
    </div>
  `;
}

// ============ 开始指定关卡 ============
function startMatchLevel(level) {
  const gameData = generateMatchGame(level);
  renderMatchGame(gameData);
}

// ============ 获取难度名称 ============
function getDifficultyName(level) {
  if (level <= 2) return '简单';
  if (level <= 4) return '中等';
  if (level <= 6) return '困难';
  if (level <= 8) return '挑战';
  return '大师';
}

// ============ 获取难度样式类 ============
function getDifficultyClass(level) {
  if (level <= 2) return 'easy';
  if (level <= 4) return 'medium';
  if (level <= 6) return 'hard';
  if (level <= 8) return 'challenge';
  return 'master';
}

// ============ 初始化 ============
function initMatchGame() {
  renderMatchGameMenu();
}
