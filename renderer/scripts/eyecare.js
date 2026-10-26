// 语文小霸王 - 护眼系统
// 蓝光过滤 / 休息提醒 / 用眼时长 / 眼保健操

// ============ 护眼状态 ============
const EyeCareData = {
  enabled: true, // 护眼模式开关
  blueLightFilter: 0, // 蓝光过滤强度 0-100
  brightness: 100, // 屏幕亮度 50-100
  breakInterval: 20, // 休息提醒间隔（分钟）
  eyeExerciseReminder: true, // 眼保健操提醒
  distanceReminder: true, // 距离提醒
  readingStartTime: null, // 本次阅读开始时间
  totalReadingToday: 0, // 今日累计阅读分钟
  lastBreakTime: null, // 上次休息时间
  breakCount: 0, // 今日休息次数
  isOnBreak: false, // 是否正在休息中
  timerId: null, // 定时器ID
};

// ============ 护眼配置 ============
const EYE_CARE_CONFIG = {
  // 20-20-20法则：每20分钟，看20英尺（6米）外，持续20秒
  rule20_20_20: {
    interval: 20, // 分钟
    distance: 6, // 米
    duration: 20, // 秒
  },
  // 连续阅读限制
  maxContinuousReading: 45, // 分钟
  // 眼保健操步骤
  exercises: [
    { name: '按揉攒竹穴', desc: '用双手大拇指按揉眉头凹陷处，节拍8×8', icon: '👆', duration: 30 },
    { name: '按压睛明穴', desc: '用双手食指按压鼻根两侧凹陷处，节拍8×8', icon: '👃', duration: 30 },
    { name: '按揉四白穴', desc: '用双手食指按揉眼眶下缘凹陷处，节拍8×8', icon: '👆', duration: 30 },
    { name: '按揉太阳穴', desc: '用双手大拇指按揉太阳穴，节拍8×8', icon: '🌀', duration: 30 },
    {
      name: '刮上眼眶',
      desc: '用双手食指弯曲，从内向外刮上眼眶，节拍8×8',
      icon: '👁️',
      duration: 30,
    },
    { name: '远眺放松', desc: '看向窗外远处绿色植物，放松眼睛', icon: '🌿', duration: 60 },
  ],
};

// ============ 初始化护眼系统 ============
function initEyeCare() {
  loadEyeCareSettings();
  applyEyeCareSettings();
  startReadingTimer();

  // 页面可见性变化时暂停/恢复计时
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      pauseReadingTimer();
    } else {
      resumeReadingTimer();
    }
  });

  console.log('护眼系统初始化完成');
}

// ============ 加载护眼设置 ============
function loadEyeCareSettings() {
  const saved = localStorage.getItem('yuwen-eyecare');
  if (saved) {
    try {
      const settings = JSON.parse(saved);
      Object.assign(EyeCareData, {
        enabled: settings.enabled !== undefined ? settings.enabled : true,
        blueLightFilter: settings.blueLightFilter || 0,
        brightness: settings.brightness || 100,
        breakInterval: settings.breakInterval || 20,
        eyeExerciseReminder:
          settings.eyeExerciseReminder !== undefined ? settings.eyeExerciseReminder : true,
        distanceReminder:
          settings.distanceReminder !== undefined ? settings.distanceReminder : true,
        totalReadingToday: settings.totalReadingToday || 0,
        breakCount: settings.breakCount || 0,
      });
    } catch (e) {}
  }
}

// ============ 保存护眼设置 ============
function saveEyeCareSettings() {
  localStorage.setItem(
    'yuwen-eyecare',
    JSON.stringify({
      enabled: EyeCareData.enabled,
      blueLightFilter: EyeCareData.blueLightFilter,
      brightness: EyeCareData.brightness,
      breakInterval: EyeCareData.breakInterval,
      eyeExerciseReminder: EyeCareData.eyeExerciseReminder,
      distanceReminder: EyeCareData.distanceReminder,
      totalReadingToday: EyeCareData.totalReadingToday,
      breakCount: EyeCareData.breakCount,
    })
  );
}

