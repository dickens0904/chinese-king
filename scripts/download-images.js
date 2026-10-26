// 下载二年级80篇课文配图
const https = require('https');
const fs = require('fs');
const path = require('path');

const IMAGE_DIR = path.join(__dirname, '..', 'renderer', 'images', 'grade2');

if (!fs.existsSync(IMAGE_DIR)) {
  fs.mkdirSync(IMAGE_DIR, { recursive: true });
}

// 所有图片URL映射 (lesson编号 -> CDN URL)
const IMAGE_MAP = {
  // content-grade2.js (1-15)
  '01': 'https://aka.doubaocdn.com/s/dDMe1wgmUe',
  '02': 'https://aka.doubaocdn.com/s/1gC61wgmUh',
  '03': 'https://aka.doubaocdn.com/s/ATUq1wgmUj',
  '04': 'https://aka.doubaocdn.com/s/LSrf1wgmUm',
  '05': 'https://aka.doubaocdn.com/s/wY9i1wgmUq',
  '06': 'https://aka.doubaocdn.com/s/2ErK1wgmV0',
  '07': 'https://aka.doubaocdn.com/s/IleA1wgmV0',
  '08': 'https://aka.doubaocdn.com/s/nUSj1wgmV7',
  '09': 'https://aka.doubaocdn.com/s/8hOE1wgmV9',
  '10': 'https://aka.doubaocdn.com/s/GOs61wgmVD',
  '11': 'https://aka.doubaocdn.com/s/u7Ip1wgmVO',
  '12': 'https://aka.doubaocdn.com/s/FW2Q1wgmVR',
  '13': 'https://aka.doubaocdn.com/s/UAdB1wgmVV',
  '14': 'https://aka.doubaocdn.com/s/GIig1wgmVY',
  '15': 'https://aka.doubaocdn.com/s/7zhV1wgmVb',
  // content-grade2-extra.js (16-30)
  '16': 'https://aka.doubaocdn.com/s/v6qH1wgmVn',
  '17': 'https://aka.doubaocdn.com/s/AuQj1wgmVq',
  '18': 'https://aka.doubaocdn.com/s/VMnJ1wgmVu',
  '19': 'https://aka.doubaocdn.com/s/9yKf1wgmVw',
  '20': 'https://aka.doubaocdn.com/s/YnNB1wgmW1',
  '21': 'https://aka.doubaocdn.com/s/59d31wgmWC',
  '22': 'https://aka.doubaocdn.com/s/gz1g1wgmWG',
  '23': 'https://aka.doubaocdn.com/s/eIgn1wgmWJ',
  '24': 'https://aka.doubaocdn.com/s/gGVd1wgmWO',
  '25': 'https://aka.doubaocdn.com/s/y7OD1wgmWR',
  '26': 'https://aka.doubaocdn.com/s/cSxL1wgmWe',
  '27': 'https://aka.doubaocdn.com/s/Pmdl1wgmWh',
  '28': 'https://aka.doubaocdn.com/s/yxTB1wgmWm',
  '29': 'https://aka.doubaocdn.com/s/Ebwu1wgmWq',
  '30': 'https://aka.doubaocdn.com/s/SGBY1wgmWu',
  // content-grade2-extra2.js (31-55)
  '31': 'https://aka.doubaocdn.com/s/PiSD1wgmXG',
  '32': 'https://aka.doubaocdn.com/s/xdup1wgmXI',
  '33': 'https://aka.doubaocdn.com/s/G5ev1wgmXM',
  '34': 'https://aka.doubaocdn.com/s/foEl1wgmXQ',
  '35': 'https://aka.doubaocdn.com/s/XUQu1wgmXX',
  '36': 'https://aka.doubaocdn.com/s/t1Bu1wgmXi',
  '37': 'https://aka.doubaocdn.com/s/zMrz1wgmXn',
  '38': 'https://aka.doubaocdn.com/s/qUfv1wgmXq',
  '39': 'https://aka.doubaocdn.com/s/VNYB1wgmXv',
  '40': 'https://aka.doubaocdn.com/s/s3P51wgmXx',
  '41': 'https://aka.doubaocdn.com/s/0Fef1wgmYB',
  '42': 'https://aka.doubaocdn.com/s/YtxB1wgmYE',
  '43': 'https://aka.doubaocdn.com/s/ATue1wgmYG',
  '44': 'https://aka.doubaocdn.com/s/DcVM1wgmYM',
  '45': 'https://aka.doubaocdn.com/s/toP31wgmYQ',
  '46': 'https://aka.doubaocdn.com/s/w7zA1wgmYY',
  '47': 'https://aka.doubaocdn.com/s/QzvW1wgmYb',
  '48': 'https://aka.doubaocdn.com/s/6dUH1wgmYh',
  '49': 'https://aka.doubaocdn.com/s/ThUi1wgmYl',
  '50': 'https://aka.doubaocdn.com/s/Y7401wgmYn',
  '51': 'https://aka.doubaocdn.com/s/8uZB1wgmYv',
  '52': 'https://aka.doubaocdn.com/s/g5Dd1wgmZ1',
  '53': 'https://aka.doubaocdn.com/s/e1f01wgmZ5',
  '54': 'https://aka.doubaocdn.com/s/gpem1wgmZ8',
  '55': 'https://aka.doubaocdn.com/s/toMR1wgmZC',
  // content-grade2-extra3.js (56-80)
  '56': 'https://aka.doubaocdn.com/s/FhNg1wgmZV',
  '57': 'https://aka.doubaocdn.com/s/F7111wgmZZ',
  '58': 'https://aka.doubaocdn.com/s/5UO81wgmZc',
  '59': 'https://aka.doubaocdn.com/s/kYGA1wgmZe',
  '60': 'https://aka.doubaocdn.com/s/UZL71wgmZk',
  '61': 'https://aka.doubaocdn.com/s/t6Mq1wgmZx',
  '62': 'https://aka.doubaocdn.com/s/Gb1u1wgma1',
  '63': 'https://aka.doubaocdn.com/s/PVOk1wgma4',
  '64': 'https://aka.doubaocdn.com/s/IIx41wgma8',
  '65': 'https://aka.doubaocdn.com/s/2BGn1wgmaB',
  '66': 'https://aka.doubaocdn.com/s/hGb51wgmaP',
  '67': 'https://aka.doubaocdn.com/s/NOl21wgmaT',
  '68': 'https://aka.doubaocdn.com/s/veKJ1wgmaU',
  '69': 'https://aka.doubaocdn.com/s/uKG61wgmaa',
  '70': 'https://aka.doubaocdn.com/s/Wjph1wgmab',
  '71': 'https://aka.doubaocdn.com/s/qQFJ1wgmao',
  '72': 'https://aka.doubaocdn.com/s/EIUq1wgmas',
  '73': 'https://aka.doubaocdn.com/s/K37j1wgmav',
  '74': 'https://aka.doubaocdn.com/s/tKbx1wgmb0',
  '75': 'https://aka.doubaocdn.com/s/V2Pb1wgmb3',
  '76': 'https://aka.doubaocdn.com/s/BqZI1wgmbC',
  '77': 'https://aka.doubaocdn.com/s/rHOJ1wgmbH',
  '78': 'https://aka.doubaocdn.com/s/JEJe1wgmbL',
  '79': 'https://aka.doubaocdn.com/s/6aT31wgmbP',
  '80': 'https://aka.doubaocdn.com/s/rvHi1wgmbU'
};

