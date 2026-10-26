// 图片助手模块 - 处理课文配图

// ============ 图片配置 ============
const ImageConfig = {
  // 使用免费的占位图服务
  fallbackServices: [
    'https://via.placeholder.com/{width}x{height}/{bg}/{text}',
    'https://placehold.co/{width}x{height}/{bg}/{text}',
  ],
  // 默认尺寸
  cardWidth: 400,
  cardHeight: 300,
};

// ============ 分类图标映射 ============
const CATEGORY_ICONS = {
  寓言: 'book-reader',
  成语: 'theater-masks',
  古诗: 'scroll',
  散文: 'feather-alt',
  记叙文: 'pen-fancy',
  说明文: 'info-circle',
  童话: 'magic',
  神话: 'dragon',
  历史: 'landmark',
  科学: 'flask',
  自然: 'leaf',
  动物: 'paw',
  植物: 'seedling',
  季节: 'sun',
  节日: 'gift',
  人物: 'user',
  品德: 'heart',
  爱国: 'flag',
  default: 'book',
};

// ============ 分类颜色映射 ============
const CATEGORY_COLORS = {
  寓言: { bg: 'FFE4B5', text: '8B4513' },
  成语: { bg: 'E6F3FF', text: '0066CC' },
  古诗: { bg: 'FFF0F5', text: 'CC3366' },
  散文: { bg: 'F0FFF0', text: '006600' },
  记叙文: { bg: 'F5F5DC', text: '666633' },
  说明文: { bg: 'E0FFFF', text: '006666' },
  童话: { bg: 'FFE4E1', text: 'CC3333' },
  神话: { bg: 'E6E6FA', text: '6633CC' },
  历史: { bg: 'FAEBD7', text: '996633' },
  科学: { bg: 'E8F5E9', text: '2E7D32' },
  自然: { bg: 'F1F8E9', text: '558B2F' },
  动物: { bg: 'FFF8E1', text: 'F57F17' },
  植物: { bg: 'E8F5E9', text: '33691E' },
  季节: { bg: 'E3F2FD', text: '1565C0' },
  节日: { bg: 'FCE4EC', text: 'AD1457' },
  人物: { bg: 'EDE7F6', text: '4527A0' },
  品德: { bg: 'FBE9E7', text: 'BF360C' },
  爱国: { bg: 'FFEBEE', text: 'C62828' },
  default: { bg: 'F5F5F5', text: '666666' },
};

// ============ 获取分类图标 ============
function getCategoryIcon(category) {
  return CATEGORY_ICONS[category] || CATEGORY_ICONS['default'];
}

// ============ 获取分类颜色 ============
function getCategoryColor(category) {
  return CATEGORY_COLORS[category] || CATEGORY_COLORS['default'];
}

// ============ 生成课文卡片图片HTML ============
function generateCardImageHTML(lesson) {
  if (lesson.image && lesson.image.startsWith('http')) {
    return `<img src="${lesson.image}" alt="${lesson.title}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'image-placeholder\\'><i class=\\'fas ${getCategoryIcon(lesson.category)}\\'></i></div>'">`;
  }

  const colors = getCategoryColor(lesson.category);
  const icon = getCategoryIcon(lesson.category);
  return `<div class="image-placeholder" style="background:#${colors.bg};color:#${colors.text}"><i class="fas ${icon}"></i></div>`;
}
