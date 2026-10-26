// 成语纵横填字游戏模块 - 拖拽版

// ============ 游戏状态 ============
const ChengYuGameState = {
  currentLevel: 1,
  grid: [],
  words: [],
  score: 0,
  hints: 3,
  completedWords: [],
  charPool: [],
  selectedChar: null, // 当前选中的字（点击模式）
  filledCells: {}, // 已填充的单元格 { "row-col": char }
};

// ============ 游戏配置 ============
const CHENGYU_GAME_CONFIG = {
  gridSize: 10,
  pointsPerWord: 100,
  hintCost: 50,
  levels: [
    { level: 1, words: 4, difficulty: '简单', grade: 2 },
    { level: 2, words: 5, difficulty: '简单', grade: 2 },
    { level: 3, words: 6, difficulty: '中等', grade: 3 },
    { level: 4, words: 7, difficulty: '中等', grade: 3 },
    { level: 5, words: 8, difficulty: '困难', grade: 4 },
    { level: 6, words: 8, difficulty: '困难', grade: 4 },
    { level: 7, words: 9, difficulty: '挑战', grade: 5 },
    { level: 8, words: 10, difficulty: '挑战', grade: 5 },
    { level: 9, words: 10, difficulty: '大师', grade: 5 },
    { level: 10, words: 12, difficulty: '大师', grade: 5 },
  ],
};

