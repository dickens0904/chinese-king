// 语文小霸王 - 自动组卷与打印模块

// ============ 组卷配置常量 ============
const EXAM_CONFIG = {
  // 题型定义
  questionTypes: [
    { id: 'pinyin_fill', name: '看拼音写汉字', icon: '🔤', gradeRange: [2, 5] },
    { id: 'char_pinyin', name: '给汉字注拼音', icon: '📝', gradeRange: [2, 5] },
    { id: 'word_meaning', name: '词语解释', icon: '📖', gradeRange: [2, 5] },
    { id: 'reading_choice', name: '阅读理解', icon: '📚', gradeRange: [2, 5] },
    { id: 'poetry_fill', name: '古诗词填空', icon: '🏛️', gradeRange: [2, 5] },
    { id: 'sentence_fill', name: '句子填空', icon: '✏️', gradeRange: [2, 5] },
    { id: 'essay', name: '看图写话/作文', icon: '🖊️', gradeRange: [2, 5] },
  ],

  // 难度级别
  difficulties: [
    { id: 'easy', name: '基础', color: '#4ECDC4', description: '课文基础知识' },
    { id: 'medium', name: '提高', color: '#FFE66D', description: '综合运用能力' },
    { id: 'hard', name: '挑战', color: '#FF6B6B', description: '拓展延伸' },
  ],

  // 试卷模板
  paperTemplates: [
    { id: 'daily', name: '每日小测', totalQuestions: 10, duration: 20 },
    { id: 'weekly', name: '周末检测', totalQuestions: 20, duration: 40 },
    { id: 'monthly', name: '月考试卷', totalQuestions: 30, duration: 60 },
    { id: 'custom', name: '自定义', totalQuestions: 0, duration: 0 },
  ],

  // 分值设置
  defaultScores: {
    pinyin_fill: 2,
    char_pinyin: 2,
    word_meaning: 3,
    reading_choice: 3,
    poetry_fill: 2,
    sentence_fill: 3,
    essay: 10,
  },
};

// ============ 组卷状态 ============
const ExamPrintState = {
  currentGrade: 2,
  selectedTemplate: 'daily',
  selectedTypes: ['reading_choice', 'pinyin_fill', 'poetry_fill'],
  selectedLessons: [], // 空数组表示全部课文，非空表示选定课文ID
  difficulty: 'easy',
  questionCount: 10,
  duration: 20,
  includeAnswer: false,
  schoolName: '',
  className: '',
  studentName: '',
  generatedPaper: null,
  paperHistory: [],
  lessonPanelOpen: false,

  init() {
    this.loadFromStorage();
  },

  loadFromStorage() {
    try {
      const saved = localStorage.getItem('yuwen-exam-settings');
      if (saved) {
        const data = JSON.parse(saved);
        Object.assign(this, data);
      }
    } catch (e) {
      // ignore
    }
  },

  saveToStorage() {
    try {
      localStorage.setItem(
        'yuwen-exam-settings',
        JSON.stringify({
          currentGrade: this.currentGrade,
          selectedTemplate: this.selectedTemplate,
          selectedTypes: this.selectedTypes,
          selectedLessons: this.selectedLessons,
          difficulty: this.difficulty,
          questionCount: this.questionCount,
          duration: this.duration,
          schoolName: this.schoolName,
          className: this.className,
        })
      );
    } catch (e) {
      // ignore
    }
  },

  savePaperToHistory(paper) {
    this.paperHistory.unshift({
      id: Date.now(),
      date: new Date().toLocaleDateString('zh-CN'),
      grade: paper.grade,
      template: paper.templateName,
      questionCount: paper.questions.length,
      score: paper.totalScore,
    });
    if (this.paperHistory.length > 20) this.paperHistory = this.paperHistory.slice(0, 20);
    try {
      localStorage.setItem('yuwen-exam-history', JSON.stringify(this.paperHistory));
    } catch (e) {
      // ignore
    }
  },
};

