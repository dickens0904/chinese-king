// 语文小霸王 - 三年级课文内容数据（扩展篇）
// 每日一篇课文，每篇约10分钟阅读时间
// 难字标注拼音，课文后有讲解和阅读理解练习

const CONTENT_GRADE_3_EXTRA = [
  // ==================== 第16课 ====================
  {
    id: 3016,
    title: '《矛和盾的集合》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 3,
    day: 16,
    readingTime: 10,
    author: '佚名',
    source: '人教版三年级语文',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20warrior%20combining%20spear%20and%20shield%20to%20create%20first%20tank%20concept%2C%20invention%20story%20illustration&image_size=landscape_4_3',
    text: `<p>发明家手持矛和盾，与朋友比赛。对方的矛如雨点般向他刺来，发明家用盾左抵右挡，还是难以{招架|zhāo jià}。在紧张危急的关头，发明家忽然产生了一个想法："盾太小了！如果盾大得像个铁屋子，我钻在铁屋子里，敌人就一枪也{戳|chuō}不到我了！"</p>
<p>可是，这样固然安全，自己却变成了只能缩在壳里保命的蜗牛或乌龟。自卫，是为了更好地进攻呀！对了，在铁屋子上开个小洞，从洞里伸出进攻的枪或炮。这样，既有了安全的保障，又能随时发起进攻。</p>
<p>于是，发明家把盾造成了铁屋子，安上轮子，装上履带，架上大炮——这就是最初的坦克。坦克把盾的自卫和矛的进攻合二为一，在战场上大显{神|shén}威。1916年，英军首次使用坦克进攻德军阵地，取得了重大胜利。</p>
<p>是的，谁善于把别人的长处集于一身，谁就会是胜利者。这个道理，不仅适用于发明创造，也适用于我们的学习和生活。善于学习别人的优点，{弥补|mí bǔ}自己的不足，就能不断进步。</p>`,
    explanation: {
      summary: '本文通过发明家将矛和盾的优点结合起来，发明了坦克的故事，告诉我们一个道理：善于把别人的长处集于一身，就能取得成功。',
      keyPoints: [
        '发明家在比赛中发现盾太小，不能完全保护自己',
        '他想到把盾变成铁屋子，加上矛的功能，发明了坦克',
        '坦克结合了盾的自卫和矛的进攻两种功能',
        '故事告诉我们善于集合别人的长处，就能成为胜利者'
      ],
      vocabulary: [
        { word: '招架', pinyin: 'zhāo jià', meaning: '抵挡，应付（攻击）' },
        { word: '戳', pinyin: 'chuō', meaning: '用尖锐的东西刺' },
        { word: '神威', pinyin: 'shén wēi', meaning: '神奇的威力' },
        { word: '弥补', pinyin: 'mí bǔ', meaning: '补足不够的部分' },
        { word: '合二为一', pinyin: 'hé èr wéi yī', meaning: '把两个事物合并成一个' }
      ],
      moral: '这个故事告诉我们，善于吸取别人的长处，把不同事物的优点结合在一起，就能创造出更强大的东西。我们在学习中也要善于借鉴别人的优点。'
    },
    questions: [
      {
        id: 'q3016_1',
        question: '发明家在比赛中遇到了什么困难？',
        options: [
          { label: 'A', text: '他的矛断了' },
          { label: 'B', text: '对方的矛太厉害，盾挡不住' },
          { label: 'C', text: '他不想比赛了' },
          { label: 'D', text: '他的盾太大了' }
        ],
        answer: 'B',
        explanation: '课文写道："对方的矛如雨点般向他刺来，发明家用盾左抵右挡，还是难以招架。"'
      },
      {
        id: 'q3016_2',
        question: '发明家最初想到的办法是什么？',
        options: [
          { label: 'A', text: '造一把更大的矛' },
          { label: 'B', text: '逃跑' },
          { label: 'C', text: '把盾大得像个铁屋子' },
          { label: 'D', text: '投降认输' }
        ],
        answer: 'C',
        explanation: '课文写道："如果盾大得像个铁屋子，我钻在铁屋子里，敌人就一枪也戳不到我了！"'
      },
      {
        id: 'q3016_3',
        question: '最终的坦克集合了哪两种武器的优点？',
        options: [
          { label: 'A', text: '弓和箭' },
          { label: 'B', text: '矛和盾' },
          { label: 'C', text: '刀和剑' },
          { label: 'D', text: '石头和木棒' }
        ],
        answer: 'B',
        explanation: '课文写道："坦克把盾的自卫和矛的进攻合二为一。"'
      },
      {
        id: 'q3016_4',
        question: '"谁善于把别人的长处集于一身，谁就会是胜利者。"这句话的意思是？',
        options: [
          { label: 'A', text: '要抢别人的东西' },
          { label: 'B', text: '要善于学习和借鉴别人的优点' },
          { label: 'C', text: '只靠自己就行' },
          { label: 'D', text: '不需要创新' }
        ],
        answer: 'B',
        explanation: '这句话告诉我们，善于学习别人的长处并结合在一起，就能变得更强大。'
      },
      {
        id: 'q3016_5',
        question: '如果只钻在铁屋子里会怎样？',
        options: [
          { label: 'A', text: '会非常安全' },
          { label: 'B', text: '会变成只能保命不能进攻的蜗牛' },
          { label: 'C', text: '会赢得比赛' },
          { label: 'D', text: '会受到表扬' }
        ],
        answer: 'B',
        explanation: '课文写道："这样固然安全，自己却变成了只能缩在壳里保命的蜗牛或乌龟。"'
      }
    ]
  },

  // ==================== 第17课 ====================
  {
    id: 3017,
    title: '《陶罐和铁罐》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 3,
    day: 17,
    readingTime: 10,
    author: '黄瑞云',
    source: '人教版三年级语文',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20humble%20clay%20pot%20and%20a%20proud%20iron%20pot%20in%20ancient%20ruins%2C%20the%20clay%20pot%20survives%2C%20fable%20illustration&image_size=landscape_4_3',
    text: `<p>国王的{御|yù}{厨|chú}里有两个{罐|guàn}子，一个是陶的，一个是铁的。铁罐看不起陶罐，常常{奚|xī}落它。</p>
<p>"你敢碰我吗，陶罐子！"铁罐{傲|ào}慢地问。</p>
<p>"不敢，铁罐兄弟。"陶罐{谦|qiān}虚地回答。</p>
<p>"我就知道你不敢，懦弱的东西！"铁罐说，带着更加轻{蔑|miè}的神气。</p>
<p>"我确实不敢碰你，但并不是懦弱。"陶罐{争|zhēng}辩说，"我们生来就是盛东西的，并不是来互相碰撞的。说到盛东西，我不见得比你差。再说……"</p>
<p>"住嘴！"铁罐恼怒了，"你怎么敢和我相提并论！你等着吧，要不了几天，你就会破成碎片，我却永远在这里，什么也不怕。"</p>
<p>"何必这样说呢？"陶罐说，"我们还是和{睦|mù}相处吧，有什么可吵的呢！"</p>
<p>"和你在一起，我感到羞{耻|chǐ}，你算什么东西！"铁罐说，"走着瞧吧，总有一天，我要把你碰成碎片！"</p>
<p>陶罐不再理会铁罐。时间在流逝，世界上发生了许多事情。王朝{覆|fù}灭了，宫殿倒塌了。两个罐子{遗|yí}落在荒凉的场地上。上面覆盖了厚厚的尘土。</p>
<p>许多年代过去了。有一天，人们来到这里，{掘|jué}开厚厚的{堆|duī}积物，发现了那个陶罐。</p>
<p>"哟，这里有一个罐子！"一个人{惊|jīng}讶地说。</p>
<p>"真的，一个陶罐！"其他人都高兴地叫起来。陶罐被人捧起来，倒掉里面的泥土，擦洗干净，和它当年在御厨里一样光洁，{朴|pǔ}素，美观。</p>
<p>"多美的陶罐！"一个人说，"小心点儿，千万别把它碰坏了，这是古代的东西，很有价值的。"</p>
<p>"谢谢你们！"陶罐{兴|xīng}奋地说，"我的兄弟铁罐就在我旁边，请你们把它也掘出来吧，它一定{闷|mèn}得够受了。"</p>
<p>人们立即动手，翻来覆去，把土都掘遍了。但是，连铁罐的影子也没见到。它，不知道在什么年代已经完全{氧|yǎng}化，早已无影无{踪|zōng}了。</p>`,
    explanation: {
      summary: '本文讲述了国王御厨里的铁罐自恃坚硬，瞧不起陶罐，常常奚落它。然而许多年后，陶罐被人们发现并视为珍贵的文物，铁罐却早已氧化消失了。故事告诉我们不能只看到自己的长处而嘲笑别人。',
      keyPoints: [
        '铁罐骄傲自大，看不起陶罐，常常奚落它',
        '陶罐谦虚友善，希望和睦相处',
        '许多年后，陶罐成了珍贵的文物，铁罐却氧化消失了',
        '不能用自己的长处去比别人的短处，要正确看待自己和他人'
      ],
      vocabulary: [
        { word: '奚落', pinyin: 'xī luò', meaning: '用尖刻的话数落别人的短处，使人难堪' },
        { word: '傲慢', pinyin: 'ào màn', meaning: '轻视别人，对人没有礼貌' },
        { word: '谦虚', pinyin: 'qiān xū', meaning: '虚心，不自满' },
        { word: '轻蔑', pinyin: 'qīng miè', meaning: '看不起，不放在眼里' },
        { word: '相提并论', pinyin: 'xiāng tí bìng lùn', meaning: '把不同的人或事放在一起谈论' }
      ],
      moral: '这个故事告诉我们，每个人都有自己的长处和短处，不能只看到自己的优点就骄傲自大、看不起别人。要学会尊重他人，谦虚待人。'
    },
    questions: [
      {
        id: 'q3017_1',
        question: '铁罐为什么看不起陶罐？',
        options: [
          { label: 'A', text: '因为陶罐太小了' },
          { label: 'B', text: '因为铁罐觉得自己比陶罐坚硬' },
          { label: 'C', text: '因为陶罐是旧的' },
          { label: 'D', text: '因为国王不喜欢陶罐' }
        ],
        answer: 'B',
        explanation: '铁罐自恃坚硬，认为陶罐容易碎，所以看不起陶罐。'
      },
      {
        id: 'q3017_2',
        question: '面对铁罐的奚落，陶罐的态度是怎样的？',
        options: [
          { label: 'A', text: '非常生气，和铁罐对骂' },
          { label: 'B', text: '害怕地哭了' },
          { label: 'C', text: '谦虚地回答，希望和睦相处' },
          { label: 'D', text: '不说话，默默地离开了' }
        ],
        answer: 'C',
        explanation: '陶罐谦虚地回答，说"我们还是和睦相处吧，有什么可吵的呢"。'
      },
      {
        id: 'q3017_3',
        question: '许多年后，陶罐的命运怎样？',
        options: [
          { label: 'A', text: '它碎成了碎片' },
          { label: 'B', text: '它被人们发现，成了珍贵的文物' },
          { label: 'C', text: '它和铁罐一起被找到了' },
          { label: 'D', text: '它被人扔掉了' }
        ],
        answer: 'B',
        explanation: '人们发现了陶罐，它依然光洁、朴素、美观，人们说它"很有价值"。'
      },
      {
        id: 'q3017_4',
        question: '铁罐最后怎样了？',
        options: [
          { label: 'A', text: '它被放在了博物馆' },
          { label: 'B', text: '它被人带回家了' },
          { label: 'C', text: '它氧化了，无影无踪了' },
          { label: 'D', text: '它变成了金罐' }
        ],
        answer: 'C',
        explanation: '课文写道："连铁罐的影子也没见到。它，不知道在什么年代已经完全氧化，早已无影无踪了。"'
      },
      {
        id: 'q3017_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '铁的东西比陶的东西好' },
          { label: 'B', text: '每个人都有长处和短处，不能骄傲自大' },
          { label: 'C', text: '陶罐比铁罐有用' },
          { label: 'D', text: '不要和别人交朋友' }
        ],
        answer: 'B',
        explanation: '故事告诉我们每个人都有长处和短处，要正确看待自己和他人，不能骄傲自大。'
      }
    ]
  },

  // ==================== 第18课 ====================
  {
    id: 3018,
    title: '《狮子和鹿》',
    category: 'story',
    categoryLabel: '寓言故事',
    grade: 3,
    day: 18,
    readingTime: 10,
    author: '伊索',
    source: '《伊索寓言》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20deer%20with%20beautiful%20antlers%20caught%20in%20bushes%2C%20lion%20approaching%2C%20forest%20scene%2C%20Aesop%20fable%20illustration&image_size=landscape_4_3',
    text: `<p>丛林中，住着一只漂亮的鹿。有一天，鹿口渴了，找到一个池塘，痛痛快快地喝起水来。池水清清的，像一面镜子。鹿忽然发现了自己倒映在水中的影子。</p>
<p>"咦，这是我吗？"鹿摆摆身子，水中的倒影也跟着摆动起来。它从来没有注意到自己是这么漂亮！它不着急离开了，对着{池|chí}水欣赏自己的美丽："啊！我的身段多么{匀|yún}称，我的角多么精美别{致|zhì}，好像两束美丽的{珊|shān}{瑚|hú}！"</p>
<p>一阵清风吹过，池水泛起了层层波纹。鹿忽然看到了自己的腿，不禁{噘|juē}起了嘴，皱起了眉头："这四条腿太{纤|xiān}细了，怎么配得上我这两只美丽的角呢！"</p>
<p>鹿开始{抱|bào}怨起自己的腿来。就在它没精打{采|cǎi}地准备离开的时候，忽然听到远处传来一阵脚步声。鹿猛一回头，一头{狮|shī}子正悄悄地向它{逼|bī}近。</p>
<p>鹿不敢犹豫，撒开长腿就跑。有力的长腿在灌木丛中{蹦|bèng}来跳去，不一会儿，就把凶猛的狮子远远地甩在了后面。就在狮子灰心丧气不想再追的时候，鹿的角却被树枝挂住了。狮子赶紧抓住这个机会，猛扑过来。</p>
<p>眼看就要追上了，鹿用尽全身力气，使劲一扯，才把两只角从树枝中挣脱出来，然后又拼命向前奔去。这次，狮子再也没有追上。</p>
<p>鹿跑到一条小溪边，停下脚步，一边喘气，一边休息。它叹了口气，说："两只美丽的角差点儿让我送了命，可四条难看的腿却让我狮口逃生！"</p>`,
    explanation: {
      summary: '本文讲述了一只鹿非常欣赏自己美丽的角，却嫌弃自己纤细的腿。当狮子追来时，漂亮的角差点让它送命，而难看的腿却救了它的命。故事告诉我们不能只看外表，事物各有所长。',
      keyPoints: [
        '鹿欣赏自己美丽的角，嫌弃纤细的腿',
        '狮子追来时，长腿帮助鹿逃命',
        '美丽的角却被树枝挂住，差点让鹿送命',
        '鹿最后明白：美丽的东西不一定有用，难看的东西可能更有价值'
      ],
      vocabulary: [
        { word: '匀称', pinyin: 'yún chèn', meaning: '均匀，比例和谐' },
        { word: '精美别致', pinyin: 'jīng měi bié zhì', meaning: '精致美好，与众不同' },
        { word: '抱怨', pinyin: 'bào yuàn', meaning: '心中不满，数说别人不对' },
        { word: '没精打采', pinyin: 'méi jīng dǎ cǎi', meaning: '形容不高兴，精神不振作' },
        { word: '灰心丧气', pinyin: 'huī xīn sàng qì', meaning: '因失败或不顺利而失去信心' }
      ],
      moral: '这个故事告诉我们，事物各有各的价值，不能只看外表就下结论。有时看起来不好的东西，反而能在关键时刻发挥作用。'
    },
    questions: [
      {
        id: 'q3018_1',
        question: '鹿看到自己的倒影后，最欣赏什么？',
        options: [
          { label: 'A', text: '自己的四条腿' },
          { label: 'B', text: '自己的角' },
          { label: 'C', text: '自己的尾巴' },
          { label: 'D', text: '自己的毛色' }
        ],
        answer: 'B',
        explanation: '鹿欣赏自己的角，说"我的角多么精美别致，好像两束美丽的珊瑚"。'
      },
      {
        id: 'q3018_2',
        question: '鹿为什么不喜欢自己的腿？',
        options: [
          { label: 'A', text: '腿太短了' },
          { label: 'B', text: '腿有伤' },
          { label: 'C', text: '觉得腿太纤细，配不上美丽的角' },
          { label: 'D', text: '腿的颜色不好看' }
        ],
        answer: 'C',
        explanation: '课文写道："这四条腿太纤细了，怎么配得上我这两只美丽的角呢！"'
      },
      {
        id: 'q3018_3',
        question: '当狮子追来时，是什么救了鹿的命？',
        options: [
          { label: 'A', text: '美丽的角' },
          { label: 'B', text: '纤细的腿' },
          { label: 'C', text: '鹿的叫声' },
          { label: 'D', text: '树上的猴子帮忙' }
        ],
        answer: 'B',
        explanation: '鹿的长腿在灌木丛中蹦来跳去，把狮子远远甩在了后面，是腿救了鹿的命。'
      },
      {
        id: 'q3018_4',
        question: '美丽的角给鹿带来了什么麻烦？',
        options: [
          { label: 'A', text: '角太重了跑不动' },
          { label: 'B', text: '角被树枝挂住，差点被狮子抓住' },
          { label: 'C', text: '角掉下来了' },
          { label: 'D', text: '角被狮子咬断了' }
        ],
        answer: 'B',
        explanation: '课文写道："鹿的角却被树枝挂住了。狮子赶紧抓住这个机会，猛扑过来。"'
      },
      {
        id: 'q3018_5',
        question: '鹿最终明白了什么道理？',
        options: [
          { label: 'A', text: '角比腿更重要' },
          { label: 'B', text: '美丽的东西不一定有用，不起眼的东西可能更重要' },
          { label: 'C', text: '以后不要去池塘喝水' },
          { label: 'D', text: '要跑得更快' }
        ],
        answer: 'B',
        explanation: '鹿说："两只美丽的角差点儿让我送了命，可四条难看的腿却让我狮口逃生！"'
      }
    ]
  },

  // ==================== 第19课 ====================
  {
    id: 3019,
    title: '《科利亚的木匣》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 3,
    day: 19,
    readingTime: 10,
    author: '左琴科',
    source: '人教版三年级语文',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20boy%20digging%20in%20garden%20to%20find%20his%20buried%20wooden%20box%2C%20changing%20perspective%2C%20children%20story%20illustration&image_size=landscape_4_3',
    text: `<p>科利亚5岁的时候，有一天，妈妈带着他来到门前的一块空地上，用铁锹在{挖|wā}坑。科利亚问妈妈做什么，妈妈说要埋一些东西，等将来再挖出来。</p>
<p>科利亚觉得很有趣，也学着妈妈的样子，找到了一个木匣子，把自己心爱的宝贝——小木{枪|qiāng}、小{弹|dàn}弓、{塑|sù}料小人等，一个一个地放进木匣里，然后拿着铁锹在院子里挖了一个坑，把木匣放进坑里，盖上土，用脚踩实。</p>
<p>四年以后，德国法西斯入侵他们的村子。科利亚和妈妈、奶奶一起离开了村子，到喀山城去躲避。在喀山，他们住了差不多四年。</p>
<p>战争结束了，科利亚和妈妈、奶奶回到了自己的村子。他们的房子还在，可是院子里的树已经长得很高了。科利亚想找回自己当年埋下的那个木匣子。</p>
<p>他拿来铁锹，走到院子里，在当年埋匣子的地方挖了起来。他挖呀挖呀，坑已经挖得很深了，可是什么也没有找到。科利亚朝左边挖了挖，又朝右边挖了挖，还是没有找到。</p>
<p>妈妈走过来，问他在找什么。科利亚说在找自己埋的木匣子。妈妈说："也许你的记性不好，不是埋在这儿的。"</p>
<p>"不会的，我记得清清楚楚。"科利亚说。他用手比画了一下，说："就在这儿，{步|bù}子量过的，绝对不会错。"</p>
<p>他突然想到：自己长大了，步子也变大了。当初是从家门口数了十步，现在应该倒过来数。于是他数了五步，又挖了起来。果然，他找到了那个木匣子。</p>
<p>科利亚高兴地说："伙伴们，我懂得了一个道理：时间一天天过去，人一天天长大，步子也在渐渐变大。周围的一切，不是都在起变化吗？"</p>`,
    explanation: {
      summary: '本文讲述了科利亚小时候把心爱的宝贝埋在院子里，四年后回来寻找时，因为自己长大了步子也变大了，找不到原来埋的地方，后来想到倒着数步子，终于找到了木匣子。故事告诉我们事物是不断变化的。',
      keyPoints: [
        '科利亚5岁时把宝贝埋在院子里，数了十步',
        '四年后回来找，挖了很久都找不到',
        '他意识到自己长大了步子也变大了，用新的步数重新测量',
        '故事告诉我们世界上的事物都在不断变化，要用发展的眼光看问题'
      ],
      vocabulary: [
        { word: '躲避', pinyin: 'duǒ bì', meaning: '故意离开或隐藏起来，避免遇到' },
        { word: '入侵', pinyin: 'rù qīn', meaning: '敌人侵入国境' },
        { word: '步子', pinyin: 'bù zi', meaning: '脚步，走路时两脚之间的距离' },
        { word: '比画', pinyin: 'bǐ hua', meaning: '用手做出姿势来帮助表达' },
        { word: '量', pinyin: 'liáng', meaning: '用工具或身体来测定长度' }
      ],
      moral: '这个故事告诉我们，世界上的事物都在不断变化，不能用老眼光看问题。我们在生活中也要善于观察变化，用发展的眼光思考问题。'
    },
    questions: [
      {
        id: 'q3019_1',
        question: '科利亚在木匣里放了什么？',
        options: [
          { label: 'A', text: '课本和文具' },
          { label: 'B', text: '小木枪、小弹弓、塑料小人等宝贝' },
          { label: 'C', text: '钱和珠宝' },
          { label: 'D', text: '食物和衣服' }
        ],
        answer: 'B',
        explanation: '课文写道："把自己心爱的宝贝——小木枪、小弹弓、塑料小人等，一个一个地放进木匣里。"'
      },
      {
        id: 'q3019_2',
        question: '科利亚为什么离开村子？',
        options: [
          { label: 'A', text: '他要去旅行' },
          { label: 'B', text: '德国法西斯入侵，他和家人去喀山躲避' },
          { label: 'C', text: '他和妈妈吵架了' },
          { label: 'D', text: '他去上学了' }
        ],
        answer: 'B',
        explanation: '课文写道："德国法西斯入侵他们的村子。科利亚和妈妈、奶奶一起离开了村子，到喀山城去躲避。"'
      },
      {
        id: 'q3019_3',
        question: '科利亚第一次为什么找不到木匣子？',
        options: [
          { label: 'A', text: '木匣子被别人挖走了' },
          { label: 'B', text: '木匣子已经烂掉了' },
          { label: 'C', text: '他长大了步子变大了，十步的距离不一样了' },
          { label: 'D', text: '他记错了地方' }
        ],
        answer: 'C',
        explanation: '科利亚长大了，步子也变大了。当初数十步的距离，现在只需要五步了。'
      },
      {
        id: 'q3019_4',
        question: '科利亚最后是怎样找到木匣子的？',
        options: [
          { label: 'A', text: '妈妈帮他找到了' },
          { label: 'B', text: '他倒过来数，用新的步数重新测量' },
          { label: 'C', text: '他请别人帮忙挖' },
          { label: 'D', text: '碰巧挖到了' }
        ],
        answer: 'B',
        explanation: '科利亚想到自己长大了步子变大了，于是数了五步再挖，果然找到了。'
      },
      {
        id: 'q3019_5',
        question: '科利亚从中懂得了什么道理？',
        options: [
          { label: 'A', text: '以后不要埋东西了' },
          { label: 'B', text: '时间过去，人和周围的一切都在变化' },
          { label: 'C', text: '要用更大的力气挖' },
          { label: 'D', text: '不要离开家太远' }
        ],
        answer: 'B',
        explanation: '科利亚说："时间一天天过去，人一天天长大，步子也在渐渐变大。周围的一切，不是都在起变化吗？"'
      }
    ]
  },

  // ==================== 第20课 ====================
  {
    id: 3020,
    title: '《掌声》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 3,
    day: 20,
    readingTime: 10,
    author: '董保纲',
    source: '人教版三年级语文',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=classmates%20applauding%20a%20shy%20girl%20standing%20at%20podium%2C%20warm%20encouraging%20classroom%20scene%2C%20children%20illustration&image_size=landscape_4_3',
    text: `<p>上小学的时候，我们班里有一个叫小英的同学。她很文静，总是默{默|mò}地坐在教室的一角。上课前，她早早地来到教室；下课后，她又总是最后一个离开。因为她小时候生过病，腿脚落下了{残|cán}疾，不愿意让别人看见她走路的{姿|zī}势。</p>
<p>一天，老师让同学们轮流走上讲台讲故事。轮到小英的时候，全班同学的目光一齐投向了那个角落。小英立刻把头低了下去。老师走到小英身旁，轻声地{劝|quàn}慰她。小英犹豫了一会儿，最后慢吞吞地站了起来。我们注意到，小英的眼圈儿红了。</p>
<p>小英在大家的注视下，终于一摇一晃地走上了讲台。就在小英刚刚站定的那一刻，不知是在谁的带动下，{骤|zhòu}然间响起了一阵掌声。那掌声热{烈|liè}、持久。</p>
<p>小英感动得流下了{泪|lèi}水。掌声渐渐平息，小英也{镇|zhèn}定了情绪，开始讲述她童年的故事。她{普|pǔ}通话讲得很好，声音也十分动听。故事讲完了，教室里又响起了经久不息的掌声。小英向大家深深地鞠了一躬，然后，在同学们的掌声里微笑着走下了讲台。</p>
<p>说也奇怪，从那以后，小英像变了一个人似的。她不再像以前那么忧{郁|yù}了，和同学们一起交谈、做游戏、排练节目。她甚至还走进了学校的舞蹈房，让同学们教她跳舞。</p>
<p>后来，小英在给我的来信中说："我永远也忘不了那掌声，因为它使我鼓起了生活的勇气。我永远感谢这掌声。"</p>
<p>是啊，人人都需要掌声，特别是当一个人身处困境的时候。让我们珍惜别人的掌声，同时，也不要忘记把自己的掌声献给别人。</p>`,
    explanation: {
      summary: '本文讲述了残疾女孩小英因为自卑总是沉默寡言，一次讲故事时同学们的掌声改变了她，让她变得开朗自信。故事告诉我们要关心和鼓励身边的人。',
      keyPoints: [
        '小英因为腿脚残疾，总是默默地坐在角落里',
        '同学们热烈的掌声给了小英勇气和自信',
        '掌声后小英变了，变得开朗活泼',
        '掌声代表鼓励和关爱，人人都需要掌声'
      ],
      vocabulary: [
        { word: '默默', pinyin: 'mò mò', meaning: '不说话，不出声' },
        { word: '姿势', pinyin: 'zī shì', meaning: '身体呈现的样子' },
        { word: '骤然', pinyin: 'zhòu rán', meaning: '突然，忽然' },
        { word: '镇定', pinyin: 'zhèn dìng', meaning: '遇到紧急情况不慌不忙' },
        { word: '忧郁', pinyin: 'yōu yù', meaning: '忧伤愁闷' }
      ],
      moral: '这个故事告诉我们，人人都需要掌声和鼓励。当别人遇到困难时，一个鼓励的掌声、一句温暖的话语，可能会改变一个人的一生。'
    },
    questions: [
      {
        id: 'q3020_1',
        question: '小英为什么总是默默地坐在教室一角？',
        options: [
          { label: 'A', text: '她不喜欢同学们' },
          { label: 'B', text: '她腿脚有残疾，不愿意让别人看见她走路的姿势' },
          { label: 'C', text: '她的座位就在角落' },
          { label: 'D', text: '老师让她坐在那里' }
        ],
        answer: 'B',
        explanation: '课文写道："她小时候生过病，腿脚落下了残疾，不愿意让别人看见她走路的姿势。"'
      },
      {
        id: 'q3020_2',
        question: '同学们的掌声是在什么时候响起的？',
        options: [
          { label: 'A', text: '小英走进教室时' },
          { label: 'B', text: '小英站在讲台上讲故事前' },
          { label: 'C', text: '小英讲完故事后' },
          { label: 'D', text: '老师讲故事时' }
        ],
        answer: 'B',
        explanation: '课文写道："就在小英刚刚站定的那一刻，骤然间响起了一阵掌声。"'
      },
      {
        id: 'q3020_3',
        question: '掌声响起后小英有什么反应？',
        options: [
          { label: 'A', text: '她跑出了教室' },
          { label: 'B', text: '她感动得流下了泪水' },
          { label: 'C', text: '她生气了' },
          { label: 'D', text: '她没有反应' }
        ],
        answer: 'B',
        explanation: '课文写道："小英感动得流下了泪水。"'
      },
      {
        id: 'q3020_4',
        question: '掌声之后，小英发生了什么变化？',
        options: [
          { label: 'A', text: '她转学了' },
          { label: 'B', text: '她变得更加沉默了' },
          { label: 'C', text: '她变得开朗自信，和同学们一起活动' },
          { label: 'D', text: '她的腿好了' }
        ],
        answer: 'C',
        explanation: '课文写道："小英像变了一个人似的。她不再像以前那么忧郁了，和同学们一起交谈、做游戏、排练节目。"'
      },
      {
        id: 'q3020_5',
        question: '这篇文章主要想告诉我们什么？',
        options: [
          { label: 'A', text: '掌声很响亮' },
          { label: 'B', text: '人人都需要掌声和鼓励，不要忘记把掌声献给别人' },
          { label: 'C', text: '残疾的人更需要帮助' },
          { label: 'D', text: '讲故事很重要' }
        ],
        answer: 'B',
        explanation: '课文最后写道："人人都需要掌声，特别是当一个人身处困境的时候。让我们珍惜别人的掌声，同时，也不要忘记把自己的掌声献给别人。"'
      }
    ]
  },

  // ==================== 第21课 ====================
  {
    id: 3021,
    title: '《一次成功的实验》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 3,
    day: 21,
    readingTime: 10,
    author: '佚名',
    source: '人教版三年级语文',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=three%20children%20working%20together%20pulling%20balls%20from%20narrow%20bottle%2C%20teamwork%20concept%2C%20educational%20illustration&image_size=landscape_4_3',
    text: `<p>一位教育家来到一所小学，请校长找来三个学生，做一个实验。他从手提包里拿出一个瓶子，瓶子里放着三个小{铅|qiān}锤。他又拿出三个系着绳子的小铅锤，把瓶子放在地上，把三个小铅锤分给三个学生，让他们拿着绳子头。</p>
<p>教育家说："这个瓶子是一口井，你们三个正在井里玩。突然，井里冒出水来了，你们必须赶快逃出来。你们手里拿着的小铅锤就是你们自己。你们上来的时候，要一个一个地拉，但不能让水把你们淹着。"</p>
<p>他拿起茶杯向瓶子里灌水，一边灌一边喊："危险！快上来！一、二……"</p>
<p>一个女孩低声对两个同伴说："你第一，你第二，我最后。"</p>
<p>"三"字刚出口，三个学生就顺利地把小铅锤一个一个提了出来。教育家还没有来得及说出"三"字，实验已经成功了。</p>
<p>教育家{激|jī}动地抱起那个女孩，好久才放下。他对校长说："这个实验我做了许多次，每次孩子们都争着往外拉铅锤，结果铅锤都{堵|dǔ}在瓶口，一个也拉不出来。今天，我的实验终于获得了成功。"</p>
<p>教育家又问女孩："你刚才跟他俩说了什么？"女孩如实地告诉了他。</p>
<p>"你为什么要这样做呢？"教育家又问。</p>
<p>女孩不假思索地说："有了危险，应该让别人先出去。"</p>`,
    explanation: {
      summary: '本文讲述了一位教育家做实验，让三个学生模拟从井里逃生。一个女孩主动安排顺序，让同伴先走，自己最后，实验成功了。这个实验之前做过很多次都失败了，因为孩子们总是争抢。故事赞扬了先人后己的精神。',
      keyPoints: [
        '教育家用瓶子和铅锤做实验，模拟井里逃生',
        '一个女孩主动安排顺序：你第一，你第二，我最后',
        '实验顺利成功，教育家非常激动',
        '女孩说"有了危险，应该让别人先出去"，体现了先人后己的品质'
      ],
      vocabulary: [
        { word: '铅锤', pinyin: 'qiān chuí', meaning: '用铅做的重物，利用重力方向来测量' },
        { word: '顺利', pinyin: 'shùn lì', meaning: '没有阻碍，事情做得很好' },
        { word: '如实', pinyin: 'rú shí', meaning: '按照实际情况，不隐瞒' },
        { word: '不假思索', pinyin: 'bù jiǎ sī suǒ', meaning: '不用思考就做出反应，形容说话做事迅速果断' },
        { word: '激动', pinyin: 'jī dòng', meaning: '感情受到刺激而冲动' }
      ],
      moral: '这个故事赞扬了先人后己的精神。在生活中，遇到危险或困难时，应该先考虑别人，帮助别人先脱险，这种团结合作的精神值得我们学习。'
    },
    questions: [
      {
        id: 'q3021_1',
        question: '教育家的实验用的是什么？',
        options: [
          { label: 'A', text: '一个大水桶和皮球' },
          { label: 'B', text: '一个瓶子和三个系着绳子的小铅锤' },
          { label: 'C', text: '三个杯子和弹珠' },
          { label: 'D', text: '一个箱子和玩具' }
        ],
        answer: 'B',
        explanation: '课文写道："他从手提包里拿出一个瓶子，瓶子里放着三个小铅锤。"'
      },
      {
        id: 'q3021_2',
        question: '女孩对两个同伴说了什么？',
        options: [
          { label: 'A', text: '"快跑！"' },
          { label: 'B', text: '"你第一，你第二，我最后。"' },
          { label: 'C', text: '"大家一起拉。"' },
          { label: 'D', text: '"谁都别动。"' }
        ],
        answer: 'B',
        explanation: '课文写道："一个女孩低声对两个同伴说：\'你第一，你第二，我最后。\'"'
      },
      {
        id: 'q3021_3',
        question: '以前的实验为什么都失败了？',
        options: [
          { label: 'A', text: '瓶子太小了' },
          { label: 'B', text: '铅锤太重了' },
          { label: 'C', text: '孩子们争着往外拉，铅锤堵在瓶口' },
          { label: 'D', text: '水灌得太快了' }
        ],
        answer: 'C',
        explanation: '教育家说："每次孩子们都争着往外拉铅锤，结果铅锤都堵在瓶口，一个也拉不出来。"'
      },
      {
        id: 'q3021_4',
        question: '这次实验为什么成功了？',
        options: [
          { label: 'A', text: '瓶子不一样了' },
          { label: 'B', text: '女孩安排好顺序，有序地撤离' },
          { label: 'C', text: '铅锤更轻了' },
          { label: 'D', text: '教育家帮忙了' }
        ],
        answer: 'B',
        explanation: '女孩主动安排好顺序，让同伴先走自己最后，所以实验顺利成功。'
      },
      {
        id: 'q3021_5',
        question: '女孩为什么这样做？',
        options: [
          { label: 'A', text: '她不喜欢先出去' },
          { label: 'B', text: '她觉得自己跑得最快' },
          { label: 'C', text: '她认为有了危险应该让别人先出去' },
          { label: 'D', text: '老师教她这样做的' }
        ],
        answer: 'C',
        explanation: '课文写道："女孩不假思索地说：\'有了危险，应该让别人先出去。\'"'
      }
    ]
  },

  // ==================== 第22课 ====================
  {
    id: 3022,
    title: '《好汉查理》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 3,
    day: 22,
    readingTime: 10,
    author: '佚名',
    source: '人教版三年级语文',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20boy%20helping%20a%20girl%20in%20wheelchair%2C%20summer%20vacation%20friendship%20scene%2C%20heartwarming%20children%20illustration&image_size=landscape_4_3',
    text: `<p>查理是个很调皮的男孩。他爱搞恶作剧，不是把人家的{晾|liàng}衣绳剪断，就是把别人的花园踩得一{塌|tā}糊涂。邻居们都不喜欢他，叫他"坏小子查理"。</p>
<p>暑假里的一天，查理在街上闲逛，看见邻居家新来了一个小女孩。她坐在轮椅上，一头金发，一双蓝色的大眼睛。查理走上前去，问道："嘿，你叫什么名字？"</p>
<p>"我叫杰西。"女孩说。</p>
<p>"你为什么坐在轮椅上？"查理问。</p>
<p>"我生了一种病，腿不能走路了。"杰西平静地说。</p>
<p>查理沉默了一会儿。他第一次觉得心里有点不好受。他看了看杰西，说："你想不想去看那边花园里的花？我可以推你去。"</p>
<p>杰西{犹|yóu}豫了一下，点了点头。查理推着轮椅，慢慢地沿着小路走着。他们来到花园前，五颜六色的花朵在阳光下{绽|zhàn}放着。</p>
<p>"真美啊！"杰西高兴地说。</p>
<p>从那以后，查理每天都来看杰西。他推着她在花园里散步，给她讲故事，帮她拿东西。他还找来了木板和钉子，在花园的小路上铺了一段平{坦|tǎn}的路，好让轮椅走得更顺利。</p>
<p>杰西对查理说："别人都说你是坏孩子，可我觉得你是好汉查理。"</p>
<p>查理不好意思地挠了挠头，说："我以前是挺坏的，但是……你是我的朋友啊。"</p>
<p>暑假结束了。在杰西离开的那天，查理把她送到车上。杰西从车窗里伸出手，把一条漂亮的蓝色{缎|duàn}带递给查理，说："这条缎带是送给好汉查理的。谢谢你，查理！"</p>
<p>查理接过缎带，看着车子越走越远。从此以后，查理再也不搞恶作剧了。邻居们都说，查理变了，变得{懂|dǒng}事了，变得善良了。人们不再叫他"坏小子查理"，而是亲切地叫他"好汉查理"。</p>`,
    explanation: {
      summary: '本文讲述了调皮的男孩查理，在暑假里遇到了坐在轮椅上的女孩杰西。他被杰西的坚强和善良打动，主动帮助她、陪伴她，两人的友谊让查理从"坏小子"变成了真正的"好汉"。',
      keyPoints: [
        '查理原本很调皮，邻居们都不喜欢他',
        '他遇到坐轮椅的杰西后，主动帮助她',
        '查理每天陪杰西散步、讲故事，还为她铺路',
        '杰西的友谊改变了查理，他从"坏小子"变成了善良懂事的好汉'
      ],
      vocabulary: [
        { word: '调皮', pinyin: 'tiáo pí', meaning: '爱玩爱闹，不听劝导' },
        { word: '一塌糊涂', pinyin: 'yī tā hú tú', meaning: '乱到不可收拾的地步' },
        { word: '犹豫', pinyin: 'yóu yù', meaning: '拿不定主意' },
        { word: '绽放', pinyin: 'zhàn fàng', meaning: '花朵开放' },
        { word: '平坦', pinyin: 'píng tǎn', meaning: '没有高低凹凸，很平整' }
      ],
      moral: '这个故事告诉我们，帮助别人可以让自己变得更好。真正的友谊能改变一个人，善良和关爱是"好汉"的真正含义。'
    },
    questions: [
      {
        id: 'q3022_1',
        question: '查理以前为什么被叫作"坏小子"？',
        options: [
          { label: 'A', text: '他学习成绩很差' },
          { label: 'B', text: '他爱搞恶作剧，经常搞破坏' },
          { label: 'C', text: '他经常打架' },
          { label: 'D', text: '他不听老师的话' }
        ],
        answer: 'B',
        explanation: '课文写道："他爱搞恶作剧，不是把人家的晾衣绳剪断，就是把别人的花园踩得一塌糊涂。"'
      },
      {
        id: 'q3022_2',
        question: '杰西为什么坐在轮椅上？',
        options: [
          { label: 'A', text: '她摔伤了腿' },
          { label: 'B', text: '她生了一种病，腿不能走路了' },
          { label: 'C', text: '她的轮椅是玩具' },
          { label: 'D', text: '她不想走路' }
        ],
        answer: 'B',
        explanation: '杰西说："我生了一种病，腿不能走路了。"'
      },
      {
        id: 'q3022_3',
        question: '查理为杰西做了哪些事？',
        options: [
          { label: 'A', text: '只推了一次轮椅' },
          { label: 'B', text: '每天陪她散步、讲故事、帮她铺路' },
          { label: 'C', text: '给她买了新轮椅' },
          { label: 'D', text: '教她走路' }
        ],
        answer: 'B',
        explanation: '课文写道："他推着她在花园里散步，给她讲故事，帮她拿东西。"还铺了一段平坦的路。'
      },
      {
        id: 'q3022_4',
        question: '杰西离开时送给查理什么？',
        options: [
          { label: 'A', text: '一本书' },
          { label: 'B', text: '一条漂亮的蓝色缎带' },
          { label: 'C', text: '一朵花' },
          { label: 'D', text: '一封感谢信' }
        ],
        answer: 'B',
        explanation: '课文写道："杰西从车窗里伸出手，把一条漂亮的蓝色缎带递给查理。"'
      },
      {
        id: 'q3022_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '调皮的孩子都是坏孩子' },
          { label: 'B', text: '帮助别人可以让自己变得更好，友谊能改变人' },
          { label: 'C', text: '坐轮椅的人需要同情' },
          { label: 'D', text: '暑假应该多出去玩' }
        ],
        answer: 'B',
        explanation: '查理帮助杰西后变得善良懂事，说明帮助别人能让自己变得更好，真正的友谊能改变一个人。'
      }
    ]
  },

  // ==================== 第23课 ====================
  {
    id: 3023,
    title: '《给予树》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 3,
    day: 23,
    readingTime: 10,
    author: '佚名',
    source: '人教版三年级语文',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20sharing%20Christmas%20gifts%20on%20a%20giving%20tree%2C%20warm%20holiday%20scene%2C%20multicultural%20children%20illustration&image_size=landscape_4_3',
    text: `<p>圣诞节快要到了，妈妈给了我一些钱，让我去商场买圣诞礼物。我高高兴兴地来到商场，商场里到处挂着彩色的灯，播放着欢快的圣诞歌曲。孩子们在各个{橱|chú}窗前跑来跑去，兴高{采|cǎi}烈地挑选着礼物。</p>
<p>我有五个兄弟姐妹，我想给每个人买一份礼物。可是，妈妈给的钱不多，我算了又算，只够买四份礼物。我有点发{愁|chóu}，不知道该怎么办。</p>
<p>我来到一棵"给予树"前面。给予树是商场里的一棵大圣诞树，上面挂满了卡片。每张卡片上写着一个孩子的心愿——他们想要什么圣诞礼物。这些孩子家里都很穷，买不起礼物。</p>
<p>我看着一张张卡片。有的写着"我想要一个布娃娃"，有的写着"我想要一本故事书"。突然，一张卡片吸引了我的注意。上面写着："我什么礼物都不想要，我只想为妈妈要一件暖和的棉衣。我家没有钱，妈妈每天{冒|mào}着寒风去上班，很冷。"</p>
<p>我的眼睛湿润了。我想了想，把妈妈给的钱拿出来，买了一件暖和的棉衣，放到了给予树下面。虽然我没有给兄弟姐妹买到礼物，但我觉得这样做是对的。</p>
<p>圣诞节的早上，兄弟姐妹们都收到了别人送的小礼物。我告诉大家我做了什么，他们都笑着说："没关系，你做得对！帮助别人，也是一种很好的圣诞礼物。"</p>
<p>妈妈{拥|yōng}抱着我，说："孩子，你{送|sòng}出的不仅仅是一件棉衣，更是一份爱心。给予，永远比{索|suǒ}取更快乐。"</p>`,
    explanation: {
      summary: '本文讲述了圣诞节前，"我"用妈妈给的钱为一个素不相识的穷孩子买了一件棉衣送给她的妈妈，而不是给自己的兄弟姐妹买礼物。故事告诉我们给予比索取更快乐。',
      keyPoints: [
        '圣诞节前妈妈给"我"钱去买礼物',
        '"我"在给予树上看到一个孩子的心愿——为妈妈要一件棉衣',
        '"我"用钱买了棉衣放到给予树下',
        '妈妈说"给予永远比索取更快乐"'
      ],
      vocabulary: [
        { word: '兴高采烈', pinyin: 'xìng gāo cǎi liè', meaning: '兴致高，情绪热烈，形容非常高兴' },
        { word: '橱窗', pinyin: 'chú chuāng', meaning: '商店临街的玻璃窗，用来展示商品' },
        { word: '给予', pinyin: 'jǐ yǔ', meaning: '给，使别人得到' },
        { word: '索取', pinyin: 'suǒ qǔ', meaning: '向别人要，希望得到' },
        { word: '拥抱', pinyin: 'yōng bào', meaning: '搂抱，表示亲爱' }
      ],
      moral: '这个故事告诉我们，给予比索取更快乐。帮助别人、关爱他人，是最美好的礼物。我们也要学会关心身边需要帮助的人。'
    },
    questions: [
      {
        id: 'q3023_1',
        question: '妈妈给"我"钱是为了什么？',
        options: [
          { label: 'A', text: '买零食吃' },
          { label: 'B', text: '买圣诞礼物' },
          { label: 'C', text: '买学习用品' },
          { label: 'D', text: '交学费' }
        ],
        answer: 'B',
        explanation: '课文写道："圣诞节快要到了，妈妈给了我一些钱，让我去商场买圣诞礼物。"'
      },
      {
        id: 'q3023_2',
        question: '给予树是什么？',
        options: [
          { label: 'A', text: '一棵能结出礼物的神奇树' },
          { label: 'B', text: '一棵挂满心愿卡片的圣诞树' },
          { label: 'C', text: '一棵真正的树' },
          { label: 'D', text: '一个玩具树' }
        ],
        answer: 'B',
        explanation: '课文写道："给予树是商场里的一棵大圣诞树，上面挂满了卡片。每张卡片上写着一个孩子的心愿。"'
      },
      {
        id: 'q3023_3',
        question: '那个孩子在卡片上写了什么心愿？',
        options: [
          { label: 'A', text: '想要一个布娃娃' },
          { label: 'B', text: '想要一本故事书' },
          { label: 'C', text: '为妈妈要一件暖和的棉衣' },
          { label: 'D', text: '想要一个玩具车' }
        ],
        answer: 'C',
        explanation: '卡片上写着想为妈妈要一件暖和的棉衣，因为妈妈每天冒着寒风去上班。'
      },
      {
        id: 'q3023_4',
        question: '"我"最后怎样做的？',
        options: [
          { label: 'A', text: '什么也没买就回家了' },
          { label: 'B', text: '给兄弟姐妹买了四份礼物' },
          { label: 'C', text: '买了一件棉衣放到给予树下面' },
          { label: 'D', text: '把钱还给了妈妈' }
        ],
        answer: 'C',
        explanation: '课文写道："我把妈妈给的钱拿出来，买了一件暖和的棉衣，放到了给予树下面。"'
      },
      {
        id: 'q3023_5',
        question: '妈妈说的"给予永远比索取更快乐"是什么意思？',
        options: [
          { label: 'A', text: '要给别人很多东西' },
          { label: 'B', text: '帮助别人、给予关爱，比只想着得到更让人快乐' },
          { label: 'C', text: '不要向别人要东西' },
          { label: 'D', text: '圣诞节应该送礼物' }
        ],
        answer: 'B',
        explanation: '妈妈的意思是，帮助别人、把自己的爱给予别人，比只想着从别人那里得到东西更让人感到幸福和快乐。'
      }
    ]
  },

  // ==================== 第24课 ====================
  {
    id: 3024,
    title: '《香港，璀璨的明珠》',
    category: 'textbook',
    categoryLabel: '课文',
    grade: 3,
    day: 24,
    readingTime: 10,
    author: '佚名',
    source: '人教版三年级语文',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hong%20Kong%20skyline%20at%20night%20with%20Victoria%20Harbour%2C%20colorful%20lights%20reflecting%20on%20water%2C%20cityscape&image_size=landscape_4_3',
    text: `<p>香港是我国{南|nán}方的一颗{璀|cuǐ}{璨|càn}的明珠。它位于广东省珠江口东侧，紧邻深圳，由香港岛、九龙半岛和新界三部分组成。香港面积约一千一百{平|píng}方千米，人口约七百万。</p>
<p>香港是一个国际{商|shāng}贸中心。它是世界著名的{自|zì}由港，来自世界各地的商船在这里{停|tíng}靠、装卸货物。香港的{贸|mào}易额位居世界前列，被称为"购物天堂"。在铜锣湾、尖沙咀等商业区，各种商品{琳|lín}{琅|láng}满目，吸引了无数中外游客。</p>
<p>香港也是一个旅游{胜|shèng}地。海洋公园里有精彩的海豚表演和各种{刺|cì}激的游乐设施。迪士尼乐园更是孩子们向往的地方。每当夜{幕|mù}降临，站在太平山顶俯{瞰|kàn}，维多利亚港两岸灯火辉煌，高楼大厦的灯光倒映在海面上，就像一串串闪亮的珍珠。</p>
<p>香港还是一个美食天堂。在这里，你可以品尝到世界各地的美食，也可以吃到地道的粤菜和港式茶点。{烧|shāo}鹅、{虾|xiā}饺、蛋挞……每一样都让人{垂|chuí}涎欲滴。</p>
<p>1997年7月1日，香港回归祖国的怀抱。{回|huí}归以来，在祖国的支持下，香港继续保持繁荣稳定，这颗东方之珠变得更加璀璨。</p>`,
    explanation: {
      summary: '本文介绍了香港的地理位置、经济贸易、旅游景点和美食文化，说明香港是祖国南方一颗璀璨的明珠。文章还提到了1997年香港回归祖国这一重要历史事件。',
      keyPoints: [
        '香港位于广东省珠江口东侧，由三部分组成',
        '香港是国际商贸中心和著名的自由港',
        '香港有海洋公园、迪士尼乐园等著名旅游景点',
        '1997年香港回归祖国，继续保持繁荣稳定'
      ],
      vocabulary: [
        { word: '璀璨', pinyin: 'cuǐ càn', meaning: '形容珠玉等光彩鲜明' },
        { word: '琳琅满目', pinyin: 'lín láng mǎn mù', meaning: '满眼都是珍贵的东西，形容美好的事物很多' },
        { word: '俯瞰', pinyin: 'fǔ kàn', meaning: '从高处往下看' },
        { word: '垂涎欲滴', pinyin: 'chuí xián yù dī', meaning: '馋得口水都要流下来了，形容非常想吃' },
        { word: '贸易', pinyin: 'mào yì', meaning: '商品的买卖和交换活动' }
      ],
      moral: '通过了解香港，我们认识到祖国的伟大和繁荣。香港的回归告诉我们，祖国的统一是所有中国人的共同愿望。'
    },
    questions: [
      {
        id: 'q3024_1',
        question: '香港由哪几部分组成？',
        options: [
          { label: 'A', text: '香港岛、九龙半岛和新界' },
          { label: 'B', text: '香港岛和九龙半岛' },
          { label: 'C', text: '香港岛、澳门和新界' },
          { label: 'D', text: '九龙半岛和深圳' }
        ],
        answer: 'A',
        explanation: '课文写道："由香港岛、九龙半岛和新界三部分组成。"'
      },
      {
        id: 'q3024_2',
        question: '香港为什么被称为"购物天堂"？',
        options: [
          { label: 'A', text: '因为东西很便宜' },
          { label: 'B', text: '它是世界著名的自由港，各种商品琳琅满目' },
          { label: 'C', text: '因为那里只有商场' },
          { label: 'D', text: '因为那里没有税' }
        ],
        answer: 'B',
        explanation: '课文写道："香港是世界著名的自由港"，各种商品琳琅满目，吸引了无数中外游客。'
      },
      {
        id: 'q3024_3',
        question: '站在太平山顶能看到什么美景？',
        options: [
          { label: 'A', text: '大片的农田' },
          { label: 'B', text: '维多利亚港两岸灯火辉煌的美景' },
          { label: 'C', text: '高山和森林' },
          { label: 'D', text: '沙漠和绿洲' }
        ],
        answer: 'B',
        explanation: '课文写道："维多利亚港两岸灯火辉煌，高楼大厦的灯光倒映在海面上，就像一串串闪亮的珍珠。"'
      },
      {
        id: 'q3024_4',
        question: '香港是什么时候回归祖国的？',
        options: [
          { label: 'A', text: '1999年12月20日' },
          { label: 'B', text: '1997年7月1日' },
          { label: 'C', text: '2000年1月1日' },
          { label: 'D', text: '1985年10月1日' }
        ],
        answer: 'B',
        explanation: '课文写道："1997年7月1日，香港回归祖国的怀抱。"'
      },
      {
        id: 'q3024_5',
        question: '文中把香港比作什么？',
        options: [
          { label: 'A', text: '一颗大树' },
          { label: 'B', text: '一颗璀璨的明珠' },
          { label: 'C', text: '一座高山' },
          { label: 'D', text: '一片大海' }
        ],
        answer: 'B',
        explanation: '课文开头和结尾都把香港比作一颗璀璨的明珠，标题也是"香港，璀璨的明珠"。'
      }
    ]
  },

  // ==================== 第25课 ====================
  {
    id: 3025,
    title: '《咏柳》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 25,
    readingTime: 10,
    author: '贺知章',
    source: '《全唐诗》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=spring%20willow%20branches%20with%20new%20green%20leaves%20swaying%20in%20breeze%2C%20riverbank%20scene%2C%20Chinese%20painting&image_size=landscape_4_3',
    text: `<p>{碧|bì}玉妆成一树高，万条垂下绿丝{绦|tāo}。不知细叶谁裁出，二月春风似{剪|jiǎn}刀。</p>
<p>这首诗的作者是唐代诗人{贺|hè}知章。他是唐朝著名的诗人，写过很多优美的诗篇。</p>
<p>"碧玉妆成一树高"——诗人把柳树比作用碧玉装扮成的美人。春天的柳树翠绿翠绿的，就像一位穿着绿衣裳的美丽姑娘，高高地站在那里。</p>
<p>"万条垂下绿丝绦"——千万条柳枝垂下来，就像千万条绿色的丝带在风中轻轻飘动。丝{绦|tāo}就是用丝编成的带子，诗人用它来形容柔软的柳条。</p>
<p>"不知细叶谁裁出"——那一片片细细的柳叶，是谁裁剪出来的呢？诗人用了一个问句，引起了读者的好奇。</p>
<p>"二月春风似剪刀"——原来是二月的春风啊，它就像一把灵巧的剪刀，裁剪出了这一片片美丽的柳叶。这个比喻多么巧妙！春风是看不见、摸不着的，诗人把它比作剪刀，让我们一下子就感受到了春风的力量和美丽。</p>
<p>整首诗用{比|bǐ}{喻|yù}的手法，把柳树写得生动{逼|bī}真，既赞美了柳树的美丽，又歌颂了春天的生机勃勃。</p>`,
    explanation: {
      summary: '《咏柳》是唐代诗人贺知章的名作。诗人用巧妙的比喻，把柳树比作美人，把柳枝比作丝带，把春风比作剪刀，生动地描绘了春天柳树的美丽姿态，表达了对春天的赞美。',
      keyPoints: [
        '诗人把柳树比作用碧玉装扮的美人',
        '把柳条比作绿色的丝带',
        '把春风比作剪刀，裁出了细细的柳叶',
        '整首诗充满了对春天的赞美和喜爱'
      ],
      vocabulary: [
        { word: '碧玉', pinyin: 'bì yù', meaning: '翠绿色的玉石，这里形容柳树翠绿的颜色' },
        { word: '丝绦', pinyin: 'sī tāo', meaning: '用丝编织的带子，这里形容柳条' },
        { word: '裁', pinyin: 'cái', meaning: '用剪刀剪，这里指春风像剪刀一样裁出柳叶' },
        { word: '咏', pinyin: 'yǒng', meaning: '用诗词来描写、赞美' },
        { word: '比喻', pinyin: 'bǐ yù', meaning: '一种修辞手法，用一种事物来形容另一种事物' }
      ],
      moral: '这首诗赞美了春天的生机和美好，告诉我们要善于观察身边的美景。诗人用巧妙的比喻把春风写活了，说明大自然的力量是神奇而美好的。'
    },
    questions: [
      {
        id: 'q3025_1',
        question: '"碧玉妆成一树高"中的"碧玉"形容的是什么？',
        options: [
          { label: 'A', text: '一块玉石' },
          { label: 'B', text: '柳树翠绿的颜色' },
          { label: 'C', text: '一位姑娘' },
          { label: 'D', text: '一朵花' }
        ],
        answer: 'B',
        explanation: '诗人用碧玉来形容柳树翠绿的颜色，把柳树比作用碧玉装扮的美人。'
      },
      {
        id: 'q3025_2',
        question: '"万条垂下绿丝绦"把柳条比作什么？',
        options: [
          { label: 'A', text: '绿色的丝带' },
          { label: 'B', text: '绿色的绳子' },
          { label: 'C', text: '绿色的面条' },
          { label: 'D', text: '绿色的头发' }
        ],
        answer: 'A',
        explanation: '丝绦是用丝编成的带子，诗人把千万条柳条比作绿色的丝带。'
      },
      {
        id: 'q3025_3',
        question: '诗人把春风比作什么？',
        options: [
          { label: 'A', text: '一把扇子' },
          { label: 'B', text: '一把剪刀' },
          { label: 'C', text: '一支画笔' },
          { label: 'D', text: '一双巧手' }
        ],
        answer: 'B',
        explanation: '"二月春风似剪刀"，诗人把春风比作一把灵巧的剪刀，裁出了美丽的柳叶。'
      },
      {
        id: 'q3025_4',
        question: '这首诗主要描写的是什么季节？',
        options: [
          { label: 'A', text: '夏天' },
          { label: 'B', text: '秋天' },
          { label: 'C', text: '春天' },
          { label: 'D', text: '冬天' }
        ],
        answer: 'C',
        explanation: '诗中提到"二月春风"，描写的是春天万物复苏、柳树发芽的景象。'
      },
      {
        id: 'q3025_5',
        question: '这首诗表达了诗人什么样的感情？',
        options: [
          { label: 'A', text: '对秋天的伤感' },
          { label: 'B', text: '对春天的赞美和喜爱' },
          { label: 'C', text: '对冬天的盼望' },
          { label: 'D', text: '对朋友的思念' }
        ],
        answer: 'B',
        explanation: '诗人通过赞美柳树的美丽，表达了对春天的赞美和喜爱之情。'
      }
    ]
  },

  // ==================== 第26课 ====================
  {
    id: 3026,
    title: '《游子吟》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 26,
    readingTime: 10,
    author: '孟郊',
    source: '《全唐诗》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20mother%20sewing%20clothes%20by%20lamplight%20for%20her%20traveling%20son%2C%20emotional%20farewell%20scene%2C%20Chinese%20painting&image_size=landscape_4_3',
    text: `<p>{慈|cí}母手中线，游子身上衣。临行{密|mì}密缝，意恐迟迟归。谁言寸草心，报得三春{晖|huī}。</p>
<p>这首诗的作者是唐代诗人{孟|mèng}郊。孟郊小时候家里很穷，但他刻苦读书。长大后，他要离开家去远方求学。在出发前的那天晚上，他的母亲在油灯下为他缝制衣服。</p>
<p>"慈母手中线，游子身上衣"——慈爱的母亲手中拿着针线，为即将远行的孩子缝制衣服。游子，就是离开家在外面的人。</p>
<p>"临行密密缝，意恐迟迟归"——母亲一针一线缝得又密又结实，怕的是儿子在外面时间太长，衣服不结实会破。这一针一线里，都是母亲对儿子深深的{担|dān}心和{牵|qiān}挂。</p>
<p>"谁言寸草心，报得三春晖"——谁能说小草那微弱的孝心，能报答春天阳光的恩情呢？寸草心，指小草的心，比喻儿女微小的孝心。三春晖，指春天温暖的阳光，比喻母亲深厚的爱。</p>
<p>诗人用"寸草心"和"三春晖"作对比，说明儿女的孝心再大，也报答不完母亲的恩情。母亲的爱就像春天的阳光一样，温暖无私，无处不在。</p>
<p>这首诗虽然只有短短三十个字，却写出了母爱的伟大和深沉。千百年来，这首诗一直被人们传{诵|sòng}，成为表达母爱的千古名篇。</p>`,
    explanation: {
      summary: '《游子吟》是唐代诗人孟郊的代表作。诗中描写了母亲在儿子临行前为他缝衣的情景，用"寸草心"和"三春晖"的对比，表达了母爱的伟大和儿女对母亲的感恩之情。',
      keyPoints: [
        '诗描写了母亲在灯下为游子缝衣的感人场景',
        '"密密缝"体现了母亲对儿子的深深牵挂',
        '"寸草心"比喻儿女微小的孝心',
        '"三春晖"比喻母亲深厚无私的爱'
      ],
      vocabulary: [
        { word: '游子', pinyin: 'yóu zǐ', meaning: '离开家乡在外的人' },
        { word: '密密', pinyin: 'mì mì', meaning: '针脚又密又细，形容缝得很仔细' },
        { word: '寸草心', pinyin: 'cùn cǎo xīn', meaning: '小草的心，比喻儿女微小的孝心' },
        { word: '三春晖', pinyin: 'sān chūn huī', meaning: '春天的阳光，比喻母亲深厚的爱' },
        { word: '报得', pinyin: 'bào dé', meaning: '报答得了' }
      ],
      moral: '这首诗告诉我们母爱是世界上最伟大的爱。母亲的爱像春天的阳光一样温暖无私。我们要感恩母亲，用行动回报她的爱。'
    },
    questions: [
      {
        id: 'q3026_1',
        question: '"游子"是什么意思？',
        options: [
          { label: 'A', text: '喜欢游泳的人' },
          { label: 'B', text: '离开家乡在外的人' },
          { label: 'C', text: '旅行的导游' },
          { label: 'D', text: '玩耍的孩子' }
        ],
        answer: 'B',
        explanation: '游子指离开家乡在外面的人，诗中指即将远行的儿子。'
      },
      {
        id: 'q3026_2',
        question: '母亲为什么"临行密密缝"？',
        options: [
          { label: 'A', text: '她喜欢缝衣服' },
          { label: 'B', text: '她怕儿子在外面衣服不结实会破' },
          { label: 'C', text: '她想做很多衣服' },
          { label: 'D', text: '老师要求她缝的' }
        ],
        answer: 'B',
        explanation: '母亲一针一线缝得又密又结实，是怕儿子在外面衣服破了，体现了母亲对儿子的牵挂。'
      },
      {
        id: 'q3026_3',
        question: '"寸草心"比喻的是什么？',
        options: [
          { label: 'A', text: '小草的生命力' },
          { label: 'B', text: '儿女微小的孝心' },
          { label: 'C', text: '母亲的爱心' },
          { label: 'D', text: '春天的草地' }
        ],
        answer: 'B',
        explanation: '"寸草心"指小草的心，比喻儿女对母亲微小的孝心。'
      },
      {
        id: 'q3026_4',
        question: '"三春晖"比喻的是什么？',
        options: [
          { label: 'A', text: '三个春天' },
          { label: 'B', text: '美丽的景色' },
          { label: 'C', text: '母亲深厚无私的爱' },
          { label: 'D', text: '温暖的天气' }
        ],
        answer: 'C',
        explanation: '"三春晖"指春天温暖的阳光，比喻母亲深厚无私的爱。'
      },
      {
        id: 'q3026_5',
        question: '诗人想通过这首诗表达什么？',
        options: [
          { label: 'A', text: '出门旅行很快乐' },
          { label: 'B', text: '母爱伟大，儿女的孝心报答不完母亲的恩情' },
          { label: 'C', text: '春天的阳光很温暖' },
          { label: 'D', text: '小草很有生命力' }
        ],
        answer: 'B',
        explanation: '"谁言寸草心，报得三春晖"——儿女的孝心再大，也报答不完母亲的恩情，表达了对母爱的感恩。'
      }
    ]
  },

  // ==================== 第27课 ====================
  {
    id: 3027,
    title: '《绝句》',
    category: 'poetry',
    categoryLabel: '古诗词',
    grade: 3,
    day: 27,
    readingTime: 10,
    author: '杜甫',
    source: '《全唐诗》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=spring%20scene%20with%20orioles%20flying%2C%20swallows%20nesting%2C%20willows%20along%20river%2C%20Chinese%20landscape%20painting&image_size=landscape_4_3',
    text: `<p>两个{黄|huáng}{鹂|lí}鸣翠柳，一行白{鹭|lù}上青天。窗含西{岭|lǐng}千秋雪，门泊东吴万里船。</p>
<p>这首诗的作者是唐代诗人{杜|dù}{甫|fǔ}。杜甫被人们称为"诗圣"，他写了很多关心国家和人民的诗。这首《绝句》是他在成都{草|cǎo}堂居住时写的，描写了春天美丽的景色。</p>
<p>"两个黄鹂鸣翠柳"——两只黄鹂在翠绿的柳树上欢快地叫着。黄鹂是一种黄色的小鸟，叫声非常好听。翠柳就是翠绿色的柳树。黄鹂和翠柳的颜色搭配在一起，多么鲜艳！</p>
<p>"一行白鹭上青天"——一行白鹭飞向蔚蓝的天空。白鹭是一种白色的水鸟，它们排成一行，飞向高高的天空。白色的鸟和蓝色的天，又是一幅美丽的画面。</p>
<p>"窗含西岭千秋雪"——从窗户望出去，可以看到西边山岭上千年不化的积雪。"含"字用得特别好，好像窗户是一个画框，把远处的雪山装在了里面。</p>
<p>"门泊东吴万里船"——门前停泊着从遥远的东吴驶来的大船。万里，说明路途很远。</p>
<p>这首诗从近到远，从地到天，有声有色，有动有静，描绘了一幅生机勃勃的春天{画|huà}面。短短四句诗，就写了黄鹂、白鹭、翠柳、青天、雪山、大船六种景物，每一句都是一幅美丽的画。</p>`,
    explanation: {
      summary: '这首《绝句》是杜甫在成都草堂时写的。诗人通过描写黄鹂、白鹭、翠柳、青天、雪山、大船等景物，描绘了一幅色彩鲜明、生机勃勃的春天画面。',
      keyPoints: [
        '诗中描写了六种景物：黄鹂、白鹭、翠柳、青天、雪山、大船',
        '色彩丰富：黄、翠、白、青，画面鲜艳',
        '"含"字把窗户比作画框，非常巧妙',
        '这首诗有声有色、有动有静，描绘了春天的美景'
      ],
      vocabulary: [
        { word: '黄鹂', pinyin: 'huáng lí', meaning: '一种黄色的小鸟，叫声悦耳' },
        { word: '白鹭', pinyin: 'bái lù', meaning: '一种白色的水鸟' },
        { word: '翠柳', pinyin: 'cuì liǔ', meaning: '翠绿色的柳树' },
        { word: '千秋雪', pinyin: 'qiān qiū xuě', meaning: '千年不化的积雪' },
        { word: '泊', pinyin: 'bó', meaning: '船只停靠在岸边' }
      ],
      moral: '这首诗告诉我们，要善于用眼睛观察大自然的美景。春天到处充满了生机，色彩缤纷的景色让人心情愉快。'
    },
    questions: [
      {
        id: 'q3027_1',
        question: '这首诗描写了哪个季节的景色？',
        options: [
          { label: 'A', text: '夏天' },
          { label: 'B', text: '秋天' },
          { label: 'C', text: '春天' },
          { label: 'D', text: '冬天' }
        ],
        answer: 'C',
        explanation: '诗中有翠柳、黄鹂、白鹭等春天特有的景物，描写的是春天的美景。'
      },
      {
        id: 'q3027_2',
        question: '"窗含西岭千秋雪"中"含"字用得好在哪里？',
        options: [
          { label: 'A', text: '说明窗户很大' },
          { label: 'B', text: '好像窗户是画框，把远处的雪山装在里面' },
          { label: 'C', text: '说明雪很多' },
          { label: 'D', text: '说明窗户是透明的' }
        ],
        answer: 'B',
        explanation: '"含"字把窗户比作一个画框，远处的雪山好像被装在画框里，非常巧妙。'
      },
      {
        id: 'q3027_3',
        question: '这首诗中没有提到下面哪种颜色？',
        options: [
          { label: 'A', text: '黄色' },
          { label: 'B', text: '白色' },
          { label: 'C', text: '红色' },
          { label: 'D', text: '青色' }
        ],
        answer: 'C',
        explanation: '诗中有黄鹂（黄色）、翠柳（翠绿色）、白鹭（白色）、青天（青色），但没有提到红色。'
      },
      {
        id: 'q3027_4',
        question: '杜甫被人们称为什么？',
        options: [
          { label: 'A', text: '诗仙' },
          { label: 'B', text: '诗佛' },
          { label: 'C', text: '诗圣' },
          { label: 'D', text: '诗王' }
        ],
        answer: 'C',
        explanation: '杜甫被称为"诗圣"，他的诗关注国家和人民，李白被称为"诗仙"。'
      },
      {
        id: 'q3027_5',
        question: '这首诗一共写了几种景物？',
        options: [
          { label: 'A', text: '四种' },
          { label: 'B', text: '五种' },
          { label: 'C', text: '六种' },
          { label: 'D', text: '三种' }
        ],
        answer: 'C',
        explanation: '诗中写了六种景物：黄鹂、白鹭、翠柳、青天、雪山、大船。'
      }
    ]
  },

  // ==================== 第28课 ====================
  {
    id: 3028,
    title: '《刻舟求剑》',
    category: 'classic',
    categoryLabel: '成语故事',
    grade: 3,
    day: 28,
    readingTime: 10,
    author: '吕不韦',
    source: '《吕氏春秋》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20man%20marking%20his%20boat%20where%20his%20sword%20fell%20into%20river%2C%20other%20passengers%20laughing%2C%20cartoon%20fable&image_size=landscape_4_3',
    text: `<p>从前，有一个楚国人坐船过江。船到江心的时候，他一不小心，把随身{携|xié}带的一把宝剑掉到江里去了。船上的人急忙大喊："你的剑掉进水里了！快下去捞啊！"</p>
<p>这个楚国人却不慌不忙，从腰间拿出一把小刀，在船{舷|xián}上刻了一个记号。船上的人觉得很奇{怪|guài}，问他："你的剑掉进水里了，你在船上刻记号有什么用？"</p>
<p>楚国人得意地说："别急，别急。我已经在剑掉下去的地方刻了记号。等船靠了岸，我从刻记号的地方跳下去，就可以把剑找到了。"船上的人听了，都哈哈大笑起来。</p>
<p>船继续向前行驶。过了一会儿，船靠岸了。那个楚国人连忙脱了衣服，从他刻了记号的地方跳进水里去找剑。他在水里摸来摸去，找了好半天，可什么也没有找到。</p>
<p>他只好爬上船来，非常{纳|nà}闷地说："我的剑明明是从这里掉下去的，怎么就找不到了呢？"</p>
<p>船上的人笑得前仰后合，说："船已经走了很远了，而剑还在原来掉下去的地方。你用船上的记号去找水底下的剑，怎么可能找得到呢？"</p>
<p>那个楚国人还是不理解，{嘟|dū}{囔|nang}着说："我明明做了记号的呀……"他始终没有明白，船在走，剑不走，用静止的眼光去看变化的事物，是永远也找不到答案的。</p>`,
    explanation: {
      summary: '这个成语故事讲述了一个楚国人坐船时剑掉进了水里，他在船上刻了记号，等船靠岸后从记号处下水找剑，结果当然找不到。故事讽刺了那些不懂变通、用静止眼光看问题的人。',
      keyPoints: [
        '楚国人的剑掉进了江里',
        '他没有立刻下水捞，而是在船上刻了记号',
        '等船靠岸后他从记号处下水找剑，当然找不到',
        '船在移动，剑没动，用刻记号的方法是找不到剑的'
      ],
      vocabulary: [
        { word: '携带', pinyin: 'xié dài', meaning: '随身带着' },
        { word: '船舷', pinyin: 'chuán xián', meaning: '船的两侧边沿' },
        { word: '不慌不忙', pinyin: 'bù huāng bù máng', meaning: '不慌张，不忙乱，形容很镇定' },
        { word: '纳闷', pinyin: 'nà mèn', meaning: '心里不明白，感到疑惑' },
        { word: '前仰后合', pinyin: 'qián yǎng hòu hé', meaning: '形容大笑时身体前后晃动的样子' }
      ],
      moral: '这个故事告诉我们，世界上的事物都在不断变化，我们不能用静止不变的眼光去看问题，要根据情况的变化采取不同的方法。'
    },
    questions: [
      {
        id: 'q3028_1',
        question: '楚国人的剑是怎么掉进水里的？',
        options: [
          { label: 'A', text: '他故意扔的' },
          { label: 'B', text: '一不小心掉进江里的' },
          { label: 'C', text: '别人推他掉的' },
          { label: 'D', text: '被风吹掉的' }
        ],
        answer: 'B',
        explanation: '课文写道："他一不小心，把随身携带的一把宝剑掉到江里去了。"'
      },
      {
        id: 'q3028_2',
        question: '剑掉进水里后，楚国人做了什么？',
        options: [
          { label: 'A', text: '立刻跳下去捞' },
          { label: 'B', text: '请别人帮忙捞' },
          { label: 'C', text: '在船上刻了一个记号' },
          { label: 'D', text: '不要了，继续赶路' }
        ],
        answer: 'C',
        explanation: '课文写道："他却不慌不忙，从腰间拿出一把小刀，在船舷上刻了一个记号。"'
      },
      {
        id: 'q3028_3',
        question: '楚国人最后找到剑了吗？',
        options: [
          { label: 'A', text: '找到了' },
          { label: 'B', text: '没有找到' },
          { label: 'C', text: '别人帮他找到了' },
          { label: 'D', text: '剑自己浮上来了' }
        ],
        answer: 'B',
        explanation: '他在水里摸来摸去，找了好半天，什么也没有找到。'
      },
      {
        id: 'q3028_4',
        question: '为什么楚国人找不到剑？',
        options: [
          { label: 'A', text: '水太深了' },
          { label: 'B', text: '剑太小了' },
          { label: 'C', text: '船在移动而剑没有动，记号已经不在剑的上方了' },
          { label: 'D', text: '他的记号刻错了' }
        ],
        answer: 'C',
        explanation: '船一直在向前走，而剑沉在原来的地方不动。从刻记号的地方跳下去，当然找不到剑。'
      },
      {
        id: 'q3028_5',
        question: '"刻舟求剑"这个成语告诉我们什么道理？',
        options: [
          { label: 'A', text: '坐船时要小心' },
          { label: 'B', text: '不要用静止不变的眼光看问题，要懂得变通' },
          { label: 'C', text: '掉进水里的东西找不回来' },
          { label: 'D', text: '要在船上做记号' }
        ],
        answer: 'B',
        explanation: '这个成语告诉我们，事物在不断变化，不能用静止不变的眼光和方法去处理变化了的问题。'
      }
    ]
  },

  // ==================== 第29课 ====================
  {
    id: 3029,
    title: '《叶公好龙》',
    category: 'classic',
    categoryLabel: '成语故事',
    grade: 3,
    day: 29,
    readingTime: 10,
    author: '刘向',
    source: '《新序》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lord%20Ye%20who%20claims%20to%20love%20dragons%20fleeing%20in%20terror%20when%20a%20real%20dragon%20appears%2C%20cartoon%20fable&image_size=landscape_4_3',
    text: `<p>古时候，楚国有一个叫叶公的人。他非常喜欢龙，喜欢到了什么程度呢？他的屋子里，墙壁上画着龙，柱子上刻着龙，窗户上雕着龙，衣服上绣着龙。走进叶公的家，就像走进了一个龙的世界。</p>
<p>叶公对别人说："我这辈子最爱的就是龙！天底下没有什么东西比龙更{漂|piào}亮、更{威|wēi}风的了。"他逢人就讲龙的故事，到处{炫|xuàn}耀自己对龙的喜爱。他的名声传遍了整个楚国，人人都知道叶公爱龙。</p>
<p>天上的真龙听说了这件事，非常感动。它想："没想到人间还有这么喜欢我的人，我一定要去看看他。"于是，真龙从天上飞了下来。</p>
<p>真龙把头{伸|shēn}进叶公家的窗户，长长的身子绕着柱子盘旋，龙尾拖在大厅里。它满以为叶公会高兴得手舞足蹈。</p>
<p>谁知叶公一看到真龙，顿时吓得面如土色，浑身发{抖|dǒu}。他转身就跑，鞋子掉了一只也顾不上捡，一边跑一边喊："救命啊！救命啊！龙来了！"</p>
<p>真龙愣住了，摇摇头，飞回了天上。它怎么也想不明白：叶公不是说最喜欢龙吗？为什么看到真龙反而吓成这样？</p>
<p>原来，叶公喜欢的并不是真正的龙，而是那些画在墙上、刻在柱子上的假龙。他喜欢的只是龙的样子，并不是龙的本{质|zhì}。</p>
<p>后来，人们就用"叶公好龙"这个成语，来讽刺那些表面上说喜欢某种事物，实际上并不真正喜欢，甚至害怕的人。</p>`,
    explanation: {
      summary: '这个成语故事讲述了叶公非常喜欢龙，到处都画着龙、刻着龙。可是当真龙从天而降来看他时，他却吓得魂飞魄散、拔腿就跑。故事讽刺了那些口头上说喜欢，实际上并不真心喜欢的人。',
      keyPoints: [
        '叶公非常喜欢龙，家里到处都是龙的装饰',
        '他的名声传遍了楚国',
        '真龙来看他，他却被吓得面如土色、转身就跑',
        '叶公喜欢的只是龙的样子，不是真正的龙'
      ],
      vocabulary: [
        { word: '炫耀', pinyin: 'xuàn yào', meaning: '显示、夸耀自己的本领或好东西' },
        { word: '威风', pinyin: 'wēi fēng', meaning: '形容气势强大，令人敬畏' },
        { word: '面如土色', pinyin: 'miàn rú tǔ sè', meaning: '脸色像泥土一样，形容非常害怕' },
        { word: '盘旋', pinyin: 'pán xuán', meaning: '环绕着飞或转' },
        { word: '本质', pinyin: 'běn zhì', meaning: '事物本身固有的根本性质' }
      ],
      moral: '这个故事讽刺了那些表里不一的人。"叶公好龙"告诉我们，做人要言行一致，真正热爱一样东西，就应该真心去了解和接受它，而不是只做表面文章。'
    },
    questions: [
      {
        id: 'q3029_1',
        question: '叶公喜欢龙到了什么程度？',
        options: [
          { label: 'A', text: '只是口头说说' },
          { label: 'B', text: '家里到处画着龙、刻着龙、绣着龙' },
          { label: 'C', text: '养了一条龙' },
          { label: 'D', text: '写了几首关于龙的诗' }
        ],
        answer: 'B',
        explanation: '课文写道："墙壁上画着龙，柱子上刻着龙，窗户上雕着龙，衣服上绣着龙。"'
      },
      {
        id: 'q3029_2',
        question: '真龙为什么要来看叶公？',
        options: [
          { label: 'A', text: '它迷路了' },
          { label: 'B', text: '它听说叶公很喜欢它，很感动' },
          { label: 'C', text: '它饿了来找吃的' },
          { label: 'D', text: '天上的龙都来了' }
        ],
        answer: 'B',
        explanation: '课文写道："真龙听说了这件事，非常感动。它想：\'没想到人间还有这么喜欢我的人。\'"'
      },
      {
        id: 'q3029_3',
        question: '叶公看到真龙后是什么反应？',
        options: [
          { label: 'A', text: '高兴得手舞足蹈' },
          { label: 'B', text: '吓得面如土色，转身就跑' },
          { label: 'C', text: '和真龙成了好朋友' },
          { label: 'D', text: '给真龙画了一幅画' }
        ],
        answer: 'B',
        explanation: '课文写道："叶公一看到真龙，顿时吓得面如土色，浑身发抖。他转身就跑。"'
      },
      {
        id: 'q3029_4',
        question: '叶公真正喜欢的是什么？',
        options: [
          { label: 'A', text: '真正的龙' },
          { label: 'B', text: '龙的样子，而不是真正的龙' },
          { label: 'C', text: '龙的故事' },
          { label: 'D', text: '龙的翅膀' }
        ],
        answer: 'B',
        explanation: '课文写道："叶公喜欢的并不是真正的龙，而是那些画在墙上、刻在柱子上的假龙。"'
      },
      {
        id: 'q3029_5',
        question: '"叶公好龙"这个成语讽刺什么样的人？',
        options: [
          { label: 'A', text: '胆子小的人' },
          { label: 'B', text: '表面上说喜欢，实际上并不真心喜欢的人' },
          { label: 'C', text: '不喜欢动物的人' },
          { label: 'D', text: '住在乡下的人' }
        ],
        answer: 'B',
        explanation: '这个成语讽刺那些口头上说喜欢某种事物，实际上并不真正喜欢，甚至害怕的人。'
      }
    ]
  },

  // ==================== 第30课 ====================
  {
    id: 3030,
    title: '《画蛇添足》',
    category: 'classic',
    categoryLabel: '成语故事',
    grade: 3,
    day: 30,
    readingTime: 10,
    author: '刘向',
    source: '《战国策》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=a%20man%20adding%20feet%20to%20his%20finished%20snake%20drawing%20while%20others%20laugh%2C%20cartoon%20fable%20illustration&image_size=landscape_4_3',
    text: `<p>从前，楚国有一个贵族，在祭完祖宗以后，把一{壶|hú}祭酒赏给门客们喝。门客们接过酒壶，一看只有一壶酒，不够每个人都喝。怎么办呢？</p>
<p>有一个人提议说："这壶酒大家都想喝，不如我们每个人在地上画一条蛇，谁先画完，这壶酒就归谁喝。"大家都觉得这个办法好，一致同意了。</p>
<p>于是，门客们每人找了一根树枝，蹲在地上画起蛇来。有一个人画得非常快，不一会儿就画好了。他一手端起酒壶，一手拿着树枝，得意地看看别人，说："你们画得太慢了！我还能给蛇画上脚呢！"</p>
<p>于是，他左手端着酒壶，右手又在地上画了起来，给蛇添上了脚。他一边画一边{嘲|cháo}笑别人："你们看，我画的蛇多完整，还有脚呢！"</p>
<p>这时，另一个人也画好了蛇。他一把抢过酒壶，说："蛇本来就没有脚，你怎么能给它画上脚呢？你画的已经不是蛇了！"</p>
<p>说完，那个人把酒一饮而尽。给蛇画脚的人{瞪|dèng}大了眼睛，想说什么又说不出来，只好干看着别人喝酒。</p>
<p>其他门客都哈哈大笑，说："蛇本来就没有脚，你非要给它画上脚，这不叫画蛇，叫画蜥蜴了吧！"</p>
<p>那个给蛇添足的人，{尴|gān}{尬|gà}极了，恨不得找条地缝钻进去。明明已经赢了，却因为多此一举，白白把到手的酒让给了别人。</p>`,
    explanation: {
      summary: '这个成语故事讲述了几个门客比赛画蛇，一个人最先画完，却自作聪明地给蛇添上了脚，结果蛇不像蛇，反而输掉了比赛，把酒让给了别人。故事告诉我们做事不要多此一举。',
      keyPoints: [
        '几个门客比赛画蛇，谁先画完谁喝酒',
        '一个人最先画完，却自作聪明给蛇添上脚',
        '另一个人指出蛇没有脚，抢过酒喝了',
        '已经到手的东西，因为多此一举反而失去了'
      ],
      vocabulary: [
        { word: '贵族', pinyin: 'guì zú', meaning: '旧时指有地位有财富的人家' },
        { word: '门客', pinyin: 'mén kè', meaning: '古代寄食在贵族家中，为主人出谋划策的人' },
        { word: '一饮而尽', pinyin: 'yī yǐn ér jìn', meaning: '一口气把酒全部喝完' },
        { word: '多此一举', pinyin: 'duō cǐ yī jǔ', meaning: '做多余的、不必要的事情' },
        { word: '尴尬', pinyin: 'gān gà', meaning: '处境困难，不好处理，感到不好意思' }
      ],
      moral: '这个故事告诉我们，做事情要适可而止，不要自作聪明，多此一举。有时候做得太多反而会弄巧成拙，把已经到手的东西白白丢掉。'
    },
    questions: [
      {
        id: 'q3030_1',
        question: '门客们为什么要比赛画蛇？',
        options: [
          { label: 'A', text: '为了好玩' },
          { label: 'B', text: '酒只有一壶，不够每人喝，谁先画完谁喝' },
          { label: 'C', text: '主人要求他们画蛇' },
          { label: 'D', text: '他们在上课' }
        ],
        answer: 'B',
        explanation: '课文写道："这壶酒大家都想喝，不如我们每个人在地上画一条蛇，谁先画完，这壶酒就归谁喝。"'
      },
      {
        id: 'q3030_2',
        question: '那个人画完蛇后又做了什么多余的事？',
        options: [
          { label: 'A', text: '他又画了一条蛇' },
          { label: 'B', text: '他给蛇添上了脚' },
          { label: 'C', text: '他把画擦掉了' },
          { label: 'D', text: '他先喝了酒' }
        ],
        answer: 'B',
        explanation: '课文写道："他还能给蛇画上脚呢！"他给已经画好的蛇添上了脚。'
      },
      {
        id: 'q3030_3',
        question: '最后是谁喝到了那壶酒？',
        options: [
          { label: 'A', text: '给蛇添脚的人' },
          { label: 'B', text: '第二个画完蛇的人' },
          { label: 'C', text: '主人' },
          { label: 'D', text: '大家一起分了' }
        ],
        answer: 'B',
        explanation: '另一个人画完后抢过酒壶说蛇没有脚，然后把酒一饮而尽。'
      },
      {
        id: 'q3030_4',
        question: '为什么给蛇画脚的人输了？',
        options: [
          { label: 'A', text: '他画得太慢了' },
          { label: 'B', text: '他画得不好看' },
          { label: 'C', text: '蛇本来没有脚，他画的已经不是蛇了' },
          { label: 'D', text: '他把酒壶打翻了' }
        ],
        answer: 'C',
        explanation: '另一个人说："蛇本来就没有脚，你怎么能给它画上脚呢？你画的已经不是蛇了！"'
      },
      {
        id: 'q3030_5',
        question: '"画蛇添足"这个成语告诉我们什么道理？',
        options: [
          { label: 'A', text: '画蛇的时候要画得仔细' },
          { label: 'B', text: '做事要适可而止，不要多此一举，弄巧成拙' },
          { label: 'C', text: '蛇是有脚的' },
          { label: 'D', text: '比赛要跑得快' }
        ],
        answer: 'B',
        explanation: '这个成语告诉我们，做事情不要自作聪明、多此一举，否则反而会把事情搞砸，弄巧成拙。'
      }
    ]
  }
];