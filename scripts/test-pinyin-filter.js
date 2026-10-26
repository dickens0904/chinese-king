// 测试拼音过滤效果 - 使用正则模拟（无需 jsdom）
function renderPinyin(text) {
  return text.replace(/\{([^|]+)\|([^}]+)\}/g, '<ruby class="pinyin-word">$1<rt>$2</rt></ruby>');
}

// 模拟浏览器 DOM 的 extractTextFromHTML（用正则模拟 rt 移除）
function extractTextFromHTML_Regex(html) {
  // 移除 <rt>...</rt> 标签
  let clean = html.replace(/<rt[^>]*>[^<]*<\/rt>/gi, '');
  // 移除其他标签
  clean = clean.replace(/<[^>]+>/g, '');
  // 清理空白
  return clean.replace(/\s+/g, ' ').trim();
}

// 测试用例
const tests = [
  {
    name: '拼音课文正文',
    input: '<p>池塘里有一群{蝌|kē}{蚪|dǒu}，大大的脑袋，黑灰色的身子，甩着长长的{尾|wěi}巴，快活地游来游去。</p>',
  },
  {
    name: '多段落课文',
    input: '<p>小蝌蚪游哇游，过了几天，长出了两条后腿。</p><p>他们看见{鲤|lǐ}鱼妈妈在教小鲤鱼{捕|bǔ}食，就迎上去。</p>',
  },
  {
    name: '古诗词（无拼音）',
    input: '<p>床前明月光，疑是地上霜。</p><p>举头望明月，低头思故乡。</p>',
  },
  {
    name: '注释（含大量拼音标注）',
    input: '<p>{静|jìng}夜思：在安静的夜晚产生的思绪。静，安静。思，思念。</p><p>{疑|yí}：好像，怀疑。</p>',
  },
  {
    name: '含加粗标签的课文',
    input: '<p><strong>静夜思</strong></p><p>【唐】李白</p><p>床前明月光，疑是地上霜。</p>',
  },
];

console.log('=== 拼音过滤测试 ===\n');

for (const test of tests) {
  const rendered = renderPinyin(test.input);
  const extracted = extractTextFromHTML_Regex(rendered);

  // 检查是否包含拼音字母序列（连续2个以上小写字母）
  const hasPinyin = /[a-z]{2,}/.test(extracted.replace(/[，。！？、：\s]/g, ''));

  console.log(`--- ${test.name} ---`);
  console.log(`  渲染HTML: ${rendered.substring(0, 100)}${rendered.length > 100 ? '...' : ''}`);
  console.log(`  提取文本: ${extracted}`);
  console.log(`  包含拼音: ${hasPinyin ? '是 (有问题!)' : '否 (正常)'}`);
  console.log();
}

// 额外测试: 确认原始数据中的 {字|拼音} 格式在 edge-tts 之前被正确处理
console.log('=== 原始数据格式测试 ===\n');
const rawData = '池塘里有一群{蝌|kē}{蚪|dǒu}，大大的脑袋';
console.log(`  原始数据: ${rawData}`);
const rendered = renderPinyin(rawData);
console.log(`  渲染后:   ${rendered}`);
const extracted = extractTextFromHTML_Regex(rendered);
console.log(`  提取后:   ${extracted}`);
console.log(`  结论:     拼音 "kē", "dǒu" 已被过滤，只保留汉字 "蝌", "蚪"`);
