// 内容数据单元测试 - 课文与成语数据完整性校验
// renderer/data 下均为全局脚本（const XXX = [...]，无模块导出），
// 这里用 node:vm 在沙箱中求值后取回对应全局变量。

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const PROJECT_ROOT = path.resolve(__dirname, '..', '..');
const RENDERER_DIR = path.join(PROJECT_ROOT, 'renderer');

// 内容数据文件清单：相对路径 -> 文件内定义的全局变量名
const CONTENT_FILES = [
  ['renderer/data/content-grade2.js', 'CONTENT_GRADE_2'],
  ['renderer/data/content-grade2-extra.js', 'CONTENT_GRADE_2_EXTRA'],
  ['renderer/data/content-grade2-extra2.js', 'CONTENT_GRADE_2_EXTRA2'],
  ['renderer/data/content-grade2-extra3.js', 'CONTENT_GRADE_2_EXTRA3'],
  ['renderer/data/content-grade3.js', 'CONTENT_GRADE_3'],
  ['renderer/data/content-grade3-extra.js', 'CONTENT_GRADE_3_EXTRA'],
  ['renderer/data/content-grade3-extra2.js', 'CONTENT_GRADE_3_EXTRA2'],
  ['renderer/data/content-grade3-extra3.js', 'CONTENT_GRADE_3_EXTRA3'],
  ['renderer/data/content-grade4.js', 'CONTENT_GRADE_4'],
  ['renderer/data/content-grade4-extra.js', 'CONTENT_GRADE_4_EXTRA'],
  ['renderer/data/content-grade4-extra2.js', 'CONTENT_GRADE_4_EXTRA2'],
  ['renderer/data/content-grade4-extra3.js', 'CONTENT_GRADE_4_EXTRA3'],
  ['renderer/data/content-grade5.js', 'CONTENT_GRADE_5'],
  ['renderer/data/content-grade5-extra.js', 'CONTENT_GRADE_5_EXTRA'],
  ['renderer/data/content-grade5-extra2.js', 'CONTENT_GRADE_5_EXTRA2'],
  ['renderer/data/content-grade5-extra3.js', 'CONTENT_GRADE_5_EXTRA3'],
];

// 加载一个全局脚本文件并返回其定义的全局变量
function loadGlobalScript(relPath, globalName) {
  const code = fs.readFileSync(path.join(PROJECT_ROOT, relPath), 'utf8');
  const sandbox = {};
  vm.runInNewContext(
    `${code}\n;this.__result = typeof ${globalName} === 'undefined' ? undefined : ${globalName};`,
    sandbox
  );
  return sandbox.__result;
}

const gradeData = CONTENT_FILES.map(([file, name]) => ({
  file,
  name,
  lessons: loadGlobalScript(file, name),
}));
const allLessons = gradeData.reduce((acc, g) => acc.concat(g.lessons), []);

const CHENGYU_DATABASE = loadGlobalScript('renderer/data/chengyu-data.js', 'CHENGYU_DATABASE');
const CHENGYU_ORIGINAL_COUNT = 200; // 扩充前的条目数
const CHENGYU_NEW_COUNT = 20; // 本次新增条目数

// 找出对象中缺失（undefined/null/空字符串）的字段
function missingFields(obj, fields) {
  return fields.filter(f => obj[f] === undefined || obj[f] === null || obj[f] === '');
}

describe('课文内容数据', () => {
  test('各年级内容文件均可加载且年级数据非空', () => {
    expect(gradeData).toHaveLength(16);
    gradeData.forEach(({ file, name, lessons }) => {
      expect({ file, name, isArray: Array.isArray(lessons) }).toMatchObject({ isArray: true });
      expect({ file, name, count: lessons.length }).toEqual(
        expect.objectContaining({ count: expect.any(Number) })
      );
      expect(lessons.length).toBeGreaterThan(0);
    });
  });

  test('每课必需字段齐全（id/title/category/grade/text）', () => {
    allLessons.forEach(lesson => {
      const missing = missingFields(lesson, ['id', 'title', 'category', 'grade', 'text']);
      expect({ id: lesson.id, missing }).toEqual({ id: lesson.id, missing: [] });
    });
  });

  test('全库课文 id 唯一', () => {
    const ids = allLessons.map(l => l.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  test('每课 image 若为本地路径则文件真实存在于 renderer/images/ 下', () => {
    allLessons.forEach(lesson => {
      // image 可能是本地相对路径，也可能是外链 URL（如 text_to_image 接口），
      // URL 不对应本地文件，仅对本地路径做存在性校验
      if (lesson.image && !/^https?:\/\//i.test(lesson.image)) {
        const imagePath = path.join(RENDERER_DIR, lesson.image);
        expect({ id: lesson.id, image: lesson.image, exists: fs.existsSync(imagePath) }).toEqual({
          id: lesson.id,
          image: lesson.image,
          exists: true,
        });
      }
    });
  });
});

describe('成语数据库', () => {
  test('chengyu-data 可加载且条目数 ≥ 原有数量 + 20', () => {
    expect(Array.isArray(CHENGYU_DATABASE)).toBe(true);
    expect(CHENGYU_DATABASE.length).toBeGreaterThanOrEqual(
      CHENGYU_ORIGINAL_COUNT + CHENGYU_NEW_COUNT
    );
  });

  test('成语 id 不冲突', () => {
    const ids = CHENGYU_DATABASE.map(c => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  test('每条成语基础字段齐全（id/chars/pinyin/meaning/grade/category）', () => {
    CHENGYU_DATABASE.forEach(entry => {
      const missing = missingFields(entry, [
        'id',
        'chars',
        'pinyin',
        'meaning',
        'grade',
        'category',
      ]);
      expect({ id: entry.id, missing }).toEqual({ id: entry.id, missing: [] });
    });
  });

  test('新增成语条目含出处、例句、近义/反义词', () => {
    const newEntries = CHENGYU_DATABASE.filter(c => c.id > CHENGYU_ORIGINAL_COUNT);
    expect(newEntries.length).toBeGreaterThanOrEqual(CHENGYU_NEW_COUNT);
    newEntries.forEach(entry => {
      const missing = missingFields(entry, ['origin', 'example', 'synonyms', 'antonyms']);
      expect({ id: entry.id, missing }).toEqual({ id: entry.id, missing: [] });
    });
  });
});