// ============ 生成成语纵横游戏 ============
function generateChengYuPuzzle(level) {
  const config = CHENGYU_GAME_CONFIG.levels[level - 1] || CHENGYU_GAME_CONFIG.levels[0];
  const gridSize = CHENGYU_GAME_CONFIG.gridSize;

  const availableChengYu = CHENGYU_DATABASE.filter(c => c.grade <= config.grade);
  const selectedWords = selectIntersectingWords(availableChengYu, config.words, gridSize);

  const grid = Array(gridSize)
    .fill(null)
    .map(() => Array(gridSize).fill(''));
  const wordPlacements = [];

  if (selectedWords.length > 0) {
    const firstWord = selectedWords[0];
    const startCol = Math.floor((gridSize - 4) / 2);
    const startRow = Math.floor(gridSize / 2);

    placeWord(grid, wordPlacements, firstWord, startRow, startCol, 'across', 0);

    for (let i = 1; i < selectedWords.length; i++) {
      const word = selectedWords[i];
      const placement = findIntersection(grid, word, wordPlacements, gridSize);
      if (placement) {
        placeWord(grid, wordPlacements, word, placement.row, placement.col, placement.direction, i);
      }
    }
  }

  // 生成字池：包含所有正确答案字 + 一些干扰字
  const answerChars = new Set();
  wordPlacements.forEach(w => {
    w.word.chars.split('').forEach(c => answerChars.add(c));
  });

  // 添加干扰字（从成语库随机取）
  const decoyChars = [];
  const allChars = CHENGYU_DATABASE.map(c => c.chars).join('');
  while (decoyChars.length < Math.min(8, config.words * 2)) {
    const ch = allChars[Math.floor(Math.random() * allChars.length)];
    if (!answerChars.has(ch)) {
      decoyChars.push(ch);
    }
  }

  const charPool = shuffleArray([...answerChars, ...decoyChars]);

  return {
    grid,
    words: wordPlacements,
    level,
    difficulty: config.difficulty,
    charPool,
  };
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ============ 选择可交叉的成语 ============
function selectIntersectingWords(wordPool, count, gridSize) {
  const selected = [];
  const usedIds = new Set();

  const firstWord = wordPool[Math.floor(Math.random() * wordPool.length)];
  selected.push(firstWord);
  usedIds.add(firstWord.id);

  let attempts = 0;
  while (selected.length < count && attempts < 200) {
    const candidate = wordPool[Math.floor(Math.random() * wordPool.length)];
    if (!usedIds.has(candidate.id)) {
      const hasCommonChar = selected.some(s => {
        return s.chars.split('').some(c => candidate.chars.includes(c));
      });
      if (hasCommonChar) {
        selected.push(candidate);
        usedIds.add(candidate.id);
      }
    }
    attempts++;
  }

  return selected;
}

// ============ 查找交叉位置 ============
function findIntersection(grid, word, existingWords, gridSize) {
  const chars = word.chars.split('');

  for (const placed of existingWords) {
    for (let i = 0; i < chars.length; i++) {
      for (let j = 0; j < placed.word.chars.length; j++) {
        if (chars[i] === placed.word.chars[j]) {
          const newDirection = placed.direction === 'across' ? 'down' : 'across';
          let row, col;

          if (newDirection === 'across') {
            row = placed.row + j;
            col = placed.col - i;
          } else {
            row = placed.row - i;
            col = placed.col + j;
          }

          if (isValidPlacement(grid, word, row, col, newDirection, gridSize)) {
            return { row, col, direction: newDirection };
          }
        }
      }
    }
  }

  for (let attempt = 0; attempt < 50; attempt++) {
    const direction = Math.random() > 0.5 ? 'across' : 'down';
    const row = Math.floor(Math.random() * (gridSize - 4));
    const col = Math.floor(Math.random() * (gridSize - 4));

    if (isValidPlacement(grid, word, row, col, direction, gridSize)) {
      return { row, col, direction };
    }
  }

  return null;
}

function isValidPlacement(grid, word, startRow, startCol, direction, gridSize) {
  const chars = word.chars.split('');

  if (direction === 'across') {
    if (startCol + 4 > gridSize) return false;
    for (let i = 0; i < 4; i++) {
      const cell = grid[startRow][startCol + i];
      if (cell !== '' && cell !== chars[i]) return false;
    }
  } else {
    if (startRow + 4 > gridSize) return false;
    for (let i = 0; i < 4; i++) {
      const cell = grid[startRow + i][startCol];
      if (cell !== '' && cell !== chars[i]) return false;
    }
  }

  return true;
}

function placeWord(grid, wordPlacements, word, row, col, direction, index) {
  const chars = word.chars.split('');

  for (let i = 0; i < 4; i++) {
    if (direction === 'across') {
      grid[row][col + i] = chars[i];
    } else {
      grid[row + i][col] = chars[i];
    }
  }

  wordPlacements.push({
    word,
    row,
    col,
    direction,
    index,
    found: false,
  });
}

// ============ 渲染游戏界面 ============
function renderChengYuGame(puzzle) {
  const container = document.getElementById('chengyu-game-content');
  if (!container) return;

  const { grid, words, level, difficulty, charPool } = puzzle;
  const gridSize = grid.length;

  // 重置游戏状态
  ChengYuGameState.grid = grid;
  ChengYuGameState.words = words;
  ChengYuGameState.score = 0;
  ChengYuGameState.hints = 3;
  ChengYuGameState.completedWords = [];
  ChengYuGameState.charPool = charPool;
  ChengYuGameState.selectedChar = null;
  ChengYuGameState.filledCells = {};

  let html = `
    <div class="chengyu-game-header">
      <div class="game-info">
        <span class="level-badge">第${level}关</span>
        <span class="difficulty-badge ${difficulty}">${difficulty}</span>
        <span class="score-display">得分: <span id="chengyu-score">0</span></span>
        <span class="hints-display">提示: <span id="chengyu-hints">3</span>次</span>
      </div>
      <div class="game-controls">
        <button class="btn-hint" onclick="useChengYuHint()">
          <i class="fas fa-lightbulb"></i> 提示
        </button>
        <button class="btn-refresh" onclick="refreshChengYuGame()">
          <i class="fas fa-sync-alt"></i> 换一题
        </button>
      </div>
    </div>
    
    <div class="chengyu-grid-wrapper">
      <div class="chengyu-grid-container">
        <div class="chengyu-grid" id="chengyu-grid">
  `;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const cellValue = grid[i][j];
      const isInWord = words.some(w => {
        if (w.direction === 'across') {
          return i === w.row && j >= w.col && j < w.col + 4;
        } else {
          return j === w.col && i >= w.row && i < w.row + 4;
        }
      });
      const isEmpty = !isInWord;

      html += `
        <div class="chengyu-cell ${isEmpty ? 'empty' : 'active droppable'}"
             data-row="${i}" data-col="${j}"
             id="cell-${i}-${j}"
             ${!isEmpty ? `ondragover="onChengYuDragOver(event)" ondragleave="onChengYuDragLeave(event)" ondrop="onChengYuDrop(event, ${i}, ${j})" onclick="onChengYuCellClick(${i}, ${j})"` : ''}>
          <span class="cell-char"></span>
        </div>
      `;
    }
  }

  html += `
        </div>
      </div>
    </div>
    
    <div class="chengyu-word-list">
      <h3><i class="fas fa-list-ol"></i> 待填成语</h3>
      <div class="word-items">
  `;

  words.forEach((w, idx) => {
    html += `
      <div class="word-item ${w.found ? 'found' : ''}" id="word-${idx}">
        <span class="word-number">${idx + 1}.</span>
        <span class="word-clue">${w.word.meaning}</span>
        <span class="word-answer" style="display:${w.found ? 'inline' : 'none'}">${w.word.chars}</span>
        <span class="word-status">${w.found ? '✓' : ''}</span>
      </div>
    `;
  });

  html += `
      </div>
    </div>
    
    <div class="chengyu-char-pool">
      <div class="char-pool-header">
        <h3><i class="fas fa-font"></i> 字池</h3>
        <p class="char-pool-hint">点击选字，再点击空格填入（或直接拖拽）</p>
      </div>
      <div class="char-pool-grid" id="char-pool">
  `;

  charPool.forEach((ch, idx) => {
    html += `
      <div class="char-tile" id="char-${idx}" data-char="${ch}" data-index="${idx}"
           draggable="true"
           ondragstart="onChengYuCharDragStart(event, '${ch}', ${idx})"
           onclick="onChengYuCharClick('${ch}', ${idx})">
        ${ch}
      </div>
    `;
  });

  html += `
      </div>
    </div>
  `;

  container.innerHTML = html;
}