// ============ 应用护眼设置 ============
function applyEyeCareSettings() {
  // 蓝光过滤
  let overlay = document.getElementById('blue-light-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'blue-light-overlay';
    document.body.appendChild(overlay);
  }

  if (EyeCareData.enabled && EyeCareData.blueLightFilter > 0) {
    overlay.style.display = 'block';
    overlay.style.opacity = (EyeCareData.blueLightFilter / 100) * 0.4;
  } else {
    overlay.style.display = 'none';
  }

  // 亮度调节
  if (EyeCareData.enabled) {
    document.body.style.filter = `brightness(${EyeCareData.brightness / 100})`;
  } else {
    document.body.style.filter = '';
  }
}

// ============ 阅读计时器 ============
function startReadingTimer() {
  if (EyeCareData.timerId) clearInterval(EyeCareData.timerId);

  EyeCareData.readingStartTime = Date.now();
  EyeCareData.lastBreakTime = Date.now();

  // 每30秒检查一次
  EyeCareData.timerId = setInterval(() => {
    if (!EyeCareData.enabled || EyeCareData.isOnBreak) return;

    const now = Date.now();
    const minutesSinceStart = (now - EyeCareData.readingStartTime) / 60000;
    const minutesSinceBreak = (now - EyeCareData.lastBreakTime) / 60000;

    // 20-20-20法则提醒
    if (minutesSinceBreak >= EYE_CARE_CONFIG.rule20_20_20.interval) {
      showBreakReminder();
    }

    // 连续阅读过长提醒
    if (minutesSinceStart >= EYE_CARE_CONFIG.maxContinuousReading) {
      showLongReadingWarning();
    }

    // 更新今日累计阅读时间
    EyeCareData.totalReadingToday = Math.floor(minutesSinceStart);
    updateEyeCareDisplay();
  }, 30000);
}

function pauseReadingTimer() {
  // 页面不可见时暂停
}

function resumeReadingTimer() {
  // 页面可见时恢复
}

// ============ 休息提醒 ============
function showBreakReminder() {
  if (EyeCareData.isOnBreak) return;

  EyeCareData.isOnBreak = true;

  const overlay = document.createElement('div');
  overlay.id = 'break-overlay';
  overlay.className = 'eye-care-overlay';

  // 判断是否需要眼保健操
  const needsExercise =
    EyeCareData.eyeExerciseReminder &&
    EyeCareData.breakCount > 0 &&
    EyeCareData.breakCount % 3 === 0;

  overlay.innerHTML = `
    <div class="break-card">
      <div class="break-icon">👀</div>
      <h2 class="break-title">休息一下吧！</h2>
      <p class="break-subtitle">你已经连续阅读了 ${EyeCareData.breakInterval} 分钟</p>
      
      <div class="break-tip">
        <div class="tip-icon">🌳</div>
        <p><strong>20-20-20 法则</strong></p>
        <p>看向窗外 <strong>6米</strong> 远的地方<br>放松眼睛 <strong>20秒</strong></p>
      </div>
      
      <div class="break-countdown" id="break-countdown">
        <div class="countdown-circle">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#e0e0e0" stroke-width="8"/>
            <circle cx="50" cy="50" r="45" fill="none" stroke="#4ECDC4" stroke-width="8" 
                    stroke-dasharray="283" stroke-dashoffset="0" id="countdown-ring"
                    transform="rotate(-90 50 50)"/>
          </svg>
          <span class="countdown-text" id="countdown-text">20</span>
        </div>
        <p class="countdown-label">秒后可继续</p>
      </div>
      
      ${
        needsExercise
          ? `
        <div class="exercise-prompt">
          <p>🎯 做一组眼保健操保护视力吧！</p>
          <button class="btn-exercise" onclick="showEyeExercises()">
            <i class="fas fa-hand-sparkles"></i> 开始眼保健操
          </button>
        </div>
      `
          : ''
      }
      
      <button class="btn-break-done" id="btn-break-done" disabled onclick="endBreak()">
        <i class="fas fa-check"></i> 休息完毕，继续学习
      </button>
      
      <div class="break-stats">
        <span>今日已休息 <strong>${EyeCareData.breakCount}</strong> 次</span>
        <span>·</span>
        <span>累计阅读 <strong>${Math.floor(EyeCareData.totalReadingToday)}</strong> 分钟</span>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // 20秒倒计时
  let countdown = 20;
  const countdownText = document.getElementById('countdown-text');
  const countdownRing = document.getElementById('countdown-ring');
  const btnDone = document.getElementById('btn-break-done');

  const timer = setInterval(() => {
    countdown--;
    if (countdownText) countdownText.textContent = countdown;
    if (countdownRing) {
      const progress = ((20 - countdown) / 20) * 283;
      countdownRing.style.strokeDashoffset = progress;
    }

    if (countdown <= 0) {
      clearInterval(timer);
      if (btnDone) {
        btnDone.disabled = false;
        btnDone.classList.add('ready');
      }
      if (countdownText) countdownText.textContent = '✓';
    }
  }, 1000);

  // 播放提示音
  if (typeof playSound === 'function') playSound('sign');
}

// ============ 结束休息 ============
function endBreak() {
  EyeCareData.isOnBreak = false;
  EyeCareData.lastBreakTime = Date.now();
  EyeCareData.breakCount++;
  saveEyeCareSettings();

  const overlay = document.getElementById('break-overlay');
  if (overlay) {
    overlay.classList.add('fade-out');
    setTimeout(() => overlay.remove(), 500);
  }
}

// ============ 长时间阅读警告 ============
function showLongReadingWarning() {
  const overlay = document.createElement('div');
  overlay.id = 'long-reading-overlay';
  overlay.className = 'eye-care-overlay';
  overlay.innerHTML = `
    <div class="break-card warning-card">
      <div class="break-icon">⚠️</div>
      <h2 class="break-title">阅读时间过长</h2>
      <p class="break-subtitle">你已经连续阅读超过 ${EYE_CARE_CONFIG.maxContinuousReading} 分钟</p>
      <div class="break-tip warning-tip">
        <p>长时间阅读会导致眼睛疲劳、视力下降</p>
        <p>建议：<strong>休息10-15分钟</strong>，做做眼保健操</p>
      </div>
      <div class="warning-actions">
        <button class="btn-break-done" onclick="document.getElementById('long-reading-overlay').remove()">
          <i class="fas fa-check"></i> 我知道了
        </button>
        <button class="btn-exercise" onclick="document.getElementById('long-reading-overlay').remove(); showEyeExercises();">
          <i class="fas fa-hand-sparkles"></i> 做眼保健操
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}