function downloadImage(num, url) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(IMAGE_DIR, `lesson${num}.jpg`);
    
    if (fs.existsSync(filePath)) {
      console.log(`[跳过] lesson${num}.jpg 已存在`);
      resolve();
      return;
    }

    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      // 跟随重定向
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        downloadImage(num, res.headers.location).then(resolve).catch(reject);
        return;
      }
      
      if (res.statusCode !== 200) {
        console.error(`[失败] lesson${num}: HTTP ${res.statusCode}`);
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }

      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => {
        const buffer = Buffer.concat(chunks);
        fs.writeFileSync(filePath, buffer);
        console.log(`[完成] lesson${num}.jpg (${(buffer.length / 1024).toFixed(1)}KB)`);
        resolve();
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function downloadAll() {
  const entries = Object.entries(IMAGE_MAP);
  console.log(`开始下载 ${entries.length} 张图片到 ${IMAGE_DIR}\n`);
  
  let success = 0;
  let failed = 0;
  
  // 串行下载，避免并发过多
  for (const [num, url] of entries) {
    try {
      await downloadImage(num, url);
      success++;
    } catch (e) {
      failed++;
      console.error(`  错误: ${e.message}`);
    }
  }
  
  console.log(`\n下载完成: 成功 ${success}, 失败 ${failed}`);
}

downloadAll();