// ============ 拖拽：开始拖 ============
function onChengYuCharDragStart(event, char, index) {
  event.dataTransfer.setData('text/plain', JSON.stringify({ char, index }));
  event.dataTransfer.effectAllowed = 'move';
  // 清除之前的选中状态
  clearChengYuSelectedChar();
}

// ============ 拖拽：允许放置 ============
function onChengYuDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
  event.currentTarget.classList.add('drag-over');
}

// ============ 拖拽：离开 ============
function onChengYuDragLeave(event) {
  event.currentTarget.classList.remove('drag-over');
}

// ============ 拖拽：放置 ============
function onChengYuDrop(event, row, col) {
  event.preventDefault();
  event.currentTarget.classList.remove('drag-over');

  // 如果已经有正确的字了，不允许覆盖
  const cellKey = `${row}-${col}`;
  if (ChengYuGameState.filledCells[cellKey]) return;

  try {
    const data = JSON.parse(event.dataTransfer.getData('text/plain'));
    placeChengYuChar(row, col, data.char, data.index);
  } catch (e) {}
}

// ============ 点击选字 ============
function onChengYuCharClick(char, index) {
  clearChengYuSelectedChar();

  ChengYuGameState.selectedChar = { char, index };
  const tile = document.getElementById(`char-${index}`);
  if (tile) tile.classList.add('selected');

  // 更新提示文字
  const hint = document.querySelector('.char-pool-hint');
  if (hint) hint.textContent = `已选「${char}」，点击空格填入`;
}

