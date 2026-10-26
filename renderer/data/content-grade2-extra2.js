// 语文小霸王 - 二年级课文内容数据（补充篇二）
// 每日一篇课文，每篇约10分钟阅读时间
// 难字标注拼音，课文后有讲解和阅读理解练习
// 第31-55天

const CONTENT_GRADE_2_EXTRA2 = [
  // ==================== 第31天 ====================
  {
    id: 2031,
    title: '《望庐山瀑布》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 31,
    readingTime: 10,
    author: '李白',
    source: '人教版二年级上册',
    image: 'images/grade2/lesson31.jpg',
    text: `<p><strong>望庐山瀑布</strong></p>
<p>【唐】李白</p>
<p>日照香{炉|lú}生紫烟，遥看瀑布挂前{川|chuān}。</p>
<p>飞流直下三千尺，疑是银河落九天。</p>
<br>
<p><strong>【注释】</strong></p>
<p>望：远远地看。</p>
<p>庐山：山名，在今江西省。</p>
<p>香{炉|lú}：香{炉|lú}峰，庐山上的一座山峰。</p>
<p>紫烟：紫色的云雾。阳光照在水雾上，呈现出紫色。</p>
<p>遥看：远远地看。</p>
<p>挂前{川|chuān}：像一匹白布挂在山前。{川|chuān}，河流、水流。</p>
<p>飞流：飞一样流下来的水。</p>
<p>直下：垂直地流下来。</p>
<p>三千尺：形容瀑布非常非常长。不是真的三千尺，是夸张的说法。</p>
<p>疑：怀疑、好像。</p>
<p>银河：天上的一条星河。</p>
<p>九天：天空的最高处。</p>
<br>
<p><strong>【译文】</strong></p>
<p>阳光照在香{炉|lú}峰上，升起了紫色的云雾。远远望去，瀑布像一匹白布挂在山前。水流从很高很高的地方飞一样地直泻而下，让人怀疑是银河从天上落了下来。</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这首诗是唐代大诗人{李|lǐ}{白|bái}写的。{李|lǐ}{白|bái}来到庐山，被雄伟壮观的瀑布深深震撼了。前两句描写远望瀑布的景象：阳光照耀下紫雾升腾，瀑布像白布挂在山间。后两句用"飞流直下三千尺"的夸张手法，写出瀑布的高和急；用"疑是银河落九天"的奇妙想象，把瀑布比作从天而降的银河，气势磅礴，令人叹为观止。</p>`,
    explanation: {
      summary: '这首诗是唐代大诗人李白描写庐山瀑布的名篇。诗人远远望去，阳光照在香炉峰上升起紫烟，瀑布像白布挂在山前。水流从极高的地方飞泻而下，让人怀疑是银河从天上落下来。',
      keyPoints: [
        '李白是唐代最著名的诗人之一，被称为"诗仙"',
        '"日照香炉生紫烟"写阳光下山峰的美丽景色',
        '"飞流直下三千尺"用夸张手法写出瀑布的壮观',
        '"疑是银河落九天"用奇妙的想象把瀑布比作银河',
        '全诗气势磅礴，表达了诗人对大自然壮丽景色的赞叹'
      ],
      vocabulary: [
        { word: '香炉', pinyin: 'xiāng lú', meaning: '香炉峰，庐山上的一座山峰' },
        { word: '紫烟', pinyin: 'zǐ yān', meaning: '紫色的云雾' },
        { word: '遥看', pinyin: 'yáo kàn', meaning: '远远地看' },
        { word: '飞流', pinyin: 'fēi liú', meaning: '飞一样流下来的水' },
        { word: '银河', pinyin: 'yín hé', meaning: '天上的一条星河' }
      ],
      moral: '这首诗告诉我们，大自然的景色非常壮美。我们要学会用心观察自然、欣赏自然，感受大自然的神奇和美丽。'
    },
    questions: [
      {
        id: 'q2031_1',
        question: '这首诗的作者是谁？',
        options: [
          { label: 'A', text: '杜甫' },
          { label: 'B', text: '白居易' },
          { label: 'C', text: '李白' },
          { label: 'D', text: '苏轼' }
        ],
        answer: 'C',
        explanation: '这首诗是唐代大诗人李白写的，李白被称为"诗仙"。'
      },
      {
        id: 'q2031_2',
        question: '"飞流直下三千尺"用的是什么手法？',
        options: [
          { label: 'A', text: '比喻' },
          { label: 'B', text: '夸张' },
          { label: 'C', text: '拟人' },
          { label: 'D', text: '排比' }
        ],
        answer: 'B',
        explanation: '"三千尺"不是真的有三千尺，而是夸张的说法，用来形容瀑布非常高、水流非常急。'
      },
      {
        id: 'q2031_3',
        question: '"疑是银河落九天"把瀑布比作什么？',
        options: [
          { label: 'A', text: '白布' },
          { label: 'B', text: '银河' },
          { label: 'C', text: '白云' },
          { label: 'D', text: '大河' }
        ],
        answer: 'B',
        explanation: '诗人把从高处飞泻而下的瀑布比作从天上落下来的银河，想象非常奇妙。'
      },
      {
        id: 'q2031_4',
        question: '庐山在哪里？',
        options: [
          { label: 'A', text: '安徽省' },
          { label: 'B', text: '江西省' },
          { label: 'C', text: '湖南省' },
          { label: 'D', text: '四川省' }
        ],
        answer: 'B',
        explanation: '庐山在今江西省，是我国著名的风景名胜区。'
      },
      {
        id: 'q2031_5',
        question: '"日照香炉生紫烟"描写的是什么景象？',
        options: [
          { label: 'A', text: '太阳落山' },
          { label: 'B', text: '阳光照在香炉峰上，升起紫色的云雾' },
          { label: 'C', text: '有人在烧香' },
          { label: 'D', text: '紫色的花朵' }
        ],
        answer: 'B',
        explanation: '阳光照在香炉峰上，水雾呈现出紫色，像是升起了紫色的烟雾，非常美丽。'
      }
    ]
  },

  // ==================== 第32天 ====================
  {
    id: 2032,
    title: '《江雪》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 32,
    readingTime: 10,
    author: '柳宗元',
    source: '人教版二年级上册',
    image: 'images/grade2/lesson32.jpg',
    text: `<p><strong>江雪</strong></p>
<p>【唐】柳宗元</p>
<p>千山鸟飞{绝|jué}，万{径|jìng}人{踪|zōng}灭。</p>
<p>孤舟{蓑|suō}{笠|lì}翁，独钓寒江雪。</p>
<br>
<p><strong>【注释】</strong></p>
<p>江雪：江上的雪景。</p>
<p>千山：所有的山。千，不是具体数字，表示很多。</p>
<p>鸟飞{绝|jué}：连鸟都看不见了。{绝|jué}，完全没有了。</p>
<p>万{径|jìng}：所有的路。万，表示很多。{径|jìng}，小路。</p>
<p>人{踪|zōng}灭：人的脚印都没有了。{踪|zōng}，脚印、{踪|zōng}迹。灭，消失。</p>
<p>孤舟：一条孤独的小船。</p>
<p>{蓑|suō}{笠|lì}翁：穿着{蓑|suō}衣、戴着{笠|lì}帽的老翁。{蓑|suō}衣是用草或棕做的防雨衣服。</p>
<p>独钓：独自一人钓鱼。</p>
<p>寒江雪：寒冷的下着雪的江上。</p>
<br>
<p><strong>【译文】</strong></p>
<p>所有的山上都看不见飞鸟的影子，所有的路上都看不见人的脚印。只有一条孤独的小船上，一个穿着{蓑|suō}衣、戴着{笠|lì}帽的老翁，独自在寒冷的雪天里钓鱼。</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这首诗是唐代诗人{柳|liǔ}{宗|zōng}{元|yuán}写的。前两句用"千山"和"万{径|jìng}"描写了一个冰天雪地、寂静无声的世界——鸟没了，人也没了。后两句笔锋一转，写了一个孤独的老翁在雪中独自钓鱼。整个画面非常安静，老翁非常孤独，但他不怕寒冷、不怕孤独，表现了一种坚强不屈的精神。</p>`,
    explanation: {
      summary: '这首诗是唐代诗人柳宗元写的。诗中描写了大雪纷飞的冬日景象：山上没有飞鸟，路上没有行人，只有一个穿着蓑衣的老翁独自在寒冷的江上钓鱼。',
      keyPoints: [
        '柳宗元是唐代著名的文学家，"唐宋八大家"之一',
        '"千山鸟飞绝，万径人踪灭"写出了冰天雪地的寂静',
        '用"千""万"表示所有的山和路，不是具体的数字',
        '"孤舟蓑笠翁，独钓寒江雪"写出了老翁的孤独和坚强',
        '全诗营造了一个安静、纯洁的雪世界'
      ],
      vocabulary: [
        { word: '绝', pinyin: 'jué', meaning: '完全没有了' },
        { word: '径', pinyin: 'jìng', meaning: '小路' },
        { word: '踪', pinyin: 'zōng', meaning: '脚印、踪迹' },
        { word: '蓑笠', pinyin: 'suō lì', meaning: '蓑衣和斗笠，防雨雪的衣物' },
        { word: '孤舟', pinyin: 'gū zhōu', meaning: '孤独的小船' }
      ],
      moral: '这首诗表现了一种不怕孤独、坚强不屈的精神。老翁在严寒中独自垂钓，告诉我们即使在困难的环境中，也要保持坚定的意志。'
    },
    questions: [
      {
        id: 'q2032_1',
        question: '"千山鸟飞绝"中的"绝"是什么意思？',
        options: [
          { label: 'A', text: '非常好' },
          { label: 'B', text: '完全没有了' },
          { label: 'C', text: '断开' },
          { label: 'D', text: '结束' }
        ],
        answer: 'B',
        explanation: '"绝"在这里是"完全没有了"的意思。所有的山上都看不见飞鸟了，说明大雪封山，鸟都不出来了。'
      },
      {
        id: 'q2032_2',
        question: '老翁穿戴着什么？',
        options: [
          { label: 'A', text: '棉袄和围巾' },
          { label: 'B', text: '蓑衣和斗笠' },
          { label: 'C', text: '雨衣和雨帽' },
          { label: 'D', text: '草帽和布鞋' }
        ],
        answer: 'B',
        explanation: '"孤舟蓑笠翁"说老翁穿着蓑衣、戴着斗笠。蓑衣是用草或棕做的防雨雪衣服。'
      },
      {
        id: 'q2032_3',
        question: '这首诗描写的是什么季节？',
        options: [
          { label: 'A', text: '春天' },
          { label: 'B', text: '夏天' },
          { label: 'C', text: '秋天' },
          { label: 'D', text: '冬天' }
        ],
        answer: 'D',
        explanation: '诗中写到"寒江雪"，而且山上没有鸟、路上没有人，说明是寒冷的冬天，大雪纷飞。'
      },
      {
        id: 'q2032_4',
        question: '诗中的老翁在做什么？',
        options: [
          { label: 'A', text: '划船' },
          { label: 'B', text: '独自在雪天钓鱼' },
          { label: 'C', text: '散步' },
          { label: 'D', text: '赶路' }
        ],
        answer: 'B',
        explanation: '"独钓寒江雪"说的是老翁独自一人在寒冷的下着雪的江上钓鱼。'
      },
      {
        id: 'q2032_5',
        question: '这首诗的作者是谁？',
        options: [
          { label: 'A', text: '李白' },
          { label: 'B', text: '杜甫' },
          { label: 'C', text: '柳宗元' },
          { label: 'D', text: '白居易' }
        ],
        answer: 'C',
        explanation: '这首诗是唐代诗人柳宗元写的，柳宗元是"唐宋八大家"之一。'
      }
    ]
  },

  // ==================== 第33天 ====================
  {
    id: 2033,
    title: '《夜宿山寺》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 33,
    readingTime: 10,
    author: '李白',
    source: '人教版二年级上册',
    image: 'images/grade2/lesson33.jpg',
    text: `<p><strong>夜宿山寺</strong></p>
<p>【唐】李白</p>
<p>危楼高百尺，手可摘星辰。</p>
<p>不敢高声语，恐惊天上人。</p>
<br>
<p><strong>【注释】</strong></p>
<p>夜宿山寺：晚上住在山上的寺庙里。宿，住。</p>
<p>危楼：高楼。危，高。</p>
<p>高百尺：有一百尺那么高。不是真的百尺，是夸张的说法。</p>
<p>摘星辰：摘星星。星辰，星星。</p>
<p>高声语：大声说话。语，说话。</p>
<p>恐惊：恐怕惊动、害怕惊扰。恐，害怕。</p>
<p>天上人：天上的神仙。</p>
<br>
<p><strong>【译文】</strong></p>
<p>山上寺庙的楼房真高啊，好像有一百尺那么高。站在楼上，一伸手就能摘到天上的星星。在这里不敢大声说话，怕惊动了天上的神仙。</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这首诗是唐代大诗人{李|lǐ}{白|bái}写的。{李|lǐ}{白|bái}晚上住在山上的寺庙里，觉得楼房特别高。前两句用"高百尺""摘星辰"的夸张手法，写出楼的高耸入云。后两句更有趣：诗人说不敢大声说话，怕惊动天上的神仙——好像自己真的到了天上一样！全诗充满了浪漫的想象和{李|lǐ}{白|bái}特有的豪放风格。</p>`,
    explanation: {
      summary: '这首诗是唐代大诗人李白写的。诗人晚上住在山上的寺庙里，感觉楼房非常高，好像一伸手就能摘到星星。他不敢大声说话，怕惊动了天上的神仙。',
      keyPoints: [
        '李白是唐代最著名的诗人之一，被称为"诗仙"',
        '"危楼高百尺"中的"危"是"高"的意思',
        '"手可摘星辰"用夸张手法写出楼的高',
        '"不敢高声语，恐惊天上人"充满奇妙的想象',
        '全诗用夸张和想象的手法，写出了山寺的高耸'
      ],
      vocabulary: [
        { word: '宿', pinyin: 'sù', meaning: '住、过夜' },
        { word: '危楼', pinyin: 'wēi lóu', meaning: '高楼。危，高' },
        { word: '星辰', pinyin: 'xīng chén', meaning: '星星' },
        { word: '高声语', pinyin: 'gāo shēng yǔ', meaning: '大声说话' },
        { word: '恐惊', pinyin: 'kǒng jīng', meaning: '害怕惊动' }
      ],
      moral: '这首诗用夸张和想象的手法，让我们感受到诗人丰富的想象力。想象力是学习和创作中非常重要的能力。'
    },
    questions: [
      {
        id: 'q2033_1',
        question: '"危楼高百尺"中的"危"是什么意思？',
        options: [
          { label: 'A', text: '危险' },
          { label: 'B', text: '高' },
          { label: 'C', text: '破旧' },
          { label: 'D', text: '倾斜' }
        ],
        answer: 'B',
        explanation: '"危"在这里是"高"的意思。"危楼"就是高楼，不是危险的楼。'
      },
      {
        id: 'q2033_2',
        question: '诗人为什么不敢大声说话？',
        options: [
          { label: 'A', text: '怕吵醒别人' },
          { label: 'B', text: '怕惊动天上的神仙' },
          { label: 'C', text: '他嗓子不好' },
          { label: 'D', text: '寺庙规矩不让说话' }
        ],
        answer: 'B',
        explanation: '"不敢高声语，恐惊天上人"说明诗人怕大声说话会惊动天上的神仙。'
      },
      {
        id: 'q2033_3',
        question: '"手可摘星辰"是什么意思？',
        options: [
          { label: 'A', text: '伸手就能摘到星星' },
          { label: 'B', text: '手上有很多星星' },
          { label: 'C', text: '星星很明亮' },
          { label: 'D', text: '天上有月亮' }
        ],
        answer: 'A',
        explanation: '诗人用夸张的手法说楼很高，站在楼上一伸手就能摘到天上的星星。'
      },
      {
        id: 'q2033_4',
        question: '诗人住在什么地方？',
        options: [
          { label: 'A', text: '山下的旅馆' },
          { label: 'B', text: '山上的寺庙' },
          { label: 'C', text: '朋友家里' },
          { label: 'D', text: '船上' }
        ],
        answer: 'B',
        explanation: '题目"夜宿山寺"中的"山寺"就是山上的寺庙，诗人晚上住在那里。'
      },
      {
        id: 'q2033_5',
        question: '这首诗主要用了什么修辞手法？',
        options: [
          { label: 'A', text: '比喻' },
          { label: 'B', text: '拟人' },
          { label: 'C', text: '夸张' },
          { label: 'D', text: '排比' }
        ],
        answer: 'C',
        explanation: '诗中"高百尺""手可摘星辰"都是夸张的说法，用夸张手法来突出楼的高。'
      }
    ]
  },

  // ==================== 第34天 ====================
  {
    id: 2034,
    title: '《敕勒歌》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 34,
    readingTime: 10,
    author: '北朝民歌',
    source: '人教版二年级上册',
    image: 'images/grade2/lesson34.jpg',
    text: `<p><strong>敕勒歌</strong></p>
<p>北朝民歌</p>
<p>{敕|chì}{勒|lè}川，阴山下，天似{穹|qióng}{庐|lú}，{笼|lǒng}盖四野。</p>
<p>天{苍|cāng}{苍|cāng}，野{茫|máng}{茫|máng}，风吹草低见牛羊。</p>
<br>
<p><strong>【注释】</strong></p>
<p>{敕|chì}{勒|lè}川：{敕|chì}{勒|lè}族人居住的地方。川，平原、原野。</p>
<p>阴山：山名，在今内蒙古自治区。</p>
<p>{穹|qióng}{庐|lú}：蒙古包，游牧民族住的圆顶帐篷。</p>
<p>{笼|lǒng}盖：覆盖、笼罩。</p>
<p>四野：四面的原野。</p>
<p>天{苍|cāng}{苍|cāng}：天空蓝蓝的。{苍|cāng}{苍|cāng}，深蓝色。</p>
<p>野{茫|máng}{茫|máng}：原野无边无际。{茫|máng}{茫|máng}，没有边际的样子。</p>
<p>风吹草低见牛羊：风吹过来，草低下了头，露出了一群群的牛羊。见，同"现"，露出。</p>
<br>
<p><strong>【译文】</strong></p>
<p>{敕|chì}{勒|lè}川啊，在阴山脚下。天空像一个巨大的蒙古包，笼罩着四面的原野。天空蓝蓝的，原野无边无际。一阵风吹来，草低下了头，露出了一群群肥壮的牛和羊。</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这是南北朝时期北方{敕|chì}{勒|lè}族的一首民歌。诗歌描写了北方大草原的壮丽景色。先写草原的位置——在阴山脚下；再写天空——像蒙古包一样笼罩着大地；最后用"风吹草低见牛羊"这个千古名句，写出了草原的辽阔和富饶。草长得很高，风吹过来才能看见草下面的牛羊，说明这里水草丰美、牛羊成群。</p>`,
    explanation: {
      summary: '这是一首北朝民歌，描写了北方大草原的壮丽景色。天空像蒙古包一样笼罩着大地，蓝蓝的天空下是无边无际的草原。风吹过来，草低下了头，露出了一群群肥壮的牛羊。',
      keyPoints: [
        '这是南北朝时期北方敕勒族的一首民歌',
        '"天似穹庐"把天空比作蒙古包',
        '"天苍苍，野茫茫"写出了草原的辽阔壮美',
        '"风吹草低见牛羊"是千古名句，写出了草原的富饶',
        '全诗展现了北方草原的壮丽风光和游牧民族的生活'
      ],
      vocabulary: [
        { word: '敕勒川', pinyin: 'chì lè chuān', meaning: '敕勒族人居住的平原' },
        { word: '穹庐', pinyin: 'qióng lú', meaning: '蒙古包，圆顶帐篷' },
        { word: '苍苍', pinyin: 'cāng cāng', meaning: '深蓝色的样子' },
        { word: '茫茫', pinyin: 'máng máng', meaning: '没有边际的样子' },
        { word: '见', pinyin: 'xiàn', meaning: '同"现"，露出' }
      ],
      moral: '这首诗展现了大自然的辽阔壮美。大草原上天高地远、牛羊成群，让我们感受到祖国山河的壮丽和大自然的美好。'
    },
    questions: [
      {
        id: 'q2034_1',
        question: '"天似穹庐"把天空比作什么？',
        options: [
          { label: 'A', text: '大海' },
          { label: 'B', text: '蒙古包' },
          { label: 'C', text: '大伞' },
          { label: 'D', text: '帐篷' }
        ],
        answer: 'B',
        explanation: '"穹庐"是蒙古包。"天似穹庐"是说天空像蒙古包一样圆圆地笼罩着大地。'
      },
      {
        id: 'q2034_2',
        question: '"风吹草低见牛羊"中的"见"是什么意思？',
        options: [
          { label: 'A', text: '看见' },
          { label: 'B', text: '见面' },
          { label: 'C', text: '露出' },
          { label: 'D', text: '听见' }
        ],
        answer: 'C',
        explanation: '"见"同"现"，是"露出"的意思。风吹过来，草低下了头，露出了藏在草下面的牛羊。'
      },
      {
        id: 'q2034_3',
        question: '敕勒川在哪里？',
        options: [
          { label: 'A', text: '阴山脚下' },
          { label: 'B', text: '长江边' },
          { label: 'C', text: '大海边' },
          { label: 'D', text: '沙漠里' }
        ],
        answer: 'A',
        explanation: '诗的第一句就说"敕勒川，阴山下"，说明敕勒川在阴山脚下。'
      },
      {
        id: 'q2034_4',
        question: '"天苍苍，野茫茫"描写的是什么景象？',
        options: [
          { label: 'A', text: '森林茂密' },
          { label: 'B', text: '天空蓝蓝的，原野无边无际' },
          { label: 'C', text: '大雪纷飞' },
          { label: 'D', text: '高山耸立' }
        ],
        answer: 'B',
        explanation: '"苍苍"是深蓝色的样子，"茫茫"是没有边际的样子。描写天空蓝蓝的，原野无边无际。'
      },
      {
        id: 'q2034_5',
        question: '这首诗属于什么类型的诗歌？',
        options: [
          { label: 'A', text: '唐诗' },
          { label: 'B', text: '宋词' },
          { label: 'C', text: '北朝民歌' },
          { label: 'D', text: '汉乐府' }
        ],
        answer: 'C',
        explanation: '这首诗是南北朝时期北方敕勒族的民歌，属于北朝民歌。'
      }
    ]
  },

  // ==================== 第35天 ====================
  {
    id: 2035,
    title: '《咏鹅》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 35,
    readingTime: 10,
    author: '骆宾王',
    source: '人教版一年级上册',
    image: 'images/grade2/lesson35.jpg',
    text: `<p><strong>咏鹅</strong></p>
<p>【唐】骆宾王</p>
<p>鹅，鹅，鹅，{曲|qū}项向天歌。</p>
<p>白毛浮绿水，红{掌|zhǎng}拨清波。</p>
<br>
<p><strong>【注释】</strong></p>
<p>咏鹅：用诗歌来赞美鹅。咏，用诗歌来赞美。</p>
<p>{曲|qū}项：弯着脖子。{曲|qū}，弯曲。项，脖子。</p>
<p>向天歌：朝着天空唱歌。</p>
<p>浮绿水：浮在绿色的水面上。</p>
<p>红{掌|zhǎng}：红色的脚掌。鹅的脚掌是红色的。</p>
<p>拨清波：拨动清清的水波。拨，拨动。</p>
<br>
<p><strong>【译文】</strong></p>
<p>鹅啊鹅啊鹅，弯着脖子朝天空唱歌。白色的羽毛浮在绿色的水面上，红色的脚掌轻轻地拨动着清清的水波。</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这首诗是唐代诗人{骆|luò}{宾|bīn}{王|wáng}写的，据说他写这首诗时才七岁，是一个神童。诗的第一句"鹅，鹅，鹅"三个字，表现了孩子看到鹅时的惊喜和欢快。后面三句分别描写了鹅的叫声、白色的羽毛和红色的脚掌。"白毛""绿水""红掌""清波"色彩鲜明，就像一幅美丽的画。</p>`,
    explanation: {
      summary: '这首诗是唐代诗人骆宾王七岁时写的。诗歌描写了鹅在水中嬉戏的美丽画面：鹅弯着脖子朝天唱歌，白色的羽毛浮在绿色的水面上，红色的脚掌拨动着清清的水波。',
      keyPoints: [
        '骆宾王写这首诗时只有七岁，是著名的神童',
        '"曲项向天歌"写鹅弯着脖子唱歌的样子',
        '"白毛浮绿水"写白色的羽毛浮在绿水上',
        '"红掌拨清波"写红色的脚掌拨动水波',
        '诗中"白""绿""红"色彩鲜明，像一幅画'
      ],
      vocabulary: [
        { word: '咏', pinyin: 'yǒng', meaning: '用诗歌来赞美' },
        { word: '曲项', pinyin: 'qū xiàng', meaning: '弯着脖子' },
        { word: '掌', pinyin: 'zhǎng', meaning: '脚掌' },
        { word: '拨', pinyin: 'bō', meaning: '拨动、划动' },
        { word: '清波', pinyin: 'qīng bō', meaning: '清清的水波' }
      ],
      moral: '这首诗告诉我们，要善于观察生活中的事物，用优美的语言来表达自己的感受。只要认真观察，就能发现身边处处有美景。'
    },
    questions: [
      {
        id: 'q2035_1',
        question: '这首诗的作者写诗时几岁？',
        options: [
          { label: 'A', text: '五岁' },
          { label: 'B', text: '七岁' },
          { label: 'C', text: '十岁' },
          { label: 'D', text: '十二岁' }
        ],
        answer: 'B',
        explanation: '据说骆宾王写这首诗时只有七岁，是一个神童。'
      },
      {
        id: 'q2035_2',
        question: '"曲项向天歌"中的"曲"是什么意思？',
        options: [
          { label: 'A', text: '歌曲' },
          { label: 'B', text: '弯曲' },
          { label: 'C', text: '曲折' },
          { label: 'D', text: '弯曲的小路' }
        ],
        answer: 'B',
        explanation: '"曲"在这里是"弯曲"的意思。"曲项"就是弯着脖子。'
      },
      {
        id: 'q2035_3',
        question: '诗中描写了哪几种颜色？',
        options: [
          { label: 'A', text: '白色和绿色' },
          { label: 'B', text: '白色、绿色和红色' },
          { label: 'C', text: '红色和白色' },
          { label: 'D', text: '蓝色和绿色' }
        ],
        answer: 'B',
        explanation: '诗中有"白毛""绿水""红掌""清波"，包含白色、绿色和红色三种颜色。'
      },
      {
        id: 'q2035_4',
        question: '鹅的脚掌是什么颜色的？',
        options: [
          { label: 'A', text: '白色' },
          { label: 'B', text: '绿色' },
          { label: 'C', text: '红色' },
          { label: 'D', text: '黄色' }
        ],
        answer: 'C',
        explanation: '"红掌拨清波"说明鹅的脚掌是红色的。'
      },
      {
        id: 'q2035_5',
        question: '这首诗表现了作者什么样的情感？',
        options: [
          { label: 'A', text: '害怕鹅' },
          { label: 'B', text: '对鹅的喜爱和赞美' },
          { label: 'C', text: '想吃鹅' },
          { label: 'D', text: '讨厌水' }
        ],
        answer: 'B',
        explanation: '"咏"就是用诗歌来赞美。整首诗用生动的语言描写了鹅的美丽，表达了对鹅的喜爱之情。'
      }
    ]
  },

  // ==================== 第36天 ====================
  {
    id: 2036,
    title: '《悯农》(其一)',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 36,
    readingTime: 10,
    author: '李绅',
    source: '人教版一年级上册',
    image: 'images/grade2/lesson36.jpg',
    text: `<p><strong>悯农（其一）</strong></p>
<p>【唐】李绅</p>
<p>春种一粒{粟|sù}，秋收万颗子。</p>
<p>四海无闲田，农夫犹饿死。</p>
<br>
<p><strong>【注释】</strong></p>
<p>{悯|mǐn}农：同情、怜悯农民。{悯|mǐn}，同情、怜悯。</p>
<p>春种：春天播种。</p>
<p>一粒{粟|sù}：一粒种子。{粟|sù}，小米，这里泛指粮食种子。</p>
<p>秋收：秋天收获。</p>
<p>万颗子：很多很多粮食粒子。</p>
<p>四海：天下、全国。</p>
<p>无闲田：没有空闲的田地。闲，空闲、没有种东西的。</p>
<p>农夫：农民。</p>
<p>犹：还、仍然。</p>
<br>
<p><strong>【译文】</strong></p>
<p>春天播下一粒种子，秋天就能收获很多很多的粮食。天下所有的田地都种上了庄稼，没有一块空闲的。可是农民到最后还是会被饿死。</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这首诗是唐代诗人{李|lǐ}{绅|shēn}写的。前两句写农民的辛勤劳动——春天播种，秋天收获，本来是令人高兴的事。第三句说天下的田地都种满了庄稼，收成应该很好。可是最后一句笔锋一转：农民居然还会饿死！这是因为当时的社会不公平，农民辛苦种的粮食都被官府和地主拿走了，自己反而吃不饱。诗人用这首诗表达了对农民的深深同情。</p>`,
    explanation: {
      summary: '这首诗是唐代诗人李绅写的。春天种下一粒种子，秋天能收获很多粮食，天下的田地都种满了庄稼，可是农民还是会饿死。诗人通过这种强烈的对比，表达了对农民的同情和对社会不公的不满。',
      keyPoints: [
        '李绅是唐代诗人，写了两首《悯农》',
        '"春种一粒粟，秋收万颗子"写出了丰收的景象',
        '"四海无闲田"说明田地都种满了庄稼',
        '"农夫犹饿死"与前面的丰收形成强烈的对比',
        '诗人用这首诗表达了对农民的深深同情'
      ],
      vocabulary: [
        { word: '悯', pinyin: 'mǐn', meaning: '同情、怜悯' },
        { word: '粟', pinyin: 'sù', meaning: '小米，这里泛指粮食种子' },
        { word: '四海', pinyin: 'sì hǎi', meaning: '天下、全国' },
        { word: '闲田', pinyin: 'xián tián', meaning: '空闲的田地' },
        { word: '犹', pinyin: 'yóu', meaning: '还、仍然' }
      ],
      moral: '这首诗让我们知道粮食来之不易，是农民辛苦劳动的成果。我们要珍惜粮食，感恩农民的辛勤付出。'
    },
    questions: [
      {
        id: 'q2036_1',
        question: '"春种一粒粟"中的"粟"是什么意思？',
        options: [
          { label: 'A', text: '玉米' },
          { label: 'B', text: '小米，泛指粮食种子' },
          { label: 'C', text: '小麦' },
          { label: 'D', text: '大米' }
        ],
        answer: 'B',
        explanation: '"粟"是小米，这里泛指粮食种子。"春种一粒粟"就是春天播下一粒种子。'
      },
      {
        id: 'q2036_2',
        question: '"四海无闲田"是什么意思？',
        options: [
          { label: 'A', text: '海边没有田地' },
          { label: 'B', text: '天下的田地都种满了庄稼' },
          { label: 'C', text: '田地都被水淹了' },
          { label: 'D', text: '没有人种田' }
        ],
        answer: 'B',
        explanation: '"四海"指天下、全国。"无闲田"是没有空闲的田地。全句意思是天下的田地都种满了庄稼。'
      },
      {
        id: 'q2036_3',
        question: '农民种了那么多粮食，最后怎样了？',
        options: [
          { label: 'A', text: '过上了好日子' },
          { label: 'B', text: '还是被饿死了' },
          { label: 'C', text: '当了官' },
          { label: 'D', text: '搬到城里去了' }
        ],
        answer: 'B',
        explanation: '"农夫犹饿死"意思是农民还是会饿死。虽然种了很多粮食，但自己却吃不上。'
      },
      {
        id: 'q2036_4',
        question: '这首诗表达了诗人什么感情？',
        options: [
          { label: 'A', text: '对丰收的高兴' },
          { label: 'B', text: '对农民的同情' },
          { label: 'C', text: '对春天的喜爱' },
          { label: 'D', text: '对种地的向往' }
        ],
        answer: 'B',
        explanation: '"悯农"就是同情农民。诗人看到农民辛苦种地却吃不饱，非常同情他们。'
      },
      {
        id: 'q2036_5',
        question: '这首诗的作者是谁？',
        options: [
          { label: 'A', text: '李白' },
          { label: 'B', text: '杜甫' },
          { label: 'C', text: '李绅' },
          { label: 'D', text: '白居易' }
        ],
        answer: 'C',
        explanation: '这首诗是唐代诗人李绅写的。李绅一共写了两首《悯农》。'
      }
    ]
  },

  // ==================== 第37天 ====================
  {
    id: 2037,
    title: '《悯农》(其二)',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 37,
    readingTime: 10,
    author: '李绅',
    source: '人教版一年级上册',
    image: 'images/grade2/lesson37.jpg',
    text: `<p><strong>悯农（其二）</strong></p>
<p>【唐】李绅</p>
<p>{锄|chú}禾日当午，汗滴禾下土。</p>
<p>谁知盘中餐，粒粒皆辛苦。</p>
<br>
<p><strong>【注释】</strong></p>
<p>{锄|chú}禾：给禾苗锄草松土。{锄|chú}，用{锄|chú}头锄草。</p>
<p>日当午：太阳正当中午，指最热的时候。</p>
<p>汗滴：汗水滴落。</p>
<p>禾下土：禾苗下面的泥土。</p>
<p>谁知：有谁知道。</p>
<p>盘中餐：碗里的饭。餐，饭食。</p>
<p>粒粒：每一粒。</p>
<p>皆：都。</p>
<br>
<p><strong>【译文】</strong></p>
<p>中午的时候，太阳火辣辣地照着，农民还在地里给禾苗锄草。汗水一滴一滴地滴落到禾苗下面的泥土里。有谁知道碗里的饭，每一粒都是农民辛苦劳动换来的啊！</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这首诗是唐代诗人{李|lǐ}{绅|shēn}写的，和上一首《{悯|mǐn}农》是姊妹篇。前两句描写农民在烈日下辛苦劳动的场景——正午最热的时候还在地里干活，汗水滴到泥土里。后两句发出感慨：有谁知道碗里的饭，每一粒都是农民辛苦种出来的呢！这首诗语言简单朴素，却道出了深刻的道理，千百年来一直提醒人们要珍惜粮食。</p>`,
    explanation: {
      summary: '这首诗是唐代诗人李绅写的。诗中描写了农民在烈日下辛苦锄草的场景：中午太阳最毒的时候，农民还在地里干活，汗水滴到泥土里。诗人感慨道：有谁知道碗里的饭，每一粒都是农民辛苦劳动换来的！',
      keyPoints: [
        '这首诗和《悯农》其一是姊妹篇',
        '"锄禾日当午"写农民在正午最热时还在劳动',
        '"汗滴禾下土"写劳动的辛苦',
        '"谁知盘中餐，粒粒皆辛苦"是千古名句',
        '告诉我们粮食来之不易，要珍惜每一粒粮食'
      ],
      vocabulary: [
        { word: '锄禾', pinyin: 'chú hé', meaning: '给禾苗锄草松土' },
        { word: '日当午', pinyin: 'rì dāng wǔ', meaning: '太阳正当中午' },
        { word: '餐', pinyin: 'cān', meaning: '饭食' },
        { word: '粒粒', pinyin: 'lì lì', meaning: '每一粒' },
        { word: '皆', pinyin: 'jiē', meaning: '都' }
      ],
      moral: '这首诗告诉我们，粮食来之不易，是农民辛苦劳动的成果。我们要珍惜粮食，不浪费食物。"谁知盘中餐，粒粒皆辛苦"应该成为每个人铭记在心的话。'
    },
    questions: [
      {
        id: 'q2037_1',
        question: '"锄禾日当午"描写的是什么时候？',
        options: [
          { label: 'A', text: '早上' },
          { label: 'B', text: '中午' },
          { label: 'C', text: '傍晚' },
          { label: 'D', text: '晚上' }
        ],
        answer: 'B',
        explanation: '"日当午"是太阳正当中午，也就是一天中最热的时候。'
      },
      {
        id: 'q2037_2',
        question: '"谁知盘中餐，粒粒皆辛苦"是什么意思？',
        options: [
          { label: 'A', text: '碗里的饭很好吃' },
          { label: 'B', text: '每一粒粮食都是农民辛苦种出来的' },
          { label: 'C', text: '要多吃米饭' },
          { label: 'D', text: '农民不辛苦' }
        ],
        answer: 'B',
        explanation: '"谁知盘中餐，粒粒皆辛苦"意思是：有谁知道碗里的饭，每一粒都是农民辛苦劳动换来的。'
      },
      {
        id: 'q2037_3',
        question: '农民在最热的时候做什么？',
        options: [
          { label: 'A', text: '休息' },
          { label: 'B', text: '吃午饭' },
          { label: 'C', text: '给禾苗锄草' },
          { label: 'D', text: '收庄稼' }
        ],
        answer: 'C',
        explanation: '"锄禾日当午"说农民在中午最热的时候还在地里给禾苗锄草松土。'
      },
      {
        id: 'q2037_4',
        question: '这首诗告诉我们要怎样做？',
        options: [
          { label: 'A', text: '多吃饭' },
          { label: 'B', text: '珍惜粮食，不浪费' },
          { label: 'C', text: '去种地' },
          { label: 'D', text: '中午不要出门' }
        ],
        answer: 'B',
        explanation: '这首诗告诉我们粮食来之不易，是农民辛苦劳动的成果，我们要珍惜每一粒粮食。'
      },
      {
        id: 'q2037_5',
        question: '"皆"是什么意思？',
        options: [
          { label: 'A', text: '一些' },
          { label: 'B', text: '很多' },
          { label: 'C', text: '都' },
          { label: 'D', text: '很少' }
        ],
        answer: 'C',
        explanation: '"皆"是"都"的意思。"粒粒皆辛苦"就是每一粒粮食都是辛苦的。'
      }
    ]
  },

  // ==================== 第38天 ====================
  {
    id: 2038,
    title: '《池上》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 38,
    readingTime: 10,
    author: '白居易',
    source: '人教版一年级下册',
    image: 'images/grade2/lesson38.jpg',
    text: `<p><strong>池上</strong></p>
<p>【唐】白居易</p>
<p>小娃撑小{艇|tǐng}，偷采白莲回。</p>
<p>不解藏{踪|zōng}迹，浮萍一道开。</p>
<br>
<p><strong>【注释】</strong></p>
<p>池上：池塘上面。</p>
<p>小娃：小孩子。</p>
<p>撑小{艇|tǐng}：撑着一条小船。撑，用竹篙等抵住河底使船前进。{艇|tǐng}，小船。</p>
<p>偷采：偷偷地采摘。这里不是真的偷，是小孩子调皮地悄悄去摘。</p>
<p>白莲：白色的莲花。</p>
<p>不解：不知道、不懂得。解，懂得。</p>
<p>藏{踪|zōng}迹：隐藏自己的{踪|zōng}迹、行{踪|zōng}。</p>
<p>浮萍：浮在水面上的一种水草。</p>
<p>一道开：分开了一条道。小船经过的地方，浮萍被分开了一道痕迹。</p>
<br>
<p><strong>【译文】</strong></p>
<p>一个小孩撑着一条小船，偷偷地去采了白莲回来。他不懂得隐藏自己的行{踪|zōng}，小船经过的地方，浮萍被分开了一道长长的痕迹。</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这首诗是唐代诗人{白|bái}{居|jū}{易|yì}写的。诗中描写了一个天真可爱的小孩偷偷去池塘里采莲蓬的情景。前两句写小孩撑着小船去采白莲，一个"偷"字写出了孩子的调皮。后两句更有趣：孩子以为自己做得很隐秘，却不知道小船经过时浮萍被分开了，留下了一道长长的痕迹——暴露出他的行{踪|zōng}。诗人用细腻的笔触，把一个天真淘气的小孩形象写得活灵活现。</p>`,
    explanation: {
      summary: '这首诗是唐代诗人白居易写的。诗中描写了一个小孩偷偷撑着小船去池塘里采白莲，回来时不懂得隐藏自己的踪迹，小船经过的地方浮萍被分开了一道痕迹，暴露了他的行踪。',
      keyPoints: [
        '白居易是唐代著名诗人',
        '"小娃撑小艇"写小孩撑着小船',
        '"偷采白莲回"写孩子调皮地去采莲花',
        '"不解藏踪迹"写孩子不懂得隐藏自己',
        '浮萍被分开一道痕迹，暴露了孩子的行踪'
      ],
      vocabulary: [
        { word: '艇', pinyin: 'tǐng', meaning: '小船' },
        { word: '偷采', pinyin: 'tōu cǎi', meaning: '悄悄地采摘' },
        { word: '不解', pinyin: 'bù jiě', meaning: '不知道、不懂得' },
        { word: '踪迹', pinyin: 'zōng jì', meaning: '行动留下的痕迹' },
        { word: '浮萍', pinyin: 'fú píng', meaning: '浮在水面的一种水草' }
      ],
      moral: '这首诗描绘了一个天真可爱的小孩形象，让我们感受到童年的快乐和纯真。做事情不能自以为没人知道，总会留下痕迹的。'
    },
    questions: [
      {
        id: 'q2038_1',
        question: '小孩去池塘里做了什么？',
        options: [
          { label: 'A', text: '游泳' },
          { label: 'B', text: '钓鱼' },
          { label: 'C', text: '采白莲' },
          { label: 'D', text: '抓鱼' }
        ],
        answer: 'C',
        explanation: '"偷采白莲回"说明小孩偷偷地去采了白莲回来。'
      },
      {
        id: 'q2038_2',
        question: '小孩的行踪是怎样暴露的？',
        options: [
          { label: 'A', text: '被人看见了' },
          { label: 'B', text: '自己说出来的' },
          { label: 'C', text: '小船经过时浮萍被分开，留下了痕迹' },
          { label: 'D', text: '莲花不见了' }
        ],
        answer: 'C',
        explanation: '"不解藏踪迹，浮萍一道开"说明小船经过时浮萍被分开了一道痕迹，暴露了小孩的行踪。'
      },
      {
        id: 'q2038_3',
        question: '"不解藏踪迹"中的"解"是什么意思？',
        options: [
          { label: 'A', text: '解开' },
          { label: 'B', text: '解决' },
          { label: 'C', text: '懂得' },
          { label: 'D', text: '解释' }
        ],
        answer: 'C',
        explanation: '"解"在这里是"懂得"的意思。"不解"就是不懂得、不知道。'
      },
      {
        id: 'q2038_4',
        question: '这首诗中的小孩是什么样的形象？',
        options: [
          { label: 'A', text: '很安静' },
          { label: 'B', text: '天真调皮' },
          { label: 'C', text: '很勤劳' },
          { label: 'D', text: '很胆小' }
        ],
        answer: 'B',
        explanation: '小孩偷偷去采莲蓬，以为没人知道却留下了痕迹，表现了天真调皮的特点。'
      },
      {
        id: 'q2038_5',
        question: '这首诗的作者是谁？',
        options: [
          { label: 'A', text: '李白' },
          { label: 'B', text: '杜甫' },
          { label: 'C', text: '白居易' },
          { label: 'D', text: '杨万里' }
        ],
        answer: 'C',
        explanation: '这首诗是唐代诗人白居易写的。'
      }
    ]
  },

  // ==================== 第39天 ====================
  {
    id: 2039,
    title: '《小池》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 39,
    readingTime: 10,
    author: '杨万里',
    source: '人教版一年级下册',
    image: 'images/grade2/lesson39.jpg',
    text: `<p><strong>小池</strong></p>
<p>【宋】杨万里</p>
<p>泉眼无声{惜|xī}细流，树阴照水爱晴柔。</p>
<p>小荷才露尖尖角，早有{蜻|qīng}{蜓|tíng}立上头。</p>
<br>
<p><strong>【注释】</strong></p>
<p>小池：小小的池塘。</p>
<p>泉眼：泉水流出的小口子。</p>
<p>无声：没有声音。</p>
<p>{惜|xī}：爱{惜|xī}、珍惜。泉水细细地流，好像舍不得流太多。</p>
<p>细流：细细的水流。</p>
<p>树阴：树木的影子。</p>
<p>照水：倒映在水面上。</p>
<p>爱晴柔：喜爱这晴天柔和的风光。晴柔，晴天柔和美丽的景色。</p>
<p>小荷：刚刚长出来的荷叶。</p>
<p>尖尖角：刚刚长出来的荷叶还是卷着的，尖尖的。</p>
<p>{蜻|qīng}{蜓|tíng}：一种昆虫，有两对透明的翅膀。</p>
<br>
<p><strong>【译文】</strong></p>
<p>泉水从小口子里静静地流出来，水流细细的，好像舍不得流太多。树的影子倒映在水面上，好像也喜欢这晴天柔和的风光。小小的荷叶刚刚从水里露出尖尖的角，就已经有{蜻|qīng}{蜓|tíng}飞来停在上面了。</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这首诗是南宋诗人{杨|yáng}{万|wàn}{lǐ}写的。诗人用细腻的笔触描写了一个小池塘的初夏景色。第一句写泉水细细地流；第二句写树阴倒映水中；第三、四句是最精彩的——小荷叶刚露出尖尖的角，{蜻|qīng}{蜓|tíng}就迫不及待地停上去了。诗人把初夏小池塘的景色写得生机勃勃、充满活力。"小荷才露尖尖角"现在常用来比喻有才华的年轻人刚刚崭露头角。</p>`,
    explanation: {
      summary: '这首诗是南宋诗人杨万里写的。诗中描写了初夏小池塘的美丽景色：泉水静静地流出细细的水流，树影倒映在水面上，小荷叶刚露出尖尖的角，蜻蜓就飞来停在上面了。',
      keyPoints: [
        '杨万里是南宋著名诗人',
        '"泉眼无声惜细流"用拟人手法写泉水细细地流',
        '"树阴照水爱晴柔"写树影倒映水中',
        '"小荷才露尖尖角，早有蜻蜓立上头"是千古名句',
        '全诗描绘了初夏小池塘生机勃勃的景色'
      ],
      vocabulary: [
        { word: '泉眼', pinyin: 'quán yǎn', meaning: '泉水流出的小口子' },
        { word: '惜', pinyin: 'xī', meaning: '爱惜、珍惜' },
        { word: '晴柔', pinyin: 'qíng róu', meaning: '晴天柔和美丽的风光' },
        { word: '小荷', pinyin: 'xiǎo hé', meaning: '刚刚长出来的荷叶' },
        { word: '蜻蜓', pinyin: 'qīng tíng', meaning: '一种有两对透明翅膀的昆虫' }
      ],
      moral: '这首诗让我们感受到大自然的美好和生机。"小荷才露尖尖角"告诉我们，只要有才华、有能力，就一定会被人发现和欣赏。'
    },
    questions: [
      {
        id: 'q2039_1',
        question: '"泉眼无声惜细流"中的"惜"是什么意思？',
        options: [
          { label: 'A', text: '可惜' },
          { label: 'B', text: '爱惜、珍惜' },
          { label: 'C', text: '害怕' },
          { label: 'D', text: '高兴' }
        ],
        answer: 'B',
        explanation: '"惜"是爱惜、珍惜的意思。泉水细细地流，好像舍不得流太多水。'
      },
      {
        id: 'q2039_2',
        question: '蜻蜓停在什么上面？',
        options: [
          { label: 'A', text: '树枝上' },
          { label: 'B', text: '石头上' },
          { label: 'C', text: '刚刚露出水面的小荷叶上' },
          { label: 'D', text: '花朵上' }
        ],
        answer: 'C',
        explanation: '"小荷才露尖尖角，早有蜻蜓立上头"说明蜻蜓停在刚刚露出水面的尖尖的小荷叶上。'
      },
      {
        id: 'q2039_3',
        question: '这首诗描写的是什么季节？',
        options: [
          { label: 'A', text: '春天' },
          { label: 'B', text: '初夏' },
          { label: 'C', text: '秋天' },
          { label: 'D', text: '冬天' }
        ],
        answer: 'B',
        explanation: '小荷才露尖尖角，蜻蜓飞来，说明是初夏时节。'
      },
      {
        id: 'q2039_4',
        question: '"小荷才露尖尖角"现在常用来比喻什么？',
        options: [
          { label: 'A', text: '池塘很小' },
          { label: 'B', text: '荷叶长得慢' },
          { label: 'C', text: '有才华的年轻人刚刚崭露头角' },
          { label: 'D', text: '蜻蜓很可爱' }
        ],
        answer: 'C',
        explanation: '"小荷才露尖尖角"现在常用来比喻有才华的年轻人刚刚崭露头角，显示出才能。'
      },
      {
        id: 'q2039_5',
        question: '这首诗的作者是谁？',
        options: [
          { label: 'A', text: '苏轼' },
          { label: 'B', text: '李白' },
          { label: 'C', text: '白居易' },
          { label: 'D', text: '杨万里' }
        ],
        answer: 'D',
        explanation: '这首诗是南宋诗人杨万里写的。'
      }
    ]
  },

  // ==================== 第40天 ====================
  {
    id: 2040,
    title: '《画》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 40,
    readingTime: 10,
    author: '王维',
    source: '人教版一年级上册',
    image: 'images/grade2/lesson40.jpg',
    text: `<p><strong>画</strong></p>
<p>【唐】王维</p>
<p>远看山有色，近听水无声。</p>
<p>春去花还在，人来鸟不惊。</p>
<br>
<p><strong>【注释】</strong></p>
<p>画：这是一首描写画中山水的诗。</p>
<p>远看山有色：远远看去，山有青翠的颜色。色，颜色。</p>
<p>近听水无声：走到近处听，流水却没有声音。</p>
<p>春去花还在：春天过去了，花还在开放。</p>
<p>人来鸟不惊：人走过来了，鸟也不害怕、不飞走。惊，受惊、害怕。</p>
<br>
<p><strong>【译文】</strong></p>
<p>远远地看去，山有青翠的颜色；走到近处听，水却没有声音。春天过去了，花还在开放；人走近了，鸟也不受惊飞走。</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这首诗传说是唐代诗人{王|wáng}{维|wéi}写的。全诗用四对反义词来描写一幅画：远和近、有和无、去和来、不惊。远看山有颜色，近听水却没有声音——因为这是画，画中的水当然没有声音。春天过去了花还开着——因为这是画，画中的花永远不会凋谢。人来了鸟也不飞走——因为这是画，画中的鸟永远不怕人。全诗巧妙地写出了"画"和"真实景色"的区别，非常有趣。</p>`,
    explanation: {
      summary: '这首诗传说是唐代诗人王维写的。全诗通过描写一幅画来表达"画"与真实景色的区别：远看山有色（像真的），近听水无声（但画中没有声音）；春去花还在（画中的花不凋谢），人来鸟不惊（画中的鸟不怕人）。',
      keyPoints: [
        '这首诗用四对反义词来描写一幅画',
        '远看山有色，近听水无声——画中有形无声',
        '春去花还在——画中的花永远不会凋谢',
        '人来鸟不惊——画中的鸟不怕人',
        '全诗巧妙地写出了画与真实景色的区别'
      ],
      vocabulary: [
        { word: '色', pinyin: 'sè', meaning: '颜色' },
        { word: '声', pinyin: 'shēng', meaning: '声音' },
        { word: '去', pinyin: 'qù', meaning: '离开、过去' },
        { word: '还', pinyin: 'hái', meaning: '仍然、依旧' },
        { word: '惊', pinyin: 'jīng', meaning: '受惊、害怕' }
      ],
      moral: '这首诗告诉我们要善于观察事物的不同特点。画中的景色虽然逼真，但和真实的景色还是有区别的。观察事物要仔细，才能发现其中的奥妙。'
    },
    questions: [
      {
        id: 'q2040_1',
        question: '为什么"近听水无声"？',
        options: [
          { label: 'A', text: '水流很小' },
          { label: 'B', text: '因为这是画，画中的水没有声音' },
          { label: 'C', text: '耳朵不好' },
          { label: 'D', text: '水结冰了' }
        ],
        answer: 'B',
        explanation: '因为描写的是画，画中的水虽然看起来像真的，但不可能发出声音。'
      },
      {
        id: 'q2040_2',
        question: '为什么春天过去了花还在？',
        options: [
          { label: 'A', text: '花是假花' },
          { label: 'B', text: '那是四季都开的花' },
          { label: 'C', text: '因为这是画，画中的花永远不会凋谢' },
          { label: 'D', text: '春天还没过去' }
        ],
        answer: 'C',
        explanation: '因为这是画，画中的花是画上去的，永远不会凋谢，所以春天过去了花还在。'
      },
      {
        id: 'q2040_3',
        question: '这首诗主要用了哪组对比手法？',
        options: [
          { label: 'A', text: '大小对比' },
          { label: 'B', text: '颜色对比' },
          { label: 'C', text: '远近、有无等反义词对比' },
          { label: 'D', text: '动静对比' }
        ],
        answer: 'C',
        explanation: '诗中用了远和近、有和无、去和来等反义词进行对比，巧妙地写出了画的特点。'
      },
      {
        id: 'q2040_4',
        question: '"人来鸟不惊"中的"惊"是什么意思？',
        options: [
          { label: 'A', text: '高兴' },
          { label: 'B', text: '惊讶' },
          { label: 'C', text: '受惊、害怕' },
          { label: 'D', text: '飞走' }
        ],
        answer: 'C',
        explanation: '"惊"是受惊、害怕的意思。画中的鸟不怕人，人走近了也不会飞走。'
      },
      {
        id: 'q2040_5',
        question: '这首诗的传说是哪位诗人写的？',
        options: [
          { label: 'A', text: '李白' },
          { label: 'B', text: '杜甫' },
          { label: 'C', text: '王维' },
          { label: 'D', text: '苏轼' }
        ],
        answer: 'C',
        explanation: '这首诗传说是唐代诗人王维写的。王维既能写诗又能画画，被称为"诗中有画，画中有诗"。'
      }
    ]
  },

  // ==================== 第41天 ====================
  {
    id: 2041,
    title: '《风》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 41,
    readingTime: 10,
    author: '李峤',
    source: '人教版一年级上册',
    image: 'images/grade2/lesson41.jpg',
    text: `<p><strong>风</strong></p>
<p>【唐】李峤</p>
<p>解落三秋叶，能开二月花。</p>
<p>过江千尺浪，入竹万竿斜。</p>
<br>
<p><strong>【注释】</strong></p>
<p>解落：能够吹落。解，能够、会。</p>
<p>三秋：秋天的第三个月，也泛指秋天。</p>
<p>能开：能够吹开。</p>
<p>二月花：农历二月的花，指春天的花。</p>
<p>过江：吹过江面。</p>
<p>千尺浪：很高的浪花。千尺是夸张说法。</p>
<p>入竹：吹进竹林。</p>
<p>万竿斜：很多竹竿都被吹斜了。万竿，很多竹竿。斜，倾斜。</p>
<br>
<p><strong>【译文】</strong></p>
<p>风能吹落秋天的树叶，也能吹开春天的花朵。风吹过江面，掀起千尺高的浪花；吹进竹林，千万根竹竿都被吹得倾斜了。</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这首诗是唐代诗人{李|lǐ}{峤|qiáo}写的。全诗没有一个"风"字，但每一句都在写风。第一句写风能吹落秋天的树叶；第二句写风能吹开春天的花；第三句写风能掀起巨浪；第四句写风能把竹子吹弯。诗人通过风对叶、花、浪、竹的作用，写出了风的力量和神奇。这首诗构思巧妙，是咏物诗的典范。</p>`,
    explanation: {
      summary: '这首诗是唐代诗人李峤写的。全诗没有一个"风"字，却句句都在写风：风能吹落秋天的树叶，能吹开春天的花，能掀起江面的巨浪，能把竹林里的竹子吹弯。',
      keyPoints: [
        '全诗没有一个"风"字，却句句都在写风',
        '"解落三秋叶"写风能吹落秋天的树叶',
        '"能开二月花"写风能吹开春天的花朵',
        '"过江千尺浪"写风掀起巨浪的力量',
        '"入竹万竿斜"写风把竹子吹弯的力量'
      ],
      vocabulary: [
        { word: '解', pinyin: 'jiě', meaning: '能够、会' },
        { word: '三秋', pinyin: 'sān qiū', meaning: '秋天，也泛指深秋' },
        { word: '二月花', pinyin: 'èr yuè huā', meaning: '农历二月的花，指春天的花' },
        { word: '千尺浪', pinyin: 'qiān chǐ làng', meaning: '很高的浪花' },
        { word: '斜', pinyin: 'xié', meaning: '倾斜' }
      ],
      moral: '这首诗告诉我们要善于观察事物的特点。风是看不见的，但通过风对其他事物的影响，我们就能感受到风的存在。善于通过现象看本质，是一种重要的能力。'
    },
    questions: [
      {
        id: 'q2041_1',
        question: '这首诗有什么特别之处？',
        options: [
          { label: 'A', text: '写了四种花' },
          { label: 'B', text: '全诗没有一个"风"字，却句句写风' },
          { label: 'C', text: '写了四季的景色' },
          { label: 'D', text: '用了十个数字' }
        ],
        answer: 'B',
        explanation: '这首诗最巧妙的地方就是全诗没有一个"风"字，但每一句都在写风的作用。'
      },
      {
        id: 'q2041_2',
        question: '"解落三秋叶"中的"解"是什么意思？',
        options: [
          { label: 'A', text: '解开' },
          { label: 'B', text: '能够、会' },
          { label: 'C', text: '理解' },
          { label: 'D', text: '解释' }
        ],
        answer: 'B',
        explanation: '"解"在这里是"能够、会"的意思。风能够吹落秋天的树叶。'
      },
      {
        id: 'q2041_3',
        question: '诗中描写了风的哪几种作用？',
        options: [
          { label: 'A', text: '吹落叶、吹开花、掀浪、吹弯竹' },
          { label: 'B', text: '吹落叶、下雨、打雷' },
          { label: 'C', text: '吹落叶、吹雪花' },
          { label: 'D', text: '吹落叶、吹沙子' }
        ],
        answer: 'A',
        explanation: '诗中写了风的四种作用：吹落秋天的叶、吹开春天的花、掀起江面的浪、吹弯竹林的竹。'
      },
      {
        id: 'q2041_4',
        question: '"过江千尺浪"用的是什么手法？',
        options: [
          { label: 'A', text: '比喻' },
          { label: 'B', text: '拟人' },
          { label: 'C', text: '夸张' },
          { label: 'D', text: '排比' }
        ],
        answer: 'C',
        explanation: '"千尺浪"不是真的有千尺高，是夸张的说法，形容浪花非常高。'
      },
      {
        id: 'q2041_5',
        question: '这首诗的作者是谁？',
        options: [
          { label: 'A', text: '李白' },
          { label: 'B', text: '杜甫' },
          { label: 'C', text: '李峤' },
          { label: 'D', text: '王维' }
        ],
        answer: 'C',
        explanation: '这首诗是唐代诗人李峤写的。'
      }
    ]
  },

  // ==================== 第42天 ====================
  {
    id: 2042,
    title: '《江南》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 42,
    readingTime: 10,
    author: '汉乐府',
    source: '人教版一年级上册',
    image: 'images/grade2/lesson42.jpg',
    text: `<p><strong>江南</strong></p>
<p>汉乐府</p>
<p>江南可采莲，莲叶何田田。</p>
<p>鱼戏莲叶间。</p>
<p>鱼戏莲叶东，鱼戏莲叶西，鱼戏莲叶南，鱼戏莲叶北。</p>
<br>
<p><strong>【注释】</strong></p>
<p>江南：长江以南的地方。</p>
<p>可采莲：正是采莲的好时候。可，正好、适合。</p>
<p>莲叶：荷叶。</p>
<p>何田田：多么茂盛啊。何，多么。田田，荷叶茂盛的样子。</p>
<p>鱼戏：鱼儿在嬉戏、玩耍。戏，玩耍。</p>
<p>东、西、南、北：四个方向，表示鱼儿在荷叶间到处游来游去。</p>
<br>
<p><strong>【译文】</strong></p>
<p>江南正是采莲的好时候，荷叶长得多么茂盛啊！鱼儿在荷叶间快乐地嬉戏。鱼儿一会儿游到荷叶东边，一会儿游到荷叶西边，一会儿游到荷叶南边，一会儿游到荷叶北边。</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这是一首汉代的乐府民歌。诗歌描写了江南水乡采莲的美景。前两句写荷塘的景色：正是采莲的好时节，荷叶茂盛碧绿。后面写鱼儿在荷叶间欢快地游来游去，用了东、西、南、北四个方向，既写出了鱼儿的活泼可爱，也让我们仿佛看到了一片碧绿的荷塘和自由自在的鱼儿。全诗语言简洁明快，充满了欢快的气氛。</p>`,
    explanation: {
      summary: '这是一首汉代乐府民歌，描写了江南水乡采莲时的美景。荷叶茂盛碧绿，鱼儿在荷叶间快乐地游来游去，一会儿到东边，一会儿到西边，一会儿到南边，一会儿到北边。',
      keyPoints: [
        '这是一首汉代的乐府民歌',
        '"莲叶何田田"写出荷叶的茂盛',
        '"鱼戏莲叶间"写鱼儿在荷叶间嬉戏',
        '用东、西、南、北四个方向写出鱼儿的活泼',
        '全诗语言简洁明快，充满了欢快的气氛'
      ],
      vocabulary: [
        { word: '可', pinyin: 'kě', meaning: '正好、适合' },
        { word: '何', pinyin: 'hé', meaning: '多么' },
        { word: '田田', pinyin: 'tián tián', meaning: '荷叶茂盛的样子' },
        { word: '戏', pinyin: 'xì', meaning: '玩耍、嬉戏' },
        { word: '莲', pinyin: 'lián', meaning: '莲花、荷花' }
      ],
      moral: '这首诗展现了江南水乡的美丽风光和大自然的勃勃生机。鱼儿自由自在地嬉戏，让我们感受到生活的快乐和美好。'
    },
    questions: [
      {
        id: 'q2042_1',
        question: '这首诗是什么朝代的？',
        options: [
          { label: 'A', text: '唐代' },
          { label: 'B', text: '宋代' },
          { label: 'C', text: '汉代' },
          { label: 'D', text: '明代' }
        ],
        answer: 'C',
        explanation: '这是一首汉代的乐府民歌。'
      },
      {
        id: 'q2042_2',
        question: '"莲叶何田田"中的"田田"是什么意思？',
        options: [
          { label: 'A', text: '田地' },
          { label: 'B', text: '荷叶茂盛的样子' },
          { label: 'C', text: '农田' },
          { label: 'D', text: '方方正正' }
        ],
        answer: 'B',
        explanation: '"田田"是荷叶茂盛的样子。"何田田"就是多么茂盛啊。'
      },
      {
        id: 'q2042_3',
        question: '鱼儿在哪里嬉戏？',
        options: [
          { label: 'A', text: '在河里' },
          { label: 'B', text: '在海里' },
          { label: 'C', text: '在荷叶间' },
          { label: 'D', text: '在池塘底' }
        ],
        answer: 'C',
        explanation: '"鱼戏莲叶间"说明鱼儿在荷叶之间嬉戏玩耍。'
      },
      {
        id: 'q2042_4',
        question: '诗中用哪四个方向来写鱼儿的活动？',
        options: [
          { label: 'A', text: '上下左右' },
          { label: 'B', text: '东西南北' },
          { label: 'C', text: '前后左右' },
          { label: 'D', text: '里外远近' }
        ],
        answer: 'B',
        explanation: '诗中用了东、西、南、北四个方向：鱼戏莲叶东、西、南、北。'
      },
      {
        id: 'q2042_5',
        question: '这首诗表达了什么样的气氛？',
        options: [
          { label: 'A', text: '悲伤' },
          { label: 'B', text: '愤怒' },
          { label: 'C', text: '欢快、快乐' },
          { label: 'D', text: '安静' }
        ],
        answer: 'C',
        explanation: '全诗描写了美丽的荷塘和欢快嬉戏的鱼儿，充满了快乐的气氛。'
      }
    ]
  },

  // ==================== 第43天 ====================
  {
    id: 2043,
    title: '《长歌行》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 43,
    readingTime: 10,
    author: '汉乐府',
    source: '人教版一年级上册',
    image: 'images/grade2/lesson43.jpg',
    text: `<p><strong>长歌行</strong></p>
<p>汉乐府</p>
<p>青青园中{葵|kuí}，朝露待日{晞|xī}。</p>
<p>阳春布德泽，万物生光辉。</p>
<p>常恐秋节至，{焜|kūn}黄华叶衰。</p>
<p>百川东到海，何时复西归？</p>
<p>少壮不努力，老大徒伤悲。</p>
<br>
<p><strong>【注释】</strong></p>
<p>长歌行：汉乐府的一种诗歌体裁。</p>
<p>青青：绿色的、茂盛的。</p>
<p>园中{葵|kuí}：园子里的{葵|kuí}花。</p>
<p>朝露：早晨的露水。</p>
<p>日{晞|xī}：太阳晒干。{晞|xī}，干、晒干。</p>
<p>阳春：温暖的春天。</p>
<p>布德泽：给予恩惠。布，给予。德泽，恩惠。</p>
<p>光辉：光芒、光彩。</p>
<p>恐：担心、害怕。</p>
<p>秋节：秋天。</p>
<p>{焜|kūn}黄：枯黄。华，同"花"。</p>
<p>华叶衰：花和叶子都枯萎了。衰，衰败、枯萎。</p>
<p>百川：很多河流。</p>
<p>少壮：年轻力壮的时候。</p>
<p>老大：年老的时候。</p>
<p>徒伤悲：白白地悲伤。徒，白白地。</p>
<br>
<p><strong>【译文】</strong></p>
<p>园子里的{葵|kuí}花绿油油的，早晨的露水等待着太阳来晒干。温暖的春天给万物带来恩惠，一切植物都焕发出光彩。常常担心秋天到来，花和叶子都枯黄凋零。千百条河流都向东流入大海，什么时候能向西流回来呢？年轻的时候不努力，到老了就只能白白地悲伤了。</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这是一首汉代乐府诗。诗的前四句描写春天万物生长的繁荣景象；中间两句写秋天到来、花叶枯萎的衰败景象；接着用百川东流入海不再西归来比喻时间一去不复返；最后得出结论："少壮不努力，老大徒伤悲。"这两句千古名句告诫人们，年轻时要珍惜时光、努力学习，否则到老了后悔也来不及了。</p>`,
    explanation: {
      summary: '这是一首汉代乐府诗。诗中用春天万物繁荣、秋天花叶枯萎来比喻时光的流逝，用百川东流入海不复归来说明时间一去不复返，最后告诫人们：年轻时要珍惜时光、努力学习，否则到老了只能白白悲伤。',
      keyPoints: [
        '这是一首汉代的乐府诗',
        '用春天万物繁荣、秋天花叶枯萎来比喻时光流逝',
        '"百川东到海，何时复西归"比喻时间一去不复返',
        '"少壮不努力，老大徒伤悲"是千古名句',
        '告诫人们要珍惜时光，年轻时努力学习'
      ],
      vocabulary: [
        { word: '葵', pinyin: 'kuí', meaning: '葵花' },
        { word: '晞', pinyin: 'xī', meaning: '干、晒干' },
        { word: '焜黄', pinyin: 'kūn huáng', meaning: '枯黄' },
        { word: '百川', pinyin: 'bǎi chuān', meaning: '很多河流' },
        { word: '徒', pinyin: 'tú', meaning: '白白地' }
      ],
      moral: '"少壮不努力，老大徒伤悲。"这首诗告诉我们，时间一去不复返，要珍惜年轻时候的时光，努力学习，不要等到老了才后悔。'
    },
    questions: [
      {
        id: 'q2043_1',
        question: '"少壮不努力，老大徒伤悲"是什么意思？',
        options: [
          { label: 'A', text: '小时候要多运动' },
          { label: 'B', text: '年轻时不努力，到老了就只能白白悲伤' },
          { label: 'C', text: '老了才能成功' },
          { label: 'D', text: '少说话多做事' }
        ],
        answer: 'B',
        explanation: '"少壮"是年轻的时候，"老大"是年老的时候，"徒"是白白地。意思是年轻时不努力，老了只能白白悲伤。'
      },
      {
        id: 'q2043_2',
        question: '"百川东到海，何时复西归"用什么来比喻？',
        options: [
          { label: 'A', text: '大海很大' },
          { label: 'B', text: '河流很多' },
          { label: 'C', text: '时间一去不复返' },
          { label: 'D', text: '东方比西方好' }
        ],
        answer: 'C',
        explanation: '河流向东流入大海，不会再向西流回来。这用来比喻时间过去了就不会再回来。'
      },
      {
        id: 'q2043_3',
        question: '诗中用什么季节来比喻美好时光？',
        options: [
          { label: 'A', text: '春天' },
          { label: 'B', text: '夏天' },
          { label: 'C', text: '秋天' },
          { label: 'D', text: '冬天' }
        ],
        answer: 'A',
        explanation: '诗中用"阳春布德泽，万物生光辉"来写春天的美好，比喻年轻时的美好时光。'
      },
      {
        id: 'q2043_4',
        question: '这首诗属于什么类型？',
        options: [
          { label: 'A', text: '唐诗' },
          { label: 'B', text: '宋词' },
          { label: 'C', text: '汉乐府' },
          { label: 'D', text: '元曲' }
        ],
        answer: 'C',
        explanation: '这首诗是汉代的乐府诗。'
      },
      {
        id: 'q2043_5',
        question: '这首诗告诉我们什么道理？',
        options: [
          { label: 'A', text: '春天很美' },
          { label: 'B', text: '大海很大' },
          { label: 'C', text: '要珍惜时光，年轻时努力学习' },
          { label: 'D', text: '秋天不好' }
        ],
        answer: 'C',
        explanation: '这首诗通过自然景象的描写，告诉我们时间一去不复返，要珍惜年轻时光，努力学习。'
      }
    ]
  },

  // ==================== 第44天 ====================
  {
    id: 2044,
    title: '《牧童》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 44,
    readingTime: 10,
    author: '吕岩',
    source: '课外拓展',
    image: 'images/grade2/lesson44.jpg',
    text: `<p><strong>牧童</strong></p>
<p>【唐】吕岩</p>
<p>草铺横野六七里，笛弄晚风三四声。</p>
<p>归来饱饭黄昏后，不脱{蓑|suō}衣卧月明。</p>
<br>
<p><strong>【注释】</strong></p>
<p>牧童：放牛放羊的孩子。</p>
<p>草铺横野：野草铺满了广阔的原野。铺，铺展、铺满。横野，广阔的原野。</p>
<p>六七里：形容原野很宽阔，不是真的六七里。</p>
<p>笛弄晚风：笛声在晚风中飘荡。弄，吹奏。</p>
<p>三四声：形容笛声断断续续。</p>
<p>归来：回来。</p>
<p>饱饭：吃饱了饭。</p>
<p>黄昏后：天黑以后。</p>
<p>{蓑|suō}衣：用草或棕做的防雨衣服。</p>
<p>卧月明：躺在明亮的月光下。卧，躺。</p>
<br>
<p><strong>【译文】</strong></p>
<p>广阔的原野上铺满了青草，晚风中传来了几声悠扬的笛声。牧童放牧回来，吃饱了饭，天已经黑了。他连{蓑|suō}衣也不脱，就躺在明亮的月光下休息了。</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这首诗是唐代诗人{吕|lǚ}{岩|yán}写的。诗中描写了一个牧童一天的生活：白天在广阔的原野上放牧，傍晚吹着笛子回家，吃饱饭后不脱衣服就躺在月光下睡着了。诗人用轻松愉快的笔调，写出了牧童无忧无虑、自由自在的田园生活，表达了对这种简单自然生活的向往。</p>`,
    explanation: {
      summary: '这首诗是唐代诗人吕岩写的。诗中描写了牧童的田园生活：广阔的原野上青草铺地，晚风中传来悠扬的笛声。牧童放牧回来吃饱饭后，不脱蓑衣就躺在月光下睡着了。',
      keyPoints: [
        '吕岩是唐代诗人',
        '"草铺横野六七里"写原野的广阔',
        '"笛弄晚风三四声"写笛声的悠扬',
        '"不脱蓑衣卧月明"写牧童的自由自在',
        '全诗表达了对田园生活的向往'
      ],
      vocabulary: [
        { word: '牧童', pinyin: 'mù tóng', meaning: '放牛放羊的孩子' },
        { word: '横野', pinyin: 'héng yě', meaning: '广阔的原野' },
        { word: '笛弄', pinyin: 'dí nòng', meaning: '吹笛子' },
        { word: '蓑衣', pinyin: 'suō yī', meaning: '用草或棕做的防雨衣服' },
        { word: '卧', pinyin: 'wò', meaning: '躺' }
      ],
      moral: '这首诗展现了牧童无忧无虑、自由自在的生活，让我们感受到田园生活的美好。有时候简单的生活才是最快乐的。'
    },
    questions: [
      {
        id: 'q2044_1',
        question: '牧童放牧回来后做了什么？',
        options: [
          { label: 'A', text: '写作业' },
          { label: 'B', text: '吃饱饭后躺在月光下' },
          { label: 'C', text: '继续吹笛子' },
          { label: 'D', text: '去河边洗澡' }
        ],
        answer: 'B',
        explanation: '"归来饱饭黄昏后，不脱蓑衣卧月明"说明牧童吃饱饭后，不脱蓑衣就躺在月光下休息了。'
      },
      {
        id: 'q2044_2',
        question: '"草铺横野六七里"中的"铺"是什么意思？',
        options: [
          { label: 'A', text: '铺床' },
          { label: 'B', text: '铺展、铺满' },
          { label: 'C', text: '店铺' },
          { label: 'D', text: '铺设' }
        ],
        answer: 'B',
        explanation: '"铺"是铺展、铺满的意思。野草铺满了广阔的原野。'
      },
      {
        id: 'q2044_3',
        question: '牧童在什么时候吹笛子？',
        options: [
          { label: 'A', text: '早上' },
          { label: 'B', text: '中午' },
          { label: 'C', text: '傍晚' },
          { label: 'D', text: '深夜' }
        ],
        answer: 'C',
        explanation: '"笛弄晚风三四声"中的"晚风"说明是傍晚时分。'
      },
      {
        id: 'q2044_4',
        question: '这首诗表达了什么样的生活？',
        options: [
          { label: 'A', text: '辛苦忙碌的生活' },
          { label: 'B', text: '无忧无虑、自由自在的田园生活' },
          { label: 'C', text: '悲伤的生活' },
          { label: 'D', text: '热闹的城市生活' }
        ],
        answer: 'B',
        explanation: '全诗描写了牧童放牧、吹笛、月下休息的场景，展现了无忧无虑、自由自在的田园生活。'
      },
      {
        id: 'q2044_5',
        question: '牧童为什么不脱蓑衣就睡觉了？',
        options: [
          { label: 'A', text: '蓑衣很贵重' },
          { label: 'B', text: '太累了，来不及脱' },
          { label: 'C', text: '他很懒' },
          { label: 'D', text: '天气很冷' }
        ],
        answer: 'B',
        explanation: '牧童放牧了一天，吃饱饭后可能太累了，也可能是太随意自在了，不脱蓑衣就躺下了。这表现了牧童天真无拘束的性格。'
      }
    ]
  },

  // ==================== 第45天 ====================
  {
    id: 2045,
    title: '《舟夜书所见》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 45,
    readingTime: 10,
    author: '查慎行',
    source: '课外拓展',
    image: 'images/grade2/lesson45.jpg',
    text: `<p><strong>舟夜书所见</strong></p>
<p>【清】查慎行</p>
<p>月黑见渔灯，孤光一点{萤|yíng}。</p>
<p>微微风{簇|cù}浪，散作满河星。</p>
<br>
<p><strong>【注释】</strong></p>
<p>舟夜：在船上过夜。舟，船。</p>
<p>书所见：写下看到的景色。书，写。所见，看到的。</p>
<p>月黑：没有月亮的夜晚，天很黑。</p>
<p>渔灯：渔船上的灯火。</p>
<p>孤光：孤独的灯光。</p>
<p>一点{萤|yíng}：像一只{萤|yíng}火虫一样，形容灯光很小很微弱。</p>
<p>微微：轻轻地。</p>
<p>风{簇|cù}浪：风吹起了波浪。{簇|cù}，聚集、吹起。</p>
<p>散作：散开变成。</p>
<p>满河星：满河的星星，指灯光在水面上的倒影被波浪打散。</p>
<br>
<p><strong>【译文】</strong></p>
<p>没有月亮的夜晚，天很黑，只看到渔船上的灯火。孤独的灯光像一只{萤|yíng}火虫那样微弱。一阵微风吹来，水面泛起了波浪，灯光的倒影被波浪打散了，变成了满河闪烁的星光。</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这首诗是清代诗人{查|zhā}{慎|shèn}{行|xíng}写的。诗人在船上过夜，观察到了一幅美丽的夜景。前两句写黑夜中渔船上的灯火，灯光孤独微弱，像一只{萤|yíng}火虫。后两句写微风吹来，灯光的倒影在水波中被打散，变成了满河闪烁的星光。诗人用"一点{萤|yíng}"到"满河星"的变化，写出了动人的夜景，构思非常巧妙。</p>`,
    explanation: {
      summary: '这首诗是清代诗人查慎行写的。诗人在船上过夜，看到漆黑的夜里渔船上的灯火像一只萤火虫那样微弱。微风吹来，灯光的倒影被水波打散，变成了满河闪烁的星光。',
      keyPoints: [
        '查慎行是清代诗人',
        '题目意思是"在船上过夜，写下看到的景色"',
        '"孤光一点萤"把灯光比作萤火虫',
        '微风吹来，灯光倒影散开成满河星光',
        '从"一点萤"到"满河星"的变化非常巧妙'
      ],
      vocabulary: [
        { word: '舟', pinyin: 'zhōu', meaning: '船' },
        { word: '渔灯', pinyin: 'yú dēng', meaning: '渔船上的灯火' },
        { word: '萤', pinyin: 'yíng', meaning: '萤火虫' },
        { word: '簇', pinyin: 'cù', meaning: '聚集、吹起' },
        { word: '散作', pinyin: 'sàn zuò', meaning: '散开变成' }
      ],
      moral: '这首诗告诉我们，美就在身边，只要用心观察，即使在漆黑的夜晚也能发现美丽的景色。善于观察生活，就能发现许多美好的事物。'
    },
    questions: [
      {
        id: 'q2045_1',
        question: '题目"舟夜书所见"是什么意思？',
        options: [
          { label: 'A', text: '在船上读书' },
          { label: 'B', text: '在船上过夜，写下看到的景色' },
          { label: 'C', text: '在船上写书' },
          { label: 'D', text: '在夜里划船' }
        ],
        answer: 'B',
        explanation: '"舟"是船，"夜"是夜晚，"书"是写，"所见"是看到的。意思是在船上过夜，写下看到的景色。'
      },
      {
        id: 'q2045_2',
        question: '"孤光一点萤"把灯光比作什么？',
        options: [
          { label: 'A', text: '月亮' },
          { label: 'B', text: '星星' },
          { label: 'C', text: '萤火虫' },
          { label: 'D', text: '蜡烛' }
        ],
        answer: 'C',
        explanation: '"一点萤"是说灯光像一只萤火虫一样，形容灯光很小很微弱。'
      },
      {
        id: 'q2045_3',
        question: '"散作满河星"是怎么形成的？',
        options: [
          { label: 'A', text: '天上落下了星星' },
          { label: 'B', text: '微风吹来，灯光倒影被水波打散' },
          { label: 'C', text: '有人在河里放灯' },
          { label: 'D', text: '月光照在河面上' }
        ],
        answer: 'B',
        explanation: '"微微风簇浪"说明微风吹起了波浪，灯光的倒影被波浪打散了，变成了满河闪烁的星光。'
      },
      {
        id: 'q2045_4',
        question: '这首诗描写的是什么时候的景色？',
        options: [
          { label: 'A', text: '白天' },
          { label: 'B', text: '黄昏' },
          { label: 'C', text: '漆黑的夜晚' },
          { label: 'D', text: '清晨' }
        ],
        answer: 'C',
        explanation: '"月黑见渔灯"说明是漆黑的夜晚，没有月亮，只能看到渔船上的灯火。'
      },
      {
        id: 'q2045_5',
        question: '这首诗的作者是哪个朝代的？',
        options: [
          { label: 'A', text: '唐代' },
          { label: 'B', text: '宋代' },
          { label: 'C', text: '明代' },
          { label: 'D', text: '清代' }
        ],
        answer: 'D',
        explanation: '查慎行是清代诗人。'
      }
    ]
  },

  // ==================== 第46天 ====================
  {
    id: 2046,
    title: '《清明》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 46,
    readingTime: 10,
    author: '杜牧',
    source: '课外拓展',
    image: 'images/grade2/lesson46.jpg',
    text: `<p><strong>清明</strong></p>
<p>【唐】杜牧</p>
<p>清明时节雨纷纷，路上行人欲断魂。</p>
<p>借问酒家何处有？牧童遥指杏花村。</p>
<br>
<p><strong>【注释】</strong></p>
<p>清明：清明节，二十四节气之一，在每年四月五日前后，是中国传统的祭祖扫墓的日子。</p>
<p>雨纷纷：雨下个不停，形容雨丝细密。</p>
<p>行人：在路上行走的人。</p>
<p>欲断魂：心情非常忧伤。欲，好像。断魂，形容非常伤心。</p>
<p>借问：请问。</p>
<p>酒家：酒店、酒馆。</p>
<p>何处：哪里。</p>
<p>遥指：远远地指着。遥，远远地。</p>
<p>杏花村：杏花盛开的村庄，也有人说是一个地名。</p>
<br>
<p><strong>【译文】</strong></p>
<p>清明节的时候，细雨纷纷地下个不停。路上的行人忧伤极了。请问哪里有酒店呢？牧童远远地指着杏花盛开的村庄。</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这首诗是唐代诗人{杜|dù}{牧|mù}写的。前两句写清明节的氛围：细雨纷纷，路上的行人忧伤不已——清明节是祭奠亲人的日子，加上阴雨绵绵，心情更加沉重。后两句写一个温暖的转机：行人问牧童哪里有酒店，牧童远远地指向杏花盛开的村庄。"杏花村"给人以美好的想象，似乎在忧伤中看到了一丝希望和温暖。</p>`,
    explanation: {
      summary: '这首诗是唐代诗人杜牧写的。清明节时细雨纷纷，路上的行人心情忧伤。行人问牧童哪里有酒店，牧童远远地指向杏花盛开的村庄。',
      keyPoints: [
        '杜牧是唐代著名诗人，与李商隐合称"小李杜"',
        '清明节是中国传统的祭祖扫墓的日子',
        '"雨纷纷"写出清明时节细雨绵绵的特点',
        '"欲断魂"形容行人非常忧伤的心情',
        '"牧童遥指杏花村"是千古名句，给人以美好的想象'
      ],
      vocabulary: [
        { word: '清明', pinyin: 'qīng míng', meaning: '二十四节气之一，祭祖扫墓的日子' },
        { word: '纷纷', pinyin: 'fēn fēn', meaning: '雨丝细密、连续不断' },
        { word: '欲断魂', pinyin: 'yù duàn hún', meaning: '形容非常忧伤' },
        { word: '借问', pinyin: 'jiè wèn', meaning: '请问' },
        { word: '遥指', pinyin: 'yáo zhǐ', meaning: '远远地指着' }
      ],
      moral: '这首诗描绘了清明节的特殊氛围，让我们了解了中国传统的清明节文化。清明节是缅怀先人、感恩祖先的日子，我们应该记住这个传统节日。'
    },
    questions: [
      {
        id: 'q2046_1',
        question: '清明节是什么时候？',
        options: [
          { label: 'A', text: '每年一月一日' },
          { label: 'B', text: '每年四月五日前后' },
          { label: 'C', text: '每年八月十五' },
          { label: 'D', text: '每年九月九日' }
        ],
        answer: 'B',
        explanation: '清明节是二十四节气之一，在每年四月五日前后，是中国传统的祭祖扫墓的日子。'
      },
      {
        id: 'q2046_2',
        question: '"路上行人欲断魂"是什么意思？',
        options: [
          { label: 'A', text: '路上的人都很开心' },
          { label: 'B', text: '路上的行人都迷路了' },
          { label: 'C', text: '路上的行人心情非常忧伤' },
          { label: 'D', text: '路上的人都在跑' }
        ],
        answer: 'C',
        explanation: '"欲断魂"形容非常忧伤。清明节祭祖加上阴雨绵绵，行人的心情非常沉重。'
      },
      {
        id: 'q2046_3',
        question: '牧童告诉行人什么？',
        options: [
          { label: 'A', text: '天要晴了' },
          { label: 'B', text: '远远地指向杏花盛开的村庄' },
          { label: 'C', text: '这条路不能走' },
          { label: 'D', text: '前面没有酒店' }
        ],
        answer: 'B',
        explanation: '"牧童遥指杏花村"说明牧童远远地指向杏花盛开的村庄，告诉行人那里有酒店。'
      },
      {
        id: 'q2046_4',
        question: '这首诗的作者是谁？',
        options: [
          { label: 'A', text: '李白' },
          { label: 'B', text: '杜甫' },
          { label: 'C', text: '杜牧' },
          { label: 'D', text: '白居易' }
        ],
        answer: 'C',
        explanation: '这首诗是唐代诗人杜牧写的。'
      },
      {
        id: 'q2046_5',
        question: '"雨纷纷"描写的是什么样的雨？',
        options: [
          { label: 'A', text: '大雨倾盆' },
          { label: 'B', text: '冰雹' },
          { label: 'C', text: '细雨绵绵、下个不停' },
          { label: 'D', text: '阵雨' }
        ],
        answer: 'C',
        explanation: '"纷纷"形容雨丝细密、连续不断的样子。"雨纷纷"就是细雨绵绵、下个不停。'
      }
    ]
  },

  // ==================== 第47天 ====================
  {
    id: 2047,
    title: '《塞下曲》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 47,
    readingTime: 10,
    author: '卢纶',
    source: '课外拓展',
    image: 'images/grade2/lesson47.jpg',
    text: `<p><strong>塞下曲</strong></p>
<p>【唐】卢纶</p>
<p>林暗草惊风，将军夜引弓。</p>
<p>平明寻白羽，没在石{棱|léng}中。</p>
<br>
<p><strong>【注释】</strong></p>
<p>塞下曲：古代边塞的一种军歌。</p>
<p>林暗：树林里很暗。</p>
<p>草惊风：草在风中摇动，好像受了惊一样。也暗示可能有猛兽藏在草丛中。</p>
<p>将军：领兵的将领。</p>
<p>夜引弓：夜里拉弓射箭。引弓，拉开弓。</p>
<p>平明：天亮的时候。</p>
<p>寻白羽：寻找白色的箭羽。白羽，箭尾的白色羽毛，指箭。</p>
<p>没在：陷入、嵌入。</p>
<p>石{棱|léng}：石头的棱角，指硬石头。{棱|léng}，物体的棱角。</p>
<br>
<p><strong>【译文】</strong></p>
<p>树林里很暗，草在风中摇动。将军在夜里拉弓射了一箭。天亮了去寻找那支箭，发现箭深深地嵌入了石头里。</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这首诗是唐代诗人{卢|lún}写的。诗中讲述了一个关于汉代名将{李|lǐ}{广|guǎng}的故事。{李|lǐ}{广|guǎng}夜里在树林中巡逻，看到风吹草动，以为有老虎，就用力射了一箭。天亮去寻找箭，发现箭射进了坚硬的石头里。这个故事说明{李|lǐ}{广|guǎng}的力气非常大，箭法非常高超。当人集中精力、全力以赴的时候，就能发挥出超常的力量。</p>`,
    explanation: {
      summary: '这首诗是唐代诗人卢纶写的，讲的是汉代名将李广的故事。李广夜里在树林中看到风吹草动，以为有老虎，就用力射了一箭。天亮去寻找箭时，发现箭深深地嵌入了坚硬的石头里。',
      keyPoints: [
        '卢纶是唐代诗人',
        '这首诗讲的是汉代名将李广的故事',
        '"林暗草惊风"写出了夜晚树林的紧张气氛',
        '"没在石棱中"说明将军力气很大，箭射进了石头',
        '说明集中精力、全力以赴就能发挥超常的力量'
      ],
      vocabulary: [
        { word: '塞下曲', pinyin: 'sài xià qǔ', meaning: '古代边塞的军歌' },
        { word: '引弓', pinyin: 'yǐn gōng', meaning: '拉开弓' },
        { word: '平明', pinyin: 'píng míng', meaning: '天亮的时候' },
        { word: '白羽', pinyin: 'bái yǔ', meaning: '箭尾的白色羽毛，指箭' },
        { word: '石棱', pinyin: 'shí léng', meaning: '石头的棱角，指硬石头' }
      ],
      moral: '这首诗告诉我们，当一个人全神贯注、全力以赴的时候，就能发挥出超乎寻常的力量。无论做什么事情，都要认真专注、竭尽全力。'
    },
    questions: [
      {
        id: 'q2047_1',
        question: '将军在夜里做了什么？',
        options: [
          { label: 'A', text: '睡觉' },
          { label: 'B', text: '拉弓射箭' },
          { label: 'C', text: '巡逻' },
          { label: 'D', text: '喝酒' }
        ],
        answer: 'B',
        explanation: '"将军夜引弓"说明将军在夜里拉弓射了一箭。'
      },
      {
        id: 'q2047_2',
        question: '天亮后发现箭射到了哪里？',
        options: [
          { label: 'A', text: '射到了老虎身上' },
          { label: 'B', text: '射到了树上' },
          { label: 'C', text: '嵌入了石头里' },
          { label: 'D', text: '射到了地上' }
        ],
        answer: 'C',
        explanation: '"没在石棱中"说明箭深深地嵌入了坚硬的石头里。'
      },
      {
        id: 'q2047_3',
        question: '这个故事说明将军有什么特点？',
        options: [
          { label: 'A', text: '跑得快' },
          { label: 'B', text: '力气大、箭法高超' },
          { label: 'C', text: '很聪明' },
          { label: 'D', text: '唱歌好听' }
        ],
        answer: 'B',
        explanation: '箭能射进坚硬的石头里，说明将军力气非常大，箭法非常高超。'
      },
      {
        id: 'q2047_4',
        question: '"林暗草惊风"中的"惊"是什么意思？',
        options: [
          { label: 'A', text: '害怕' },
          { label: 'B', text: '受惊、摇动' },
          { label: 'C', text: '惊讶' },
          { label: 'D', text: '惊喜' }
        ],
        answer: 'B',
        explanation: '"草惊风"是说草在风中摇动，好像受了惊一样，暗示可能有猛兽藏在草丛中。'
      },
      {
        id: 'q2047_5',
        question: '这首诗讲的是哪位名将的故事？',
        options: [
          { label: 'A', text: '岳飞' },
          { label: 'B', text: '关羽' },
          { label: 'C', text: '李广' },
          { label: 'D', text: '张飞' }
        ],
        answer: 'C',
        explanation: '这首诗讲的是汉代名将李广的故事。李广以箭术精湛、力气过人著称。'
      }
    ]
  },

  // ==================== 第48天 ====================
  {
    id: 2048,
    title: '《望天门山》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 48,
    readingTime: 10,
    author: '李白',
    source: '课外拓展',
    image: 'images/grade2/lesson48.jpg',
    text: `<p><strong>望天门山</strong></p>
<p>【唐】李白</p>
<p>天门中断楚江开，碧水东流至此回。</p>
<p>两岸青山相对出，孤帆一片日边来。</p>
<br>
<p><strong>【注释】</strong></p>
<p>望：远远地看。</p>
<p>天门山：山名，在今安徽省，两座山隔江相对，像一道天上的门。</p>
<p>中断：从中间断开。</p>
<p>楚江：长江。安徽一带古代属于楚国，所以流经这里的长江叫楚江。</p>
<p>开：冲开。</p>
<p>碧水：碧绿的江水。</p>
<p>至此回：到这里转弯。回，转弯、回旋。</p>
<p>两岸：江的两边。</p>
<p>相对出：面对面地耸立出来。两座山像两个人面对面站着。</p>
<p>孤帆：一只船。帆，船帆，代指船。</p>
<p>日边：太阳旁边，形容很远的地方。</p>
<br>
<p><strong>【译文】</strong></p>
<p>天门山被长江从中间冲断，碧绿的江水东流到这里转弯回旋。两岸的青山面对面地耸立着，一只小船从太阳升起的地方飘来。</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这首诗是唐代大诗人{李|lǐ}{白|bái}写的。诗人在船上远望天门山，看到了壮丽的景色。第一句写长江的气势——把天门山都冲断了；第二句写江水在这里转弯回旋；第三句写两岸青山相对而出；第四句写一叶孤舟从远处飘来。全诗气势壮阔，描绘了一幅雄伟的山水画卷。</p>`,
    explanation: {
      summary: '这首诗是唐代大诗人李白写的。诗人在船上远望天门山，看到长江从天门山中间冲过，碧绿的江水在这里转弯回旋，两岸青山相对耸立，一只小船从远处飘来。',
      keyPoints: [
        '李白是唐代最著名的诗人，被称为"诗仙"',
        '天门山在今安徽省，两座山隔江相对',
        '"中断楚江开"写出长江冲断天门山的气势',
        '"两岸青山相对出"写两座山面对面耸立',
        '全诗气势壮阔，是一幅雄伟的山水画卷'
      ],
      vocabulary: [
        { word: '天门山', pinyin: 'tiān mén shān', meaning: '在安徽省，两山隔江相对如天门' },
        { word: '楚江', pinyin: 'chǔ jiāng', meaning: '长江流经楚地的部分' },
        { word: '碧水', pinyin: 'bì shuǐ', meaning: '碧绿的江水' },
        { word: '回', pinyin: 'huí', meaning: '转弯、回旋' },
        { word: '孤帆', pinyin: 'gū fān', meaning: '一只船，帆代指船' }
      ],
      moral: '这首诗描绘了祖国山河的壮丽景色，让我们感受到大自然的雄伟壮美。我们应该热爱祖国的大好河山。'
    },
    questions: [
      {
        id: 'q2048_1',
        question: '"天门中断楚江开"是什么意思？',
        options: [
          { label: 'A', text: '天门山被雷劈断了' },
          { label: 'B', text: '长江从天门山中间冲过' },
          { label: 'C', text: '天门山开了一个门' },
          { label: 'D', text: '楚国打开了天门' }
        ],
        answer: 'B',
        explanation: '"中断"是从中间断开，"楚江"是长江。意思是长江从天门山中间冲了过去，好像把山冲断了一样。'
      },
      {
        id: 'q2048_2',
        question: '"孤帆一片日边来"中的"孤帆"指的是什么？',
        options: [
          { label: 'A', text: '一片帆布' },
          { label: 'B', text: '一只船' },
          { label: 'C', text: '一面旗子' },
          { label: 'D', text: '一只鸟' }
        ],
        answer: 'B',
        explanation: '"帆"是船帆，这里用"孤帆"代指一只小船。'
      },
      {
        id: 'q2048_3',
        question: '天门山在哪里？',
        options: [
          { label: 'A', text: '江西省' },
          { label: 'B', text: '安徽省' },
          { label: 'C', text: '湖北省' },
          { label: 'D', text: '四川省' }
        ],
        answer: 'B',
        explanation: '天门山在今安徽省，两座山隔江相对，像一道天上的门。'
      },
      {
        id: 'q2048_4',
        question: '为什么长江又叫"楚江"？',
        options: [
          { label: 'A', text: '因为江水是绿色的' },
          { label: 'B', text: '因为流经的地方古代属于楚国' },
          { label: 'C', text: '因为江里有楚国人' },
          { label: 'D', text: '因为江很长' }
        ],
        answer: 'B',
        explanation: '安徽一带古代属于楚国，所以流经这里的长江被称为"楚江"。'
      },
      {
        id: 'q2048_5',
        question: '这首诗描写了什么样的景色？',
        options: [
          { label: 'A', text: '小桥流水' },
          { label: 'B', text: '壮阔的山水景色' },
          { label: 'C', text: '春天花园' },
          { label: 'D', text: '秋天落叶' }
        ],
        answer: 'B',
        explanation: '全诗描写了天门山和长江的壮丽景色，气势壮阔，是一幅雄伟的山水画卷。'
      }
    ]
  },

  // ==================== 第49天 ====================
  {
    id: 2049,
    title: '《早发白帝城》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 49,
    readingTime: 10,
    author: '李白',
    source: '课外拓展',
    image: 'images/grade2/lesson49.jpg',
    text: `<p><strong>早发白帝城</strong></p>
<p>【唐】李白</p>
<p>朝辞白帝彩云间，千里江陵一日还。</p>
<p>两岸猿声啼不住，轻舟已过万重山。</p>
<br>
<p><strong>【注释】</strong></p>
<p>早发：早上出发。</p>
<p>白帝城：地名，在今重庆市，地势很高。</p>
<p>朝辞：早上告别。朝，早上。辞，告别。</p>
<p>彩云间：在彩色的云朵之间，形容白帝城地势很高。</p>
<p>千里：形容路途很远。</p>
<p>江陵：地名，在今湖北省。</p>
<p>一日还：一天就能到达。还，回来。</p>
<p>猿声：猿猴的叫声。古代长江三峡两岸有很多猿猴。</p>
<p>啼不住：叫个不停。</p>
<p>轻舟：轻快的小船。</p>
<p>万重山：很多很多座山。万重，很多层。</p>
<br>
<p><strong>【译文】</strong></p>
<p>早上告别了高耸入云的白帝城，千里远的江陵一天就能到达。两岸的猿猴叫声还在耳边回响，轻快的小船已经飞过了万重山峰。</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这首诗是唐代大诗人{李|lǐ}{白|bái}写的。当时{李|lǐ}{白|bái}被流放，走到白帝城时忽然收到赦免的消息，他非常高兴，立刻坐船顺流而下。诗的第一句写白帝城地势很高，在彩云之间；第二句写船行的速度极快，千里路一天就到了；第三、四句写两岸猿猴的叫声还在耳边，小船已经飞过了万重山——说明船速极快，也表达了诗人欢快的心情。</p>`,
    explanation: {
      summary: '这首诗是唐代大诗人李白写的。李白在白帝城收到赦免的消息，非常高兴，一大早就坐船顺流而下。千里远的江陵一天就能到达，两岸猿声还在耳边，小船已经飞过了万重山。',
      keyPoints: [
        '李白收到赦免消息后非常高兴地写下了这首诗',
        '"朝辞白帝彩云间"写白帝城地势很高',
        '"千里江陵一日还"写船行速度极快',
        '"轻舟已过万重山"写船飞速越过群山',
        '全诗表达了诗人欢快喜悦的心情'
      ],
      vocabulary: [
        { word: '朝辞', pinyin: 'zhāo cí', meaning: '早上告别' },
        { word: '彩云间', pinyin: 'cǎi yún jiān', meaning: '在彩色云朵之间，形容地势高' },
        { word: '千里', pinyin: 'qiān lǐ', meaning: '形容路途很远' },
        { word: '江陵', pinyin: 'jiāng líng', meaning: '今湖北省的一个地方' },
        { word: '万重山', pinyin: 'wàn chóng shān', meaning: '很多很多座山' }
      ],
      moral: '这首诗表达了诗人重获自由的喜悦心情。人生中会遇到困难和挫折，但只要坚持下去，就会迎来美好的一天。'
    },
    questions: [
      {
        id: 'q2049_1',
        question: '诗人为什么写这首诗？',
        options: [
          { label: 'A', text: '去旅游' },
          { label: 'B', text: '收到赦免消息，非常高兴' },
          { label: 'C', text: '想念家乡' },
          { label: 'D', text: '朋友邀请' }
        ],
        answer: 'B',
        explanation: '李白在白帝城收到赦免的消息，非常高兴，立刻坐船顺流而下，写下了这首诗。'
      },
      {
        id: 'q2049_2',
        question: '"千里江陵一日还"说明了什么？',
        options: [
          { label: 'A', text: '江陵很近' },
          { label: 'B', text: '船行速度极快' },
          { label: 'C', text: '一天很长' },
          { label: 'D', text: '白帝城很大' }
        ],
        answer: 'B',
        explanation: '千里远的路程一天就能到达，说明船顺流而下速度非常快。'
      },
      {
        id: 'q2049_3',
        question: '"朝辞白帝彩云间"中的"朝"是什么意思？',
        options: [
          { label: 'A', text: '朝着' },
          { label: 'B', text: '早上' },
          { label: 'C', text: '朝廷' },
          { label: 'D', text: '朝代' }
        ],
        answer: 'B',
        explanation: '"朝"在这里读zhāo，是"早上"的意思。"朝辞"就是早上告别。'
      },
      {
        id: 'q2049_4',
        question: '"轻舟已过万重山"表达了诗人什么心情？',
        options: [
          { label: 'A', text: '悲伤' },
          { label: 'B', text: '愤怒' },
          { label: 'C', text: '欢快喜悦' },
          { label: 'D', text: '害怕' }
        ],
        answer: 'C',
        explanation: '船飞速越过万重山，表达了诗人重获自由后的欢快喜悦之情。'
      },
      {
        id: 'q2049_5',
        question: '白帝城在哪里？',
        options: [
          { label: 'A', text: '四川省' },
          { label: 'B', text: '重庆市' },
          { label: 'C', text: '湖北省' },
          { label: 'D', text: '安徽省' }
        ],
        answer: 'B',
        explanation: '白帝城在今重庆市，地处长江三峡的起点，地势很高。'
      }
    ]
  },

  // ==================== 第50天 ====================
  {
    id: 2050,
    title: '《绝句》(迟日江山丽)',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 50,
    readingTime: 10,
    author: '杜甫',
    source: '课外拓展',
    image: 'images/grade2/lesson50.jpg',
    text: `<p><strong>绝句</strong></p>
<p>【唐】杜甫</p>
<p>迟日江山丽，春风花草香。</p>
<p>泥融飞燕子，沙暖睡{鸳|yuān}{鸯|yāng}。</p>
<br>
<p><strong>【注释】</strong></p>
<p>绝句：一种诗歌格式，每首四句。</p>
<p>迟日：春天的太阳。迟日，日子长了，春天白天变长了。</p>
<p>江山丽：山河非常美丽。丽，美丽。</p>
<p>花草香：花草散发出香味。</p>
<p>泥融：泥土变得松软。融，融化、变软。春天来了，冻土融化变软。</p>
<p>飞燕子：燕子飞来飞去。燕子在松软的泥土上衔泥筑巢。</p>
<p>沙暖：沙滩变得暖和。春天的阳光晒暖了沙滩。</p>
<p>睡{鸳|yuān}{鸯|yāng}：{鸳|yuān}{鸯|yāng}在暖和的沙滩上睡觉。{鸳|yuān}{鸯|yāng}是一种美丽的水鸟，常常成双成对。</p>
<br>
<p><strong>【译文】</strong></p>
<p>春天的阳光照耀着大地，山河多么美丽。春风吹来，花草散发出阵阵清香。泥土变得松软了，燕子飞来飞去衔泥筑巢。沙滩暖和了，{鸳|yuān}{鸯|yāng}在上面安静地睡觉。</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这首诗是唐代大诗人{杜|dù}{甫|fǔ}写的。全诗描绘了一幅美丽的春天景象。前两句总写春天的美好：阳光照耀下江山秀丽，春风送来花草的清香。后两句用两个细节来具体描写：燕子衔泥筑巢，飞来飞去；{鸳|yuān}{鸯|yāng}在暖和的沙滩上安静地睡觉。一动一静，相映成趣，把春天的温暖和美丽写得淋漓尽致。</p>`,
    explanation: {
      summary: '这首诗是唐代大诗人杜甫写的。诗中描绘了美丽的春天景色：阳光照耀下山河秀丽，春风送来花草清香，燕子衔泥筑巢，鸳鸯在暖和的沙滩上安静睡觉。',
      keyPoints: [
        '杜甫是唐代最著名的诗人之一，被称为"诗圣"',
        '"迟日"指春天的太阳，春天白天变长了',
        '"泥融飞燕子"写燕子衔泥筑巢的忙碌景象',
        '"沙暖睡鸳鸯"写鸳鸯安静睡觉的温馨画面',
        '一动一静，描绘了春天的美好景象'
      ],
      vocabulary: [
        { word: '迟日', pinyin: 'chí rì', meaning: '春天的太阳，白天变长了' },
        { word: '丽', pinyin: 'lì', meaning: '美丽' },
        { word: '泥融', pinyin: 'ní róng', meaning: '泥土变得松软' },
        { word: '鸳鸯', pinyin: 'yuān yāng', meaning: '一种美丽的水鸟，常成双成对' },
        { word: '沙暖', pinyin: 'shā nuǎn', meaning: '沙滩变得暖和' }
      ],
      moral: '这首诗描绘了春天的美丽景色，让我们感受到大自然的美好和万物复苏的生机。春天是充满希望的季节，让我们珍惜美好的时光。'
    },
    questions: [
      {
        id: 'q2050_1',
        question: '"迟日"指的是什么？',
        options: [
          { label: 'A', text: '迟到的日子' },
          { label: 'B', text: '春天的太阳' },
          { label: 'C', text: '夏天的太阳' },
          { label: 'D', text: '傍晚的太阳' }
        ],
        answer: 'B',
        explanation: '"迟日"指春天的太阳。春天白天变长了，所以说"迟日"。'
      },
      {
        id: 'q2050_2',
        question: '燕子在做什么？',
        options: [
          { label: 'A', text: '睡觉' },
          { label: 'B', text: '唱歌' },
          { label: 'C', text: '衔泥筑巢' },
          { label: 'D', text: '捕鱼' }
        ],
        answer: 'C',
        explanation: '"泥融飞燕子"说明泥土变软了，燕子飞来飞去衔泥筑巢。'
      },
      {
        id: 'q2050_3',
        question: '鸳鸯在哪里睡觉？',
        options: [
          { label: 'A', text: '树上' },
          { label: 'B', text: '暖和的沙滩上' },
          { label: 'C', text: '水里' },
          { label: 'D', text: '草丛里' }
        ],
        answer: 'B',
        explanation: '"沙暖睡鸳鸯"说明鸳鸯在暖和的沙滩上安静地睡觉。'
      },
      {
        id: 'q2050_4',
        question: '这首诗描写的是什么季节？',
        options: [
          { label: 'A', text: '春天' },
          { label: 'B', text: '夏天' },
          { label: 'C', text: '秋天' },
          { label: 'D', text: '冬天' }
        ],
        answer: 'A',
        explanation: '诗中写到迟日、春风、花草香、泥融、沙暖等，都是春天的景象。'
      },
      {
        id: 'q2050_5',
        question: '这首诗的作者是谁？',
        options: [
          { label: 'A', text: '李白' },
          { label: 'B', text: '杜甫' },
          { label: 'C', text: '白居易' },
          { label: 'D', text: '王维' }
        ],
        answer: 'B',
        explanation: '这首诗是唐代大诗人杜甫写的。杜甫被称为"诗圣"。'
      }
    ]
  },

  // ==================== 第51天 ====================
  {
    id: 2051,
    title: '《寻隐者不遇》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 51,
    readingTime: 10,
    author: '贾岛',
    source: '课外拓展',
    image: 'images/grade2/lesson51.jpg',
    text: `<p><strong>寻隐者不遇</strong></p>
<p>【唐】贾岛</p>
<p>松下问童子，言师采药去。</p>
<p>只在此山中，云深不知处。</p>
<br>
<p><strong>【注释】</strong></p>
<p>寻：寻找、拜访。</p>
<p>隐者：隐居在山中的人，一般是有学问但不愿做官的人。</p>
<p>不遇：没有遇到、没有见到。</p>
<p>松下：松树下面。</p>
<p>童子：小孩子，这里指隐者的小徒弟。</p>
<p>言：说、告诉。</p>
<p>师：师父，指隐者。</p>
<p>采药：采集草药。</p>
<p>只在：就在。</p>
<p>此山：这座山。</p>
<p>云深：云雾浓厚。</p>
<p>不知处：不知道在哪里。处，地方。</p>
<br>
<p><strong>【译文】</strong></p>
<p>我在松树下面问隐者的小徒弟："你师父在哪里？"小徒弟说："师父采药去了。就在这座山中，可是山里云雾太浓了，不知道他具体在哪里。"</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这首诗是唐代诗人{贾|jiǎ}{岛|dǎo}写的。诗中描写了诗人去拜访一位隐者，但没有遇到的情景。诗人在松树下问隐者的小徒弟，小徒弟说师父去采药了，就在这座山里，但云雾太浓不知道在哪里。全诗用对话的形式，写出了山中的幽静和隐者的超凡脱俗。"云深不知处"给人以无限的想象空间。</p>`,
    explanation: {
      summary: '这首诗是唐代诗人贾岛写的。诗人去拜访一位隐者，没有遇到，只见到隐者的小徒弟。小徒弟说师父去采药了，就在这座山中，但云雾太浓不知道在哪里。',
      keyPoints: [
        '贾岛是唐代诗人',
        '隐者是隐居在山中有学问的人',
        '全诗用对话的形式写成',
        '"只在此山中，云深不知处"是千古名句',
        '写出了山中的幽静和隐者的超凡脱俗'
      ],
      vocabulary: [
        { word: '隐者', pinyin: 'yǐn zhě', meaning: '隐居在山中的人' },
        { word: '不遇', pinyin: 'bù yù', meaning: '没有遇到' },
        { word: '童子', pinyin: 'tóng zǐ', meaning: '小孩子，这里指小徒弟' },
        { word: '采药', pinyin: 'cǎi yào', meaning: '采集草药' },
        { word: '云深', pinyin: 'yún shēn', meaning: '云雾浓厚' }
      ],
      moral: '这首诗让我们感受到山中的幽静和隐者超凡脱俗的生活方式。有时候，虽然没有找到想找的人，但在寻找的过程中也能欣赏到美丽的风景。'
    },
    questions: [
      {
        id: 'q2051_1',
        question: '诗人去找谁？',
        options: [
          { label: 'A', text: '朋友' },
          { label: 'B', text: '隐者' },
          { label: 'C', text: '老师' },
          { label: 'D', text: '亲戚' }
        ],
        answer: 'B',
        explanation: '题目"寻隐者不遇"说明诗人去寻找一位隐者，但没有遇到。'
      },
      {
        id: 'q2051_2',
        question: '隐者去干什么了？',
        options: [
          { label: 'A', text: '去砍柴了' },
          { label: 'B', text: '去采药了' },
          { label: 'C', text: '去钓鱼了' },
          { label: 'D', text: '去旅行了' }
        ],
        answer: 'B',
        explanation: '童子说："言师采药去。"说明师父去采集草药了。'
      },
      {
        id: 'q2051_3',
        question: '为什么找不到隐者？',
        options: [
          { label: 'A', text: '隐者搬走了' },
          { label: 'B', text: '隐者不在山里' },
          { label: 'C', text: '山中云雾太浓，不知道在哪里' },
          { label: 'D', text: '童子说谎了' }
        ],
        answer: 'C',
        explanation: '"只在此山中，云深不知处"说明隐者就在这座山中，但山里云雾太浓了，不知道他具体在哪里。'
      },
      {
        id: 'q2051_4',
        question: '这首诗的作者是谁？',
        options: [
          { label: 'A', text: '李白' },
          { label: 'B', text: '杜甫' },
          { label: 'C', text: '贾岛' },
          { label: 'D', text: '王维' }
        ],
        answer: 'C',
        explanation: '这首诗是唐代诗人贾岛写的。'
      },
      {
        id: 'q2051_5',
        question: '"松下问童子"中的"童子"是谁？',
        options: [
          { label: 'A', text: '诗人自己' },
          { label: 'B', text: '隐者的小徒弟' },
          { label: 'C', text: '路过的行人' },
          { label: 'D', text: '隐者的儿子' }
        ],
        answer: 'B',
        explanation: '"童子"指小孩子，这里是指隐者的小徒弟。诗人问他师父在哪里。'
      }
    ]
  },

  // ==================== 第52天 ====================
  {
    id: 2052,
    title: '《小儿垂钓》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 52,
    readingTime: 10,
    author: '胡令能',
    source: '课外拓展',
    image: 'images/grade2/lesson52.jpg',
    text: `<p><strong>小儿垂钓</strong></p>
<p>【唐】胡令能</p>
<p>{蓬|péng}头{稚|zhì}子学垂{纶|lún}，侧坐{莓|méi}{苔|tái}草映身。</p>
<p>路人借问遥招手，怕得鱼惊不应人。</p>
<br>
<p><strong>【注释】</strong></p>
<p>小儿垂钓：小孩子钓鱼。</p>
<p>{蓬|péng}头：头发乱蓬蓬的。形容小孩不讲究打扮。</p>
<p>{稚|zhì}子：小孩子。{稚|zhì}，幼小。</p>
<p>垂{纶|lún}：钓鱼。{纶|lún}，钓鱼用的丝线。</p>
<p>侧坐：斜着身子坐着。</p>
<p>{莓|méi}{苔|tái}：长在潮湿地方的一种植物。</p>
<p>草映身：草遮住了身体。映，遮挡、映衬。</p>
<p>路人：路过的人。</p>
<p>借问：请问、向人打听。</p>
<p>遥招手：远远地摆手。遥，远远地。</p>
<p>怕得：害怕。</p>
<p>鱼惊：把鱼吓跑了。惊，惊吓。</p>
<p>不应人：不回答路人的话。应，回答。</p>
<br>
<p><strong>【译文】</strong></p>
<p>一个头发乱蓬蓬的小孩子在学钓鱼，他斜着身子坐在{莓|méi}{苔|tái}旁边，草丛遮住了他的身体。有路人来问路，他远远地摆摆手，不敢回答，怕把鱼吓跑了。</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这首诗是唐代诗人{胡|hú}{令|lìng}{能|néng}写的。诗中描写了一个小孩子在河边学钓鱼的情景。第一句写小孩的外貌——头发乱蓬蓬的，一个天真可爱的孩子。第二句写他的坐姿——侧着身子坐在草丛中，草遮住了身体。后两句最精彩：路人来问话，他只远远地摆手，不敢出声回答——因为怕把鱼吓跑了！这个细节把孩子认真钓鱼的样子写得活灵活现，非常可爱。</p>`,
    explanation: {
      summary: '这首诗是唐代诗人胡令能写的。一个头发乱蓬蓬的小孩在河边学钓鱼，他侧坐在草丛中。有路人来问路，他只远远地摆手不敢回答，怕把鱼吓跑了。',
      keyPoints: [
        '胡令能是唐代诗人',
        '"蓬头稚子"写出小孩天真可爱的形象',
        '"侧坐莓苔草映身"写小孩坐在草丛中的样子',
        '"遥招手"写小孩远远摆手不敢出声',
        '"怕得鱼惊不应人"写出孩子认真钓鱼的神态'
      ],
      vocabulary: [
        { word: '蓬头', pinyin: 'péng tóu', meaning: '头发乱蓬蓬的' },
        { word: '稚子', pinyin: 'zhì zǐ', meaning: '小孩子' },
        { word: '垂纶', pinyin: 'chuí lún', meaning: '钓鱼' },
        { word: '莓苔', pinyin: 'méi tái', meaning: '长在潮湿地方的植物' },
        { word: '应', pinyin: 'yìng', meaning: '回答' }
      ],
      moral: '这首诗描绘了一个认真专注的钓鱼小孩形象。做事要认真专注，不能三心二意。小孩怕把鱼吓跑而不敢出声，说明他非常认真和专注。'
    },
    questions: [
      {
        id: 'q2052_1',
        question: '小孩为什么远远摆手不回答路人？',
        options: [
          { label: 'A', text: '他不会说话' },
          { label: 'B', text: '他很害羞' },
          { label: 'C', text: '怕把鱼吓跑了' },
          { label: 'D', text: '他不喜欢路人' }
        ],
        answer: 'C',
        explanation: '"怕得鱼惊不应人"说明小孩怕出声会把鱼吓跑，所以不敢回答路人。'
      },
      {
        id: 'q2052_2',
        question: '"蓬头稚子"中的"稚子"是什么意思？',
        options: [
          { label: 'A', text: '老人' },
          { label: 'B', text: '年轻人' },
          { label: 'C', text: '小孩子' },
          { label: 'D', text: '学生' }
        ],
        answer: 'C',
        explanation: '"稚子"就是小孩子。"稚"是幼小的意思。'
      },
      {
        id: 'q2052_3',
        question: '"垂纶"是什么意思？',
        options: [
          { label: 'A', text: '爬树' },
          { label: 'B', text: '游泳' },
          { label: 'C', text: '钓鱼' },
          { label: 'D', text: '散步' }
        ],
        answer: 'C',
        explanation: '"垂纶"是钓鱼的意思。"纶"是钓鱼用的丝线。'
      },
      {
        id: 'q2052_4',
        question: '这个小孩的形象是怎样的？',
        options: [
          { label: 'A', text: '衣着华丽' },
          { label: 'B', text: '头发乱蓬蓬的，天真可爱' },
          { label: 'C', text: '很高大' },
          { label: 'D', text: '很严肃' }
        ],
        answer: 'B',
        explanation: '"蓬头"形容头发乱蓬蓬的，说明这是一个不讲究打扮、天真可爱的小孩子。'
      },
      {
        id: 'q2052_5',
        question: '这首诗告诉我们要怎样做事？',
        options: [
          { label: 'A', text: '要快' },
          { label: 'B', text: '要认真专注' },
          { label: 'C', text: '要大声说话' },
          { label: 'D', text: '要帮助别人' }
        ],
        answer: 'B',
        explanation: '小孩认真钓鱼，怕出声把鱼吓跑，说明做事要认真专注，不能三心二意。'
      }
    ]
  },

  // ==================== 第53天 ====================
  {
    id: 2053,
    title: '《独坐敬亭山》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 53,
    readingTime: 10,
    author: '李白',
    source: '课外拓展',
    image: 'images/grade2/lesson53.jpg',
    text: `<p><strong>独坐敬亭山</strong></p>
<p>【唐】李白</p>
<p>众鸟高飞尽，孤云独去闲。</p>
<p>相看两不厌，只有敬亭山。</p>
<br>
<p><strong>【注释】</strong></p>
<p>独坐：独自一人坐着。</p>
<p>敬亭山：山名，在今安徽省。</p>
<p>众鸟：很多鸟。</p>
<p>高飞尽：飞到高处，全都飞走了。尽，完、没有了。</p>
<p>孤云：孤独的一片云。</p>
<p>独去闲：独自悠闲地飘走了。闲，悠闲。</p>
<p>相看：互相看着。</p>
<p>两不厌：双方都不厌倦。厌，厌倦、满足。</p>
<p>只有：仅有。</p>
<br>
<p><strong>【译文】</strong></p>
<p>很多鸟都飞到高处，全都飞走了。一片孤独的云也悠闲地飘走了。只有敬亭山和我互相看着，怎么看都不厌倦。</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这首诗是唐代大诗人{李|lǐ}{白|bái}写的。诗人独自坐在敬亭山上，看着鸟儿飞走、云朵飘散，天地间只剩下他和敬亭山。前两句写众鸟飞走、孤云飘散，烘托出诗人的孤独。后两句笔锋一转，说虽然鸟和云都走了，但还有敬亭山陪着自己，怎么看都不厌倦。诗人把山当作朋友，与山相看不厌，表达了对大自然的热爱，也流露出内心的孤独。</p>`,
    explanation: {
      summary: '这首诗是唐代大诗人李白写的。诗人独自坐在敬亭山上，看着鸟儿飞走、云朵飘散，天地间只剩下他和敬亭山。诗人把山当作朋友，与山相看不厌。',
      keyPoints: [
        '李白是唐代最著名的诗人之一，被称为"诗仙"',
        '敬亭山在今安徽省',
        '"众鸟高飞尽"写鸟儿都飞走了',
        '"孤云独去闲"写云也悠闲地飘走了',
        '"相看两不厌，只有敬亭山"把山当作朋友'
      ],
      vocabulary: [
        { word: '敬亭山', pinyin: 'jìng tíng shān', meaning: '在安徽省的一座山' },
        { word: '尽', pinyin: 'jìn', meaning: '完、没有了' },
        { word: '闲', pinyin: 'xián', meaning: '悠闲' },
        { word: '相看', pinyin: 'xiāng kàn', meaning: '互相看着' },
        { word: '厌', pinyin: 'yàn', meaning: '厌倦、满足' }
      ],
      moral: '这首诗告诉我们，大自然是最好的朋友。即使在孤独的时候，大自然也会陪伴着我们。我们要学会与自然为友，感受大自然的美好。'
    },
    questions: [
      {
        id: 'q2053_1',
        question: '诗人独自坐在什么地方？',
        options: [
          { label: 'A', text: '河边' },
          { label: 'B', text: '敬亭山上' },
          { label: 'C', text: '亭子里' },
          { label: 'D', text: '船上' }
        ],
        answer: 'B',
        explanation: '题目"独坐敬亭山"说明诗人独自一人坐在敬亭山上。'
      },
      {
        id: 'q2053_2',
        question: '"众鸟高飞尽"中的"尽"是什么意思？',
        options: [
          { label: 'A', text: '尽力' },
          { label: 'B', text: '尽快' },
          { label: 'C', text: '完、没有了' },
          { label: 'D', text: '尽头' }
        ],
        answer: 'C',
        explanation: '"尽"是完、没有了的意思。众鸟都飞走了，一只也没有留下。'
      },
      {
        id: 'q2053_3',
        question: '最后谁留下来陪伴诗人？',
        options: [
          { label: 'A', text: '鸟' },
          { label: 'B', text: '云' },
          { label: 'C', text: '敬亭山' },
          { label: 'D', text: '朋友' }
        ],
        answer: 'C',
        explanation: '"相看两不厌，只有敬亭山"说明鸟和云都走了，只有敬亭山还陪伴着诗人。'
      },
      {
        id: 'q2053_4',
        question: '"相看两不厌"表达了什么？',
        options: [
          { label: 'A', text: '诗人和山互相看着，都不厌倦' },
          { label: 'B', text: '诗人很无聊' },
          { label: 'C', text: '山很美' },
          { label: 'D', text: '云很好看' }
        ],
        answer: 'A',
        explanation: '"相看"是互相看，"两不厌"是双方都不厌倦。诗人和敬亭山互相看着，怎么看都不厌倦。'
      },
      {
        id: 'q2053_5',
        question: '这首诗主要表达了什么情感？',
        options: [
          { label: 'A', text: '高兴' },
          { label: 'B', text: '愤怒' },
          { label: 'C', text: '孤独中的宁静与对自然的热爱' },
          { label: 'D', text: '悲伤' }
        ],
        answer: 'C',
        explanation: '全诗表达了诗人虽然孤独，但与大自然为友的宁静心态，以及对大自然的热爱之情。'
      }
    ]
  },

  // ==================== 第54天 ====================
  {
    id: 2054,
    title: '《春日》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 54,
    readingTime: 10,
    author: '朱熹',
    source: '课外拓展',
    image: 'images/grade2/lesson54.jpg',
    text: `<p><strong>春日</strong></p>
<p>【宋】朱熹</p>
<p>胜日寻芳{泗|sì}水滨，无边光景一时新。</p>
<p>等闲识得东风面，万紫千红总是春。</p>
<br>
<p><strong>【注释】</strong></p>
<p>春日：春天的日子。</p>
<p>胜日：好日子、天气晴朗的日子。</p>
<p>寻芳：寻找春天的美景。芳，花草的香味，这里指美好的春景。</p>
<p>{泗|sì}水：河名，在今山东省。</p>
<p>滨：水边。</p>
<p>无边：没有边际、无限。</p>
<p>光景：风景、风光。</p>
<p>一时新：一下子都变得焕然一新。</p>
<p>等闲：轻易、随便。</p>
<p>识得：认识到、感受到。</p>
<p>东风面：春风的样子。东风，春风。</p>
<p>万紫千红：形容百花齐放、色彩缤纷。</p>
<p>总是：都是。</p>
<br>
<p><strong>【译文】</strong></p>
<p>在一个风和日丽的好日子里，我来到{泗|sì}水边寻找春天的美景。无边无际的风光一下子都变得焕然一新。轻易就能感受到春风的温暖，万紫千红的景象都是春天带来的啊。</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这首诗是南宋理学家{朱|zhū}{熹|xī}写的。诗中描写了春天的美丽景色。在一个晴朗的日子里，诗人来到{泗|sì}水边踏春，眼前是焕然一新的风光。"万紫千红总是春"是千古名句，形容春天百花齐放、五彩缤纷的景象。后人也用"万紫千红"来形容丰富多彩、繁荣兴旺的景象。</p>`,
    explanation: {
      summary: '这首诗是南宋理学家朱熹写的。在一个晴朗的好日子，诗人来到泗水边寻找春天的美景。无边的风光焕然一新，万紫千红的景象都是春天带来的。',
      keyPoints: [
        '朱熹是南宋著名的理学家和诗人',
        '"胜日"是天气晴朗的好日子',
        '"寻芳"是寻找春天的美景',
        '"万紫千红总是春"是千古名句',
        '形容春天百花齐放、色彩缤纷的景象'
      ],
      vocabulary: [
        { word: '胜日', pinyin: 'shèng rì', meaning: '好日子、天气晴朗的日子' },
        { word: '寻芳', pinyin: 'xún fāng', meaning: '寻找春天的美景' },
        { word: '泗水', pinyin: 'sì shuǐ', meaning: '河名，在山东省' },
        { word: '等闲', pinyin: 'děng xián', meaning: '轻易、随便' },
        { word: '万紫千红', pinyin: 'wàn zǐ qiān hóng', meaning: '形容百花齐放、色彩缤纷' }
      ],
      moral: '"万紫千红总是春"告诉我们，春天是充满生机和希望的季节。大自然的美丽需要我们去发现和欣赏。每个人也应该像春天一样，绽放自己的光彩。'
    },
    questions: [
      {
        id: 'q2054_1',
        question: '"万紫千红总是春"是什么意思？',
        options: [
          { label: 'A', text: '只有紫色和红色' },
          { label: 'B', text: '百花齐放的景象都是春天带来的' },
          { label: 'C', text: '春天只有花' },
          { label: 'D', text: '冬天也有花' }
        ],
        answer: 'B',
        explanation: '"万紫千红"形容百花齐放、色彩缤纷。"总是春"说明这都是春天带来的景象。'
      },
      {
        id: 'q2054_2',
        question: '"胜日寻芳泗水滨"中的"胜日"是什么意思？',
        options: [
          { label: 'A', text: '胜利的日子' },
          { label: 'B', text: '好日子、天气晴朗的日子' },
          { label: 'C', text: '比赛的日子' },
          { label: 'D', text: '节日' }
        ],
        answer: 'B',
        explanation: '"胜日"是好日子、天气晴朗的日子。诗人选了一个好天气出去踏春。'
      },
      {
        id: 'q2054_3',
        question: '诗人去了哪里寻找春天？',
        options: [
          { label: 'A', text: '山上' },
          { label: 'B', text: '花园里' },
          { label: 'C', text: '泗水边' },
          { label: 'D', text: '城里' }
        ],
        answer: 'C',
        explanation: '"寻芳泗水滨"说明诗人来到泗水边寻找春天的美景。'
      },
      {
        id: 'q2054_4',
        question: '这首诗的作者是哪个朝代的？',
        options: [
          { label: 'A', text: '唐代' },
          { label: 'B', text: '北宋' },
          { label: 'C', text: '南宋' },
          { label: 'D', text: '明代' }
        ],
        answer: 'C',
        explanation: '朱熹是南宋著名的理学家和诗人。'
      },
      {
        id: 'q2054_5',
        question: '"万紫千红"现在常用来形容什么？',
        options: [
          { label: 'A', text: '只有花' },
          { label: 'B', text: '丰富多彩、繁荣兴旺的景象' },
          { label: 'C', text: '只有两种颜色' },
          { label: 'D', text: '黑白分明' }
        ],
        answer: 'B',
        explanation: '"万紫千红"现在常用来形容丰富多彩、繁荣兴旺的景象，不仅仅指花。'
      }
    ]
  },

  // ==================== 第55天 ====================
  {
    id: 2055,
    title: '《所见》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 2,
    day: 55,
    readingTime: 10,
    author: '袁枚',
    source: '课外拓展',
    image: 'images/grade2/lesson55.jpg',
    text: `<p><strong>所见</strong></p>
<p>【清】袁枚</p>
<p>牧童骑黄牛，歌声振林{樾|yuè}。</p>
<p>意欲捕{鸣|míng}蝉，忽然闭口立。</p>
<br>
<p><strong>【注释】</strong></p>
<p>所见：看到的景象。</p>
<p>牧童：放牛的孩子。</p>
<p>骑黄牛：骑在黄牛背上。</p>
<p>歌声振林{樾|yuè}：歌声在树林间回荡。振，振动、回荡。林{樾|yuè}，树林的阴凉处。</p>
<p>意欲：心里想要。意，心里。欲，想要。</p>
<p>捕{鸣|míng}蝉：捉正在叫的蝉。捕，捕捉。{鸣|míng}蝉，正在叫的蝉。</p>
<p>忽然：突然。</p>
<p>闭口立：闭上嘴巴，站在那里不动。闭口，闭上嘴不唱歌。立，站立。</p>
<br>
<p><strong>【译文】</strong></p>
<p>一个牧童骑在黄牛背上，嘹亮的歌声在树林间回荡。忽然他想要捉树上正在叫的蝉，就立刻闭上嘴巴，站在那里一动不动了。</p>
<br>
<p><strong>【赏析】</strong></p>
<p>这首诗是清代诗人{袁|yuán}{枚|méi}写的。诗中描写了牧童的两个瞬间：第一个是骑在牛背上大声唱歌，歌声回荡在树林间，非常欢快；第二个是忽然看到树上有蝉在叫，想要去捉，就立刻闭上嘴巴站住不动了。从高声唱歌到突然安静，一动一静的对比非常鲜明，把牧童天真活泼、机灵可爱的形象写得活灵活现。</p>`,
    explanation: {
      summary: '这首诗是清代诗人袁枚写的。诗中描写了牧童的两个瞬间：骑在黄牛背上大声唱歌，歌声回荡在树林间；忽然看到树上有蝉在叫，想要去捉，就立刻闭上嘴巴站住不动了。',
      keyPoints: [
        '袁枚是清代诗人',
        '"牧童骑黄牛，歌声振林樾"写牧童欢快地唱歌',
        '"意欲捕鸣蝉"写牧童想捉蝉',
        '"忽然闭口立"写牧童突然安静下来',
        '一动一静的对比写出了牧童的天真可爱'
      ],
      vocabulary: [
        { word: '所见', pinyin: 'suǒ jiàn', meaning: '看到的景象' },
        { word: '林樾', pinyin: 'lín yuè', meaning: '树林的阴凉处' },
        { word: '意欲', pinyin: 'yì yù', meaning: '心里想要' },
        { word: '鸣蝉', pinyin: 'míng chán', meaning: '正在叫的蝉' },
        { word: '闭口立', pinyin: 'bì kǒu lì', meaning: '闭上嘴巴站在那里' }
      ],
      moral: '这首诗告诉我们，生活中的美好景象往往就在我们身边。牧童的天真活泼和机灵可爱，让我们感受到童年的快乐。同时，做事情要像牧童一样，该动的时候动，该静的时候静。'
    },
    questions: [
      {
        id: 'q2055_1',
        question: '牧童骑的是什么动物？',
        options: [
          { label: 'A', text: '马' },
          { label: 'B', text: '驴' },
          { label: 'C', text: '黄牛' },
          { label: 'D', text: '羊' }
        ],
        answer: 'C',
        explanation: '"牧童骑黄牛"说明牧童骑的是黄牛。'
      },
      {
        id: 'q2055_2',
        question: '牧童为什么突然不唱歌了？',
        options: [
          { label: 'A', text: '嗓子疼了' },
          { label: 'B', text: '有人让他别唱' },
          { label: 'C', text: '想捉树上的蝉' },
          { label: 'D', text: '牛跑了' }
        ],
        answer: 'C',
        explanation: '"意欲捕鸣蝉，忽然闭口立"说明牧童想捉正在叫的蝉，所以立刻闭上嘴巴不唱了。'
      },
      {
        id: 'q2055_3',
        question: '"歌声振林樾"中的"振"是什么意思？',
        options: [
          { label: 'A', text: '振动、回荡' },
          { label: 'B', text: '震动' },
          { label: 'C', text: '摇动' },
          { label: 'D', text: '安静' }
        ],
        answer: 'A',
        explanation: '"振"是振动、回荡的意思。歌声在树林间回荡，说明歌声很响亮。'
      },
      {
        id: 'q2055_4',
        question: '这首诗描写了牧童的哪两个瞬间？',
        options: [
          { label: 'A', text: '唱歌和睡觉' },
          { label: 'B', text: '大声唱歌和突然安静下来' },
          { label: 'C', text: '跑步和走路' },
          { label: 'D', text: '吃东西和喝水' }
        ],
        answer: 'B',
        explanation: '第一个瞬间是骑牛唱歌，第二个瞬间是想捉蝉而突然安静下来。一动一静，对比鲜明。'
      },
      {
        id: 'q2055_5',
        question: '这首诗的作者是哪个朝代的？',
        options: [
          { label: 'A', text: '唐代' },
          { label: 'B', text: '宋代' },
          { label: 'C', text: '明代' },
          { label: 'D', text: '清代' }
        ],
        answer: 'D',
        explanation: '袁枚是清代诗人。'
      }
    ]
  }
];

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONTENT_GRADE_2_EXTRA2;
}