// ============ 组卷引擎 ============
const ExamPrintEngine = {
  shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  selectRandom(arr, count) {
    return this.shuffleArray(arr).slice(0, Math.min(count, arr.length));
  },

  // 获取指定年级的所有课文
  getLessons(grade) {
    return CONTENT_DATA[grade] || [];
  },

  // 从课文中提取词汇（含拼音）
  extractVocabulary(lesson) {
    if (!lesson.explanation || !lesson.explanation.vocabulary) return [];
    return lesson.explanation.vocabulary.map(v => ({
      ...v,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      grade: lesson.grade,
    }));
  },

  // 从课文中提取拼音标注
  extractPinyinWords(text) {
    const words = [];
    const regex = /\{([^|]+)\|([^}]+)\}/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
      words.push({ char: match[1], pinyin: match[2] });
    }
    return words;
  },

  // 生成看拼音写汉字题
  generatePinyinFill(lessons, count) {
    const allWords = [];
    for (const lesson of lessons) {
      const words = this.extractPinyinWords(lesson.text);
      for (const w of words) {
        allWords.push({ ...w, lessonTitle: lesson.title });
      }
    }
    const selected = this.selectRandom(allWords, count);
    return selected.map((w, i) => ({
      type: 'pinyin_fill',
      number: i + 1,
      question: w.pinyin,
      answer: w.char,
      source: w.lessonTitle,
      score: EXAM_CONFIG.defaultScores.pinyin_fill,
    }));
  },

  // 生成给汉字注拼音题
  generateCharPinyin(lessons, count) {
    const allWords = [];
    for (const lesson of lessons) {
      const words = this.extractPinyinWords(lesson.text);
      for (const w of words) {
        allWords.push({ ...w, lessonTitle: lesson.title });
      }
    }
    const selected = this.selectRandom(allWords, count);
    return selected.map((w, i) => ({
      type: 'char_pinyin',
      number: i + 1,
      question: w.char,
      answer: w.pinyin,
      source: w.lessonTitle,
      score: EXAM_CONFIG.defaultScores.char_pinyin,
    }));
  },

  // 生成词语解释题
  generateWordMeaning(lessons, count) {
    const allWords = [];
    for (const lesson of lessons) {
      const vocabs = this.extractVocabulary(lesson);
      for (const v of vocabs) {
        allWords.push(v);
      }
    }
    const selected = this.selectRandom(allWords, count);
    return selected.map((w, i) => ({
      type: 'word_meaning',
      number: i + 1,
      question: w.word,
      hint: w.pinyin,
      answer: w.meaning,
      source: w.lessonTitle,
      score: EXAM_CONFIG.defaultScores.word_meaning,
    }));
  },

  // 生成阅读理解选择题
  generateReadingChoice(lessons, count) {
    const allQuestions = [];
    for (const lesson of lessons) {
      if (!lesson.questions) continue;
      for (const q of lesson.questions) {
        allQuestions.push({
          ...q,
          lessonTitle: lesson.title,
          lessonText: lesson.text.replace(/\{[^|]+\|[^}]+\}/g, m => m.split('|')[0].slice(1)),
        });
      }
    }
    const selected = this.selectRandom(allQuestions, count);
    return selected.map((q, i) => ({
      type: 'reading_choice',
      number: i + 1,
      question: q.question,
      options: q.options,
      answer: q.answer,
      explanation: q.explanation,
      source: q.lessonTitle,
      score: EXAM_CONFIG.defaultScores.reading_choice,
    }));
  },

  // 生成古诗词填空题
  generatePoetryFill(lessons, count) {
    const poetryLessons = lessons.filter(l => l.category === 'poetry');
    const allLines = [];
    for (const lesson of poetryLessons) {
      // 提取诗句行（排除注释和译文）
      const text = lesson.text.replace(/\{[^|]+\|[^}]+\}/g, m => m.split('|')[0].slice(1));
      const lines = text
        .split('\n')
        .filter(l => l.trim() && l.includes('，') && !l.includes('【') && !l.includes('<'));
      for (const line of lines) {
        const clean = line.replace(/<[^>]+>/g, '').trim();
        if (clean.length >= 5) {
          allLines.push({ line: clean, lessonTitle: lesson.title });
        }
      }
    }
    const selected = this.selectRandom(allLines, count);
    return selected.map((item, i) => {
      const chars = item.line.split('');
      // 随机挖掉2-4个字
      const blankCount = Math.min(4, Math.max(2, Math.floor(chars.length * 0.3)));
      const indices = this.selectRandom(
        chars.map((_, idx) => idx).filter(idx => chars[idx] !== '，' && chars[idx] !== '。'),
        blankCount
      );
      const blanks = {};
      for (const idx of indices) blanks[idx] = chars[idx];
      const display = chars.map((c, idx) => (blanks[idx] ? '____' : c)).join('');
      const answer = indices.map(idx => blanks[idx]).join('、');
      return {
        type: 'poetry_fill',
        number: i + 1,
        question: display,
        answer: answer,
        source: item.lessonTitle,
        score: EXAM_CONFIG.defaultScores.poetry_fill,
      };
    });
  },

  // 生成句子填空题
  generateSentenceFill(lessons, count) {
    const allSentences = [];
    for (const lesson of lessons) {
      const text = lesson.text.replace(/\{[^|]+\|[^}]+\}/g, m => m.split('|')[0].slice(1));
      const sentences = text
        .split(/[。！？]/)
        .filter(s => s.trim().length >= 10 && s.trim().length <= 50);
      for (const s of sentences) {
        const clean = s.replace(/<[^>]+>/g, '').trim();
        if (clean.length >= 10) {
          allSentences.push({ sentence: clean, lessonTitle: lesson.title });
        }
      }
    }
    const selected = this.selectRandom(allSentences, count);
    return selected.map((item, i) => {
      const chars = item.sentence.split('');
      const blankCount = Math.min(3, Math.max(1, Math.floor(chars.length * 0.15)));
      const indices = this.selectRandom(
        chars
          .map((_, idx) => idx)
          .filter(
            idx =>
              chars[idx] !== '，' &&
              chars[idx] !== '。' &&
              chars[idx] !== '！' &&
              chars[idx] !== '？' &&
              chars[idx] !== '、'
          ),
        blankCount
      );
      const blanks = {};
      for (const idx of indices) blanks[idx] = chars[idx];
      const display = chars.map((c, idx) => (blanks[idx] ? '____' : c)).join('');
      const answer = indices.map(idx => blanks[idx]).join('、');
      return {
        type: 'sentence_fill',
        number: i + 1,
        question: display,
        answer: answer,
        source: item.lessonTitle,
        score: EXAM_CONFIG.defaultScores.sentence_fill,
      };
    });
  },

  // 生成作文题
  generateEssay(grade) {
    const topics = {
      2: ['我的好朋友', '我最喜欢的动物', '快乐的一天', '我的家', '春天来了'],
      3: ['我学会了____', '一件难忘的事', '美丽的校园', '我的妈妈', '秋天的景色'],
      4: ['我最敬佩的一个人', '假如我有一支神笔', '大自然的启示', '童年趣事', '给远方朋友的一封信'],
      5: [
        '二十年后的家乡',
        '____的启示',
        '我最喜欢的一本书',
        '生活中的传统文化',
        '那一刻，我长大了',
      ],
    };
    const topicList = topics[grade] || topics[2];
    const topic = topicList[Math.floor(Math.random() * topicList.length)];
    const wordCount = grade <= 3 ? '150' : grade <= 4 ? '250' : '400';
    return [
      {
        type: 'essay',
        number: 1,
        question: topic,
        answer: '',
        wordCount: wordCount,
        source: '写作练习',
        score: EXAM_CONFIG.defaultScores.essay,
      },
    ];
  },

  // 主组卷函数
  generatePaper(config) {
    const { grade, types, difficulty, questionCount, template, selectedLessons } = config;
    let lessons = this.getLessons(grade);
    if (!lessons.length) return null;

    // 如果选定了课文，只从选定的课文出题
    if (selectedLessons && selectedLessons.length > 0) {
      lessons = lessons.filter(l => selectedLessons.includes(l.id));
      if (!lessons.length) return null;
    }

    const questions = [];
    const questionsPerType = Math.max(1, Math.floor(questionCount / types.length));
    let remaining = questionCount;

    for (let i = 0; i < types.length; i++) {
      const type = types[i];
      const count = i === types.length - 1 ? remaining : questionsPerType;
      remaining -= count;

      let typeQuestions = [];
      switch (type) {
        case 'pinyin_fill':
          typeQuestions = this.generatePinyinFill(lessons, count);
          break;
        case 'char_pinyin':
          typeQuestions = this.generateCharPinyin(lessons, count);
          break;
        case 'word_meaning':
          typeQuestions = this.generateWordMeaning(lessons, count);
          break;
        case 'reading_choice':
          typeQuestions = this.generateReadingChoice(lessons, count);
          break;
        case 'poetry_fill':
          typeQuestions = this.generatePoetryFill(lessons, count);
          break;
        case 'sentence_fill':
          typeQuestions = this.generateSentenceFill(lessons, count);
          break;
        case 'essay':
          typeQuestions = this.generateEssay(grade);
          break;
      }
      questions.push(...typeQuestions);
    }

    // 重新编号
    questions.forEach((q, i) => {
      q.number = i + 1;
    });

    const totalScore = questions.reduce((sum, q) => sum + q.score, 0);
    const templateInfo = EXAM_CONFIG.paperTemplates.find(t => t.id === template);

    return {
      grade,
      template: template,
      templateName: templateInfo ? templateInfo.name : '自定义',
      difficulty,
      questions,
      totalScore,
      duration: templateInfo ? templateInfo.duration : config.duration || 30,
      generatedAt: new Date().toLocaleString('zh-CN'),
    };
  },
};

