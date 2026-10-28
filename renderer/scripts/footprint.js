// 语文小霸王 - 学习足迹模块
// 用 localStorage 记录「完成阅读」与「练习成绩」，并在首页渲染「最近学习」卡片
// 记录结构：
//   阅读：{ type: 'reading', lessonId, title, grade, date }
//   练习：{ type: 'practice', lessonId, title, grade, date, correct, total }

const FOOTPRINT_STORAGE_KEY = 'yuwen-footprints';
const FOOTPRINT_MAX_RECORDS = 200;

// ============ 存储读写 ============
function getFootprintRecords() {
  try {
    const saved = localStorage.getItem(FOOTPRINT_STORAGE_KEY);
    if (saved) {
      const records = JSON.parse(saved);
      if (Array.isArray(records)) return records;
    }
  } catch (e) {
    console.error('读取学习足迹失败:', e);
  }
  return [];
}

function saveFootprintRecords(records) {
  try {
    // 限制条数，避免无限增长
    localStorage.setItem(
      FOOTPRINT_STORAGE_KEY,
      JSON.stringify(records.slice(0, FOOTPRINT_MAX_RECORDS))
    );
  } catch (e) {
    console.error('保存学习足迹失败:', e);
  }
}

// 本地日期（YYYY-MM-DD），避免 toISOString 的 UTC 偏移问题
function footprintToday() {
  const d = new Date();
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

// ============ 记录写入 ============
// 完成阅读一课时记录（同课同日只记一次）
function recordReadingFootprint(lesson) {
  if (!lesson || !lesson.id) return;
  const records = getFootprintRecords();
  const date = footprintToday();
  const exists = records.some(
    r => r.type === 'reading' && r.lessonId === lesson.id && r.date === date
  );
  if (exists) return;

  records.unshift({
    type: 'reading',
    lessonId: lesson.id,
    title: lesson.title,
    grade: lesson.grade,
    date,
  });
  saveFootprintRecords(records);
  renderFootprint();
}

// 练习答题结束时记录（同课同日重复练习时更新为最新成绩）
function recordPracticeFootprint(lesson, correct, total) {
  if (!lesson || !lesson.id) return;
  const records = getFootprintRecords();
  const date = footprintToday();
  const index = records.findIndex(
    r => r.type === 'practice' && r.lessonId === lesson.id && r.date === date
  );

  if (index !== -1) {
    records.splice(index, 1);
  }
  records.unshift({
    type: 'practice',
    lessonId: lesson.id,
    title: lesson.title,
    grade: lesson.grade,
    date,
    correct: correct || 0,
    total: total || 0,
  });
  saveFootprintRecords(records);
  renderFootprint();
}

// ============ 汇总统计 ============
function getFootprintSummary(records) {
  const lessonIds = new Set(records.map(r => r.lessonId));
  let totalQuestions = 0;
  let totalCorrect = 0;
  records.forEach(r => {
    if (r.type === 'practice' && r.total > 0) {
      totalQuestions += r.total;
      totalCorrect += r.correct || 0;
    }
  });
  return {
    lessonCount: lessonIds.size,
    accuracy: totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : null,
  };
}

// ============ 首页卡片渲染 ============
function formatFootprintDate(dateStr) {
  // YYYY-MM-DD -> M月D日
  const parts = String(dateStr).split('-');
  if (parts.length < 3) return dateStr;
  return `${parseInt(parts[1], 10)}月${parseInt(parts[2], 10)}日`;
}

function renderFootprint() {
  const container = document.getElementById('footprint-panel');
  if (!container) return;

  const records = getFootprintRecords();
  const summary = getFootprintSummary(records);
  const recent = records.slice(0, 5);

  let listHtml;
  if (recent.length === 0) {
    listHtml = '<div class="footprint-empty">还没有学习记录，选一课开始今天的学习吧！</div>';
  } else {
    listHtml = recent
      .map(
        r => `
      <div class="footprint-item">
        <span class="footprint-icon">${r.type === 'practice' ? '✏️' : '📖'}</span>
        <span class="footprint-title">${r.title}</span>
        <span class="footprint-detail">${
          r.type === 'practice' ? `答对 ${r.correct}/${r.total}` : '完成阅读'
        }</span>
        <span class="footprint-date">${formatFootprintDate(r.date)}</span>
      </div>
    `
      )
      .join('');
  }

  container.innerHTML = `
    <h3>📚 最近学习</h3>
    <div class="footprint-summary">
      <div class="footprint-stat">
        <span class="footprint-stat-value">${summary.lessonCount}</span>
        <span class="footprint-stat-label">累计学习课数</span>
      </div>
      <div class="footprint-stat">
        <span class="footprint-stat-value">${summary.accuracy === null ? '—' : summary.accuracy + '%'}</span>
        <span class="footprint-stat-label">练习总正确率</span>
      </div>
    </div>
    <div class="footprint-list">${listHtml}</div>
  `;
}

// ============ 初始化 ============
function initFootprint() {
  renderFootprint();
}

// ============ 模块导出 ============
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    FOOTPRINT_STORAGE_KEY,
    getFootprintRecords,
    recordReadingFootprint,
    recordPracticeFootprint,
    getFootprintSummary,
    renderFootprint,
    initFootprint,
  };
}
