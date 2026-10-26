// AI错题智能出题模块
// 根据学生错题记录，智能生成针对性练习题

// ============ 错题数据管理 ============
const WrongAnswerBank = {
  wrongAnswers: [], // 错题记录
  knowledgePoints: {}, // 知识点统计
  difficultyStats: {}, // 难度统计

  // 初始化
  init() {
    this.loadFromStorage();
  },

  // 从本地存储加载
  loadFromStorage() {
    const saved = localStorage.getItem('yuwen-wrong-answers');
    if (saved) {
      const data = JSON.parse(saved);
      this.wrongAnswers = data.wrongAnswers || [];
      this.knowledgePoints = data.knowledgePoints || {};
      this.difficultyStats = data.difficultyStats || {};
    }
  },

  // 保存到本地存储
  saveToStorage() {
    localStorage.setItem(
      'yuwen-wrong-answers',
      JSON.stringify({
        wrongAnswers: this.wrongAnswers,
        knowledgePoints: this.knowledgePoints,
        difficultyStats: this.difficultyStats,
      })
    );
  },

  // 添加错题
  addWrongAnswer(question, selectedAnswer, correctAnswer, category, grade) {
    const wrongRecord = {
      id: Date.now(),
      question,
      selectedAnswer,
      correctAnswer,
      category,
      grade,
      timestamp: new Date().toISOString(),
      reviewCount: 0,
      mastered: false,
    };

    this.wrongAnswers.push(wrongRecord);

    // 更新知识点统计
    if (!this.knowledgePoints[category]) {
      this.knowledgePoints[category] = { total: 0, wrong: 0 };
    }
    this.knowledgePoints[category].total++;
    this.knowledgePoints[category].wrong++;

    this.saveToStorage();
    return wrongRecord;
  },

  // 标记已掌握
  markMastered(id) {
    const record = this.wrongAnswers.find(r => r.id === id);
    if (record) {
      record.mastered = true;
      this.saveToStorage();
    }
  },

  // 增加复习次数
  incrementReview(id) {
    const record = this.wrongAnswers.find(r => r.id === id);
    if (record) {
      record.reviewCount++;
      if (record.reviewCount >= 3) {
        record.mastered = true;
      }
      this.saveToStorage();
    }
  },

  // 获取未掌握的错题
  getUnmastered() {
    return this.wrongAnswers.filter(r => !r.mastered);
  },

  // 获取薄弱知识点
  getWeakPoints() {
    const weakPoints = [];
    for (const [category, stats] of Object.entries(this.knowledgePoints)) {
      if (stats.wrong >= 2) {
        weakPoints.push({
          category,
          wrongRate: stats.wrong / stats.total,
          total: stats.total,
          wrong: stats.wrong,
        });
      }
    }
    return weakPoints.sort((a, b) => b.wrongRate - a.wrongRate);
  },
};