// ============ 渲染函数 ============
function renderExamPrint(grade) {
  ExamPrintState.currentGrade = grade || ExamPrintState.currentGrade;
  const container = document.getElementById('exam-print-content');
  if (!container) return;

  const gradeLessons = ExamPrintEngine.getLessons(ExamPrintState.currentGrade);
  const lessonCount = gradeLessons.length;

  let html = '';

  // 配置面板
  html += `<div class="exam-config-panel">
    <div class="exam-config-section">
      <h3><i class="fas fa-cog"></i> 组卷设置</h3>

      <div class="exam-config-row">
        <label>选择年级：</label>
        <div class="exam-grade-selector">
          ${[2, 3, 4, 5]
            .map(
              g => `
            <button class="exam-grade-btn ${g === ExamPrintState.currentGrade ? 'active' : ''}"
                    onclick="examSelectGrade(${g})">${g}年级</button>
          `
            )
            .join('')}
        </div>
        <span class="exam-lesson-count">（共${lessonCount}篇课文）</span>
      </div>

      <div class="exam-config-row">
        <label>选择课文： <span id="exam-selected-lesson-count" class="exam-lesson-count">${ExamPrintState.selectedLessons.length === 0 ? `全部${lessonCount}篇` : `已选${ExamPrintState.selectedLessons.length}/${lessonCount}篇`}</span></label>
        <div class="exam-lesson-controls">
          <button class="exam-lesson-ctrl-btn" id="exam-lesson-toggle-btn" onclick="examToggleLessonPanel()">${ExamPrintState.lessonPanelOpen ? '收起课文列表' : '展开课文列表'}</button>
          <button class="exam-lesson-ctrl-btn" onclick="examSelectAllLessons()">全选</button>
          <button class="exam-lesson-ctrl-btn" onclick="examClearAllLessons()">清空（=全部）</button>
        </div>
        <div class="exam-lesson-panel" id="exam-lesson-panel" style="display:${ExamPrintState.lessonPanelOpen ? 'block' : 'none'}">
          ${gradeLessons
            .map(l => {
              const isChecked =
                ExamPrintState.selectedLessons.length === 0 ||
                ExamPrintState.selectedLessons.includes(l.id);
              const categoryIcons = { textbook: '📖', poetry: '🏛️', story: '🎭', classic: '📚' };
              return `<label class="exam-lesson-checkbox ${isChecked ? 'checked' : ''}" data-lesson-id="${l.id}"
                           onclick="event.preventDefault(); examToggleLesson(${l.id})">
              <span class="lesson-check-icon">${isChecked ? '☑' : '☐'}</span>
              <span class="lesson-category-icon">${categoryIcons[l.category] || '📄'}</span>
              <span class="lesson-day">第${l.day}天</span>
              <span class="lesson-title">${l.title}</span>
            </label>`;
            })
            .join('')}
        </div>
      </div>

      <div class="exam-config-row">
        <label>试卷模板：</label>
        <div class="exam-template-selector">
          ${EXAM_CONFIG.paperTemplates
            .map(
              t => `
            <div class="exam-template-card ${t.id === ExamPrintState.selectedTemplate ? 'active' : ''}"
                 onclick="examSelectTemplate('${t.id}')">
              <div class="template-name">${t.name}</div>
              <div class="template-info">${t.totalQuestions > 0 ? t.totalQuestions + '题 / ' + t.duration + '分钟' : '自定义'}</div>
            </div>
          `
            )
            .join('')}
        </div>
      </div>

      <div class="exam-config-row">
        <label>难度级别：</label>
        <div class="exam-difficulty-selector">
          ${EXAM_CONFIG.difficulties
            .map(
              d => `
            <button class="exam-difficulty-btn ${d.id === ExamPrintState.difficulty ? 'active' : ''}"
                    style="--diff-color: ${d.color}"
                    onclick="examSelectDifficulty('${d.id}')">${d.name}</button>
          `
            )
            .join('')}
        </div>
      </div>

      <div class="exam-config-row">
        <label>题目类型：</label>
        <div class="exam-types-grid">
          ${EXAM_CONFIG.questionTypes
            .filter(
              t =>
                ExamPrintState.currentGrade >= t.gradeRange[0] &&
                ExamPrintState.currentGrade <= t.gradeRange[1]
            )
            .map(
              t => `
            <label class="exam-type-checkbox ${ExamPrintState.selectedTypes.includes(t.id) ? 'checked' : ''}">
              <input type="checkbox" value="${t.id}"
                     ${ExamPrintState.selectedTypes.includes(t.id) ? 'checked' : ''}
                     onchange="examToggleType('${t.id}')">
              <span class="type-icon">${t.icon}</span>
              <span class="type-name">${t.name}</span>
            </label>
          `
            )
            .join('')}
        </div>
      </div>

      ${
        ExamPrintState.selectedTemplate === 'custom'
          ? `
        <div class="exam-config-row">
          <label>题目数量：</label>
          <input type="range" id="exam-question-count" min="5" max="50" value="${ExamPrintState.questionCount}"
                 oninput="examUpdateCount(this.value)">
          <span id="exam-count-display">${ExamPrintState.questionCount}题</span>
        </div>
        <div class="exam-config-row">
          <label>考试时间：</label>
          <input type="range" id="exam-duration" min="10" max="120" step="5" value="${ExamPrintState.duration}"
                 oninput="examUpdateDuration(this.value)">
          <span id="exam-duration-display">${ExamPrintState.duration}分钟</span>
        </div>
      `
          : ''
      }

      <div class="exam-config-row">
        <label>附加信息：</label>
        <div class="exam-info-inputs">
          <input type="text" placeholder="学校名称" value="${ExamPrintState.schoolName}"
                 oninput="ExamPrintState.schoolName=this.value" class="exam-input">
          <input type="text" placeholder="班级" value="${ExamPrintState.className}"
                 oninput="ExamPrintState.className=this.value" class="exam-input">
          <input type="text" placeholder="姓名" value="${ExamPrintState.studentName}"
                 oninput="ExamPrintState.studentName=this.value" class="exam-input">
        </div>
      </div>

      <div class="exam-config-row">
        <label>
          <input type="checkbox" id="exam-include-answer"
                 ${ExamPrintState.includeAnswer ? 'checked' : ''}
                 onchange="ExamPrintState.includeAnswer=this.checked">
          附带答案
        </label>
      </div>
    </div>

    <div class="exam-actions">
      <button class="btn-exam-generate" onclick="examGeneratePaper()">
        <i class="fas fa-magic"></i> 生成试卷
      </button>
    </div>
  </div>`;

  // 试卷预览区域
  html += `<div class="exam-preview-area" id="exam-preview-area">
    <div class="exam-preview-placeholder">
      <i class="fas fa-file-alt"></i>
      <p>配置好参数后，点击"生成试卷"预览</p>
    </div>
  </div>`;

  container.innerHTML = html;
}

