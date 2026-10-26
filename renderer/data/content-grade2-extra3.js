// 语文小霸王 - 二年级课文内容数据（补充篇三）
// 每日一篇课文，每篇约10分钟阅读时间
// 难字标注拼音，课文后有讲解和阅读理解练习
// 第56-80天

const CONTENT_GRADE_2_EXTRA3 = [
  // ==================== 第56天 ====================
  {
    id: 2056,
    title: '《小壁虎借尾巴》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 56,
    readingTime: 10,
    author: '佚名',
    source: '人教版一年级下册',
    image: 'images/grade2/lesson56.jpg',
    text: `<p>小{壁|bì}虎在墙角捉蚊子，一条蛇咬住了他的尾巴。小{壁|bì}虎一挣，挣断尾巴逃走了。</p>
<p>没有尾巴多难看哪！小{壁|bì}虎想，向谁去借一条尾巴呢？</p>
<p>小{壁|bì}虎爬呀爬，爬到小河边。他看见小鱼摇着尾巴，在河里游来游去。小{壁|bì}虎说："小鱼姐姐，您的尾巴借给我行吗？"小鱼说："不行啊，我要用尾巴{拨|bō}水呢。"</p>
<p>小{壁|bì}虎爬呀爬，爬到大树上。他看见老牛甩着尾巴，在树下吃草。小{壁|bì}虎说："牛伯伯，您的尾巴借给我行吗？"老牛说："不行啊，我要用尾巴赶{蝇|yíng}子呢。"</p>
<p>小{壁|bì}虎爬呀爬，爬到房{檐|yán}下。他看见燕子摆着尾巴，在空中飞来飞去。小{壁|bì}虎说："燕子阿姨，您的尾巴借给我行吗？"燕子说："不行啊，我要用尾巴掌握方向呢。"</p>
<p>小{壁|bì}虎借不到尾巴，心里很难过。他爬呀爬，爬回家里找妈妈。</p>
<p>小{壁|bì}虎把借尾巴的事告诉了妈妈。妈妈笑着说："傻孩子，你转过身子看看。"小{壁|bì}虎转身一看，高兴地叫起来："我长出一条新尾巴啦！"</p>`,
    explanation: {
      summary: '小壁虎的尾巴被蛇咬断了，他分别向小鱼、老牛、燕子借尾巴，可是每个动物都要用自己的尾巴，不能借给他。小壁虎回到家，发现自己已经长出了新尾巴。原来壁虎的尾巴断了可以再生。',
      keyPoints: [
        '壁虎遇到危险时会挣断尾巴逃生，这是一种自我保护的方式',
        '小鱼用尾巴拨水，帮助游泳',
        '老牛用尾巴赶蝇子，驱赶蚊虫',
        '燕子用尾巴掌握飞行方向',
        '壁虎的尾巴断了可以再长出来，这是壁虎的特殊本领'
      ],
      vocabulary: [
        { word: '壁虎', pinyin: 'bì hǔ', meaning: '一种能在墙上爬行的小动物' },
        { word: '挣', pinyin: 'zhèng', meaning: '用力摆脱' },
        { word: '拨水', pinyin: 'bō shuǐ', meaning: '用尾巴划水' },
        { word: '蝇子', pinyin: 'yíng zi', meaning: '苍蝇' },
        { word: '屋檐', pinyin: 'wū yán', meaning: '房顶伸出墙外的部分' }
      ],
      moral: '这个故事让我们知道不同动物的尾巴有不同的用途。小鱼的尾巴用来拨水，老牛的尾巴用来赶蝇子，燕子的尾巴用来掌握方向。同时，壁虎有再生尾巴的特殊本领，大自然真奇妙！'
    },
    questions: [
      {
        id: 'q2056_1',
        question: '小壁虎的尾巴是怎么断的？',
        options: [
          { label: 'A', text: '被门夹断了' },
          { label: 'B', text: '被蛇咬住了，挣断逃走' },
          { label: 'C', text: '自己咬断的' },
          { label: 'D', text: '被风吹断了' }
        ],
        answer: 'B',
        explanation: '一条蛇咬住了小壁虎的尾巴，小壁虎一挣，挣断尾巴逃走了。'
      },
      {
        id: 'q2056_2',
        question: '小鱼的尾巴有什么用？',
        options: [
          { label: 'A', text: '赶蝇子' },
          { label: 'B', text: '掌握方向' },
          { label: 'C', text: '拨水游泳' },
          { label: 'D', text: '当扇子' }
        ],
        answer: 'C',
        explanation: '小鱼说："不行啊，我要用尾巴拨水呢。"说明小鱼的尾巴是用来拨水帮助游泳的。'
      },
      {
        id: 'q2056_3',
        question: '小壁虎最后怎么有了新尾巴？',
        options: [
          { label: 'A', text: '别人送了一条' },
          { label: 'B', text: '自己长出来的' },
          { label: 'C', text: '买了新的' },
          { label: 'D', text: '找到了旧的' }
        ],
        answer: 'B',
        explanation: '妈妈让小壁虎转身看，小壁虎发现自己长出了一条新尾巴。壁虎的尾巴断了可以再生。'
      },
      {
        id: 'q2056_4',
        question: '老牛的尾巴有什么用？',
        options: [
          { label: 'A', text: '拨水' },
          { label: 'B', text: '赶蝇子' },
          { label: 'C', text: '掌握方向' },
          { label: 'D', text: '当武器' }
        ],
        answer: 'B',
        explanation: '老牛说："不行啊，我要用尾巴赶蝇子呢。"说明老牛的尾巴用来驱赶蚊虫。'
      },
      {
        id: 'q2056_5',
        question: '这个故事告诉我们什么？',
        options: [
          { label: 'A', text: '壁虎很胆小' },
          { label: 'B', text: '不同动物的尾巴有不同的用途' },
          { label: 'C', text: '不要向别人借东西' },
          { label: 'D', text: '尾巴不重要' }
        ],
        answer: 'B',
        explanation: '小鱼用尾巴拨水，老牛用尾巴赶蝇子，燕子用尾巴掌握方向，壁虎的尾巴断了还能再长。不同动物的尾巴有不同的用途。'
      }
    ]
  },

  // ==================== 第57天 ====================
  {
    id: 2057,
    title: '《棉花姑娘》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 57,
    readingTime: 10,
    author: '佚名',
    source: '人教版一年级下册',
    image: 'images/grade2/lesson57.jpg',
    text: `<p>棉花姑娘生病了，叶子上有许多可恶的{蚜|yá}虫。她多么盼望有医生来给她治病啊！</p>
<p>燕子飞来了。棉花姑娘说："请你帮我捉害虫吧！"燕子说："对不起，我只会捉空中飞的害虫，你还是请别人帮忙吧！"</p>
<p>{啄|zhuó}{木|mù}鸟飞来了。棉花姑娘说："请你帮我捉害虫吧！"啄木鸟说："对不起，我只会捉树干里的害虫，你还是请别人帮忙吧！"</p>
<p>青蛙跳来了。棉花姑娘高兴地说："请你帮我捉害虫吧！"青蛙说："对不起，我只会捉田里的害虫，你还是请别人帮忙吧！"</p>
<p>忽然，一群圆圆的小虫子飞来了，很快就把蚜虫吃光了。棉花姑娘惊奇地问："你们是谁呀？"小虫子说："我们叫七星{瓢|piáo}虫，专吃蚜虫。"</p>
<p>不久，棉花姑娘的病好了，长出了碧绿碧绿的叶子，吐出了雪白雪白的棉花。她咧开嘴笑啦！</p>`,
    explanation: {
      summary: '棉花姑娘生病了，叶子上长满了蚜虫。她请燕子、啄木鸟、青蛙帮忙，但它们各有各的本领，不能帮她治蚜虫。最后七星瓢虫来了，把蚜虫吃光了，棉花姑娘的病终于好了。',
      keyPoints: [
        '棉花姑娘的叶子上长了蚜虫，蚜虫是害虫',
        '燕子只会捉空中飞的害虫',
        '啄木鸟只会捉树干里的害虫',
        '青蛙只会捉田里的害虫',
        '七星瓢虫专门吃蚜虫，是蚜虫的天敌'
      ],
      vocabulary: [
        { word: '蚜虫', pinyin: 'yá chóng', meaning: '一种吸食植物汁液的小害虫' },
        { word: '啄木鸟', pinyin: 'zhuó mù niǎo', meaning: '专门捉树干里害虫的鸟' },
        { word: '瓢虫', pinyin: 'piáo chóng', meaning: '一种圆圆的小甲虫' },
        { word: '惊奇', pinyin: 'jīng qí', meaning: '感到惊讶奇怪' },
        { word: '盼望', pinyin: 'pàn wàng', meaning: '非常希望' }
      ],
      moral: '这个故事告诉我们，每种动物都有自己的本领和特长。燕子、啄木鸟、青蛙都是益虫益鸟，但它们各有各的捕食对象。七星瓢虫是蚜虫的天敌，专门帮助庄稼消灭蚜虫。大自然中的每种生物都有自己的作用。'
    },
    questions: [
      {
        id: 'q2057_1',
        question: '棉花姑娘生了什么病？',
        options: [
          { label: 'A', text: '感冒了' },
          { label: 'B', text: '叶子上长了许多蚜虫' },
          { label: 'C', text: '被风吹倒了' },
          { label: 'D', text: '没有浇水' }
        ],
        answer: 'B',
        explanation: '棉花姑娘生病了，叶子上有许多可恶的蚜虫。蚜虫是一种吸食植物汁液的害虫。'
      },
      {
        id: 'q2057_2',
        question: '谁最后帮棉花姑娘治好了病？',
        options: [
          { label: 'A', text: '燕子' },
          { label: 'B', text: '啄木鸟' },
          { label: 'C', text: '青蛙' },
          { label: 'D', text: '七星瓢虫' }
        ],
        answer: 'D',
        explanation: '一群七星瓢虫飞来了，很快就把蚜虫吃光了。七星瓢虫专门吃蚜虫。'
      },
      {
        id: 'q2057_3',
        question: '啄木鸟能帮棉花姑娘吗？为什么？',
        options: [
          { label: 'A', text: '能，啄木鸟什么害虫都能捉' },
          { label: 'B', text: '不能，啄木鸟只会捉树干里的害虫' },
          { label: 'C', text: '不能，啄木鸟不想帮忙' },
          { label: 'D', text: '能，但啄木鸟太忙了' }
        ],
        answer: 'B',
        explanation: '啄木鸟说："对不起，我只会捉树干里的害虫。"啄木鸟专门捉藏在树干里的虫子。'
      },
      {
        id: 'q2057_4',
        question: '棉花姑娘病好后变成了什么样？',
        options: [
          { label: 'A', text: '叶子更黄了' },
          { label: 'B', text: '长出了碧绿的叶子，吐出雪白的棉花' },
          { label: 'C', text: '开出了红色的花' },
          { label: 'D', text: '变矮了' }
        ],
        answer: 'B',
        explanation: '病好后，棉花姑娘长出了碧绿碧绿的叶子，吐出了雪白雪白的棉花。'
      },
      {
        id: 'q2057_5',
        question: '这个故事告诉我们什么？',
        options: [
          { label: 'A', text: '燕子很懒' },
          { label: 'B', text: '每种动物都有自己的本领和特长' },
          { label: 'C', text: '棉花不好种' },
          { label: 'D', text: '青蛙不会捉虫' }
        ],
        answer: 'B',
        explanation: '不同动物有不同的本领：燕子捉空中飞虫，啄木鸟捉树干里的虫，青蛙捉田里的虫，瓢虫吃蚜虫。大自然中每种生物都有自己的作用。'
      }
    ]
  },

  // ==================== 第58天 ====================
  {
    id: 2058,
    title: '《咕咚》',
    category: 'story',
    categoryLabel: '寓言故事',
    grade: 2,
    day: 58,
    readingTime: 10,
    author: '佚名',
    source: '人教版一年级下册',
    image: 'images/grade2/lesson58.jpg',
    text: `<p>湖边有棵木瓜树。树旁住着一只小兔子。</p>
<p>一天，一只熟透了的木瓜从树上掉下来，"咕咚"一声，掉进了湖里。</p>
<p>小兔子听到"咕咚"一声，吓了一跳，拔腿就跑。</p>
<p>小猴子看见了，问他："你跑什么呀？"小兔子一边跑一边说："不好了，'咕咚'来了！"</p>
<p>小猴子一听，也跟着跑起来。他一边跑一边大喊："不好了，'咕咚'来了！快跑呀！"</p>
<p>狐狸呀，山羊呀，小鹿呀，一个跟着一个，都跑起来了。大伙儿一边跑一边喊："不好了，'咕咚'来了！快逃命啊！"</p>
<p>大象看见了，也跟着跑起来。</p>
<p>这时候，一只野牛拦住了大伙儿，问："'咕咚'在哪里？你们看见了吗？"</p>
<p>"没看见。"大伙儿你看看我，我看看你，都说不出话来。</p>
<p>兔子说："是我听见的，'咕咚'就在湖边。"</p>
<p>大伙儿一起来到湖边。正好又有一个木瓜从树上掉下来，"咕咚"一声，掉进了湖里。</p>
<p>大伙儿你看看我，我看看你，都笑了。</p>`,
    explanation: {
      summary: '一个木瓜从树上掉进湖里，发出"咕咚"的声音。小兔子听到后很害怕，拔腿就跑。其他动物看见了也跟着跑，一个传一个，越传越可怕。最后野牛拦住大家问清楚，一起来到湖边才发现"咕咚"只是一个木瓜掉进水里的声音。',
      keyPoints: [
        '"咕咚"只是木瓜掉进水里的声音，并不可怕',
        '小兔子没有弄清楚就跑了，盲目害怕',
        '其他动物没有亲眼看见，就跟着一起跑',
        '野牛能冷静思考，提出疑问',
        '遇到事情要弄清楚，不要盲目跟从'
      ],
      vocabulary: [
        { word: '咕咚', pinyin: 'gū dōng', meaning: '象声词，东西掉进水里的声音' },
        { word: '拔腿就跑', pinyin: 'bá tuǐ jiù pǎo', meaning: '迈开腿就跑，形容跑得很快' },
        { word: '逃命', pinyin: 'táo mìng', meaning: '逃跑保命' },
        { word: '拦住', pinyin: 'lán zhù', meaning: '挡住不让走' },
        { word: '盲目', pinyin: 'máng mù', meaning: '看不清，没有主见' }
      ],
      moral: '这个故事告诉我们，遇到事情要先弄清楚真相，不要听到什么就信什么，更不要盲目跟从别人。小兔子没有弄清楚就跑，其他动物也不问清楚就跟着跑，结果闹了笑话。我们要像野牛一样，遇到问题冷静思考。'
    },
    questions: [
      {
        id: 'q2058_1',
        question: '"咕咚"到底是什么声音？',
        options: [
          { label: 'A', text: '大怪物来了' },
          { label: 'B', text: '木瓜掉进湖里的声音' },
          { label: 'C', text: '打雷的声音' },
          { label: 'D', text: '地震的声音' }
        ],
        answer: 'B',
        explanation: '最后大家到湖边一看，原来是木瓜从树上掉进湖里发出"咕咚"的声音。'
      },
      {
        id: 'q2058_2',
        question: '谁第一个听到"咕咚"就跑了？',
        options: [
          { label: 'A', text: '小猴子' },
          { label: 'B', text: '小兔子' },
          { label: 'C', text: '狐狸' },
          { label: 'D', text: '野牛' }
        ],
        answer: 'B',
        explanation: '小兔子听到"咕咚"一声，吓了一跳，拔腿就跑，是第一个跑的动物。'
      },
      {
        id: 'q2058_3',
        question: '谁拦住了大伙儿问清楚？',
        options: [
          { label: 'A', text: '大象' },
          { label: 'B', text: '小猴子' },
          { label: 'C', text: '野牛' },
          { label: 'D', text: '狐狸' }
        ],
        answer: 'C',
        explanation: '一只野牛拦住了大伙儿，问"咕咚在哪里？你们看见了吗？"是野牛冷静地提出疑问。'
      },
      {
        id: 'q2058_4',
        question: '其他动物为什么也跟着跑？',
        options: [
          { label: 'A', text: '它们亲眼看见了怪物' },
          { label: 'B', text: '它们听小兔子说"咕咚"来了，没有弄清楚就跟着跑' },
          { label: 'C', text: '它们在做游戏' },
          { label: 'D', text: '它们在锻炼身体' }
        ],
        answer: 'B',
        explanation: '其他动物没有亲眼看见"咕咚"是什么，听小兔子说就跟着跑起来，没有弄清楚就盲目跟从。'
      },
      {
        id: 'q2058_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '要跑得快' },
          { label: 'B', text: '遇到事情要弄清楚，不要盲目跟从' },
          { label: 'C', text: '不要去湖边' },
          { label: 'D', text: '木瓜很可怕' }
        ],
        answer: 'B',
        explanation: '这个故事告诉我们，遇到事情要先弄清楚真相，不要盲目跟从别人，否则会闹笑话。'
      }
    ]
  },

  // ==================== 第59天 ====================
  {
    id: 2059,
    title: '《小猴子下山》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 59,
    readingTime: 10,
    author: '佚名',
    source: '人教版一年级下册',
    image: 'images/grade2/lesson59.jpg',
    text: `<p>有一天，小猴子下山来。他走到一块玉米地里。他看见玉米结得又大又多，非常高兴，就掰了一个，扛着往前走。</p>
<p>小猴子扛着玉米，走到一棵桃树下。他看见满树的桃子又大又红，非常高兴，就扔了玉米，去摘桃子。</p>
<p>小猴子捧着几个桃子，走到一片瓜地里。他看见满地的西瓜又大又圆，非常高兴，就扔了桃子，去摘西瓜。</p>
<p>小猴子抱着一个大西瓜往回走。走着走着，看见一只小兔子蹦蹦跳跳的，真可爱，就扔了西瓜，去追小兔子。</p>
<p>小兔子跑进树林子，不见了。小猴子只好空着手回家去。</p>`,
    explanation: {
      summary: '小猴子下山来，先掰了玉米，又扔了玉米去摘桃子，再扔了桃子去摘西瓜，最后又扔了西瓜去追兔子。结果兔子跑不见了，小猴子什么也没有得到，只好空着手回家。',
      keyPoints: [
        '小猴子先掰了玉米，又想要桃子',
        '有了桃子又想要西瓜，有了西瓜又想追兔子',
        '每到一个地方就扔掉之前的东西',
        '最后什么也没有得到，空手回家',
        '做事不能三心二意、见异思迁'
      ],
      vocabulary: [
        { word: '掰', pinyin: 'bāi', meaning: '用手把东西分开或折断' },
        { word: '扛', pinyin: 'káng', meaning: '用肩膀扛着' },
        { word: '扔', pinyin: 'rēng', meaning: '丢掉、抛掉' },
        { word: '捧', pinyin: 'pěng', meaning: '用双手托着' },
        { word: '蹦蹦跳跳', pinyin: 'bèng bèng tiào tiào', meaning: '形容活泼地跳跃' }
      ],
      moral: '这个故事告诉我们，做事不能三心二意、见异思迁。小猴子看到什么都想要，结果什么也没有得到。我们做事要有始有终，认定了目标就要坚持到底，不能半途而废。'
    },
    questions: [
      {
        id: 'q2059_1',
        question: '小猴子最后得到了什么？',
        options: [
          { label: 'A', text: '玉米' },
          { label: 'B', text: '桃子' },
          { label: 'C', text: '西瓜' },
          { label: 'D', text: '什么也没有' }
        ],
        answer: 'D',
        explanation: '小猴子每次看到新东西就扔掉之前的，最后什么也没有得到，只好空着手回家。'
      },
      {
        id: 'q2059_2',
        question: '小猴子为什么扔了西瓜？',
        options: [
          { label: 'A', text: '西瓜不好吃' },
          { label: 'B', text: '西瓜太重了' },
          { label: 'C', text: '看见小兔子蹦蹦跳跳的，想去追' },
          { label: 'D', text: '西瓜坏了' }
        ],
        answer: 'C',
        explanation: '小猴子看见一只小兔子蹦蹦跳跳的，真可爱，就扔了西瓜去追小兔子。'
      },
      {
        id: 'q2059_3',
        question: '小猴子一共扔了几样东西？',
        options: [
          { label: 'A', text: '一样' },
          { label: 'B', text: '两样' },
          { label: 'C', text: '三样' },
          { label: 'D', text: '四样' }
        ],
        answer: 'C',
        explanation: '小猴子扔了玉米、桃子、西瓜，一共扔了三样东西。'
      },
      {
        id: 'q2059_4',
        question: '这个故事中的小猴子有什么毛病？',
        options: [
          { label: 'A', text: '跑得太慢' },
          { label: 'B', text: '三心二意，见一个爱一个' },
          { label: 'C', text: '太懒了' },
          { label: 'D', text: '太胆小了' }
        ],
        answer: 'B',
        explanation: '小猴子每看到一样新东西就扔掉之前的，说明他做事三心二意、见异思迁。'
      },
      {
        id: 'q2059_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '玉米最好' },
          { label: 'B', text: '做事要有始有终，不能三心二意' },
          { label: 'C', text: '不要下山' },
          { label: 'D', text: '兔子跑得快' }
        ],
        answer: 'B',
        explanation: '这个故事告诉我们做事不能三心二意、见异思迁，要有始有终，认定了目标就要坚持到底。'
      }
    ]
  },

  // ==================== 第60天 ====================
  {
    id: 2060,
    title: '《乌鸦喝水》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 60,
    readingTime: 10,
    author: '伊索',
    source: '人教版一年级上册',
    image: 'images/grade2/lesson60.jpg',
    text: `<p>一只乌鸦口{渴|kě}了，到处找水喝。</p>
<p>乌鸦看见一个瓶子里有水。可是瓶子很高，瓶口又小，里边的水不多，它喝不着。怎么办呢？</p>
<p>乌鸦看见旁边有许多小石子。它想出办法来了。</p>
<p>乌鸦把小石子一个一个地{衔|xián}到瓶子里。瓶子里的水慢慢升高了，乌鸦就喝着水了。</p>`,
    explanation: {
      summary: '一只乌鸦口渴了，找到一个瓶子，里面有水但瓶口太小喝不到。乌鸦想出办法，把小石子一个一个衔到瓶子里，水位慢慢升高了，乌鸦终于喝到了水。',
      keyPoints: [
        '乌鸦口渴了到处找水喝，说明它很渴',
        '瓶子很高、瓶口又小、水不多，乌鸦直接喝不到',
        '乌鸦想出了用石子升高水位的好办法',
        '把石子放进瓶子里，水位慢慢升高',
        '遇到困难要动脑筋想办法解决'
      ],
      vocabulary: [
        { word: '口渴', pinyin: 'kǒu kě', meaning: '嘴里干，想喝水' },
        { word: '瓶口', pinyin: 'píng kǒu', meaning: '瓶子的口，进出的地方' },
        { word: '旁边', pinyin: 'páng biān', meaning: '附近、边上' },
        { word: '衔', pinyin: 'xián', meaning: '用嘴叼着、含着' },
        { word: '升高', pinyin: 'shēng gāo', meaning: '从低处往高处变化' }
      ],
      moral: '这个故事告诉我们，遇到困难不要着急，要像乌鸦一样善于观察、动脑筋想办法。只要肯动脑，就能找到解决问题的方法。'
    },
    questions: [
      {
        id: 'q2060_1',
        question: '乌鸦为什么喝不到瓶子里的水？',
        options: [
          { label: 'A', text: '瓶子里没有水' },
          { label: 'B', text: '瓶子很高，瓶口又小，水不多' },
          { label: 'C', text: '乌鸦不会喝水' },
          { label: 'D', text: '水是脏的' }
        ],
        answer: 'B',
        explanation: '瓶子很高，瓶口又小，里边的水不多，乌鸦的嘴伸不进去，所以喝不着。'
      },
      {
        id: 'q2060_2',
        question: '乌鸦想出了什么办法？',
        options: [
          { label: 'A', text: '把瓶子推倒' },
          { label: 'B', text: '把小石子衔到瓶子里，让水位升高' },
          { label: 'C', text: '去找别的水' },
          { label: 'D', text: '叫别的动物帮忙' }
        ],
        answer: 'B',
        explanation: '乌鸦把小石子一个一个地衔到瓶子里，石子占了空间，水位就慢慢升高了。'
      },
      {
        id: 'q2060_3',
        question: '乌鸦是怎样把石子放进瓶子的？',
        options: [
          { label: 'A', text: '用手拿' },
          { label: 'B', text: '用脚踢' },
          { label: 'C', text: '用嘴一个一个衔进去' },
          { label: 'D', text: '用翅膀扇' }
        ],
        answer: 'C',
        explanation: '乌鸦把小石子一个一个地衔到瓶子里。"衔"就是用嘴叼着。'
      },
      {
        id: 'q2060_4',
        question: '放了石子后，水发生了什么变化？',
        options: [
          { label: 'A', text: '水变少了' },
          { label: 'B', text: '水变脏了' },
          { label: 'C', text: '水慢慢升高了' },
          { label: 'D', text: '水没有变化' }
        ],
        answer: 'C',
        explanation: '石子放进瓶子里后占据了空间，把水挤上来了，水位慢慢升高，乌鸦就喝着水了。'
      },
      {
        id: 'q2060_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '乌鸦很丑' },
          { label: 'B', text: '遇到困难要动脑筋想办法' },
          { label: 'C', text: '不要喝生水' },
          { label: 'D', text: '石子可以吃' }
        ],
        answer: 'B',
        explanation: '乌鸦遇到困难不着急，开动脑筋想出了好办法。告诉我们遇到困难要善于观察、勤于思考。'
      }
    ]
  },

  // ==================== 第61天 ====================
  {
    id: 2061,
    title: '《司马光》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 61,
    readingTime: 10,
    author: '佚名',
    source: '人教版三年级上册',
    image: 'images/grade2/lesson61.jpg',
    text: `<p>群儿戏于庭，一儿登{瓮|wèng}，足跌没水中。众皆弃去，光{持|chí}石击{瓮|wèng}破之，水{迸|bèng}，儿得活。</p>
<br>
<p><strong>【注释】</strong></p>
<p>群儿：一群孩子。</p>
<p>戏于庭：在庭院里玩耍。戏，玩耍。庭，庭院。</p>
<p>登{瓮|wèng}：爬上大缸。{瓮|wèng}，一种大缸，用来盛水或酒。</p>
<p>足跌没水中：失足掉进了水缸里。足跌，失足、脚没站稳。没，淹没。</p>
<p>众皆弃去：其他孩子都吓跑了。众，大家。皆，都。弃去，离开、跑掉。</p>
<p>光：指{司|sī}{马|mǎ}{光|guāng}。</p>
<p>{持|chí}石击{瓮|wèng}：拿起石头砸水缸。{持|chí}，拿。击，打、砸。</p>
<p>破之：把水缸砸破了。之，代词，指水缸。</p>
<p>水{迸|bèng}：水从破洞里流出来。{迸|bèng}，涌出。</p>
<p>儿得活：孩子得救了。</p>
<br>
<p><strong>【译文】</strong></p>
<p>一群孩子在庭院里玩耍。一个孩子爬上了一口大水缸，不小心脚没站稳，掉进了水缸里。其他孩子都吓跑了。{司|sī}{马|mǎ}{光|guāng}拿起一块石头，使劲砸向水缸，水缸被砸破了，水流了出来，掉进缸里的孩子得救了。</p>`,
    explanation: {
      summary: '这篇课文讲的是古代名人司马光小时候的故事。一群孩子在庭院里玩，一个孩子掉进了大水缸里。其他孩子都吓跑了，只有司马光沉着冷静，拿起石头砸破了水缸，水流出来，孩子得救了。',
      keyPoints: [
        '司马光是北宋时期著名的政治家和史学家',
        '一个孩子爬上水缸掉进了水里，情况非常危急',
        '其他孩子都吓跑了，只有司马光冷静应对',
        '司马光用石头砸破水缸救出了孩子',
        '遇事要沉着冷静，用智慧解决问题'
      ],
      vocabulary: [
        { word: '庭', pinyin: 'tíng', meaning: '庭院、院子' },
        { word: '瓮', pinyin: 'wèng', meaning: '一种大缸，用来盛水' },
        { word: '皆', pinyin: 'jiē', meaning: '都' },
        { word: '持', pinyin: 'chí', meaning: '拿着' },
        { word: '迸', pinyin: 'bèng', meaning: '涌出、喷出' }
      ],
      moral: '这个故事告诉我们，遇到紧急情况要沉着冷静，像司马光一样用智慧和勇气解决问题。别人害怕逃跑的时候，司马光反而冷静思考，想出了砸缸救人的办法，体现了他的聪明和勇敢。'
    },
    questions: [
      {
        id: 'q2061_1',
        question: '孩子掉进了什么地方？',
        options: [
          { label: 'A', text: '河里' },
          { label: 'B', text: '井里' },
          { label: 'C', text: '大水缸里' },
          { label: 'D', text: '池塘里' }
        ],
        answer: 'C',
        explanation: '课文说"一儿登瓮，足跌没水中"，孩子爬上大水缸，失足掉进了水缸里。'
      },
      {
        id: 'q2061_2',
        question: '司马光是怎么救人的？',
        options: [
          { label: 'A', text: '跳进缸里救人' },
          { label: 'B', text: '去叫大人' },
          { label: 'C', text: '用石头砸破水缸' },
          { label: 'D', text: '用绳子拉' }
        ],
        answer: 'C',
        explanation: '"光持石击瓮破之"说明司马光拿起石头砸破了水缸，水流出来，孩子得救了。'
      },
      {
        id: 'q2061_3',
        question: '其他孩子做了什么？',
        options: [
          { label: 'A', text: '一起帮忙救人' },
          { label: 'B', text: '都吓跑了' },
          { label: 'C', text: '去叫大人' },
          { label: 'D', text: '站在旁边看' }
        ],
        answer: 'B',
        explanation: '"众皆弃去"说明其他孩子都吓跑了，只有司马光留了下来想办法救人。'
      },
      {
        id: 'q2061_4',
        question: '"众皆弃去"中的"皆"是什么意思？',
        options: [
          { label: 'A', text: '一起' },
          { label: 'B', text: '都' },
          { label: 'C', text: '很快' },
          { label: 'D', text: '害怕' }
        ],
        answer: 'B',
        explanation: '"皆"是"都"的意思。"众皆弃去"就是大家都跑掉了。'
      },
      {
        id: 'q2061_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '不要爬水缸' },
          { label: 'B', text: '遇事要沉着冷静，用智慧解决问题' },
          { label: 'C', text: '要听大人的话' },
          { label: 'D', text: '水缸很危险' }
        ],
        answer: 'B',
        explanation: '司马光在紧急情况下没有慌张，冷静地想出了砸缸救人的办法。告诉我们遇事要沉着冷静，用智慧解决问题。'
      }
    ]
  },

  // ==================== 第62天 ====================
  {
    id: 2062,
    title: '《称象》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 62,
    readingTime: 10,
    author: '佚名',
    source: '人教版二年级下册',
    image: 'images/grade2/lesson62.jpg',
    text: `<p>古时候有个叫{曹|cáo}{冲|chōng}的孩子。有一次，有人送给{曹|cáo}{操|cāo}一头大象。{曹|cáo}{操|cāo}很高兴，带着儿子和官员们一同去看。</p>
<p>大象又高又大，身子像一堵墙，腿像四根柱子。官员们一边看一边{议|yì}论："这么大的象，到底有多重呢？"</p>
<p>{曹|cáo}{操|cāo}问："谁有办法把这头大象称一称？"有的说："得造一杆大{秤|chèng}，砍一棵大树做秤杆。"有的说："把大象宰了，割成一块一块的再称。"</p>
<p>{曹|cáo}{操|cāo}听了直摇头。</p>
<p>{曹|cáo}{冲|chōng}站出来说："我有个办法。把大象赶到一艘大船上，看船身下沉多少，就沿着水面在船舷上画一条线。再把大象赶上岸，往船上装石头，装到船下沉到画线的地方为止。然后，称一称船上的石头。石头有多重，大象就有多重。"</p>
<p>{曹|cáo}{操|cāo}微笑着点点头。他叫人照{曹|cáo}{冲|chōng}说的办法去做，果然称出了大象的重量。</p>`,
    explanation: {
      summary: '有人送给曹操一头大象，大家都想知道大象有多重。有人说造大秤，有人说把大象宰了称。曹操的儿子曹冲想出了一个巧妙的办法：把大象放到船上，画出水面线，再换成石头，称石头的重量就是大象的重量。',
      keyPoints: [
        '曹冲是曹操的儿子，从小就非常聪明',
        '大象又高又大，身子像一堵墙，腿像四根柱子',
        '造大秤和宰大象都不是好办法',
        '曹冲用"以石代象"的方法巧妙称出了大象重量',
        '利用水的浮力原理，石头和大象重量相同时船下沉的程度一样'
      ],
      vocabulary: [
        { word: '称', pinyin: 'chēng', meaning: '测量重量' },
        { word: '议论', pinyin: 'yì lùn', meaning: '讨论、发表意见' },
        { word: '秤', pinyin: 'chèng', meaning: '测量重量的工具' },
        { word: '船舷', pinyin: 'chuán xián', meaning: '船两侧的边' },
        { word: '果然', pinyin: 'guǒ rán', meaning: '确实、真的' }
      ],
      moral: '这个故事告诉我们，遇到问题要善于开动脑筋，用巧妙的办法解决。曹冲没有用蛮力，而是利用水的浮力原理，用石头代替大象称出了重量。智慧比力气更有用。'
    },
    questions: [
      {
        id: 'q2062_1',
        question: '曹冲用什么办法称出了大象的重量？',
        options: [
          { label: 'A', text: '造了一杆大秤' },
          { label: 'B', text: '把大象宰了再称' },
          { label: 'C', text: '把大象放上船，画线，再换成石头称' },
          { label: 'D', text: '用很多人力抬' }
        ],
        answer: 'C',
        explanation: '曹冲的办法是：把大象放到船上，画出水面线，再把大象赶上岸，往船上装石头到画线处，然后称石头的重量。'
      },
      {
        id: 'q2062_2',
        question: '大象的身子像什么？',
        options: [
          { label: 'A', text: '一座山' },
          { label: 'B', text: '一堵墙' },
          { label: 'C', text: '一棵树' },
          { label: 'D', text: '一块石头' }
        ],
        answer: 'B',
        explanation: '课文说"大象又高又大，身子像一堵墙，腿像四根柱子"。'
      },
      {
        id: 'q2062_3',
        question: '曹操为什么听了直摇头？',
        options: [
          { label: 'A', text: '他头疼' },
          { label: 'B', text: '他不同意那些不切实际的办法' },
          { label: 'C', text: '他不想看大象了' },
          { label: 'D', text: '他很累' }
        ],
        answer: 'B',
        explanation: '造大秤不现实，宰了大象太可惜，这些办法都不好，所以曹操直摇头表示不同意。'
      },
      {
        id: 'q2062_4',
        question: '为什么石头的重量就是大象的重量？',
        options: [
          { label: 'A', text: '石头和大象一样大' },
          { label: 'B', text: '它们让船下沉到同一个位置，说明重量相同' },
          { label: 'C', text: '石头是特殊材料做的' },
          { label: 'D', text: '大象比石头轻' }
        ],
        answer: 'B',
        explanation: '船下沉到画线的地方，说明排开的水量一样，浮力一样，所以大象和石头的重量相同。'
      },
      {
        id: 'q2062_5',
        question: '这个故事告诉我们什么？',
        options: [
          { label: 'A', text: '大象很重' },
          { label: 'B', text: '遇到问题要善于动脑，用智慧解决' },
          { label: 'C', text: '曹冲力气很大' },
          { label: 'D', text: '石头可以当钱用' }
        ],
        answer: 'B',
        explanation: '曹冲用巧妙的办法称出了大象的重量，说明智慧比蛮力更有用。遇到问题要善于开动脑筋。'
      }
    ]
  },

  // ==================== 第63天 ====================
  {
    id: 2063,
    title: '《玲玲的画》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 63,
    readingTime: 10,
    author: '佚名',
    source: '人教版二年级上册',
    image: 'images/grade2/lesson63.jpg',
    text: `<p>{玲|líng}{玲|líng}得意地端{详|xiáng}着自己画的《我家的一角》。这幅画明天就要参加{评|píng}奖了。</p>
<p>"{玲|líng}{玲|líng}，时间不早了，快去睡吧！"爸爸又在催她了。</p>
<p>"好的，我把画笔收拾一下就去睡。"</p>
<p>就在这时候，水彩笔"啪"的一声掉到了纸上，把画弄{脏|zāng}了。{玲|líng}{玲|líng}哇地哭了起来。</p>
<p>"怎么了，孩子？"爸爸放下报纸问。</p>
<p>"我的画脏了，另画一张也来不及了。"</p>
<p>爸爸仔细地看了看，说："别哭，孩子。在弄脏的地方画点儿什么，不是很好吗？"</p>
<p>{玲|líng}{玲|líng}想了想，拿起笔，在弄脏的地方画了一只小花狗。小花狗懒洋洋地趴在楼梯上。</p>
<p>{玲|líng}{玲|líng}满意地笑了。</p>
<p>爸爸看了，高兴地说："看到了吧，孩子。好多事情并不像我们想象的那么{糟|zāo}。只要肯动脑筋，坏事往往能变成好事。"</p>`,
    explanation: {
      summary: '玲玲画了一幅画准备参加评奖，不小心把画弄脏了，她急得哭了起来。爸爸启发她在弄脏的地方画了一只小花狗，结果画变得更生动了。爸爸告诉她：只要肯动脑筋，坏事往往能变成好事。',
      keyPoints: [
        '玲玲画了一幅《我家的一角》，准备参加评奖',
        '水彩笔掉到纸上，把画弄脏了',
        '爸爸启发玲玲在弄脏的地方想办法',
        '玲玲在脏的地方画了一只小花狗，画变得更好了',
        '坏事可以变成好事，关键是要动脑筋'
      ],
      vocabulary: [
        { word: '端详', pinyin: 'duān xiáng', meaning: '仔细地看' },
        { word: '评奖', pinyin: 'píng jiǎng', meaning: '评选出好的作品给奖励' },
        { word: '催', pinyin: 'cuī', meaning: '催促，让人赶快做' },
        { word: '弄脏', pinyin: 'nòng zāng', meaning: '把东西搞脏了' },
        { word: '糟', pinyin: 'zāo', meaning: '坏、不好' }
      ],
      moral: '这个故事告诉我们，遇到不好的事情不要着急哭闹，要冷静下来想办法。只要肯动脑筋，坏事往往能变成好事。生活中也是一样，遇到困难和挫折，积极想办法应对，可能会有意外的收获。'
    },
    questions: [
      {
        id: 'q2063_1',
        question: '玲玲的画是怎么弄脏的？',
        options: [
          { label: 'A', text: '弟弟弄脏的' },
          { label: 'B', text: '水彩笔掉到了纸上' },
          { label: 'C', text: '被风吹脏的' },
          { label: 'D', text: '水洒了' }
        ],
        answer: 'B',
        explanation: '水彩笔"啪"的一声掉到了纸上，把画弄脏了。'
      },
      {
        id: 'q2063_2',
        question: '玲玲在弄脏的地方画了什么？',
        options: [
          { label: 'A', text: '一朵花' },
          { label: 'B', text: '一棵树' },
          { label: 'C', text: '一只小花狗' },
          { label: 'D', text: '一只猫' }
        ],
        answer: 'C',
        explanation: '玲玲想了想，拿起笔，在弄脏的地方画了一只小花狗，小花狗懒洋洋地趴在楼梯上。'
      },
      {
        id: 'q2063_3',
        question: '爸爸告诉玲玲什么道理？',
        options: [
          { label: 'A', text: '以后要小心' },
          { label: 'B', text: '再画一张就好了' },
          { label: 'C', text: '只要肯动脑筋，坏事往往能变成好事' },
          { label: 'D', text: '不要画画了' }
        ],
        answer: 'C',
        explanation: '爸爸说："好多事情并不像我们想象的那么糟。只要肯动脑筋，坏事往往能变成好事。"'
      },
      {
        id: 'q2063_4',
        question: '"端详"是什么意思？',
        options: [
          { label: 'A', text: '随便看看' },
          { label: 'B', text: '仔细地看' },
          { label: 'C', text: '远远地看' },
          { label: 'D', text: '偷偷地看' }
        ],
        answer: 'B',
        explanation: '"端详"是仔细地看的意思。玲玲得意地仔细看着自己的画。'
      },
      {
        id: 'q2063_5',
        question: '这个故事主要告诉我们什么？',
        options: [
          { label: 'A', text: '画画要小心' },
          { label: 'B', text: '遇到困难要动脑筋，坏事可以变好事' },
          { label: 'C', text: '爸爸画画很厉害' },
          { label: 'D', text: '小花狗很可爱' }
        ],
        answer: 'B',
        explanation: '玲玲的画弄脏后，动脑筋画了小花狗，画反而更好了。告诉我们遇到困难不要着急，动脑筋坏事可以变成好事。'
      }
    ]
  },

  // ==================== 第64天 ====================
  {
    id: 2064,
    title: '《一封信》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 64,
    readingTime: 10,
    author: '佚名',
    source: '人教版二年级上册',
    image: 'images/grade2/lesson64.jpg',
    text: `<p>露西的爸爸出国了，要过半年才能回来。</p>
<p>露西想写一封信给爸爸。</p>
<p>"亲爱的爸爸，"露西在纸上写道，"你不在家，我们很不开心。以前每天早上你一边刮胡子，一边逗我玩。还有，家里的台灯坏了，我们修不好。从此以后，每天晚上我和妈妈都在黑暗中吃饭。"</p>
<p>妈妈下班回来了。她看了看信，说："不如重新写吧。"</p>
<p>"亲爱的爸爸，"露西重新写道，"我们过得挺好的。太阳闪闪发光。阳光下，我们的希比希又蹦又跳。请你告诉我们，你那边的天气好吗？"</p>
<p>露西想了想，接着写道："我们的台灯修好了。我的朋友们常常到我们家来玩。上个星期天，我们还一起去看了一部电影，可好看了。"</p>
<p>"还有什么要写的？"露西问妈妈。</p>
<p>"告诉爸爸，我们天天想他。"妈妈说。</p>
<p>"亲爱的爸爸，"露西又写道，"我们天天想你。"</p>
<p>露西把信{叠|dié}好，放进信封里，贴上邮票，然后和妈妈一起去寄信。</p>`,
    explanation: {
      summary: '露西的爸爸出国了，她要给爸爸写信。第一封信写了家里的不开心的事，妈妈建议她重写。第二封信露西写了开心的事：小狗活泼、台灯修好了、和朋友看电影。最后还写了"我们天天想你"。',
      keyPoints: [
        '露西的爸爸出国了，要半年才能回来',
        '第一封信写了不开心的事，让爸爸担心',
        '妈妈建议重新写，要让爸爸放心',
        '第二封信写了快乐的事情，让爸爸高兴',
        '写信要多写开心的事，让远方的亲人放心'
      ],
      vocabulary: [
        { word: '出国', pinyin: 'chū guó', meaning: '离开自己的国家到别的国家去' },
        { word: '刮胡子', pinyin: 'gā hú zi', meaning: '用剃刀把胡子刮掉' },
        { word: '重新', pinyin: 'chóng xīn', meaning: '再一次、从头开始' },
        { word: '闪闪发光', pinyin: 'shǎn shǎn fā guāng', meaning: '发出闪烁的光芒' },
        { word: '叠', pinyin: 'dié', meaning: '把东西折起来' }
      ],
      moral: '这个故事让我们懂得了写信的方法：要多写开心的事，让远方的亲人放心和高兴。同时也感受到露西对爸爸的思念和一家人的温馨感情。'
    },
    questions: [
      {
        id: 'q2064_1',
        question: '露西为什么要写信？',
        options: [
          { label: 'A', text: '老师布置的作业' },
          { label: 'B', text: '爸爸出国了，要过半年才回来' },
          { label: 'C', text: '爸爸过生日' },
          { label: 'D', text: '过年了' }
        ],
        answer: 'B',
        explanation: '露西的爸爸出国了，要过半年才能回来，露西想写一封信给爸爸。'
      },
      {
        id: 'q2064_2',
        question: '妈妈为什么让露西重写？',
        options: [
          { label: 'A', text: '字写得不好看' },
          { label: 'B', text: '第一封信写了不开心的事，会让爸爸担心' },
          { label: 'C', text: '纸不够用了' },
          { label: 'D', text: '写错字了' }
        ],
        answer: 'B',
        explanation: '第一封信写了家里的不开心事，妈妈看了觉得应该重写，让爸爸放心。'
      },
      {
        id: 'q2064_3',
        question: '第二封信里露西写了什么？',
        options: [
          { label: 'A', text: '家里的坏事' },
          { label: 'B', text: '开心的事，还有"我们天天想你"' },
          { label: 'C', text: '要爸爸买礼物' },
          { label: 'D', text: '不想爸爸了' }
        ],
        answer: 'B',
        explanation: '第二封信写了阳光好、小狗活泼、台灯修好了、和朋友看电影等开心事，最后还写了"我们天天想你"。'
      },
      {
        id: 'q2064_4',
        question: '露西家的小狗叫什么名字？',
        options: [
          { label: 'A', text: '小白' },
          { label: 'B', text: '希比希' },
          { label: 'C', text: '旺财' },
          { label: 'D', text: '小黑' }
        ],
        answer: 'B',
        explanation: '露西在信中写道"阳光下，我们的希比希又蹦又跳"，说明小狗叫希比希。'
      },
      {
        id: 'q2064_5',
        question: '这个故事让我们懂得什么？',
        options: [
          { label: 'A', text: '写信要写很多字' },
          { label: 'B', text: '写信要多写开心的事，让远方的亲人放心' },
          { label: 'C', text: '不要出国' },
          { label: 'D', text: '妈妈字写得好' }
        ],
        answer: 'B',
        explanation: '妈妈教露西写信要写开心的事，让远方的爸爸放心和高兴。这是一种体贴和关爱。'
      }
    ]
  },

  // ==================== 第65天 ====================
  {
    id: 2065,
    title: '《妈妈睡了》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 65,
    readingTime: 10,
    author: '张秋生',
    source: '人教版二年级上册',
    image: 'images/grade2/lesson65.jpg',
    text: `<p>妈妈哄我午睡的时候，自己先睡着了，睡得好{熟|shú}，好香。</p>
<p>睡梦中的妈妈真美丽。明亮的眼睛闭上了，紧紧地闭着。弯弯的眉毛，也在睡觉，睡在妈妈红润的脸上。</p>
<p>睡梦中的妈妈好温柔。妈妈微微地笑着。是的，她在微微地笑着，嘴巴、眼角都笑了。好像在睡梦中，妈妈又想好了一个故事，等会儿讲给我听……</p>
<p>睡梦中的妈妈好{累|lèi}。妈妈的呼吸那么沉。她乌黑的头发粘在微微渗出汗珠的额头上。窗外，小鸟在唱着歌，风儿在树叶间散步。可是妈妈全听不到。她干了好多活，累了。</p>
<p>妈妈，你真的好{累|lèi}呀！</p>`,
    explanation: {
      summary: '妈妈哄"我"午睡时自己先睡着了。"我"仔细观察睡梦中的妈妈：妈妈很美丽，眼睛闭着、眉毛弯弯的；妈妈很温柔，嘴角带着微笑；妈妈很累了，呼吸沉重、额头冒汗。"我"感受到了妈妈的辛苦。',
      keyPoints: [
        '妈妈哄孩子午睡时自己先睡着了',
        '睡梦中的妈妈很美丽：眼睛、眉毛、脸都很美',
        '睡梦中的妈妈很温柔：微微地笑着',
        '睡梦中的妈妈很累了：呼吸沉重、额头出汗',
        '孩子从观察中感受到了妈妈的辛苦和劳累'
      ],
      vocabulary: [
        { word: '哄', pinyin: 'hǒng', meaning: '用好话或行动让人安静' },
        { word: '熟', pinyin: 'shú', meaning: '程度深，这里指睡得很沉' },
        { word: '红润', pinyin: 'hóng rùn', meaning: '红而有光泽' },
        { word: '温柔', pinyin: 'wēn róu', meaning: '态度温和、柔顺' },
        { word: '渗出', pinyin: 'shèn chū', meaning: '慢慢地透出来' }
      ],
      moral: '这个故事让我们感受到孩子对妈妈深深的爱。妈妈每天辛苦地照顾孩子，很累很累。我们要体贴妈妈、爱妈妈，帮妈妈做一些力所能及的事情，让妈妈多休息。'
    },
    questions: [
      {
        id: 'q2065_1',
        question: '妈妈是怎么睡着的？',
        options: [
          { label: 'A', text: '晚上睡觉' },
          { label: 'B', text: '哄"我"午睡时自己先睡着了' },
          { label: 'C', text: '在沙发上睡着了' },
          { label: 'D', text: '看书睡着了' }
        ],
        answer: 'B',
        explanation: '妈妈哄"我"午睡的时候，自己先睡着了，睡得好熟，好香。'
      },
      {
        id: 'q2065_2',
        question: '睡梦中的妈妈是什么样子的？',
        options: [
          { label: 'A', text: '皱着眉头' },
          { label: 'B', text: '在打呼噜' },
          { label: 'C', text: '微微地笑着' },
          { label: 'D', text: '在说梦话' }
        ],
        answer: 'C',
        explanation: '睡梦中的妈妈好温柔，微微地笑着，嘴巴、眼角都笑了。'
      },
      {
        id: 'q2065_3',
        question: '从哪里看出妈妈很累？',
        options: [
          { label: 'A', text: '妈妈在跑步' },
          { label: 'B', text: '呼吸沉重，额头渗出汗珠' },
          { label: 'C', text: '妈妈在做饭' },
          { label: 'D', text: '妈妈在唱歌' }
        ],
        answer: 'B',
        explanation: '妈妈的呼吸那么沉，乌黑的头发粘在微微渗出汗珠的额头上，说明妈妈很累了。'
      },
      {
        id: 'q2065_4',
        question: '"温柔"是什么意思？',
        options: [
          { label: 'A', text: '很厉害' },
          { label: 'B', text: '态度温和、柔顺' },
          { label: 'C', text: '很高大' },
          { label: 'D', text: '很聪明' }
        ],
        answer: 'B',
        explanation: '"温柔"是态度温和、柔顺的意思。睡梦中的妈妈微笑着，给人温柔的感觉。'
      },
      {
        id: 'q2065_5',
        question: '这个故事让我们感受到什么？',
        options: [
          { label: 'A', text: '妈妈很懒' },
          { label: 'B', text: '妈妈很辛苦，我们要爱妈妈' },
          { label: 'C', text: '午睡很重要' },
          { label: 'D', text: '睡觉要盖被子' }
        ],
        answer: 'B',
        explanation: '妈妈每天辛苦照顾孩子，很累很累。我们要体贴妈妈、爱妈妈，帮妈妈做一些力所能及的事。'
      }
    ]
  },

  // ==================== 第66天 ====================
  {
    id: 2066,
    title: '《黄山奇石》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 66,
    readingTime: 10,
    author: '佚名',
    source: '人教版二年级上册',
    image: 'images/grade2/lesson66.jpg',
    text: `<p>闻名中外的黄{山|shān}风景区在我国安徽省南部。那里景色秀丽神奇，尤其是那些怪石，有趣极了。</p>
<p>就说"仙桃石"吧，它好像从天上飞下来的一个大桃子，落在山顶的石盘上。</p>
<p>在一座陡{峭|qiào}的山峰上，有一只"猴子"。它两只胳膊抱着腿，一动不动地蹲在山头，望着翻滚的云海。这就是有趣的"猴子观海"。</p>
<p>"仙人指路"就更有趣了！远远望去，那巨石真像一位仙人站在高高的山峰上，伸着手臂指向前方。</p>
<p>每当太阳升起，有座山峰上的几块巨石，就变成了一只金光闪闪的雄鸡。它伸着脖子，对着天都峰不住地啼叫。不用说，这就是著名的"金鸡叫天都"了。</p>
<p>黄{山|shān}的奇石还有很多，像"天狗望月""狮子抢球""仙女弹琴"等等。那些叫不出名字的奇形怪状的岩石，正等着你去给它们起名字呢！</p>`,
    explanation: {
      summary: '课文介绍了黄山的各种奇石。有像大桃子的"仙桃石"，有像猴子看云海的"猴子观海"，有像仙人指路的"仙人指路"，还有"金鸡叫天都"等等。黄山的石头千奇百怪，形态各异，非常有趣。',
      keyPoints: [
        '黄山在安徽省南部，风景秀丽神奇',
        '"仙桃石"像从天上飞下来的大桃子',
        '"猴子观海"像一只猴子蹲在山头看云海',
        '"仙人指路"像一位仙人伸手指向前方',
        '"金鸡叫天都"像一只金光闪闪的雄鸡在啼叫'
      ],
      vocabulary: [
        { word: '闻名中外', pinyin: 'wén míng zhōng wài', meaning: '在中国和外国都有名' },
        { word: '陡峭', pinyin: 'dǒu qiào', meaning: '山势很陡，不好攀登' },
        { word: '翻滚', pinyin: 'fān gǔn', meaning: '上下滚动、翻腾' },
        { word: '奇形怪状', pinyin: 'qí xíng guài zhuàng', meaning: '形状奇特、不规则' },
        { word: '巨石', pinyin: 'jù shí', meaning: '很大的石头' }
      ],
      moral: '黄山的奇石千姿百态，让我们感受到大自然的鬼斧神工。大自然创造了这么多奇妙的景观，我们要热爱大自然、保护大自然，有机会一定要去看看祖国的大好河山。'
    },
    questions: [
      {
        id: 'q2066_1',
        question: '黄山在哪里？',
        options: [
          { label: 'A', text: '江西省' },
          { label: 'B', text: '安徽省南部' },
          { label: 'C', text: '湖南省' },
          { label: 'D', text: '四川省' }
        ],
        answer: 'B',
        explanation: '课文第一段说"闻名中外的黄山风景区在我国安徽省南部"。'
      },
      {
        id: 'q2066_2',
        question: '"猴子观海"中的猴子在看什么？',
        options: [
          { label: 'A', text: '看太阳' },
          { label: 'B', text: '看游客' },
          { label: 'C', text: '望着翻滚的云海' },
          { label: 'D', text: '看星星' }
        ],
        answer: 'C',
        explanation: '课文说猴子"一动不动地蹲在山头，望着翻滚的云海"。'
      },
      {
        id: 'q2066_3',
        question: '"仙桃石"像什么？',
        options: [
          { label: 'A', text: '一只猴子' },
          { label: 'B', text: '一个大桃子' },
          { label: 'C', text: '一只公鸡' },
          { label: 'D', text: '一位仙人' }
        ],
        answer: 'B',
        explanation: '"仙桃石"好像从天上飞下来的一个大桃子，落在山顶的石盘上。'
      },
      {
        id: 'q2066_4',
        question: '课文中提到了几种奇石？',
        options: [
          { label: 'A', text: '两种' },
          { label: 'B', text: '三种' },
          { label: 'C', text: '四种' },
          { label: 'D', text: '五种' }
        ],
        answer: 'C',
        explanation: '课文详细介绍了四种奇石：仙桃石、猴子观海、仙人指路、金鸡叫天都。'
      },
      {
        id: 'q2066_5',
        question: '这篇课文主要写了什么？',
        options: [
          { label: 'A', text: '黄山的树很多' },
          { label: 'B', text: '黄山的奇石形状各异，非常有趣' },
          { label: 'C', text: '黄山很高' },
          { label: 'D', text: '黄山有很多动物' }
        ],
        answer: 'B',
        explanation: '课文主要介绍了黄山各种形状奇特的石头，它们有的像桃子，有的像猴子，有的像仙人，非常有趣。'
      }
    ]
  },

  // ==================== 第67天 ====================
  {
    id: 2067,
    title: '《日月潭》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 67,
    readingTime: 10,
    author: '佚名',
    source: '人教版二年级上册',
    image: 'images/grade2/lesson67.jpg',
    text: `<p>日月潭是我国台湾省最大的一个湖。它在台中附近的高山上。那里群山{环|huán}绕，树木{茂|mào}盛，周围有许多名胜古迹。</p>
<p>日月潭很深，湖水碧绿。湖中央有个美丽的小岛，叫光华岛。小岛把湖水分成两半，北边像圆圆的太阳，叫日潭；南边像弯弯的月亮，叫月潭。</p>
<p>清晨，湖面上飘着薄薄的雾。天边的晨星和山上的点点灯光，隐隐约约地倒映在湖水中。</p>
<p>中午，太阳高照，整个日月潭的美景和周围的建筑，都清晰地展现在眼前。要是下起蒙蒙细雨，日月潭好像披上轻纱，周围的景物一片朦胧，就像童话中的仙境。</p>
<p>日月潭风光秀丽，吸引了许许多多的中外游客。</p>`,
    explanation: {
      summary: '课文介绍了台湾省的日月潭。日月潭是台湾最大的湖，在台中附近的高山上。湖中央的光华岛把湖水分成两半：北边像太阳叫日潭，南边像月亮叫月潭。日月潭清晨、中午、雨天各有不同的美景。',
      keyPoints: [
        '日月潭是台湾省最大的湖，在台中附近的高山上',
        '光华岛把湖水分成日潭和月潭两部分',
        '北边像圆圆的太阳叫日潭，南边像弯弯的月亮叫月潭',
        '清晨的雾气、中午的阳光、雨天的朦胧各有不同美景',
        '日月潭风光秀丽，吸引了许多中外游客'
      ],
      vocabulary: [
        { word: '群山环绕', pinyin: 'qún shān huán rào', meaning: '很多山围绕在周围' },
        { word: '茂盛', pinyin: 'mào shèng', meaning: '植物长得又多又好' },
        { word: '隐隐约约', pinyin: 'yǐn yǐn yuē yuē', meaning: '看起来不太清楚' },
        { word: '朦胧', pinyin: 'méng lóng', meaning: '模糊不清' },
        { word: '风光秀丽', pinyin: 'fēng guāng xiù lì', meaning: '风景美丽' }
      ],
      moral: '日月潭是祖国宝岛台湾的一颗明珠，风景如画，美不胜收。祖国的大好河山壮丽无比，我们要热爱祖国，也盼望祖国早日统一。'
    },
    questions: [
      {
        id: 'q2067_1',
        question: '日月潭在哪里？',
        options: [
          { label: 'A', text: '大陆福建省' },
          { label: 'B', text: '台湾省台中附近的高山上' },
          { label: 'C', text: '日本' },
          { label: 'D', text: '海南省' }
        ],
        answer: 'B',
        explanation: '课文说日月潭是我国台湾省最大的一个湖，在台中附近的高山上。'
      },
      {
        id: 'q2067_2',
        question: '为什么叫"日月潭"？',
        options: [
          { label: 'A', text: '因为很大' },
          { label: 'B', text: '北边像太阳叫日潭，南边像月亮叫月潭' },
          { label: 'C', text: '因为很深' },
          { label: 'D', text: '因为很美' }
        ],
        answer: 'B',
        explanation: '光华岛把湖水分成两半，北边像圆圆的太阳叫日潭，南边像弯弯的月亮叫月潭。'
      },
      {
        id: 'q2067_3',
        question: '下起蒙蒙细雨时，日月潭像什么？',
        options: [
          { label: 'A', text: '一面镜子' },
          { label: 'B', text: '童话中的仙境' },
          { label: 'C', text: '一幅画' },
          { label: 'D', text: '大海' }
        ],
        answer: 'B',
        explanation: '下起蒙蒙细雨时，日月潭好像披上轻纱，周围的景物一片朦胧，就像童话中的仙境。'
      },
      {
        id: 'q2067_4',
        question: '把湖水分成两半的是什么？',
        options: [
          { label: 'A', text: '一座桥' },
          { label: 'B', text: '一座大山' },
          { label: 'C', text: '光华岛' },
          { label: 'D', text: '一条河' }
        ],
        answer: 'C',
        explanation: '湖中央有个美丽的小岛叫光华岛，它把湖水分成两半。'
      },
      {
        id: 'q2067_5',
        question: '这篇课文表达了作者什么感情？',
        options: [
          { label: 'A', text: '对日月潭的喜爱和对祖国的热爱' },
          { label: 'B', text: '不喜欢台湾' },
          { label: 'C', text: '想去爬山' },
          { label: 'D', text: '想坐船' }
        ],
        answer: 'A',
        explanation: '课文描写了日月潭的美丽景色，表达了作者对日月潭的喜爱和对祖国大好河山的热爱。'
      }
    ]
  },

  // ==================== 第68天 ====================
  {
    id: 2068,
    title: '《葡萄沟》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 68,
    readingTime: 10,
    author: '佚名',
    source: '人教版二年级上册',
    image: 'images/grade2/lesson68.jpg',
    text: `<p>新疆吐鲁番有个地方叫葡萄沟。那里出产水果，五月有杏子，七八月有香梨、{蜜|mì}桃、沙果，到了九十月份，人们最喜爱的葡萄成熟了。</p>
<p>葡萄种在山坡的梯田上。{茂|mào}密的枝叶向四面展开，就像搭起了一个个绿色的凉棚。到了秋季，葡萄一大串一大串地挂在绿叶底下，有红的、白的、紫的、暗红的、淡绿的，五光十色，美丽极了。要是这时候你到葡萄沟去，热情好客的维吾尔族老乡，准会摘下最甜的葡萄，让你吃个够。</p>
<p>收下来的葡萄有的运到城市去，有的运到{阴|yīn}房里制成葡萄干。{阴|yīn}房修在山坡上，样子很像{碉|diāo}堡，四壁留着许多小孔。里面钉着许多木架子。成串的葡萄挂在架子上，利用流通的热空气，使水分{蒸|zhēng}发，就成了葡萄干。这里生产的葡萄干颜色鲜，味道甜，非常有名。</p>
<p>葡萄沟真是个好地方。</p>`,
    explanation: {
      summary: '课文介绍了新疆吐鲁番的葡萄沟。那里盛产水果，特别是葡萄最有名。葡萄五光十色、美丽极了。维吾尔族老乡热情好客。葡萄还可以制成葡萄干，颜色鲜、味道甜，非常有名。',
      keyPoints: [
        '葡萄沟在新疆吐鲁番',
        '葡萄种在山坡的梯田上，枝叶茂密像绿色凉棚',
        '葡萄有红的、白的、紫的等多种颜色，五光十色',
        '维吾尔族老乡热情好客',
        '葡萄在阴房里利用热空气蒸发水分制成葡萄干'
      ],
      vocabulary: [
        { word: '梯田', pinyin: 'tī tián', meaning: '山坡上像楼梯一样一层一层的田' },
        { word: '茂密', pinyin: 'mào mì', meaning: '草木长得又多又密' },
        { word: '五光十色', pinyin: 'wǔ guāng shí sè', meaning: '形容色彩鲜艳、花样繁多' },
        { word: '阴房', pinyin: 'yīn fáng', meaning: '晾制葡萄干的房子' },
        { word: '蒸发', pinyin: 'zhēng fā', meaning: '水分变成气体消失' }
      ],
      moral: '葡萄沟真是个好地方，那里不仅有好吃的水果，还有热情好客的维吾尔族人民。我们的祖国地大物博，各地都有自己的特色和美丽风景。'
    },
    questions: [
      {
        id: 'q2068_1',
        question: '葡萄沟在哪里？',
        options: [
          { label: 'A', text: '山东省' },
          { label: 'B', text: '新疆吐鲁番' },
          { label: 'C', text: '甘肃省' },
          { label: 'D', text: '河北省' }
        ],
        answer: 'B',
        explanation: '课文第一段说"新疆吐鲁番有个地方叫葡萄沟"。'
      },
      {
        id: 'q2068_2',
        question: '"五光十色"形容什么？',
        options: [
          { label: 'A', text: '葡萄有很多颜色，色彩鲜艳' },
          { label: 'B', text: '葡萄很大' },
          { label: 'C', text: '葡萄很酸' },
          { label: 'D', text: '阳光很亮' }
        ],
        answer: 'A',
        explanation: '葡萄有红的、白的、紫的、暗红的、淡绿的，颜色很多，所以说"五光十色"。'
      },
      {
        id: 'q2068_3',
        question: '葡萄干是在什么地方制成的？',
        options: [
          { label: 'A', text: '太阳下晒' },
          { label: 'B', text: '阴房里' },
          { label: 'C', text: '锅里炒' },
          { label: 'D', text: '冰箱里' }
        ],
        answer: 'B',
        explanation: '收下来的葡萄运到阴房里制成葡萄干。阴房利用流通的热空气使水分蒸发。'
      },
      {
        id: 'q2068_4',
        question: '葡萄沟的老乡是什么样的？',
        options: [
          { label: 'A', text: '很冷漠' },
          { label: 'B', text: '热情好客' },
          { label: 'C', text: '很小气' },
          { label: 'D', text: '很胆小' }
        ],
        answer: 'B',
        explanation: '课文说"热情好客的维吾尔族老乡，准会摘下最甜的葡萄，让你吃个够"。'
      },
      {
        id: 'q2068_5',
        question: '葡萄沟的葡萄干有什么特点？',
        options: [
          { label: 'A', text: '很酸' },
          { label: 'B', text: '颜色鲜，味道甜' },
          { label: 'C', text: '很小' },
          { label: 'D', text: '很贵' }
        ],
        answer: 'B',
        explanation: '课文最后说"这里生产的葡萄干颜色鲜，味道甜，非常有名"。'
      }
    ]
  },

  // ==================== 第69天 ====================
  {
    id: 2069,
    title: '《难忘的泼水节》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 69,
    readingTime: 10,
    author: '佚名',
    source: '人教版二年级上册',
    image: 'images/grade2/lesson69.jpg',
    text: `<p>火红火红的凤凰花开了，{傣|dǎi}族人民一年一度的泼水节又到了。</p>
<p>1961年的泼水节，{傣|dǎi}族人民特别高兴，因为{敬|jìng}爱的{周|zhōu}{恩|ēn}{来|lái}{总|zǒng}{理|lǐ}来到了他们身边。</p>
<p>那天早晨，人们敲起象脚鼓，从四面八方赶来了。为了欢迎{周|zhōu}{总|zǒng}{理|lǐ}，人们在地上撒满了凤凰花的花瓣，好像铺上了鲜红的地毯。一条条龙船驶过江面，一串串花炮升上天空。人们欢呼着："{周|zhōu}{总|zǒng}{理|lǐ}来了！"</p>
<p>{周|zhōu}{恩|ēn}{来|lái}{总|zǒng}{理|lǐ}身穿对{襟|jīn}白褂，咖啡色长裤，头上包着一条水红色头巾，笑容满面地来到人群中。他接过一只象脚鼓，敲着欢乐的鼓点，踩着凤凰花铺成的"地毯"，同{傣|dǎi}族人民一起跳舞。</p>
<p>开始泼水了。大家一边欢呼，一边向{周|zhōu}{总|zǒng}{理|lǐ}泼水，祝福他健康长寿。{周|zhōu}{总|zǒng}{理|lǐ}一边端着{盛|chéng}满清水的银碗，一边拿着柏树枝蘸了水，向人们泼洒。{傣|dǎi}族人民多么幸福啊！</p>
<p>多么令人难忘啊，1961年的泼水节！</p>`,
    explanation: {
      summary: '1961年的泼水节，傣族人民格外高兴，因为周恩来总理来到了他们身边。周总理身穿傣族服装，和傣族人民一起敲鼓、跳舞、泼水。周总理向人民泼水祝福，人民也向周总理泼水祝福，场面非常热烈。',
      keyPoints: [
        '泼水节是傣族人民的传统节日',
        '1961年周恩来总理来到傣族人民中间过泼水节',
        '周总理身穿傣族服装，和人民一起跳舞',
        '周总理用银碗和柏树枝向人民泼水祝福',
        '体现了周总理和人民心连心的深厚感情'
      ],
      vocabulary: [
        { word: '泼水节', pinyin: 'pō shuǐ jié', meaning: '傣族传统节日，互相泼水祝福' },
        { word: '凤凰花', pinyin: 'fèng huáng huā', meaning: '一种火红色的花' },
        { word: '傣族', pinyin: 'dǎi zú', meaning: '我国少数民族之一' },
        { word: '笑容满面', pinyin: 'xiào róng mǎn miàn', meaning: '脸上全是笑容，很高兴' },
        { word: '蘸', pinyin: 'zhàn', meaning: '在液体里沾一下' }
      ],
      moral: '这个故事表现了周恩来总理平易近人、和人民心连心的美好品质。周总理身穿傣族服装，和傣族人民一起欢度泼水节，体现了他对少数民族人民的尊重和关爱。这个泼水节让傣族人民永远难忘。'
    },
    questions: [
      {
        id: 'q2069_1',
        question: '泼水节是哪个民族的节日？',
        options: [
          { label: 'A', text: '汉族' },
          { label: 'B', text: '傣族' },
          { label: 'C', text: '蒙古族' },
          { label: 'D', text: '藏族' }
        ],
        answer: 'B',
        explanation: '课文说"傣族人民一年一度的泼水节又到了"，泼水节是傣族的传统节日。'
      },
      {
        id: 'q2069_2',
        question: '1961年的泼水节为什么特别难忘？',
        options: [
          { label: 'A', text: '因为下了大雨' },
          { label: 'B', text: '因为周恩来总理来了' },
          { label: 'C', text: '因为花特别多' },
          { label: 'D', text: '因为放假了' }
        ],
        answer: 'B',
        explanation: '傣族人民特别高兴，因为敬爱的周恩来总理来到了他们身边。'
      },
      {
        id: 'q2069_3',
        question: '周总理穿了什么衣服？',
        options: [
          { label: 'A', text: '西装' },
          { label: 'B', text: '军装' },
          { label: 'C', text: '傣族服装：对襟白褂、咖啡色长裤、水红色头巾' },
          { label: 'D', text: '运动服' }
        ],
        answer: 'C',
        explanation: '周总理身穿对襟白褂，咖啡色长裤，头上包着一条水红色头巾。这是傣族的传统服装。'
      },
      {
        id: 'q2069_4',
        question: '人们为什么向周总理泼水？',
        options: [
          { label: 'A', text: '和他开玩笑' },
          { label: 'B', text: '祝福他健康长寿' },
          { label: 'C', text: '天气太热了' },
          { label: 'D', text: '讨厌他' }
        ],
        answer: 'B',
        explanation: '大家一边欢呼，一边向周总理泼水，祝福他健康长寿。在泼水节，被泼到水是收到祝福。'
      },
      {
        id: 'q2069_5',
        question: '这篇课文表达了什么感情？',
        options: [
          { label: 'A', text: '对水的喜爱' },
          { label: 'B', text: '周总理和傣族人民心连心的深厚感情' },
          { label: 'C', text: '傣族的衣服很漂亮' },
          { label: 'D', text: '凤凰花很美' }
        ],
        answer: 'B',
        explanation: '周总理和傣族人民一起过泼水节，体现了他和人民心连心的深厚感情。这个泼水节让傣族人民永远难忘。'
      }
    ]
  },

  // ==================== 第70天 ====================
  {
    id: 2070,
    title: '《大还是小》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 70,
    readingTime: 10,
    author: '佚名',
    source: '人教版一年级上册',
    image: 'images/grade2/lesson70.jpg',
    text: `<p>有时候，我觉得自己很大。</p>
<p>我自己穿衣服的时候，我自己系鞋带的时候，我觉得自己很大。</p>
<p>有时候，我觉得自己很小。</p>
<p>我够不到按钮的时候，我听到雷声喊妈妈的时候，我觉得自己很小。</p>
<p>有时候，我希望自己不要长大。</p>
<p>更多的时候，我盼着自己快点儿长大。</p>`,
    explanation: {
      summary: '这篇课文写了一个小朋友对自己"大"还是"小"的思考。自己穿衣服、系鞋带的时候觉得自己很大；够不到按钮、听到雷声害怕的时候觉得自己很小。有时候不想长大，更多的时候盼着快点长大。',
      keyPoints: [
        '自己穿衣服、系鞋带时觉得自己长大了',
        '够不到按钮、害怕雷声时觉得自己还小',
        '有时候不想长大，有时候盼着快长大',
        '每个人都在慢慢长大',
        '成长中有时觉得自己大，有时觉得自己小'
      ],
      vocabulary: [
        { word: '系鞋带', pinyin: 'xì xié dài', meaning: '把鞋带系上、绑好' },
        { word: '够', pinyin: 'gòu', meaning: '伸手去拿或去触' },
        { word: '按钮', pinyin: 'àn niǔ', meaning: '用手按的开关' },
        { word: '雷声', pinyin: 'léi shēng', meaning: '打雷的声音' },
        { word: '盼望', pinyin: 'pàn wàng', meaning: '非常希望' }
      ],
      moral: '每个小朋友都在成长中。有时候觉得自己很大，能做很多事情；有时候又觉得自己很小，有些事情做不到。这很正常。我们要勇敢地面对成长，学着做更多的事情，慢慢变得更强大。'
    },
    questions: [
      {
        id: 'q2070_1',
        question: '"我"什么时候觉得自己很大？',
        options: [
          { label: 'A', text: '吃糖的时候' },
          { label: 'B', text: '自己穿衣服、系鞋带的时候' },
          { label: 'C', text: '看动画片的时候' },
          { label: 'D', text: '做游戏的时候' }
        ],
        answer: 'B',
        explanation: '课文说"我自己穿衣服的时候，我自己系鞋带的时候，我觉得自己很大"。'
      },
      {
        id: 'q2070_2',
        question: '"我"什么时候觉得自己很小？',
        options: [
          { label: 'A', text: '睡觉的时候' },
          { label: 'B', text: '够不到按钮、听到雷声喊妈妈的时候' },
          { label: 'C', text: '吃饭的时候' },
          { label: 'D', text: '上学的时候' }
        ],
        answer: 'B',
        explanation: '"我够不到按钮的时候，我听到雷声喊妈妈的时候，我觉得自己很小。"'
      },
      {
        id: 'q2070_3',
        question: '"我"更多的时候盼着什么？',
        options: [
          { label: 'A', text: '不要上学' },
          { label: 'B', text: '快点儿长大' },
          { label: 'C', text: '买玩具' },
          { label: 'D', text: '去玩' }
        ],
        answer: 'B',
        explanation: '"更多的时候，我盼着自己快点儿长大。"'
      },
      {
        id: 'q2070_4',
        question: '为什么有时候觉得大，有时候觉得小？',
        options: [
          { label: 'A', text: '身体有时高有时矮' },
          { label: 'B', text: '能做到的事觉得自己大，做不到的事觉得自己小' },
          { label: 'C', text: '衣服有时大有时小' },
          { label: 'D', text: '心情好就大，心情不好就小' }
        ],
        answer: 'B',
        explanation: '能自己做事情时觉得自己长大了，有些事情做不到时又觉得自己还小。这就是成长的过程。'
      },
      {
        id: 'q2070_5',
        question: '这篇课文告诉我们什么？',
        options: [
          { label: 'A', text: '大人好小孩不好' },
          { label: 'B', text: '每个人都在慢慢成长，要学会独立' },
          { label: 'C', text: '不要长大' },
          { label: 'D', text: '打雷很可怕' }
        ],
        answer: 'B',
        explanation: '成长中有时觉得自己大有时觉得自己小，这很正常。我们要学着做更多的事情，慢慢变得更强大。'
      }
    ]
  },

  // ==================== 第71天 ====================
  {
    id: 2071,
    title: '《项链》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 71,
    readingTime: 10,
    author: '佚名',
    source: '人教版一年级上册',
    image: 'images/grade2/lesson71.jpg',
    text: `<p>大海，蓝蓝的，又宽又远。沙滩，黄黄的，又长又软。雪白雪白的浪花，哗哗地笑着，涌向沙滩，悄悄撒下小小的{海|hǎi}螺和{贝|bèi}壳。</p>
<p>小娃娃嘻嘻地笑着，迎上去，捡起小小的海螺和贝壳，穿成彩色的项链，挂在胸前。快活的脚印落在沙滩上，穿成金色的项链，挂在大海胸前。</p>`,
    explanation: {
      summary: '课文描写了海边的美丽景色和孩子们在沙滩上玩耍的快乐场景。蓝蓝的大海、黄黄的沙滩、雪白的浪花送来海螺和贝壳。小娃娃捡起海螺和贝壳穿成项链，脚印也像金色的项链挂在大海胸前。',
      keyPoints: [
        '大海蓝蓝的，又宽又远',
        '沙滩黄黄的，又长又软',
        '浪花雪白雪白的，送来海螺和贝壳',
        '孩子们把海螺和贝壳穿成彩色的项链',
        '脚印像金色的项链挂在大海胸前'
      ],
      vocabulary: [
        { word: '海螺', pinyin: 'hǎi luó', meaning: '海里的一种有壳的动物' },
        { word: '贝壳', pinyin: 'bèi ké', meaning: '贝类动物的外壳' },
        { word: '浪花', pinyin: 'làng huā', meaning: '波浪溅起的白色水花' },
        { word: '快活', pinyin: 'kuài huo', meaning: '高兴、快乐' },
        { word: '涌向', pinyin: 'yǒng xiàng', meaning: '像水一样涌过去' }
      ],
      moral: '大海是美丽的，沙滩是快乐的。课文用优美的语言描写了海边的美景和孩子们的快乐。大自然给我们带来了无穷的欢乐，我们要热爱大自然、亲近大自然。'
    },
    questions: [
      {
        id: 'q2071_1',
        question: '小娃娃用什么穿成了彩色的项链？',
        options: [
          { label: 'A', text: '花朵' },
          { label: 'B', text: '小海螺和贝壳' },
          { label: 'C', text: '石头' },
          { label: 'D', text: '珍珠' }
        ],
        answer: 'B',
        explanation: '小娃娃捡起小小的海螺和贝壳，穿成彩色的项链，挂在胸前。'
      },
      {
        id: 'q2071_2',
        question: '"金色的项链"指的是什么？',
        options: [
          { label: 'A', text: '黄金做的项链' },
          { label: 'B', text: '小娃娃在沙滩上的脚印' },
          { label: 'C', text: '阳光照在海上' },
          { label: 'D', text: '贝壳的颜色' }
        ],
        answer: 'B',
        explanation: '"快活的脚印落在沙滩上，穿成金色的项链，挂在大海胸前。"脚印像金色的项链。'
      },
      {
        id: 'q2071_3',
        question: '课文描写了什么颜色？',
        options: [
          { label: 'A', text: '只有蓝色' },
          { label: 'B', text: '蓝蓝的大海、黄黄的沙滩、雪白的浪花' },
          { label: 'C', text: '只有白色' },
          { label: 'D', text: '只有黄色' }
        ],
        answer: 'B',
        explanation: '课文描写了蓝蓝的大海、黄黄的沙滩、雪白雪白的浪花，颜色非常丰富。'
      },
      {
        id: 'q2071_4',
        question: '浪花像在做什么？',
        options: [
          { label: 'A', text: '在哭泣' },
          { label: 'B', text: '在睡觉' },
          { label: 'C', text: '在笑着' },
          { label: 'D', text: '在生气' }
        ],
        answer: 'C',
        explanation: '"雪白雪白的浪花，哗哗地笑着"，浪花像人在笑一样，这是拟人的写法。'
      },
      {
        id: 'q2071_5',
        question: '这篇课文描写了什么地方的景色？',
        options: [
          { label: 'A', text: '山上' },
          { label: 'B', text: '花园里' },
          { label: 'C', text: '海边' },
          { label: 'D', text: '森林里' }
        ],
        answer: 'C',
        explanation: '课文描写了大海、沙滩、浪花、海螺、贝壳等，这些都是海边的景色。'
      }
    ]
  },

  // ==================== 第72天 ====================
  {
    id: 2072,
    title: '《雪地里的小画家》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 72,
    readingTime: 10,
    author: '程宏明',
    source: '人教版一年级上册',
    image: 'images/grade2/lesson72.jpg',
    text: `<p>下雪啦，下雪啦！</p>
<p>雪地里来了一群小画家。</p>
<p>小鸡画竹叶，小狗画梅花，</p>
<p>小鸭画枫叶，小马画月牙。</p>
<p>不用{颜|yán}料不用笔，</p>
<p>几步就成一幅画。</p>
<p>{青|qīng}蛙为什么没参加？</p>
<p>他在洞里睡着啦。</p>`,
    explanation: {
      summary: '这是一首描写雪地里小动物脚印的儿歌。下雪了，小鸡、小狗、小鸭、小马来到雪地里，它们的脚印像不同的图案：小鸡的脚印像竹叶，小狗的脚印像梅花，小鸭的脚印像枫叶，小马的脚印像月牙。青蛙没有参加，因为它在洞里冬眠。',
      keyPoints: [
        '小鸡的脚印像竹叶',
        '小狗的脚印像梅花',
        '小鸭的脚印像枫叶',
        '小马的脚印像月牙',
        '青蛙在洞里冬眠，没有出来'
      ],
      vocabulary: [
        { word: '画家', pinyin: 'huà jiā', meaning: '画画的人' },
        { word: '颜料', pinyin: 'yán liào', meaning: '画画用的彩色材料' },
        { word: '竹叶', pinyin: 'zhú yè', meaning: '竹子的叶子' },
        { word: '月牙', pinyin: 'yuè yá', meaning: '弯弯的月亮' },
        { word: '冬眠', pinyin: 'dōng mián', meaning: '动物在冬天睡觉过冬' }
      ],
      moral: '这首儿歌用有趣的方式让我们知道了不同动物脚印的形状：小鸡像竹叶、小狗像梅花、小鸭像枫叶、小马像月牙。还告诉我们青蛙要冬眠。大自然真有趣！'
    },
    questions: [
      {
        id: 'q2072_1',
        question: '小鸡的脚印像什么？',
        options: [
          { label: 'A', text: '梅花' },
          { label: 'B', text: '竹叶' },
          { label: 'C', text: '枫叶' },
          { label: 'D', text: '月牙' }
        ],
        answer: 'B',
        explanation: '课文说"小鸡画竹叶"，小鸡的脚印像竹叶的形状。'
      },
      {
        id: 'q2072_2',
        question: '小狗的脚印像什么？',
        options: [
          { label: 'A', text: '竹叶' },
          { label: 'B', text: '枫叶' },
          { label: 'C', text: '梅花' },
          { label: 'D', text: '月牙' }
        ],
        answer: 'C',
        explanation: '"小狗画梅花"，小狗的脚印像梅花的形状。'
      },
      {
        id: 'q2072_3',
        question: '青蛙为什么没有参加？',
        options: [
          { label: 'A', text: '青蛙不喜欢雪' },
          { label: 'B', text: '青蛙生病了' },
          { label: 'C', text: '青蛙在洞里冬眠' },
          { label: 'D', text: '青蛙出去旅行了' }
        ],
        answer: 'C',
        explanation: '"青蛙为什么没参加？他在洞里睡着啦。"青蛙在洞里冬眠，冬天不出来活动。'
      },
      {
        id: 'q2072_4',
        question: '小动物用什么画画？',
        options: [
          { label: 'A', text: '用颜料和笔' },
          { label: 'B', text: '用自己的脚印' },
          { label: 'C', text: '用树枝' },
          { label: 'D', text: '用手指' }
        ],
        answer: 'B',
        explanation: '"不用颜料不用笔，几步就成一幅画。"小动物是用脚印在雪地上"画画"的。'
      },
      {
        id: 'q2072_5',
        question: '这首儿歌告诉我们什么？',
        options: [
          { label: 'A', text: '下雪很好玩' },
          { label: 'B', text: '不同动物脚印形状不同，青蛙要冬眠' },
          { label: 'C', text: '小动物会画画' },
          { label: 'D', text: '雪很冷' }
        ],
        answer: 'B',
        explanation: '不同动物的脚印形状不同，小鸡像竹叶，小狗像梅花，小鸭像枫叶，小马像月牙。青蛙冬天要冬眠。'
      }
    ]
  },

  // ==================== 第73天 ====================
  {
    id: 2073,
    title: '《小公鸡和小鸭子》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 73,
    readingTime: 10,
    author: '佚名',
    source: '人教版一年级下册',
    image: 'images/grade2/lesson73.jpg',
    text: `<p>小公鸡和小鸭子一块儿出去玩。它们走进草地里。小公鸡找到了许多虫子，吃得很欢。小鸭子捉不到虫子，急得直哭。小公鸡看见了，捉到虫子就给小鸭子吃。</p>
<p>它们走到小河边。小鸭子说："公鸡弟弟，我到河里捉鱼给你吃。"小公鸡说："我也去。"小鸭子说："不行，不行，你不会游泳，会{淹|yān}死的！"小公鸡不信，偷偷地跟在小鸭子后面，也下了水。</p>
<p>小公鸡脚站不稳，直拍翅膀。他喊："鸭子哥哥，快来救我！"小鸭子听见了，飞快地游过来，让小公鸡坐在自己的背上。小公鸡上了岸，笑着对小鸭子说："鸭子哥哥，谢谢你。"</p>`,
    explanation: {
      summary: '小公鸡和小鸭子一起出去玩。在草地里，小公鸡会捉虫子，小鸭子不会，小公鸡就给小鸭子吃虫子。在河边，小鸭子会游泳，小公鸡不会。小公鸡不听劝告下了水，差点淹死，小鸭子救了他。它们互相帮助，是好朋友。',
      keyPoints: [
        '小公鸡会捉虫子，小鸭子不会捉虫子',
        '小公鸡把捉到的虫子给小鸭子吃',
        '小鸭子会游泳，小公鸡不会游泳',
        '小公鸡不听劝告下了水，差点淹死',
        '小鸭子救了小公鸡，它们互相帮助'
      ],
      vocabulary: [
        { word: '一块儿', pinyin: 'yí kuài er', meaning: '一起、一同' },
        { word: '捉', pinyin: 'zhuō', meaning: '抓住、捕获' },
        { word: '淹', pinyin: 'yān', meaning: '被水淹没' },
        { word: '偷偷', pinyin: 'tōu tōu', meaning: '不让别人知道地、悄悄地' },
        { word: '飞快', pinyin: 'fēi kuài', meaning: '非常快' }
      ],
      moral: '这个故事告诉我们，朋友之间要互相帮助。小公鸡帮小鸭子捉虫子，小鸭子救了小公鸡。每个人都有自己的长处和短处，要互相帮助、互相照顾。同时也要听朋友的劝告，不要一意孤行。'
    },
    questions: [
      {
        id: 'q2073_1',
        question: '在草地里，谁帮谁捉虫子？',
        options: [
          { label: 'A', text: '小鸭子帮小公鸡' },
          { label: 'B', text: '小公鸡帮小鸭子' },
          { label: 'C', text: '它们互相帮助' },
          { label: 'D', text: '它们各捉各的' }
        ],
        answer: 'B',
        explanation: '小公鸡找到了许多虫子，小鸭子捉不到虫子，小公鸡捉到虫子就给小鸭子吃。'
      },
      {
        id: 'q2073_2',
        question: '小公鸡下了水后发生了什么？',
        options: [
          { label: 'A', text: '小公鸡游得很好' },
          { label: 'B', text: '小公鸡差点淹死，被小鸭子救了' },
          { label: 'C', text: '小公鸡捉到了鱼' },
          { label: 'D', text: '小公鸡自己上了岸' }
        ],
        answer: 'B',
        explanation: '小公鸡脚站不稳，直拍翅膀，喊救命。小鸭子飞快游过来，让小公鸡坐在自己的背上救了他。'
      },
      {
        id: 'q2073_3',
        question: '小鸭子为什么不许小公鸡下水？',
        options: [
          { label: 'A', text: '水太冷了' },
          { label: 'B', text: '小公鸡不会游泳，会淹死' },
          { label: 'C', text: '河里有大鱼' },
          { label: 'D', text: '小鸭子不想和他玩' }
        ],
        answer: 'B',
        explanation: '小鸭子说"不行，不行，你不会游泳，会淹死的！"小公鸡不会游泳，下水很危险。'
      },
      {
        id: 'q2073_4',
        question: '这个故事告诉我们什么？',
        options: [
          { label: 'A', text: '公鸡不好' },
          { label: 'B', text: '朋友之间要互相帮助，也要听劝告' },
          { label: 'C', text: '鸭子比公鸡厉害' },
          { label: 'D', text: '不要去河边' }
        ],
        answer: 'B',
        explanation: '小公鸡帮小鸭子捉虫子，小鸭子救了小公鸡。朋友之间要互相帮助，也要听朋友的劝告。'
      },
      {
        id: 'q2073_5',
        question: '小公鸡和小鸭子各有什么本领？',
        options: [
          { label: 'A', text: '都会游泳' },
          { label: 'B', text: '小公鸡会捉虫子，小鸭子会游泳' },
          { label: 'C', text: '都会捉虫子' },
          { label: 'D', text: '都不会游泳' }
        ],
        answer: 'B',
        explanation: '小公鸡会在草地里捉虫子，小鸭子会在水里游泳。各有各的本领。'
      }
    ]
  },

  // ==================== 第74天 ====================
  {
    id: 2074,
    title: '《小蜗牛》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 74,
    readingTime: 10,
    author: '佚名',
    source: '人教版一年级上册',
    image: 'images/grade2/lesson74.jpg',
    text: `<p>蜗牛一家住在小树林的旁边。</p>
<p>春天来了，蜗牛妈妈对小蜗牛说："孩子，到小树林里去玩吧，小树发芽了。"</p>
<p>小蜗牛爬呀，爬呀，好久才爬回来。它说："妈妈，小树长满了叶子，地上还长着许多草莓呢。"</p>
<p>蜗牛妈妈说："哦，已经是夏天了！快去摘几颗草莓回来。"</p>
<p>小蜗牛爬呀，爬呀，好久才爬回来。它说："妈妈，草莓没有了，地上长着蘑菇，树叶全变黄了。"</p>
<p>蜗牛妈妈说："哦，已经是秋天了！快去采几个蘑菇回来。"</p>
<p>小蜗牛爬呀，爬呀，好久才爬回来。它说："妈妈，蘑菇没有了，地上盖着雪，树叶全掉了。"</p>
<p>蜗牛妈妈说："哦，已经是冬天了！唉，你就待在家里过冬吧。"</p>`,
    explanation: {
      summary: '蜗牛妈妈让小蜗牛去小树林里玩，可是小蜗牛爬得太慢了。春天出门，夏天才回来；夏天出门，秋天才回来；秋天出门，冬天才回来。每次回来季节都变了，东西也变了。小蜗牛错过了每一个季节的美景。',
      keyPoints: [
        '小蜗牛每次出门都要爬好久才能回来',
        '春天发芽→夏天长叶有草莓→秋天黄叶有蘑菇→冬天落雪',
        '小蜗牛爬得太慢，总是错过季节',
        '四季在不断变化，每个季节有不同的特征',
        '小蜗牛虽然慢，但每个季节的景色都看到了'
      ],
      vocabulary: [
        { word: '蜗牛', pinyin: 'wō niú', meaning: '一种爬得很慢、背着壳的小动物' },
        { word: '发芽', pinyin: 'fā yá', meaning: '植物开始长出新芽' },
        { word: '草莓', pinyin: 'cǎo méi', meaning: '一种红色的水果' },
        { word: '蘑菇', pinyin: 'mó gu', meaning: '一种长在地上的菌类' },
        { word: '过冬', pinyin: 'guò dōng', meaning: '度过冬天' }
      ],
      moral: '这个故事让我们了解了一年四季的变化：春天小树发芽，夏天长满叶子有草莓，秋天树叶变黄有蘑菇，冬天落雪树叶全掉。小蜗牛虽然爬得慢，但它看到了不同季节的景色。每个季节都有自己的美好。'
    },
    questions: [
      {
        id: 'q2074_1',
        question: '小蜗牛为什么总是错过季节？',
        options: [
          { label: 'A', text: '它不想出门' },
          { label: 'B', text: '它爬得太慢了' },
          { label: 'C', text: '它迷路了' },
          { label: 'D', text: '它睡着了' }
        ],
        answer: 'B',
        explanation: '小蜗牛每次爬呀爬呀，好久才爬回来。等它回来时季节已经变了，因为蜗牛爬得非常慢。'
      },
      {
        id: 'q2074_2',
        question: '小蜗牛夏天出门时，树林里有什么？',
        options: [
          { label: 'A', text: '树叶发芽了' },
          { label: 'B', text: '长满了叶子，地上有草莓' },
          { label: 'C', text: '树叶黄了，有蘑菇' },
          { label: 'D', text: '地上盖着雪' }
        ],
        answer: 'B',
        explanation: '小蜗牛夏天回来说"小树长满了叶子，地上还长着许多草莓呢"。'
      },
      {
        id: 'q2074_3',
        question: '秋天的树林里有什么？',
        options: [
          { label: 'A', text: '草莓' },
          { label: 'B', text: '蘑菇和变黄的树叶' },
          { label: 'C', text: '白雪' },
          { label: 'D', text: '绿色的树叶' }
        ],
        answer: 'B',
        explanation: '小蜗牛秋天回来说"地上长着蘑菇，树叶全变黄了"。'
      },
      {
        id: 'q2074_4',
        question: '这个故事描述了几个季节？',
        options: [
          { label: 'A', text: '两个' },
          { label: 'B', text: '三个' },
          { label: 'C', text: '四个' },
          { label: 'D', text: '一个' }
        ],
        answer: 'C',
        explanation: '故事描述了春夏秋冬四个季节的景色变化。'
      },
      {
        id: 'q2074_5',
        question: '从这个故事中你了解到了什么？',
        options: [
          { label: 'A', text: '蜗牛很懒' },
          { label: 'B', text: '一年四季不断变化，每个季节有不同的特征' },
          { label: 'C', text: '树林很危险' },
          { label: 'D', text: '草莓很好吃' }
        ],
        answer: 'B',
        explanation: '春天发芽、夏天长叶结果、秋天叶黄有蘑菇、冬天落雪。每个季节都有不同的特征。'
      }
    ]
  },

  // ==================== 第75天 ====================
  {
    id: 2075,
    title: '《比尾巴》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 75,
    readingTime: 10,
    author: '程宏明',
    source: '人教版一年级上册',
    image: 'images/grade2/lesson75.jpg',
    text: `<p>谁的尾巴长？</p>
<p>谁的尾巴短？</p>
<p>谁的尾巴好像一把伞？</p>
<p>猴子的尾巴长，</p>
<p>兔子的尾巴短，</p>
<p>松鼠的尾巴好像一把伞。</p>
<br>
<p>谁的尾巴弯？</p>
<p>谁的尾巴扁？</p>
<p>谁的尾巴最好看？</p>
<p>公鸡的尾巴弯，</p>
<p>鸭子的尾巴扁，</p>
<p>孔雀的尾巴最好看。</p>`,
    explanation: {
      summary: '这是一首关于动物尾巴的儿歌。通过问答的方式，介绍了六种动物尾巴的特点：猴子尾巴长，兔子尾巴短，松鼠尾巴像伞；公鸡尾巴弯，鸭子尾巴扁，孔雀尾巴最好看。',
      keyPoints: [
        '猴子的尾巴长',
        '兔子的尾巴短',
        '松鼠的尾巴大大的，好像一把伞',
        '公鸡的尾巴弯弯的',
        '鸭子的尾巴扁扁的',
        '孔雀的尾巴色彩斑斓，最好看'
      ],
      vocabulary: [
        { word: '尾巴', pinyin: 'wěi ba', meaning: '动物身体末端突出的部分' },
        { word: '长', pinyin: 'cháng', meaning: '距离大，与短相对' },
        { word: '短', pinyin: 'duǎn', meaning: '距离小，与长相对' },
        { word: '弯', pinyin: 'wān', meaning: '不直，弯曲的' },
        { word: '扁', pinyin: 'biǎn', meaning: '物体平而薄' }
      ],
      moral: '这首儿歌用问答的形式让我们了解了不同动物尾巴的特点。每种动物的尾巴都不一样，各有各的用处。大自然中的动物多种多样，非常有趣。我们要善于观察身边的事物。'
    },
    questions: [
      {
        id: 'q2075_1',
        question: '谁的尾巴最长？',
        options: [
          { label: 'A', text: '兔子' },
          { label: 'B', text: '猴子' },
          { label: 'C', text: '松鼠' },
          { label: 'D', text: '公鸡' }
        ],
        answer: 'B',
        explanation: '"猴子的尾巴长"，在这些动物中猴子的尾巴最长。'
      },
      {
        id: 'q2075_2',
        question: '松鼠的尾巴像什么？',
        options: [
          { label: 'A', text: '一根绳子' },
          { label: 'B', text: '一把扇子' },
          { label: 'C', text: '一把伞' },
          { label: 'D', text: '一把扫帚' }
        ],
        answer: 'C',
        explanation: '"松鼠的尾巴好像一把伞"，松鼠的尾巴又大又蓬松，像一把伞。'
      },
      {
        id: 'q2075_3',
        question: '谁的尾巴最好看？',
        options: [
          { label: 'A', text: '猴子' },
          { label: 'B', text: '鸭子' },
          { label: 'C', text: '公鸡' },
          { label: 'D', text: '孔雀' }
        ],
        answer: 'D',
        explanation: '"孔雀的尾巴最好看"，孔雀开屏时尾巴五彩缤纷，非常美丽。'
      },
      {
        id: 'q2075_4',
        question: '公鸡的尾巴是什么样的？',
        options: [
          { label: 'A', text: '长长的' },
          { label: 'B', text: '弯弯的' },
          { label: 'C', text: '扁扁的' },
          { label: 'D', text: '短短的' }
        ],
        answer: 'B',
        explanation: '"公鸡的尾巴弯"，公鸡的尾巴是弯弯的。'
      },
      {
        id: 'q2075_5',
        question: '这首儿歌用了什么方式来介绍动物尾巴？',
        options: [
          { label: 'A', text: '讲故事' },
          { label: 'B', text: '一问一答' },
          { label: 'C', text: '唱歌' },
          { label: 'D', text: '画画' }
        ],
        answer: 'B',
        explanation: '儿歌用问答的方式：先问"谁的尾巴长？"再答"猴子的尾巴长"。一问一答，朗朗上口。'
      }
    ]
  },

  // ==================== 第76天 ====================
  {
    id: 2076,
    title: '《影子》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 76,
    readingTime: 10,
    author: '林焕彰',
    source: '人教版一年级上册',
    image: 'images/grade2/lesson76.jpg',
    text: `<p>影子在前，影子在后，</p>
<p>影子常常跟着我，就像一条小黑狗。</p>
<p>影子在左，影子在右，</p>
<p>影子常常陪着我，它是我的好朋友。</p>`,
    explanation: {
      summary: '这是一首关于影子的儿歌。影子有时在前，有时在后，有时在左，有时在右。影子像一条小黑狗一样跟着"我"，是"我"的好朋友。',
      keyPoints: [
        '影子有时在前面，有时在后面',
        '影子有时在左边，有时在右边',
        '影子像一条小黑狗跟着"我"',
        '影子是"我"的好朋友',
        '有光的地方就会有影子'
      ],
      vocabulary: [
        { word: '影子', pinyin: 'yǐng zi', meaning: '物体挡住光线后形成的暗影' },
        { word: '前', pinyin: 'qián', meaning: '前面，与后相对' },
        { word: '后', pinyin: 'hòu', meaning: '后面，与前相对' },
        { word: '左', pinyin: 'zuǒ', meaning: '左边' },
        { word: '右', pinyin: 'yòu', meaning: '右边' }
      ],
      moral: '这首儿歌用轻松有趣的方式让我们认识了影子。影子是因为光被物体挡住而产生的，它会随着光线方向改变位置。影子像好朋友一样陪伴着我们，非常有趣。'
    },
    questions: [
      {
        id: 'q2076_1',
        question: '影子像什么？',
        options: [
          { label: 'A', text: '一条小花猫' },
          { label: 'B', text: '一条小黑狗' },
          { label: 'C', text: '一只小鸟' },
          { label: 'D', text: '一朵白云' }
        ],
        answer: 'B',
        explanation: '"影子常常跟着我，就像一条小黑狗"，影子被比作一条小黑狗。'
      },
      {
        id: 'q2076_2',
        question: '影子会出现在哪些位置？',
        options: [
          { label: 'A', text: '只在前面' },
          { label: 'B', text: '只在后面' },
          { label: 'C', text: '前、后、左、右都有可能' },
          { label: 'D', text: '只在头顶' }
        ],
        answer: 'C',
        explanation: '儿歌说影子在前、在后、在左、在右，说明影子可能出现在各个方向。'
      },
      {
        id: 'q2076_3',
        question: '影子是怎样产生的？',
        options: [
          { label: 'A', text: '有人画的' },
          { label: 'B', text: '物体挡住光线产生的' },
          { label: 'C', text: '风吹来的' },
          { label: 'D', text: '从地上长出来的' }
        ],
        answer: 'B',
        explanation: '影子是物体挡住光线后形成的暗影。有光的地方，物体就会产生影子。'
      },
      {
        id: 'q2076_4',
        question: '这首儿歌把影子比作什么？',
        options: [
          { label: 'A', text: '敌人' },
          { label: 'B', text: '小黑狗和好朋友' },
          { label: 'C', text: '玩具' },
          { label: 'D', text: '食物' }
        ],
        answer: 'B',
        explanation: '影子像一条小黑狗跟着"我"，又是"我"的好朋友，总是陪伴着"我"。'
      },
      {
        id: 'q2076_5',
        question: '影子什么时候会变长？',
        options: [
          { label: 'A', text: '中午' },
          { label: 'B', text: '早晚太阳低的时候' },
          { label: 'C', text: '晚上' },
          { label: 'D', text: '阴天' }
        ],
        answer: 'B',
        explanation: '当太阳位置低时（早晨和傍晚），影子会变长；太阳高时（中午），影子较短。'
      }
    ]
  },

  // ==================== 第77天 ====================
  {
    id: 2077,
    title: '《青蛙写诗》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 77,
    readingTime: 10,
    author: '张秋生',
    source: '人教版一年级上册',
    image: 'images/grade2/lesson77.jpg',
    text: `<p>下雨了，</p>
<p>雨点儿{淅|xī}{沥|lì}啦啦。</p>
<p>青蛙说："我来写一首诗！"</p>
<p>小蝌蚪游过来说："我要给你当个小逗号。"</p>
<p>池塘里的水泡泡说："我能当个小句号。"</p>
<p>{荷|hé}叶上的一串水珠说："我们可以当{省|shěng}略号。"</p>
<p>青蛙的诗写成了：</p>
<p>"咯咯，咯咯，</p>
<p>咯咯咯。</p>
<p>咯咯，咯咯，</p>
<p>咯咯咯……"</p>`,
    explanation: {
      summary: '下雨了，青蛙要写诗。小蝌蚪像逗号，水泡泡像句号，一串水珠像省略号。在朋友们的帮助下，青蛙的诗写成了。这是一首充满想象力的儿歌。',
      keyPoints: [
        '下雨了，青蛙想写诗',
        '小蝌蚪的样子像逗号',
        '水泡泡的样子像句号',
        '一串水珠的样子像省略号',
        '青蛙的诗用"咯咯"来表示青蛙的叫声'
      ],
      vocabulary: [
        { word: '淅沥', pinyin: 'xī lì', meaning: '形容雨声' },
        { word: '蝌蚪', pinyin: 'kē dǒu', meaning: '青蛙的幼体，黑色有尾巴' },
        { word: '逗号', pinyin: 'dòu hào', meaning: '标点符号，表示句中停顿' },
        { word: '句号', pinyin: 'jù hào', meaning: '标点符号，表示句子结束' },
        { word: '省略号', pinyin: 'shěng lüè hào', meaning: '标点符号，表示省略' }
      ],
      moral: '这首儿歌充满了想象力，把小蝌蚪比作逗号，水泡泡比作句号，水珠比作省略号。大自然中有很多东西的样子和标点符号很像。我们要善于观察和想象，发现生活中有趣的联系。'
    },
    questions: [
      {
        id: 'q2077_1',
        question: '小蝌蚪像什么标点符号？',
        options: [
          { label: 'A', text: '句号' },
          { label: 'B', text: '逗号' },
          { label: 'C', text: '省略号' },
          { label: 'D', text: '问号' }
        ],
        answer: 'B',
        explanation: '小蝌蚪说"我要给你当个小逗号"。小蝌蚪的样子像一个逗号。'
      },
      {
        id: 'q2077_2',
        question: '水泡泡像什么标点符号？',
        options: [
          { label: 'A', text: '逗号' },
          { label: 'B', text: '感叹号' },
          { label: 'C', text: '句号' },
          { label: 'D', text: '省略号' }
        ],
        answer: 'C',
        explanation: '池塘里的水泡泡说"我能当个小句号"。圆圆的水泡泡像一个句号。'
      },
      {
        id: 'q2077_3',
        question: '一串水珠像什么标点符号？',
        options: [
          { label: 'A', text: '句号' },
          { label: 'B', text: '逗号' },
          { label: 'C', text: '感叹号' },
          { label: 'D', text: '省略号' }
        ],
        answer: 'D',
        explanation: '荷叶上的一串水珠说"我们可以当省略号"。一排圆点的水珠像省略号。'
      },
      {
        id: 'q2077_4',
        question: '青蛙的诗是用什么写的？',
        options: [
          { label: 'A', text: '用笔写的' },
          { label: 'B', text: '用青蛙的叫声写的' },
          { label: 'C', text: '用脚印写的' },
          { label: 'D', text: '用树叶写的' }
        ],
        answer: 'B',
        explanation: '青蛙的诗写的是"咯咯，咯咯"，这是青蛙的叫声。青蛙用叫声"写诗"。'
      },
      {
        id: 'q2077_5',
        question: '这首儿歌告诉我们什么？',
        options: [
          { label: 'A', text: '青蛙会写字' },
          { label: 'B', text: '善于观察和想象，发现生活中的有趣联系' },
          { label: 'C', text: '下雨天不能出门' },
          { label: 'D', text: '标点符号不重要' }
        ],
        answer: 'B',
        explanation: '儿歌把蝌蚪、水泡、水珠和标点符号联系在一起，告诉我们善于观察和想象，就能发现有趣的联系。'
      }
    ]
  },

  // ==================== 第78天 ====================
  {
    id: 2078,
    title: '《雨点儿》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 78,
    readingTime: 10,
    author: '金波',
    source: '人教版一年级上册',
    image: 'images/grade2/lesson78.jpg',
    text: `<p>数不清的雨点儿，从云彩里飘落下来。</p>
<p>半空中，大雨点儿问小雨点儿："你要到哪里去？"</p>
<p>小雨点儿回答："我要去有花有草的地方。你呢？"</p>
<p>大雨点儿说："我要去没有花没有草的地方。"</p>
<p>不久，有花有草的地方，花更红了，草更绿了。没有花没有草的地方，长出了红的花，绿的草。</p>`,
    explanation: {
      summary: '数不清的雨点从云彩里飘落下来。小雨点去了有花有草的地方，大雨点去了没有花没有草的地方。不久，有花有草的地方更美了，没有花草的地方也长出了花和草。雨水滋润了大地，万物生长。',
      keyPoints: [
        '数不清的雨点儿从云彩里飘落',
        '小雨点儿去了有花有草的地方',
        '大雨点儿去了没有花没有草的地方',
        '雨水滋润大地，让花草长得更好',
        '没有花草的地方也因为雨水长出了花草'
      ],
      vocabulary: [
        { word: '数不清', pinyin: 'shǔ bù qīng', meaning: '太多了数不过来' },
        { word: '飘落', pinyin: 'piāo luò', meaning: '轻轻地落下来' },
        { word: '云彩', pinyin: 'yún cai', meaning: '云' },
        { word: '回答', pinyin: 'huí dá', meaning: '回复别人的问题' },
        { word: '滋润', pinyin: 'zī rùn', meaning: '使水分充足，不干燥' }
      ],
      moral: '这个故事告诉我们，雨水对大自然非常重要。雨水滋润大地，让花草树木生长。大雨点去了没有花草的地方，那里也长出了花和草。每个人都像雨点一样，到需要自己的地方去，就能让世界变得更美好。'
    },
    questions: [
      {
        id: 'q2078_1',
        question: '小雨点儿要去哪里？',
        options: [
          { label: 'A', text: '大海里' },
          { label: 'B', text: '有花有草的地方' },
          { label: 'C', text: '没有花没有草的地方' },
          { label: 'D', text: '城市里' }
        ],
        answer: 'B',
        explanation: '小雨点儿回答："我要去有花有草的地方。"'
      },
      {
        id: 'q2078_2',
        question: '大雨点儿要去哪里？',
        options: [
          { label: 'A', text: '有花有草的地方' },
          { label: 'B', text: '大海里' },
          { label: 'C', text: '没有花没有草的地方' },
          { label: 'D', text: '山上' }
        ],
        answer: 'C',
        explanation: '大雨点儿说："我要去没有花没有草的地方。"'
      },
      {
        id: 'q2078_3',
        question: '大雨点儿去了之后发生了什么？',
        options: [
          { label: 'A', text: '什么也没变化' },
          { label: 'B', text: '长出了红的花，绿的草' },
          { label: 'C', text: '下雪了' },
          { label: 'D', text: '变成了沙漠' }
        ],
        answer: 'B',
        explanation: '课文说"没有花没有草的地方，长出了红的花，绿的草"。大雨点滋润了干旱的土地。'
      },
      {
        id: 'q2078_4',
        question: '"数不清"说明什么？',
        options: [
          { label: 'A', text: '雨点很少' },
          { label: 'B', text: '雨点很多很多' },
          { label: 'C', text: '雨点很大' },
          { label: 'D', text: '雨点很快' }
        ],
        answer: 'B',
        explanation: '"数不清"是太多数不过来的意思，说明雨点儿非常多。'
      },
      {
        id: 'q2078_5',
        question: '这个故事告诉我们什么？',
        options: [
          { label: 'A', text: '大雨点比小雨点好' },
          { label: 'B', text: '到需要自己的地方去，就能让世界更美好' },
          { label: 'C', text: '不要下雨' },
          { label: 'D', text: '花草不需要水' }
        ],
        answer: 'B',
        explanation: '大雨点去了没有花草的地方，那里也长出了花和草。到需要自己的地方去，就能做出贡献。'
      }
    ]
  },

  // ==================== 第79天 ====================
  {
    id: 2079,
    title: '《明天要远足》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 79,
    readingTime: 10,
    author: '方素珍',
    source: '人教版一年级上册',
    image: 'images/grade2/lesson79.jpg',
    text: `<p>翻过来，</p>
<p>唉——</p>
<p>睡不着。</p>
<p>那地方的海，</p>
<p>真的像老师说的，</p>
<p>那么多种颜色吗？</p>
<br>
<p>翻过去，</p>
<p>唉——</p>
<p>睡不着。</p>
<p>那地方的云，</p>
<p>真的像同学说的，</p>
<p>那么洁白柔软吗？</p>
<br>
<p>翻过来，</p>
<p>翻过去，</p>
<p>唉——</p>
<p>到底什么时候，</p>
<p>才天亮呢？</p>`,
    explanation: {
      summary: '这首儿歌写了一个小朋友明天要去远足，晚上兴奋得睡不着觉。他翻来翻去，想着那地方的海是不是有很多颜色，云是不是洁白柔软。他急切地盼望着天亮，期待着明天的远足。',
      keyPoints: [
        '小朋友明天要去远足，非常兴奋',
        '翻来覆去睡不着觉',
        '想象着大海的颜色和白云的样子',
        '急切地盼望着天亮',
        '表达了对远足的期待和向往'
      ],
      vocabulary: [
        { word: '远足', pinyin: 'yuǎn zú', meaning: '较远的徒步旅行、郊游' },
        { word: '睡不着', pinyin: 'shuì bù zháo', meaning: '不能入睡' },
        { word: '洁白', pinyin: 'jié bái', meaning: '非常白、干净' },
        { word: '柔软', pinyin: 'róu ruǎn', meaning: '软和、不硬' },
        { word: '到底', pinyin: 'dào dǐ', meaning: '究竟' }
      ],
      moral: '这首儿歌表达了小朋友对远足的期待和兴奋。生活中有很多美好的事情值得期待。我们要像诗中的小朋友一样，对大自然充满好奇和向往，热爱生活中的每一次旅行和体验。'
    },
    questions: [
      {
        id: 'q2079_1',
        question: '小朋友为什么睡不着？',
        options: [
          { label: 'A', text: '生病了' },
          { label: 'B', text: '明天要远足，太兴奋了' },
          { label: 'C', text: '害怕黑暗' },
          { label: 'D', text: '肚子饿了' }
        ],
        answer: 'B',
        explanation: '小朋友明天要去远足，非常期待和兴奋，翻来覆去睡不着觉。'
      },
      {
        id: 'q2079_2',
        question: '小朋友在想象什么？',
        options: [
          { label: 'A', text: '作业' },
          { label: 'B', text: '大海的颜色和白云的样子' },
          { label: 'C', text: '考试' },
          { label: 'D', text: '玩具' }
        ],
        answer: 'B',
        explanation: '小朋友想着海是不是有很多颜色，云是不是洁白柔软。'
      },
      {
        id: 'q2079_3',
        question: '"远足"是什么意思？',
        options: [
          { label: 'A', text: '坐车旅行' },
          { label: 'B', text: '较远的徒步旅行、郊游' },
          { label: 'C', text: '坐飞机' },
          { label: 'D', text: '在家休息' }
        ],
        answer: 'B',
        explanation: '"远足"是指比较远的徒步旅行或郊游活动。'
      },
      {
        id: 'q2079_4',
        question: '小朋友翻来翻去在做什么？',
        options: [
          { label: 'A', text: '做运动' },
          { label: 'B', text: '找东西' },
          { label: 'C', text: '兴奋得睡不着' },
          { label: 'D', text: '做游戏' }
        ],
        answer: 'C',
        explanation: '"翻过来""翻过去"说明小朋友因为太期待明天的远足，怎么也睡不着。'
      },
      {
        id: 'q2079_5',
        question: '这首儿歌表达了什么心情？',
        options: [
          { label: 'A', text: '伤心' },
          { label: 'B', text: '生气' },
          { label: 'C', text: '对远足的期待和兴奋' },
          { label: 'D', text: '无聊' }
        ],
        answer: 'C',
        explanation: '小朋友翻来覆去睡不着，想象着大海和白云，急切盼望天亮，表达了对远足的期待和兴奋。'
      }
    ]
  },

  // ==================== 第80天 ====================
  {
    id: 2080,
    title: '《动物王国开大会》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 2,
    day: 80,
    readingTime: 10,
    author: '佚名',
    source: '人教版一年级下册',
    image: 'images/grade2/lesson80.jpg',
    text: `<p>狗熊站在台上，大声说："请注意，请注意！明天开大会，请大家都参加！"</p>
<p>{狐|hú}{狸|li}跑来了，问："大熊哥，大会什么时候开呀？"</p>
<p>狗熊拍拍脑袋说："对呀，我忘记说时间了。请注意，请注意！明天上午八点开大会，请大家都参加！"</p>
<p>{狐|hú}{狸|li}刚走，大灰狼跑来了，问："大熊哥，大会在哪里开呀？"</p>
<p>狗熊又拍拍脑袋说："对呀，我忘记说地点了。请注意，请注意！明天上午八点在森林广场开大会，请大家都参加！"</p>
<p>大灰狼刚走，{老|lǎo}{虎|hǔ}跑来了，问："大熊哥，大会的内容是什么呀？"</p>
<p>狗熊再拍拍脑袋说："对呀，我忘记说内容了。"</p>
<p>狗熊重新广播："请注意，请注意！明天上午八点在森林广场开大会，请大家都来讨论怎样过冬的事情！"</p>
<p>这一次，时间、地点、内容都说清楚了。</p>`,
    explanation: {
      summary: '狗熊通知大家开大会，但总是丢三落四，先忘了说时间，再说忘了地点，又忘了说内容。每次都是别人来问才想起来补上。最后终于把时间、地点、内容都说清楚了。',
      keyPoints: [
        '狗熊通知开大会，但总是丢三落四',
        '先忘了说时间，被提醒后补上',
        '又忘了说地点，再被提醒补上',
        '还忘了说内容，又补上',
        '通知要说清楚时间、地点和内容'
      ],
      vocabulary: [
        { word: '通知', pinyin: 'tōng zhī', meaning: '把事情告诉别人' },
        { word: '大会', pinyin: 'dà huì', meaning: '很多人参加的会议' },
        { word: '广播', pinyin: 'guǎng bō', meaning: '通过喇叭广泛传播消息' },
        { word: '地点', pinyin: 'dì diǎn', meaning: '地方、位置' },
        { word: '内容', pinyin: 'nèi róng', meaning: '事物里面包含的东西' }
      ],
      moral: '这个故事告诉我们，通知别人事情时要说清楚时间、地点和内容，不能丢三落四。做事要细心、有条理，把重要的信息一次说完整，这样才能让大家都知道怎么做。'
    },
    questions: [
      {
        id: 'q2080_1',
        question: '狗熊第一次通知时忘了说什么？',
        options: [
          { label: 'A', text: '忘了说时间' },
          { label: 'B', text: '忘了说地点' },
          { label: 'C', text: '忘了说内容' },
          { label: 'D', text: '忘了说请大家参加' }
        ],
        answer: 'A',
        explanation: '狗熊第一次只说了"明天开大会"，狐狸问时间，狗熊才想起忘了说时间。'
      },
      {
        id: 'q2080_2',
        question: '谁来问了地点？',
        options: [
          { label: 'A', text: '狐狸' },
          { label: 'B', text: '大灰狼' },
          { label: 'C', text: '老虎' },
          { label: 'D', text: '兔子' }
        ],
        answer: 'B',
        explanation: '大灰狼跑来问"大会在哪里开呀"，狗熊才想起忘了说地点。'
      },
      {
        id: 'q2080_3',
        question: '大会讨论的内容是什么？',
        options: [
          { label: 'A', text: '选举大王' },
          { label: 'B', text: '怎样过冬' },
          { label: 'C', text: '举办运动会' },
          { label: 'D', text: '庆祝节日' }
        ],
        answer: 'B',
        explanation: '狗熊最后通知说"请大家都来讨论怎样过冬的事情"。'
      },
      {
        id: 'q2080_4',
        question: '狗熊有什么毛病？',
        options: [
          { label: 'A', text: '太懒了' },
          { label: 'B', text: '丢三落四，通知不完整' },
          { label: 'C', text: '声音太小' },
          { label: 'D', text: '跑得太慢' }
        ],
        answer: 'B',
        explanation: '狗熊三次通知都丢掉了重要信息，先忘时间、再忘地点、又忘内容，说明他做事丢三落四。'
      },
      {
        id: 'q2080_5',
        question: '这个故事告诉我们什么？',
        options: [
          { label: 'A', text: '动物们不喜欢开会' },
          { label: 'B', text: '通知别人事情要说清楚时间、地点和内容' },
          { label: 'C', text: '狗熊不聪明' },
          { label: 'D', text: '狐狸很烦人' }
        ],
        answer: 'B',
        explanation: '通知别人事情时，要说清楚时间、地点和内容，不能丢三落四。做事要细心、有条理。'
      }
    ]
  }
];

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONTENT_GRADE_2_EXTRA3;
}
