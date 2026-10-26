// 语文小霸王 - 三年级课文内容数据
// 每日一篇课文，每篇约10分钟阅读时间
// 难字标注拼音，课文后有讲解和阅读理解练习

const CONTENT_GRADE_3 = [
  // ==================== 第1课 ====================
  {
    id: 3001,
    title: '《卖火柴的小女孩》',
    category: 'classic',
    categoryLabel: '名著选段',
    grade: 3,
    day: 1,
    readingTime: 10,
    author: '安徒生',
    source: '《安徒生童话》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20poor%20little%20girl%20selling%20matches%20on%20snowy%20street%20at%20night,%20warm%20glow%20from%20matches,%20fairy%20tale%20illustration,%20emotional&image_size=landscape_4_3',
    text: `<p>天冷极了，下着雪，又快黑了。这是一年的最后一天——大年夜。在这又冷又黑的晚上，一个{乖|guāi}巧的小女孩，赤着脚在街上走着。她从家里出来的时候还穿着一双拖鞋，但是有什么用呢？那是一双很大的拖鞋——那么大，一向是她妈妈穿的。小女孩只好赤着脚走，一双小脚冻得红一块青一块的。</p>
<p>她的旧围裙里{兜|dōu}着许多火柴，手里还拿着一把。这一整天，谁也没买过她一根火柴，谁也没给过她一个硬币。可怜的小女孩！她又冷又饿，{哆|duō}{嗦|suo}地向前走。雪花落在她金黄的长头发上，那头发打成卷儿披在肩上，看上去很美丽。不过她没注意这些，每个窗子里都透出灯光来，街上飘着一股烤鹅的香味。</p>
<p>她在一座房子的墙角里坐下来，{蜷|quán}着腿缩成一团。她不敢回家，因为她没有卖掉一根火柴，没有挣到一个钱，爸爸一定会打她的。她的一双小手几乎冻{僵|jiāng}了。啊，哪怕一根小小的火柴，对她也是有好处的！她抽出一根，在墙上擦燃了。哧！火柴燃起来了，冒出{焰|yàn}来了！她把小手拢在火焰上，多么温暖多么明亮的火焰啊，简直像一支小小的{蜡|là}{烛|zhú}。</p>
<p>她又擦了一根。亮光落在墙上，那儿忽然变得像薄纱那么透明。她看到屋里桌上铺着雪白的台布，摆着精{致|zhì}的盘子和碗，肚子里填满了苹果和梅子的烤鹅正冒着香气。更妙的是，这只鹅从盘子里跳下来，背上插着刀和叉，摇摇摆摆地向这个穷苦的小女孩走来。</p>
<p>她又擦了一根火柴。这一回，她坐在美丽的圣诞树下，树上点着几千支明晃晃的{蜡|là}{烛|zhú}。她赶紧擦着了一大把火柴。奶奶出现在亮光里，是那么温和，那么{慈|cí}{祥|xiáng}。"奶奶！"小女孩叫起来，"啊！请把我带走吧！"奶奶把小女孩抱起来，搂在怀里。她们俩在光明和快乐中飞走了，越飞越高，飞到那没有寒冷、没有饥饿、也没有痛苦的地方去了。</p>
<p>第二天清晨，这个小女孩坐在墙角里，两{腮|sāi}通红，嘴上带着微笑——她死了，在旧年的最后一夜冻死了。新年的太阳升起来了，照在她小小的尸体上。小女孩手里还捏着一把火柴。人们说："她想给自己暖和一下……"谁也不知道她曾经看到过多么美丽的东西，她曾经多么快乐地跟着奶奶一起走向新年的幸福中去。</p>`,
    explanation: {
      summary: '这篇童话讲述了一个卖火柴的小女孩在大年夜的悲惨遭遇。她又冷又饿，却不敢回家。她一次次擦燃火柴，在火光中看到了温暖的火炉、丰盛的烤鹅、美丽的圣诞树和慈祥的奶奶。最后，她在美好的幻想中冻死在街头。',
      keyPoints: [
        '故事发生在大年夜，街上又冷又黑，小女孩赤着脚卖火柴',
        '小女孩每次擦燃火柴都看到不同的美好幻象：火炉、烤鹅、圣诞树、奶奶',
        '小女孩最终在美好的幻想中冻死了，嘴上带着微笑',
        '故事通过对比，展现了小女孩悲惨的命运，表达了对穷苦人民的同情'
      ],
      vocabulary: [
        { word: '哆嗦', pinyin: 'duō suo', meaning: '因寒冷或害怕而身体发抖' },
        { word: '蜷', pinyin: 'quán', meaning: '弯曲身体，缩成一团' },
        { word: '慈祥', pinyin: 'cí xiáng', meaning: '形容老年人温和善良的样子' },
        { word: '火焰', pinyin: 'huǒ yàn', meaning: '燃烧时发出的光和热' },
        { word: '精致', pinyin: 'jīng zhì', meaning: '精巧细致，做工很好' }
      ],
      moral: '这个故事让我们感受到旧社会穷苦孩子的悲惨生活，提醒我们要珍惜现在的幸福生活，同时也要关心和帮助身边需要帮助的人。'
    },
    questions: [
      {
        id: 'q3001_1',
        question: '故事发生在什么时候？',
        options: [
          { label: 'A', text: '大年初一的早晨' },
          { label: 'B', text: '大年夜的晚上' },
          { label: 'C', text: '中秋节的夜晚' },
          { label: 'D', text: '春天的一个下午' }
        ],
        answer: 'B',
        explanation: '课文开头写道："天冷极了，下着雪，又快黑了。这是一年的最后一天——大年夜。"'
      },
      {
        id: 'q3001_2',
        question: '小女孩擦燃第一根火柴后看到了什么？',
        options: [
          { label: 'A', text: '一只烤鹅' },
          { label: 'B', text: '一棵圣诞树' },
          { label: 'C', text: '温暖明亮的火焰' },
          { label: 'D', text: '慈祥的奶奶' }
        ],
        answer: 'C',
        explanation: '课文写道："火柴燃起来了，冒出火焰来了！她把小手拢在火焰上，多么温暖多么明亮的火焰啊。"'
      },
      {
        id: 'q3001_3',
        question: '小女孩为什么不敢回家？',
        options: [
          { label: 'A', text: '她迷路了找不到家' },
          { label: 'B', text: '她没有卖掉火柴，怕爸爸打她' },
          { label: 'C', text: '她不喜欢自己的家' },
          { label: 'D', text: '她想在外面看烟花' }
        ],
        answer: 'B',
        explanation: '课文写道："她不敢回家，因为她没有卖掉一根火柴，没有挣到一个钱，爸爸一定会打她的。"'
      },
      {
        id: 'q3001_4',
        question: '小女孩在火柴的亮光中没有看到下列哪一样东西？',
        options: [
          { label: 'A', text: '温暖的火炉' },
          { label: 'B', text: '丰盛的烤鹅' },
          { label: 'C', text: '美丽的圣诞树' },
          { label: 'D', text: '慈祥的奶奶' }
        ],
        answer: 'A',
        explanation: '课文中，小女孩看到了烤鹅、圣诞树和奶奶，但没有直接提到火炉。第一根火柴只看到了明亮的火焰。'
      },
      {
        id: 'q3001_5',
        question: '小女孩最终的命运是什么？',
        options: [
          { label: 'A', text: '她找到了奶奶，过上了幸福的生活' },
          { label: 'B', text: '她卖完了火柴，高兴地回家了' },
          { label: 'C', text: '她在美好的幻想中冻死在街头' },
          { label: 'D', text: '一位好心人收留了她' }
        ],
        answer: 'C',
        explanation: '课文最后写道："这个小女孩坐在墙角里，两腮通红，嘴上带着微笑——她死了，在旧年的最后一夜冻死了。"'
      }
    ]
  },

  // ==================== 第2课 ====================
  {
    id: 3002,
    title: '《守株待兔》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 2,
    readingTime: 10,
    author: '韩非子',
    source: '《韩非子》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20lazy%20farmer%20sitting%20by%20a%20tree%20stump%20waiting%20for%20rabbits,%20other%20farmers%20working%20in%20fields,%20cartoon%20fable%20illustration&image_size=landscape_4_3',
    text: `<p>宋国有一个农民，每天在田地里辛苦地劳作。他种了好几亩庄稼，春天播种，夏天{锄|chú}草，秋天收获，一年到头忙个不停。他的日子虽然不{富|fù}裕，但也过得安稳。</p>
<p>有一天，农民正在田里干{活|huó}。忽然，一只野兔从草丛里飞快地跑出来。兔子跑得太急了，一头撞在田边一个大树桩上，脖子折断了，当场就死了。农民高兴极了，白捡了一只又肥又大的兔子。那天晚上，他美美地吃了一顿兔肉。</p>
<p>从那以后，这个农民再也不想干活了。他扔下{锄|chú}头，再也不去田里除草、浇水了。他每天坐在那个大树桩旁边，眼睛直勾勾地盯着前方，等着再有一只兔子撞上来。他心想："只要兔子再来撞树桩，我就不用辛苦种地了。"</p>
<p>一天过去了，没有兔子来。两天过去了，还是没有兔子来。农民等了一天又一天，等了一月又一月，可再也没有一只兔子撞到树桩上。他的田地里长满了野草，庄稼全{荒|huāng}了。到了秋天，别人家的田里都是金黄的稻谷，他的田里却只有乱七八糟的杂草。</p>
<p>邻居们都笑话他，说："你这样傻等下去，不但等不到兔子，连地也种不好了！"可他根本不听，还是天天守在树桩旁边。最后，这个农民什么也没有等到，反而成了宋国人的笑{柄|bǐng}。这个故事告诉我们，不能把偶然发生的事情当成经常会发生的事。想要过上好日子，必须靠自己的辛勤劳动。</p>`,
    explanation: {
      summary: '这则成语故事讲的是宋国有一个农民，一只兔子撞在树桩上死了，他白白捡到一只兔子后就不再种地，天天守在树桩旁等兔子，结果再也没有兔子来，田地也荒废了。',
      keyPoints: [
        '农民偶然捡到一只撞树桩而死的兔子，这是小概率的偶然事件',
        '农民从此放弃种地，天天守在树桩旁等兔子，把偶然当成了必然',
        '结果田地荒废，一无所获，成了别人的笑柄',
        '故事讽刺了那些不劳而获、心存侥幸的人'
      ],
      vocabulary: [
        { word: '守株待兔', pinyin: 'shǒu zhū dài tù', meaning: '守着树桩等兔子，比喻不努力而存侥幸心理' },
        { word: '锄头', pinyin: 'chú tou', meaning: '一种用来除草松土的农具' },
        { word: '荒废', pinyin: 'huāng fèi', meaning: '不耕种，让田地长满杂草' },
        { word: '偶然', pinyin: 'ǒu rán', meaning: '不经常的，意想不到的' },
        { word: '侥幸', pinyin: 'jiǎo xìng', meaning: '由于偶然的原因而得到好处或免去不幸' }
      ],
      moral: '不能把偶然的事情当成必然，想要有收获就必须付出辛勤的劳动。不劳而获的想法是不可取的，天上不会掉馅饼。'
    },
    questions: [
      {
        id: 'q3002_1',
        question: '兔子是怎么死的？',
        options: [
          { label: 'A', text: '被农民用弓箭射死的' },
          { label: 'B', text: '被农民设的陷阱抓住的' },
          { label: 'C', text: '一头撞在树桩上，当场就死了' },
          { label: 'D', text: '生病死的' }
        ],
        answer: 'C',
        explanation: '课文写道："兔子跑得太急了，一头撞在田边一个大树桩上，脖子折断了，当场就死了。"'
      },
      {
        id: 'q3002_2',
        question: '捡到兔子后，农民做了什么决定？',
        options: [
          { label: 'A', text: '继续努力种地' },
          { label: 'B', text: '天天坐在树桩旁等兔子' },
          { label: 'C', text: '去山上打猎' },
          { label: 'D', text: '搬家到别的地方' }
        ],
        answer: 'B',
        explanation: '课文写道："他扔下锄头，再也不去田里了。他每天坐在那个大树桩旁边，等着再有一只兔子撞上来。"'
      },
      {
        id: 'q3002_3',
        question: '农民最后等到了兔子吗？',
        options: [
          { label: 'A', text: '等到了很多兔子' },
          { label: 'B', text: '等到了一只兔子' },
          { label: 'C', text: '再也没有等到兔子' },
          { label: 'D', text: '等到了一只野鸡' }
        ],
        answer: 'C',
        explanation: '课文写道："他等了一天又一天，等了一月又一月，可再也没有一只兔子撞到树桩上。"'
      },
      {
        id: 'q3002_4',
        question: '农民的田地最后变成了什么样？',
        options: [
          { label: 'A', text: '金黄的稻谷' },
          { label: 'B', text: '长满了野草，庄稼全荒了' },
          { label: 'C', text: '变成了果园' },
          { label: 'D', text: '种满了蔬菜' }
        ],
        answer: 'B',
        explanation: '课文写道："他的田地里长满了野草，庄稼全荒了。"他的田里只有乱七八糟的杂草。'
      },
      {
        id: 'q3002_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '兔子很笨，会自己撞到树上' },
          { label: 'B', text: '种地没有打猎赚钱' },
          { label: 'C', text: '不能把偶然当必然，要靠辛勤劳动才能有收获' },
          { label: 'D', text: '树桩旁边是捉兔子的好地方' }
        ],
        answer: 'C',
        explanation: '故事告诉我们，不能把偶然发生的事情当成经常会发生的事，想要过上好日子必须靠辛勤劳动。'
      }
    ]
  },

  // ==================== 第3课 ====================
  {
    id: 3003,
    title: '《赵州桥》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 3,
    day: 3,
    readingTime: 10,
    author: '佚名',
    source: '人教版三年级上册',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Zhaozhou%20Bridge%20over%20river%20with%20beautiful%20arches,%20traditional%20Chinese%20architecture,%20scenic%20landscape%20painting&image_size=landscape_4_3',
    text: `<p>河北省赵县的{洨|xiáo}河上，有一座世界闻名的石{拱|gǒng}桥——安济桥，又叫赵州桥。这座桥是{隋|suí}朝的石{匠|jiàng}李春设计和参加建造的，到现在已经有一千四百多年了。它是我国宝贵的历史文化{遗|yí}产。</p>
<p>赵州桥非常雄伟。桥长五十多米，有九米多宽，中间行车马，两旁走人。这么长的桥，全部用石头砌成，下面没有桥{墩|dūn}，只有一个{拱|gǒng}形的大桥洞，横跨在三十七米多宽的河面上。大桥洞顶上的左右两边，还各有两个拱形的小桥洞。平时，河水从大桥洞流过，发大水的时候，河水还可以从四个小桥洞流过。这种设计，在建桥史上是一个{创|chuàng}举。</p>
<p>这座桥不但坚固，而且美观。桥面两侧有石栏，栏板上{雕|diāo}刻着精美的图案：有的刻着两条相互{缠|chán}绕的龙，嘴里吐出美丽的水花；有的刻着两条飞龙，前爪相互抵着，各自回首遥望；还有的刻着双龙戏珠。所有的龙似乎都在游动，真像活了一样。</p>
<p>赵州桥表现了劳动人民的智慧和才干，是我国宝贵的历史文化{遗|yí}产。一千四百多年来，赵州桥经历了多次洪水和地震，但它依然{屹|yì}立不倒。这座古老的桥，至今还在为人们服务，每天有无数的行人和车辆从桥上经过。它的设计和建造水平，在当时的世界上是独一无二的。</p>`,
    explanation: {
      summary: '这篇课文介绍了赵州桥的位置、设计特点和艺术价值。赵州桥由隋朝石匠李春设计建造，距今已有一千四百多年。它是世界上最早的石拱桥之一，设计巧妙，坚固美观，体现了古代劳动人民的智慧和才干。',
      keyPoints: [
        '赵州桥位于河北省赵县的洨河上，又叫安济桥',
        '桥的设计特点：一个大桥洞加四个小桥洞，既节省石料又利于排洪',
        '桥面栏板上雕刻着精美的龙的图案，栩栩如生',
        '赵州桥是我国宝贵的历史文化遗产，体现了劳动人民的智慧'
      ],
      vocabulary: [
        { word: '雄伟', pinyin: 'xióng wěi', meaning: '形容建筑高大壮观，气势宏大' },
        { word: '坚固', pinyin: 'jiān gù', meaning: '结实牢固，不容易损坏' },
        { word: '拱形', pinyin: 'gǒng xíng', meaning: '弧形，像弓一样的形状' },
        { word: '雕刻', pinyin: 'diāo kè', meaning: '在石头、木头等材料上刻出花纹或图案' },
        { word: '遗产', pinyin: 'yí chǎn', meaning: '前人留下的宝贵财富' }
      ],
      moral: '赵州桥是我国古代劳动人民智慧的结晶，我们要为中华民族的伟大创造力感到自豪，同时也要保护好这些珍贵的历史文化遗产。'
    },
    questions: [
      {
        id: 'q3003_1',
        question: '赵州桥是谁设计建造的？',
        options: [
          { label: 'A', text: '唐朝的工匠张三' },
          { label: 'B', text: '隋朝的石匠李春' },
          { label: 'C', text: '宋朝的建筑师王五' },
          { label: 'D', text: '明朝的工程师赵六' }
        ],
        answer: 'B',
        explanation: '课文写道："这座桥是隋朝的石匠李春设计和参加建造的。"'
      },
      {
        id: 'q3003_2',
        question: '赵州桥在建桥史上的创举是什么？',
        options: [
          { label: 'A', text: '用木头建造' },
          { label: 'B', text: '桥下没有桥墩，大桥洞顶上还有小桥洞' },
          { label: 'C', text: '桥面非常宽' },
          { label: 'D', text: '桥上刻满了花纹' }
        ],
        answer: 'B',
        explanation: '课文写道："下面没有桥墩，只有一个拱形的大桥洞……大桥洞顶上的左右两边，还各有两个拱形的小桥洞。这种设计，在建桥史上是一个创举。"'
      },
      {
        id: 'q3003_3',
        question: '赵州桥栏板上雕刻的图案是什么？',
        options: [
          { label: 'A', text: '花鸟鱼虫' },
          { label: 'B', text: '各种龙的图案' },
          { label: 'C', text: '山水风景' },
          { label: 'D', text: '人物故事' }
        ],
        answer: 'B',
        explanation: '课文写道："栏板上雕刻着精美的图案：有的刻着两条相互缠绕的龙……有的刻着两条飞龙……还有的刻着双龙戏珠。"'
      },
      {
        id: 'q3003_4',
        question: '赵州桥到现在大约有多少年的历史了？',
        options: [
          { label: 'A', text: '五百年' },
          { label: 'B', text: '八百年' },
          { label: 'C', text: '一千四百多年' },
          { label: 'D', text: '两千年' }
        ],
        answer: 'C',
        explanation: '课文写道："到现在已经有一千四百多年了。"'
      },
      {
        id: 'q3003_5',
        question: '下面哪一项不是赵州桥的特点？',
        options: [
          { label: 'A', text: '雄伟' },
          { label: 'B', text: '坚固' },
          { label: 'C', text: '美观' },
          { label: 'D', text: '用木头建造' }
        ],
        answer: 'D',
        explanation: '赵州桥全部用石头砌成，不是用木头建造的。课文中提到了它雄伟、坚固和美观的特点。'
      }
    ]
  },

  // ==================== 第4课 ====================
  {
    id: 3004,
    title: '《亡羊补牢》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 4,
    readingTime: 10,
    author: '刘向',
    source: '《战国策》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20shepherd%20repairing%20his%20sheep%20pen%20at%20night%20after%20losing%20a%20sheep,%20moonlit%20farm%20scene,%20cartoon%20fable%20illustration&image_size=landscape_4_3',
    text: `<p>从前，有一个养羊的人，他在山上养了一大群羊。每天早上，他把羊赶到山坡上吃草，傍晚再把它们赶回羊圈。他的羊又肥又壮，日子过得还不错。</p>
<p>有一天早上，他去放羊，发现少了一只。他仔细一看，原来羊圈破了个{窟|kū}{窿|long}，夜里狼从{窟|kū}{窿|long}里钻进去，把一只羊{叼|diāo}走了。邻居看见了，劝他说："赶快把羊圈修一修吧，堵上那个{窟|kū}{窿|long}，不然狼还会来的。"他说："羊已经丢了，还修羊圈干什么呢？"他没有听邻居的劝告。</p>
<p>第二天早上，他去放羊，发现又少了一只。原来狼又从那个{窟|kū}{窿|long}里钻进去，又{叼|diāo}走了一只羊。他很{后|hòu}{悔|huǐ}，心想："要是我昨天听邻居的话，就不会再丢一只羊了。"</p>
<p>这回，他赶紧找来木板和绳子，把羊圈的{窟|kū}{窿|long}堵得严严实实的，还在旁边加了几根结实的木桩。从此以后，他的羊再也没有丢过。他逢人就说："多亏了邻居的提醒，不然我的羊就全被狼吃了。"</p>
<p>这个故事在《{战|zhàn}国策》中有记载，后来人们用"亡羊补牢"这个成语来比喻出了问题以后想办法补救，免得继续受损失。虽然羊已经丢了，但及时修补羊圈还不算晚。如果他一直不修补，损失就会越来越大。</p>`,
    explanation: {
      summary: '这则成语故事讲的是一个养羊人丢了羊之后，一开始不听邻居的劝告修补羊圈，结果又丢了一只羊。后来他及时修补了羊圈，再也没有丢过羊。故事说明出了问题要及时补救，亡羊补牢，为时未晚。',
      keyPoints: [
        '养羊人的羊圈破了个窟窿，狼从窟窿里钻进去叼走了羊',
        '邻居劝他修羊圈，他不听，结果又丢了一只羊',
        '他后悔了，赶紧修好羊圈，从此再也没有丢羊',
        '"亡羊补牢"意思是丢了羊之后修补羊圈，比喻出了问题及时补救'
      ],
      vocabulary: [
        { word: '亡羊补牢', pinyin: 'wáng yáng bǔ láo', meaning: '丢了羊再修羊圈，比喻出了问题及时补救' },
        { word: '窟窿', pinyin: 'kū long', meaning: '洞，破了的口子' },
        { word: '叼', pinyin: 'diāo', meaning: '用嘴咬住、衔住' },
        { word: '后悔', pinyin: 'hòu huǐ', meaning: '事后觉得不应该，感到懊悔' },
        { word: '劝告', pinyin: 'quàn gào', meaning: '好意地告诉别人应该怎么做' }
      ],
      moral: '出了问题并不可怕，可怕的是明知有问题却不及时改正。亡羊补牢，为时未晚。只要及时采取补救措施，就能避免更大的损失。'
    },
    questions: [
      {
        id: 'q3004_1',
        question: '羊是怎么丢的？',
        options: [
          { label: 'A', text: '羊自己跑丢了' },
          { label: 'B', text: '狼从羊圈的窟窿里钻进去叼走的' },
          { label: 'C', text: '被别人偷走了' },
          { label: 'D', text: '羊掉到河里淹死了' }
        ],
        answer: 'B',
        explanation: '课文写道："原来羊圈破了个窟窿，夜里狼从窟窿里钻进去，把一只羊叼走了。"'
      },
      {
        id: 'q3004_2',
        question: '邻居劝养羊人做什么？',
        options: [
          { label: 'A', text: '多养几只羊' },
          { label: 'B', text: '赶快把羊圈修一修' },
          { label: 'C', text: '搬到别的地方去住' },
          { label: 'D', text: '养一条狗来看门' }
        ],
        answer: 'B',
        explanation: '课文写道："邻居看见了，劝他说：\'赶快把羊圈修一修吧，堵上那个窟窿。\'"'
      },
      {
        id: 'q3004_3',
        question: '养羊人一开始为什么不修羊圈？',
        options: [
          { label: 'A', text: '他太忙了没有时间' },
          { label: 'B', text: '他觉得羊已经丢了，修也没用' },
          { label: 'C', text: '他找不到修理的材料' },
          { label: 'D', text: '他觉得狼不会再来' }
        ],
        answer: 'B',
        explanation: '课文写道："他说：\'羊已经丢了，还修羊圈干什么呢？\'他没有听邻居的劝告。"'
      },
      {
        id: 'q3004_4',
        question: '养羊人最后修好羊圈后，结果怎样？',
        options: [
          { label: 'A', text: '又丢了好几只羊' },
          { label: 'B', text: '羊再也没有丢过' },
          { label: 'C', text: '狼改从别的地方进来了' },
          { label: 'D', text: '羊圈又破了' }
        ],
        answer: 'B',
        explanation: '课文写道："从此以后，他的羊再也没有丢过。"'
      },
      {
        id: 'q3004_5',
        question: '"亡羊补牢"这个成语告诉我们什么道理？',
        options: [
          { label: 'A', text: '养羊很危险' },
          { label: 'B', text: '要听邻居的话' },
          { label: 'C', text: '出了问题要及时补救，免得继续受损失' },
          { label: 'D', text: '狼非常狡猾' }
        ],
        answer: 'C',
        explanation: '"亡羊补牢"比喻出了问题以后想办法补救，免得继续受损失。故事告诉我们及时改正错误还来得及。'
      }
    ]
  },

  // ==================== 第5课 ====================
  {
    id: 3005,
    title: '《花钟》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 3,
    day: 5,
    readingTime: 10,
    author: '佚名',
    source: '人教版三年级上册',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=various%20colorful%20flowers%20blooming%20at%20different%20times%20forming%20a%20natural%20clock,%20botanical%20garden,%20educational%20illustration&image_size=landscape_4_3',
    text: `<p>鲜花朵朵，争奇斗{艳|yàn}，芬芳迷人。要是我们留心观察，就会发现，不同的花开放的时间是不同的。凌晨四点，牵牛花吹起了紫色的小喇叭；五点左右，{艳|yàn}丽的{蔷|qiáng}{薇|wēi}绽开了笑脸。</p>
<p>七点，睡莲从梦中醒来；中午十二点左右，午时花开花了；下午三点，万寿菊欣然怒放；傍晚六点，烟草花在暮色中{苏|sū}醒；月光花在七点左右舒展开自己的花瓣；夜来香在晚上八点开花；{昙|tán}花却在九点左右含笑一现……</p>
<p>不同的植物为什么开花的时间不同呢？原来，植物开花的时间，与温度、湿度、光照有着密切的关系。比如，{昙|tán}花的花瓣又大又娇嫩，白天阳光强，气温高，空气干燥，要是在白天开花，就有被灼伤的危险。它适应了晚上九点左右的温度和湿度，到了那时，便悄悄绽开淡雅的花{蕾|lěi}，向人们展示美丽的笑脸。</p>
<p>还有的花，需要昆虫传播花粉才能结出种子，它们开花的时间往往跟昆虫活动的时间相{吻|wěn}合。比如，{蔷|qiáng}{薇|wēi}花在五点左右开放，那时候正是蜜蜂出来采蜜的时间。有一种花在深夜开放，那是因为有一种小蛾子在夜间活动。</p>
<p>一位植物学家曾有意把不同时间开放的花种在一起，把花圃修建得像钟面一样，组成花的"时钟"。这些花在二十四小时内依次开放，你只要看看什么花开了，就知道大致是几点钟。这是不是很有趣？大自然真是一座奇妙的时钟啊！</p>`,
    explanation: {
      summary: '这篇课文介绍了不同花朵在一天中不同时间开放的现象，以及造成这种现象的原因。植物学家利用这一特点，把不同时间开放的花种在一起，组成了一座有趣的"花钟"。',
      keyPoints: [
        '不同的花在不同的时间开放：牵牛花凌晨四点开，蔷薇五点开，睡莲七点开等',
        '花开时间与温度、湿度、光照有密切关系',
        '有的花开放时间与昆虫活动时间相吻合',
        '植物学家把不同时间开放的花种在一起，组成"花钟"'
      ],
      vocabulary: [
        { word: '争奇斗艳', pinyin: 'zhēng qí dòu yàn', meaning: '形容百花竞放，十分美丽' },
        { word: '绽开', pinyin: 'zhàn kāi', meaning: '花朵开放，花瓣展开' },
        { word: '暮色', pinyin: 'mù sè', meaning: '傍晚昏暗的天色' },
        { word: '花蕾', pinyin: 'huā lěi', meaning: '没有开放的花骨朵' },
        { word: '吻合', pinyin: 'wěn hé', meaning: '完全符合，一致' }
      ],
      moral: '大自然中藏着许多有趣的奥秘，只要我们留心观察，就能发现这些规律。做生活的有心人，处处皆学问。'
    },
    questions: [
      {
        id: 'q3005_1',
        question: '牵牛花在什么时候开放？',
        options: [
          { label: 'A', text: '凌晨四点' },
          { label: 'B', text: '中午十二点' },
          { label: 'C', text: '下午三点' },
          { label: 'D', text: '晚上八点' }
        ],
        answer: 'A',
        explanation: '课文写道："凌晨四点，牵牛花吹起了紫色的小喇叭。"'
      },
      {
        id: 'q3005_2',
        question: '植物开花的时间与什么有关系？',
        options: [
          { label: 'A', text: '土壤的颜色' },
          { label: 'B', text: '温度、湿度、光照' },
          { label: 'C', text: '花盆的大小' },
          { label: 'D', text: '浇水的多少' }
        ],
        answer: 'B',
        explanation: '课文写道："植物开花的时间，与温度、湿度、光照有着密切的关系。"'
      },
      {
        id: 'q3005_3',
        question: '昙花为什么在晚上开放？',
        options: [
          { label: 'A', text: '昙花喜欢黑暗' },
          { label: 'B', text: '白天阳光强、气温高，花朵有被灼伤的危险' },
          { label: 'C', text: '昙花只在雨天开放' },
          { label: 'D', text: '昙花需要月光才能开放' }
        ],
        answer: 'B',
        explanation: '课文写道："白天阳光强，气温高，空气干燥，要是在白天开花，就有被灼伤的危险。"'
      },
      {
        id: 'q3005_4',
        question: '什么是"花钟"？',
        options: [
          { label: 'A', text: '一种用花做的钟表' },
          { label: 'B', text: '把不同时间开放的花种在一起，根据花开判断时间' },
          { label: 'C', text: '每朵花只能开一个小时' },
          { label: 'D', text: '用花来计时的工具' }
        ],
        answer: 'B',
        explanation: '课文写道："一位植物学家曾有意把不同时间开放的花种在一起，组成花的\'时钟\'。你只要看看什么花开了，就知道大致是几点钟。"'
      },
      {
        id: 'q3005_5',
        question: '这篇课文告诉我们要怎样才能发现大自然的奥秘？',
        options: [
          { label: 'A', text: '只要看课外书就行' },
          { label: 'B', text: '留心观察' },
          { label: 'C', text: '问老师就可以了' },
          { label: 'D', text: '等到长大自然就知道了' }
        ],
        answer: 'B',
        explanation: '课文开头就说："要是我们留心观察，就会发现，不同的花开放的时间是不同的。"告诉我们观察的重要性。'
      }
    ]
  },

  // ==================== 第6课 ====================
  {
    id: 3006,
    title: '《蜜蜂》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 3,
    day: 6,
    readingTime: 10,
    author: '法布尔',
    source: '人教版三年级上册',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cartoon%20bees%20flying%20in%20a%20garden%20collecting%20honey,%20scientific%20observation%20scene,%20children%20educational%20illustration&image_size=landscape_4_3',
    text: `<p>听说蜜蜂有{辨|biàn}认方向的能力，无论飞到哪里，它总是可以回到原处。我想做个实验来{验|yàn}证一下。法国昆虫学家{法|fǎ}{布|bù}{尔|ěr}曾经做过类似的实验，我很想亲自试一试。</p>
<p>一天，我在我家草料棚的蜂窝里捉了一些蜜蜂，放在纸袋里。我叫小女儿在蜂窝旁等着，自己带着蜜蜂，走了四公里路。我打开纸袋，在蜜蜂身上做了白色记号，然后把它们放了出来。这时候起风了，蜜蜂飞得很低，几乎要触到地面了。我想，它们大概怎么也找不到家了。</p>
<p>我回到家，小女儿冲过来喊道："有两只蜜蜂回来了！它们两点四十分回到蜂窝的，满身都沾着花粉呢。"也就是说，它们在不到三刻钟的时间里，飞了四公里路，还采了花粉。</p>
<p>第二天，我{检|jiǎn}查蜂窝，发现又有十五只蜜蜂回来了。这样，二十只蜜蜂中，有十七只准确无误地回到了家。尽管它们逆风而飞，沿途都是一些陌生的景物，但它们确确实实飞回来了。</p>
<p>蜜蜂靠的不是超常的{记|jì}忆力，而是一种我无法解释的本能。它们具有一种天生的方{向|xiàng}感，能够在陌生的地方找到回家的路。这个实验让我对蜜蜂的能力有了新的认识。大自然中还有很多奥秘等待我们去探索和发现。</p>`,
    explanation: {
      summary: '这篇课文讲述了作者做实验验证蜜蜂是否有辨认方向能力的过程。他把蜜蜂带到四公里外放飞，结果大部分蜜蜂都成功飞回了家，证明蜜蜂具有辨认方向的本能。',
      keyPoints: [
        '作者做了一个实验：捉蜜蜂、做记号、带到远处放飞',
        '二十只蜜蜂中有十七只成功飞回了家',
        '蜜蜂飞回来的时候是逆风飞行，经过陌生的环境',
        '蜜蜂靠的是一种天生的辨认方向的本能'
      ],
      vocabulary: [
        { word: '辨认', pinyin: 'biàn rèn', meaning: '根据特点加以区分，做出判断' },
        { word: '验证', pinyin: 'yàn zhèng', meaning: '通过实验来检验是否正确' },
        { word: '大概', pinyin: 'dà gài', meaning: '大致，差不多' },
        { word: '准确无误', pinyin: 'zhǔn què wú wù', meaning: '完全正确，没有差错' },
        { word: '本能', pinyin: 'běn néng', meaning: '天生就会的能力，不需要学习' }
      ],
      moral: '科学实验需要亲自动手去做才能得出结论。大自然中有很多神奇的现象，我们要像法布尔一样，做一个善于观察、勤于思考的人。'
    },
    questions: [
      {
        id: 'q3006_1',
        question: '作者做这个实验的目的是什么？',
        options: [
          { label: 'A', text: '看看蜜蜂能不能采蜜' },
          { label: 'B', text: '验证蜜蜂是否有辨认方向的能力' },
          { label: 'C', text: '测试蜜蜂能飞多远' },
          { label: 'D', text: '教蜜蜂认路' }
        ],
        answer: 'B',
        explanation: '课文开头写道："听说蜜蜂有辨认方向的能力……我想做个实验来验证一下。"'
      },
      {
        id: 'q3006_2',
        question: '作者把蜜蜂带到了多远的地方放飞？',
        options: [
          { label: 'A', text: '一公里' },
          { label: 'B', text: '两公里' },
          { label: 'C', text: '四公里' },
          { label: 'D', text: '十公里' }
        ],
        answer: 'C',
        explanation: '课文写道："自己带着蜜蜂，走了四公里路。"蜜蜂在四公里外被放飞。'
      },
      {
        id: 'q3006_3',
        question: '二十只蜜蜂中有多少只成功飞回了家？',
        options: [
          { label: 'A', text: '十只' },
          { label: 'B', text: '十五只' },
          { label: 'C', text: '十七只' },
          { label: 'D', text: '二十只' }
        ],
        answer: 'C',
        explanation: '课文写道："这样，二十只蜜蜂中，有十七只准确无误地回到了家。"'
      },
      {
        id: 'q3006_4',
        question: '蜜蜂是靠什么找到回家的路的？',
        options: [
          { label: 'A', text: '超常的记忆力' },
          { label: 'B', text: '别人给它们带路' },
          { label: 'C', text: '一种天生的辨认方向的本能' },
          { label: 'D', text: '跟着其他动物走' }
        ],
        answer: 'C',
        explanation: '课文写道："蜜蜂靠的不是超常的记忆力，而是一种我无法解释的本能。"'
      },
      {
        id: 'q3006_5',
        question: '这个实验告诉我们什么？',
        options: [
          { label: 'A', text: '蜜蜂比人聪明' },
          { label: 'B', text: '蜜蜂不应该被捉来做实验' },
          { label: 'C', text: '大自然中有很多奥秘，需要我们亲自观察和实验来发现' },
          { label: 'D', text: '所有的昆虫都能辨认方向' }
        ],
        answer: 'C',
        explanation: '课文最后说："大自然中还有很多奥秘等待我们去探索和发现。"告诉我们科学需要观察和实验。'
      }
    ]
  },

  // ==================== 第7课 ====================
  {
    id: 3007,
    title: '《翠鸟》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 3,
    day: 7,
    readingTime: 10,
    author: '佚名',
    source: '人教版三年级上册',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20beautiful%20kingfisher%20bird%20diving%20into%20water%20to%20catch%20fish,%20riverside%20with%20reeds,%20nature%20illustration&image_size=landscape_4_3',
    text: `<p>翠鸟喜欢停在水边的{苇|wěi}{秆|gǎn}上，一双红色的小爪子紧紧地抓住{苇|wěi}{秆|gǎn}。它的颜色非常鲜艳。头上的羽毛像{橄|gǎn}{榄|lǎn}色的头巾，绣满了翠绿色的花{纹|wén}。背上的羽毛像浅绿色的外衣。腹部的羽毛像赤{褐|hè}色的衬衫。</p>
<p>它小巧{玲|líng}{珑|lóng}，一双透亮灵活的眼睛下面，长着一张细长的嘴。翠鸟鸣声清脆，爱贴着水面疾飞。一眨眼，它又轻轻地停在{苇|wěi}{秆|gǎn}上了。</p>
<p>翠鸟{蹬|dēng}开{苇|wěi}{秆|gǎn}，像箭一样飞过去，{叼|diāo}起小鱼，贴着水面往远处飞走了。只有{苇|wěi}{秆|gǎn}还在摇晃，水波还在荡{漾|yàng}。翠鸟捕鱼的动作非常迅速，从发现小鱼到抓住小鱼，整个过程不到一秒钟。</p>
<p>我们真想捉一只翠鸟来养。可是老渔翁跟我们说："孩子们，你们知道翠鸟的家在哪里吗？它就在那条小溪的石壁上。沿着小溪上去，很陡的石壁上有一个小洞，那就是翠鸟的家。可是那么陡的石壁，你们怎么上去呢？还是打消这个{念|niàn}头吧。"</p>
<p>我们听了老渔翁的话，打消了捉翠鸟的{念|niàn}头。翠鸟那么可爱，就让它自由自在地生活在大自然中吧。我们远远地看着它停在{苇|wěi}{秆|gǎn}上，欣赏它美丽的羽毛，听它清脆的叫声，心里已经很满足了。</p>`,
    explanation: {
      summary: '这篇课文描写了翠鸟的外形特点和捕鱼时的敏捷动作。翠鸟颜色鲜艳，小巧玲珑，捕鱼速度极快。孩子们想捉翠鸟来养，但听了老渔翁的话后，决定让翠鸟自由地生活在大自然中。',
      keyPoints: [
        '翠鸟外形特点：颜色鲜艳，头上的羽毛像橄榄色头巾，背上的羽毛像浅绿色外衣',
        '翠鸟捕鱼动作：蹬开苇秆，像箭一样飞过去，叼起小鱼',
        '翠鸟的家在陡峭的石壁上的小洞里',
        '最后孩子们决定不捉翠鸟，让它自由生活在大自然中'
      ],
      vocabulary: [
        { word: '鲜艳', pinyin: 'xiān yàn', meaning: '颜色明亮好看' },
        { word: '小巧玲珑', pinyin: 'xiǎo qiǎo líng lóng', meaning: '形容小而精巧细致' },
        { word: '疾飞', pinyin: 'jí fēi', meaning: '快速地飞行' },
        { word: '荡漾', pinyin: 'dàng yàng', meaning: '水面一起一伏地波动' },
        { word: '清脆', pinyin: 'qīng cuì', meaning: '声音清亮好听' }
      ],
      moral: '翠鸟是大自然中美丽的生灵，我们应该爱护动物，让它们自由自在地生活在大自然中，而不是把它们关在笼子里。保护动物就是保护我们美丽的家园。'
    },
    questions: [
      {
        id: 'q3007_1',
        question: '翠鸟头上的羽毛像什么？',
        options: [
          { label: 'A', text: '像红色的帽子' },
          { label: 'B', text: '像橄榄色的头巾' },
          { label: 'C', text: '像金色的王冠' },
          { label: 'D', text: '像白色的围巾' }
        ],
        answer: 'B',
        explanation: '课文写道："头上的羽毛像橄榄色的头巾，绣满了翠绿色的花纹。"'
      },
      {
        id: 'q3007_2',
        question: '翠鸟是怎样捕鱼的？',
        options: [
          { label: 'A', text: '站在水里等鱼游过来' },
          { label: 'B', text: '用爪子在水里抓鱼' },
          { label: 'C', text: '蹬开苇秆，像箭一样飞过去，叼起小鱼' },
          { label: 'D', text: '潜到水下追鱼' }
        ],
        answer: 'C',
        explanation: '课文写道："翠鸟蹬开苇秆，像箭一样飞过去，叼起小鱼，贴着水面往远处飞走了。"'
      },
      {
        id: 'q3007_3',
        question: '翠鸟的家在哪里？',
        options: [
          { label: 'A', text: '大树上的鸟窝里' },
          { label: 'B', text: '小溪边的草丛中' },
          { label: 'C', text: '陡峭的石壁上的小洞里' },
          { label: 'D', text: '芦苇丛中' }
        ],
        answer: 'C',
        explanation: '课文写道："沿着小溪上去，很陡的石壁上有一个小洞，那就是翠鸟的家。"'
      },
      {
        id: 'q3007_4',
        question: '孩子们最后有没有捉翠鸟？为什么？',
        options: [
          { label: 'A', text: '捉到了一只翠鸟' },
          { label: 'B', text: '没有捉，因为石壁太陡上不去' },
          { label: 'C', text: '捉到了又放了' },
          { label: 'D', text: '没有捉到，因为翠鸟飞走了' }
        ],
        answer: 'B',
        explanation: '课文写道："可是那么陡的石壁，你们怎么上去呢？还是打消这个念头吧。"孩子们听了老渔翁的话，打消了捉翠鸟的念头。'
      },
      {
        id: 'q3007_5',
        question: '课文告诉我们应该怎样对待动物？',
        options: [
          { label: 'A', text: '捉回家养起来' },
          { label: 'B', text: '让它们自由自在地生活在大自然中' },
          { label: 'C', text: '远远地躲开它们' },
          { label: 'D', text: '喂它们吃好吃的' }
        ],
        answer: 'B',
        explanation: '课文最后说："翠鸟那么可爱，就让它自由自在地生活在大自然中吧。"告诉我们要爱护动物，保护自然。'
      }
    ]
  },

  // ==================== 第8课 ====================
  {
    id: 3008,
    title: '《燕子专列》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 3,
    day: 8,
    readingTime: 10,
    author: '佚名',
    source: '人教版三年级下册',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=people%20carefully%20rescuing%20swallows%20in%20snowy%20winter,%20train%20in%20background,%20heartwarming%20children%20illustration&image_size=landscape_4_3',
    text: `<p>有一年春天，在{欧|ōu}洲{瑞|ruì}士的一个地方，气温{骤|zhòu}降，风雪不止。所有的昆虫都冻死了，燕子经过长途{跋|bá}{涉|shè}，已经非常疲劳，再加上找不到食物，{饥|jī}寒交迫，{濒|bīn}临死亡。</p>
<p>瑞士政府知道了这个情况，决定用火车把这些燕子送到温暖的地方去。于是，政府通过电视和广播呼吁人们立即行动起来，寻找冻僵的燕子，把它们送到火车站附近的{站|zhàn}台上。</p>
<p>听到消息后，居民们纷纷走出家门，冒着严寒，顶着满天飞舞的{皑|ái}皑大雪，四处寻找冻僵的燕子。一个叫{贝|bèi}蒂的小姑娘，一个人就救护了十几只燕子。她的脸冻得通红，手也冻{僵|jiāng}了，但她一点也不在乎。她用自己温暖的小手捧着燕子，用自己的体温帮燕子取暖。</p>
<p>人们把找到的燕子小心翼翼地放进铺着干草的箱子里，送到火车站。一列漂亮的空调火车已经停在了站台上，车厢里温暖舒适。工作人员把燕子一只只轻轻放进车厢，还准备了充足的食物和水。</p>
<p>列车开动了，载着燕子驶向温暖的地方。燕子在车厢里叽叽喳喳地叫着，好像在感谢这些好心的人们。这趟特殊的列车，被人们称为"燕子专列"。这件事告诉我们，人和动物是朋友，当动物遇到困难的时候，我们应该伸出援手去帮助它们。爱护动物就是爱护我们的家园。</p>`,
    explanation: {
      summary: '这篇课文讲述了瑞士人民在寒冷的冬天救助冻僵的燕子的感人故事。气温骤降，燕子濒临死亡，政府用火车把它们送到温暖的地方。人们纷纷走出家门寻找燕子，其中小姑娘贝蒂一个人就救护了十几只。',
      keyPoints: [
        '瑞士春天突然降温，风雪不止，燕子找不到食物，濒临死亡',
        '政府决定用火车送燕子去温暖的地方，呼吁人们寻找冻僵的燕子',
        '人们冒着严寒四处寻找燕子，小姑娘贝蒂救护了十几只',
        '燕子被送上温暖的火车，这趟列车被称为"燕子专列"'
      ],
      vocabulary: [
        { word: '跋涉', pinyin: 'bá shè', meaning: '爬山涉水，形容旅途艰苦' },
        { word: '濒临', pinyin: 'bīn lín', meaning: '接近，面临' },
        { word: '呼吁', pinyin: 'hū yù', meaning: '向大家提出请求，希望得到支持和帮助' },
        { word: '饥寒交迫', pinyin: 'jī hán jiāo pò', meaning: '又饿又冷，形容生活极度困难' },
        { word: '小心翼翼', pinyin: 'xiǎo xīn yì yì', meaning: '非常小心，丝毫不敢疏忽' }
      ],
      moral: '人和动物是朋友，当动物遇到困难时，我们应该伸出援手。爱护动物就是爱护我们的家园，每个人都可以为保护动物做出贡献。'
    },
    questions: [
      {
        id: 'q3008_1',
        question: '燕子遇到了什么困难？',
        options: [
          { label: 'A', text: '找不到回家的路' },
          { label: 'B', text: '被猎人追赶' },
          { label: 'C', text: '气温骤降，找不到食物，饥寒交迫' },
          { label: 'D', text: '翅膀受了伤' }
        ],
        answer: 'C',
        explanation: '课文写道："气温骤降，风雪不止。所有的昆虫都冻死了，燕子……饥寒交迫，濒临死亡。"'
      },
      {
        id: 'q3008_2',
        question: '瑞士政府采取了什么措施来帮助燕子？',
        options: [
          { label: 'A', text: '给燕子搭建临时鸟窝' },
          { label: 'B', text: '用火车把燕子送到温暖的地方' },
          { label: 'C', text: '在田野里撒食物' },
          { label: 'D', text: '建造一个大暖房' }
        ],
        answer: 'B',
        explanation: '课文写道："瑞士政府知道了这个情况，决定用火车把这些燕子送到温暖的地方去。"'
      },
      {
        id: 'q3008_3',
        question: '贝蒂是怎样帮助燕子的？',
        options: [
          { label: 'A', text: '她给燕子搭了一个窝' },
          { label: 'B', text: '她一个人救护了十几只燕子，用体温帮燕子取暖' },
          { label: 'C', text: '她把燕子带回了家养' },
          { label: 'D', text: '她给燕子喂了很多食物' }
        ],
        answer: 'B',
        explanation: '课文写道："一个叫贝蒂的小姑娘，一个人就救护了十几只燕子。""她用自己温暖的小手捧着燕子，用自己的体温帮燕子取暖。"'
      },
      {
        id: 'q3008_4',
        question: '运送燕子的列车被称为什么？',
        options: [
          { label: 'A', text: '爱心专列' },
          { label: 'B', text: '燕子专列' },
          { label: 'C', text: '春天专列' },
          { label: 'D', text: '动物专列' }
        ],
        answer: 'B',
        explanation: '课文写道："这趟特殊的列车，被人们称为\'燕子专列\'。"'
      },
      {
        id: 'q3008_5',
        question: '这个故事表达了什么主题？',
        options: [
          { label: 'A', text: '瑞士的冬天很冷' },
          { label: 'B', text: '燕子是一种候鸟' },
          { label: 'C', text: '人和动物是朋友，我们要爱护动物' },
          { label: 'D', text: '火车是最好的交通工具' }
        ],
        answer: 'C',
        explanation: '课文最后说："人和动物是朋友，当动物遇到困难的时候，我们应该伸出援手去帮助它们。"'
      }
    ]
  },

  // ==================== 第9课 ====================
  {
    id: 3009,
    title: '《九月九日忆山东兄弟》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 9,
    readingTime: 10,
    author: '王维',
    source: '唐诗',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20lonely%20traveler%20thinking%20of%20family%20during%20Double%20Ninth%20Festival,%20chrysanthemums%20and%20mountain%20view,%20Chinese%20painting&image_size=landscape_4_3',
    text: `<p>{王|wáng}{维|wéi}是{唐|táng}朝著名的大诗人，他多才多艺，既能写诗，又擅长画画和音乐。王维十七岁的时候就离开了家乡，一个人到长安求学。那年的九月九日是{重|chóng}阳节，他独自一人身在{异|yì}乡，非常想念远方的家人，于是写下了这首感人至深的诗。</p>
<p>独在{异|yì}乡为{异|yì}客，每逢{佳|jiā}节倍思亲。遥知兄弟登高处，遍插{茱|zhū}{萸|yú}少一人。</p>
<p>"独在异乡为异客"——一个"独"字，一个"异"字，写出了诗人孤独一人身处他乡的感受。"每逢佳节倍思亲"——"倍"字用得特别好，说明平时就想念亲人，到了节日就更加想念了。这句话后来成了千古名句，每当过节的时候，人们都会想起这句诗。</p>
<p>"遥知兄弟登高处"——诗人想象远方的兄弟们正在登高望远。重阳节有登高的习俗，据说登高可以{避|bì}灾祈福。"遍插茱萸少一人"——兄弟们头上都插着{茱|zhū}{萸|yú}，却发现少了一个人——那就是远在他乡的王维。这一句通过兄弟的视角来写自己的{思|sī}念，非常巧妙。</p>
<p>这首诗虽然只有短短四句，却把游子在节日里对亲人的深深思念表达得淋漓尽致。"每逢佳节倍思亲"这句诗传唱了一千多年，至今仍然是中国人表达思乡之情最常用的诗句。无论是过年过节，还是身在远方，人们都会想起这首诗，想起远方的亲人。</p>`,
    explanation: {
      summary: '这首诗是唐代诗人王维十七岁时在长安写下的。九月九日重阳节，他独自一人在外，非常想念家乡的亲人。诗中"每逢佳节倍思亲"成了千古名句，表达了游子在节日对亲人的深深思念。',
      keyPoints: [
        '王维十七岁时离开家乡到长安，重阳节写下此诗',
        '"独在异乡为异客"写出了孤独和思念之情',
        '"每逢佳节倍思亲"成为千古名句，传唱至今',
        '诗的后两句从兄弟的角度来写自己的思念，非常巧妙'
      ],
      vocabulary: [
        { word: '异乡', pinyin: 'yì xiāng', meaning: '他乡，远离家乡的地方' },
        { word: '佳节', pinyin: 'jiā jié', meaning: '美好的节日' },
        { word: '倍', pinyin: 'bèi', meaning: '加倍，更加' },
        { word: '茱萸', pinyin: 'zhū yú', meaning: '一种有香味的植物，重阳节有插茱萸的习俗' },
        { word: '登高', pinyin: 'dēng gāo', meaning: '登上高处，重阳节的传统习俗' }
      ],
      moral: '这首诗让我们感受到了游子对亲人深深的思念之情。无论身在何方，家人永远是我们最深的牵挂。我们要珍惜和家人在一起的时光。'
    },
    questions: [
      {
        id: 'q3009_1',
        question: '这首诗写的是哪个节日？',
        options: [
          { label: 'A', text: '春节' },
          { label: 'B', text: '中秋节' },
          { label: 'C', text: '重阳节' },
          { label: 'D', text: '端午节' }
        ],
        answer: 'C',
        explanation: '题目中的"九月九日"就是重阳节，诗中也提到了登高和插茱萸，这都是重阳节的习俗。'
      },
      {
        id: 'q3009_2',
        question: '"每逢佳节倍思亲"中"倍"是什么意思？',
        options: [
          { label: 'A', text: '两倍，翻倍' },
          { label: 'B', text: '更加，加倍' },
          { label: 'C', text: '有时候' },
          { label: 'D', text: '很少' }
        ],
        answer: 'B',
        explanation: '"倍"在这里是"更加"的意思。平时就想念亲人，到了节日就更加想念了。'
      },
      {
        id: 'q3009_3',
        question: '王维写这首诗时多大年纪？',
        options: [
          { label: 'A', text: '七岁' },
          { label: 'B', text: '十二岁' },
          { label: 'C', text: '十七岁' },
          { label: 'D', text: '二十七岁' }
        ],
        answer: 'C',
        explanation: '王维十七岁时离开家乡到长安求学，在重阳节写下了这首诗。'
      },
      {
        id: 'q3009_4',
        question: '"遍插茱萸少一人"中"少一人"指的是谁？',
        options: [
          { label: 'A', text: '王维的父亲' },
          { label: 'B', text: '王维的母亲' },
          { label: 'C', text: '王维自己' },
          { label: 'D', text: '王维的朋友' }
        ],
        answer: 'C',
        explanation: '远在异乡的王维想象兄弟们登高插茱萸时，发现少了一个人，那个人就是诗人自己。'
      },
      {
        id: 'q3009_5',
        question: '这首诗表达了诗人怎样的感情？',
        options: [
          { label: 'A', text: '对大自然的热爱' },
          { label: 'B', text: '对朋友的感激' },
          { label: 'C', text: '对远方亲人的深深思念' },
          { label: 'D', text: '对节日的喜悦' }
        ],
        answer: 'C',
        explanation: '这首诗通过"独""异""思亲""少一人"等词语，表达了诗人独自在外对亲人的深深思念之情。'
      }
    ]
  },

  // ==================== 第10课 ====================
  {
    id: 3010,
    title: '《乞巧》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 10,
    readingTime: 10,
    author: '林杰',
    source: '唐诗',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=traditional%20Chinese%20Qixi%20Festival%20scene%20with%20girls%20looking%20at%20stars,%20weaving%20and%20praying,%20festive%20atmosphere&image_size=landscape_4_3',
    text: `<p>每年农历七月初七，是中国传统的七夕节，也叫"{乞|qǐ}巧节"。这个节日来源于牛郎织女的美丽传说。传说天上的织女是一位心灵手巧的仙女，她织出的云{霞|xiá}美丽极了。古时候，每逢七夕，女孩子们都会向织女{祈|qí}求灵巧的双手。</p>
<p>七夕今{宵|xiāo}看碧{霄|xiāo}，牵牛织女{渡|dù}河桥。家家{乞|qǐ}巧望秋月，穿尽红丝几万条。</p>
<p>"七夕今宵看碧霄"——"今宵"指今天晚上，"碧霄"指晴朗的天空。七夕的晚上，人们仰望晴朗的夜空。"牵牛织女渡河桥"——传说中，牛郎和织女被天河隔开，只有每年七月七日才能通过鹊桥相会。</p>
<p>"家家乞巧望秋月"——家家户户的女孩子都在望着秋月，祈求能像织女一样心灵手巧。"穿尽红丝几万条"——女孩子们对着月亮穿针引线，比赛看谁穿得快、穿得好。据说，在月光下能一下子把线穿过针眼的女孩子，就会得到织女的祝福，变得心灵手巧。</p>
<p>这首诗描绘了古代七夕节的热闹{场|chǎng}面。家家户户的女孩子都在望月{乞|qǐ}巧，她们穿过的红丝线有几万条之多，可见这个节日多么受人喜爱。七夕节是中国最浪漫的传统节日之一，它承载着人们对美好爱情的向往和对幸福生活的期盼。</p>`,
    explanation: {
      summary: '这首诗描写了古代七夕节的习俗。七夕节又叫乞巧节，源于牛郎织女的传说。每逢七夕，家家户户的女孩子都会望月穿针，向织女祈求心灵手巧。诗中展现了一幅热闹而浪漫的节日画面。',
      keyPoints: [
        '七夕节在农历七月初七，也叫"乞巧节"',
        '七夕节来源于牛郎织女的传说',
        '古代女孩子在七夕望月穿针，祈求心灵手巧',
        '"穿尽红丝几万条"说明参加乞巧的女孩子很多，场面热闹'
      ],
      vocabulary: [
        { word: '乞巧', pinyin: 'qǐ qiǎo', meaning: '向织女祈求心灵手巧' },
        { word: '碧霄', pinyin: 'bì xiāo', meaning: '晴朗的天空' },
        { word: '今宵', pinyin: 'jīn xiāo', meaning: '今天晚上' },
        { word: '渡', pinyin: 'dù', meaning: '通过，跨过（河流等）' },
        { word: '祈求', pinyin: 'qí qiú', meaning: '诚恳地请求' }
      ],
      moral: '这首诗让我们了解了七夕节的传统文化和习俗。乞巧节体现了古代人民对美好生活的向往和对技艺的追求。我们要珍惜和传承这些优秀的传统文化。'
    },
    questions: [
      {
        id: 'q3010_1',
        question: '七夕节是农历的哪一天？',
        options: [
          { label: 'A', text: '正月十五' },
          { label: 'B', text: '五月初五' },
          { label: 'C', text: '七月初七' },
          { label: 'D', text: '八月十五' }
        ],
        answer: 'C',
        explanation: '课文开头写道："每年农历七月初七，是中国传统的七夕节。"'
      },
      {
        id: 'q3010_2',
        question: '七夕节又叫什么？',
        options: [
          { label: 'A', text: '元宵节' },
          { label: 'B', text: '乞巧节' },
          { label: 'C', text: '中秋节' },
          { label: 'D', text: '重阳节' }
        ],
        answer: 'B',
        explanation: '课文写道："七夕节，也叫\'乞巧节\'。"'
      },
      {
        id: 'q3010_3',
        question: '古代女孩子在七夕节做什么？',
        options: [
          { label: 'A', text: '放鞭炮庆祝' },
          { label: 'B', text: '吃粽子' },
          { label: 'C', text: '望月穿针，祈求心灵手巧' },
          { label: 'D', text: '登高望远' }
        ],
        answer: 'C',
        explanation: '课文写道："家家户户的女孩子都在望着秋月，祈求能像织女一样心灵手巧。"她们对着月亮穿针引线。'
      },
      {
        id: 'q3010_4',
        question: '诗中"牵牛织女渡河桥"指的是什么传说？',
        options: [
          { label: 'A', text: '嫦娥奔月' },
          { label: 'B', text: '牛郎织女鹊桥相会' },
          { label: 'C', text: '后羿射日' },
          { label: 'D', text: '大禹治水' }
        ],
        answer: 'B',
        explanation: '传说牛郎和织女被天河隔开，每年七月七日通过鹊桥相会。这就是诗中"渡河桥"的含义。'
      },
      {
        id: 'q3010_5',
        question: '"穿尽红丝几万条"说明了什么？',
        options: [
          { label: 'A', text: '红丝线很便宜' },
          { label: 'B', text: '参加乞巧的女孩子很多，场面热闹' },
          { label: 'C', text: '女孩子很浪费' },
          { label: 'D', text: '织女给了很多丝线' }
        ],
        answer: 'B',
        explanation: '"几万条"说明参加乞巧的人非常多，场面非常热闹，体现了这个节日的受欢迎程度。'
      }
    ]
  },

  // ==================== 第11课 ====================
  {
    id: 3011,
    title: '《嫦娥》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 11,
    readingTime: 10,
    author: '李商隐',
    source: '唐诗',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20Chang%27e%20the%20moon%20goddess%20sitting%20alone%20in%20the%20moon%20palace,%20jade%20rabbit%20beside%20her,%20Chinese%20mythology%20art&image_size=landscape_4_3',
    text: `<p>在中国古代神话传说中，{嫦|cháng}{娥|é}是一位美丽的仙女。她的丈夫{后|hòu}{羿|yì}是一位英勇的射手，曾经射下九个太阳，拯救了人间。后来，{后|hòu}{羿|yì}从西王母那里得到了一包长生不老药。一天，{嫦|cháng}{娥|é}不小心吃下了全部的仙药，身体轻飘飘地飞了起来，一直飞到了月亮上的广寒宫。从此，她独自一人住在清冷的月宫里，只有一只{玉|yù}{兔|tù}陪伴着她。</p>
<p>唐代诗人李商隐根据这个传说，写下了这首优美的诗：</p>
<p>云母{屏|píng}风{烛|zhú}影深，长河渐落晓星沉。{嫦|cháng}{娥|é}应悔偷灵药，碧海青天夜夜心。</p>
<p>"云母屏风烛影深"——云母做的{屏|píng}风后面，{蜡|là}{烛|zhú}的影子深深地映在上面。这一句描写了一个孤独{寂|jì}寞的场景。"长河渐落晓星沉"——"长河"指银河，银河渐渐落下，天快要亮了，晨星也慢慢消失了。</p>
<p>"嫦娥应悔偷灵药"——诗人想象，{嫦|cháng}{娥|é}应该后悔偷吃了仙药吧。"碧海青天夜夜心"——她面对着碧蓝的大海和青色的天空，夜夜都是孤独寂寞的心情。这首诗表面上写的是{嫦|cháng}{娥|é}的孤独，实际上也表达了诗人自己孤独、寂寞的感受。每年中秋节，人们赏月吃月饼的时候，都会想起月宫中的{嫦|cháng}{娥|é}和那只可爱的{玉|yù}{兔|tù}。</p>`,
    explanation: {
      summary: '这首诗是唐代诗人李商隐根据嫦娥奔月的神话传说写成的。诗中描写了月宫中嫦娥的孤独与寂寞，想象她后悔偷吃灵药，夜夜面对碧海青天。全诗意境优美，情感深沉。',
      keyPoints: [
        '嫦娥是后羿的妻子，偷吃了长生不老药飞到了月宫',
        '"云母屏风烛影深"描写了一个孤独寂寞的场景',
        '"嫦娥应悔偷灵药"表达了嫦娥的后悔和孤独',
        '诗人借嫦娥的故事表达了自己内心的孤独寂寞'
      ],
      vocabulary: [
        { word: '屏风', pinyin: 'píng fēng', meaning: '室内用来挡风或隔断的家具' },
        { word: '烛影', pinyin: 'zhú yǐng', meaning: '蜡烛照出的影子' },
        { word: '长河', pinyin: 'cháng hé', meaning: '银河，夜空中由星星组成的光带' },
        { word: '碧海', pinyin: 'bì hǎi', meaning: '碧蓝的大海' },
        { word: '寂寞', pinyin: 'jì mò', meaning: '孤独冷清，没有人陪伴' }
      ],
      moral: '这首诗让我们了解到美丽的嫦娥奔月传说，也让我们感受到孤独的痛苦。亲情和陪伴是最珍贵的，我们要珍惜身边的人。'
    },
    questions: [
      {
        id: 'q3011_1',
        question: '嫦娥为什么飞到了月亮上？',
        options: [
          { label: 'A', text: '她想看风景' },
          { label: 'B', text: '她不小心吃下了全部的长生不老药' },
          { label: 'C', text: '后羿把她送上去了' },
          { label: 'D', text: '她骑着凤凰飞上去的' }
        ],
        answer: 'B',
        explanation: '课文写道："嫦娥不小心吃下了全部的仙药，身体轻飘飘地飞了起来，一直飞到了月亮上。"'
      },
      {
        id: 'q3011_2',
        question: '诗中的"长河"指的是什么？',
        options: [
          { label: 'A', text: '长江' },
          { label: 'B', text: '黄河' },
          { label: 'C', text: '银河' },
          { label: 'D', text: '月亮' }
        ],
        answer: 'C',
        explanation: '课文解释道："\'长河\'指银河，银河渐渐落下，天快要亮了。"'
      },
      {
        id: 'q3011_3',
        question: '嫦娥在月宫中有什么陪伴？',
        options: [
          { label: 'A', text: '后羿' },
          { label: 'B', text: '一只玉兔' },
          { label: 'C', text: '很多仙鹤' },
          { label: 'D', text: '吴刚' }
        ],
        answer: 'B',
        explanation: '课文写道："她独自一人住在清冷的月宫里，只有一只玉兔陪伴着她。"'
      },
      {
        id: 'q3011_4',
        question: '"嫦娥应悔偷灵药"表达了什么意思？',
        options: [
          { label: 'A', text: '嫦娥很高兴吃了仙药' },
          { label: 'B', text: '嫦娥应该后悔偷吃了仙药，因为太孤独了' },
          { label: 'C', text: '嫦娥想把药还回去' },
          { label: 'D', text: '仙药不好吃' }
        ],
        answer: 'B',
        explanation: '诗人想象嫦娥后悔偷吃仙药，因为虽然长生不老，但却要永远孤独地住在月宫里。'
      },
      {
        id: 'q3011_5',
        question: '这首诗表达了怎样的感情？',
        options: [
          { label: 'A', text: '对月亮的喜爱' },
          { label: 'B', text: '孤独和寂寞' },
          { label: 'C', text: '对仙药的向往' },
          { label: 'D', text: '对后羿的思念' }
        ],
        answer: 'B',
        explanation: '全诗通过描写嫦娥在月宫中的孤独，表达了诗人自己内心深处的寂寞之情。"碧海青天夜夜心"更是突出了这种永无止境的孤独。'
      }
    ]
  },

  // ==================== 第12课 ====================
  {
    id: 3012,
    title: '《惊弓之鸟》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 12,
    readingTime: 10,
    author: '刘向',
    source: '《战国策》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=an%20archer%20shooting%20at%20a%20frightened%20bird%20that%20falls%20from%20sky%20without%20being%20hit,%20ancient%20Chinese%20battlefield&image_size=landscape_4_3',
    text: `<p>{战|zhàn}国时期，{魏|wèi}国有一个有名的射箭能手，名叫更{羸|léi}。有一天，更{羸|léi}陪{魏|wèi}王散步。忽然，从东方飞来一只大雁，飞得很慢，叫声也很{悲|bēi}{惨|cǎn}。更{羸|léi}仔细看了看，对{魏|wèi}王说："大王，我不用箭，只要拉一下{弓|gōng}，就能把这只大雁射下来。"</p>
<p>{魏|wèi}王不相信，说："你的射箭技术难道已经高到这种地步了吗？"更{羸|léi}说："请让我试一试。"只见更{羸|léi}左手拿弓，右手拉{弦|xián}，只听"嘣"的一声，那只大雁果然从半空中掉了下来。</p>
<p>{魏|wèi}王看了，大吃一惊，说："啊！真有这样的本事！"更{羸|léi}笑笑说："不是我的本事大，是因为这是一只受过伤的鸟。"更{羸|léi}解释说："我看得出来，它飞得很慢，说明它受过伤，伤口还没有{愈|yù}合。它的叫声很悲惨，说明它离开同伴已经很久了。</p>
<p>"它受过伤，心里本来就很害怕。一听到弓{弦|xián}响，就拼命往高处飞。它一使劲，伤口就裂开了，一阵剧痛袭来，它支持不住，就从天上掉了下来。"</p>
<p>{魏|wèi}王听了，连连点头。这就是"惊弓之鸟"的故事。后来人们用这个成语来比喻那些受过惊吓之后，遇到一点动静就非常害怕的人。这只大雁之所以掉下来，不是因为更{羸|léi}的箭法有多高明，而是因为它本身已经受了伤，又被弓弦的声音吓到了。可见，善于观察和分析，就能做出正确的判断。</p>`,
    explanation: {
      summary: '这则成语故事讲的是战国时期魏国射箭能手更羸只用弓弦的声音就射下一只大雁的故事。原来这只大雁已经受过伤，听到弓弦声后因惊吓和伤口裂开而掉落。故事说明善于观察和分析才能做出正确判断。',
      keyPoints: [
        '更羸不用箭，只拉弓弦就射下了大雁',
        '大雁飞得慢、叫声悲惨，说明它已经受过伤',
        '大雁听到弓弦声受惊，伤口裂开而掉落',
        '"惊弓之鸟"比喻受过惊吓后遇到一点动静就害怕的人'
      ],
      vocabulary: [
        { word: '惊弓之鸟', pinyin: 'jīng gōng zhī niǎo', meaning: '被弓箭吓怕了的鸟，比喻受过惊吓的人' },
        { word: '弓弦', pinyin: 'gōng xián', meaning: '弓上用来弹射箭的弦' },
        { word: '悲惨', pinyin: 'bēi cǎn', meaning: '悲伤凄惨' },
        { word: '愈合', pinyin: 'yù hé', meaning: '伤口长好，恢复健康' },
        { word: '本事', pinyin: 'běn shi', meaning: '本领，能力' }
      ],
      moral: '这个故事告诉我们，善于观察和分析事物之间的联系，就能做出正确的判断。同时也告诉我们，一个人如果心理上有阴影，就容易被一点小事吓到。'
    },
    questions: [
      {
        id: 'q3012_1',
        question: '更羸是怎样把大雁射下来的？',
        options: [
          { label: 'A', text: '用一支很锋利的箭射中的' },
          { label: 'B', text: '不用箭，只拉了一下弓弦' },
          { label: 'C', text: '用石头砸下来的' },
          { label: 'D', text: '放了一只猎鹰去抓' }
        ],
        answer: 'B',
        explanation: '课文写道："我不用箭，只要拉一下弓，就能把这只大雁射下来。""只听\'嘣\'的一声，那只大雁果然从半空中掉了下来。"'
      },
      {
        id: 'q3012_2',
        question: '更羸怎么知道这是一只受过伤的鸟？',
        options: [
          { label: 'A', text: '他看到鸟身上有血' },
          { label: 'B', text: '鸟飞得很慢，叫声很悲惨' },
          { label: 'C', text: '别人告诉他的' },
          { label: 'D', text: '鸟的翅膀折断了' }
        ],
        answer: 'B',
        explanation: '课文写道："它飞得很慢，说明它受过伤，伤口还没有愈合。它的叫声很悲惨，说明它离开同伴已经很久了。"'
      },
      {
        id: 'q3012_3',
        question: '大雁为什么听到弓弦声就掉下来了？',
        options: [
          { label: 'A', text: '弓弦声太大，把它震晕了' },
          { label: 'B', text: '它被箭射中了' },
          { label: 'C', text: '它受惊后使劲飞，伤口裂开了' },
          { label: 'D', text: '它飞累了' }
        ],
        answer: 'C',
        explanation: '课文解释道："一听到弓弦响，就拼命往高处飞。它一使劲，伤口就裂开了，一阵剧痛袭来，它支持不住，就从天上掉了下来。"'
      },
      {
        id: 'q3012_4',
        question: '"惊弓之鸟"这个成语比喻什么样的人？',
        options: [
          { label: 'A', text: '射箭技术高超的人' },
          { label: 'B', text: '飞得很高的鸟' },
          { label: 'C', text: '受过惊吓后遇到一点动静就非常害怕的人' },
          { label: 'D', text: '受了伤的人' }
        ],
        answer: 'C',
        explanation: '课文写道："\'惊弓之鸟\'比喻那些受过惊吓之后，遇到一点动静就非常害怕的人。"'
      },
      {
        id: 'q3012_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '射箭要多练习' },
          { label: 'B', text: '大雁很容易受伤' },
          { label: 'C', text: '善于观察和分析，就能做出正确的判断' },
          { label: 'D', text: '不要在野外拉弓' }
        ],
        answer: 'C',
        explanation: '课文最后说："善于观察和分析，就能做出正确的判断。"更羸之所以能不用箭就射下大雁，是因为他善于观察。'
      }
    ]
  },

  // ==================== 第13课 ====================
  {
    id: 3013,
    title: '《南辕北辙》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 13,
    readingTime: 10,
    author: '刘向',
    source: '《战国策》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20man%20driving%20his%20chariot%20heading%20south%20while%20his%20destination%20is%20north,%20confused%20expression,%20cartoon%20fable&image_size=landscape_4_3',
    text: `<p>{战|zhàn}国时期，{魏|wèi}王想出兵攻打赵国。大臣{季|jì}{梁|liáng}听说了这件事，急忙从外地赶回来，衣服上的皱{纹|wén}都来不及整理，风尘{仆|pú}{仆|pú}地去见{魏|wèi}王。</p>
<p>{季|jì}{梁|liáng}对{魏|wèi}王说："大王，我在路上遇到一件奇怪的事。有个人坐着马车往北方走，我问他要去哪里，他说要去楚国。我说楚国在南方，你怎么往北走呢？他说没关系，他的马跑得快。"</p>
<p>"我说，你的马虽然跑得快，但方向不对，这不是越走越远吗？他又说，没关系，他的路费带得多。我说，路费再多也没有用，方向不对，永远也到不了楚国。他还说，没关系，他的车夫赶车的技术很好。"</p>
<p>"我说，你的车夫技术再好，马跑得再快，路费带得再多，可是方向错了，你离楚国只会越来越远啊！"那个人不听劝告，坚持往北走。他的条件越好，只会离目的地越远。</p>
<p>{季|jì}{梁|liáng}讲完这个故事，接着说："大王，您现在想用武力来建立威信，扩大地盘，就好比要去楚国却往北走一样。您越是这样做，离统一天下的目标就越远啊！"{魏|wèi}王听了，觉得很有道理，就取消了攻打赵国的计划。"南{辕|yuán}北{辙|zhé}"这个成语，就是从这个故事来的。</p>`,
    explanation: {
      summary: '这则成语故事讲的是一个人要去南方的楚国，却驾车往北走。别人劝他方向不对，他却说马快、路费多、车夫技术好，不听劝告。季梁用这个故事劝魏王不要用武力攻打赵国，否则离统一天下的目标会越来越远。',
      keyPoints: [
        '一个人要去楚国，楚国在南方，他却往北走',
        '别人劝他方向不对，他说马快、路费多、车夫技术好',
        '季梁用这个故事劝谏魏王不要攻打赵国',
        '"南辕北辙"比喻行动和目的相反，永远达不到目标'
      ],
      vocabulary: [
        { word: '南辕北辙', pinyin: 'nán yuán běi zhé', meaning: '想往南却驾车向北，比喻行动和目的相反' },
        { word: '风尘仆仆', pinyin: 'fēng chén pú pú', meaning: '形容旅途奔波，非常劳累' },
        { word: '劝告', pinyin: 'quàn gào', meaning: '劝说，好意地告诉别人' },
        { word: '方向', pinyin: 'fāng xiàng', meaning: '前进的目标方位' },
        { word: '目的地', pinyin: 'mù dì dì', meaning: '想要到达的地方' }
      ],
      moral: '做事情首先要确定正确的方向。如果方向错了，条件再好、再努力也没有用，只会离目标越来越远。所以，我们做事之前要想清楚方向对不对。'
    },
    questions: [
      {
        id: 'q3013_1',
        question: '那个坐马车的人要去哪里？',
        options: [
          { label: 'A', text: '楚国' },
          { label: 'B', text: '魏国' },
          { label: 'C', text: '赵国' },
          { label: 'D', text: '齐国' }
        ],
        answer: 'A',
        explanation: '课文写道："他说要去楚国。"但楚国在南方，他却往北方走。'
      },
      {
        id: 'q3013_2',
        question: '那个人为什么不改变方向？',
        options: [
          { label: 'A', text: '他不知道楚国在哪里' },
          { label: 'B', text: '他觉得自己马快、路费多、车夫技术好' },
          { label: 'C', text: '他喜欢往北走' },
          { label: 'D', text: '别人不让他改变方向' }
        ],
        answer: 'B',
        explanation: '课文写道："他说没关系，他的马跑得快""他的路费带得多""他的车夫赶车的技术很好。"'
      },
      {
        id: 'q3013_3',
        question: '季梁讲这个故事的目的是什么？',
        options: [
          { label: 'A', text: '告诉魏王路上的趣事' },
          { label: 'B', text: '劝魏王不要攻打赵国' },
          { label: 'C', text: '教魏王怎么驾车' },
          { label: 'D', text: '推荐那个人给魏王认识' }
        ],
        answer: 'B',
        explanation: '课文写道："大王，您现在想用武力来建立威信……就好比要去楚国却往北走一样。"季梁用故事劝魏王放弃攻打赵国。'
      },
      {
        id: 'q3013_4',
        question: '"南辕北辙"这个成语是什么意思？',
        options: [
          { label: 'A', text: '走路走得太快' },
          { label: 'B', text: '行动和目的相反，永远达不到目标' },
          { label: 'C', text: '马车跑得很快' },
          { label: 'D', text: '南方比北方好' }
        ],
        answer: 'B',
        explanation: '"南辕北辙"字面意思是想往南去却驾车向北，比喻行动和目的相反，越努力离目标越远。'
      },
      {
        id: 'q3013_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '出门要带够路费' },
          { label: 'B', text: '做事首先要确定正确的方向' },
          { label: 'C', text: '马跑得快很重要' },
          { label: 'D', text: '要听别人的话' }
        ],
        answer: 'B',
        explanation: '故事告诉我们，做事情首先要确定正确的方向。如果方向错了，条件再好、再努力也没有用。'
      }
    ]
  },

  // ==================== 第14课 ====================
  {
    id: 3014,
    title: '《掩耳盗铃》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 14,
    readingTime: 10,
    author: '吕不韦',
    source: '《吕氏春秋》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20thief%20covering%20his%20own%20ears%20while%20trying%20to%20steal%20a%20bell,%20silly%20expression,%20cartoon%20fable%20illustration&image_size=landscape_4_3',
    text: `<p>春秋时期，晋国的一个{贵|guì}族家里有一口大{钟|zhōng}。这口{钟|zhōng}是用青铜{铸|zhù}造的，又大又漂亮，敲起来声音非常好听。有一天，一个{小|xiǎo}偷路过，看到了这口钟，心想："要是能把这口钟偷走就好了，一定能卖很多钱。"</p>
<p>可是，这口钟太大了，根本搬不动。他想来想去，决定把钟敲碎了，一块一块地搬走。于是他找来一把大{锤|chuí}子，准备把钟砸烂。</p>
<p>可是，他刚举起{锤|chuí}子，钟就发出了"当——"的一声响。他吓了一大跳，心想："糟了！这么大的声音，别人听到了不就知道我在偷钟了吗？"他赶紧放下锤子，站在那里想办法。</p>
<p>他想啊想，突然想到了一个"好主意"：把自己的耳朵堵住，不就听不到钟声了吗？他以为自己听不到，别人也就听不到了。于是，他找来两团棉花，使劲塞住自己的两只耳朵。</p>
<p>他觉得这下好了，再也听不到声音了。然后他又举起锤子，使劲地敲钟。"当！当！当！"钟声响亮极了，周围的人都听到了，纷纷跑过来。大家一看，这个{小|xiǎo}偷还在那里使劲敲钟呢！他捂着耳朵，根本不知道别人已经来了。大家把他抓住了，他才明白过来：堵住自己的耳朵有什么用呢？别人又不是聋子！这就是"掩耳盗铃"的故事。原来叫"掩耳盗钟"，后来人们改说"掩耳盗铃"了。</p>`,
    explanation: {
      summary: '这则成语故事讲的是一个小偷想偷一口大钟，因为钟太大搬不动，就想把它敲碎带走。但一敲就发出响声，于是他捂住自己的耳朵，以为自己听不到别人也听不到。结果被人们当场抓住。',
      keyPoints: [
        '小偷想偷一口大钟，但钟太大搬不动',
        '他决定把钟敲碎，但一敲就发出很大的声音',
        '他捂住自己的耳朵，以为别人也听不到声音',
        '结果被人们当场抓住，"掩耳盗铃"比喻自欺欺人'
      ],
      vocabulary: [
        { word: '掩耳盗铃', pinyin: 'yǎn ěr dào líng', meaning: '捂住耳朵偷铃铛，比喻自欺欺人' },
        { word: '铸造', pinyin: 'zhù zào', meaning: '把金属熔化后倒入模子里做成器具' },
        { word: '欺骗', pinyin: 'qī piàn', meaning: '用虚假的言行来隐瞒真相' },
        { word: '自欺欺人', pinyin: 'zì qī qī rén', meaning: '欺骗自己也欺骗别人' },
        { word: '愚蠢', pinyin: 'yú chǔn', meaning: '笨，不聪明' }
      ],
      moral: '这个故事告诉我们，不要自欺欺人。做了坏事想隐瞒是瞒不住的，客观事实不会因为你的主观意愿而改变。欺骗别人的人，其实最终欺骗的是自己。'
    },
    questions: [
      {
        id: 'q3014_1',
        question: '小偷想偷什么？',
        options: [
          { label: 'A', text: '一箱金银珠宝' },
          { label: 'B', text: '一口大钟' },
          { label: 'C', text: '一匹好马' },
          { label: 'D', text: '一幅名画' }
        ],
        answer: 'B',
        explanation: '课文写道："一个偷路过，看到了这口钟，心想：\'要是能把这口钟偷走就好了。\'"'
      },
      {
        id: 'q3014_2',
        question: '小偷为什么不能直接把钟搬走？',
        options: [
          { label: 'A', text: '钟被人看守着' },
          { label: 'B', text: '钟太大了，根本搬不动' },
          { label: 'C', text: '钟在高处' },
          { label: 'D', text: '钟被锁住了' }
        ],
        answer: 'B',
        explanation: '课文写道："这口钟太大了，根本搬不动。"'
      },
      {
        id: 'q3014_3',
        question: '小偷想出了什么"好主意"来防止被人发现？',
        options: [
          { label: 'A', text: '等到半夜再偷' },
          { label: 'B', text: '找人帮忙一起搬' },
          { label: 'C', text: '把自己的耳朵堵住' },
          { label: 'D', text: '给钟裹上布' }
        ],
        answer: 'C',
        explanation: '课文写道："他找来两团棉花，使劲塞住自己的两只耳朵。"他以为自己听不到，别人也听不到。'
      },
      {
        id: 'q3014_4',
        question: '小偷最后被抓住了吗？',
        options: [
          { label: 'A', text: '没有，他成功偷走了钟' },
          { label: 'B', text: '被人们当场抓住了' },
          { label: 'C', text: '他自己逃跑了' },
          { label: 'D', text: '钟碎了，他拿走了碎片' }
        ],
        answer: 'B',
        explanation: '课文写道："大家把他抓住了。"钟声响亮极了，周围的人都听到了，纷纷跑过来抓住了他。'
      },
      {
        id: 'q3014_5',
        question: '"掩耳盗铃"这个成语告诉我们什么道理？',
        options: [
          { label: 'A', text: '偷东西时不要发出声音' },
          { label: 'B', text: '钟的声音很大' },
          { label: 'C', text: '不要自欺欺人，客观事实不会因主观意愿而改变' },
          { label: 'D', text: '棉花可以隔音' }
        ],
        answer: 'C',
        explanation: '掩耳盗铃比喻自欺欺人，告诉我们客观事实不会因为你不愿面对就改变。欺骗别人的人，最终欺骗的是自己。'
      }
    ]
  },

  // ==================== 第15课 ====================
  {
    id: 3015,
    title: '《望天门山》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 15,
    readingTime: 10,
    author: '李白',
    source: '唐诗',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=magnificent%20Tianmen%20Mountain%20with%20river%20flowing%20between%20two%20peaks,%20boat%20sailing%20through,%20Chinese%20landscape%20painting&image_size=landscape_4_3',
    text: `<p>{李|lǐ}{白|bái}是{唐|táng}朝最著名的诗人之一，被誉为"诗仙"。他一生热爱大自然，喜欢游历名山大川。有一次，他乘船沿着长江西行，经过安徽省的天门山。天门山由东梁山和西梁山两座山组成，两山隔江相对，就像一道天然的大门。长{江|jiāng}从两山之间奔流而过，景色非常壮{观|guān}。李白被眼前的美景深深打动，写下了这首诗。</p>
<p>天门中{断|duàn}{楚|chǔ}江开，碧水东流至此回。两岸青山相对出，{孤|gū}{帆|fān}一片日边来。</p>
<p>"天门中断楚江开"——天门山从中间断开，被长江（古时流经楚地，故称楚江）冲开了一个缺口。一个"断"字和一个"开"字，写出了长江的巨大力量，好像山是被江水劈开的一样。"碧水东流至此回"——碧绿的江水向东流到这里，激起了回旋的波浪。一个"回"字，写出了水流受到山的阻碍后回旋的样子。</p>
<p>"两岸青山相对出"——两岸的青山面对面地耸立着，好像从两岸走出来的两个人。一个"出"字把静止的山写活了。"孤帆一片日边来"——远处一片孤零零的帆船，好像从太阳旁边驶来。诗人由近及远，把天门山的壮丽景色和长江的浩大气势写得淋{漓|lí}尽致。</p>
<p>这首诗虽然只有短短四句二十八个字，却写出了天门山的雄伟、长江的壮阔、青山的秀丽和孤帆的悠远。全诗气势磅{礴|bó}，意境开阔，展现了李白豪放洒脱的诗风和对大自然深深的热爱之情。读这首诗，我们仿佛也跟诗人一起，站在船上欣赏这壮美的山河景色。</p>`,
    explanation: {
      summary: '这首诗是唐代诗人李白乘船经过安徽天门山时写下的。诗中描绘了天门山被长江从中劈开、碧水东流回旋、两岸青山耸立、一片孤帆驶来的壮丽景色，展现了大自然的雄伟壮观和诗人豪迈的胸怀。',
      keyPoints: [
        '天门山由东梁山和西梁山组成，两山隔江对峙如一道大门',
        '"断""开"二字写出了长江的巨大冲击力',
        '"两岸青山相对出"用"出"字把山写活了',
        '全诗气势磅礴，表达了诗人对大自然的热爱'
      ],
      vocabulary: [
        { word: '中断', pinyin: 'zhōng duàn', meaning: '从中间断开' },
        { word: '碧水', pinyin: 'bì shuǐ', meaning: '碧绿清澈的水' },
        { word: '孤帆', pinyin: 'gū fān', meaning: '一只孤独的帆船' },
        { word: '回旋', pinyin: 'huí xuán', meaning: '水流受到阻碍后旋转回来' },
        { word: '壮丽', pinyin: 'zhuàng lì', meaning: '雄壮美丽' }
      ],
      moral: '这首诗让我们感受到祖国山河的壮美，激发我们对大自然的热爱。李白用短短四句诗就描绘出如此壮丽的画面，展现了他非凡的才华。我们要学习诗人善于观察、用心感受自然之美的品质。'
    },
    questions: [
      {
        id: 'q3015_1',
        question: '天门山位于哪个省？',
        options: [
          { label: 'A', text: '湖南省' },
          { label: 'B', text: '安徽省' },
          { label: 'C', text: '四川省' },
          { label: 'D', text: '湖北省' }
        ],
        answer: 'B',
        explanation: '课文开头提到："他乘船沿着长江西行，经过安徽省的天门山。"'
      },
      {
        id: 'q3015_2',
        question: '"天门中断楚江开"中的"楚江"指的是什么？',
        options: [
          { label: 'A', text: '黄河' },
          { label: 'B', text: '淮河' },
          { label: 'C', text: '长江' },
          { label: 'D', text: '珠江' }
        ],
        answer: 'C',
        explanation: '课文解释道："长江（古时流经楚地，故称楚江）冲开了一个缺口。"楚江就是长江流经楚地时的别称。'
      },
      {
        id: 'q3015_3',
        question: '"两岸青山相对出"中"出"字妙在哪里？',
        options: [
          { label: 'A', text: '写出了山很高' },
          { label: 'B', text: '写出了山很绿' },
          { label: 'C', text: '把静止的山写活了，好像山从两岸走出来' },
          { label: 'D', text: '写出了山很多' }
        ],
        answer: 'C',
        explanation: '课文写道："一个\'出\'字把静止的山写活了。"两岸的青山面对面耸立，好像从两岸走出来的两个人。'
      },
      {
        id: 'q3015_4',
        question: '"孤帆一片日边来"描写的是什么景象？',
        options: [
          { label: 'A', text: '太阳从山上落下来' },
          { label: 'B', text: '远处一片帆船好像从太阳旁边驶来' },
          { label: 'C', text: '很多船排着队行驶' },
          { label: 'D', text: '帆船在太阳下面停着' }
        ],
        answer: 'B',
        explanation: '课文写道："远处一片孤零零的帆船，好像从太阳旁边驶来。"诗人由近及远，写出了辽阔壮美的画面。'
      },
      {
        id: 'q3015_5',
        question: '李白被人们称为什么？',
        options: [
          { label: 'A', text: '诗圣' },
          { label: 'B', text: '诗仙' },
          { label: 'C', text: '诗佛' },
          { label: 'D', text: '诗王' }
        ],
        answer: 'B',
        explanation: '课文写道："李白是唐朝最著名的诗人之一，被誉为\'诗仙\'。"杜甫被称为"诗圣"。'
      }
    ]
  }
];