// ============ 交互处理函数 ============
function examSelectGrade(grade) {
  ExamPrintState.currentGrade = grade;
  ExamPrintState.selectedLessons = [];
  ExamPrintState.lessonPanelOpen = false;
  ExamPrintState.selectedTypes = ['reading_choice', 'pinyin_fill', 'poetry_fill'];
  ExamPrintState.saveToStorage();
  renderExamPrint(grade);
  // 同步年级下拉框
  const sel = document.getElementById('exam-grade-select');
  if (sel) sel.value = grade;
}

function examToggleLessonPanel() {
  ExamPrintState.lessonPanelOpen = !ExamPrintState.lessonPanelOpen;
  const panel = document.getElementById('exam-lesson-panel');
  if (panel) {
    panel.style.display = ExamPrintState.lessonPanelOpen ? 'block' : 'none';
    const btn = document.getElementById('exam-lesson-toggle-btn');
    if (btn) btn.textContent = ExamPrintState.lessonPanelOpen ? '收起课文列表' : '展开课文列表';
  }
}

function examToggleLesson(lessonId) {
  const idx = ExamPrintState.selectedLessons.indexOf(lessonId);
  if (idx >= 0) {
    ExamPrintState.selectedLessons.splice(idx, 1);
  } else {
    ExamPrintState.selectedLessons.push(lessonId);
  }
  ExamPrintState.saveToStorage();
  // 更新单个checkbox样式和计数
  const checkbox = document.querySelector(`[data-lesson-id="${lessonId}"]`);
  if (checkbox) {
    checkbox.classList.toggle('checked', ExamPrintState.selectedLessons.includes(lessonId));
  }
  examUpdateLessonCount();
}

