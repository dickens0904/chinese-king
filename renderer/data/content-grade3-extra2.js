// 语文小霸王 - 三年级课文内容数据（扩展篇2）
// 每日一篇课文，每篇约10分钟阅读时间
// 难字标注拼音，课文后有讲解和阅读理解练习
// 第31-55课：经典古诗词

const CONTENT_GRADE_3_EXTRA2 = [
  // ==================== 第31课 ====================
  {
    id: 3031,
    title: '《夜书所见》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 31,
    readingTime: 10,
    author: '叶绍翁',
    source: '南宋·叶绍翁《靖逸小集》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=autumn%20night%20scene%2C%20falling%20wutong%20leaves%20in%20wind%2C%20child%20catching%20crickets%20by%20bamboo%20fence%2C%20traditional%20Chinese%20painting&image_size=landscape_4_3',
    text: `<p>{萧|xiāo}{萧|xiāo}梧叶送{寒|hán}声，江上秋风动客{情|qíng}。知有儿童挑{促|cù}{织|zhī}，夜深{篱|lí}落一灯明。</p>
<p>这首诗写的是诗人在一个秋天的夜晚，客居异乡时的所见所感。秋风吹过，梧桐树叶发出萧萧的响声，带来阵阵寒意。江面上吹来的秋风，牵动了旅居在外的诗人的思乡之情。</p>
<p>诗人在夜深人静时看到篱笆下面有一盏灯火亮着，他知道那一定是孩子们在兴致勃勃地捉蟋蟀。这个温馨的画面让诗人想到了自己快乐的童年时光，也更加{勾|gōu}起了他对家乡亲人的思念。</p>
<p>这首诗通过描写秋风落叶、儿童捉虫、篱落灯火等景物，将诗人漂泊在外的{寂|jì}{寞|mò}孤独与儿童无忧无虑的欢乐形成对比，表达了诗人在秋天夜晚深深的思乡之情。动静结合的写法，让全诗既有秋天的萧瑟，也有生活的温暖。</p>`,
    explanation: {
      summary: '南宋诗人叶绍翁客居异乡，在秋风落叶之夜触景生情，写下这首思乡诗。诗中描写了梧桐落叶、秋风送寒、儿童捉蟋蟀、篱落灯火等景物，表达了诗人对家乡深深的思念。',
      keyPoints: [
        '前两句写景抒情：秋风梧叶触发诗人的思乡之情',
        '后两句写所见所感：儿童捉蟋蟀的欢乐反衬诗人的孤独',
        '萧萧：象声词，形容风吹树叶的声音',
        '挑促织：用细枝挑逗蟋蟀，即捉蟋蟀',
        '全诗以动衬静，以乐衬悲，手法巧妙'
      ],
      vocabulary: [
        { word: '萧萧', pinyin: 'xiāo xiāo', meaning: '象声词，形容风吹梧桐叶发出的声音' },
        { word: '客情', pinyin: 'kè qíng', meaning: '旅居在外的人的思乡之情' },
        { word: '促织', pinyin: 'cù zhī', meaning: '蟋蟀的别称' },
        { word: '篱落', pinyin: 'lí luò', meaning: '篱笆' },
        { word: '挑', pinyin: 'tiǎo', meaning: '用细长的东西拨弄' }
      ],
      moral: '这首诗告诉我们，身处异乡的人在萧瑟的秋夜更容易思念家乡。诗中儿童捉蟋蟀的欢乐场景与诗人的孤独形成对比，让我们更加理解思乡之情的深沉与真挚。'
    },
    questions: [
      {
        id: 'q3031_1',
        question: '"萧萧梧叶送寒声"中的"萧萧"是什么意思？',
        options: [
          { label: 'A', text: '非常寒冷' },
          { label: 'B', text: '风吹梧桐叶发出的声音' },
          { label: 'C', text: '非常安静' },
          { label: 'D', text: '非常悲伤' }
        ],
        answer: 'B',
        explanation: '"萧萧"是象声词，形容风吹梧桐树叶发出的沙沙声响，渲染了秋天萧瑟的氛围。'
      },
      {
        id: 'q3031_2',
        question: '诗人在夜深时看到了什么？',
        options: [
          { label: 'A', text: '一轮明月' },
          { label: 'B', text: '篱笆下一盏灯火' },
          { label: 'C', text: '满天星星' },
          { label: 'D', text: '大雪纷飞' }
        ],
        answer: 'B',
        explanation: '诗的最后两句写道："知有儿童挑促织，夜深篱落一灯明。"诗人看到篱笆下有一盏灯火，知道是孩子们在捉蟋蟀。'
      },
      {
        id: 'q3031_3',
        question: '"挑促织"是什么意思？',
        options: [
          { label: 'A', text: '挑担子' },
          { label: 'B', text: '织布' },
          { label: 'C', text: '捉蟋蟀' },
          { label: 'D', text: '种花草' }
        ],
        answer: 'C',
        explanation: '促织是蟋蟀的别称，"挑促织"就是用细枝挑逗、捉蟋蟀，是古代儿童秋天常玩的游戏。'
      },
      {
        id: 'q3031_4',
        question: '这首诗表达了诗人怎样的感情？',
        options: [
          { label: 'A', text: '对秋天美景的赞美' },
          { label: 'B', text: '对捉蟋蟀的喜爱' },
          { label: 'C', text: '对家乡和亲人的思念' },
          { label: 'D', text: '对梧桐树的喜爱' }
        ],
        answer: 'C',
        explanation: '诗中"江上秋风动客情"直接点明了思乡之情，儿童捉蟋蟀的欢乐场面更反衬出诗人在异乡的孤独和对家乡的思念。'
      },
      {
        id: 'q3031_5',
        question: '诗中用什么手法来突出诗人的思乡之情？',
        options: [
          { label: 'A', text: '夸张' },
          { label: 'B', text: '以乐景衬哀情' },
          { label: 'C', text: '反复' },
          { label: 'D', text: '拟人' }
        ],
        answer: 'B',
        explanation: '诗人看到儿童捉蟋蟀的欢乐场景，与自己客居异乡的孤独形成对比，用快乐的场景反衬出内心的寂寞和思乡之情，这种手法叫"以乐景衬哀情"。'
      }
    ]
  },

  // ==================== 第32课 ====================
  {
    id: 3032,
    title: '《九月九日忆山东兄弟》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 32,
    readingTime: 10,
    author: '王维',
    source: '唐·王维《王右丞集》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=double%20ninth%20festival%2C%20person%20alone%20in%20foreign%20city%20looking%20at%20distant%20mountains%2C%20traditional%20Chinese%20poetry%20illustration&image_size=landscape_4_3',
    text: `<p>独在{异|yì}乡为异客，每{逢|féng}佳节倍思{亲|qīn}。遥知兄弟{登|dēng}高处，遍{插|chā}{茱|zhū}{萸|yú}少一人。</p>
<p>这首诗是王维十七岁时在长安所作。当时他独自一人远离家乡{蒲|pú}州（今山西永济），漂泊在外求取功名。重阳节是农历九月初九，是中国传统的登高节。按照民间习俗，这一天人们要佩戴茱萸囊，登高望远，祈求平安。</p>
<p>"独在异乡为异客"，两个"异"字连用，加上一个"独"字，把诗人身处他乡的孤独感写得淋漓尽致。"每逢佳节倍思亲"是千古名句，意思是每到节日就更加思念亲人，"倍"字写出了节日思亲之情比平时更加强烈。</p>
<p>后两句诗人的笔锋一转，从自己的孤独写到了远方的兄弟们。他想象兄弟们在重阳节这天一起登高，佩戴茱萸的时候一定会发现少了一个人——那就是远在异乡的自己。诗人不写自己思念兄弟，而写兄弟们想念自己，这种反写的手法更加深切地表达了思乡之情。</p>`,
    explanation: {
      summary: '唐代诗人王维十七岁时独自一人客居长安，在重阳节这天写下这首思乡诗。诗中表达了诗人在节日里对家乡亲人倍加思念的真挚情感，成为千古传诵的思乡名篇。',
      keyPoints: [
        '"独"和两个"异"字强调诗人身在异乡的孤独感',
        '"每逢佳节倍思亲"是千古名句，表达节日思亲之情',
        '后两句从对面写来，用兄弟思念自己来表达自己思念兄弟',
        '茱萸是一种有香气的植物，重阳节佩戴可驱邪避灾',
        '全诗语言朴素自然，感情真挚深沉'
      ],
      vocabulary: [
        { word: '异客', pinyin: 'yì kè', meaning: '在他乡做客的人' },
        { word: '逢', pinyin: 'féng', meaning: '遇到，碰上' },
        { word: '倍', pinyin: 'bèi', meaning: '更加，加倍' },
        { word: '遥知', pinyin: 'yáo zhī', meaning: '远远地想到' },
        { word: '茱萸', pinyin: 'zhū yú', meaning: '一种有浓烈香气的植物，重阳节佩戴可驱邪避灾' }
      ],
      moral: '这首诗告诉我们，亲情是最珍贵的情感。无论身在何处，节日时对家人的思念总是格外强烈。我们要珍惜与家人在一起的时光，感恩亲情的温暖。'
    },
    questions: [
      {
        id: 'q3032_1',
        question: '这首诗是在什么节日写的？',
        options: [
          { label: 'A', text: '春节' },
          { label: 'B', text: '中秋节' },
          { label: 'C', text: '重阳节' },
          { label: 'D', text: '端午节' }
        ],
        answer: 'C',
        explanation: '农历九月初九是重阳节，诗的题目"九月九日"就是重阳节，诗中写到的登高、插茱萸都是重阳节的习俗。'
      },
      {
        id: 'q3032_2',
        question: '"每逢佳节倍思亲"中"倍"是什么意思？',
        options: [
          { label: 'A', text: '两倍' },
          { label: 'B', text: '一半' },
          { label: 'C', text: '更加，加倍' },
          { label: 'D', text: '减少' }
        ],
        answer: 'C',
        explanation: '"倍"在这里是"更加、加倍"的意思，说明节日时思念亲人的情感比平时更加强烈。'
      },
      {
        id: 'q3032_3',
        question: '诗的后两句写的是什么？',
        options: [
          { label: 'A', text: '诗人自己在登高' },
          { label: 'B', text: '兄弟们登高时少了诗人自己' },
          { label: 'C', text: '诗人在赏菊花' },
          { label: 'D', text: '诗人在写信' }
        ],
        answer: 'B',
        explanation: '诗人想象远在家乡的兄弟们在重阳节登高插茱萸时，一定会发现少了一个人，那个人就是诗人自己。这种从对面写来的手法更加感人。'
      },
      {
        id: 'q3032_4',
        question: '诗中用了什么手法来表达思乡之情？',
        options: [
          { label: 'A', text: '直接说自己很思念家人' },
          { label: 'B', text: '通过想象兄弟思念自己来表达' },
          { label: 'C', text: '通过描写秋天景色' },
          { label: 'D', text: '通过对比古今' }
        ],
        answer: 'B',
        explanation: '诗人不直接写自己思念兄弟，而是想象兄弟们登高时发现少了自己，用这种反写的手法使思乡之情更加深挚动人。'
      },
      {
        id: 'q3032_5',
        question: '这首诗写作时诗人多大？',
        options: [
          { label: 'A', text: '七岁' },
          { label: 'B', text: '十二岁' },
          { label: 'C', text: '十七岁' },
          { label: 'D', text: '二十七岁' }
        ],
        answer: 'C',
        explanation: '这首诗是王维十七岁时的作品，一个少年在异乡过节时的思乡之作，却写出了千古名句，足见王维的文学才华。'
      }
    ]
  },

  // ==================== 第33课 ====================
  {
    id: 3033,
    title: '《望天门山》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 33,
    readingTime: 10,
    author: '李白',
    source: '唐·李白《李太白集》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tianmen%20mountain%20split%20by%20yangtze%20river%2C%20steep%20cliffs%20on%20both%20sides%2C%20lone%20sail%20boat%20on%20blue%20river%2C%20traditional%20Chinese%20landscape%20painting&image_size=landscape_4_3',
    text: `<p>天门中{断|duàn}楚江开，碧水东流至此{回|huí}。两岸青山相{对|duì}出，孤帆一片日边来。</p>
<p>天门山位于今安徽省当涂县与和县之间，东为{博|bó}望山，西为梁山，两山隔江对{峙|zhì}，形如天门。楚江即长江，因为安徽一带古代属于楚国，所以流经此地的长江被称为楚江。</p>
<p>前两句写天门山的雄伟气势：浩荡的长江从天门山中间奔涌而过，仿佛是江水将山从中间劈开一样。碧绿的江水东流到此，被山势阻挡形成了旋涡和回流。"断"和"开"两个字，将山的雄伟和水的气势都写了出来。</p>
<p>后两句写诗人远望的壮美画面：两岸的青山相对耸立，好像在迎接远方的来客。一叶孤帆从水天相接的日边飘来，画面壮阔而悠远。"出"字赋予了青山以生命，仿佛它们主动从两岸探出头来。整首诗气势磅礴，展现了大自然的壮丽和诗人豪迈的胸怀。</p>`,
    explanation: {
      summary: '李白在赴江东途中经过天门山，被眼前雄伟壮丽的山川景象所震撼，挥笔写下了这首气势磅礴的写景诗。诗中描绘了天门山夹江对峙、长江奔流的壮美景象。',
      keyPoints: [
        '"断"和"开"写出江水冲破山峡的磅礴气势',
        '"回"字写出碧水被山势阻挡而回旋的壮观',
        '"出"字赋予青山生命，化静为动',
        '孤帆从日边来，意境壮阔悠远',
        '全诗展现了李白豪迈奔放的风格和大自然的壮美'
      ],
      vocabulary: [
        { word: '中断', pinyin: 'zhōng duàn', meaning: '从中间断开' },
        { word: '楚江', pinyin: 'chǔ jiāng', meaning: '长江流经古楚地的一段' },
        { word: '至此回', pinyin: 'zhì cǐ huí', meaning: '流到这里转弯回旋' },
        { word: '相对出', pinyin: 'xiāng duì chū', meaning: '相对着耸立出来' },
        { word: '孤帆', pinyin: 'gū fān', meaning: '单独一只船的帆，指代一只小船' }
      ],
      moral: '这首诗展现了大自然的壮美和诗人开阔豪迈的胸怀。李白用生动的描写让我们感受到山川的雄伟气势，也启发我们要有宽广的胸怀去欣赏和热爱自然。'
    },
    questions: [
      {
        id: 'q3033_1',
        question: '"天门中断楚江开"中的"楚江"指的是什么？',
        options: [
          { label: 'A', text: '黄河' },
          { label: 'B', text: '长江' },
          { label: 'C', text: '淮河' },
          { label: 'D', text: '珠江' }
        ],
        answer: 'B',
        explanation: '因为安徽一带古代属于楚国，所以流经此地的长江被称为"楚江"。'
      },
      {
        id: 'q3033_2',
        question: '"两岸青山相对出"中的"出"字妙在哪里？',
        options: [
          { label: 'A', text: '说明山很高' },
          { label: 'B', text: '说明山在动' },
          { label: 'C', text: '赋予青山生命，化静为动' },
          { label: 'D', text: '说明山很矮' }
        ],
        answer: 'C',
        explanation: '"出"字将静态的山写活了，仿佛两岸的青山主动从两岸探出头来迎接远方的客人，化静为动，赋予了青山以生命。'
      },
      {
        id: 'q3033_3',
        question: '这首诗体现了李白怎样的风格？',
        options: [
          { label: 'A', text: '婉约细腻' },
          { label: 'B', text: '豪迈奔放' },
          { label: 'C', text: '忧郁悲伤' },
          { label: 'D', text: '平淡朴素' }
        ],
        answer: 'B',
        explanation: '全诗气势磅礴，山断江开，孤帆日边来，意境壮阔，体现了李白豪迈奔放的诗歌风格。'
      },
      {
        id: 'q3033_4',
        question: '"碧水东流至此回"描写了什么景象？',
        options: [
          { label: 'A', text: '江水停止流动' },
          { label: 'B', text: '江水倒流向西' },
          { label: 'C', text: '江水被山势阻挡形成回旋' },
          { label: 'D', text: '江水变干了' }
        ],
        answer: 'C',
        explanation: '碧绿的长江水东流到天门山时，被两岸对峙的山势阻挡，形成了回旋的水流，写出了山水相撞的壮观景象。'
      },
      {
        id: 'q3033_5',
        question: '天门山在今天的哪个省？',
        options: [
          { label: 'A', text: '湖南省' },
          { label: 'B', text: '安徽省' },
          { label: 'C', text: '湖北省' },
          { label: 'D', text: '江西省' }
        ],
        answer: 'B',
        explanation: '天门山位于今安徽省当涂县与和县之间，东为博望山，西为梁山，两山隔江对峙，形如天门。'
      }
    ]
  },

  // ==================== 第34课 ====================
  {
    id: 3034,
    title: '《饮湖上初晴后雨》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 34,
    readingTime: 10,
    author: '苏轼',
    source: '宋·苏轼《苏东坡集》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=west%20lake%20hangzhou%2C%20misty%20rain%20mountains%2C%20shimmering%20water%20in%20sunlight%2C%20traditional%20Chinese%20ink%20painting&image_size=landscape_4_3',
    text: `<p>水光{潋|liàn}{滟|yàn}晴方好，山色{空|kōng}{蒙|méng}雨亦奇。欲把西湖比西{子|zǐ}，淡妆浓{抹|mǒ}总相宜。</p>
<p>苏轼在杭州做官时，非常喜爱西湖的美景。这首诗写的是诗人在西湖上饮酒时，天气由晴转雨的美丽景象。"饮湖上"就是在西湖上饮酒。</p>
<p>前两句分别描写了西湖在晴天和雨天的不同美景：晴天时，西湖水面波光粼粼，在阳光下闪烁着美丽的光芒；下雨时，远处的山笼罩在蒙蒙细雨中，呈现出朦胧迷离的美。一个"好"字，一个"奇"字，写出了诗人对两种美景的赞叹。</p>
<p>后两句是千古名句：如果要把西湖比作古代美人西施的话，那么无论是淡雅的素妆还是浓艳的打扮，都是那么恰到好处。西施是春秋时期越国的美女，被称为中国古代四大美女之一。诗人把西湖比作西施，认为西湖无论在什么样的天气下都很美丽，这个比喻新奇巧妙，令人叫绝。</p>`,
    explanation: {
      summary: '苏轼在杭州任官期间，在西湖上饮酒赏景，见天气由晴转雨，西湖依然美丽动人，写下了这首千古传诵的名诗。诗中将西湖比作美女西施，赞美了西湖无论晴雨都同样美丽的迷人景色。',
      keyPoints: [
        '前两句分别写西湖晴天和雨天的美景',
        '"潋滟"形容水波荡漾的样子，"空蒙"形容细雨中的朦胧感',
        '后两句将西湖比作西施，淡妆浓抹都美',
        '西施是古代四大美女之一，比喻极为巧妙',
        '这首诗被誉为描写西湖最好的诗'
      ],
      vocabulary: [
        { word: '潋滟', pinyin: 'liàn yàn', meaning: '水波荡漾、波光闪动的样子' },
        { word: '空蒙', pinyin: 'kōng méng', meaning: '形容细雨中景色朦胧迷离' },
        { word: '西子', pinyin: 'xī zǐ', meaning: '西施，春秋时越国美女' },
        { word: '淡妆浓抹', pinyin: 'dàn zhuāng nóng mǒ', meaning: '淡雅的妆和浓艳的妆，指不同的打扮' },
        { word: '相宜', pinyin: 'xiāng yí', meaning: '合适，恰当' }
      ],
      moral: '这首诗告诉我们，真正的美是多样的，无论在什么情况下都能展现不同的魅力。就像西湖无论晴雨都有独特的美，我们也要学会欣赏事物在不同状态下的美好。'
    },
    questions: [
      {
        id: 'q3034_1',
        question: '"潋滟"形容的是什么样子？',
        options: [
          { label: 'A', text: '水面平静如镜' },
          { label: 'B', text: '水波荡漾、波光闪动' },
          { label: 'C', text: '水面结冰' },
          { label: 'D', text: '水色浑浊' }
        ],
        answer: 'B',
        explanation: '"潋滟"形容水波荡漾、在阳光下波光闪动的样子，写出了晴天西湖水面的美丽景象。'
      },
      {
        id: 'q3034_2',
        question: '诗人把西湖比作谁？',
        options: [
          { label: 'A', text: '王昭君' },
          { label: 'B', text: '杨贵妃' },
          { label: 'C', text: '西施' },
          { label: 'D', text: '貂蝉' }
        ],
        answer: 'C',
        explanation: '诗中写道"欲把西湖比西子"，西子就是西施，是春秋时期越国的美女，中国古代四大美女之一。'
      },
      {
        id: 'q3034_3',
        question: '"淡妆浓抹总相宜"说明了什么？',
        options: [
          { label: 'A', text: '西施很会化妆' },
          { label: 'B', text: '西湖只在晴天好看' },
          { label: 'C', text: '西湖无论晴雨都很美丽' },
          { label: 'D', text: '西湖只在雨天好看' }
        ],
        answer: 'C',
        explanation: '诗人用西施无论淡妆浓抹都很美丽来比喻西湖，说明西湖在晴天和雨天都有各自独特的美。'
      },
      {
        id: 'q3034_4',
        question: '这首诗写的是哪个地方的美景？',
        options: [
          { label: 'A', text: '太湖' },
          { label: 'B', text: '西湖' },
          { label: 'C', text: '洞庭湖' },
          { label: 'D', text: '鄱阳湖' }
        ],
        answer: 'B',
        explanation: '题目"饮湖上"就是在西湖上饮酒，这首诗描写的是杭州西湖在晴天和雨天的不同美景。'
      },
      {
        id: 'q3034_5',
        question: '这首诗的比喻妙在哪里？',
        options: [
          { label: 'A', text: '把西湖比作一座山' },
          { label: 'B', text: '把西湖比作美女，无论什么天气都很美' },
          { label: 'C', text: '把西湖比作一面镜子' },
          { label: 'D', text: '把西湖比作一条河' }
        ],
        answer: 'B',
        explanation: '诗人把西湖比作美女西施，说无论淡妆（晴天）还是浓抹（雨天）都很美丽，这个比喻新颖巧妙，生动地写出了西湖的魅力。'
      }
    ]
  },

  // ==================== 第35课 ====================
  {
    id: 3035,
    title: '《小儿垂钓》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 35,
    readingTime: 10,
    author: '胡令能',
    source: '唐·胡令能诗作',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=child%20fishing%20by%20stream%2C%20messy%20hair%20boy%20sitting%20on%20rock%20with%20fishing%20rod%2C%20peach%20blossom%20pond%2C%20traditional%20Chinese%20painting&image_size=landscape_4_3',
    text: `<p>{蓬|péng}头{稚|zhì}子学{垂|chuí}{纶|lún}，侧坐{莓|méi}{苔|tái}草映身。路人借问遥招手，怕得鱼惊不应人。</p>
<p>这首诗描写的是一个头发蓬乱的小孩子在河边学钓鱼的生动情景。"蓬头"写出了孩子头发散乱、天真可爱的模样，"稚子"就是幼小的孩子。"学垂纶"说明他正在学习钓鱼的技巧，"垂纶"就是垂下钓丝，即钓鱼。</p>
<p>第二句"侧坐莓苔草映身"，写出了小孩钓鱼时的姿势和环境。他侧着身子坐在长满青苔的石头上，身旁的野草遮映着他的小小身影。这个细节说明孩子很聪明，知道要用草丛遮住自己，不让鱼儿看见。</p>
<p>后两句是全诗最精彩的描写：有过路的行人远远地向他问路，他连忙摆手示意，不敢回答。为什么呢？因为他怕自己说话的声音会惊跑水中的鱼儿。"遥招手"三个字生动传神，既有动作，又体现了孩子专注认真的态度和机灵可爱的性格。</p>`,
    explanation: {
      summary: '唐代诗人胡令能用白描手法，生动地刻画了一个头发蓬乱、侧坐在河边认真学钓鱼的乡村孩子的形象。当路人问路时，孩子远远招手不敢回答，怕惊跑鱼儿，充满了童真童趣。',
      keyPoints: [
        '"蓬头"写出孩子头发散乱的天真模样',
        '"侧坐莓苔草映身"写孩子钓鱼时的聪明机智',
        '"遥招手"是全诗最精彩的细节描写',
        '孩子怕鱼惊而不回答路人，表现了他的专注和可爱',
        '全诗用白描手法，语言朴素自然，充满生活气息'
      ],
      vocabulary: [
        { word: '蓬头', pinyin: 'péng tóu', meaning: '头发蓬松散乱' },
        { word: '稚子', pinyin: 'zhì zǐ', meaning: '幼小的孩子' },
        { word: '垂纶', pinyin: 'chuí lún', meaning: '垂下钓丝，即钓鱼' },
        { word: '莓苔', pinyin: 'méi tái', meaning: '苔藓，生长在阴湿地方的绿色植物' },
        { word: '借问', pinyin: 'jiè wèn', meaning: '请问，向人打听' }
      ],
      moral: '这首诗通过描写一个认真学钓鱼的孩子，展现了童年的天真和专注。孩子怕鱼惊而不回答路人，既可爱又认真，让我们感受到乡村生活的情趣和纯真童年的美好。'
    },
    questions: [
      {
        id: 'q3035_1',
        question: '"蓬头稚子"中的"稚子"是什么意思？',
        options: [
          { label: 'A', text: '老年人' },
          { label: 'B', text: '幼小的孩子' },
          { label: 'C', text: '年轻人' },
          { label: 'D', text: '渔夫' }
        ],
        answer: 'B',
        explanation: '"稚子"就是幼小的孩子，"蓬头稚子"指的是一个头发蓬乱的小孩子。'
      },
      {
        id: 'q3035_2',
        question: '孩子为什么"遥招手"而不回答路人？',
        options: [
          { label: 'A', text: '他不会说话' },
          { label: 'B', text: '他不想理人' },
          { label: 'C', text: '他怕说话声音惊跑鱼儿' },
          { label: 'D', text: '他不认识路' }
        ],
        answer: 'C',
        explanation: '诗中写道"怕得鱼惊不应人"，孩子怕自己回答路人时发出的声音会惊跑水中的鱼儿，所以只远远地招手示意。'
      },
      {
        id: 'q3035_3',
        question: '孩子为什么要坐在草丛中？',
        options: [
          { label: 'A', text: '因为那里凉快' },
          { label: 'B', text: '用草丛遮住自己不让鱼发现' },
          { label: 'C', text: '因为没有凳子' },
          { label: 'D', text: '因为草丛里有鱼' }
        ],
        answer: 'B',
        explanation: '"侧坐莓苔草映身"说明孩子很聪明，侧坐在草丛中，用草遮住自己的身体，避免被鱼发现。'
      },
      {
        id: 'q3035_4',
        question: '这首诗用了什么写作手法？',
        options: [
          { label: 'A', text: '夸张' },
          { label: 'B', text: '比喻' },
          { label: 'C', text: '白描（直接描写）' },
          { label: 'D', text: '排比' }
        ],
        answer: 'C',
        explanation: '这首诗用白描手法，直接描写孩子钓鱼时的外貌、姿势、动作和神态，语言朴素自然，不加修饰，却生动传神。'
      },
      {
        id: 'q3035_5',
        question: '从这首诗中可以看出孩子是一个怎样的人？',
        options: [
          { label: 'A', text: '懒惰贪玩' },
          { label: 'B', text: '聪明专注、天真可爱' },
          { label: 'C', text: '胆小怕事' },
          { label: 'D', text: '粗心大意' }
        ],
        answer: 'B',
        explanation: '孩子用草遮身说明聪明，怕鱼惊不回答说明专注认真，遥招手的动作又显得天真可爱。整首诗刻画了一个聪明专注、天真可爱的乡村孩子形象。'
      }
    ]
  },

  // ==================== 第36课 ====================
  {
    id: 3036,
    title: '《夜宿山寺》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 36,
    readingTime: 10,
    author: '李白',
    source: '唐·李白《李太白集》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20temple%20on%20mountain%20peak%20at%20night%2C%20high%20towering%20building%20reaching%20stars%2C%20moonlight%20traditional%20painting&image_size=landscape_4_3',
    text: `<p>{危|wēi}楼高百尺，手可摘{星|xīng}辰。不敢高声语，恐惊天上人。</p>
<p>这首诗写的是李白夜宿一座高山寺庙时的所见所感。"危楼"不是指危险的楼，而是形容楼很高。诗人用"高百尺"来夸张地描写这座寺庙的高耸入云。</p>
<p>"手可摘星辰"更进一步夸张，说站在这高楼上，一伸手就可以摘到天上的星星。这一句把楼的高写到了极致，让人仿佛身临其境地感受到那种直入云霄的高度。</p>
<p>后两句写诗人在高楼上的感受：他不敢大声说话，因为害怕会惊动天上的仙人。"恐惊天上人"这个想象太奇妙了——楼高得几乎到了天上，连天上的人都能被惊扰。整首诗只有二十个字，却用大胆的夸张和奇特的想象，把一座高山寺庙的高耸入云写得栩栩如生，体现了李白浪漫主义的创作风格。</p>`,
    explanation: {
      summary: '李白夜宿高山寺庙，被寺庙的高耸所震撼，用夸张的手法写下了这首想象奇特的小诗。诗人说在这高楼上可以摘到星星，不敢大声说话怕惊动天上的人，极富浪漫色彩。',
      keyPoints: [
        '"危楼"指高楼，不是危险的楼',
        '全诗运用夸张手法，极写楼之高',
        '"手可摘星辰"是夸张的极致',
        '"恐惊天上人"想象奇特，浪漫主义色彩浓厚',
        '短短二十字，将高耸入云的景象写得淋漓尽致'
      ],
      vocabulary: [
        { word: '危楼', pinyin: 'wēi lóu', meaning: '高楼，形容楼很高' },
        { word: '星辰', pinyin: 'xīng chén', meaning: '星星的总称' },
        { word: '语', pinyin: 'yǔ', meaning: '说话' },
        { word: '恐', pinyin: 'kǒng', meaning: '恐怕，担心' },
        { word: '惊', pinyin: 'jīng', meaning: '惊动，打扰' }
      ],
      moral: '这首诗用夸张和想象的手法，让我们感受到大自然中山川建筑的雄伟壮观。李白大胆的想象力启发我们，文学创作需要丰富的想象力，敢于突破常规才能写出精彩的作品。'
    },
    questions: [
      {
        id: 'q3036_1',
        question: '"危楼高百尺"中的"危楼"是什么意思？',
        options: [
          { label: 'A', text: '快要倒塌的楼' },
          { label: 'B', text: '高楼，很高的楼' },
          { label: 'C', text: '危险的楼' },
          { label: 'D', text: '新建的楼' }
        ],
        answer: 'B',
        explanation: '"危"在这里是"高"的意思，"危楼"就是高楼。不是说楼有危险，而是形容楼非常高。'
      },
      {
        id: 'q3036_2',
        question: '"手可摘星辰"用了什么修辞手法？',
        options: [
          { label: 'A', text: '比喻' },
          { label: 'B', text: '拟人' },
          { label: 'C', text: '夸张' },
          { label: 'D', text: '排比' }
        ],
        answer: 'C',
        explanation: '说一伸手就能摘到天上的星星，这是明显的夸张手法，用来极写楼之高，高到了天上。'
      },
      {
        id: 'q3036_3',
        question: '诗人在高楼上不敢做什么？',
        options: [
          { label: 'A', text: '不敢往下看' },
          { label: 'B', text: '不敢大声说话' },
          { label: 'C', text: '不敢走动' },
          { label: 'D', text: '不敢睡觉' }
        ],
        answer: 'B',
        explanation: '诗中写道"不敢高声语，恐惊天上人"，诗人不敢大声说话，因为担心会惊动天上的仙人。'
      },
      {
        id: 'q3036_4',
        question: '这首诗体现了李白什么样的创作风格？',
        options: [
          { label: 'A', text: '现实主义' },
          { label: 'B', text: '浪漫主义' },
          { label: 'C', text: '悲观主义' },
          { label: 'D', text: '自然主义' }
        ],
        answer: 'B',
        explanation: '诗人用大胆的夸张和奇特的想象，说楼高得可以摘星星、可以惊动天上人，充满了浪漫主义的色彩。'
      },
      {
        id: 'q3036_5',
        question: '"恐惊天上人"中的"恐"是什么意思？',
        options: [
          { label: 'A', text: '恐怖' },
          { label: 'B', text: '恐怕，担心' },
          { label: 'C', text: '恐惧' },
          { label: 'D', text: '恐慌' }
        ],
        answer: 'B',
        explanation: '"恐"在这里是"恐怕、担心"的意思，诗人担心大声说话会惊动天上的人，表现了楼的极高。'
      }
    ]
  },

  // ==================== 第37课 ====================
  {
    id: 3037,
    title: '《望庐山瀑布》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 37,
    readingTime: 10,
    author: '李白',
    source: '唐·李白《李太白集》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lushan%20waterfall%2C%20purple%20mist%20from%20incense%20burner%20peak%2C%20waterfall%20plunging%20three%20thousand%20feet%2C%20traditional%20Chinese%20landscape%20painting&image_size=landscape_4_3',
    text: `<p>日照香{炉|lú}生{紫|zǐ}烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。</p>
<p>庐山位于江西省，是中国著名的风景名胜区。香炉峰是庐山的一座山峰，因为峰顶常常云雾缭绕，远远望去好像香炉里升起的紫烟，所以得名香炉峰。</p>
<p>前两句写景：阳光照射在香炉峰上，峰顶升腾起紫色的烟雾。远远望去，一道瀑布从高山上直挂下来，好像一条白色的绸缎悬挂在山前。"挂"字用得非常巧妙，化动为静，将飞泻而下的瀑布写成了一幅静止的画。</p>
<p>后两句是千古名句：瀑布从极高的地方飞流直下，好像有三千尺那么长，让人怀疑是不是天上的银河从九重天上倾泻下来了。"飞"写出了瀑布的速度和力量，"直下"写出了瀑布的陡峭和笔直。"疑是"二字把现实和想象巧妙地连接在一起——明明知道是瀑布，却忍不住怀疑是银河落下来了，这种亦真亦幻的感觉正是李白诗歌的魅力所在。</p>`,
    explanation: {
      summary: '李白游览庐山时，被香炉峰瀑布的壮丽景象深深震撼，挥笔写下了这首气势磅礴的写景诗。诗中用大胆的想象将庐山瀑布比作银河从九天落下，展现了李白豪迈奔放的浪漫主义风格。',
      keyPoints: [
        '香炉峰因山顶常有紫烟缭绕而得名',
        '"挂"字化动为静，将瀑布写成一幅静画',
        '"飞流直下三千尺"用夸张极写瀑布之高',
        '"疑是银河落九天"是千古名句，想象奇特',
        '全诗由实景到想象，层层推进，气势磅礴'
      ],
      vocabulary: [
        { word: '香炉', pinyin: 'xiāng lú', meaning: '指庐山香炉峰' },
        { word: '紫烟', pinyin: 'zǐ yān', meaning: '紫色的烟雾，形容阳光下的水雾' },
        { word: '飞流', pinyin: 'fēi liú', meaning: '飞快奔流的水' },
        { word: '银河', pinyin: 'yín hé', meaning: '天河，夜空中由无数星星组成的光带' },
        { word: '九天', pinyin: 'jiǔ tiān', meaning: '天空的最高处，古人认为天有九重' }
      ],
      moral: '这首诗告诉我们，大自然的壮美景色能激发人们无限的想象力。李白面对庐山瀑布，由实入虚，将现实与想象完美结合，创造出千古传诵的名句，展现了伟大诗人非凡的想象力和对自然的热爱。'
    },
    questions: [
      {
        id: 'q3037_1',
        question: '香炉峰的名字是怎么来的？',
        options: [
          { label: 'A', text: '峰上有很多寺庙' },
          { label: 'B', text: '峰顶常有紫烟缭绕，像香炉升起的烟' },
          { label: 'C', text: '峰形像一个香炉' },
          { label: 'D', text: '山上种了很多香料植物' }
        ],
        answer: 'B',
        explanation: '香炉峰因峰顶常常云雾缭绕，在阳光照射下呈现紫色，远远望去好像香炉里升起的紫烟，因此得名。'
      },
      {
        id: 'q3037_2',
        question: '"遥看瀑布挂前川"中的"挂"字好在哪里？',
        options: [
          { label: 'A', text: '说明瀑布很长' },
          { label: 'B', text: '化动为静，把飞泻的瀑布写成静止的画面' },
          { label: 'C', text: '说明瀑布是白色的' },
          { label: 'D', text: '说明瀑布很窄' }
        ],
        answer: 'B',
        explanation: '"挂"字将飞速奔流的瀑布比作一条悬挂的白绸缎，化动为静，写出了瀑布远远望去的优美姿态。'
      },
      {
        id: 'q3037_3',
        question: '"疑是银河落九天"中的"疑"字说明了什么？',
        options: [
          { label: 'A', text: '诗人不相信' },
          { label: 'B', text: '诗人不确定' },
          { label: 'C', text: '明知是瀑布却忍不住怀疑是银河，亦真亦幻' },
          { label: 'D', text: '诗人看错了' }
        ],
        answer: 'C',
        explanation: '"疑"字连接了现实和想象，诗人明知眼前是瀑布，却因为它太壮观了，忍不住怀疑是天上的银河落了下来，亦真亦幻，极富浪漫色彩。'
      },
      {
        id: 'q3037_4',
        question: '庐山在今天的哪个省？',
        options: [
          { label: 'A', text: '安徽省' },
          { label: 'B', text: '江西省' },
          { label: 'C', text: '湖南省' },
          { label: 'D', text: '湖北省' }
        ],
        answer: 'B',
        explanation: '庐山位于江西省九江市，是中国著名的风景名胜区和避暑胜地。'
      },
      {
        id: 'q3037_5',
        question: '这首诗最主要运用了什么手法？',
        options: [
          { label: 'A', text: '对比和对偶' },
          { label: 'B', text: '夸张和想象' },
          { label: 'C', text: '反问和设问' },
          { label: 'D', text: '借代和双关' }
        ],
        answer: 'B',
        explanation: '诗中"三千尺"是夸张，"银河落九天"是想象，李白用夸张和大胆的想象，将庐山瀑布的壮丽景象写到了极致。'
      }
    ]
  },

  // ==================== 第38课 ====================
  {
    id: 3038,
    title: '《赠刘景文》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 38,
    readingTime: 10,
    author: '苏轼',
    source: '宋·苏轼《苏东坡集》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=late%20autumn%20scene%2C%20withered%20lotus%20leaves%2C%20chrysanthemum%20in%20frost%2C%20orange%20and%20tangerine%20trees%20bearing%20fruit%2C%20traditional%20Chinese%20painting&image_size=landscape_4_3',
    text: `<p>{荷|hé}尽已无{擎|qíng}雨盖，{菊|jú}残犹有{傲|ào}{霜|shuāng}枝。一年好景君须记，最是{橙|chéng}黄{橘|jú}绿时。</p>
<p>这首诗是苏轼写给好友刘景文的。刘景文当时已经五十多岁，仕途不顺，苏轼写这首诗既是赞美初冬景色，也是勉励好友不要消沉。"赠"就是送给的意思。</p>
<p>前两句写初冬的景色：荷花已经凋谢，连那像伞盖一样能遮雨的荷叶也枯萎了；菊花虽然残败了，但依然有在寒风中傲然挺立的枝条。"已无"和"犹有"形成了鲜明的对比，写出了虽然花叶凋零，但菊花的枝条依然不畏严寒。</p>
<p>后两句是对好友的勉励：你要记住，一年中最好的景致，正是这橙子金黄、橘子青绿的初冬时节。这里的"橙黄橘绿"不仅仅是写景，更是比喻人到中年虽然青春不再，但正是成熟和有所成就的时候。就像初冬虽然萧瑟，却有丰收的果实。</p>`,
    explanation: {
      summary: '苏轼写给好友刘景文的一首赠诗。诗中描写了初冬荷尽菊残、但橙黄橘绿的景象，勉励好友虽然青春已逝，但人到中年正是成熟收获的好时节，不必为年华老去而消沉。',
      keyPoints: [
        '前两句用"已无"和"犹有"对比，写荷尽菊残',
        '"傲霜枝"赞美菊花不畏严寒的品质',
        '"橙黄橘绿"比喻人到中年的成熟与收获',
        '全诗借景喻人，既是写景也是勉励',
        '一年好景不在春天，而在收获的初冬'
      ],
      vocabulary: [
        { word: '擎雨盖', pinyin: 'qíng yǔ gài', meaning: '指荷叶，像伞一样能遮挡雨水' },
        { word: '傲霜', pinyin: 'ào shuāng', meaning: '不畏严寒，在霜中傲然挺立' },
        { word: '橙黄橘绿', pinyin: 'chéng huáng jú lǜ', meaning: '橙子黄了橘子绿了，指秋冬之际' },
        { word: '君', pinyin: 'jūn', meaning: '你，对人的尊称' },
        { word: '好景', pinyin: 'hǎo jǐng', meaning: '美好的景色' }
      ],
      moral: '这首诗告诉我们，人生每个阶段都有自己的美好。虽然青春易逝，但人到中年正是成熟和收获的季节。我们不必为失去的东西消沉，而要珍惜当下，发现每个时期的美好和价值。'
    },
    questions: [
      {
        id: 'q3038_1',
        question: '"擎雨盖"指的是什么？',
        options: [
          { label: 'A', text: '雨伞' },
          { label: 'B', text: '荷叶' },
          { label: 'C', text: '斗笠' },
          { label: 'D', text: '大树' }
        ],
        answer: 'B',
        explanation: '"擎雨盖"指的是荷叶，因为荷叶又大又圆，像一把撑开的伞，可以遮挡雨水。'
      },
      {
        id: 'q3038_2',
        question: '"菊残犹有傲霜枝"赞美了菊花什么品质？',
        options: [
          { label: 'A', text: '颜色鲜艳' },
          { label: 'B', text: '花朵很大' },
          { label: 'C', text: '不畏严寒、傲然挺立' },
          { label: 'D', text: '香味浓郁' }
        ],
        answer: 'C',
        explanation: '"傲霜枝"说明菊花虽然已经残败，但它的枝条依然在寒霜中傲然挺立，赞美了它不畏严寒的坚强品质。'
      },
      {
        id: 'q3038_3',
        question: '"橙黄橘绿"表面上是写什么？实际上比喻什么？',
        options: [
          { label: 'A', text: '写水果；比喻朋友多' },
          { label: 'B', text: '写初冬景色；比喻人到中年的成熟收获' },
          { label: 'C', text: '写春天景色；比喻年轻有为' },
          { label: 'D', text: '写秋天景色；比喻秋天很美' }
        ],
        answer: 'B',
        explanation: '"橙黄橘绿"表面上描写初冬果实成熟的美丽景色，实际上是比喻人到中年虽然青春不再，但正是成熟和有所成就的时候。'
      },
      {
        id: 'q3038_4',
        question: '苏轼为什么写这首诗给刘景文？',
        options: [
          { label: 'A', text: '祝他生日快乐' },
          { label: 'B', text: '勉励他不要因年老和失意而消沉' },
          { label: 'C', text: '邀请他一起赏花' },
          { label: 'D', text: '送他水果' }
        ],
        answer: 'B',
        explanation: '刘景文当时已五十多岁且仕途不顺，苏轼借初冬景色勉励他：虽然青春已逝，但人到中年正是成熟收获的好时节，不要消沉。'
      },
      {
        id: 'q3038_5',
        question: '这首诗认为一年中最好的景色是什么时候？',
        options: [
          { label: 'A', text: '百花盛开的春天' },
          { label: 'B', text: '绿树成荫的夏天' },
          { label: 'C', text: '橙黄橘绿的初冬' },
          { label: 'D', text: '白雪皑皑的冬天' }
        ],
        answer: 'C',
        explanation: '诗中写道"一年好景君须记，最是橙黄橘绿时"，诗人认为一年中最美好的景致就是橙黄橘绿的初冬时节。'
      }
    ]
  },

  // ==================== 第39课 ====================
  {
    id: 3039,
    title: '《山行》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 39,
    readingTime: 10,
    author: '杜牧',
    source: '唐·杜牧《樊川集》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mountain%20road%20in%20autumn%2C%20winding%20stone%20path%20through%20red%20maple%20forest%2C%20white%20clouds%20and%20mountain%20cottage%2C%20traditional%20Chinese%20landscape%20painting&image_size=landscape_4_3',
    text: `<p>远上寒山石{径|jìng}{斜|xiá}，白云生处有人家。停车坐爱{枫|fēng}林晚，{霜|shuāng}叶红于二月花。</p>
<p>这首诗写的是诗人在深秋时节行走在山路上所看到的美丽景色。"山行"就是在山路上行走。秋天的山上已经有了凉意，所以说是"寒山"。一条石头铺成的小路弯弯曲曲地通向远处的山上。</p>
<p>"白云生处有人家"写出了山的高远。在那白云升起的地方，隐约可以看到有人家居住。这说明山上住着人家，给深山增添了几分生活气息和神秘感。</p>
<p>后两句是全诗的精华：诗人停下车来，是因为太喜爱这傍晚时分的枫林美景了。被秋霜打过的枫叶，比二月的春花还要红艳。"霜叶红于二月花"是千古名句，一反常人悲秋的传统，用热情洋溢的笔触赞美了秋天的枫叶，认为秋天的红叶比春天的鲜花还要美丽，表达了诗人对深秋景色的热爱和赞美。</p>`,
    explanation: {
      summary: '杜牧在深秋时节行走在山路上，被满山的红叶所吸引，停下车来驻足欣赏。诗人一反悲秋的传统，用"霜叶红于二月花"热情赞美了秋天枫叶的美丽，表达了对深秋景色的热爱。',
      keyPoints: [
        '"寒山"点明了深秋时节',
        '"白云生处有人家"写出了山的高远和生活气息',
        '"坐"是因为的意思，不是坐下',
        '"霜叶红于二月花"是千古名句',
        '一反悲秋传统，赞美秋天比春天更美'
      ],
      vocabulary: [
        { word: '石径', pinyin: 'shí jìng', meaning: '石头铺成的小路' },
        { word: '斜', pinyin: 'xiá', meaning: '弯曲不直（古音读xiá）' },
        { word: '坐', pinyin: 'zuò', meaning: '因为（古义）' },
        { word: '枫林', pinyin: 'fēng lín', meaning: '枫树林' },
        { word: '霜叶', pinyin: 'shuāng yè', meaning: '经霜打过的树叶，这里指枫叶' }
      ],
      moral: '这首诗告诉我们，事物在不同的阶段有不同的美。秋天虽然没有春天的百花盛开，但经霜的红叶比春花更加美丽。这启发我们不要只看到事物的衰败，而要善于发现不同阶段独特的美好。'
    },
    questions: [
      {
        id: 'q3039_1',
        question: '"停车坐爱枫林晚"中的"坐"是什么意思？',
        options: [
          { label: 'A', text: '坐下' },
          { label: 'B', text: '座位' },
          { label: 'C', text: '因为' },
          { label: 'D', text: '坐着' }
        ],
        answer: 'C',
        explanation: '古诗中"坐"常作"因为"讲。这句意思是"停下车来是因为喜爱傍晚时分的枫林美景"。'
      },
      {
        id: 'q3039_2',
        question: '"霜叶红于二月花"是什么意思？',
        options: [
          { label: 'A', text: '霜叶和二月花一样红' },
          { label: 'B', text: '霜叶比二月的春花还要红艳' },
          { label: 'C', text: '霜叶不如二月花好看' },
          { label: 'D', text: '霜叶在二月开花' }
        ],
        answer: 'B',
        explanation: '"红于"是"比……更红"的意思。经霜打过的枫叶比二月的春花还要红艳美丽。'
      },
      {
        id: 'q3039_3',
        question: '这首诗描写的是哪个季节的景色？',
        options: [
          { label: 'A', text: '春天' },
          { label: 'B', text: '夏天' },
          { label: 'C', text: '深秋' },
          { label: 'D', text: '隆冬' }
        ],
        answer: 'C',
        explanation: '"寒山""霜叶"都说明是深秋时节。深秋枫叶经霜变红，是观赏红叶的最佳时节。'
      },
      {
        id: 'q3039_4',
        question: '"白云生处有人家"说明了什么？',
        options: [
          { label: 'A', text: '山上没有人家' },
          { label: 'B', text: '山很高远，白云升起的地方有人居住' },
          { label: 'C', text: '人家住在云朵上面' },
          { label: 'D', text: '山下有很多人家' }
        ],
        answer: 'B',
        explanation: '在白云升起的高远之处，隐约可以看到有人家居住，说明山的高远和幽深，给深山增添了生活气息。'
      },
      {
        id: 'q3039_5',
        question: '这首诗与一般悲秋的诗有什么不同？',
        options: [
          { label: 'A', text: '这首诗也写得很悲伤' },
          { label: 'B', text: '一反悲秋传统，热情赞美秋天比春天更美' },
          { label: 'C', text: '这首诗没有写秋天' },
          { label: 'D', text: '这首诗写的是春天' }
        ],
        answer: 'B',
        explanation: '古人常有"悲秋"的传统，认为秋天萧瑟凄凉。但杜牧一反传统，认为秋天经霜的红叶比春天的鲜花还美，表达了对秋天的热爱和赞美。'
      }
    ]
  },

  // ==================== 第40课 ====================
  {
    id: 3040,
    title: '《回乡偶书》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 40,
    readingTime: 10,
    author: '贺知章',
    source: '唐·贺知章《贺秘监集》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=old%20man%20returning%20to%20hometown%2C%20village%20children%20looking%20at%20stranger%20curiously%2C%20ancient%20Chinese%20village%20scene%2C%20traditional%20painting&image_size=landscape_4_3',
    text: `<p>少小离家老大回，乡音无改{鬓|bìn}毛{衰|shuāi}。儿童相见不相识，笑问客从何处来。</p>
<p>贺知章年轻时离开家乡，到京城长安做官。直到八十多岁才告老还乡，回到阔别已久的家乡。这首诗写的就是他回到家乡时的感慨。</p>
<p>前两句用对比的手法写出了岁月的无情："少小"与"老大"形成对比，说明离家时年少，回来时已年迈。"乡音无改"说家乡的口音没有变，说明诗人对故乡的感情始终如一；但"鬓毛衰"说明两鬓的头发已经稀疏花白，岁月不饶人。</p>
<p>后两句是全诗最感人的地方：村里的孩子们见到他都不认识，笑着问道："客人您是从哪里来的呀？"诗人明明是回到自己的故乡，却被当成了外来的客人。孩子们天真无邪的问话，恰恰深深刺痛了诗人的心——离家太久，连故乡的孩子都不认识自己了。这种物是人非的感慨，读来令人心酸又感动。</p>`,
    explanation: {
      summary: '唐代诗人贺知章年少离乡，直到八十多岁才回到阔别已久的家乡。这首诗写他回乡时的感慨：乡音未改但容颜已老，村中儿童不认识他，把他当成远方来的客人，读来令人心酸。',
      keyPoints: [
        '"少小"与"老大"对比，写出时光流逝',
        '"乡音无改"说明对故乡的感情不变',
        '"鬓毛衰"说明岁月催人老',
        '儿童不识自己，当作客人，是全诗最感人的地方',
        '全诗语言朴素自然，感情真挚深沉'
      ],
      vocabulary: [
        { word: '偶书', pinyin: 'ǒu shū', meaning: '偶然写下，随感而作' },
        { word: '少小', pinyin: 'shào xiǎo', meaning: '年少的时候' },
        { word: '老大', pinyin: 'lǎo dà', meaning: '年纪大了，年老' },
        { word: '鬓毛', pinyin: 'bìn máo', meaning: '两鬓的头发' },
        { word: '衰', pinyin: 'shuāi', meaning: '疏落，减少（这里指头发稀疏花白）' }
      ],
      moral: '这首诗让我们感受到时光的流逝和对故乡的深情。无论离开多久、走得多远，故乡始终是心中最牵挂的地方。我们要珍惜与家人在一起的时光，珍惜故乡的一切。'
    },
    questions: [
      {
        id: 'q3040_1',
        question: '诗人离家多少年才回来？',
        options: [
          { label: 'A', text: '几年' },
          { label: 'B', text: '十几年' },
          { label: 'C', text: '几十年' },
          { label: 'D', text: '一年' }
        ],
        answer: 'C',
        explanation: '贺知章年轻时离开家乡，到八十多岁才回来，离家大约有五六十年之久。'
      },
      {
        id: 'q3040_2',
        question: '"乡音无改鬓毛衰"说明了什么？',
        options: [
          { label: 'A', text: '诗人的口音变了' },
          { label: 'B', text: '诗人既保持了乡音又已年老' },
          { label: 'C', text: '诗人变年轻了' },
          { label: 'D', text: '诗人头发变黑了' }
        ],
        answer: 'B',
        explanation: '"乡音无改"说明诗人的家乡口音没有变，对故乡的感情始终如一；"鬓毛衰"说明两鬓头发已稀疏花白，岁月催人老。'
      },
      {
        id: 'q3040_3',
        question: '孩子们为什么问"客从何处来"？',
        options: [
          { label: 'A', text: '孩子们故意捉弄他' },
          { label: 'B', text: '诗人真的是外地来的客人' },
          { label: 'C', text: '孩子们不认识回乡的老人，把他当成了外地人' },
          { label: 'D', text: '孩子们知道他是谁' }
        ],
        answer: 'C',
        explanation: '诗人离家太久，容貌已大变，孩子们都不认识他了，所以把他当成了外来的客人，天真地问他是从哪里来的。'
      },
      {
        id: 'q3040_4',
        question: '这首诗主要表达了什么感情？',
        options: [
          { label: 'A', text: '对孩子们的喜爱' },
          { label: 'B', text: '对时光流逝和物是人非的感慨' },
          { label: 'C', text: '对做官的自豪' },
          { label: 'D', text: '对旅行的热爱' }
        ],
        answer: 'B',
        explanation: '诗人回到久别的家乡，乡音未改但容颜已老，连家乡的孩子都不认识他了，表达了对时光流逝和物是人非的深深感慨。'
      },
      {
        id: 'q3040_5',
        question: '这首诗前两句主要用了什么手法？',
        options: [
          { label: 'A', text: '比喻' },
          { label: 'B', text: '夸张' },
          { label: 'C', text: '对比' },
          { label: 'D', text: '拟人' }
        ],
        answer: 'C',
        explanation: '"少小"与"老大"是时间的对比，"乡音无改"与"鬓毛衰"是不变与变的对比，通过对比写出了时光的流逝和人生的沧桑。'
      }
    ]
  },

  // ==================== 第41课 ====================
  {
    id: 3041,
    title: '《赠汪伦》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 41,
    readingTime: 10,
    author: '李白',
    source: '唐·李白《李太白集》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20poet%20standing%20on%20boat%20about%20to%20leave%2C%20friend%20singing%20on%20shore%2C%20peach%20blossom%20pond%2C%20traditional%20Chinese%20painting&image_size=landscape_4_3',
    text: `<p>{李|lǐ}白乘舟将欲{行|háng}，忽闻岸上踏歌声。桃花潭水深千尺，不及汪{伦|lún}送我情。</p>
<p>李白在桃花潭（今安徽泾县）游览时，当地人汪伦非常仰慕李白的才华，热情地招待了他。李白临走时，汪伦踏着节拍唱歌来送行，李白深受感动，写下了这首诗送给汪伦。</p>
<p>前两句叙事：李白乘船即将出发，忽然听到岸上传来歌声。"忽闻"说明汪伦的到来是意外的惊喜。"踏歌"是古代的一种歌唱方式，一边唱歌一边用脚踏地打节拍，说明汪伦是高高兴兴地来送行的。</p>
<p>后两句抒情：桃花潭的水即使有一千尺那么深，也比不上汪伦送别我的这份深厚情谊。"不及"是"比不上"的意思。诗人用桃花潭水的深度来衬托汪伦友情的深厚，用"深千尺"的夸张和"不及"的对比，将无形的友情写得具体可感，成为千古传诵的名句。</p>`,
    explanation: {
      summary: '李白在桃花潭受到汪伦的热情款待，临别时汪伦踏歌来送，李白深受感动，用桃花潭水的深度来比喻汪伦送别之情的深厚，写下了这首情真意切的赠别诗。',
      keyPoints: [
        '汪伦用踏歌的方式为李白送行，既热烈又深情',
        '"忽闻"写出意外的惊喜',
        '"深千尺"是夸张手法',
        '"不及"用潭水深度衬托友情的深厚',
        '用具体可感的事物来表达抽象的友情'
      ],
      vocabulary: [
        { word: '赠', pinyin: 'zèng', meaning: '送给' },
        { word: '将欲行', pinyin: 'jiāng yù xíng', meaning: '将要出发' },
        { word: '踏歌', pinyin: 'tà gē', meaning: '一边唱歌一边用脚踏地打节拍' },
        { word: '桃花潭', pinyin: 'táo huā tán', meaning: '地名，在今安徽省泾县' },
        { word: '不及', pinyin: 'bù jí', meaning: '比不上，不如' }
      ],
      moral: '这首诗表达了真挚的友谊比什么都珍贵。汪伦虽然不是诗人，但他用最朴素真诚的方式为朋友送行，感动了李白。真正的友谊不在乎形式，而在乎那份真心。'
    },
    questions: [
      {
        id: 'q3041_1',
        question: '"忽闻岸上踏歌声"中的"踏歌"是什么意思？',
        options: [
          { label: 'A', text: '跳舞' },
          { label: 'B', text: '一边唱歌一边踏地打节拍' },
          { label: 'C', text: '跑步' },
          { label: 'D', text: '击鼓' }
        ],
        answer: 'B',
        explanation: '踏歌是古代的一种歌唱方式，一边唱歌一边用脚踏地打节拍，表现了汪伦送行时的热烈和欢快。'
      },
      {
        id: 'q3041_2',
        question: '"桃花潭水深千尺"用了什么手法？',
        options: [
          { label: 'A', text: '比喻' },
          { label: 'B', text: '拟人' },
          { label: 'C', text: '夸张' },
          { label: 'D', text: '排比' }
        ],
        answer: 'C',
        explanation: '"深千尺"是夸张的手法，极写潭水之深，用来衬托汪伦送别之情的深厚。'
      },
      {
        id: 'q3041_3',
        question: '"不及汪伦送我情"说明了什么？',
        options: [
          { label: 'A', text: '潭水不深' },
          { label: 'B', text: '汪伦的情谊比深千尺的潭水还要深' },
          { label: 'C', text: '汪伦不会游泳' },
          { label: 'D', text: '潭水比友情重要' }
        ],
        answer: 'B',
        explanation: '"不及"是"比不上"的意思，即使是深千尺的桃花潭水，也比不上汪伦送别李白的那份深厚情谊。'
      },
      {
        id: 'q3041_4',
        question: '汪伦是怎样为李白送行的？',
        options: [
          { label: 'A', text: '写了一封信' },
          { label: 'B', text: '送了很多礼物' },
          { label: 'C', text: '踏着节拍唱歌来送行' },
          { label: 'D', text: '默默站着' }
        ],
        answer: 'C',
        explanation: '诗中写道"忽闻岸上踏歌声"，汪伦用踏歌的方式为李白送行，这种朴素真诚的方式深深感动了李白。'
      },
      {
        id: 'q3041_5',
        question: '这首诗的主题是什么？',
        options: [
          { label: 'A', text: '赞美桃花潭的美景' },
          { label: 'B', text: '表达真挚的友谊' },
          { label: 'C', text: '描写坐船的经历' },
          { label: 'D', text: '描写春天的景色' }
        ],
        answer: 'B',
        explanation: '全诗通过汪伦踏歌送行和潭水千尺的对比，表达了朋友之间真挚深厚的友谊，这种友谊比什么都珍贵。'
      }
    ]
  },

  // ==================== 第42课 ====================
  {
    id: 3042,
    title: '《草》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 42,
    readingTime: 10,
    author: '白居易',
    source: '唐·白居易《白氏长庆集》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vast%20prairie%20with%20lush%20green%20grass%2C%20ancient%20road%20through%20wilderness%2C%20person%20bidding%20farewell%2C%20traditional%20Chinese%20landscape%20painting&image_size=landscape_4_3',
    text: `<p>{离|lí}离原上草，一岁一{枯|kū}{荣|róng}。野火烧不尽，春风吹又生。远芳侵古道，晴翠接荒城。又送{王|wáng}{孙|sūn}去，{萋|qī}萋满别情。</p>
<p>这首诗的原题是《赋得古原草送别》，是白居易十六岁时写的应考之作。诗人在古原上送别友人，借描写原上野草来表达离别之情。</p>
<p>前四句是千古名篇：古原上的野草长得多么茂盛啊，每年都会枯萎一次，又会繁茂一次。野火虽然能烧掉枯草，却烧不尽它的根，等到春风一吹，又会重新生长出来。"野火烧不尽，春风吹又生"象征着生命力的顽强，成为千古传诵的名句。</p>
<p>后四句写送别：远处的芳草蔓延到了古老的道路上，阳光下翠绿的草地一直连接到荒凉的古城。在这长满萋萋芳草的古原上，诗人又一次送别远行的朋友，心中充满了离别的惆怅。"萋萋满别情"用茂盛的芳草来比喻离别的深情，草有多茂盛，离愁就有多深。</p>`,
    explanation: {
      summary: '白居易十六岁时以古原上的野草为题，写下了这首送别诗。前四句赞美野草顽强的生命力，后四句借芳草表达离别之情。"野火烧不尽，春风吹又生"成为千古名句。',
      keyPoints: [
        '"离离"形容草长得茂盛的样子',
        '"枯荣"指草的枯萎和茂盛',
        '"野火烧不尽，春风吹又生"象征顽强的生命力',
        '后四句由写草转为写送别',
        '芳草萋萋象征离别的深情'
      ],
      vocabulary: [
        { word: '离离', pinyin: 'lí lí', meaning: '形容草长得茂盛的样子' },
        { word: '枯荣', pinyin: 'kū róng', meaning: '枯萎和茂盛' },
        { word: '远芳', pinyin: 'yuǎn fāng', meaning: '远处的芳草' },
        { word: '晴翠', pinyin: 'qíng cuì', meaning: '阳光下翠绿的草色' },
        { word: '萋萋', pinyin: 'qī qī', meaning: '形容草长得茂盛的样子' }
      ],
      moral: '这首诗告诉我们，生命的力量是顽强的。就像野草一样，无论遭遇多大的困难和挫折，只要有坚定的信念和不屈的精神，就能重新站起来。同时，芳草萋萋也寄托了深厚的离别之情。'
    },
    questions: [
      {
        id: 'q3042_1',
        question: '"离离原上草"中的"离离"是什么意思？',
        options: [
          { label: 'A', text: '离开' },
          { label: 'B', text: '离别' },
          { label: 'C', text: '草长得茂盛的样子' },
          { label: 'D', text: '稀疏的样子' }
        ],
        answer: 'C',
        explanation: '"离离"是形容词，形容草长得茂盛、繁密的样子，不是"离别"的意思。'
      },
      {
        id: 'q3042_2',
        question: '"野火烧不尽，春风吹又生"说明了什么？',
        options: [
          { label: 'A', text: '野火很大' },
          { label: 'B', text: '春风很温暖' },
          { label: 'C', text: '野草生命力极其顽强' },
          { label: 'D', text: '春天来了' }
        ],
        answer: 'C',
        explanation: '野火虽然能烧掉地面上的枯草，但烧不死地下的草根，春风一吹又会重新生长。这说明野草的生命力极其顽强。'
      },
      {
        id: 'q3042_3',
        question: '这首诗的原题是什么？',
        options: [
          { label: 'A', text: '春草' },
          { label: 'B', text: '赋得古原草送别' },
          { label: 'C', text: '咏草' },
          { label: 'D', text: '草原' }
        ],
        answer: 'B',
        explanation: '这首诗的原题是《赋得古原草送别》，"赋得"是科举考试命题作诗的一种格式。'
      },
      {
        id: 'q3042_4',
        question: '"萋萋满别情"用什么来比喻离别之情？',
        options: [
          { label: 'A', text: '用河水' },
          { label: 'B', text: '用茂盛的芳草' },
          { label: 'C', text: '用白云' },
          { label: 'D', text: '用月亮' }
        ],
        answer: 'B',
        explanation: '萋萋的芳草象征着深深的离别之情，草有多茂盛，离愁就有多深。用具体的景物来表达抽象的情感。'
      },
      {
        id: 'q3042_5',
        question: '白居易写这首诗时多大？',
        options: [
          { label: 'A', text: '六岁' },
          { label: 'B', text: '十六岁' },
          { label: 'C', text: '二十六岁' },
          { label: 'D', text: '三十六岁' }
        ],
        answer: 'B',
        explanation: '这首诗是白居易十六岁时的应考之作，一个少年就能写出如此千古传诵的名篇，足见其文学才华。'
      }
    ]
  },

  // ==================== 第43课 ====================
  {
    id: 3043,
    title: '《宿新市徐公店》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 43,
    readingTime: 10,
    author: '杨万里',
    source: '宋·杨万里《诚斋集》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=rural%20village%20scene%2C%20sparse%20bamboo%20fence%2C%20child%20chasing%20yellow%20butterfly%20in%20rapeseed%20flower%20field%2C%20traditional%20Chinese%20painting&image_size=landscape_4_3',
    text: `<p>{篱|lí}落疏疏一{径|jìng}深，树头新绿未成{阴|yīn}。儿童急走追{蝶|dié}飞，飞入菜花无处寻。</p>
<p>这首诗写的是诗人在新市（今湖南攸县北）一个姓徐的人开的旅店住宿时看到的田园春景。"宿"就是住宿的意思。</p>
<p>前两句写景：稀稀疏疏的篱笆旁边，有一条小路伸向远方。树上的叶子刚刚长出来，嫩绿嫩绿的，还没有形成浓密的树荫。"篱落疏疏"说明篱笆不是很密，能看到外面的景色。"一径深"说明小路弯弯曲曲通向远方，很有纵深感。</p>
<p>后两句写人：一个孩子飞快地奔跑着追赶黄色的蝴蝶，蝴蝶飞进了金灿灿的菜花丛中，蝴蝶是黄色的，菜花也是黄色的，孩子再也找不到蝴蝶了。"急走"就是飞快地跑，"追"说明孩子追得很认真。最后一句"无处寻"写得非常巧妙，黄蝶融入黄花之中，分不清哪是蝶、哪是花，充满了春天田园的生趣。</p>`,
    explanation: {
      summary: '杨万里住在新市一家姓徐的旅店里，看到春天田园的美丽景色：稀疏的篱笆、深远的小路、新绿的树叶，还有一个孩子追着黄蝴蝶跑入菜花丛中的生动画面，充满了田园生趣。',
      keyPoints: [
        '"篱落疏疏一径深"写出乡村景色的幽静',
        '"新绿未成阴"点明是早春时节',
        '"急走"和"追"写出孩子追蝶的活泼',
        '黄蝶飞入黄菜花中"无处寻"，构思巧妙',
        '全诗动静结合，充满田园生趣和童真'
      ],
      vocabulary: [
        { word: '篱落', pinyin: 'lí luò', meaning: '篱笆' },
        { word: '疏疏', pinyin: 'shū shū', meaning: '稀疏，不密集' },
        { word: '径', pinyin: 'jìng', meaning: '小路' },
        { word: '急走', pinyin: 'jí zǒu', meaning: '飞快地跑' },
        { word: '无处寻', pinyin: 'wú chù xún', meaning: '没有地方可以找到' }
      ],
      moral: '这首诗通过描写孩子追蝴蝶的趣事，展现了春天田园的美丽和童年生活的纯真快乐。黄蝶融入菜花的巧妙构思，让我们感受到大自然的和谐之美和生活的趣味。'
    },
    questions: [
      {
        id: 'q3043_1',
        question: '"篱落疏疏一径深"描写了什么样的景色？',
        options: [
          { label: 'A', text: '繁华的城市' },
          { label: 'B', text: '稀疏的篱笆和通向远方的小路' },
          { label: 'C', text: '高大的城墙' },
          { label: 'D', text: '热闹的集市' }
        ],
        answer: 'B',
        explanation: '这句诗描写了稀疏的篱笆旁边，有一条小路弯弯曲曲伸向远方，呈现出乡村幽静的田园景色。'
      },
      {
        id: 'q3043_2',
        question: '孩子追的蝴蝶飞到哪里去了？',
        options: [
          { label: 'A', text: '飞到了树上' },
          { label: 'B', text: '飞到了天上' },
          { label: 'C', text: '飞入了菜花丛中' },
          { label: 'D', text: '飞到了水里' }
        ],
        answer: 'C',
        explanation: '诗中写道"飞入菜花无处寻"，黄色的蝴蝶飞进了金灿灿的菜花丛中，因为颜色相同，所以找不到了。'
      },
      {
        id: 'q3043_3',
        question: '为什么蝴蝶飞入菜花后就找不到了？',
        options: [
          { label: 'A', text: '蝴蝶死了' },
          { label: 'B', text: '蝴蝶变大了' },
          { label: 'C', text: '蝴蝶和菜花都是黄色的，融为一体分不清了' },
          { label: 'D', text: '孩子跑累了' }
        ],
        answer: 'C',
        explanation: '黄蝴蝶是黄色的，菜花也是黄色的，蝴蝶飞入菜花丛中后颜色相同，融为一体，所以孩子找不到蝴蝶了。'
      },
      {
        id: 'q3043_4',
        question: '"急走追蝶飞"中的"急走"是什么意思？',
        options: [
          { label: 'A', text: '着急地走' },
          { label: 'B', text: '慢慢地走' },
          { label: 'C', text: '飞快地跑' },
          { label: 'D', text: '快步走' }
        ],
        answer: 'C',
        explanation: '古诗中"走"常作"跑"讲，"急走"就是飞快地跑。孩子追蝴蝶时跑得很急很快，表现了他的活泼可爱。'
      },
      {
        id: 'q3043_5',
        question: '这首诗描写的是什么季节？',
        options: [
          { label: 'A', text: '盛夏' },
          { label: 'B', text: '早春' },
          { label: 'C', text: '深秋' },
          { label: 'D', text: '隆冬' }
        ],
        answer: 'B',
        explanation: '"新绿未成阴"说明树叶刚长出来，还没有形成浓密的树荫，正是早春时节。菜花和蝴蝶也都是春天的景物。'
      }
    ]
  },

  // ==================== 第44课 ====================
  {
    id: 3044,
    title: '《敕勒歌》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 44,
    readingTime: 10,
    author: '北朝民歌',
    source: '北朝民歌《乐府诗集》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vast%20grassland%20under%20blue%20sky%2C%20yinshan%20mountains%2C%20cattle%20and%20sheep%20visible%20in%20tall%20grass%2C%20traditional%20Mongolian%20prairie%20scene%2C%20painting&image_size=landscape_4_3',
    text: `<p>{敕|chì}{勒|lè}川，{阴|yīn}山下。天似{穹|qióng}{庐|lú}，笼盖四{野|yě}。天{苍|cāng}苍，野茫茫，风吹草低{见|xiàn}牛羊。</p>
<p>这是一首北朝时期的民歌，描写的是北方大草原的壮丽景色。敕勒川是古代敕勒族生活的地方，在今天的内蒙古大草原上。阴山是一座横亘在内蒙古的大山脉。</p>
<p>"天似穹庐，笼盖四野"是两个非常精彩的比喻：天空就像游牧民族居住的圆形帐篷（穹庐），从四面八方笼罩着大地。这个比喻来自草原民族的生活经验，既形象又贴切，写出了天高地阔、天幕四垂的壮阔景象。</p>
<p>"天苍苍，野茫茫"用叠词描绘了天空的深蓝和草原的辽阔。最后一句"风吹草低见牛羊"是全诗的点睛之笔：一阵风吹来，高高的牧草随风倒伏，露出了藏在草丛中的牛群和羊群。这一句以动写静，风吹草动，牛羊隐现，将草原的富饶和生机展现得淋漓尽致。</p>`,
    explanation: {
      summary: '这是一首北朝民歌，描绘了北方敕勒川大草原的壮丽景色：天空像穹庐笼罩大地，天色苍苍，草原茫茫，风吹草低时露出成群的牛羊。全诗气势雄浑，展现了草原的辽阔和富饶。',
      keyPoints: [
        '敕勒川是古代敕勒族居住的大草原',
        '"穹庐"是游牧民族的圆形帐篷，比喻天空',
        '"天苍苍，野茫茫"用叠词写天地的广阔',
        '"风吹草低见牛羊"是全诗的点睛之笔',
        '见（xiàn）是"出现、露出"的意思'
      ],
      vocabulary: [
        { word: '敕勒', pinyin: 'chì lè', meaning: '古代北方的一个民族' },
        { word: '穹庐', pinyin: 'qióng lú', meaning: '游牧民族居住的圆形帐篷，即蒙古包' },
        { word: '苍苍', pinyin: 'cāng cāng', meaning: '深蓝色，形容天空的颜色' },
        { word: '茫茫', pinyin: 'máng máng', meaning: '辽阔无边的样子' },
        { word: '见', pinyin: 'xiàn', meaning: '出现，露出（同"现"）' }
      ],
      moral: '这首诗让我们感受到北方大草原的壮美辽阔和游牧民族对家乡的热爱。天地之间，风吹草低，牛羊隐现，构成了一幅壮美的草原画卷，表达了草原人民豪迈的胸怀和对家乡的深情。'
    },
    questions: [
      {
        id: 'q3044_1',
        question: '"天似穹庐"中的"穹庐"指的是什么？',
        options: [
          { label: 'A', text: '天空' },
          { label: 'B', text: '蒙古包（圆形帐篷）' },
          { label: 'C', text: '山峰' },
          { label: 'D', text: '大树' }
        ],
        answer: 'B',
        explanation: '穹庐是游牧民族居住的圆形帐篷，即蒙古包。诗人把天空比作穹庐，形象地写出了天空笼罩大地的辽阔景象。'
      },
      {
        id: 'q3044_2',
        question: '"风吹草低见牛羊"中的"见"应该读什么音？',
        options: [
          { label: 'A', text: 'jiàn' },
          { label: 'B', text: 'xiàn' },
          { label: 'C', text: 'jiān' },
          { label: 'D', text: 'xiān' }
        ],
        answer: 'B',
        explanation: '这里的"见"读xiàn，同"现"，意思是"出现、露出"。风吹草低时，牛羊从草丛中显露出来。'
      },
      {
        id: 'q3044_3',
        question: '这首诗描写的是什么地方的景色？',
        options: [
          { label: 'A', text: '江南水乡' },
          { label: 'B', text: '北方大草原' },
          { label: 'C', text: '沙漠戈壁' },
          { label: 'D', text: '中原平原' }
        ],
        answer: 'B',
        explanation: '敕勒川在今天的内蒙古大草原上，诗中描写的天高地阔、风吹草低见牛羊的景象，正是北方大草原的壮丽景色。'
      },
      {
        id: 'q3044_4',
        question: '"天苍苍，野茫茫"用了什么手法？',
        options: [
          { label: 'A', text: '比喻' },
          { label: 'B', text: '夸张' },
          { label: 'C', text: '叠词' },
          { label: 'D', text: '排比' }
        ],
        answer: 'C',
        explanation: '"苍苍"和"茫茫"都是叠词，分别形容天空的深蓝和草原的辽阔无边，增强了语言的韵律感和画面感。'
      },
      {
        id: 'q3044_5',
        question: '这首诗表达了什么感情？',
        options: [
          { label: 'A', text: '对城市的向往' },
          { label: 'B', text: '对草原家乡的热爱和自豪' },
          { label: 'C', text: '对战争的恐惧' },
          { label: 'D', text: '对秋天的哀伤' }
        ],
        answer: 'B',
        explanation: '全诗以豪迈的笔触描绘了北方草原的壮丽景色和富饶景象，表达了敕勒族人民对家乡大草原的深深热爱和自豪之情。'
      }
    ]
  },

  // ==================== 第45课 ====================
  {
    id: 3045,
    title: '《望洞庭》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 45,
    readingTime: 10,
    author: '刘禹锡',
    source: '唐·刘禹锡《刘宾客集》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=dongting%20lake%20at%20autumn%20night%2C%20calm%20water%20reflecting%20moonlight%2C%20junshan%20island%20like%20green%20snail%20on%20silver%20plate%2C%20traditional%20Chinese%20painting&image_size=landscape_4_3',
    text: `<p>湖光秋月两相{和|hé}，{潭|tán}面无风镜未{磨|mó}。遥望洞庭山水翠，白银盘里一青{螺|luó}。</p>
<p>刘禹锡在被贬官期间途经洞庭湖，被秋夜月光下洞庭湖的宁静美丽所打动，写下了这首描写洞庭湖夜景的名诗。</p>
<p>前两句写湖面的宁静：秋天的月光和湖光相互交融，和谐美好。没有风的湖面平静得像一面没有打磨过的铜镜，朦朦胧胧，有一种朦胧含蓄的美。"镜未磨"这个比喻非常巧妙，古人的铜镜需要打磨才能光亮照人，未磨的铜镜是模糊朦胧的，正好写出了月光下湖面的朦胧美。</p>
<p>后两句写远望的美景：远远望去，洞庭湖中的山和水一片翠绿。那湖中的君山，就像放在白银盘里的一颗青螺。"白银盘"比喻平静的洞庭湖面，"青螺"比喻苍翠的君山。大小对比鲜明，银白和翠绿色彩相映，构成了一幅精美的画面。</p>`,
    explanation: {
      summary: '刘禹锡在秋夜远望洞庭湖，被湖光月色和山水之美所打动。诗中将平静的湖面比作白银盘，将君山比作青螺，描绘了一幅宁静秀美的洞庭湖月夜图。',
      keyPoints: [
        '"两相和"写出湖光与秋月的和谐交融',
        '"镜未磨"比喻湖面的朦胧含蓄之美',
        '"白银盘"比喻平静的湖面',
        '"青螺"比喻湖中的君山',
        '全诗色彩鲜明，比喻精妙，意境优美'
      ],
      vocabulary: [
        { word: '和', pinyin: 'hé', meaning: '和谐，交融' },
        { word: '潭面', pinyin: 'tán miàn', meaning: '湖面' },
        { word: '镜未磨', pinyin: 'jìng wèi mó', meaning: '没有打磨过的铜镜，比喻朦胧模糊' },
        { word: '白银盘', pinyin: 'bái yín pán', meaning: '银白色的盘子，比喻平静的湖面' },
        { word: '青螺', pinyin: 'qīng luó', meaning: '青色的田螺，比喻翠绿的君山' }
      ],
      moral: '这首诗告诉我们，大自然的美需要用心去感受和发现。刘禹锡在被贬官的逆境中，依然能发现洞庭湖的宁静之美，这种乐观豁达的心态值得我们学习。'
    },
    questions: [
      {
        id: 'q3045_1',
        question: '"潭面无风镜未磨"把什么比作什么？',
        options: [
          { label: 'A', text: '把月亮比作铜镜' },
          { label: 'B', text: '把无风的湖面比作未磨的铜镜' },
          { label: 'C', text: '把山比作镜子' },
          { label: 'D', text: '把月亮比作湖面' }
        ],
        answer: 'B',
        explanation: '没有风的湖面平静朦胧，像一面没有打磨过的铜镜，模糊而含蓄，写出了月光下湖面的朦胧美。'
      },
      {
        id: 'q3045_2',
        question: '"白银盘里一青螺"中"白银盘"和"青螺"分别比喻什么？',
        options: [
          { label: 'A', text: '白银盘指月亮，青螺指湖水' },
          { label: 'B', text: '白银盘指湖面，青螺指君山' },
          { label: 'C', text: '白银盘指天空，青螺指月亮' },
          { label: 'D', text: '白银盘指山，青螺指树木' }
        ],
        answer: 'B',
        explanation: '"白银盘"比喻平静的洞庭湖面，银光闪闪；"青螺"比喻翠绿的君山，整个画面就像银盘里放着一颗青螺。'
      },
      {
        id: 'q3045_3',
        question: '这首诗描写的是什么时间的景色？',
        options: [
          { label: 'A', text: '春天的清晨' },
          { label: 'B', text: '夏天的正午' },
          { label: 'C', text: '秋天的夜晚' },
          { label: 'D', text: '冬天的傍晚' }
        ],
        answer: 'C',
        explanation: '"湖光秋月"说明是秋天，月光下的湖面说明是夜晚，全诗描写的是秋夜月光下洞庭湖的美景。'
      },
      {
        id: 'q3045_4',
        question: '这首诗表达了诗人什么样的心态？',
        options: [
          { label: 'A', text: '悲伤绝望' },
          { label: 'B', text: '愤怒不满' },
          { label: 'C', text: '乐观豁达，善于发现美' },
          { label: 'D', text: '孤独寂寞' }
        ],
        answer: 'C',
        explanation: '刘禹锡当时被贬官，但他没有消沉，反而能静下心来欣赏洞庭湖的宁静之美，说明他心态乐观豁达。'
      },
      {
        id: 'q3045_5',
        question: '诗中写了哪几种颜色？',
        options: [
          { label: 'A', text: '红色和绿色' },
          { label: 'B', text: '白色和青（绿）色' },
          { label: 'C', text: '黄色和蓝色' },
          { label: 'D', text: '黑色和白色' }
        ],
        answer: 'B',
        explanation: '"白银盘"是银白色，"青螺"是青绿色。银白的湖面和翠绿的君山色彩鲜明相映，构成了精美的画面。'
      }
    ]
  },

  // ==================== 第46课 ====================
  {
    id: 3046,
    title: '《江南春》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 46,
    readingTime: 10,
    author: '杜牧',
    source: '唐·杜牧《樊川集》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=spring%20in%20jiangnan%2C%20green%20willows%2C%20red%20flowers%2C%20water%20villages%2C%20mountain%20temples%2C%20rain%20and%20mist%2C%20traditional%20Chinese%20landscape%20painting&image_size=landscape_4_3',
    text: `<p>千里{莺|yīng}啼绿映红，水村山{郭|guō}酒旗风。南朝四百八十寺，多少楼台烟雨中。</p>
<p>这首诗描绘了江南春天的壮丽景色。杜牧用短短二十八个字，将千里江南的春色尽收笔底。</p>
<p>前两句写江南春景：千里江南，到处是黄莺在歌唱，绿树红花相互掩映。傍水的村庄，依山的城郭，迎风招展的酒旗，一一在望。"千里"二字写出了地域的广阔，"莺啼"写出了春天的热闹，"绿映红"写出了色彩的明丽。听觉与视觉结合，构成了一幅有声有色的江南春景图。</p>
<p>后两句写烟雨中的寺庙：南朝（宋、齐、梁、陈四朝）修建了许许多多的佛寺，如今还有多少楼台掩映在蒙蒙的烟雨之中啊！"四百八十寺"不是确切的数字，而是形容寺庙之多。金碧辉煌的亭台楼阁在烟雨中若隐若现，给美丽的江南春色增添了几分朦胧和深沉的历史感。诗人在赞叹美景的同时，也暗含了对历史兴亡的感慨。</p>`,
    explanation: {
      summary: '杜牧用短短二十八字描绘了千里江南的春色：莺啼花红、水村山郭、酒旗招展，还有烟雨中的无数寺庙。诗中既有对江南美景的赞美，也有对南朝兴亡的感慨。',
      keyPoints: [
        '"千里"写出江南地域的广阔',
        '"莺啼绿映红"视听结合，有声有色',
        '"四百八十寺"是虚数，形容寺庙之多',
        '烟雨中的楼台增添了朦胧的历史感',
        '全诗将美景与历史感慨融为一体'
      ],
      vocabulary: [
        { word: '莺啼', pinyin: 'yīng tí', meaning: '黄莺啼叫' },
        { word: '山郭', pinyin: 'shān guō', meaning: '靠山的城郭（城墙）' },
        { word: '酒旗', pinyin: 'jiǔ qí', meaning: '酒店门前悬挂的旗子，作为招牌' },
        { word: '南朝', pinyin: 'nán cháo', meaning: '指宋、齐、梁、陈四个朝代' },
        { word: '楼台', pinyin: 'lóu tái', meaning: '亭台楼阁，指寺庙的建筑' }
      ],
      moral: '这首诗既赞美了江南春天的美丽景色，又让我们感受到历史的沧桑变迁。美丽的自然景色和人文建筑交相辉映，构成了江南独特的文化魅力。'
    },
    questions: [
      {
        id: 'q3046_1',
        question: '"千里莺啼绿映红"从哪些感官来描写？',
        options: [
          { label: 'A', text: '只有视觉' },
          { label: 'B', text: '只有听觉' },
          { label: 'C', text: '听觉和视觉结合' },
          { label: 'D', text: '嗅觉和触觉' }
        ],
        answer: 'C',
        explanation: '"莺啼"是听觉，黄莺在歌唱；"绿映红"是视觉，绿树红花相互掩映。听觉与视觉结合，有声有色。'
      },
      {
        id: 'q3046_2',
        question: '"酒旗"是什么？',
        options: [
          { label: 'A', text: '喝酒用的杯子' },
          { label: 'B', text: '酒店门前悬挂的招牌旗子' },
          { label: 'C', text: '军旗' },
          { label: 'D', text: '风筝' }
        ],
        answer: 'B',
        explanation: '酒旗是古代酒店门前悬挂的旗子，作为招揽顾客的招牌，迎风飘扬，是江南常见的景象。'
      },
      {
        id: 'q3046_3',
        question: '"南朝四百八十寺"说明了什么？',
        options: [
          { label: 'A', text: '南朝只有四百八十座寺庙' },
          { label: 'B', text: '用虚数形容南朝修建的寺庙非常多' },
          { label: 'C', text: '南朝没有寺庙' },
          { label: 'D', text: '寺庙都拆掉了' }
        ],
        answer: 'B',
        explanation: '"四百八十"不是确切数字，而是古诗中常用的虚数，用来形容南朝修建的佛寺非常多。'
      },
      {
        id: 'q3046_4',
        question: '这首诗表达了诗人怎样的感情？',
        options: [
          { label: 'A', text: '只表达了对江南美景的赞美' },
          { label: 'B', text: '只表达了对历史的悲伤' },
          { label: 'C', text: '既有对美景的赞美，也有对历史兴亡的感慨' },
          { label: 'D', text: '只表达了对春天的喜爱' }
        ],
        answer: 'C',
        explanation: '诗人既赞叹了江南春天的美丽景色，又借南朝无数寺庙掩映在烟雨中，暗含了对历史兴亡的感慨。'
      },
      {
        id: 'q3046_5',
        question: '诗中描写了哪些江南春景？',
        options: [
          { label: 'A', text: '只有山和水' },
          { label: 'B', text: '莺啼、绿树红花、水村山郭、酒旗、寺庙楼台' },
          { label: 'C', text: '只有寺庙' },
          { label: 'D', text: '只有花和鸟' }
        ],
        answer: 'B',
        explanation: '诗中描写了黄莺啼叫、绿树红花、水边村庄、山边城郭、迎风酒旗、烟雨中的寺庙楼台等丰富的江南春景。'
      }
    ]
  },

  // ==================== 第47课 ====================
  {
    id: 3047,
    title: '《元日》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 47,
    readingTime: 10,
    author: '王安石',
    source: '宋·王安石《王临川集》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20new%20year%20celebration%2C%20firecrackers%2C%20spring%20couplets%2C%20wine%20cups%2C%20warm%20spring%20breeze%2C%20traditional%20Chinese%20festive%20painting&image_size=landscape_4_3',
    text: `<p>{爆|bào}竹声中一岁除，春风送暖入{屠|tú}{苏|sū}。千门万户{曈|tóng}{曈|tóng}日，总把新桃换旧{符|fú}。</p>
<p>这首诗描写的是农历正月初一（春节）的热闹景象。王安石当时正在推行变法改革，借描写新年新气象来表达对改革成功的信心和喜悦。</p>
<p>前两句写春节的习俗：在噼里啪啦的爆竹声中，旧的一年过去了。春风送来了温暖，人们开开心心地喝着屠苏酒。屠苏酒是古代春节时喝的一种药酒，人们相信喝了可以驱邪避疫。按照习俗，喝屠苏酒要从年幼的人开始，因为年轻人过年意味着长大一岁，值得祝贺。</p>
<p>后两句写新年的景象：初升的太阳照耀着千家万户，到处都是一片明亮温暖的景象。人们纷纷取下旧的桃符，换上新的桃符。桃符是古代过年时挂在门上的桃木板，上面画着门神或写着吉祥话，用来驱邪迎祥。"新桃换旧符"象征着辞旧迎新，万象更新。</p>`,
    explanation: {
      summary: '王安石描写了农历正月初一（春节）的热闹景象：爆竹声声、春风送暖、饮屠苏酒、换新桃符。诗中借新年万象更新的景象，表达了对变法改革成功的信心和喜悦。',
      keyPoints: [
        '元日即农历正月初一，即春节',
        '爆竹、屠苏酒、桃符都是春节的传统习俗',
        '"曈曈"形容太阳初升时光辉灿烂的样子',
        '"新桃换旧符"象征辞旧迎新',
        '全诗借新年景象表达改革的信心和喜悦'
      ],
      vocabulary: [
        { word: '元日', pinyin: 'yuán rì', meaning: '农历正月初一，即春节' },
        { word: '爆竹', pinyin: 'bào zhú', meaning: '鞭炮，古时烧竹子发出爆裂声以驱邪' },
        { word: '屠苏', pinyin: 'tú sū', meaning: '古代春节时喝的一种药酒' },
        { word: '曈曈', pinyin: 'tóng tóng', meaning: '太阳初升时光辉灿烂、明亮温暖的样子' },
        { word: '桃符', pinyin: 'táo fú', meaning: '古代过年挂在门上的桃木板，用来驱邪迎祥' }
      ],
      moral: '这首诗让我们感受到春节辞旧迎新的欢乐气氛。新年新气象，就像王安石借新年景象表达的那样，我们要以积极乐观的心态面对新的开始，勇于革新，拥抱变化。'
    },
    questions: [
      {
        id: 'q3047_1',
        question: '"元日"指的是哪一天？',
        options: [
          { label: 'A', text: '正月十五元宵节' },
          { label: 'B', text: '农历正月初一，即春节' },
          { label: 'C', text: '五月初五端午节' },
          { label: 'D', text: '八月十五中秋节' }
        ],
        answer: 'B',
        explanation: '"元日"即农历正月初一，也就是春节。诗中描写的爆竹、屠苏酒、桃符都是春节的传统习俗。'
      },
      {
        id: 'q3047_2',
        question: '"曈曈日"形容的是什么？',
        options: [
          { label: 'A', text: '月亮很亮' },
          { label: 'B', text: '太阳初升时光辉灿烂的样子' },
          { label: 'C', text: '灯火通明' },
          { label: 'D', text: '星星很亮' }
        ],
        answer: 'B',
        explanation: '"曈曈"形容太阳初升时光辉灿烂、明亮温暖的样子，写出了新年第一天阳光普照的美好景象。'
      },
      {
        id: 'q3047_3',
        question: '"总把新桃换旧符"中的"桃符"是什么？',
        options: [
          { label: 'A', text: '桃子' },
          { label: 'B', text: '过年挂在门上的桃木板' },
          { label: 'C', text: '桃树' },
          { label: 'D', text: '桃花' }
        ],
        answer: 'B',
        explanation: '桃符是古代过年时挂在门上的桃木板，上面画着门神或写着吉祥话，用来驱邪迎祥。后来演变为春联。'
      },
      {
        id: 'q3047_4',
        question: '王安石写这首诗时正在做什么？',
        options: [
          { label: 'A', text: '在旅游' },
          { label: 'B', text: '在打仗' },
          { label: 'C', text: '在推行变法改革' },
          { label: 'D', text: '在写书' }
        ],
        answer: 'C',
        explanation: '王安石当时正在推行变法改革，他借新年万象更新的景象来表达对改革成功的信心和喜悦。'
      },
      {
        id: 'q3047_5',
        question: '这首诗的主题是什么？',
        options: [
          { label: 'A', text: '描写冬天的寒冷' },
          { label: 'B', text: '描写春节的欢乐和辞旧迎新' },
          { label: 'C', text: '描写秋天的萧瑟' },
          { label: 'D', text: '描写思乡之情' }
        ],
        answer: 'B',
        explanation: '全诗描写了春节时爆竹声声、春风送暖、饮屠苏酒、换新桃符的欢乐景象，表达了辞旧迎新的喜悦和对新年的美好期盼。'
      }
    ]
  },

  // ==================== 第48课 ====================
  {
    id: 3048,
    title: '《题西林壁》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 48,
    readingTime: 10,
    author: '苏轼',
    source: '宋·苏轼《苏东坡集》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lushan%20mountain%20seen%20from%20different%20angles%2C%20ridge%20from%20side%2C%20peak%20from%20front%2C%20misty%20mountains%2C%20traditional%20Chinese%20landscape%20painting&image_size=landscape_4_3',
    text: `<p>{横|héng}看成{岭|lǐng}侧成{峰|fēng}，远近高低各不同。不识庐山真面目，只{缘|yuán}身在此山中。</p>
<p>苏轼游览庐山时，在西林寺的墙壁上题写了这首诗。"题"是写的意思，"西林壁"就是西林寺的墙壁。这是苏轼游遍庐山之后写下的总结性感悟。</p>
<p>前两句写庐山的变化多姿：从正面看庐山，它是一条连绵起伏的山岭；从侧面看，它又变成了一座高耸的山峰。从远处、近处、高处、低处不同的位置看庐山，它的样子各不相同。"横""侧""远近高低"六个方位，写出了庐山千变万化的形态。</p>
<p>后两句是富含哲理的名句：为什么看不清庐山的真正面目呢？只因为自己身处庐山之中。当你在山中时，视野被山峰遮挡，只能看到局部，看不到全貌。这两句诗表面上是写看山的体验，实际上蕴含着深刻的哲理——当局者迷，旁观者清。看问题如果局限于自己的角度，就看不到事物的全貌和真相。只有跳出局限，从全局看问题，才能看清事物的本质。</p>`,
    explanation: {
      summary: '苏轼游庐山后在西林寺墙壁上题写此诗。诗中从不同角度描写庐山形态各异，并由此得出哲理：当局者迷，旁观者清。只有跳出局限，才能看清事物的真相和全貌。',
      keyPoints: [
        '从不同角度看庐山，形状各不相同',
        '"横看成岭侧成峰"写出了庐山的多变',
        '"不识庐山真面目"蕴含深刻的人生哲理',
        '当局者迷，旁观者清',
        '全诗将写景与说理完美结合'
      ],
      vocabulary: [
        { word: '题', pinyin: 'tí', meaning: '书写，题写' },
        { word: '岭', pinyin: 'lǐng', meaning: '连绵的山脉' },
        { word: '峰', pinyin: 'fēng', meaning: '高耸的山头' },
        { word: '缘', pinyin: 'yuán', meaning: '因为' },
        { word: '真面目', pinyin: 'zhēn miàn mù', meaning: '本来的、真实的面貌' }
      ],
      moral: '这首诗告诉我们，看待事物不能只从一个角度出发，要多角度、多方位地去观察和思考。只有跳出自身的局限，才能看清事物的全貌和真相。这个道理适用于学习、生活中的方方面面。'
    },
    questions: [
      {
        id: 'q3048_1',
        question: '"横看成岭侧成峰"说明了什么？',
        options: [
          { label: 'A', text: '庐山只有一座山峰' },
          { label: 'B', text: '从不同角度看庐山，形状各不相同' },
          { label: 'C', text: '庐山没有山峰' },
          { label: 'D', text: '庐山永远是一个样子' }
        ],
        answer: 'B',
        explanation: '从正面（横）看庐山是连绵的山岭，从侧面看是高耸的山峰，说明从不同角度看庐山，看到的形状是不同的。'
      },
      {
        id: 'q3048_2',
        question: '"不识庐山真面目，只缘身在此山中"蕴含了什么哲理？',
        options: [
          { label: 'A', text: '庐山很危险' },
          { label: 'B', text: '当局者迷，旁观者清；要跳出局限看问题' },
          { label: 'C', text: '庐山不值得去看' },
          { label: 'D', text: '山里很黑看不见' }
        ],
        answer: 'B',
        explanation: '当你身处庐山之中时，只能看到局部，看不到全貌。这告诉我们看问题要跳出自身局限，从全局出发，才能看清事物的真相。'
      },
      {
        id: 'q3048_3',
        question: '"题西林壁"中的"题"是什么意思？',
        options: [
          { label: 'A', text: '题目' },
          { label: 'B', text: '书写，题写' },
          { label: 'C', text: '问题' },
          { label: 'D', text: '考试' }
        ],
        answer: 'B',
        explanation: '"题"在这里是动词，意思是书写、题写。"题西林壁"就是在西林寺的墙壁上题写诗文。'
      },
      {
        id: 'q3048_4',
        question: '"只缘身在此山中"的"缘"是什么意思？',
        options: [
          { label: 'A', text: '缘分' },
          { label: 'B', text: '边沿' },
          { label: 'C', text: '因为' },
          { label: 'D', text: '沿着' }
        ],
        answer: 'C',
        explanation: '"缘"在古诗中常作"因为"讲。这句意思是"只因为自己身处庐山之中"。'
      },
      {
        id: 'q3048_5',
        question: '这首诗属于什么类型的诗？',
        options: [
          { label: 'A', text: '写景诗' },
          { label: 'B', text: '叙事诗' },
          { label: 'C', text: '哲理诗' },
          { label: 'D', text: '送别诗' }
        ],
        answer: 'C',
        explanation: '虽然前两句写了庐山的景色，但后两句重点在说理，蕴含了"当局者迷，旁观者清"的深刻哲理，因此这是一首哲理诗。'
      }
    ]
  },

  // ==================== 第49课 ====================
  {
    id: 3049,
    title: '《游山西村》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 49,
    readingTime: 10,
    author: '陆游',
    source: '宋·陆游《剑南诗稿》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=rural%20village%20in%20mountains%2C%20winding%20path%20through%20willows%20and%20flowers%2C%20peasant%20welcoming%20guests%20with%20wine%2C%20traditional%20Chinese%20landscape%20painting&image_size=landscape_4_3',
    text: `<p>莫笑农家{腊|là}酒{浑|hún}，丰年留客足鸡{豚|tún}。山重水复疑无路，{柳|liǔ}暗花明又一村。{箫|xiāo}鼓追随春社近，衣冠简朴古风存。从今若许闲乘月，{拄|zhǔ}杖无时夜{叩|kòu}门。</p>
<p>陆游在被罢官后退居家乡时，写了这首记游诗。诗中描写了他在山西村做客时的所见所感。</p>
<p>"莫笑农家腊酒浑，丰年留客足鸡豚"是说不要笑话农家酿的腊酒浑浊，在丰收的年景里，他们有足够的鸡肉和猪肉来招待客人，表现了村民的热情好客。</p>
<p>"山重水复疑无路，柳暗花明又一村"是千古名句：山峦重重叠叠，水流弯弯曲曲，正担心无路可走时，忽然眼前出现了一个柳树成荫、繁花似锦的村庄。这两句诗表面写山水景色，实际上蕴含着深刻的道理——在困境中不要放弃，坚持走下去，就会有转机和希望。</p>
<p>后四句写春社将近时，村民们吹箫打鼓，热闹非凡，衣着简朴，保留着淳朴的古风。诗人希望今后能在月明之夜，拄着拐杖随时来敲门做客，表达了对乡村生活的热爱和向往。</p>`,
    explanation: {
      summary: '陆游退居家乡时游览山西村，描写了丰收年景中村民的热情好客和淳朴民风。"山重水复疑无路，柳暗花明又一村"是千古名句，蕴含着在困境中坚持就有希望的深刻道理。',
      keyPoints: [
        '"腊酒浑"说明酒虽然浑浊但代表热情',
        '"山重水复疑无路，柳暗花明又一村"是千古名句',
        '寓意在困境中坚持就有转机和希望',
        '春社是古代祭祀土地神、祈求丰收的节日',
        '全诗表达了对乡村生活的热爱和对淳朴民风的赞美'
      ],
      vocabulary: [
        { word: '腊酒', pinyin: 'là jiǔ', meaning: '腊月（农历十二月）酿的酒' },
        { word: '浑', pinyin: 'hún', meaning: '浑浊，不清' },
        { word: '豚', pinyin: 'tún', meaning: '小猪，这里泛指猪肉' },
        { word: '柳暗花明', pinyin: 'liǔ àn huā míng', meaning: '柳树浓密、花色明艳，形容出现转机' },
        { word: '拄杖', pinyin: 'zhǔ zhàng', meaning: '拄着拐杖' }
      ],
      moral: '这首诗告诉我们，人生就像走山路，有时会觉得山穷水尽，但只要坚持走下去，就会看到"柳暗花明"的新天地。在困难面前不要放弃，保持乐观的心态，希望就在前方。'
    },
    questions: [
      {
        id: 'q3049_1',
        question: '"山重水复疑无路，柳暗花明又一村"是什么意思？',
        options: [
          { label: 'A', text: '山上有很多水' },
          { label: 'B', text: '山水重重看似无路，忽然出现美丽的村庄，比喻困境中出现转机' },
          { label: 'C', text: '村里有很多柳树和花' },
          { label: 'D', text: '路被水淹没了' }
        ],
        answer: 'B',
        explanation: '这句诗表面写在山中行走，正担心无路可走时眼前豁然开朗；实际寓意困境中坚持就会有转机和希望。'
      },
      {
        id: 'q3049_2',
        question: '"莫笑农家腊酒浑"中的"腊酒"是什么？',
        options: [
          { label: 'A', text: '腊月酿的酒' },
          { label: 'B', text: '放了很久的酒' },
          { label: 'C', text: '加了腊肉的酒' },
          { label: 'D', text: '好酒' }
        ],
        answer: 'A',
        explanation: '腊酒是腊月（农历十二月）酿的酒，用腊月的粮食酿造，所以叫腊酒。农家自酿的酒比较浑浊，但代表了村民的热情好客。'
      },
      {
        id: 'q3049_3',
        question: '这首诗表现了村民什么样的品质？',
        options: [
          { label: 'A', text: '吝啬小气' },
          { label: 'B', text: '热情好客、淳朴善良' },
          { label: 'C', text: '骄傲自大' },
          { label: 'D', text: '冷漠无情' }
        ],
        answer: 'B',
        explanation: '"丰年留客足鸡豚"说明村民热情好客，准备了丰盛的食物招待客人；"衣冠简朴古风存"说明民风淳朴。'
      },
      {
        id: 'q3049_4',
        question: '"柳暗花明"现在常用来比喻什么？',
        options: [
          { label: 'A', text: '春天的景色' },
          { label: 'B', text: '困境中出现转机和希望' },
          { label: 'C', text: '夏天很热' },
          { label: 'D', text: '花很多' }
        ],
        answer: 'B',
        explanation: '"柳暗花明"现在常用来比喻在困境中出现转机，事情有了新的希望和出路，是一个充满正能量的成语。'
      },
      {
        id: 'q3049_5',
        question: '这首诗的主旨是什么？',
        options: [
          { label: 'A', text: '批评农村落后' },
          { label: 'B', text: '赞美乡村生活和淳朴民风，表达对田园生活的向往' },
          { label: 'C', text: '描写战争' },
          { label: 'D', text: '写秋天的景色' }
        ],
        answer: 'B',
        explanation: '全诗通过描写山西村的热情好客、淳朴民风和优美景色，表达了诗人对乡村田园生活的热爱和向往。'
      }
    ]
  },

  // ==================== 第50课 ====================
  {
    id: 3050,
    title: '《黄鹤楼送孟浩然之广陵》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 50,
    readingTime: 10,
    author: '李白',
    source: '唐·李白《李太白集》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=yellow%20crane%20tower%20farewell%2C%20lone%20sail%20disappearing%20into%20horizon%2C%20yangtze%20river%20in%20spring%20mist%2C%20traditional%20Chinese%20painting&image_size=landscape_4_3',
    text: `<p>故人西辞黄{鹤|hè}楼，烟花三月下{扬|yáng}州。孤帆远影{碧|bì}空尽，唯见长江天际流。</p>
<p>李白在黄鹤楼（今湖北武昌）送别好友孟浩然去扬州（古称广陵）。孟浩然要从武昌乘船沿长江东下到扬州去。这是两位大诗人之间的一次深情送别。</p>
<p>前两句叙事点题：老朋友在黄鹤楼与我告别，要在这烟花如锦的三月顺流而下去扬州。"故人"即老朋友。"西辞"指从西边辞别，因为黄鹤楼在西，扬州在东。"烟花三月"形容春天繁花似锦、如烟似雾的美丽景象。虽然是离别，但春光如此美好，为离别增添了几分诗意。</p>
<p>后两句写送别的情景：诗人站在江边，目送朋友的船渐渐远去，直到帆影消失在碧蓝的天空尽头。最后只能看见滔滔的长江水向着天边流去。"孤帆"写出朋友只身远行的孤独，"碧空尽"写出船已远到看不见的程度。诗人久久伫立，不愿离去，将无限的离愁融入了滔滔江水之中。</p>`,
    explanation: {
      summary: '李白在黄鹤楼送别好友孟浩然去扬州。诗人目送朋友的船渐行渐远，直到消失在天际，只剩下滔滔江水。诗中将离别之情融入壮丽的自然景色之中，意境开阔，情深意长。',
      keyPoints: [
        '"故人"指老朋友孟浩然',
        '"西辞"指从西边（黄鹤楼）辞别东去（扬州）',
        '"烟花三月"形容春天繁花似锦的美景',
        '"孤帆远影碧空尽"写出了目送友人远去的情景',
        '将无限离愁融入滔滔江水，意境深远'
      ],
      vocabulary: [
        { word: '故人', pinyin: 'gù rén', meaning: '老朋友' },
        { word: '西辞', pinyin: 'xī cí', meaning: '从西边辞别（黄鹤楼在扬州的西边）' },
        { word: '烟花', pinyin: 'yān huā', meaning: '形容春天繁花似锦、如烟似雾' },
        { word: '碧空', pinyin: 'bì kōng', meaning: '碧蓝的天空' },
        { word: '唯见', pinyin: 'wéi jiàn', meaning: '只看见' }
      ],
      moral: '这首诗告诉我们，真正的友谊是深厚的，朋友分别时的不舍和牵挂是最真挚的情感。李白将离别之情融入壮丽的江水景色中，让我们感受到离愁也可以如此诗意和壮美。'
    },
    questions: [
      {
        id: 'q3050_1',
        question: '诗人送别的是谁？',
        options: [
          { label: 'A', text: '杜甫' },
          { label: 'B', text: '孟浩然' },
          { label: 'C', text: '王维' },
          { label: 'D', text: '白居易' }
        ],
        answer: 'B',
        explanation: '题目"黄鹤楼送孟浩然之广陵"明确说明送别的是好友孟浩然，"之"是"去、到"的意思，广陵是扬州的古称。'
      },
      {
        id: 'q3050_2',
        question: '"烟花三月"是什么意思？',
        options: [
          { label: 'A', text: '三月份放烟花' },
          { label: 'B', text: '形容三月春天繁花似锦、如烟似雾的美景' },
          { label: 'C', text: '三月份有烟' },
          { label: 'D', text: '三月份很冷' }
        ],
        answer: 'B',
        explanation: '"烟花"形容春天繁花似锦、如烟似雾的美丽景象，"烟花三月"是说在最美好的春光中送别朋友。'
      },
      {
        id: 'q3050_3',
        question: '"孤帆远影碧空尽"说明了什么？',
        options: [
          { label: 'A', text: '有很多船' },
          { label: 'B', text: '朋友的船已远到看不见，消失在天际' },
          { label: 'C', text: '天变暗了' },
          { label: 'D', text: '风很大' }
        ],
        answer: 'B',
        explanation: '诗人目送朋友的孤帆越走越远，直到帆影消失在碧蓝天空的尽头，说明诗人久久伫立不愿离去。'
      },
      {
        id: 'q3050_4',
        question: '"西辞"中的"西"指的是什么方位？',
        options: [
          { label: 'A', text: '扬州在西边' },
          { label: 'B', text: '黄鹤楼在西边' },
          { label: 'C', text: '太阳在西边' },
          { label: 'D', text: '风从西边吹来' }
        ],
        answer: 'B',
        explanation: '黄鹤楼在武昌（西边），扬州在东边。孟浩然从黄鹤楼出发东去扬州，所以说"西辞"——从西边辞别。'
      },
      {
        id: 'q3050_5',
        question: '这首诗表达了什么感情？',
        options: [
          { label: 'A', text: '对春天的喜爱' },
          { label: 'B', text: '对黄鹤楼的赞美' },
          { label: 'C', text: '对朋友离别的不舍和深厚的友情' },
          { label: 'D', text: '对扬州的向往' }
        ],
        answer: 'C',
        explanation: '全诗通过目送友人孤帆远去、久久不愿离去的描写，表达了对朋友离别的不舍和两人之间深厚的友情。'
      }
    ]
  },

  // ==================== 第51课 ====================
  {
    id: 3051,
    title: '《送元二使安西》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 51,
    readingTime: 10,
    author: '王维',
    source: '唐·王维《王右丞集》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20farewell%20scene%2C%20morning%20rain%20in%20weicheng%2C%20green%20willows%20by%20inn%2C%20two%20friends%20drinking%20wine%2C%20traditional%20painting&image_size=landscape_4_3',
    text: `<p>{渭|wèi}城朝雨{浥|yì}轻{尘|chén}，客舍青青{柳|liǔ}色新。劝君更尽一杯酒，西出{阳|yáng}关无故人。</p>
<p>这首诗又叫《渭城曲》或《阳关三叠》，是王维送好友元二出使安西（今新疆库车一带）时所作。渭城在今陕西咸阳附近，是当时送别的地方。阳关是古代通往西域的重要关口，在今甘肃敦煌附近。</p>
<p>前两句写景：清晨的渭城刚下过一场小雨，湿润的空气沾湿了路上的尘土，道路显得格外干净清新。旅店旁边的柳树被雨水洗过后，显得更加青翠欲滴。"浥"是湿润的意思，春雨过后的一切都显得清新美好。然而这美好的春光中却带着离别的伤感。</p>
<p>后两句写送别：诗人劝朋友再干一杯酒，因为出了阳关往西走，就再也没有老朋友了。"更尽"说明已经喝了很多杯，但还是不舍得让朋友走。这两句虽然语言平淡朴素，但蕴含了极其深挚的惜别之情，成为千古传诵的送别名句。</p>`,
    explanation: {
      summary: '王维在渭城送别好友元二出使安西。清晨雨后的清新景色衬托了离别的伤感。"劝君更尽一杯酒，西出阳关无故人"以朴素的语言表达了深挚的惜别之情，成为千古送别名句。',
      keyPoints: [
        '渭城在今陕西咸阳，安西在今新疆库车',
        '朝雨浥轻尘，春雨过后景色清新',
        '柳色青青，古人折柳送别的习俗',
        '"更尽"说明杯酒之中饱含不舍',
        '全诗以清新之景衬托离别之情'
      ],
      vocabulary: [
        { word: '渭城', pinyin: 'wèi chéng', meaning: '地名，在今陕西咸阳附近' },
        { word: '浥', pinyin: 'yì', meaning: '湿润，沾湿' },
        { word: '客舍', pinyin: 'kè shè', meaning: '旅店，客栈' },
        { word: '更尽', pinyin: 'gèng jìn', meaning: '再喝完（一杯）' },
        { word: '阳关', pinyin: 'yáng guān', meaning: '古代关口，在今甘肃敦煌附近' }
      ],
      moral: '这首诗让我们感受到朋友之间真挚的离别之情。即使前路遥远，没有故人相伴，但那一杯饱含深情的酒，足以温暖朋友的整个旅程。真挚的友谊是人生最宝贵的财富。'
    },
    questions: [
      {
        id: 'q3051_1',
        question: '"渭城朝雨浥轻尘"中的"浥"是什么意思？',
        options: [
          { label: 'A', text: '淹没' },
          { label: 'B', text: '湿润，沾湿' },
          { label: 'C', text: '冲走' },
          { label: 'D', text: '覆盖' }
        ],
        answer: 'B',
        explanation: '"浥"是湿润、沾湿的意思。清晨的小雨湿润了路上的轻尘，使空气清新、道路洁净。'
      },
      {
        id: 'q3051_2',
        question: '"西出阳关无故人"说明了什么？',
        options: [
          { label: 'A', text: '阳关很近' },
          { label: 'B', text: '出了阳关就没有老朋友了，旅途遥远寂寞' },
          { label: 'C', text: '阳关有很多人' },
          { label: 'D', text: '故人都在阳关' }
        ],
        answer: 'B',
        explanation: '阳关以西就是茫茫的西域，远离中原，不会再遇到老朋友了。说明友人此去路途遥远，以后很难再见面。'
      },
      {
        id: 'q3051_3',
        question: '诗中"客舍青青柳色新"的"柳"有什么特别含义？',
        options: [
          { label: 'A', text: '只是写景，没有特别含义' },
          { label: 'B', text: '柳谐音"留"，古人折柳送别，表达挽留之意' },
          { label: 'C', text: '说明是春天' },
          { label: 'D', text: '说明旅店很大' }
        ],
        answer: 'B',
        explanation: '古人送别时常折柳相赠，因为"柳"与"留"谐音，表达依依不舍的挽留之意。诗中写柳色青青，暗含离别的伤感。'
      },
      {
        id: 'q3051_4',
        question: '"劝君更尽一杯酒"中的"更"字说明了什么？',
        options: [
          { label: 'A', text: '这是第一杯酒' },
          { label: 'B', text: '这是最后一杯酒' },
          { label: 'C', text: '已经喝了很多杯，但还是不舍得让朋友走' },
          { label: 'D', text: '酒很难喝' }
        ],
        answer: 'C',
        explanation: '"更"是"再"的意思，说明之前已经喝了很多杯，但诗人还是想再劝朋友喝一杯，因为实在不舍得让朋友走。'
      },
      {
        id: 'q3051_5',
        question: '这首诗又被称为什么？',
        options: [
          { label: 'A', text: '《春晓》' },
          { label: 'B', text: '《渭城曲》或《阳关三叠》' },
          { label: 'C', text: '《静夜思》' },
          { label: 'D', text: '《望岳》' }
        ],
        answer: 'B',
        explanation: '这首诗又叫《渭城曲》（因为写于渭城）或《阳关三叠》（因为写到阳关），是古代最著名的送别诗之一。'
      }
    ]
  },

  // ==================== 第52课 ====================
  {
    id: 3052,
    title: '《别董大》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 52,
    readingTime: 10,
    author: '高适',
    source: '唐·高适《高常侍集》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=winter%20farewell%20scene%2C%20yellow%20clouds%20covering%20sun%2C%20wild%20geese%20flying%20in%20snow%2C%20two%20friends%20parting%20on%20road%2C%20traditional%20Chinese%20painting&image_size=landscape_4_3',
    text: `<p>千里黄云白日{曛|xūn}，北风吹{雁|yàn}雪纷纷。莫愁前路无知己，天下谁人不识君。</p>
<p>董大是当时的著名琴师董庭兰，在兄弟中排行第一，所以称为董大。高适送别董大时，正值冬天，天色昏暗，大雪纷飞，景色十分凄凉。但诗人的送别却充满了豪迈之气。</p>
<p>前两句写送别的环境：千里黄云遮蔽了太阳，天色昏暗。北风呼啸，大雁在风雪中南飞，大雪纷纷扬扬。"曛"是昏暗的意思，黄云蔽日、北风飞雪，营造了一个荒凉寒冷的冬日送别场景。</p>
<p>后两句是千古名句，一反前两句的悲凉气氛：不要担心前面的路上没有知己，天下有谁不认识你呢！"莫愁"二字振起全诗，从悲凉转为豪迈。诗人不是像一般送别诗那样伤感流泪，而是用慷慨激昂的话语鼓励朋友：你才华出众，走到哪里都会受到赏识，何必担忧前路！这种乐观豪迈的送别方式，成为千古传诵的名句。</p>`,
    explanation: {
      summary: '高适在风雪中送别好友董大。诗的前两句描写了荒凉寒冷的冬日景色，后两句却一反悲凉，用豪迈的语言鼓励朋友：不要担心前路无知己，天下人都认识你！是送别诗中的豪放之作。',
      keyPoints: [
        '董大是当时著名琴师董庭兰',
        '"曛"是昏暗的意思，写天色昏暗',
        '"莫愁前路无知己，天下谁人不识君"是千古名句',
        '一反送别诗的悲伤传统，用豪迈鼓励友人',
        '全诗先抑后扬，由悲转壮'
      ],
      vocabulary: [
        { word: '曛', pinyin: 'xūn', meaning: '昏暗，太阳被遮蔽' },
        { word: '雁', pinyin: 'yàn', meaning: '大雁，候鸟' },
        { word: '知己', pinyin: 'zhī jǐ', meaning: '了解自己的人，好朋友' },
        { word: '君', pinyin: 'jūn', meaning: '你，对人的尊称' },
        { word: '谁人', pinyin: 'shuí rén', meaning: '哪个人，谁' }
      ],
      moral: '这首诗告诉我们，真正的友谊是互相鼓励和信任。在朋友困难或前途未卜时，最好的支持不是悲伤流泪，而是给予鼓励和信心。高适的豪迈送别方式，展现了真正的友谊精神。'
    },
    questions: [
      {
        id: 'q3052_1',
        question: '"千里黄云白日曛"中的"曛"是什么意思？',
        options: [
          { label: 'A', text: '明亮' },
          { label: 'B', text: '温暖' },
          { label: 'C', text: '昏暗' },
          { label: 'D', text: '红色' }
        ],
        answer: 'C',
        explanation: '"曛"是昏暗的意思。千里黄云遮蔽了太阳，天色昏暗，描绘了冬天阴沉的天空。'
      },
      {
        id: 'q3052_2',
        question: '"莫愁前路无知己，天下谁人不识君"表达了什么？',
        options: [
          { label: 'A', text: '对朋友前途的担忧' },
          { label: 'B', text: '对朋友的鼓励和信心' },
          { label: 'C', text: '对天气的不满' },
          { label: 'D', text: '对自己的自豪' }
        ],
        answer: 'B',
        explanation: '诗人鼓励朋友不要担心前路没有知己，因为你才华出众，天下人都会认识你、赏识你。表达了对朋友的充分信任和鼓励。'
      },
      {
        id: 'q3052_3',
        question: '这首诗与一般送别诗有什么不同？',
        options: [
          { label: 'A', text: '和其他送别诗一样悲伤' },
          { label: 'B', text: '一反悲伤传统，用豪迈的语言鼓励友人' },
          { label: 'C', text: '没有写离别' },
          { label: 'D', text: '写的是春天' }
        ],
        answer: 'B',
        explanation: '一般送别诗多写离愁别绪、依依不舍，但这首诗却用豪迈乐观的话语鼓励朋友，展现了豁达的胸怀和真挚的友谊。'
      },
      {
        id: 'q3052_4',
        question: '诗中的"董大"是谁？',
        options: [
          { label: 'A', text: '一个将军' },
          { label: 'B', text: '一个商人' },
          { label: 'C', text: '著名琴师董庭兰' },
          { label: 'D', text: '一个农民' }
        ],
        answer: 'C',
        explanation: '董大就是董庭兰，是当时著名的琴师，因为在兄弟中排行第一，所以被称为"董大"。'
      },
      {
        id: 'q3052_5',
        question: '这首诗的前两句和后两句在情感上有什么变化？',
        options: [
          { label: 'A', text: '前两句高兴，后两句悲伤' },
          { label: 'B', text: '前后两句都悲伤' },
          { label: 'C', text: '前两句悲凉，后两句豪迈' },
          { label: 'D', text: '前后两句都高兴' }
        ],
        answer: 'C',
        explanation: '前两句写风雪交加的荒凉景色，气氛悲凉；后两句突然振起，用豪迈的语言鼓励朋友，从悲转壮，先抑后扬。'
      }
    ]
  },

  // ==================== 第53课 ====================
  {
    id: 3053,
    title: '《枫桥夜泊》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 53,
    readingTime: 10,
    author: '张继',
    source: '唐·张继诗作',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=night%20scene%20at%20maple%20bridge%2C%20crescent%20moon%20setting%2C%20crow%20crying%2C%20frost%20in%20autumn%20air%2C%20fishing%20boats%20with%20lights%2C%20traditional%20Chinese%20painting&image_size=landscape_4_3',
    text: `<p>月落乌{啼|tí}{霜|shuāng}满天，江{枫|fēng}渔火对愁眠。{姑|gū}{苏|sū}城外寒山寺，夜半钟声到客船。</p>
<p>张继在一个秋天的夜晚，乘船经过苏州，停泊在枫桥边过夜。诗人看着深秋夜景，听着钟声，满怀愁绪，写下了这首千古名诗。</p>
<p>前两句写夜景：月亮落下去了，乌鸦在昏暗中啼叫，秋天的寒气弥漫天空，仿佛霜气满天。江边的枫树和渔船上的灯火，在诗人的愁眼中相对无眠。"对愁眠"三字意味深长——诗人怀着满腹愁绪，对着枫树和渔火，无法入睡。</p>
<p>后两句写钟声：姑苏（苏州的别称）城外有一座寒山寺，半夜里寺中的钟声悠悠地传到了诗人的客船上。这钟声在寂静的秋夜中格外清晰，一声声叩击着诗人孤独忧愁的心灵。"夜半钟声到客船"以声写静，用钟声衬托出夜的宁静和诗人的孤寂，成为千古传诵的名句。</p>`,
    explanation: {
      summary: '张继在一个秋天的夜晚停泊在枫桥边，描写了月落乌啼、霜天渔火、夜半钟声的深秋夜景，表达了旅途中的孤独和忧愁。"夜半钟声到客船"成为千古名句。',
      keyPoints: [
        '枫桥在今江苏苏州',
        '姑苏是苏州的别称',
        '寒山寺因诗而闻名天下',
        '"对愁眠"写出诗人的愁绪和失眠',
        '"夜半钟声到客船"以声写静，意境深远'
      ],
      vocabulary: [
        { word: '夜泊', pinyin: 'yè bó', meaning: '夜间停船靠岸' },
        { word: '霜', pinyin: 'shuāng', meaning: '秋天的寒气，接近地面的水汽凝结成的白色冰晶' },
        { word: '渔火', pinyin: 'yú huǒ', meaning: '渔船上的灯火' },
        { word: '姑苏', pinyin: 'gū sū', meaning: '苏州的别称' },
        { word: '愁眠', pinyin: 'chóu mián', meaning: '怀着愁绪难以入睡' }
      ],
      moral: '这首诗让我们感受到一个人在旅途中的孤独和思乡之情。钟声、月色、渔火，这些意象交织在一起，构成了一幅凄美的秋夜画卷。也让我们明白，孤独和忧愁也是人生的一部分。'
    },
    questions: [
      {
        id: 'q3053_1',
        question: '"姑苏"是哪个城市的别称？',
        options: [
          { label: 'A', text: '杭州' },
          { label: 'B', text: '南京' },
          { label: 'C', text: '苏州' },
          { label: 'D', text: '扬州' }
        ],
        answer: 'C',
        explanation: '姑苏是苏州的别称，因为苏州有座姑苏山而得名。枫桥和寒山寺都在苏州城外。'
      },
      {
        id: 'q3053_2',
        question: '"江枫渔火对愁眠"中的"愁眠"是什么意思？',
        options: [
          { label: 'A', text: '睡得很香' },
          { label: 'B', text: '高兴地入睡' },
          { label: 'C', text: '怀着愁绪难以入睡' },
          { label: 'D', text: '做噩梦' }
        ],
        answer: 'C',
        explanation: '"愁眠"意思是怀着忧愁难以入眠。诗人对着枫树和渔火，满腹愁绪，无法入睡。'
      },
      {
        id: 'q3053_3',
        question: '"夜半钟声到客船"写的是什么？',
        options: [
          { label: 'A', text: '白天的钟声' },
          { label: 'B', text: '半夜里寒山寺的钟声传到诗人船上' },
          { label: 'C', text: '鼓声' },
          { label: 'D', text: '雨声' }
        ],
        answer: 'B',
        explanation: '半夜里，姑苏城外寒山寺的钟声悠悠地传到了诗人的客船上，在寂静的秋夜中格外清晰。'
      },
      {
        id: 'q3053_4',
        question: '诗中描写了哪些秋夜景象？',
        options: [
          { label: 'A', text: '只有月亮' },
          { label: 'B', text: '月落、乌啼、霜天、江枫、渔火、钟声' },
          { label: 'C', text: '只有钟声' },
          { label: 'D', text: '只有渔火' }
        ],
        answer: 'B',
        explanation: '诗中描写了月落、乌鸦啼叫、满天霜气、江边枫树、渔船灯火、夜半钟声等多种秋夜景象，构成了一幅完整的秋夜图。'
      },
      {
        id: 'q3053_5',
        question: '这首诗表达了诗人什么心情？',
        options: [
          { label: 'A', text: '快乐兴奋' },
          { label: 'B', text: '旅途中的孤独和忧愁' },
          { label: 'C', text: '对美景的赞美' },
          { label: 'D', text: '对朋友的思念' }
        ],
        answer: 'B',
        explanation: '诗人独自一人夜泊枫桥，面对秋夜的萧瑟景象和悠悠钟声，心中充满了旅途中的孤独和忧愁。'
      }
    ]
  },

  // ==================== 第54课 ====================
  {
    id: 3054,
    title: '《江畔独步寻花》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 54,
    readingTime: 10,
    author: '杜甫',
    source: '唐·杜甫《杜工部集》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=spring%20flowers%20along%20stream%2C%20peach%20blossoms%2C%20butterflies%20dancing%2C%20oriole%20singing%20in%20willow%2C%20traditional%20Chinese%20spring%20painting&image_size=landscape_4_3',
    text: `<p>黄四娘家花满{蹊|xī}，千朵万朵压枝低。留连戏{蝶|dié}时时舞，自在{娇|jiāo}{莺|yīng}恰恰啼。</p>
<p>杜甫在成都居住时，春天独自在江边散步赏花，写下了这首描绘春花美景的诗。"江畔独步寻花"就是在江边独自一人一边散步一边赏花。黄四娘是杜甫的邻居。</p>
<p>前两句写花之多：黄四娘家的小路上开满了鲜花，成千上万朵花儿把花枝都压弯了。"花满蹊"说明小路上到处都是花，"千朵万朵"用数量词形容花的繁多，"压枝低"生动地写出了花朵繁茂、把枝条都压弯了的景象。</p>
<p>后两句写花间生机：蝴蝶在花丛中留恋不舍，时时翩翩起舞；黄莺在枝头自在地歌唱，发出悦耳的啼声。"留连"写出蝴蝶不愿离去的样子，"自在"写出黄莺悠闲快乐的状态。"恰恰啼"形容黄莺叫得正是时候，声音悦耳动听。整首诗描绘了一幅繁花似锦、蝶舞莺啼的春天美景，充满了生机和欢乐。</p>`,
    explanation: {
      summary: '杜甫在成都时，春天独自在江边散步赏花，描写了黄四娘家花满小路、蝶舞莺啼的美丽春景。诗中充满了春天的生机和欢乐，表达了诗人对大自然和生活的热爱。',
      keyPoints: [
        '黄四娘是杜甫的邻居',
        '"花满蹊"和"千朵万朵"写花之繁多',
        '"压枝低"生动写出花朵把枝条压弯',
        '"留连"写蝴蝶不愿离去',
        '全诗充满春天的生机和欢乐'
      ],
      vocabulary: [
        { word: '蹊', pinyin: 'xī', meaning: '小路' },
        { word: '留连', pinyin: 'liú lián', meaning: '留恋不舍，不愿离去' },
        { word: '戏蝶', pinyin: 'xì dié', meaning: '嬉戏的蝴蝶' },
        { word: '娇莺', pinyin: 'jiāo yīng', meaning: '可爱的黄莺' },
        { word: '恰恰', pinyin: 'qià qià', meaning: '形容鸟叫声和谐悦耳，也有"刚好、正好"之意' }
      ],
      moral: '这首诗告诉我们，生活中处处有美，只要我们用心去感受。杜甫独自散步都能发现如此美好的春景，我们也应该学会放慢脚步，欣赏身边的自然美景，感受生活的美好。'
    },
    questions: [
      {
        id: 'q3054_1',
        question: '"花满蹊"中的"蹊"是什么意思？',
        options: [
          { label: 'A', text: '小溪' },
          { label: 'B', text: '小路' },
          { label: 'C', text: '花园' },
          { label: 'D', text: '田野' }
        ],
        answer: 'B',
        explanation: '"蹊"是小路的意思。"花满蹊"说明黄四娘家门前的小路上到处都开满了鲜花。'
      },
      {
        id: 'q3054_2',
        question: '"千朵万朵压枝低"说明了什么？',
        options: [
          { label: 'A', text: '枝条很脆弱' },
          { label: 'B', text: '花非常多，把枝条都压弯了' },
          { label: 'C', text: '风很大' },
          { label: 'D', text: '下雪了' }
        ],
        answer: 'B',
        explanation: '成千上万朵花把枝条都压弯了，说明花儿开得非常繁茂，数量极多。'
      },
      {
        id: 'q3054_3',
        question: '"留连戏蝶时时舞"中的"留连"是什么意思？',
        options: [
          { label: 'A', text: '留下' },
          { label: 'B', text: '留恋不舍，不愿离去' },
          { label: 'C', text: '连在一起' },
          { label: 'D', text: '连续' }
        ],
        answer: 'B',
        explanation: '"留连"就是留恋不舍的意思。蝴蝶在花丛中飞来飞去，被花香吸引，舍不得离开。'
      },
      {
        id: 'q3054_4',
        question: '这首诗描写了哪几种春天的景象？',
        options: [
          { label: 'A', text: '只有花' },
          { label: 'B', text: '繁花、蝴蝶和黄莺' },
          { label: 'C', text: '只有蝴蝶' },
          { label: 'D', text: '只有黄莺' }
        ],
        answer: 'B',
        explanation: '诗中描写了满路繁花、翩翩起舞的蝴蝶和自在啼叫的黄莺，三者共同构成了一幅生机勃勃的春天美景图。'
      },
      {
        id: 'q3054_5',
        question: '"独步寻花"是什么意思？',
        options: [
          { label: 'A', text: '独自跑步去找花' },
          { label: 'B', text: '独自一人散步赏花' },
          { label: 'C', text: '和朋友一起看花' },
          { label: 'D', text: '独自坐在花丛中' }
        ],
        answer: 'B',
        explanation: '"独步"是独自散步的意思，"寻花"是赏花的意思。"江畔独步寻花"就是在江边独自一人一边散步一边赏花。'
      }
    ]
  },

  // ==================== 第55课 ====================
  {
    id: 3055,
    title: '《渔歌子》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 55,
    readingTime: 10,
    author: '张志和',
    source: '唐·张志和《玄真子》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=traditional%20Chinese%20fishing%20scene%2C%20white%20egrets%20flying%20over%20green%20mountains%2C%20fisherman%20in%20straw%20raincoat%20fishing%20in%20spring%20rain%2C%20peach%20blossoms%2C%20painting&image_size=landscape_4_3',
    text: `<p>西{塞|sài}山前白{鹭|lù}飞，桃花流水{鳜|guì}鱼肥。青{箬|ruò}{笠|lì}，绿{蓑|suō}衣，斜风细雨不须归。</p>
<p>这首词是张志和的代表作，描写了江南水乡春天的美景和渔翁悠闲自在的生活。张志和曾在朝廷做官，后来隐居江湖，自号"烟波钓徒"，过着自由自在的渔隐生活。</p>
<p>前两句写景：西塞山前，白鹭在天空中自由自在地飞翔。岸边桃花盛开，花瓣飘落在溪水中，溪水里的鳜鱼正肥美。白鹭、青山、桃花、流水，构成了一幅色彩明丽的江南春景图。白鹭的白色、山的青色、桃花的粉红色、流水的碧绿色，色彩丰富而和谐。</p>
<p>后两句写人：一位头戴青色斗笠、身披绿色蓑衣的渔翁，在斜风细雨中悠然垂钓，不愿意回家。"不须归"三个字是全词的点睛之笔——不是不能归，而是不愿归。渔翁沉醉在这美好的春色和悠闲的垂钓之中，享受着大自然的恩赐，不愿回到尘世的纷扰中去。这正是张志和隐居生活的真实写照。</p>`,
    explanation: {
      summary: '张志和描写了江南水乡春天的美景：白鹭飞翔、桃花盛开、鳜鱼肥美，一位渔翁在斜风细雨中悠然垂钓，不愿归去。词中展现了隐居生活的闲适自在，表达了对自由生活的向往。',
      keyPoints: [
        '这是一首词，不是诗（词牌名"渔歌子"）',
        '白鹭、桃花、鳜鱼描绘了江南春景',
        '青箬笠、绿蓑衣写渔翁的装束',
        '"斜风细雨不须归"是全词的点睛之笔',
        '表达对自由闲适的隐居生活的向往'
      ],
      vocabulary: [
        { word: '西塞山', pinyin: 'xī sài shān', meaning: '山名，在今浙江湖州' },
        { word: '白鹭', pinyin: 'bái lù', meaning: '一种白色的水鸟' },
        { word: '鳜鱼', pinyin: 'guì yú', meaning: '一种淡水鱼，肉质鲜美' },
        { word: '箬笠', pinyin: 'ruò lì', meaning: '用竹叶编成的斗笠（帽子）' },
        { word: '蓑衣', pinyin: 'suō yī', meaning: '用草或棕编成的雨衣' }
      ],
      moral: '这首词告诉我们，生活中最重要的是内心的自由和快乐。渔翁在斜风细雨中不愿归去，因为他享受着大自然的美好和心灵的自由。在忙碌的生活中，我们也应该学会放慢脚步，享受生活中的美好时刻。'
    },
    questions: [
      {
        id: 'q3055_1',
        question: '《渔歌子》是一首什么体裁的作品？',
        options: [
          { label: 'A', text: '诗' },
          { label: 'B', text: '词' },
          { label: 'C', text: '赋' },
          { label: 'D', text: '曲' }
        ],
        answer: 'B',
        explanation: '《渔歌子》是一首词，"渔歌子"是词牌名。词是古代的一种文学体裁，和诗有所不同，句子长短不一。'
      },
      {
        id: 'q3055_2',
        question: '"斜风细雨不须归"中的"不须归"是什么意思？',
        options: [
          { label: 'A', text: '不能回去' },
          { label: 'B', text: '不想回去' },
          { label: 'C', text: '不用回去，不愿回去' },
          { label: 'D', text: '回不去' }
        ],
        answer: 'C',
        explanation: '"不须归"是"不用回去"的意思，说明渔翁沉醉在美景和垂钓中，不愿意回到尘世中去。不是不能归，而是不愿归。'
      },
      {
        id: 'q3055_3',
        question: '词中描写了哪些颜色？',
        options: [
          { label: 'A', text: '只有白色' },
          { label: 'B', text: '白（鹭）、青（山/笠）、粉红（桃花）、绿（蓑衣/水）' },
          { label: 'C', text: '只有绿色' },
          { label: 'D', text: '只有红色' }
        ],
        answer: 'B',
        explanation: '词中有白鹭的白色、青山的青色、青箬笠、桃花的粉红色、绿蓑衣、流水的碧绿色，色彩丰富而和谐。'
      },
      {
        id: 'q3055_4',
        question: '这首词表达了作者什么样的生活态度？',
        options: [
          { label: 'A', text: '追求功名利禄' },
          { label: 'B', text: '向往自由闲适的隐居生活' },
          { label: 'C', text: '对战争的恐惧' },
          { label: 'D', text: '对城市的向往' }
        ],
        answer: 'B',
        explanation: '张志和在斜风细雨中悠然垂钓、不愿归去，表达了他对自由闲适的隐居生活的热爱和向往。'
      },
      {
        id: 'q3055_5',
        question: '"鳜鱼肥"说明是什么季节？',
        options: [
          { label: 'A', text: '冬天' },
          { label: 'B', text: '秋天' },
          { label: 'C', text: '春天' },
          { label: 'D', text: '夏天' }
        ],
        answer: 'C',
        explanation: '桃花盛开、鳜鱼正肥、白鹭飞翔，这些都是春天的景象。特别是桃花流水，更是典型的春景。'
      }
    ]
  }
];