// ============ 点击格子填字 ============
function onChengYuCellClick(row, col) {
  const selected = ChengYuGameState.selectedChar;
  if (!selected) return;

  const cellKey = `${row}-${col}`;
  if (ChengYuGameState.filledCells[cellKey]) return;

  placeChengYuChar(row, col, selected.char, selected.index);
  clearChengYuSelectedChar();
}

// ============ 放置字到格子 ============
function placeChengYuChar(row, col, char, charIndex) {
  const cell = document.getElementById(`cell-${row}-${col}`);
  if (!cell) return;

  const charSpan = cell.querySelector('.cell-char');
  const correctChar = ChengYuGameState.grid[row][col];

  // 检查是否正确
  if (char === correctChar) {
    charSpan.textContent = char;
    cell.classList.add('filled', 'correct');
    ChengYuGameState.filledCells[`${row}-${col}`] = char;

    // 从字池移除（添加动画）
    const tile = document.getElementById(`char-${charIndex}`);
    if (tile) {
      tile.classList.add('used');
      setTimeout(() => {
        tile.style.display = 'none';
      }, 300);
    }

    // 检查成语完成
    checkChengYuCompletion(row, col);
  } else {
    // 错误反馈
    cell.classList.add('wrong');
    setTimeout(() => cell.classList.remove('wrong'), 600);

    showNotification('字不对哦，再想想！', 'warning');
  }
}

// ============ 清除选中状态 ============
function clearChengYuSelectedChar() {
  ChengYuGameState.selectedChar = null;
  document.querySelectorAll('.char-tile.selected').forEach(t => t.classList.remove('selected'));
  const hint = document.querySelector('.char-pool-hint');
  if (hint) hint.textContent = '点击选字，再点击空格填入（或直接拖拽）';
}

// ============ 检查成语完成 ============
function checkChengYuCompletion(row, col) {
  ChengYuGameState.words.forEach((w, idx) => {
    if (w.found) return;

    let isComplete = true;
    const chars = w.word.chars.split('');

    for (let i = 0; i < 4; i++) {
      let cellRow, cellCol;
      if (w.direction === 'across') {
        cellRow = w.row;
        cellCol = w.col + i;
      } else {
        cellRow = w.row + i;
        cellCol = w.col;
      }

      const key = `${cellRow}-${cellCol}`;
      if (ChengYuGameState.filledCells[key] !== chars[i]) {
        isComplete = false;
        break;
      }
    }

    if (isComplete) {
      w.found = true;
      ChengYuGameState.score += CHENGYU_GAME_CONFIG.pointsPerWord;
      ChengYuGameState.completedWords.push(w.word);

      updateChengYuScore();
      markWordAsFound(idx);
      highlightCompletedWord(w);

      if (ChengYuGameState.words.every(w => w.found)) {
        setTimeout(() => showChengYuVictory(), 500);
      }
    }
  });
}

function updateChengYuScore() {
  const scoreEl = document.getElementById('chengyu-score');
  if (scoreEl) {
    scoreEl.textContent = ChengYuGameState.score;
    scoreEl.classList.add('score-animate');
    setTimeout(() => scoreEl.classList.remove('score-animate'), 300);
  }
}

function markWordAsFound(idx) {
  const wordItem = document.getElementById(`word-${idx}`);
  if (wordItem) {
    wordItem.classList.add('found');
    wordItem.querySelector('.word-answer').style.display = 'inline';
    wordItem.querySelector('.word-status').textContent = '✓';
  }
}

function highlightCompletedWord(wordPlacement) {
  for (let i = 0; i < 4; i++) {
    let row, col;
    if (wordPlacement.direction === 'across') {
      row = wordPlacement.row;
      col = wordPlacement.col + i;
    } else {
      row = wordPlacement.row + i;
      col = wordPlacement.col;
    }

    const cell = document.getElementById(`cell-${row}-${col}`);
    if (cell) {
      cell.classList.add('completed');
    }
  }
}