function examSelectAllLessons() {
  const lessons = ExamPrintEngine.getLessons(ExamPrintState.currentGrade);
  ExamPrintState.selectedLessons = lessons.map(l => l.id);
  ExamPrintState.saveToStorage();
  renderExamPrint(ExamPrintState.currentGrade);
}

function examClearAllLessons() {
  ExamPrintState.selectedLessons = [];
  ExamPrintState.saveToStorage();
  renderExamPrint(ExamPrintState.currentGrade);
}

function examUpdateLessonCount() {
  const lessons = ExamPrintEngine.getLessons(ExamPrintState.currentGrade);
  const total = lessons.length;
  const selected = ExamPrintState.selectedLessons.length;
  const countEl = document.getElementById('exam-selected-lesson-count');
  if (countEl) {
    countEl.textContent = selected === 0 ? `全部${total}篇` : `已选${selected}/${total}篇`;
  }
}

function examSelectTemplate(templateId) {
  ExamPrintState.selectedTemplate = templateId;
  const tpl = EXAM_CONFIG.paperTemplates.find(t => t.id === templateId);
  if (tpl && tpl.totalQuestions > 0) {
    ExamPrintState.questionCount = tpl.totalQuestions;
    ExamPrintState.duration = tpl.duration;
  }
  ExamPrintState.saveToStorage();
  renderExamPrint(ExamPrintState.currentGrade);
}

