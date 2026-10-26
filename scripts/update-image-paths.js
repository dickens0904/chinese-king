// 更新二年级4个数据文件中的image字段为本地路径
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'renderer', 'data');

// 文件 -> 课程序号映射
const FILE_MAP = [
  { file: 'content-grade2.js', startDay: 1, endDay: 15 },
  { file: 'content-grade2-extra.js', startDay: 16, endDay: 30 },
  { file: 'content-grade2-extra2.js', startDay: 31, endDay: 55 },
  { file: 'content-grade2-extra3.js', startDay: 56, endDay: 80 }
];

let updated = 0;

for (const { file, startDay, endDay } of FILE_MAP) {
  const filePath = path.join(DATA_DIR, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 替换每个课的image字段
  for (let day = startDay; day <= endDay; day++) {
    const num = day.toString().padStart(2, '0');
    const localPath = `images/grade2/lesson${num}.jpg`;
    
    // 匹配 image: 'https://...' 模式并替换
    // 找到每个课程的 image 行并替换
    const imageRegex = /(image:\s*)'https:\/\/trae-api-cn\.mchost\.guru\/api\/ide\/v1\/text_to_image\?[^']*'/;
    
    if (content.match(imageRegex)) {
      content = content.replace(imageRegex, `$1'${localPath}'`);
      updated++;
    }
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`[更新] ${file}`);
}

console.log(`\n共更新 ${updated} 个image字段`);