// ============ 眼保健操 ============
function showEyeExercises() {
  const exercises = EYE_CARE_CONFIG.exercises;

  const overlay = document.createElement('div');
  overlay.id = 'exercise-overlay';
  overlay.className = 'eye-care-overlay';
  overlay.innerHTML = `
    <div class="exercise-card">
      <h2>👁️ 眼保健操</h2>
      <p class="exercise-subtitle">跟着节奏，保护视力</p>
      
      <div class="exercise-steps" id="exercise-steps">
        ${exercises
          .map(
            (ex, i) => `
          <div class="exercise-step ${i === 0 ? 'active' : ''}" data-step="${i}">
            <div class="step-number">${i + 1}</div>
            <div class="step-content">
              <div class="step-icon">${ex.icon}</div>
              <div class="step-name">${ex.name}</div>
              <div class="step-desc">${ex.desc}</div>
              <div class="step-timer" id="step-timer-${i}">${ex.duration}秒</div>
            </div>
          </div>
        `
          )
          .join('')}
      </div>
      
      <div class="exercise-progress">
        <div class="exercise-progress-bar">
          <div class="exercise-progress-fill" id="exercise-progress-fill" style="width: 0%"></div>
        </div>
        <span class="exercise-progress-text" id="exercise-progress-text">1 / ${exercises.length}</span>
      </div>
      
      <div class="exercise-controls">
        <button class="btn-exercise-control" id="btn-exercise-start" onclick="startExerciseTimer()">
          <i class="fas fa-play"></i> 开始
        </button>
        <button class="btn-exercise-control" id="btn-exercise-next" onclick="nextExercise()" style="display:none">
          <i class="fas fa-forward"></i> 下一步
        </button>
        <button class="btn-exercise-control btn-skip" onclick="closeExercise()">
          <i class="fas fa-times"></i> 跳过
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
}

let currentExerciseStep = 0;
let exerciseTimerId = null;

function startExerciseTimer() {
  const exercises = EYE_CARE_CONFIG.exercises;
  const btnStart = document.getElementById('btn-exercise-start');
  const btnNext = document.getElementById('btn-exercise-next');
  if (btnStart) btnStart.style.display = 'none';
  if (btnNext) btnNext.style.display = 'inline-flex';

  runExerciseStep(currentExerciseStep);
}

function runExerciseStep(stepIndex) {
  const exercises = EYE_CARE_CONFIG.exercises;
  if (stepIndex >= exercises.length) {
    finishExercises();
    return;
  }

  const ex = exercises[stepIndex];
  let remaining = ex.duration;

  // 更新UI
  document.querySelectorAll('.exercise-step').forEach((el, i) => {
    el.classList.toggle('active', i === stepIndex);
    el.classList.toggle('completed', i < stepIndex);
  });

  const timerEl = document.getElementById(`step-timer-${stepIndex}`);
  const progressFill = document.getElementById('exercise-progress-fill');
  const progressText = document.getElementById('exercise-progress-text');

  if (exerciseTimerId) clearInterval(exerciseTimerId);

  exerciseTimerId = setInterval(() => {
    remaining--;
    if (timerEl) timerEl.textContent = `${remaining}秒`;
    if (progressFill) {
      const totalDuration = exercises.reduce((sum, e) => sum + e.duration, 0);
      const completedDuration = exercises
        .slice(0, stepIndex)
        .reduce((sum, e) => sum + e.duration, 0);
      const currentProgress = ((ex.duration - remaining) / totalDuration) * 100;
      const overallProgress = (completedDuration / totalDuration) * 100 + currentProgress;
      progressFill.style.width = `${overallProgress}%`;
    }
    if (progressText) progressText.textContent = `${stepIndex + 1} / ${exercises.length}`;

    if (remaining <= 0) {
      clearInterval(exerciseTimerId);
      if (timerEl) timerEl.textContent = '✓ 完成';
      currentExerciseStep++;
      setTimeout(() => runExerciseStep(currentExerciseStep), 500);
    }
  }, 1000);
}

function nextExercise() {
  clearInterval(exerciseTimerId);
  const exercises = EYE_CARE_CONFIG.exercises;
  const timerEl = document.getElementById(`step-timer-${currentExerciseStep}`);
  if (timerEl) timerEl.textContent = '⏭ 跳过';
  currentExerciseStep++;
  runExerciseStep(currentExerciseStep);
}

function finishExercises() {
  const overlay = document.getElementById('exercise-overlay');
  if (overlay) {
    overlay.querySelector('.exercise-card').innerHTML = `
      <div class="exercise-complete">
        <div class="complete-icon">🎉</div>
        <h2>眼保健操完成！</h2>
        <p>你的眼睛得到了很好的放松</p>
        <p class="complete-tip">记得每学习20分钟就休息一下哦~</p>
        <button class="btn-break-done ready" onclick="closeExercise()">
          <i class="fas fa-check"></i> 继续学习
        </button>
      </div>
    `;
  }
}

function closeExercise() {
  if (exerciseTimerId) clearInterval(exerciseTimerId);
  currentExerciseStep = 0;
  const overlay = document.getElementById('exercise-overlay');
  if (overlay) {
    overlay.classList.add('fade-out');
    setTimeout(() => overlay.remove(), 500);
  }
}

// ============ 更新护眼显示 ============
function updateEyeCareDisplay() {
  const timeEl = document.getElementById('eye-reading-time');
  if (timeEl) timeEl.textContent = `${Math.floor(EyeCareData.totalReadingToday)}分钟`;

  const breakEl = document.getElementById('eye-break-count');
  if (breakEl) breakEl.textContent = `${EyeCareData.breakCount}次`;
}

// ============ 护眼设置面板HTML ============
function getEyeCarePanelHTML() {
  return `
    <div class="eyecare-panel">
      <h3>👁️ 护眼设置</h3>
      
      <div class="eyecare-toggle">
        <label class="toggle-label">
          <span>护眼模式</span>
          <div class="toggle-switch ${EyeCareData.enabled ? 'on' : ''}" onclick="toggleEyeCare()">
            <div class="toggle-knob"></div>
          </div>
        </label>
      </div>
      
      <div class="eyecare-settings" style="opacity: ${EyeCareData.enabled ? 1 : 0.5}; pointer-events: ${EyeCareData.enabled ? 'auto' : 'none'}">
        <div class="eyecare-setting-item">
          <label>🟡 蓝光过滤</label>
          <div class="setting-slider">
            <input type="range" min="0" max="80" step="5" value="${EyeCareData.blueLightFilter}" 
                   oninput="setBlueLight(this.value)" class="eyecare-range">
            <span class="setting-value">${EyeCareData.blueLightFilter}%</span>
          </div>
        </div>
        
        <div class="eyecare-setting-item">
          <label>🔆 屏幕亮度</label>
          <div class="setting-slider">
            <input type="range" min="60" max="100" step="5" value="${EyeCareData.brightness}" 
                   oninput="setBrightness(this.value)" class="eyecare-range">
            <span class="setting-value">${EyeCareData.brightness}%</span>
          </div>
        </div>
        
        <div class="eyecare-setting-item">
          <label>⏰ 休息提醒间隔</label>
          <div class="interval-buttons">
            ${[15, 20, 30, 45]
              .map(
                min => `
              <button class="interval-btn ${EyeCareData.breakInterval === min ? 'active' : ''}" 
                      onclick="setBreakInterval(${min})">${min}分钟</button>
            `
              )
              .join('')}
          </div>
        </div>
        
        <div class="eyecare-setting-item">
          <label class="toggle-label">
            <span>🎯 眼保健操提醒</span>
            <div class="toggle-switch ${EyeCareData.eyeExerciseReminder ? 'on' : ''}" 
                 onclick="toggleEyeExercise()">
              <div class="toggle-knob"></div>
            </div>
          </label>
        </div>
        
        <div class="eyecare-setting-item">
          <label class="toggle-label">
            <span>📏 距离提醒</span>
            <div class="toggle-switch ${EyeCareData.distanceReminder ? 'on' : ''}" 
                 onclick="toggleDistanceReminder()">
              <div class="toggle-knob"></div>
            </div>
          </label>
        </div>
      </div>
      
      <div class="eyecare-stats">
        <div class="eyecare-stat">
          <span class="stat-icon">📖</span>
          <span class="stat-label">今日阅读</span>
          <span class="stat-value" id="eye-reading-time">${Math.floor(EyeCareData.totalReadingToday)}分钟</span>
        </div>
        <div class="eyecare-stat">
          <span class="stat-icon">☕</span>
          <span class="stat-label">今日休息</span>
          <span class="stat-value" id="eye-break-count">${EyeCareData.breakCount}次</span>
        </div>
      </div>
      
      <button class="btn-eye-exercise" onclick="showEyeExercises()">
        <i class="fas fa-hand-sparkles"></i> 立即做眼保健操
      </button>
    </div>
  `;
}

// ============ 护眼控制函数 ============
function toggleEyeCare() {
  EyeCareData.enabled = !EyeCareData.enabled;
  applyEyeCareSettings();
  saveEyeCareSettings();

  // 刷新面板
  const panel = document.querySelector('.eyecare-panel');
  if (panel) panel.outerHTML = getEyeCarePanelHTML();
}

function setBlueLight(value) {
  EyeCareData.blueLightFilter = parseInt(value);
  applyEyeCareSettings();
  saveEyeCareSettings();

  const valueEl = document.querySelector('.eyecare-setting-item:first-of-type .setting-value');
  if (valueEl) valueEl.textContent = `${value}%`;
}

function setBrightness(value) {
  EyeCareData.brightness = parseInt(value);
  applyEyeCareSettings();
  saveEyeCareSettings();
}

function setBreakInterval(minutes) {
  EyeCareData.breakInterval = minutes;
  saveEyeCareSettings();

  // 刷新按钮状态
  document.querySelectorAll('.interval-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.textContent) === minutes);
  });
}

function toggleEyeExercise() {
  EyeCareData.eyeExerciseReminder = !EyeCareData.eyeExerciseReminder;
  saveEyeCareSettings();
}

function toggleDistanceReminder() {
  EyeCareData.distanceReminder = !EyeCareData.distanceReminder;
  saveEyeCareSettings();
}

// ============ 导出 ============
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    EyeCareData,
    EYE_CARE_CONFIG,
    initEyeCare,
    loadEyeCareSettings,
    saveEyeCareSettings,
    applyEyeCareSettings,
    getEyeCarePanelHTML,
    showBreakReminder,
    endBreak,
    showEyeExercises,
    toggleEyeCare,
    setBlueLight,
    setBrightness,
    setBreakInterval,
  };
}