function examSelectDifficulty(diffId) {
  ExamPrintState.difficulty = diffId;
  ExamPrintState.saveToStorage();
  renderExamPrint(ExamPrintState.currentGrade);
}

function examToggleType(typeId) {
  const idx = ExamPrintState.selectedTypes.indexOf(typeId);
  if (idx >= 0) {
    ExamPrintState.selectedTypes.splice(idx, 1);
  } else {
    ExamPrintState.selectedTypes.push(typeId);
  }
  ExamPrintState.saveToStorage();
  renderExamPrint(ExamPrintState.currentGrade);
}

function examUpdateCount(val) {
  ExamPrintState.questionCount = parseInt(val);
  document.getElementById('exam-count-display').textContent = val + '题';
}

function examUpdateDuration(val) {
  ExamPrintState.duration = parseInt(val);
  document.getElementById('exam-duration-display').textContent = val + '分钟';
}

function examGeneratePaper() {
  if (ExamPrintState.selectedTypes.length === 0) {
    showNotification('请至少选择一种题型', 'warning');
    return;
  }

  const paper = ExamPrintEngine.generatePaper({
    grade: ExamPrintState.currentGrade,
    types: ExamPrintState.selectedTypes,
    difficulty: ExamPrintState.difficulty,
    questionCount: ExamPrintState.questionCount,
    template: ExamPrintState.selectedTemplate,
    duration: ExamPrintState.duration,
    selectedLessons: ExamPrintState.selectedLessons,
  });

  if (!paper) {
    showNotification('试卷生成失败，请检查年级数据', 'error');
    return;
  }

  ExamPrintState.generatedPaper = paper;
  ExamPrintState.savePaperToHistory(paper);
  renderExamPreview(paper);

  // 游戏化奖励
  if (typeof GameData !== 'undefined') {
    GameData.points += 5;
    GameData.exp += 3;
    if (typeof saveGameData === 'function') saveGameData();
  }
}