// ============ AI智能出题引擎 ============
const SmartQuizEngine = {
  // 根据错题生成针对性练习
  generateQuiz(grade, count = 5) {
    const weakPoints = WrongAnswerBank.getWeakPoints();
    const unmastered = WrongAnswerBank.getUnmastered();

    let questions = [];

    // 1. 从未掌握的错题中选取
    if (unmastered.length > 0) {
      const selected = this.selectRandom(unmastered, Math.min(2, count));
      questions.push(...selected.map(q => this.rephraseQuestion(q)));
    }

    // 2. 根据薄弱知识点生成新题
    if (weakPoints.length > 0 && questions.length < count) {
      const weakCategory = weakPoints[0].category;
      const newQuestions = this.generateByCategory(weakCategory, grade, count - questions.length);
      questions.push(...newQuestions);
    }

    // 3. 补充基础题
    if (questions.length < count) {
      const basicQuestions = this.generateBasicQuestions(grade, count - questions.length);
      questions.push(...basicQuestions);
    }

    return this.shuffleArray(questions).slice(0, count);
  },

  // 根据知识点生成题目
  generateByCategory(category, grade, count) {
    const questions = [];

    switch (category) {
      case '成语理解':
        questions.push(...this.generateChengYuQuestions(grade, count));
        break;
      case '拼音标注':
        questions.push(...this.generatePinyinQuestions(grade, count));
        break;
      case '词语解释':
        questions.push(...this.generateWordMeaningQuestions(grade, count));
        break;
      case '阅读理解':
        questions.push(...this.generateReadingQuestions(grade, count));
        break;
      default:
        questions.push(...this.generateMixedQuestions(grade, count));
    }

    return questions;
  },

  // 生成成语题目
  generateChengYuQuestions(grade, count) {
    const chengyuPool =
      typeof CHENGYU_DATABASE !== 'undefined' ? CHENGYU_DATABASE.filter(c => c.grade <= grade) : [];

    if (chengyuPool.length === 0) return [];

    const questions = [];
    const selected = this.selectRandom(chengyuPool, count);

    selected.forEach(cy => {
      const question = {
        type: 'choice',
        category: '成语理解',
        question: `"${cy.chars}"的意思是什么？`,
        options: this.generateMeaningOptions(cy, chengyuPool),
        correct: 0,
        explanation: `${cy.chars}：${cy.meaning}`,
      };
      questions.push(question);
    });

    return questions;
  },

  // 生成拼音题目
  generatePinyinQuestions(grade, count) {
    const chengyuPool =
      typeof CHENGYU_DATABASE !== 'undefined' ? CHENGYU_DATABASE.filter(c => c.grade <= grade) : [];

    if (chengyuPool.length === 0) return [];

    const questions = [];
    const selected = this.selectRandom(chengyuPool, count);

    selected.forEach(cy => {
      const question = {
        type: 'choice',
        category: '拼音标注',
        question: `"${cy.chars}"的正确拼音是？`,
        options: this.generatePinyinOptions(cy, chengyuPool),
        correct: 0,
        explanation: `${cy.chars}的拼音是：${cy.pinyin}`,
      };
      questions.push(question);
    });

    return questions;
  },

  // 生成词语解释题目
  generateWordMeaningQuestions(grade, count) {
    const questions = [];
    const wordPool = this.getWordPool(grade);

    if (wordPool.length === 0) return [];

    const selected = this.selectRandom(wordPool, count);

    selected.forEach(word => {
      const question = {
        type: 'choice',
        category: '词语解释',
        question: `"${word.word}"的意思是？`,
        options: this.generateWordOptions(word, wordPool),
        correct: 0,
        explanation: `${word.word}：${word.meaning}`,
      };
      questions.push(question);
    });

    return questions;
  },

  // 生成阅读理解题目
  generateReadingQuestions(grade, count) {
    // 从课文数据中生成阅读理解题
    const contentPool =
      typeof CONTENT_DATA !== 'undefined' && CONTENT_DATA[grade] ? CONTENT_DATA[grade] : [];

    if (contentPool.length === 0) return [];

    const questions = [];
    const selected = this.selectRandom(contentPool, Math.min(count, 3));

    selected.forEach(content => {
      if (content.questions && content.questions.length > 0) {
        const q = content.questions[Math.floor(Math.random() * content.questions.length)];
        questions.push({
          ...q,
          category: '阅读理解',
        });
      }
    });

    return questions;
  },

  // 生成混合题目
  generateMixedQuestions(grade, count) {
    const questions = [];
    const perType = Math.ceil(count / 3);

    questions.push(...this.generateChengYuQuestions(grade, perType));
    questions.push(...this.generatePinyinQuestions(grade, perType));
    questions.push(...this.generateWordMeaningQuestions(grade, perType));

    return questions;
  },

  // 生成基础题目
  generateBasicQuestions(grade, count) {
    const questions = [];
    const chengyuPool =
      typeof CHENGYU_DATABASE !== 'undefined' ? CHENGYU_DATABASE.filter(c => c.grade <= grade) : [];

    if (chengyuPool.length === 0) return [];

    const selected = this.selectRandom(chengyuPool, count);

    selected.forEach(cy => {
      const questionTypes = [
        {
          type: 'choice',
          category: '成语理解',
          question: `下面哪个成语的意思是"${cy.meaning}"？`,
          options: this.generateCharOptions(cy, chengyuPool),
          correct: 0,
          explanation: `答案是"${cy.chars}"，意思是：${cy.meaning}`,
        },
      ];
      questions.push(questionTypes[0]);
    });

    return questions;
  },

  // 改写错题（避免重复）
  rephraseQuestion(wrongRecord) {
    return {
      type: 'choice',
      category: wrongRecord.category,
      question: wrongRecord.question,
      options: wrongRecord.options || [wrongRecord.correctAnswer, wrongRecord.selectedAnswer],
      correct: 0,
      explanation: `正确答案是：${wrongRecord.correctAnswer}`,
      isReview: true,
      originalId: wrongRecord.id,
    };
  },

  // 生成含义选项
  generateMeaningOptions(correct, pool) {
    const options = [correct.meaning];
    const others = pool.filter(c => c.id !== correct.id);
    const selected = this.selectRandom(others, 3);
    selected.forEach(c => options.push(c.meaning));
    return this.shuffleArray(options);
  },

  // 生成拼音选项
  generatePinyinOptions(correct, pool) {
    const options = [correct.pinyin];
    const others = pool.filter(c => c.id !== correct.id);
    const selected = this.selectRandom(others, 3);
    selected.forEach(c => options.push(c.pinyin));
    return this.shuffleArray(options);
  },

  // 生成成语选项
  generateCharOptions(correct, pool) {
    const options = [correct.chars];
    const others = pool.filter(c => c.id !== correct.id);
    const selected = this.selectRandom(others, 3);
    selected.forEach(c => options.push(c.chars));
    return this.shuffleArray(options);
  },

  // 生成词语选项
  generateWordOptions(correct, pool) {
    const options = [correct.meaning];
    const others = pool.filter(w => w.word !== correct.word);
    const selected = this.selectRandom(others, 3);
    selected.forEach(w => options.push(w.meaning));
    return this.shuffleArray(options);
  },

  // 获取词语库
  getWordPool(grade) {
    // 从成语库和课文数据中提取词语
    const words = [];

    if (typeof CHENGYU_DATABASE !== 'undefined') {
      CHENGYU_DATABASE.filter(c => c.grade <= grade).forEach(c => {
        words.push({ word: c.chars, meaning: c.meaning, grade: c.grade });
      });
    }

    return words;
  },

  // 随机选择
  selectRandom(array, count) {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, array.length));
  },

  // 打乱数组
  shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  },
};