// ============ 使用提示 ============
function useChengYuHint() {
  if (ChengYuGameState.hints <= 0) {
    showNotification('提示次数已用完！', 'warning');
    return;
  }

  const unfinished = ChengYuGameState.words.find(w => !w.found);
  if (!unfinished) return;

  // 找到第一个未填的字
  const chars = unfinished.word.chars.split('');
  for (let i = 0; i < 4; i++) {
    let row, col;
    if (unfinished.direction === 'across') {
      row = unfinished.row;
      col = unfinished.col + i;
    } else {
      row = unfinished.row + i;
      col = unfinished.col;
    }

    const key = `${row}-${col}`;
    if (!ChengYuGameState.filledCells[key]) {
      // 直接填入正确答案
      const cell = document.getElementById(`cell-${row}-${col}`);
      if (cell) {
        cell.querySelector('.cell-char').textContent = chars[i];
        cell.classList.add('filled', 'correct', 'hinted');
        ChengYuGameState.filledCells[key] = chars[i];

        // 从字池中找到并移除
        const poolTiles = document.querySelectorAll('.char-tile:not(.used)');
        for (const tile of poolTiles) {
          if (tile.dataset.char === chars[i]) {
            tile.classList.add('used');
            setTimeout(() => {
              tile.style.display = 'none';
            }, 300);
            break;
          }
        }

        checkChengYuCompletion(row, col);
      }
      break;
    }
  }

  ChengYuGameState.hints--;
  const hintsEl = document.getElementById('chengyu-hints');
  if (hintsEl) hintsEl.textContent = ChengYuGameState.hints;

  showNotification(`提示了一个字 "${unfinished.word.meaning}"`, 'info');
}

// ============ 刷新游戏 ============
function refreshChengYuGame() {
  const level = ChengYuGameState.currentLevel;
  const puzzle = generateChengYuPuzzle(level);
  renderChengYuGame(puzzle);
}

// ============ 显示胜利界面 ============
function showChengYuVictory() {
  const container = document.getElementById('chengyu-game-content');
  if (!container) return;

  const basePoints = ChengYuGameState.score;
  const bonusPoints = Math.floor(ChengYuGameState.hints * 50);
  const totalPoints = basePoints + bonusPoints;

  if (typeof GameData !== 'undefined') {
    GameData.points += totalPoints;
    GameData.exp += totalPoints;
    saveGameData();
  }

  container.innerHTML = `
    <div class="chengyu-victory">
      <div class="victory-icon">🎉</div>
      <h2>恭喜通关！</h2>
      <div class="victory-stats">
        <div class="stat-item">
          <span class="stat-label">基础得分</span>
          <span class="stat-value">${basePoints}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">提示奖励</span>
          <span class="stat-value">+${bonusPoints}</span>
        </div>
        <div class="stat-item total">
          <span class="stat-label">总得分</span>
          <span class="stat-value">${totalPoints}</span>
        </div>
      </div>
      <div class="completed-words">
        <h3>本关成语</h3>
        ${ChengYuGameState.completedWords
          .map(
            w => `
          <div class="word-card">
            <span class="word-chars">${w.chars}</span>
            <span class="word-pinyin">${w.pinyin}</span>
            <span class="word-meaning">${w.meaning}</span>
          </div>
        `
          )
          .join('')}
      </div>
      <div class="victory-buttons">
        <button class="btn-next-level" onclick="nextChengYuLevel()">
          <i class="fas fa-arrow-right"></i> 下一关
        </button>
        <button class="btn-replay" onclick="refreshChengYuGame()">
          <i class="fas fa-redo"></i> 再玩一次
        </button>
      </div>
    </div>
  `;
}

function nextChengYuLevel() {
  ChengYuGameState.currentLevel = Math.min(ChengYuGameState.currentLevel + 1, 10);
  refreshChengYuGame();
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add('show');
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  }, 10);
}