function renderExamPreview(paper) {
  const area = document.getElementById('exam-preview-area');
  if (!area) return;

  // 按题型分组
  const grouped = {};
  for (const q of paper.questions) {
    if (!grouped[q.type]) grouped[q.type] = [];
    grouped[q.type].push(q);
  }

  const typeNames = {
    pinyin_fill: '一、看拼音写汉字',
    char_pinyin: '一、给汉字注拼音',
    word_meaning: '二、词语解释',
    reading_choice: '三、阅读理解',
    poetry_fill: '四、古诗词填空',
    sentence_fill: '五、句子填空',
    essay: '六、作文',
  };

  let sectionNum = 0;
  let html = `<div class="exam-paper" id="exam-paper">
    <div class="exam-paper-header">
      <div class="exam-school-info">
        ${ExamPrintState.schoolName ? `<span>${ExamPrintState.schoolName}</span>` : ''}
        ${ExamPrintState.className ? `<span>${ExamPrintState.className}</span>` : ''}
      </div>
      <h2 class="exam-title">${paper.grade}年级语文${paper.templateName}</h2>
      <div class="exam-meta">
        <span>考试时间：${paper.duration}分钟</span>
        <span>满分：${paper.totalScore}分</span>
        ${ExamPrintState.studentName ? `<span>姓名：______</span>` : '<span>姓名：______</span>'}
        <span>得分：______</span>
      </div>
    </div>

    <div class="exam-notice">
      <p><strong>注意事项：</strong>请认真审题，仔细作答，保持卷面整洁。</p>
    </div>`;

  for (const [type, questions] of Object.entries(grouped)) {
    sectionNum++;
    const sectionName = typeNames[type] || `第${sectionNum}部分`;
    const sectionScore = questions.reduce((s, q) => s + q.score, 0);

    html += `<div class="exam-section">
      <h3 class="exam-section-title">${sectionName}（共${sectionScore}分）</h3>`;

    for (const q of questions) {
      html += renderExamQuestion(q);
    }

    html += `</div>`;
  }

  html += `</div>`;

  // 操作按钮
  html += `<div class="exam-print-actions">
    <button class="btn-exam-print" onclick="examPrintPaper()">
      <i class="fas fa-print"></i> 打印试卷
    </button>
    <button class="btn-exam-pdf" onclick="examExportPDF()">
      <i class="fas fa-file-pdf"></i> 导出PDF
    </button>
    <button class="btn-exam-reprint" onclick="examGeneratePaper()">
      <i class="fas fa-redo"></i> 重新生成
    </button>
  </div>`;

  // 答案部分
  if (ExamPrintState.includeAnswer) {
    html += renderAnswerSheet(paper);
  }

  area.innerHTML = html;
}

function renderExamQuestion(q) {
  let html = `<div class="exam-question" data-type="${q.type}">
    <div class="exam-q-header">
      <span class="exam-q-number">${q.number}.</span>
      <span class="exam-q-score">（${q.score}分）</span>
    </div>`;

  switch (q.type) {
    case 'pinyin_fill':
      html += `<div class="exam-q-body">
        <p class="exam-q-text">${q.question} → ________</p>
      </div>`;
      break;

    case 'char_pinyin':
      html += `<div class="exam-q-body">
        <p class="exam-q-text exam-char-large">${q.question} （&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;）</p>
      </div>`;
      break;

    case 'word_meaning':
      html += `<div class="exam-q-body">
        <p class="exam-q-text"><strong>${q.question}</strong>${q.hint ? `（${q.hint}）` : ''}：________</p>
      </div>`;
      break;

    case 'reading_choice':
      html += `<div class="exam-q-body">
        <p class="exam-q-text">${q.question}</p>
        <div class="exam-options">
          ${q.options
            .map(
              opt => `
            <div class="exam-option">
              <span class="exam-option-label">${opt.label}.</span>
              <span class="exam-option-text">${opt.text}</span>
            </div>
          `
            )
            .join('')}
        </div>
      </div>`;
      break;

    case 'poetry_fill':
      html += `<div class="exam-q-body">
        <p class="exam-q-text exam-poetry">${q.question}</p>
      </div>`;
      break;

    case 'sentence_fill':
      html += `<div class="exam-q-body">
        <p class="exam-q-text">${q.question}</p>
      </div>`;
      break;

    case 'essay':
      html += `<div class="exam-q-body">
        <p class="exam-q-text">题目：《${q.question}》</p>
        <p class="exam-q-hint">要求：语句通顺，内容具体，不少于${q.wordCount}字。</p>
        <div class="exam-essay-lines">
          ${Array(10).fill('<div class="exam-essay-line"></div>').join('')}
        </div>
      </div>`;
      break;
  }

  html += `</div>`;
  return html;
}