// ============ 智能出题界面 ============
function renderSmartQuiz(grade) {
  const container = document.getElementById('smart-quiz-content');
  if (!container) return;

  const weakPoints = WrongAnswerBank.getWeakPoints();
  const unmasteredCount = WrongAnswerBank.getUnmastered().length;

  let html = `
    <div class="smart-quiz-header">
      <h2>AI智能练习</h2>
      <p class="quiz-description">根据你的学习情况，智能生成针对性练习</p>
    </div>
    
    <div class="quiz-stats-panel">
      <div class="stat-card">
        <div class="stat-icon">📝</div>
        <div class="stat-info">
          <span class="stat-value">${WrongAnswerBank.wrongAnswers.length}</span>
          <span class="stat-label">累计错题</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🔄</div>
        <div class="stat-info">
          <span class="stat-value">${unmasteredCount}</span>
          <span class="stat-label">待复习</span>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">✅</div>
        <div class="stat-info">
          <span class="stat-value">${WrongAnswerBank.wrongAnswers.length - unmasteredCount}</span>
          <span class="stat-label">已掌握</span>
        </div>
      </div>
    </div>
  `;

  // 薄弱知识点分析
  if (weakPoints.length > 0) {
    html += `
      <div class="weak-points-panel">
        <h3>薄弱知识点</h3>
        <div class="weak-points-list">
          ${weakPoints
            .map(
              wp => `
            <div class="weak-point-item">
              <span class="wp-category">${wp.category}</span>
              <div class="wp-bar">
                <div class="wp-fill" style="width: ${Math.round(wp.wrongRate * 100)}%"></div>
              </div>
              <span class="wp-rate">${Math.round(wp.wrongRate * 100)}%错误率</span>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    `;
  }

  // 练习选项
  html += `
    <div class="quiz-options">
      <h3>选择练习类型</h3>
      <div class="option-cards">
        <div class="option-card" onclick="startSmartQuiz('mixed', ${grade})">
          <div class="option-icon">🎯</div>
          <div class="option-info">
            <h4>综合练习</h4>
            <p>根据薄弱点智能出题</p>
          </div>
          <div class="option-count">5题</div>
        </div>
        <div class="option-card" onclick="startSmartQuiz('review', ${grade})">
          <div class="option-icon">📖</div>
          <div class="option-info">
            <h4>错题复习</h4>
            <p>复习之前的错题</p>
          </div>
          <div class="option-count">${unmasteredCount}题</div>
        </div>
        <div class="option-card" onclick="startSmartQuiz('chengyu', ${grade})">
          <div class="option-icon">🏮</div>
          <div class="option-info">
            <h4>成语专项</h4>
            <p>成语理解与运用</p>
          </div>
          <div class="option-count">10题</div>
        </div>
        <div class="option-card" onclick="startSmartQuiz('pinyin', ${grade})">
          <div class="option-icon">🔤</div>
          <div class="option-info">
            <h4>拼音专项</h4>
            <p>拼音标注与拼读</p>
          </div>
          <div class="option-count">10题</div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

// ============ 开始智能练习 ============
function startSmartQuiz(type, grade) {
  const container = document.getElementById('smart-quiz-content');
  if (!container) return;

  let questions = [];

  switch (type) {
    case 'mixed':
      questions = SmartQuizEngine.generateQuiz(grade, 5);
      break;
    case 'review': {
      const unmastered = WrongAnswerBank.getUnmastered();
      questions = unmastered.map(q => SmartQuizEngine.rephraseQuestion(q));
      if (questions.length < 3) {
        questions.push(...SmartQuizEngine.generateQuiz(grade, 5 - questions.length));
      }
      break;
    }
    case 'chengyu':
      questions = SmartQuizEngine.generateChengYuQuestions(grade, 10);
      break;
    case 'pinyin':
      questions = SmartQuizEngine.generatePinyinQuestions(grade, 10);
      break;
  }

  if (questions.length === 0) {
    container.innerHTML = `
      <div class="no-questions">
        <div class="no-questions-icon">😊</div>
        <h3>暂时没有题目</h3>
        <p>请先完成一些课文学习，系统会自动收集错题并生成针对性练习</p>
        <button class="btn-back" onclick="renderSmartQuiz(${grade})">返回</button>
      </div>
    `;
    return;
  }

  renderQuizQuestions(questions, grade, type);
}

// ============ 渲染练习题目 ============
function renderQuizQuestions(questions, grade, type) {
  const container = document.getElementById('smart-quiz-content');
  if (!container) return;

  window.currentQuizState = {
    questions,
    grade,
    type,
    current: 0,
    answers: {},
    submitted: false,
  };

  renderCurrentQuestion();
}

// ============ 渲染当前题目 ============
function renderCurrentQuestion() {
  const container = document.getElementById('smart-quiz-content');
  const state = window.currentQuizState;
  if (!container || !state) return;

  const { questions, current, answers } = state;
  const q = questions[current];
  const isAnswered = answers[current] !== undefined;

  let html = `
    <div class="quiz-progress">
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${((current + 1) / questions.length) * 100}%"></div>
      </div>
      <span class="progress-text">${current + 1} / ${questions.length}</span>
    </div>
    
    <div class="question-card">
      <div class="question-category">${q.category}</div>
      <div class="question-text">${q.question}</div>
      <div class="options-list">
  `;

  const optionLabels = ['A', 'B', 'C', 'D'];
  q.options.forEach((option, idx) => {
    const isSelected = answers[current] === idx;
    const isCorrect = idx === q.correct;
    let optionClass = '';

    if (state.submitted || isAnswered) {
      if (isCorrect) optionClass = 'correct';
      else if (isSelected && !isCorrect) optionClass = 'wrong';
    } else if (isSelected) {
      optionClass = 'selected';
    }

    html += `
      <div class="option-item ${optionClass}" 
           onclick="selectQuizOption(${idx})"
           ${isAnswered ? 'style="pointer-events:none"' : ''}>
        <span class="option-label">${optionLabels[idx]}</span>
        <span class="option-text">${option}</span>
        ${optionClass === 'correct' ? '<span class="option-icon">✓</span>' : ''}
        ${optionClass === 'wrong' ? '<span class="option-icon">✗</span>' : ''}
      </div>
    `;
  });

  html += `
      </div>
    </div>
  `;

  // 显示解析（如果已作答）
  if (isAnswered && q.explanation) {
    html += `
      <div class="explanation-box">
        <div class="explanation-icon">💡</div>
        <div class="explanation-text">${q.explanation}</div>
      </div>
    `;
  }

  // 导航按钮
  html += `
    <div class="quiz-navigation">
      <button class="btn-prev" onclick="prevQuestion()" ${current === 0 ? 'disabled' : ''}>
        <i class="fas fa-chevron-left"></i> 上一题
      </button>
      ${
        current < questions.length - 1
          ? `
        <button class="btn-next" onclick="nextQuestion()">
          下一题 <i class="fas fa-chevron-right"></i>
        </button>
      `
          : `
        <button class="btn-submit" onclick="submitQuiz()">
          提交答卷 <i class="fas fa-check"></i>
        </button>
      `
      }
    </div>
  `;

  container.innerHTML = html;
}

// ============ 选择选项 ============
function selectQuizOption(idx) {
  const state = window.currentQuizState;
  if (!state || state.answers[state.current] !== undefined) return;

  state.answers[state.current] = idx;

  const q = state.questions[state.current];
  const isCorrect = idx === q.correct;

  // 记录错题
  if (!isCorrect) {
    WrongAnswerBank.addWrongAnswer(
      q.question,
      q.options[idx],
      q.options[q.correct],
      q.category,
      state.grade
    );
  } else {
    // 如果是复习题，标记已掌握
    if (q.isReview && q.originalId) {
      WrongAnswerBank.incrementReview(q.originalId);
    }
  }

  // 更新游戏化数据
  if (typeof GameData !== 'undefined') {
    if (isCorrect) {
      GameData.points += 10;
      GameData.exp += 5;
      GameData.correctAnswers++;
    }
    GameData.totalQuestions++;
    if (typeof saveGameData === 'function') saveGameData();
  }

  // 显示答案反馈
  renderCurrentQuestion();
}

// ============ 上一题 ============
function prevQuestion() {
  const state = window.currentQuizState;
  if (!state || state.current <= 0) return;
  state.current--;
  renderCurrentQuestion();
}

// ============ 下一题 ============
function nextQuestion() {
  const state = window.currentQuizState;
  if (!state || state.current >= state.questions.length - 1) return;
  state.current++;
  renderCurrentQuestion();
}

// ============ 提交答卷 ============
function submitQuiz() {
  const state = window.currentQuizState;
  if (!state) return;

  state.submitted = true;

  let correctCount = 0;
  state.questions.forEach((q, idx) => {
    if (state.answers[idx] === q.correct) correctCount++;
  });

  const totalQuestions = state.questions.length;
  const accuracy = Math.round((correctCount / totalQuestions) * 100);
  const isPerfect = correctCount === totalQuestions;

  // 更新游戏化数据
  if (typeof GameData !== 'undefined') {
    GameData.points += correctCount * 10;
    GameData.exp += correctCount * 5;
    if (isPerfect) GameData.perfectScores++;
    if (typeof saveGameData === 'function') saveGameData();
  }

  renderQuizResult(correctCount, totalQuestions, accuracy, state.type, state.grade);
}

// ============ 渲染练习结果 ============
function renderQuizResult(correct, total, accuracy, type, grade) {
  const container = document.getElementById('smart-quiz-content');
  if (!container) return;

  let emoji, message;
  if (accuracy >= 90) {
    emoji = '🎉';
    message = '太棒了！继续保持！';
  } else if (accuracy >= 70) {
    emoji = '👍';
    message = '做得不错，再接再厉！';
  } else if (accuracy >= 50) {
    emoji = '💪';
    message = '还需要多多练习哦！';
  } else {
    emoji = '📚';
    message = '别灰心，多复习就能进步！';
  }

  const pointsEarned = correct * 10;

  container.innerHTML = `
    <div class="quiz-result">
      <div class="result-emoji">${emoji}</div>
      <h2>练习完成！</h2>
      <p class="result-message">${message}</p>
      
      <div class="result-stats">
        <div class="result-stat">
          <span class="stat-value">${correct}/${total}</span>
          <span class="stat-label">正确题数</span>
        </div>
        <div class="result-stat">
          <span class="stat-value">${accuracy}%</span>
          <span class="stat-label">正确率</span>
        </div>
        <div class="result-stat">
          <span class="stat-value">+${pointsEarned}</span>
          <span class="stat-label">获得积分</span>
        </div>
      </div>
      
      ${
        accuracy < 80
          ? `
        <div class="result-tip">
          <div class="tip-icon">💡</div>
          <p>建议多练习薄弱知识点，错题已自动收录到错题本</p>
        </div>
      `
          : ''
      }
      
      <div class="result-buttons">
        <button class="btn-retry" onclick="startSmartQuiz('${type}', ${grade})">
          <i class="fas fa-redo"></i> 再来一次
        </button>
        <button class="btn-back" onclick="renderSmartQuiz(${grade})">
          <i class="fas fa-arrow-left"></i> 返回
        </button>
      </div>
    </div>
  `;
}

// ============ 初始化 ============
function initSmartQuiz() {
  WrongAnswerBank.init();
}