function renderAnswerSheet(paper) {
  const grouped = {};
  for (const q of paper.questions) {
    if (!grouped[q.type]) grouped[q.type] = [];
    grouped[q.type].push(q);
  }

  const typeNames = {
    pinyin_fill: '看拼音写汉字',
    char_pinyin: '给汉字注拼音',
    word_meaning: '词语解释',
    reading_choice: '阅读理解',
    poetry_fill: '古诗词填空',
    sentence_fill: '句子填空',
    essay: '作文',
  };

  let html = `<div class="exam-answer-sheet" id="exam-answer-sheet">
    <h3 class="exam-answer-title">参考答案</h3>`;

  for (const [type, questions] of Object.entries(grouped)) {
    const typeName = typeNames[type] || type;
    html += `<div class="exam-answer-section">
      <h4>${typeName}</h4>`;

    for (const q of questions) {
      if (q.type === 'reading_choice') {
        html += `<div class="exam-answer-item">
          <span class="exam-answer-num">${q.number}.</span>
          <span class="exam-answer-val">${q.answer}</span>
          <span class="exam-answer-explain">${q.explanation || ''}</span>
        </div>`;
      } else if (q.type === 'essay') {
        html += `<div class="exam-answer-item">
          <span class="exam-answer-num">${q.number}.</span>
          <span class="exam-answer-explain">作文评分标准：内容（40%）+ 表达（30%）+ 结构（20%）+ 书写（10%）</span>
        </div>`;
      } else {
        html += `<div class="exam-answer-item">
          <span class="exam-answer-num">${q.number}.</span>
          <span class="exam-answer-val">${q.answer}</span>
        </div>`;
      }
    }

    html += `</div>`;
  }

  html += `</div>`;
  return html;
}

// ============ 打印与PDF导出 ============
function examPrintPaper() {
  const paper = document.getElementById('exam-paper');
  if (!paper) return;

  // 创建打印窗口
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>试卷打印</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Noto Sans SC', 'SimSun', '宋体', sans-serif; font-size: 14px; line-height: 1.8; color: #333; padding: 20px; }
        .exam-paper { max-width: 800px; margin: 0 auto; }
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
        @media print {
          body { padding: 0; }
          .exam-question { page-break-inside: avoid; }
          .exam-answer-sheet { page-break-before: always; }
        }
      </style>
    </head>
    <body>
      ${paper.outerHTML}
      ${ExamPrintState.includeAnswer ? document.getElementById('exam-answer-sheet')?.outerHTML || '' : ''}
    </body>
    </html>
  `);
  printWindow.document.close();
  setTimeout(() => {
    printWindow.print();
  }, 500);
}

function examExportPDF() {
  const paper = document.getElementById('exam-paper');
  if (!paper) {
    showNotification('请先生成试卷', 'warning');
    return;
  }

  // 通过 Electron IPC 导出 PDF
  if (window.electronAPI && window.electronAPI.exportPDF) {
    const paperHTML = document.getElementById('exam-paper').outerHTML;
    const answerHTML = ExamPrintState.includeAnswer
      ? document.getElementById('exam-answer-sheet')?.outerHTML || ''
      : '';
    window.electronAPI.exportPDF(paperHTML, answerHTML).then(result => {
      if (result.success) {
        showNotification('PDF已保存到: ' + result.path, 'success');
      } else {
        showNotification('PDF导出失败: ' + result.error, 'error');
      }
    });
  } else {
    // 降级方案：使用打印功能
    showNotification('正在使用打印功能导出PDF，请在打印对话框中选择"另存为PDF"', 'info');
    examPrintPaper();
  }
}

// ============ 初始化 ============
function initExamPrint() {
  ExamPrintState.init();
}

// ============ 模块导出 ============
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    EXAM_CONFIG,
    ExamPrintState,
    ExamPrintEngine,
    renderExamPrint,
    initExamPrint,
    examGeneratePaper,
  };
}
