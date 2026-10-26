// 语文小霸王 - 三年级课文内容数据（扩展篇3）
// 每日一篇课文，每篇约10分钟阅读时间
// 难字标注拼音，课文后有讲解和阅读理解练习
// 第56-80课：经典成语故事

const CONTENT_GRADE_3_EXTRA3 = [
  // ==================== 第56课 ====================
  {
    id: 3056,
    title: '《掩耳盗铃》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 56,
    readingTime: 10,
    author: '《吕氏春秋》',
    source: '先秦·吕不韦《吕氏春秋·自知》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20person%20covering%20ears%20while%20stealing%20a%20bronze%20bell%2C%20traditional%20Chinese%20painting%2C%20fable%20illustration&image_size=landscape_4_3',
    text: `<p>从前，有一个人想偷一口大{钟|zhōng}。那口钟又大又重，他搬不动。于是，他想了一个办法——把钟砸碎，然后一块一块地搬回家。</p>
<p>可是，他刚用{锤|chuí}子砸了一下，钟就发出了巨大的"当当"声。他害怕别人听到声音赶来，赶紧用双手捂住自己的耳朵。他想："我听不见，别人也一定听不见。"于是放心地继续砸钟。结果，声音传出去了，邻居们都赶来把他抓住了。</p>
<p>这就是"掩耳盗{铃|líng}"的故事。"掩"是捂住的意思，"盗"是偷的意思。那个人捂住自己的耳朵去偷钟，以为自己听不见，别人也听不见。这是一件多么{愚|yú}{蠢|chǔn}的事啊！</p>
<p>后来，人们用"掩耳盗铃"这个成语来比喻那些自欺欺人的人。明明{欺|qī}骗不了别人的事情，却想{方|fāng}设法去{遮|zhē}掩，结果只会闹出笑话。这个故事告诉我们，做了坏事想掩盖事实是不行的，因为事实不会因为我们不想面对就消失。</p>`,
    explanation: {
      summary: '春秋时期，有个人想偷一口大钟，但怕被人发现，就捂住自己的耳朵去砸钟，以为自己听不见别人也听不见，结果被邻居抓住。后用"掩耳盗铃"比喻自欺欺人。',
      keyPoints: [
        '故事出自《吕氏春秋·自知》',
        '掩：捂住；盗：偷',
        '那个人用手捂住自己的耳朵，以为别人也听不到',
        '比喻自己欺骗自己，明明掩盖不了的事情偏要去掩盖',
        '告诉我们做坏事想掩盖是行不通的'
      ],
      vocabulary: [
        { word: '掩耳', pinyin: 'yǎn ěr', meaning: '捂住耳朵' },
        { word: '盗铃', pinyin: 'dào líng', meaning: '偷铃（这里指偷钟）' },
        { word: '愚蠢', pinyin: 'yú chǔn', meaning: '愚笨，不聪明' },
        { word: '遮掩', pinyin: 'zhē yǎn', meaning: '掩盖，隐藏' },
        { word: '自欺欺人', pinyin: 'zì qī qī rén', meaning: '欺骗自己，也欺骗别人' }
      ],
      moral: '这个故事告诉我们，不要做自欺欺人的事。现实是客观存在的，不会因为我们不去面对就改变。遇到问题应该勇敢面对，而不是假装看不见。'
    },
    questions: [
      {
        id: 'q3056_1',
        question: '那个人为什么要捂住耳朵？',
        options: [
          { label: 'A', text: '因为耳朵疼' },
          { label: 'B', text: '怕别人听到钟声来抓他' },
          { label: 'C', text: '觉得捂耳朵很好玩' },
          { label: 'D', text: '天气太冷了' }
        ],
        answer: 'B',
        explanation: '那个人砸钟时钟发出很大的声音，他害怕别人听到声音赶来，就捂住自己的耳朵，以为自己听不见别人也听不见。'
      },
      {
        id: 'q3056_2',
        question: '"掩耳盗铃"中"掩"是什么意思？',
        options: [
          { label: 'A', text: '打开' },
          { label: 'B', text: '捂住' },
          { label: 'C', text: '听到' },
          { label: 'D', text: '砸碎' }
        ],
        answer: 'B',
        explanation: '"掩"是捂住的意思，"掩耳"就是捂住耳朵。那个偷钟的人捂住自己的耳朵，以为自己听不到声音，别人也听不到。'
      },
      {
        id: 'q3056_3',
        question: '那个人最后的结局是什么？',
        options: [
          { label: 'A', text: '成功把钟偷走了' },
          { label: 'B', text: '自己把钟搬回家了' },
          { label: 'C', text: '被邻居们抓住了' },
          { label: 'D', text: '自己跑掉了' }
        ],
        answer: 'C',
        explanation: '尽管他捂住了自己的耳朵，但巨大的钟声还是传了出去，邻居们听到声音赶来，把他抓住了。'
      },
      {
        id: 'q3056_4',
        question: '"掩耳盗铃"这个成语比喻什么？',
        options: [
          { label: 'A', text: '非常勇敢' },
          { label: 'B', text: '自欺欺人' },
          { label: 'C', text: '聪明机智' },
          { label: 'D', text: '乐于助人' }
        ],
        answer: 'B',
        explanation: '"掩耳盗铃"比喻自欺欺人，明明掩盖不了的事情却偏要去掩盖，以为别人不知道，结果只会闹笑话。'
      },
      {
        id: 'q3056_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '偷东西要小心' },
          { label: 'B', text: '遇到问题要勇敢面对，不要自欺欺人' },
          { label: 'C', text: '钟的声音很大' },
          { label: 'D', text: '捂住耳朵就听不到声音' }
        ],
        answer: 'B',
        explanation: '这个故事告诉我们，做了坏事想掩盖事实是不行的，因为事实不会因为我们不想面对就消失。遇到问题应该勇敢面对。'
      }
    ]
  },

  // ==================== 第57课 ====================
  {
    id: 3057,
    title: '《守株待兔》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 57,
    readingTime: 10,
    author: '韩非',
    source: '先秦·韩非《韩非子·五蠹》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=farmer%20sitting%20under%20a%20tree%20stump%20waiting%20for%20rabbit%2C%20traditional%20Chinese%20fable%20illustration%2C%20paddy%20field%20background&image_size=landscape_4_3',
    text: `<p>从前，宋国有一个农民。有一天，他在田里干活的时候，突然看见一只兔子飞快地跑来，一头撞在田边的树桩上，{折|zhé}断了脖子，死掉了。</p>
<p>农民白白捡到了一只兔子，心里别提多高兴了。从那以后，他再也不想辛苦种地了。每天，他都坐在那个树桩旁边，等着再有兔子跑来撞死。他想："说不定每天都能捡到一只兔子呢！"</p>
<p>日子一天天过去了，再也没有兔子撞到树桩上。而他的田地因为没有人照看，长满了杂草，庄稼全都枯死了。到了秋天，别人都收获了{丰|fēng}收的粮食，他却一粒粮食也没有。周围的邻居都笑话他，他成了宋国人的笑柄。</p>
<p>"守株待兔"这个成语中，"守"是守着的意思，"株"是树桩的意思，"待"是等待的意思。兔子撞树桩只是一个偶然事件，那个农民却把它当成了一定会发生的事，{放|fàng}弃了自己的劳动，结果什么也没有得到。这个故事告诉我们，不能把偶然的事情当成必然，更不能心存{侥|jiǎo}幸，指望不劳而获。</p>`,
    explanation: {
      summary: '宋国有个农民偶然捡到一只撞树桩而死的兔子，从此不再干活，天天守在树桩旁等兔子，结果田地荒废，一无所获。比喻不主动努力，心存侥幸，希望得到意外的收获。',
      keyPoints: [
        '故事出自《韩非子·五蠹》',
        '株：树桩；守株：守在树桩旁',
        '兔子撞树桩是偶然事件，不是必然的',
        '农民放弃了劳动，天天等待，结果田地荒废',
        '比喻不努力劳动，想靠侥幸获得成功'
      ],
      vocabulary: [
        { word: '守株待兔', pinyin: 'shǒu zhū dài tù', meaning: '守在树桩旁等兔子，比喻不劳而获' },
        { word: '偶然', pinyin: 'ǒu rán', meaning: '不一定会发生，碰巧' },
        { word: '侥幸', pinyin: 'jiǎo xìng', meaning: '由于偶然的原因而得到成功或免去灾祸' },
        { word: '笑柄', pinyin: 'xiào bǐng', meaning: '被人笑话的把柄' },
        { word: '丰收', pinyin: 'fēng shōu', meaning: '收成很好，收获很多' }
      ],
      moral: '这个故事告诉我们，天上不会掉馅饼。不能把偶然的好运当成必然，更不能因此放弃自己的努力。只有踏踏实实地劳动，才能获得真正的收获。'
    },
    questions: [
      {
        id: 'q3057_1',
        question: '兔子为什么会死？',
        options: [
          { label: 'A', text: '被农民打死的' },
          { label: 'B', text: '自己撞到树桩上折断了脖子' },
          { label: 'C', text: '被老鹰抓走的' },
          { label: 'D', text: '饿死的' }
        ],
        answer: 'B',
        explanation: '兔子在飞快奔跑时一头撞在田边的树桩上，折断了脖子死掉了，这是个偶然事件。'
      },
      {
        id: 'q3057_2',
        question: '"守株待兔"中"株"是什么意思？',
        options: [
          { label: 'A', text: '兔子' },
          { label: 'B', text: '树桩' },
          { label: 'C', text: '庄稼' },
          { label: 'D', text: '田地' }
        ],
        answer: 'B',
        explanation: '"株"是树桩的意思，"守株待兔"就是守在树桩旁等待兔子再来撞死。'
      },
      {
        id: 'q3057_3',
        question: '那个农民最后的结果怎样？',
        options: [
          { label: 'A', text: '每天都能捡到兔子' },
          { label: 'B', text: '田地荒废，一无所获' },
          { label: 'C', text: '成了富翁' },
          { label: 'D', text: '当了大官' }
        ],
        answer: 'B',
        explanation: '农民不再种地，天天等兔子撞树桩，结果再也没有兔子来，田地长满了杂草，庄稼全枯死了，一无所获。'
      },
      {
        id: 'q3057_4',
        question: '这个成语比喻什么样的人？',
        options: [
          { label: 'A', text: '勤劳能干的人' },
          { label: 'B', text: '不劳而获、心存侥幸的人' },
          { label: 'C', text: '非常勇敢的人' },
          { label: 'D', text: '爱护动物的人' }
        ],
        answer: 'B',
        explanation: '"守株待兔"比喻不主动努力，存在侥幸心理，希望不劳而获的人。'
      },
      {
        id: 'q3057_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '兔子跑得很快' },
          { label: 'B', text: '树桩很危险' },
          { label: 'C', text: '不能把偶然当成必然，要靠自己的劳动' },
          { label: 'D', text: '种地很辛苦' }
        ],
        answer: 'C',
        explanation: '故事告诉我们不能把偶然的事情当成必然，更不能心存侥幸。只有踏踏实实地劳动，才能获得真正的收获。'
      }
    ]
  },

  // ==================== 第58课 ====================
  {
    id: 3058,
    title: '《亡羊补牢》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 58,
    readingTime: 10,
    author: '《战国策》',
    source: '西汉·刘向《战国策·楚策四》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=shepherd%20repairing%20sheep%20pen%20fence%20at%20night%2C%20traditional%20Chinese%20fable%20illustration%2C%20rural%20countryside%20scene&image_size=landscape_4_3',
    text: `<p>从前，有个人养了一群羊。有一天早上，他去放羊，发现少了一只。原来，羊圈{圈|juàn}上有个窟{窿|long}，夜里狼从窟窿钻进来，叼走了一只羊。</p>
<p>邻居劝他说："赶快把羊圈修好吧，不然狼还会来偷羊的。"他却说："羊已经丢了，还修羊圈干什么？"他没有听邻居的劝告。</p>
<p>第二天早上，他又发现少了一只羊。原来狼又从那个窟窿钻进来，又叼走了一只羊。他非常后悔，心想："我应该早点听邻居的话啊！"于是，他赶紧动手把羊圈修好了，把窟窿补得严严实实的。</p>
<p>从此以后，他的羊再也没有丢过。"亡羊补牢"中，"亡"是丢失的意思，"牢"是羊圈的意思。虽然他已经丢了两只羊，但及时修补羊圈，避免了更大的损失。这个故事告诉我们，发现错误后要及时改正，只要改了，就不算晚。正如人们常说的"亡羊补牢，{犹|yóu}未{迟|chí}也"——丢了羊再修羊圈，还不算太迟。</p>`,
    explanation: {
      summary: '有个人的羊圈破了个洞，狼从洞里钻进来叼走了羊。邻居劝他修羊圈，他不听，结果又丢了一只羊。后来他赶紧修好了羊圈，羊再也没有丢过。比喻出了问题及时补救还不算晚。',
      keyPoints: [
        '故事出自《战国策·楚策四》',
        '亡：丢失；牢：羊圈',
        '第一次丢羊后不听劝告，导致又丢了一只',
        '及时改正错误，避免了更大的损失',
        '亡羊补牢，犹未迟也——及时改正还不算晚'
      ],
      vocabulary: [
        { word: '亡羊补牢', pinyin: 'wáng yáng bǔ láo', meaning: '丢了羊再修羊圈，比喻出了问题及时补救' },
        { word: '窟窿', pinyin: 'kū long', meaning: '洞，破洞' },
        { word: '后悔', pinyin: 'hòu huǐ', meaning: '事后懊悔' },
        { word: '犹未迟', pinyin: 'yóu wèi chí', meaning: '还不算晚' },
        { word: '劝告', pinyin: 'quàn gào', meaning: '用道理说服人，使人改正错误或接受意见' }
      ],
      moral: '这个故事告诉我们，犯了错误并不可怕，可怕的是知道错了却不改正。只要及时认识到错误并加以改正，就能避免更大的损失。正所谓"亡羊补牢，犹未迟也"。'
    },
    questions: [
      {
        id: 'q3058_1',
        question: '羊为什么丢了？',
        options: [
          { label: 'A', text: '羊自己跑出去了' },
          { label: 'B', text: '狼从羊圈的窟窿钻进来叼走的' },
          { label: 'C', text: '被邻居偷走的' },
          { label: 'D', text: '羊圈门没关好' }
        ],
        answer: 'B',
        explanation: '羊圈上有个窟窿，夜里狼从窟窿钻进来，叼走了一只羊。'
      },
      {
        id: 'q3058_2',
        question: '"亡羊补牢"中"亡"是什么意思？',
        options: [
          { label: 'A', text: '死亡' },
          { label: 'B', text: '逃跑' },
          { label: 'C', text: '丢失' },
          { label: 'D', text: '消灭' }
        ],
        answer: 'C',
        explanation: '"亡"在这里是丢失的意思，"亡羊"就是丢了羊，"补牢"就是修补羊圈。'
      },
      {
        id: 'q3058_3',
        question: '那个人第一次丢羊后做了什么？',
        options: [
          { label: 'A', text: '立刻修好了羊圈' },
          { label: 'B', text: '没有听邻居的劝告，没有修羊圈' },
          { label: 'C', text: '去找狼报仇' },
          { label: 'D', text: '把羊全卖了' }
        ],
        answer: 'B',
        explanation: '他觉得羊已经丢了，修羊圈没有用，没有听邻居的劝告，结果第二天又丢了一只羊。'
      },
      {
        id: 'q3058_4',
        question: '修好羊圈后的结果是什么？',
        options: [
          { label: 'A', text: '羊还是继续丢' },
          { label: 'B', text: '羊再也没有丢过' },
          { label: 'C', text: '狼改吃别的动物了' },
          { label: 'D', text: '邻居的羊丢了' }
        ],
        answer: 'B',
        explanation: '他把羊圈的窟窿补好后，狼再也钻不进来了，从此羊再也没有丢过。'
      },
      {
        id: 'q3058_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '不要养羊' },
          { label: 'B', text: '狼很可恶' },
          { label: 'C', text: '犯了错误要及时改正，亡羊补牢，犹未迟也' },
          { label: 'D', text: '邻居的话不可信' }
        ],
        answer: 'C',
        explanation: '故事告诉我们，犯了错误并不可怕，只要及时认识到错误并加以改正，就能避免更大的损失。'
      }
    ]
  },

  // ==================== 第59课 ====================
  {
    id: 3059,
    title: '《南辕北辙》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 59,
    readingTime: 10,
    author: '《战国策》',
    source: '西汉·刘向《战国策·魏策四》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20horse%20carriage%20going%20north%20while%20destination%20is%20south%2C%20compass%20directions%2C%20traditional%20Chinese%20fable%20illustration&image_size=landscape_4_3',
    text: `<p>从前，有个人要从{魏|wèi}国到楚国去。楚国在魏国的南边，可是这个人却驾着马车一直往北走。</p>
<p>路上有人问他："你到哪里去？"他说："我要到楚国去。"那人说："楚国在南边，你为什么往北走呢？"他{满|mǎn}不在乎地说："没关系，我的马跑得快！"那人说："你的马虽然跑得快，但方向不对啊，这不是越走越远吗？"他又说："我带了很多路费！"那人说："路费再多也没有用，方向错了，永远也到不了楚国。"他还说："我的{车|chē}夫{驾|jià}车的技术很好！"</p>
<p>其实，他的马越好，路费越多，车夫的技术越高超，他离楚国就越远。因为他走的方向根本就错了。</p>
<p>"南辕北辙"中，"辕"是车前面驾牲口的两根直木，这里指车，"辙"是车轮压出的痕迹。车要往南走，轮迹却向北，方向完全{相|xiāng}反。这个故事告诉我们，无论做任何事情，首先要确定正确的方向。如果方向错了，条件越好，努力越多，离目标就越远。</p>`,
    explanation: {
      summary: '有个人要去南方的楚国，却驾着马车往北走。别人提醒他方向错了，他却说马快、路费多、车夫技术好。其实方向错了，条件再好也到不了目的地。比喻行动和目标相反。',
      keyPoints: [
        '故事出自《战国策·魏策四》',
        '辕：车前驾牲口的直木；辙：车轮的痕迹',
        '楚国在南边，他却往北走',
        '方向错了，条件越好反而离目标越远',
        '做事首先要确定正确的方向'
      ],
      vocabulary: [
        { word: '南辕北辙', pinyin: 'nán yuán běi zhé', meaning: '心里想往南却驾车向北，比喻行动与目的相反' },
        { word: '满不在乎', pinyin: 'mǎn bù zài hu', meaning: '完全不放在心上，一点也不在意' },
        { word: '车夫', pinyin: 'chē fū', meaning: '赶车的人' },
        { word: '高超', pinyin: 'gāo chāo', meaning: '好得超过一般水平' },
        { word: '辙', pinyin: 'zhé', meaning: '车轮压出的痕迹' }
      ],
      moral: '这个故事告诉我们，做任何事情，方向是最重要的。如果方向错了，再好的条件和再多的努力都无济于事。在行动之前，一定要先确定正确的方向和目标。'
    },
    questions: [
      {
        id: 'q3059_1',
        question: '那个人要去哪里？',
        options: [
          { label: 'A', text: '魏国' },
          { label: 'B', text: '楚国' },
          { label: 'C', text: '秦国' },
          { label: 'D', text: '齐国' }
        ],
        answer: 'B',
        explanation: '那个人要从魏国到楚国去，楚国在魏国的南边。'
      },
      {
        id: 'q3059_2',
        question: '他走的方向对吗？',
        options: [
          { label: 'A', text: '对的，往南走' },
          { label: 'B', text: '对的，往东走' },
          { label: 'C', text: '不对，他往北走了' },
          { label: 'D', text: '不对，他往西走了' }
        ],
        answer: 'C',
        explanation: '楚国在南边，但他却驾着马车一直往北走，方向完全相反。'
      },
      {
        id: 'q3059_3',
        question: '"南辕北辙"中"辕"指的是什么？',
        options: [
          { label: 'A', text: '马' },
          { label: 'B', text: '车前驾牲口的直木' },
          { label: 'C', text: '车轮' },
          { label: 'D', text: '鞭子' }
        ],
        answer: 'B',
        explanation: '"辕"是车前面驾牲口的两根直木，这里代表车行驶的方向。'
      },
      {
        id: 'q3059_4',
        question: '为什么他的条件越好，离楚国越远？',
        options: [
          { label: 'A', text: '因为他的马太慢了' },
          { label: 'B', text: '因为他的方向错了' },
          { label: 'C', text: '因为楚国太远了' },
          { label: 'D', text: '因为路费不够' }
        ],
        answer: 'B',
        explanation: '他走的方向是北，而楚国在南边。方向错了，马越快、路费越多，反而离楚国越远。'
      },
      {
        id: 'q3059_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '要买好马' },
          { label: 'B', text: '要多带路费' },
          { label: 'C', text: '做事情首先要确定正确的方向' },
          { label: 'D', text: '楚国很远' }
        ],
        answer: 'C',
        explanation: '故事告诉我们，做任何事情首先要确定正确的方向。如果方向错了，条件越好，努力越多，离目标反而越远。'
      }
    ]
  },

  // ==================== 第60课 ====================
  {
    id: 3060,
    title: '《惊弓之鸟》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 60,
    readingTime: 10,
    author: '《战国策》',
    source: '西汉·刘向《战国策·楚策四》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20archer%20shooting%20arrow%20at%20bird%20in%20sky%2C%20bird%20falling%20from%20sky%2C%20traditional%20Chinese%20painting%20style&image_size=landscape_4_3',
    text: `<p>{战|zhàn}国时期，魏国有个有名的射箭能手叫{更|gēng}{赢|yíng}。有一天，更赢跟魏王在一起，抬头看见天空中飞着一只大雁。更赢对魏王说："大王，我不用箭，只要拉一下弓，就能把这只大雁射下来。"</p>
<p>魏王不相信，说："你的射箭技术难道已经高到这种地步了吗？"更赢说："可以试一试。"于是他拉了一下弓弦，只听"{嘣|bēng}"的一声，那只大雁果然从天空中掉了下来。</p>
<p>魏王大吃一惊，说："这太神奇了！"更赢解释说："这是一只受过伤的鸟。它飞得很慢，叫声很{悲|bēi}惨。飞得慢，是因为它受过箭伤，伤口还没有好；叫声悲惨，是因为它离开了同伴，孤单失群。它心里本来就害怕，一听到弓弦的声音，就拼命往高处飞，结果伤口裂开，就掉下来了。"</p>
<p>"惊弓之鸟"这个成语就是从这个故事来的。它比喻那些受过惊吓的人，遇到一点{动|dòng}静就非常害怕，心里总是不安。这只大雁之所以会掉下来，不是因为更赢的箭法有多高明，而是因为它曾经被箭射伤过，对弓弦的声音有着深深的恐惧。</p>`,
    explanation: {
      summary: '战国时，魏国射箭能手更赢不用箭，只拉弓弦就把一只大雁射了下来。原来这是一只受过伤的鸟，听到弓弦声就吓得掉下来了。比喻受过惊吓的人遇到一点动静就非常害怕。',
      keyPoints: [
        '故事出自《战国策·楚策四》',
        '更赢不用箭，只拉弓弦就射下了大雁',
        '大雁受过箭伤，听到弓声就害怕',
        '大雁掉下来不是因为箭法高明，而是因为它本来就害怕',
        '比喻受过惊吓的人遇到动静就害怕'
      ],
      vocabulary: [
        { word: '惊弓之鸟', pinyin: 'jīng gōng zhī niǎo', meaning: '被弓箭吓怕了的鸟，比喻受过惊吓的人' },
        { word: '悲惨', pinyin: 'bēi cǎn', meaning: '悲伤凄惨' },
        { word: '孤单失群', pinyin: 'gū dān shī qún', meaning: '孤独地离开了群体' },
        { word: '动静', pinyin: 'dòng jing', meaning: '动作或声音，这里指响声' },
        { word: '恐惧', pinyin: 'kǒng jù', meaning: '非常害怕' }
      ],
      moral: '这个故事告诉我们，受过创伤的人往往会对类似的事情特别敏感和恐惧。同时也说明，善于观察和分析事物的特点，就能找到解决问题的关键。'
    },
    questions: [
      {
        id: 'q3060_1',
        question: '更赢是怎样把大雁射下来的？',
        options: [
          { label: 'A', text: '用箭射的' },
          { label: 'B', text: '用石头砸的' },
          { label: 'C', text: '只拉了一下弓弦，没有用箭' },
          { label: 'D', text: '用网捕的' }
        ],
        answer: 'C',
        explanation: '更赢没有用箭，只拉了一下弓弦，弓弦的声音就把大雁吓得掉了下来。'
      },
      {
        id: 'q3060_2',
        question: '这只大雁为什么会掉下来？',
        options: [
          { label: 'A', text: '它太累了' },
          { label: 'B', text: '它受过箭伤，听到弓声就害怕，伤口裂开了' },
          { label: 'C', text: '它飞得太高了' },
          { label: 'D', text: '被风吹下来的' }
        ],
        answer: 'B',
        explanation: '这只大雁受过箭伤，伤口还没好，一听到弓弦的声音就拼命高飞，结果伤口裂开，掉了下来。'
      },
      {
        id: 'q3060_3',
        question: '"惊弓之鸟"比喻什么样的人？',
        options: [
          { label: 'A', text: '非常勇敢的人' },
          { label: 'B', text: '射箭技术好的人' },
          { label: 'C', text: '受过惊吓，遇到动静就害怕的人' },
          { label: 'D', text: '喜欢鸟的人' }
        ],
        answer: 'C',
        explanation: '"惊弓之鸟"比喻那些曾经受过惊吓的人，遇到一点动静就非常害怕，心里总是不安。'
      },
      {
        id: 'q3060_4',
        question: '更赢为什么能判断出这是一只受伤的鸟？',
        options: [
          { label: 'A', text: '他猜的' },
          { label: 'B', text: '他看到鸟身上有伤' },
          { label: 'C', text: '他观察到鸟飞得慢、叫声悲惨' },
          { label: 'D', text: '别人告诉他的' }
        ],
        answer: 'C',
        explanation: '更赢观察到这只鸟飞得很慢（说明受过伤），叫声悲惨（说明孤单失群），从而判断它是一只受过箭伤的鸟。'
      },
      {
        id: 'q3060_5',
        question: '这个故事说明更赢有什么特点？',
        options: [
          { label: 'A', text: '力气很大' },
          { label: 'B', text: '善于观察和分析' },
          { label: 'C', text: '运气很好' },
          { label: 'D', text: '跑得很快' }
        ],
        answer: 'B',
        explanation: '更赢通过仔细观察大雁的飞行速度和叫声，准确判断出它是一只受过伤的鸟，说明他善于观察和分析事物。'
      }
    ]
  },

  // ==================== 第61课 ====================
  {
    id: 3061,
    title: '《买椟还珠》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 61,
    readingTime: 10,
    author: '韩非',
    source: '先秦·韩非《韩非子·外储说左上》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20person%20holding%20beautiful%20jewelry%20box%20returning%20pearl%2C%20traditional%20Chinese%20merchant%20scene%2C%20classical%20painting&image_size=landscape_4_3',
    text: `<p>从前，有一个楚国的珠宝商人，他有一颗非常珍贵的珍珠。为了把珍珠卖个好价钱，他精心制作了一个装珍珠的盒子。这个盒子用上好的木{兰|lán}木做成，用{桂|guì}椒等香料薰得香喷喷的，外面还{镶|xiāng}嵌着美丽的珠玉，用翡翠装饰得华丽无比。</p>
<p>有一天，一个{郑|zhèng}国人来到市场上，看到了这个美丽的盒子，立刻就喜欢上了。他出高价买下了这个盒子，可是打开一看，里面有一颗珍珠。他把珍珠拿出来，还给了楚国商人，只拿着空盒子高高兴兴地走了。</p>
<p>周围的人都觉得很{诧|chà}异。楚国商人把盒子做得这么漂亮，是为了让珍珠看起来更珍贵。可是那个郑国人只看到了漂亮的盒子，却不认识里面珍珠的价值。他{取|qǔ}走了次要的东西（盒子），却丢弃了主要的东西（珍珠）。</p>
<p>"买椟还珠"中，"椟"就是盒子。这个故事告诉我们，做事不能只看外表，不看实质。有时候，人们会被华{丽|lì}的外表所迷惑，分不清什么是主要的，什么是次要的，结果做出了{拣|jiǎn}了芝麻丢了西瓜的傻事。</p>`,
    explanation: {
      summary: '楚国商人用精美的盒子装珍珠去卖，一个郑国人买了盒子却把珍珠还给了商人。比喻没有眼光，取舍不当，分不清主次。',
      keyPoints: [
        '故事出自《韩非子·外储说左上》',
        '椟：盒子。买椟还珠：买了盒子还了珍珠',
        '郑国人只看外表，不认识珍珠的价值',
        '取走了次要的东西，丢弃了主要的东西',
        '比喻没有眼光，取舍不当'
      ],
      vocabulary: [
        { word: '买椟还珠', pinyin: 'mǎi dú huán zhū', meaning: '买了盒子还了珍珠，比喻取舍不当' },
        { word: '镶嵌', pinyin: 'xiāng qiàn', meaning: '把东西嵌入另一物体内' },
        { word: '诧异', pinyin: 'chà yì', meaning: '觉得奇怪、惊讶' },
        { word: '华丽', pinyin: 'huá lì', meaning: '华美绚丽' },
        { word: '实质', pinyin: 'shí zhì', meaning: '本质，实际的内容' }
      ],
      moral: '这个故事告诉我们，看事物不能只看外表，要透过表面看本质。不要被华美的包装迷惑了双眼，分不清什么是真正有价值的东西。'
    },
    questions: [
      {
        id: 'q3061_1',
        question: '楚国商人为珍珠做了什么？',
        options: [
          { label: 'A', text: '用布包起来' },
          { label: 'B', text: '做了一个非常精美的盒子来装' },
          { label: 'C', text: '直接拿在手上卖' },
          { label: 'D', text: '放在口袋里' }
        ],
        answer: 'B',
        explanation: '楚国商人用上好的木兰木做盒子，用香料薰香，外面镶嵌珠玉翡翠，做了一个非常华丽的盒子来装珍珠。'
      },
      {
        id: 'q3061_2',
        question: '郑国人买下盒子后做了什么？',
        options: [
          { label: 'A', text: '把珍珠和盒子都带走了' },
          { label: 'B', text: '把珍珠还给了商人，只拿走了盒子' },
          { label: 'C', text: '把盒子还给了商人' },
          { label: 'D', text: '什么都没买' }
        ],
        answer: 'B',
        explanation: '郑国人打开盒子发现里面有珍珠，就把珍珠拿出来还给了商人，只拿着空盒子高高兴兴地走了。'
      },
      {
        id: 'q3061_3',
        question: '"买椟还珠"中"椟"是什么意思？',
        options: [
          { label: 'A', text: '珍珠' },
          { label: 'B', text: '盒子' },
          { label: 'C', text: '商人' },
          { label: 'D', text: '钱' }
        ],
        answer: 'B',
        explanation: '"椟"就是盒子，"买椟还珠"就是买了盒子还了珍珠，比喻没有眼光，取舍不当。'
      },
      {
        id: 'q3061_4',
        question: '这个故事中郑国人犯了什么错误？',
        options: [
          { label: 'A', text: '买得太贵了' },
          { label: 'B', text: '被华丽的外表迷惑，分不清主次' },
          { label: 'C', text: '没有带够钱' },
          { label: 'D', text: '不认识楚国商人' }
        ],
        answer: 'B',
        explanation: '郑国人只看到了盒子的华丽外表，却认识不到里面珍珠的真正价值，被外表迷惑，分不清主次。'
      },
      {
        id: 'q3061_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '盒子比珍珠好看' },
          { label: 'B', text: '买东西要讨价还价' },
          { label: 'C', text: '看事物不能只看外表，要看实质' },
          { label: 'D', text: '不要到市场买东西' }
        ],
        answer: 'C',
        explanation: '这个故事告诉我们，看事物不能只看外表，要透过表面看本质，不要被华美的外表迷惑，分不清什么是真正有价值的东西。'
      }
    ]
  },

  // ==================== 第62课 ====================
  {
    id: 3062,
    title: '《画蛇添足》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 62,
    readingTime: 10,
    author: '《战国策》',
    source: '西汉·刘向《战国策·齐策二》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20people%20drawing%20snakes%20on%20paper%2C%20one%20person%20adding%20feet%20to%20snake%2C%20traditional%20Chinese%20fable%20illustration&image_size=landscape_4_3',
    text: `<p>从前，楚国有个贵族，在祭{祀|sì}完祖先后，把一{壶|hú}酒赏给手下的人喝。可是人多酒少，大家觉得不好分。有个人提议说："不如我们比赛画蛇吧，谁先画完，这壶酒就归谁。"</p>
<p>大家都同意了。有一个人画得非常快，第一个画完了。他看看别人还在画，心里得意极了。他左手端起酒壶，右手拿着画笔，说："你们画得太慢了！我还能给蛇画上脚呢！"于是，他开始给蛇画脚。</p>
<p>还没等他画完蛇脚，另一个人也画完了。那人一把抢过酒壶说："蛇本来就没有脚，你给它画上脚，那就不是蛇了！"说完，那人就把酒喝了。给蛇画脚的那个人，只好眼巴巴地看着别人喝酒，后悔不已。</p>
<p>"画蛇添足"这个成语，比喻做了多余的事情，反而把事情搞{砸|zá}了。蛇本来就没有脚，画好蛇就行了，非要多此一举给蛇加上脚，结果反而输了。这个故事告诉我们，做事要适可而止，不要{自|zì}作聪明，做了多余的事，反而弄巧成拙。</p>`,
    explanation: {
      summary: '楚国几个人比赛画蛇，赢的人可以得到一壶酒。有个人先画完了，又给蛇画了脚，结果反而输了。比喻做了多余的事，反而把事情弄坏了。',
      keyPoints: [
        '故事出自《战国策·齐策二》',
        '蛇本来没有脚，画蛇添足是多余的',
        '那个人因为多此一举反而输掉了酒',
        '比喻做了多余的事，反而把事情弄糟',
        '告诉我们做事要适可而止'
      ],
      vocabulary: [
        { word: '画蛇添足', pinyin: 'huà shé tiān zú', meaning: '画蛇时给蛇添上脚，比喻多此一举' },
        { word: '祭祀', pinyin: 'jì sì', meaning: '向神灵或祖先供奉物品，表示崇敬' },
        { word: '多此一举', pinyin: 'duō cǐ yī jǔ', meaning: '做多余的、不必要的事情' },
        { word: '适可而止', pinyin: 'shì kě ér zhǐ', meaning: '到适当的程度就停下来' },
        { word: '弄巧成拙', pinyin: 'nòng qiǎo chéng zhuō', meaning: '本想耍聪明，结果做了蠢事' }
      ],
      moral: '这个故事告诉我们，做事要恰到好处，适可而止。不要自作聪明去做多余的事，否则反而会把事情搞砸，弄巧成拙。'
    },
    questions: [
      {
        id: 'q3062_1',
        question: '他们用什么方式来决定谁喝酒？',
        options: [
          { label: 'A', text: '猜拳' },
          { label: 'B', text: '跑步比赛' },
          { label: 'C', text: '比赛画蛇，谁先画完谁喝' },
          { label: 'D', text: '抽签' }
        ],
        answer: 'C',
        explanation: '因为人多酒少，大家决定比赛画蛇，谁先画完这壶酒就归谁。'
      },
      {
        id: 'q3062_2',
        question: '第一个画完的人做了什么多余的事？',
        options: [
          { label: 'A', text: '他喝了酒' },
          { label: 'B', text: '他又画了一条蛇' },
          { label: 'C', text: '他给蛇画上了脚' },
          { label: 'D', text: '他把画撕了' }
        ],
        answer: 'C',
        explanation: '他画完蛇后觉得别人太慢，就自作聪明地给蛇画脚，结果别人先画完喝了他的酒。'
      },
      {
        id: 'q3062_3',
        question: '为什么蛇不应该有脚？',
        options: [
          { label: 'A', text: '因为蛇是用肚子走路的' },
          { label: 'B', text: '因为蛇本来就没有脚' },
          { label: 'C', text: '因为脚画不好看' },
          { label: 'D', text: '因为比赛规定不能画脚' }
        ],
        answer: 'B',
        explanation: '蛇本来就是没有脚的爬行动物，给蛇画脚是多余的，画了脚就不是蛇了。'
      },
      {
        id: 'q3062_4',
        question: '"画蛇添足"比喻什么？',
        options: [
          { label: 'A', text: '画画技术很好' },
          { label: 'B', text: '做了多余的事，反而把事情弄坏了' },
          { label: 'C', text: '蛇很可爱' },
          { label: 'D', text: '喝酒不好' }
        ],
        answer: 'B',
        explanation: '"画蛇添足"比喻做了多余的事情，不仅没有好处，反而把已经做好的事情弄糟了。'
      },
      {
        id: 'q3062_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '画蛇要画脚' },
          { label: 'B', text: '喝酒有害健康' },
          { label: 'C', text: '做事要适可而止，不要多此一举' },
          { label: 'D', text: '比赛要遵守规则' }
        ],
        answer: 'C',
        explanation: '故事告诉我们做事要恰到好处，适可而止。不要自作聪明做多余的事，否则反而会弄巧成拙。'
      }
    ]
  },

  // ==================== 第63课 ====================
  {
    id: 3063,
    title: '《叶公好龙》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 63,
    readingTime: 10,
    author: '刘向',
    source: '西汉·刘向《新序·杂事》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20man%20terrified%20by%20real%20dragon%20appearing%20from%20clouds%2C%20traditional%20Chinese%20mythology%20painting&image_size=landscape_4_3',
    text: `<p>从前，有个人叫叶子高，大家都叫他叶公。叶公非常喜欢龙，简直到了{痴|chī}迷的程度。他家的墙壁上画着龙，柱子上雕着龙，连门窗上都刻着龙。他穿的衣服上也绣着龙，用的杯子盘子上也印着龙。走进叶公的家，就像走进了一个龙的世界。</p>
<p>天上的真龙听说叶公这么喜欢自己，非常感动。于是，真龙从天上飞下来，来到叶公的家里。龙头从窗户伸进来，龙尾拖在大{厅|tīng}里。</p>
<p>没想到，叶公一看到真龙，吓得{魂|hún}飞{魄|pò}散，面如{土|tǔ}色，转身就跑。他浑身发{抖|dǒu}，跑都跑不稳了。原来，叶公并不是真的喜欢龙，他喜欢的只不过是那些画在墙上、雕在柱子上的假龙罢了。</p>
<p>"叶公好龙"这个成语，比喻表面上说喜欢某样东西，实际上并不是真的喜欢，甚至心里还很害怕。叶公口口声声说喜欢龙，但当真龙出现时，他却吓得要死。这个故事讽刺了那些表里不一、言行不一致的人。</p>`,
    explanation: {
      summary: '叶公非常喜欢龙，家里到处都画着龙。真龙被感动来访，叶公却吓得魂飞魄散。比喻表面上喜欢，实际上并不是真的喜欢。',
      keyPoints: [
        '故事出自《新序·杂事》',
        '叶公家里到处都是龙的装饰',
        '真龙来访，叶公却被吓得要命',
        '他喜欢的只是假龙，不是真龙',
        '比喻表里不一，言行不一致'
      ],
      vocabulary: [
        { word: '叶公好龙', pinyin: 'yè gōng hào lóng', meaning: '叶公喜欢龙，比喻表里不一' },
        { word: '痴迷', pinyin: 'chī mí', meaning: '极度迷恋' },
        { word: '魂飞魄散', pinyin: 'hún fēi pò sàn', meaning: '吓得魂魄都飞散了，形容非常害怕' },
        { word: '面如土色', pinyin: 'miàn rú tǔ sè', meaning: '脸色像泥土一样，形容非常害怕' },
        { word: '表里不一', pinyin: 'biǎo lǐ bù yī', meaning: '表面和内心不一样' }
      ],
      moral: '这个故事讽刺了那些表里不一、言行不一致的人。我们做人要真诚，喜欢就是喜欢，不喜欢就是不喜欢，不要做表面文章。'
    },
    questions: [
      {
        id: 'q3063_1',
        question: '叶公喜欢什么？',
        options: [
          { label: 'A', text: '老虎' },
          { label: 'B', text: '龙' },
          { label: 'C', text: '凤凰' },
          { label: 'D', text: '蛇' }
        ],
        answer: 'B',
        explanation: '叶公非常喜欢龙，家里到处都画着龙、雕着龙、刻着龙，衣服上也绣着龙。'
      },
      {
        id: 'q3063_2',
        question: '真龙来到叶公家后，叶公是什么反应？',
        options: [
          { label: 'A', text: '非常高兴地迎接' },
          { label: 'B', text: '吓得魂飞魄散，转身就跑' },
          { label: 'C', text: '送给真龙礼物' },
          { label: 'D', text: '和真龙一起玩' }
        ],
        answer: 'B',
        explanation: '叶公看到真正的龙后，吓得魂飞魄散、面如土色，浑身发抖，转身就跑。'
      },
      {
        id: 'q3063_3',
        question: '"叶公好龙"中"好"是什么意思？',
        options: [
          { label: 'A', text: '好坏的好' },
          { label: 'B', text: '喜欢' },
          { label: 'C', text: '友好' },
          { label: 'D', text: '好看' }
        ],
        answer: 'B',
        explanation: '"好"在这里读hào，是喜欢的意思。"叶公好龙"就是叶公喜欢龙的意思。'
      },
      {
        id: 'q3063_4',
        question: '叶公真正喜欢的是什么？',
        options: [
          { label: 'A', text: '真正的龙' },
          { label: 'B', text: '画在墙上、雕在柱子上的假龙' },
          { label: 'C', text: '蛇' },
          { label: 'D', text: '天上的云' }
        ],
        answer: 'B',
        explanation: '叶公喜欢的只是画在墙上、雕在柱子上的假龙图案，并不是真正的龙。真龙一出现他就吓跑了。'
      },
      {
        id: 'q3063_5',
        question: '这个成语讽刺什么样的人？',
        options: [
          { label: 'A', text: '胆子小的人' },
          { label: 'B', text: '表里不一、言行不一致的人' },
          { label: 'C', text: '喜欢画画的人' },
          { label: 'D', text: '怕龙的人' }
        ],
        answer: 'B',
        explanation: '"叶公好龙"讽刺那些口头上说喜欢某样东西，实际上并不是真心喜欢的人，也就是表里不一的人。'
      }
    ]
  },

  // ==================== 第64课 ====================
  {
    id: 3064,
    title: '《刻舟求剑》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 64,
    readingTime: 10,
    author: '《吕氏春秋》',
    source: '先秦·吕不韦《吕氏春秋·察今》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20man%20marking%20side%20of%20boat%20where%20sword%20fell%20into%20river%2C%20traditional%20Chinese%20fable%20illustration%2C%20river%20scene&image_size=landscape_4_3',
    text: `<p>从前，有一个楚国人坐船过江。船行到江心的时候，他一不小心，腰间的宝剑掉到江里去了。</p>
<p>船上的人连忙提醒他："你的剑掉到水里了！快下去捞啊！"这个人却不慌不忙地从口袋里掏出一把小刀，在船{舷|xián}上刻了一个记号，然后对大家说："大家不用着急，我已经做了记号了。"</p>
<p>船上的人觉得很奇怪，问他："你在船上刻记号有什么用？"他{自|zì}信地说："我的剑就是从这里掉下去的，等船靠了岸，我从刻记号的地方下去捞就行了。"</p>
<p>船继续向前行驶，很快就靠了岸。这个人从刻记号的地方跳下水去找剑，找了半天，当然什么也找不到。船已经走了很远，剑却沉在原来的地方，怎么可能找得到呢？</p>
<p>"刻舟求剑"这个成语，就是从这个故事来的。船在不停地移动，水中的剑却没有动。用静止的眼光去看待变化的事物，当然是行不通的。这个故事告诉我们，世界上的事物是不断变化的，我们要用发展的眼光看问题，不能{墨|mò}守成规，不懂变通。</p>`,
    explanation: {
      summary: '楚国人的剑掉进了江里，他在船上刻了记号，等船靠岸后从记号处下水找剑，当然找不到。比喻不懂变通，用静止的眼光看问题。',
      keyPoints: [
        '故事出自《吕氏春秋·察今》',
        '剑掉入水中是固定在一个位置的',
        '但船在移动，刻在船上的记号也跟着移动了',
        '用静止的眼光看待变化的事物，方法行不通',
        '告诉我们世界上的事物是不断变化的，要懂得变通'
      ],
      vocabulary: [
        { word: '刻舟求剑', pinyin: 'kè zhōu qiú jiàn', meaning: '在船上刻记号找剑，比喻不懂变通' },
        { word: '船舷', pinyin: 'chuán xián', meaning: '船两侧的边' },
        { word: '不慌不忙', pinyin: 'bù huāng bù máng', meaning: '不慌张不着急，形容很镇定' },
        { word: '墨守成规', pinyin: 'mò shǒu chéng guī', meaning: '死守老规矩，不肯变通' },
        { word: '变通', pinyin: 'biàn tōng', meaning: '根据不同情况作变动' }
      ],
      moral: '这个故事告诉我们，世界上的事物是不断变化发展的，我们的思想和方法也要跟着变化。如果死守老办法，不懂得根据情况的变化而变通，就不可能解决问题。'
    },
    questions: [
      {
        id: 'q3064_1',
        question: '那个人的剑是怎么掉到水里的？',
        options: [
          { label: 'A', text: '故意扔下去的' },
          { label: 'B', text: '一不小心掉下去的' },
          { label: 'C', text: '被别人推下去的' },
          { label: 'D', text: '剑自己滑下去的' }
        ],
        answer: 'B',
        explanation: '那个人坐船过江时，一不小心把腰间的宝剑掉到了江里。'
      },
      {
        id: 'q3064_2',
        question: '剑掉下水后，他做了什么？',
        options: [
          { label: 'A', text: '立刻跳下水去捞' },
          { label: 'B', text: '在船舷上刻了一个记号' },
          { label: 'C', text: '让别人帮他捞' },
          { label: 'D', text: '不管了' }
        ],
        answer: 'B',
        explanation: '他没有立刻下水捞剑，而是在船舷上刻了一个记号，打算等船靠岸后再从记号处下水捞。'
      },
      {
        id: 'q3064_3',
        question: '他最后找到剑了吗？',
        options: [
          { label: 'A', text: '找到了' },
          { label: 'B', text: '没有找到' },
          { label: 'C', text: '找到别人的剑' },
          { label: 'D', text: '找到了记号' }
        ],
        answer: 'B',
        explanation: '船已经走了很远，剑却沉在原来的地方，从记号处下水当然找不到剑。'
      },
      {
        id: 'q3064_4',
        question: '这个人犯了什么错误？',
        options: [
          { label: 'A', text: '他刻的记号太小了' },
          { label: 'B', text: '他用静止的眼光看待变化的事物' },
          { label: 'C', text: '他不会游泳' },
          { label: 'D', text: '他的刀不够锋利' }
        ],
        answer: 'B',
        explanation: '船在移动，剑沉在水中的位置是固定的。他用静止的眼光看待问题，以为刻在移动的船上的记号能对应水中的剑，这是错误的。'
      },
      {
        id: 'q3064_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '坐船要小心' },
          { label: 'B', text: '不要带剑坐船' },
          { label: 'C', text: '要根据情况变化而变通，不能死板教条' },
          { label: 'D', text: '要在船上多刻几个记号' }
        ],
        answer: 'C',
        explanation: '故事告诉我们世界上的事物是不断变化的，我们的方法也要跟着变化，不能死守老办法，要懂得变通。'
      }
    ]
  },

  // ==================== 第65课 ====================
  {
    id: 3065,
    title: '《揠苗助长》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 65,
    readingTime: 10,
    author: '孟子',
    source: '先秦·孟子《孟子·公孙丑上》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20farmer%20pulling%20rice%20seedlings%20to%20make%20them%20grow%20taller%2C%20wilted%20seedlings%2C%20traditional%20Chinese%20fable%20illustration&image_size=landscape_4_3',
    text: `<p>从前，宋国有个农民，他种了一片禾苗。他天天到田边去看，希望禾苗快快长高。可是，一天过去了，两天过去了，禾苗好像一点儿也没有长高。他心里非常着急。</p>
<p>有一天，他终于想到了一个"好办法"。他跑到田里，把每一棵禾苗都往上{拔|bá}高了一截。从早上一直忙到太阳落山，他把所有的禾苗都拔高了。虽然累得{筋|jīn}疲力尽，但他心里却美滋滋的。</p>
<p>他回到家里，对家人说："今天可把我累坏了！不过，我帮禾苗长高了一大截！"他的儿子听了，赶紧跑到田里去看。结果发现，所有的禾苗全都枯萎了！</p>
<p>"{揠|yà}苗助长"也叫"拔苗助长"。"揠"就是拔的意思。禾苗的生长有自己的规律，需要阳光、水分和时间。把禾苗往上拔，不但不能帮助它生长，反而破坏了它的根，让禾苗枯死了。这个故事告诉我们，做任何事情都有它的规律，不能急于求成，否则就会像那个农民一样，好心办了坏事，欲速则不达。</p>`,
    explanation: {
      summary: '宋国有个农民嫌禾苗长得慢，把禾苗一棵棵往上拔，结果禾苗全部枯死了。比喻违反事物的发展规律，急于求成，反而把事情弄糟。',
      keyPoints: [
        '故事出自《孟子·公孙丑上》',
        '揠：拔。把禾苗往上拔，破坏了根部',
        '禾苗生长有自然规律，不能人为加速',
        '好心办了坏事，欲速则不达',
        '告诉我们做事不能急于求成'
      ],
      vocabulary: [
        { word: '揠苗助长', pinyin: 'yà miáo zhù zhǎng', meaning: '拔苗帮助生长，比喻急于求成反而坏事' },
        { word: '筋疲力尽', pinyin: 'jīn pí lì jìn', meaning: '非常疲劳，一点力气也没有了' },
        { word: '枯萎', pinyin: 'kū wěi', meaning: '干枯萎缩' },
        { word: '急于求成', pinyin: 'jí yú qiú chéng', meaning: '急着想要取得成功' },
        { word: '欲速则不达', pinyin: 'yù sù zé bù dá', meaning: '过于图快，反而达不到目的' }
      ],
      moral: '这个故事告诉我们，万物生长都有自然规律，不能急于求成。做任何事情都要遵循客观规律，一步一个脚印，否则就会适得其反，好心办坏事。'
    },
    questions: [
      {
        id: 'q3065_1',
        question: '农民为什么要拔高禾苗？',
        options: [
          { label: 'A', text: '除草' },
          { label: 'B', text: '嫌禾苗长得慢，想让它快点长高' },
          { label: 'C', text: '在施肥' },
          { label: 'D', text: '移植禾苗' }
        ],
        answer: 'B',
        explanation: '农民天天去看禾苗，觉得它长得太慢了，心里着急，就把禾苗往上拔，想帮它长高。'
      },
      {
        id: 'q3065_2',
        question: '拔高禾苗后的结果是什么？',
        options: [
          { label: 'A', text: '禾苗长得更高了' },
          { label: 'B', text: '禾苗全部枯萎死了' },
          { label: 'C', text: '禾苗长得更快了' },
          { label: 'D', text: '禾苗结了很多果实' }
        ],
        answer: 'B',
        explanation: '把禾苗往上拔破坏了根部，所有的禾苗全部枯萎死了，好心反而办了坏事。'
      },
      {
        id: 'q3065_3',
        question: '"揠苗助长"中"揠"是什么意思？',
        options: [
          { label: 'A', text: '浇水' },
          { label: 'B', text: '拔' },
          { label: 'C', text: '施肥' },
          { label: 'D', text: '种' }
        ],
        answer: 'B',
        explanation: '"揠"就是拔的意思，"揠苗助长"就是把禾苗拔起来帮助它生长。'
      },
      {
        id: 'q3065_4',
        question: '禾苗为什么会枯死？',
        options: [
          { label: 'A', text: '天太热了' },
          { label: 'B', text: '没有浇水' },
          { label: 'C', text: '被拔高后根部受到破坏' },
          { label: 'D', text: '土壤不好' }
        ],
        answer: 'C',
        explanation: '禾苗的根在土壤里，往上拔会破坏根部，使禾苗无法吸收水分和养分，最终枯萎死亡。'
      },
      {
        id: 'q3065_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '要多种庄稼' },
          { label: 'B', text: '做事情不能急于求成，要遵循规律' },
          { label: 'C', text: '禾苗长得很快' },
          { label: 'D', text: '拔苗是一种好方法' }
        ],
        answer: 'B',
        explanation: '故事告诉我们做任何事情都有客观规律，不能急于求成，否则反而会把事情弄糟。欲速则不达。'
      }
    ]
  },

  // ==================== 第66课 ====================
  {
    id: 3066,
    title: '《郑人买履》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 66,
    readingTime: 10,
    author: '韩非',
    source: '先秦·韩非《韩非子·外储说左上》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20man%20measuring%20foot%20with%20string%20at%20home%20then%20going%20to%20market%20to%20buy%20shoes%2C%20traditional%20Chinese%20fable&image_size=landscape_4_3',
    text: `<p>从前，郑国有个人想买一双鞋。他在家里先量好了自己脚的尺码，然后把量好的尺码放在了座位上。</p>
<p>等他到了集市上，挑好了鞋子，才发现自己忘带尺码了。他对卖鞋的人说："对不起，我忘了带尺码，我回家去拿。"说完就往回走。</p>
<p>旁边有人觉得很奇怪，问他："你为什么不用自己的脚试一试鞋子呢？你的脚不就是最好的尺码吗？"他却说："我宁可相信量好的尺码，也不相信自己的脚！"</p>
<p>等他从家里拿了尺码再回到集市，集市已经散了，他最终没有买到鞋。</p>
<p>"郑人买{履|lǚ}"中，"履"就是鞋的意思。这个人真是太死板了！脚明明就在自己身上，试一试就知道合不合适，他却非要回家拿那张量好的尺码。这个故事讽刺了那些墨守成规、不知变通的人。他们宁可相信死板的数据和教条，也不愿意根据实际情况来灵活处理问题。</p>`,
    explanation: {
      summary: '郑国人买鞋时忘带尺码，别人让他用脚试鞋，他却宁可回家拿尺码，结果集市散了没买到鞋。讽刺了墨守成规、不知变通的人。',
      keyPoints: [
        '故事出自《韩非子·外储说左上》',
        '履：鞋。郑人买履：郑国人买鞋',
        '他宁可信尺码也不信自己的脚',
        '讽刺了死板教条、不知变通的人',
        '告诉我们做事要从实际出发'
      ],
      vocabulary: [
        { word: '郑人买履', pinyin: 'zhèng rén mǎi lǚ', meaning: '郑国人买鞋，比喻墨守成规' },
        { word: '履', pinyin: 'lǚ', meaning: '鞋' },
        { word: '尺码', pinyin: 'chǐ mǎ', meaning: '尺寸大小的号码' },
        { word: '墨守成规', pinyin: 'mò shǒu chéng guī', meaning: '死守老规矩，不肯变通' },
        { word: '教条', pinyin: 'jiào tiáo', meaning: '死板的、不结合实际的规则' }
      ],
      moral: '这个故事告诉我们，做事不能死守教条，要从实际出发。如果一味迷信书本和规矩，不顾客观实际，就会做出荒唐可笑的事情来。'
    },
    questions: [
      {
        id: 'q3066_1',
        question: '那个人在去集市之前做了什么准备？',
        options: [
          { label: 'A', text: '量好了脚的尺码' },
          { label: 'B', text: '带了很多钱' },
          { label: 'C', text: '画了鞋子的样子' },
          { label: 'D', text: '问了朋友的意见' }
        ],
        answer: 'A',
        explanation: '他在家里先量好了自己脚的尺码，但把尺码放在了座位上，去集市时忘了带。'
      },
      {
        id: 'q3066_2',
        question: '旁边的人给了他什么建议？',
        options: [
          { label: 'A', text: '回家拿尺码' },
          { label: 'B', text: '用自己的脚试一试鞋子' },
          { label: 'C', text: '明天再来买' },
          { label: 'D', text: '买大一号的' }
        ],
        answer: 'B',
        explanation: '旁边的人说："你为什么不用自己的脚试一试鞋子呢？你的脚不就是最好的尺码吗？"'
      },
      {
        id: 'q3066_3',
        question: '他为什么不用脚试鞋？',
        options: [
          { label: 'A', text: '他的脚有伤' },
          { label: 'B', text: '他宁可相信尺码，也不相信自己的脚' },
          { label: 'C', text: '鞋子太贵了' },
          { label: 'D', text: '他怕弄脏鞋' }
        ],
        answer: 'B',
        explanation: '他说："我宁可相信量好的尺码，也不相信自己的脚！"这说明他死板教条，不知变通。'
      },
      {
        id: 'q3066_4',
        question: '最后他买到鞋了吗？',
        options: [
          { label: 'A', text: '买到了很合适的鞋' },
          { label: 'B', text: '没有买到，集市散了' },
          { label: 'C', text: '买了别人的鞋' },
          { label: 'D', text: '买了不同尺码的鞋' }
        ],
        answer: 'B',
        explanation: '等他回家拿了尺码再回到集市，集市已经散了，他最终没有买到鞋。'
      },
      {
        id: 'q3066_5',
        question: '这个故事讽刺什么样的人？',
        options: [
          { label: 'A', text: '记性不好的人' },
          { label: 'B', text: '墨守成规、不知变通的人' },
          { label: 'C', text: '买不起鞋的人' },
          { label: 'D', text: '不量脚的人' }
        ],
        answer: 'B',
        explanation: '这个故事讽刺了那些墨守成规、不知变通的人，他们宁可迷信死板的数据，也不根据实际情况灵活处理。'
      }
    ]
  },

  // ==================== 第67课 ====================
  {
    id: 3067,
    title: '《滥竽充数》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 67,
    readingTime: 10,
    author: '韩非',
    source: '先秦·韩非《韩非子·内储说上》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20orchestra%20playing%20yue%20instruments%20in%20palace%2C%20one%20person%20pretending%20to%20play%2C%20traditional%20Chinese%20painting&image_size=landscape_4_3',
    text: `<p>战国时期，齐国的齐宣王喜欢听人吹{竽|yú}，而且喜欢听三百人一起合奏。他组织了一支三百人的乐队，每次演奏都要三百人一起吹。</p>
<p>有个叫{南|nán}{郭|guō}先生的人，其实根本不会吹竽。但他听说齐宣王喜欢听合奏，就跑到齐宣王面前，吹嘘自己吹竽吹得有多好。齐宣王很高兴，就让他加入了乐队。</p>
<p>从此，南郭先生就混在三百人的乐队里，跟着别人一起{摇|yáo}头晃脑，装模作样地吹竽。他虽然一个音也吹不出来，但因为是三百人一起演奏，谁也听不出来。他就这样混了好几年，白拿了很多{俸|fèng}禄。</p>
<p>后来，齐宣王死了，他的儿子齐{湣|mǐn}王继位。齐湣王也喜欢听竽，不过他喜欢听一个一个地独奏，不喜欢合奏。南郭先生听到这个消息，赶紧收拾东西逃走了。因为他根本不会吹竽，一旦独奏就会{露|lòu}出马脚。</p>
<p>"{滥|làn}竽充数"这个成语，比喻没有真才实学的人混在行家里面凑数，也用来表示自谦。这个故事告诉我们，没有真本事终究会被识破，做人要有真才实学。</p>`,
    explanation: {
      summary: '南郭先生不会吹竽，却混在齐宣王的三百人乐队里充数。齐湣王喜欢听独奏后，他只好逃走。比喻没有真才实学的人混在行家里面凑数。',
      keyPoints: [
        '故事出自《韩非子·内储说上》',
        '滥：不加选择，过多；竽：古代乐器',
        '南郭先生不会吹竽，却混在乐队里充数',
        '齐宣王喜欢合奏，齐湣王喜欢独奏',
        '没有真才实学终究会被识破'
      ],
      vocabulary: [
        { word: '滥竽充数', pinyin: 'làn yú chōng shù', meaning: '不会吹竽的人混在里面凑数' },
        { word: '竽', pinyin: 'yú', meaning: '古代一种像笙的乐器' },
        { word: '俸禄', pinyin: 'fèng lù', meaning: '古代官员的薪水' },
        { word: '装模作样', pinyin: 'zhuāng mú zuò yàng', meaning: '故意做作，装出某种样子' },
        { word: '露出马脚', pinyin: 'lòu chū mǎ jiǎo', meaning: '暴露了真相' }
      ],
      moral: '这个故事告诉我们，没有真才实学是不行的，混日子终究会被识破。做人要靠真本事，不能靠蒙混过关。同时也告诫领导者要严格考核，不给滥竽充数者可乘之机。'
    },
    questions: [
      {
        id: 'q3067_1',
        question: '南郭先生真的会吹竽吗？',
        options: [
          { label: 'A', text: '吹得很好' },
          { label: 'B', text: '根本不会吹' },
          { label: 'C', text: '会一点' },
          { label: 'D', text: '以前会，后来忘了' }
        ],
        answer: 'B',
        explanation: '南郭先生根本不会吹竽，他是靠吹嘘和混在乐队里蒙混过关的。'
      },
      {
        id: 'q3067_2',
        question: '为什么南郭先生能混在乐队里不被发现？',
        options: [
          { label: 'A', text: '他吹得很好' },
          { label: 'B', text: '三百人一起合奏，谁也听不出来' },
          { label: 'C', text: '齐宣王故意不管' },
          { label: 'D', text: '他站在最后面' }
        ],
        answer: 'B',
        explanation: '因为是三百人一起合奏，南郭先生虽然不吹，但装模作样地跟着摇头晃脑，别人听不出来。'
      },
      {
        id: 'q3067_3',
        question: '齐湣王继位后，南郭先生为什么要逃走？',
        options: [
          { label: 'A', text: '齐湣王不喜欢听音乐' },
          { label: 'B', text: '齐湣王喜欢听独奏，南郭先生不会吹' },
          { label: 'C', text: '南郭先生不想干了' },
          { label: 'D', text: '齐湣王解散了乐队' }
        ],
        answer: 'B',
        explanation: '齐湣王喜欢听一个一个独奏，南郭先生不会吹竽，一旦独奏就会暴露，只好逃走。'
      },
      {
        id: 'q3067_4',
        question: '"滥竽充数"中"滥"是什么意思？',
        options: [
          { label: 'A', text: '泛滥' },
          { label: 'B', text: '不加选择，过多' },
          { label: 'C', text: '浪费' },
          { label: 'D', text: '懒惰' }
        ],
        answer: 'B',
        explanation: '"滥"是不加选择、过多的意思，"滥竽充数"就是不会吹竽的人混在里面凑数。'
      },
      {
        id: 'q3067_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '吹竽很容易' },
          { label: 'B', text: '要有真才实学，不能靠蒙混过关' },
          { label: 'C', text: '合奏比独奏好听' },
          { label: 'D', text: '齐宣王很笨' }
        ],
        answer: 'B',
        explanation: '故事告诉我们没有真才实学终究会被识破，做人要靠真本事，不能靠蒙混过关。'
      }
    ]
  },

  // ==================== 第68课 ====================
  {
    id: 3068,
    title: '《自相矛盾》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 68,
    readingTime: 10,
    author: '韩非',
    source: '先秦·韩非《韩非子·难一》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20merchant%20selling%20spear%20and%20shield%20at%20market%2C%20traditional%20Chinese%20weapon%20illustration&image_size=landscape_4_3',
    text: `<p>从前，楚国有个卖兵器的人。他在市场上卖{矛|máo}和{盾|dùn}。他先拿起自己的盾，向大家夸耀说："我的盾是世界上最坚固的盾，无论多么锋利的矛都刺不穿它！"</p>
<p>接着，他又拿起自己的矛，向大家夸耀说："我的矛是世界上最锋利的矛，无论多么坚固的盾都能刺穿！"</p>
<p>围观的人听了，都觉得很可笑。这时，有个人站出来问他："如果用你的矛去刺你的盾，会怎么样呢？"</p>
<p>这个人听了，张口结舌，一句话也说不出来了。因为他的两个说法是互相矛盾的：如果说矛能刺穿一切盾，那就说明他的盾不是最坚固的；如果说盾能挡住一切矛，那就说明他的矛不是最锋利的。两个说法不可能同时成立。</p>
<p>"自相矛盾"这个成语就是从这个故事来的。"矛"是古代进攻用的武器，"盾"是古代防御用的武器。"自相矛盾"比喻一个人说话或做事前后{抵|dǐ}{触|chù}，互相冲突。这个故事告诉我们，说话做事要实事求是，不要{夸|kuā}大其词，否则就会自相矛盾，不能自圆其说。</p>`,
    explanation: {
      summary: '楚国有个卖兵器的人，先夸盾什么都刺不穿，又夸矛什么都能刺穿。被人问"用你的矛刺你的盾会怎样"，无言以对。比喻说话前后矛盾。',
      keyPoints: [
        '故事出自《韩非子·难一》',
        '矛：进攻武器；盾：防御武器',
        '他的两个说法互相矛盾，不可能同时成立',
        '比喻说话或做事前后抵触、互相冲突',
        '告诉我们说话做事要实事求是'
      ],
      vocabulary: [
        { word: '自相矛盾', pinyin: 'zì xiāng máo dùn', meaning: '自己的言行前后互相矛盾' },
        { word: '矛盾', pinyin: 'máo dùn', meaning: '比喻言行前后抵触、互相冲突' },
        { word: '夸耀', pinyin: 'kuā yào', meaning: '向别人显示自己了不起' },
        { word: '张口结舌', pinyin: 'zhāng kǒu jié shé', meaning: '张着嘴说不出话来，形容理屈词穷' },
        { word: '自圆其说', pinyin: 'zì yuán qí shuō', meaning: '使自己的说法前后一致，没有矛盾' }
      ],
      moral: '这个故事告诉我们，说话做事要实事求是，前后一致，不要夸大其词。如果说话前后矛盾，就会像那个卖兵器的人一样，被问得哑口无言。'
    },
    questions: [
      {
        id: 'q3068_1',
        question: '那个人卖的是什么？',
        options: [
          { label: 'A', text: '布和丝绸' },
          { label: 'B', text: '矛和盾' },
          { label: 'C', text: '米和面' },
          { label: 'D', text: '刀和剑' }
        ],
        answer: 'B',
        explanation: '那个楚国人在市场上卖矛和盾，矛是进攻用的武器，盾是防御用的武器。'
      },
      {
        id: 'q3068_2',
        question: '他是怎么夸自己的盾的？',
        options: [
          { label: 'A', text: '说盾很便宜' },
          { label: 'B', text: '说盾是世界上最坚固的，什么矛都刺不穿' },
          { label: 'C', text: '说盾很轻便' },
          { label: 'D', text: '说盾很漂亮' }
        ],
        answer: 'B',
        explanation: '他夸耀说自己的盾是世界上最坚固的盾，无论多么锋利的矛都刺不穿。'
      },
      {
        id: 'q3068_3',
        question: '有人问了他什么问题让他无话可说？',
        options: [
          { label: 'A', text: '"你的矛多少钱？"' },
          { label: 'B', text: '"用你的矛去刺你的盾会怎样？"' },
          { label: 'C', text: '"你的盾是什么做的？"' },
          { label: 'D', text: '"你还有别的武器吗？"' }
        ],
        answer: 'B',
        explanation: '那个人问："如果用你的矛去刺你的盾，会怎么样呢？"这个问题让他自相矛盾，无言以对。'
      },
      {
        id: 'q3068_4',
        question: '"自相矛盾"比喻什么？',
        options: [
          { label: 'A', text: '武器很厉害' },
          { label: 'B', text: '说话或做事前后抵触、互相冲突' },
          { label: 'C', text: '矛比盾厉害' },
          { label: 'D', text: '做生意很赚钱' }
        ],
        answer: 'B',
        explanation: '"自相矛盾"比喻一个人说话或做事前后抵触，互相冲突，不能自圆其说。'
      },
      {
        id: 'q3068_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '矛和盾不能一起卖' },
          { label: 'B', text: '说话做事要实事求是，不要夸大其词' },
          { label: 'C', text: '不要到市场买东西' },
          { label: 'D', text: '矛比盾厉害' }
        ],
        answer: 'B',
        explanation: '故事告诉我们说话做事要实事求是，前后一致，不要夸大其词，否则就会自相矛盾。'
      }
    ]
  },

  // ==================== 第69课 ====================
  {
    id: 3069,
    title: '《邯郸学步》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 69,
    readingTime: 10,
    author: '庄子',
    source: '先秦·庄子《庄子·秋水》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20man%20walking%20awkwardly%20in%20ancient%20Chinese%20city%20street%2C%20learning%20to%20walk%20from%20others%2C%20traditional%20Chinese%20painting&image_size=landscape_4_3',
    text: `<p>相传在战国时期，{赵|zhào}国的都城{邯|hán}{郸|dān}是一个非常繁华的地方。那里的人走路的姿势特别好看，优雅大方，远近闻名。</p>
<p>燕国寿{陵|líng}有一个年轻人，听说邯郸人走路很好看，就千里{迢|tiáo}{迢|tiáo}地来到邯郸，想要学{习|xí}邯郸人走路的姿势。</p>
<p>到了邯郸之后，他开始仔细观察街上的人怎么走路。他看到这个人的步子好看，就跟着学；看到那个人的姿势优美，也跟着学。可是，他学来学去，总是学不像。</p>
<p>他越学越迷{糊|hu}，不但没有学会邯郸人走路的样子，反而把自己原来怎么走路也忘了。最后，他只好{爬|pá}着回了家，成了一个笑话。</p>
<p>"邯郸学步"这个成语，比喻模仿别人不到家，反而把自己原来的本领也丢了。这个故事告诉我们，学习别人的长处是好事，但不能盲目模仿，丢掉自己的特色。如果一味地模仿别人，不结合自己的实际情况，最终可能什么也学不好，反而把原来的本事也忘掉了。</p>`,
    explanation: {
      summary: '燕国年轻人到赵国邯郸学习走路姿势，结果没学会邯郸人的走法，反而忘了自己原来怎么走路，只好爬着回家。比喻盲目模仿别人，反而丢掉了自己的本领。',
      keyPoints: [
        '故事出自《庄子·秋水》',
        '邯郸：赵国都城，那里人走路姿势好看',
        '年轻人盲目模仿，把自己原来的走法也忘了',
        '学习别人要结合自己的实际情况',
        '比喻盲目模仿，反而丢失了自己的本领'
      ],
      vocabulary: [
        { word: '邯郸学步', pinyin: 'hán dān xué bù', meaning: '到邯郸学走路，比喻盲目模仿别人' },
        { word: '繁华', pinyin: 'fán huá', meaning: '繁荣热闹' },
        { word: '千里迢迢', pinyin: 'qiān lǐ tiáo tiáo', meaning: '形容路途非常遥远' },
        { word: '优雅', pinyin: 'yōu yǎ', meaning: '优美雅致' },
        { word: '盲目', pinyin: 'máng mù', meaning: '没有主见，不加分析' }
      ],
      moral: '这个故事告诉我们，学习别人的长处是好事，但不能盲目模仿，要结合自己的实际情况。如果一味照搬别人的做法，不考虑自身特点，可能什么都学不好，反而丢掉了自己原有的本领。'
    },
    questions: [
      {
        id: 'q3069_1',
        question: '那个年轻人为什么要到邯郸去？',
        options: [
          { label: 'A', text: '去旅游' },
          { label: 'B', text: '去学邯郸人走路的姿势' },
          { label: 'C', text: '去做生意' },
          { label: 'D', text: '去看望亲戚' }
        ],
        answer: 'B',
        explanation: '他听说邯郸人走路姿势特别好看，就千里迢迢来到邯郸，想学习邯郸人走路的样子。'
      },
      {
        id: 'q3069_2',
        question: '他最后学会邯郸人走路了吗？',
        options: [
          { label: 'A', text: '学会了，走得很优雅' },
          { label: 'B', text: '没学会，反而忘了自己原来怎么走路' },
          { label: 'C', text: '学了一半就回来了' },
          { label: 'D', text: '教别人走路了' }
        ],
        answer: 'B',
        explanation: '他学来学去，不但没有学会邯郸人走路的样子，反而把自己原来怎么走路也忘了。'
      },
      {
        id: 'q3069_3',
        question: '他最后怎么回家的？',
        options: [
          { label: 'A', text: '走路回去的' },
          { label: 'B', text: '坐马车回去的' },
          { label: 'C', text: '爬着回去的' },
          { label: 'D', text: '别人背回去的' }
        ],
        answer: 'C',
        explanation: '他忘了怎么走路，只好爬着回了家，成了大家的笑话。'
      },
      {
        id: 'q3069_4',
        question: '"邯郸学步"比喻什么？',
        options: [
          { label: 'A', text: '走路很慢' },
          { label: 'B', text: '盲目模仿别人，反而丢了自己的本领' },
          { label: 'C', text: '学习很认真' },
          { label: 'D', text: '出远门很辛苦' }
        ],
        answer: 'B',
        explanation: '"邯郸学步"比喻盲目模仿别人不到家，反而把自己原来的本领也丢掉了。'
      },
      {
        id: 'q3069_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '邯郸人走路很好看' },
          { label: 'B', text: '学习别人要结合自己的实际，不能盲目模仿' },
          { label: 'C', text: '走路要慢慢走' },
          { label: 'D', text: '不要出远门' }
        ],
        answer: 'B',
        explanation: '故事告诉我们学习别人的长处是好事，但不能盲目模仿，要结合自己的实际情况，否则可能什么都学不好。'
      }
    ]
  },

  // ==================== 第70课 ====================
  {
    id: 3070,
    title: '《杯弓蛇影》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 70,
    readingTime: 10,
    author: '《晋书》',
    source: '唐·房玄龄《晋书·乐广传》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20man%20seeing%20bow%20shadow%20in%20wine%20cup%20thinking%20it%20is%20snake%2C%20traditional%20Chinese%20painting%2C%20indoor%20scene&image_size=landscape_4_3',
    text: `<p>从前，有个人叫乐广，他有一个好朋友。有一次，乐广请朋友到家里喝酒。朋友端起酒杯，忽然看见杯子里有一条小蛇在游动。他心里很不舒服，但碍于面子，还是硬着头皮把酒喝了下去。</p>
<p>回到家后，朋友就病倒了。他总觉得肚子里有条蛇在{搅|jiǎo}动，吃不下饭，睡不好觉，身体一天比一天差。看了很多医生，吃了好多药，都没有用。</p>
<p>乐广听说朋友病了，就去看望他。朋友把那天在酒杯里看到蛇的事情告诉了乐广。乐广觉得很奇怪，回到家里仔细查看。原来，墙上挂着一张弓，弓的影子正好映在酒杯里，看起来就像一条蛇在游动。</p>
<p>乐广赶紧把朋友请到家里，坐在原来的位置上，倒了一杯酒。朋友一看，又"看到"了蛇。乐广指着墙上的弓说："你看，那只是弓的影子，不是蛇。"朋友一看，恍然大{悟|wù}，心里的疑{虑|lǜ}顿时消除了，病也很快就好了。</p>
<p>"杯弓蛇影"这个成语，比喻因为疑虑而引起恐惧，把虚幻的东西当成真实的。这个故事告诉我们，很多恐惧和忧虑其实都是自己想出来的，不要疑神疑鬼，要学会用事实来消除不必要的担心。</p>`,
    explanation: {
      summary: '乐广的朋友在喝酒时看到杯中有蛇的影子，吓得生了病。后来发现是墙上弓的影子映在杯中，疑虑消除后病就好了。比喻因疑虑而引起不必要的恐惧。',
      keyPoints: [
        '故事出自《晋书·乐广传》',
        '杯中"蛇"其实是墙上弓的影子',
        '朋友因疑虑而生病，了解真相后病就好了',
        '很多恐惧是自己想出来的',
        '比喻疑神疑鬼，把虚幻当成真实'
      ],
      vocabulary: [
        { word: '杯弓蛇影', pinyin: 'bēi gōng shé yǐng', meaning: '把弓的影子当成蛇，比喻疑神疑鬼' },
        { word: '碍于面子', pinyin: 'ài yú miàn zi', meaning: '因为面子上过不去' },
        { word: '恍然大悟', pinyin: 'huǎng rán dà wù', meaning: '突然一下子明白了' },
        { word: '疑虑', pinyin: 'yí lǜ', meaning: '因怀疑而顾虑' },
        { word: '疑神疑鬼', pinyin: 'yí shén yí guǐ', meaning: '形容疑心很重，胡乱猜疑' }
      ],
      moral: '这个故事告诉我们，很多恐惧和忧虑其实是自己吓自己。遇到问题要冷静分析，弄清事实真相，不要疑神疑鬼，自寻烦恼。'
    },
    questions: [
      {
        id: 'q3070_1',
        question: '乐广的朋友在酒杯里看到了什么？',
        options: [
          { label: 'A', text: '一条真蛇' },
          { label: 'B', text: '弓的影子，看起来像蛇' },
          { label: 'C', text: '一只虫子' },
          { label: 'D', text: '一片树叶' }
        ],
        answer: 'B',
        explanation: '杯中的"蛇"其实是墙上挂着的弓的影子映在酒杯里，看起来像一条蛇在游动。'
      },
      {
        id: 'q3070_2',
        question: '朋友为什么生病了？',
        options: [
          { label: 'A', text: '喝了太多酒' },
          { label: 'B', text: '因为疑虑和恐惧，以为喝了有蛇的酒' },
          { label: 'C', text: '天气太冷' },
          { label: 'D', text: '吃了不好的食物' }
        ],
        answer: 'B',
        explanation: '朋友以为酒杯里有蛇，心里一直疑虑不安，导致茶饭不思，身体越来越差，其实是心理作用。'
      },
      {
        id: 'q3070_3',
        question: '朋友的病是怎么好的？',
        options: [
          { label: 'A', text: '吃了特效药' },
          { label: 'B', text: '知道了真相，疑虑消除后病就好了' },
          { label: 'C', text: '自己慢慢好了' },
          { label: 'D', text: '换了医生' }
        ],
        answer: 'B',
        explanation: '乐广向朋友说明杯中的"蛇"只是弓的影子，朋友恍然大悟，疑虑消除后病很快就好了。'
      },
      {
        id: 'q3070_4',
        question: '"杯弓蛇影"比喻什么？',
        options: [
          { label: 'A', text: '弓箭很厉害' },
          { label: 'B', text: '因疑虑而引起不必要的恐惧' },
          { label: 'C', text: '酒杯里有蛇' },
          { label: 'D', text: '喝酒有害健康' }
        ],
        answer: 'B',
        explanation: '"杯弓蛇影"比喻因为疑虑而引起恐惧，把虚幻的东西当成真实的，疑神疑鬼。'
      },
      {
        id: 'q3070_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '不要喝酒' },
          { label: 'B', text: '很多恐惧是自己想出来的，要冷静分析事实' },
          { label: 'C', text: '墙上不要挂弓' },
          { label: 'D', text: '杯子要透明的' }
        ],
        answer: 'B',
        explanation: '故事告诉我们遇到问题要冷静分析，弄清事实真相，不要疑神疑鬼，很多恐惧其实都是自己吓自己。'
      }
    ]
  },

  // ==================== 第71课 ====================
  {
    id: 3071,
    title: '《对牛弹琴》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 71,
    readingTime: 10,
    author: '牟融',
    source: '汉·牟融《理惑论》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20scholar%20playing%20guqin%20to%20a%20cow%20in%20field%2C%20cow%20eating%20grass%20ignoring%20music%2C%20traditional%20Chinese%20fable&image_size=landscape_4_3',
    text: `<p>古时候，有位叫公明仪的音乐家，他的琴弹得非常好，是当时有名的音乐高手。</p>
<p>有一天，公明仪看到一头牛正在草地上{悠|yōu}闲地吃草。他一时兴起，想为牛弹奏一曲。于是，他摆好琴，调好弦，认真地弹了一首非常高雅的曲子。那曲子优{美|měi}动听，是当时最{流|liú}行的名曲。</p>
<p>可是，那头牛对美妙的琴声毫无反应，依然低着头吃草，连耳朵都没有动一下。公明仪觉得很奇怪，他又换了几首曲子，牛还是不理不睬。</p>
<p>后来，公明仪改变了策略，弹奏了一些像蚊{蝇|yíng}{嗡|wēng}嗡叫、小牛{哞|mōu}哞叫的声音。这下，牛立刻抬起了头，竖起耳朵听着，还不时摇摇尾巴，显得很感兴趣。</p>
<p>"对牛弹琴"这个成语，比喻对不懂道理的人讲道理，白费口舌。也用来讥笑说话的人不看对象。公明仪弹的高雅曲子虽然好听，但牛根本听不懂，因为它不是能欣赏音乐的对象。反而是那些跟牛有关系的声音，牛才感兴趣。这个故事告诉我们，说话做事要看对象，要选择对方能理解的方式。</p>`,
    explanation: {
      summary: '音乐家公明仪对着牛弹奏高雅的琴曲，牛毫无反应，照样吃草。后来弹奏像蚊蝇和小牛的叫声，牛马上就有反应了。比喻说话不看对象，白费力气。',
      keyPoints: [
        '故事出自《理惑论》',
        '公明仪是古代有名的音乐家',
        '高雅的曲子弹给牛听，牛听不懂',
        '弹蚊蝇和牛叫声，牛才有了反应',
        '比喻说话做事不看对象，白费口舌'
      ],
      vocabulary: [
        { word: '对牛弹琴', pinyin: 'duì niú tán qín', meaning: '对着牛弹琴，比喻对不懂的人讲道理' },
        { word: '高雅', pinyin: 'gāo yǎ', meaning: '高尚雅致，不粗俗' },
        { word: '不理不睬', pinyin: 'bù lǐ bù cǎi', meaning: '不理会，不搭理' },
        { word: '策略', pinyin: 'cè lüè', meaning: '方法和计谋' },
        { word: '白费', pinyin: 'bái fèi', meaning: '白白浪费' }
      ],
      moral: '这个故事告诉我们，说话做事要看对象。如果对方听不懂或不感兴趣，说得再好也是白费力气。要根据不同的对象选择合适的表达方式。'
    },
    questions: [
      {
        id: 'q3071_1',
        question: '公明仪是什么人？',
        options: [
          { label: 'A', text: '画家' },
          { label: 'B', text: '音乐家' },
          { label: 'C', text: '农民' },
          { label: 'D', text: '将军' }
        ],
        answer: 'B',
        explanation: '公明仪是古时候一位有名的音乐家，琴弹得非常好。'
      },
      {
        id: 'q3071_2',
        question: '牛对高雅的琴声有什么反应？',
        options: [
          { label: 'A', text: '随着音乐跳舞' },
          { label: 'B', text: '毫无反应，继续吃草' },
          { label: 'C', text: '跑过来听琴' },
          { label: 'D', text: '叫了几声' }
        ],
        answer: 'B',
        explanation: '牛对美妙的琴声毫无反应，依然低着头吃草，连耳朵都没有动一下。'
      },
      {
        id: 'q3071_3',
        question: '什么样的声音牛才感兴趣？',
        options: [
          { label: 'A', text: '高雅的古琴曲' },
          { label: 'B', text: '像蚊蝇嗡嗡叫、小牛哞哞叫的声音' },
          { label: 'C', text: '雷声' },
          { label: 'D', text: '人的歌声' }
        ],
        answer: 'B',
        explanation: '当公明仪弹奏像蚊蝇嗡嗡叫、小牛哞哞叫的声音时，牛马上抬头竖耳听，还摇摇尾巴。'
      },
      {
        id: 'q3071_4',
        question: '"对牛弹琴"比喻什么？',
        options: [
          { label: 'A', text: '琴弹得很好' },
          { label: 'B', text: '对不懂道理的人讲道理，白费口舌' },
          { label: 'C', text: '牛喜欢听音乐' },
          { label: 'D', text: '音乐能感动动物' }
        ],
        answer: 'B',
        explanation: '"对牛弹琴"比喻对不懂道理的人讲道理，说话不看对象，白费力气。'
      },
      {
        id: 'q3071_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '要学弹琴' },
          { label: 'B', text: '说话做事要看对象，选择合适的方式' },
          { label: 'C', text: '牛不喜欢音乐' },
          { label: 'D', text: '古琴不好听' }
        ],
        answer: 'B',
        explanation: '故事告诉我们说话做事要看对象，根据对方的特点选择合适的方式，否则再好的内容也是白费。'
      }
    ]
  },

  // ==================== 第72课 ====================
  {
    id: 3072,
    title: '《井底之蛙》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 72,
    readingTime: 10,
    author: '庄子',
    source: '先秦·庄子《庄子·秋水》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=frog%20sitting%20at%20bottom%20of%20well%20looking%20up%20at%20small%20circle%20of%20sky%2C%20traditional%20Chinese%20fable%20illustration&image_size=landscape_4_3',
    text: `<p>从前，有一只青蛙，住在一口废弃的井里。它觉得自己的井就是全世界最好的地方。井里有水喝，有虫子吃，还有泥巴可以休息，它觉得非常满足。</p>
<p>有一天，一只从大海来的海龟路过这口井。青蛙得意地对海龟说："你快来看看我的家吧！我在这里多快{活|huó}啊！高兴了就跳到井边玩玩，累了就回井里休息。看看井里的小虫子、小螃蟹，谁能比得上我？你怎么不进来参观参观呢？"</p>
<p>海龟听了，想进去看看。可是，它的左脚还没迈进井里，右脚就被井口卡住了。海龟只好退了出来，对青蛙说："你见过大海吗？大海有多大你知道吗？千里之远，不足以形容海的广阔；千{仞|rèn}之高，不足以形容海的深度。大禹的时候，十年有九年发大水，海水也没有增加多少；商汤的时候，八年有七年大{旱|hàn}，海水也没有减少多少。住在这样的大海里，才是真正的大快乐啊！"</p>
<p>青蛙听了，惊得目{瞪|dèng}口呆。它从来不知道外面的世界竟然这么大。</p>
<p>"井底之蛙"这个成语，比喻见识{狭|xiá}窄、目光短浅的人。这个故事告诉我们，世界很大，不能像井底的青蛙一样，只看到头顶那片小小的天空，就以为那是整个世界。要不断学习，开{阔|kuò}眼界，才能看到更广阔的天地。</p>`,
    explanation: {
      summary: '住在井底的青蛙觉得自己的小天地就是全世界。海龟告诉它大海的广阔，青蛙惊得目瞪口呆。比喻见识狭窄、目光短浅的人。',
      keyPoints: [
        '故事出自《庄子·秋水》',
        '青蛙住在井底，只看得到井口大的天空',
        '海龟向它描述了大海的广阔',
        '比喻见识狭窄、目光短浅',
        '告诉我们不能坐井观天，要开阔眼界'
      ],
      vocabulary: [
        { word: '井底之蛙', pinyin: 'jǐng dǐ zhī wā', meaning: '井底下的青蛙，比喻目光短浅的人' },
        { word: '目瞪口呆', pinyin: 'mù dèng kǒu dāi', meaning: '眼睛直盯着，嘴张着说不出话，形容吃惊' },
        { word: '狭隘', pinyin: 'xiá ài', meaning: '不宽广，不宏大' },
        { word: '广阔', pinyin: 'guǎng kuò', meaning: '广大宽阔' },
        { word: '眼界', pinyin: 'yǎn jiè', meaning: '所见事物的范围，见识' }
      ],
      moral: '这个故事告诉我们，不能像井底之蛙一样坐井观天。世界很大，我们应该不断学习、开拓眼界，才能看到更广阔的天地，不做目光短浅的人。'
    },
    questions: [
      {
        id: 'q3072_1',
        question: '青蛙住在哪里？',
        options: [
          { label: 'A', text: '大海里' },
          { label: 'B', text: '废弃的井里' },
          { label: 'C', text: '池塘里' },
          { label: 'D', text: '河流里' }
        ],
        answer: 'B',
        explanation: '青蛙住在一口废弃的井里，它觉得自己的井就是全世界最好的地方。'
      },
      {
        id: 'q3072_2',
        question: '海龟为什么进不了井里？',
        options: [
          { label: 'A', text: '井里没有水' },
          { label: 'B', text: '海龟太大了，井口太小' },
          { label: 'C', text: '海龟不想进去' },
          { label: 'D', text: '青蛙不让它进去' }
        ],
        answer: 'B',
        explanation: '海龟的左脚还没迈进井里，右脚就被井口卡住了，说明井口太小而海龟太大。'
      },
      {
        id: 'q3072_3',
        question: '海龟向青蛙描述了什么？',
        options: [
          { label: 'A', text: '高山的雄伟' },
          { label: 'B', text: '大海的广阔和深邃' },
          { label: 'C', text: '森林的茂密' },
          { label: 'D', text: '沙漠的辽阔' }
        ],
        answer: 'B',
        explanation: '海龟告诉青蛙大海有多大、多深，十年洪水海水不增，七年大旱海水不减，才是真正的广阔。'
      },
      {
        id: 'q3072_4',
        question: '"井底之蛙"比喻什么样的人？',
        options: [
          { label: 'A', text: '很勇敢的人' },
          { label: 'B', text: '目光短浅、见识狭窄的人' },
          { label: 'C', text: '喜欢游泳的人' },
          { label: 'D', text: '住在农村的人' }
        ],
        answer: 'B',
        explanation: '"井底之蛙"比喻目光短浅、见识狭窄的人，就像只看得到井口大天空的青蛙一样。'
      },
      {
        id: 'q3072_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '青蛙很可爱' },
          { label: 'B', text: '不能坐井观天，要开阔眼界，不断学习' },
          { label: 'C', text: '海龟很大' },
          { label: 'D', text: '井里的水很好喝' }
        ],
        answer: 'B',
        explanation: '故事告诉我们不能像井底之蛙一样坐井观天，要不断学习、开阔眼界，才能看到更广阔的天地。'
      }
    ]
  },

  // ==================== 第73课 ====================
  {
    id: 3073,
    title: '《狐假虎威》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 73,
    readingTime: 10,
    author: '《战国策》',
    source: '西汉·刘向《战国策·楚策一》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fox%20walking%20proudly%20in%20front%20of%20tiger%20in%20forest%2C%20other%20animals%20running%20away%2C%20traditional%20Chinese%20fable%20illustration&image_size=landscape_4_3',
    text: `<p>从前，老虎是森林之王，它抓住了一只狐狸。狐狸眼看就要被吃掉了，急中生智，对老虎说："你不能吃我！天帝派我当百兽之王，你要是吃了我，就是违抗天帝的命令！"</p>
<p>老虎半信半疑地说："你这么小，怎么能当百兽之王呢？"狐狸说："你如果不信，就跟在我后面走一趟，看看动物们见了我害不害怕。"</p>
<p>于是，老虎跟在狐狸后面，一起在森林里走。果然，动物们看到它们来了，都吓得拼命逃跑。小兔子跑得飞快，小鹿{窜|cuàn}进了树丛，野猪{拱|gǒng}着地钻进了草丛。</p>
<p>老虎信以为真，以为动物们真的是害怕狐狸。它不知道的是，动物们害怕的根本不是狐狸，而是跟在狐狸后面的老虎！狐狸不过是借着老虎的威风来吓唬别的动物罢了。</p>
<p>"狐假虎威"中，"假"是借的意思。这个成语比喻借着别人的势力来欺压人、吓唬人。有些人自己没有本事，却仗着有权有势的人在背后撑腰，就到处耀武扬威。这个故事告诉我们，要学会分辨真假，不要被表面现象所迷惑，要看清事情的本质。</p>`,
    explanation: {
      summary: '狐狸被老虎抓住后，骗老虎说它是百兽之王，让老虎跟在它后面走。动物们看到它们都跑了，其实怕的是老虎而非狐狸。比喻借别人的势力来吓唬人。',
      keyPoints: [
        '故事出自《战国策·楚策一》',
        '假：借。狐假虎威：狐狸借老虎的威风',
        '动物们怕的是老虎，不是狐狸',
        '狐狸借老虎的威风来吓唬别的动物',
        '比喻借别人的势力来欺压人'
      ],
      vocabulary: [
        { word: '狐假虎威', pinyin: 'hú jiǎ hǔ wēi', meaning: '狐狸借老虎的威风，比喻借势欺人' },
        { word: '急中生智', pinyin: 'jí zhōng shēng zhì', meaning: '在紧急情况下想出好办法' },
        { word: '半信半疑', pinyin: 'bàn xìn bàn yí', meaning: '有些相信又有些怀疑' },
        { word: '耀武扬威', pinyin: 'yào wǔ yáng wēi', meaning: '炫耀武力，显示威风' },
        { word: '仗势欺人', pinyin: 'zhàng shì qī rén', meaning: '倚仗权势欺压别人' }
      ],
      moral: '这个故事告诉我们，要学会分辨真假，不要被表面现象迷惑。同时也告诉我们，靠借别人的力量来吓唬人是不能长久的，真正的本事要靠自己。'
    },
    questions: [
      {
        id: 'q3073_1',
        question: '狐狸用什么办法让老虎不吃它？',
        options: [
          { label: 'A', text: '跑得很快' },
          { label: 'B', text: '骗老虎说自己是天帝派来的百兽之王' },
          { label: 'C', text: '和老虎搏斗' },
          { label: 'D', text: '躲起来' }
        ],
        answer: 'B',
        explanation: '狐狸急中生智，骗老虎说天帝派它当百兽之王，让老虎不要吃它。'
      },
      {
        id: 'q3073_2',
        question: '动物们看到狐狸和老虎后为什么逃跑？',
        options: [
          { label: 'A', text: '因为害怕狐狸' },
          { label: 'B', text: '因为害怕跟在狐狸后面的老虎' },
          { label: 'C', text: '因为它们在玩游戏' },
          { label: 'D', text: '因为下雨了' }
        ],
        answer: 'B',
        explanation: '动物们害怕的根本不是狐狸，而是跟在狐狸后面的老虎。狐狸只是借老虎的威风来吓唬动物。'
      },
      {
        id: 'q3073_3',
        question: '"狐假虎威"中"假"是什么意思？',
        options: [
          { label: 'A', text: '真假的假' },
          { label: 'B', text: '借' },
          { label: 'C', text: '放假' },
          { label: 'D', text: '假装' }
        ],
        answer: 'B',
        explanation: '"假"在这里是借的意思，"狐假虎威"就是狐狸借着老虎的威风来吓唬别的动物。'
      },
      {
        id: 'q3073_4',
        question: '老虎犯了什么错误？',
        options: [
          { label: 'A', text: '跑得太慢了' },
          { label: 'B', text: '被狐狸的谎言欺骗了' },
          { label: 'C', text: '不吃狐狸' },
          { label: 'D', text: '没有带武器' }
        ],
        answer: 'B',
        explanation: '老虎信以为真，以为动物们是害怕狐狸，不知道它们怕的其实是自己，被狐狸的谎言骗了。'
      },
      {
        id: 'q3073_5',
        question: '"狐假虎威"比喻什么样的行为？',
        options: [
          { label: 'A', text: '非常勇敢的行为' },
          { label: 'B', text: '借着别人的势力来欺压人、吓唬人' },
          { label: 'C', text: '保护弱小的行为' },
          { label: 'D', text: '团结合作的行为' }
        ],
        answer: 'B',
        explanation: '"狐假虎威"比喻借着别人的势力来欺压人、吓唬人，自己没有真本事却仗势欺人。'
      }
    ]
  },

  // ==================== 第74课 ====================
  {
    id: 3074,
    title: '《鹬蚌相争》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 74,
    readingTime: 10,
    author: '《战国策》',
    source: '西汉·刘向《战国策·燕策二》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=snipe%20bird%20and%20clam%20fighting%20by%20river%2C%20bird%20beak%20stuck%20in%20clam%20shell%2C%20traditional%20Chinese%20fable%20illustration&image_size=landscape_4_3',
    text: `<p>从前，一只{鹬|yù}鸟在河{滩|tān}上散步。它看见一只{蚌|bàng}正张开壳在河滩上晒太阳。鹬鸟馋得直流口水，猛地伸出长嘴去啄蚌的肉。</p>
<p>蚌反应很快，立刻合上壳，紧紧地夹住了鹬鸟的嘴。鹬鸟的嘴被夹住了，吃不了东西，也飞不走。蚌也打不开壳，走不了。</p>
<p>鹬鸟说："今天不下雨，明天不下雨，你就会干死！"蚌回答说："你的嘴今天拔不出去，明天拔不出去，你就会饿死！"它们两个谁也不肯让步，就这样僵持着。</p>
<p>这时候，一个渔夫走过来，看到鹬鸟和蚌纠缠在一起。渔夫毫不费力地把它们两个一起捉走了。</p>
<p>"鹬蚌相争，渔{翁|wēng}得利"这个成语，比喻双方争执不下，结果两败俱伤，让第三者从中得到了好处。鹬鸟和蚌互不相让，结果都被渔夫捉走了。这个故事告诉我们，如果双方只顾争斗不让步，最后可能会便宜了别人。在遇到矛盾时，要懂得互相{谦|qiān}让，不能只想着自己。</p>`,
    explanation: {
      summary: '鹬鸟啄蚌的肉，蚌夹住了鹬鸟的嘴，双方僵持不下。渔夫走过来把它们都捉走了。比喻双方争执不下，两败俱伤，让第三者得利。',
      keyPoints: [
        '故事出自《战国策·燕策二》',
        '鹬鸟和蚌互不相让，僵持不下',
        '渔夫趁机把两者都捉走了',
        '鹬蚌相争，渔翁得利',
        '告诉我们遇到矛盾要互相谦让'
      ],
      vocabulary: [
        { word: '鹬蚌相争', pinyin: 'yù bàng xiāng zhēng', meaning: '鹬鸟和蚌争斗，比喻双方争执不下' },
        { word: '渔翁得利', pinyin: 'yú wēng dé lì', meaning: '渔夫从中得到了好处' },
        { word: '僵持', pinyin: 'jiāng chí', meaning: '双方相持不下' },
        { word: '两败俱伤', pinyin: 'liǎng bài jù shāng', meaning: '双方都受到伤害' },
        { word: '谦让', pinyin: 'qiān ràng', meaning: '谦虚地不肯占先，让步' }
      ],
      moral: '这个故事告诉我们，双方争执不下，最后可能两败俱伤，让第三者得利。遇到矛盾时要懂得互相谦让，不能只顾争斗，否则可能便宜了别人。'
    },
    questions: [
      {
        id: 'q3074_1',
        question: '鹬鸟和蚌是怎么争斗起来的？',
        options: [
          { label: 'A', text: '鹬鸟啄蚌的肉，蚌夹住了鹬鸟的嘴' },
          { label: 'B', text: '蚌先攻击了鹬鸟' },
          { label: 'C', text: '它们抢食物' },
          { label: 'D', text: '它们争地盘' }
        ],
        answer: 'A',
        explanation: '鹬鸟伸出长嘴啄蚌的肉，蚌合上壳夹住了鹬鸟的嘴，双方就僵持住了。'
      },
      {
        id: 'q3074_2',
        question: '最后谁得到了好处？',
        options: [
          { label: 'A', text: '鹬鸟' },
          { label: 'B', text: '蚌' },
          { label: 'C', text: '渔夫' },
          { label: 'D', text: '谁也没有' }
        ],
        answer: 'C',
        explanation: '鹬鸟和蚌僵持不下，渔夫走过来毫不费力地把它们两个一起捉走了，这就是"鹬蚌相争，渔翁得利"。'
      },
      {
        id: 'q3074_3',
        question: '鹬鸟和蚌为什么会失败？',
        options: [
          { label: 'A', text: '它们太弱了' },
          { label: 'B', text: '它们互不相让，让渔夫有了可乘之机' },
          { label: 'C', text: '渔夫太厉害了' },
          { label: 'D', text: '天气太热了' }
        ],
        answer: 'B',
        explanation: '鹬鸟和蚌都不肯让步，僵持在一起，结果渔夫毫不费力地把它们都捉走了。'
      },
      {
        id: 'q3074_4',
        question: '"鹬蚌相争，渔翁得利"比喻什么？',
        options: [
          { label: 'A', text: '钓鱼很好玩' },
          { label: 'B', text: '双方争执不下，两败俱伤，让第三者得利' },
          { label: 'C', text: '鸟和蚌是好朋友' },
          { label: 'D', text: '河滩上有很多动物' }
        ],
        answer: 'B',
        explanation: '这个成语比喻双方争执不下，结果两败俱伤，让第三者从中得到了好处。'
      },
      {
        id: 'q3074_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '鹬鸟和蚌都不聪明' },
          { label: 'B', text: '遇到矛盾要互相谦让，不能只顾争斗' },
          { label: 'C', text: '渔夫很厉害' },
          { label: 'D', text: '不要去河滩' }
        ],
        answer: 'B',
        explanation: '故事告诉我们遇到矛盾时要懂得互相谦让，如果只顾争斗不让步，最后可能两败俱伤，便宜了别人。'
      }
    ]
  },

  // ==================== 第75课 ====================
  {
    id: 3075,
    title: '《螳螂捕蝉》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 75,
    readingTime: 10,
    author: '庄子',
    source: '先秦·庄子《庄子·山木》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=praying%20mantis%20catching%20cicada%20on%20tree%20branch%2C%20oriole%20bird%20behind%20mantis%2C%20traditional%20Chinese%20nature%20illustration&image_size=landscape_4_3',
    text: `<p>春秋时期，吴王想要出兵攻打楚国。大臣们劝他不要这样做，但他不听，还下令说："谁敢劝我，就处死谁！"</p>
<p>吴王身边有一个年轻的侍从，他想劝吴王，但又不敢直接说。于是，他想了一个巧妙的办法。他每天早上拿着弹弓，在后花园里转来转去。连续三个早上都是这样。</p>
<p>吴王觉得很奇怪，就问他："你在后花园里干什么？"年轻人回答说："大王，花园里有一棵树，树上有一只蝉，蝉在高声歌唱，喝着露水，却不知道有一只{螳|táng}{螂|láng}在它身后；螳螂弯着身子准备捕蝉，却不知道有一只黄雀在它身后；黄雀伸长脖子准备啄螳螂，却不知道我的弹丸在下面瞄准了它。这三个小东西都只看到眼前的利益，却不知道身后的危险啊！"</p>
<p>吴王听后恍然大悟，说："你说得有道理啊！"于是，他取消了攻打楚国的计划。</p>
<p>"螳螂捕蝉，黄雀在后"这个成语，比喻目光短浅，只想到眼前的利益，却不知道祸害就在后面。这个故事告诉我们，做事不能只顾眼前，要{瞻|zhān}前顾后，考虑全面，才能避免危险。</p>`,
    explanation: {
      summary: '吴王要攻打楚国，侍从用"螳螂捕蝉，黄雀在后"的故事来劝说他。蝉、螳螂、黄雀都只顾眼前利益，不知身后有危险。吴王听后取消了计划。',
      keyPoints: [
        '故事出自《庄子·山木》',
        '蝉→螳螂→黄雀→弹丸，层层危险在后面',
        '三者都只看到眼前利益，不顾身后的危险',
        '比喻目光短浅，只顾眼前不知后面有祸害',
        '做事要瞻前顾后，考虑全面'
      ],
      vocabulary: [
        { word: '螳螂捕蝉', pinyin: 'táng láng bǔ chán', meaning: '螳螂捉蝉，比喻只顾眼前利益' },
        { word: '黄雀在后', pinyin: 'huáng què zài hòu', meaning: '黄雀在后面，比喻不知危险在后' },
        { word: '瞻前顾后', pinyin: 'zhān qián gù hòu', meaning: '看看前面再看看后面，形容做事考虑周全' },
        { word: '侍从', pinyin: 'shì cóng', meaning: '跟随在身边侍候的人' },
        { word: '弹丸', pinyin: 'dàn wán', meaning: '弹弓用的小球' }
      ],
      moral: '这个故事告诉我们，做事不能只顾眼前的利益，要瞻前顾后，看到可能存在的危险。目光短浅、只看眼前的人，往往会忽略身后的隐患。'
    },
    questions: [
      {
        id: 'q3075_1',
        question: '年轻人用什么方法劝说吴王？',
        options: [
          { label: 'A', text: '直接上书劝谏' },
          { label: 'B', text: '用螳螂捕蝉的故事来启发吴王' },
          { label: 'C', text: '找其他大臣帮忙' },
          { label: 'D', text: '威胁吴王' }
        ],
        answer: 'B',
        explanation: '年轻人用蝉、螳螂、黄雀和弹丸层层危险的故事，巧妙地启发吴王认识只顾眼前利益的危险。'
      },
      {
        id: 'q3075_2',
        question: '故事中，蝉的危险是什么？',
        options: [
          { label: 'A', text: '天气太热' },
          { label: 'B', text: '身后的螳螂要捕它' },
          { label: 'C', text: '没有露水喝' },
          { label: 'D', text: '找不到树' }
        ],
        answer: 'B',
        explanation: '蝉在树上高声歌唱，却不知道身后的螳螂正弯着身子准备捕它。'
      },
      {
        id: 'q3075_3',
        question: '螳螂、蝉和黄雀共同的错误是什么？',
        options: [
          { label: 'A', text: '跑得太慢' },
          { label: 'B', text: '只看到眼前的利益，不知道身后有危险' },
          { label: 'C', text: '叫得太响' },
          { label: 'D', text: '飞得太高' }
        ],
        answer: 'B',
        explanation: '蝉、螳螂和黄雀都只看到眼前的利益，却不知道身后有更大的危险在等着它们。'
      },
      {
        id: 'q3075_4',
        question: '"螳螂捕蝉，黄雀在后"比喻什么？',
        options: [
          { label: 'A', text: '动物世界的残酷' },
          { label: 'B', text: '只顾眼前利益，不知祸害在后面' },
          { label: 'C', text: '黄雀是螳螂的朋友' },
          { label: 'D', text: '蝉很可怜' }
        ],
        answer: 'B',
        explanation: '这个成语比喻目光短浅，只想到眼前的利益，却不知道祸害就在后面。'
      },
      {
        id: 'q3075_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '不要伤害动物' },
          { label: 'B', text: '做事要瞻前顾后，不能只顾眼前' },
          { label: 'C', text: '弹弓很厉害' },
          { label: 'D', text: '后花园里有很多动物' }
        ],
        answer: 'B',
        explanation: '故事告诉我们做事不能只顾眼前的利益，要瞻前顾后，考虑全面，才能避免身后的危险。'
      }
    ]
  },

  // ==================== 第76课 ====================
  {
    id: 3076,
    title: '《塞翁失马》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 76,
    readingTime: 10,
    author: '《淮南子》',
    source: '西汉·刘安《淮南子·人间训》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=old%20wise%20man%20at%20border%20watching%20horse%20running%20away%2C%20ancient%20Chinese%20village%20scene%2C%20traditional%20Chinese%20painting&image_size=landscape_4_3',
    text: `<p>从前，在边塞附近住着一位老人。有一天，他家里的一匹马跑到了{塞|sài}外的胡人地方去了。邻居们听说后，都来安慰他，劝他不要难过。</p>
<p>老人却说："这怎么知道不是一件好事呢？"过了几个月，那匹马竟然带着一群胡人的骏马回来了。邻居们纷纷来祝贺。老人却说："这怎么知道不是一件坏事呢？"</p>
<p>老人的儿子很喜欢骑马。有一天，他骑那匹胡人的骏马时，不小心从马上摔下来，摔断了腿。邻居们又来慰问。老人又说："这怎么知道不是一件好事呢？"</p>
<p>过了一年，胡人大举入侵，边塞的年轻人大多被征去打仗，十有八九都战死在沙场。老人的儿子因为腿瘸了，不用去打仗，父子俩保住了性命。</p>
<p>"塞翁失马"这个成语，也叫"塞翁失马，焉知非福"。意思是：边塞的老人丢了马，怎么知道不是好事呢？这个故事告诉我们，好事和坏事不是绝对的，在一定条件下，坏事可以变成好事，好事也可以变成坏事。福和祸是相互依{伏|fú}的，所以遇到好事不要太得意，遇到坏事也不要太悲观。</p>`,
    explanation: {
      summary: '边塞老人的马跑了，后来带回一群骏马；儿子骑马摔断了腿，却因此免于征兵保住了性命。比喻福祸相依，好事和坏事可以互相转化。',
      keyPoints: [
        '故事出自《淮南子·人间训》',
        '丢马→带回骏马→儿子摔断腿→免于战死',
        '福和祸是相互依存、可以转化的',
        '塞翁失马，焉知非福',
        '遇到好事不要太得意，遇到坏事不要太悲观'
      ],
      vocabulary: [
        { word: '塞翁失马', pinyin: 'sài wēng shī mǎ', meaning: '边塞老人丢了马，比喻福祸相依' },
        { word: '焉知非福', pinyin: 'yān zhī fēi fú', meaning: '怎么知道不是好事呢' },
        { word: '依存', pinyin: 'yī cún', meaning: '互相依靠而存在' },
        { word: '边塞', pinyin: 'biān sài', meaning: '边疆的要塞' },
        { word: '悲观', pinyin: 'bēi guān', meaning: '对事物的发展缺乏信心' }
      ],
      moral: '这个故事告诉我们，福和祸不是绝对的，它们可以互相转化。遇到好事不要得意忘形，遇到坏事也不要悲观失望。用平常心面对生活中的起伏变化。'
    },
    questions: [
      {
        id: 'q3076_1',
        question: '老人丢马后，他是什么态度？',
        options: [
          { label: 'A', text: '非常伤心' },
          { label: 'B', text: '认为可能是好事' },
          { label: 'C', text: '去找马' },
          { label: 'D', text: '买了一匹新马' }
        ],
        answer: 'B',
        explanation: '老人没有难过，反而说："这怎么知道不是一件好事呢？"说明他对得失看得很开。'
      },
      {
        id: 'q3076_2',
        question: '丢马后来变成了什么好事？',
        options: [
          { label: 'A', text: '邻居送了一匹马' },
          { label: 'B', text: '原来的马带回了一群骏马' },
          { label: 'C', text: '政府赔了一匹马' },
          { label: 'D', text: '马自己回来了' }
        ],
        answer: 'B',
        explanation: '过了几个月，那匹跑丢的马竟然带着一群胡人的骏马回来了。'
      },
      {
        id: 'q3076_3',
        question: '儿子摔断腿后来变成了什么好事？',
        options: [
          { label: 'A', text: '得到了很多赔偿' },
          { label: 'B', text: '因为腿瘸不用去打仗，保住了性命' },
          { label: 'C', text: '学会了骑马' },
          { label: 'D', text: '成了医生' }
        ],
        answer: 'B',
        explanation: '胡人入侵时年轻人大多被征去打仗，十有八九战死，儿子因腿瘸免于征兵，保住了性命。'
      },
      {
        id: 'q3076_4',
        question: '"塞翁失马，焉知非福"的意思是什么？',
        options: [
          { label: 'A', text: '马丢了就找不回来了' },
          { label: 'B', text: '坏事可能变成好事，好事也可能变成坏事' },
          { label: 'C', text: '老人很聪明' },
          { label: 'D', text: '骑马很危险' }
        ],
        answer: 'B',
        explanation: '意思是福和祸不是绝对的，在一定条件下可以互相转化，坏事可能变成好事。'
      },
      {
        id: 'q3076_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '不要养马' },
          { label: 'B', text: '福祸相依，要用平常心面对生活中的变化' },
          { label: 'C', text: '边塞很危险' },
          { label: 'D', text: '老人比年轻人聪明' }
        ],
        answer: 'B',
        explanation: '故事告诉我们福和祸可以互相转化，遇到好事不要太得意，遇到坏事也不要太悲观，要用平常心面对。'
      }
    ]
  },

  // ==================== 第77课 ====================
  {
    id: 3077,
    title: '《愚公移山》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 77,
    readingTime: 10,
    author: '列子',
    source: '先秦·列子《列子·汤问》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=old%20man%20leading%20family%20members%20moving%20mountains%20with%20shovels%2C%20two%20large%20mountains%20blocking%20road%2C%20traditional%20Chinese%20fable&image_size=landscape_4_3',
    text: `<p>很久很久以前，在太行山和王屋山的北边住着一位老人，叫愚公，快九十岁了。他家门前有两座大山——太行山和王屋山，挡住了去路，进出要绕很远很远的路。</p>
<p>有一天，愚公把全家人召集起来说："这两座山挡住了我们的路，太不方便了。我们齐心协力，把这两座山搬走，好不好？"家人都表示同意。</p>
<p>于是，愚公带着儿子、孙子，开始挖山运{石|shí}。他们用锄头挖，用{筐|kuāng}子运，把土石运到很远的渤海边上。他们每天挖山不止，从不间断。</p>
<p>有个叫智叟的老人听说了，跑来嘲笑愚公说："你太傻了！凭你这么大年纪，剩下的力气连一座小山都搬不动，怎么搬得动这两座大山呢？"</p>
<p>愚公回答说："我死了有儿子，儿子又生孙子，孙子又生儿子，子子孙孙是没有穷尽的。而山不会再增高了，何愁挖不平呢？"智叟听了无话可说。</p>
<p>后来，天帝被愚公的精神感动了，命令大力神把两座大山搬走了。"愚公移山"这个成语，比喻做事有毅力，不怕困难，坚持到底。这个故事告诉我们，只要有恒心、有毅力，不怕困难，坚持不懈地努力，就一定能够成功。</p>`,
    explanation: {
      summary: '愚公年近九十，带领家人挖太行、王屋两座大山。面对嘲笑，他说子子孙孙无穷尽而山不增高，一定能挖平。天帝被感动，命大力神搬走了山。比喻做事有恒心毅力。',
      keyPoints: [
        '故事出自《列子·汤问》',
        '愚公年近九十，带领全家挖山',
        '智叟嘲笑他，愚公说子子孙孙无穷尽',
        '天帝被愚公精神感动，命神搬走了山',
        '比喻做事有毅力，坚持不懈'
      ],
      vocabulary: [
        { word: '愚公移山', pinyin: 'yú gōng yí shān', meaning: '愚公搬山，比喻坚持不懈' },
        { word: '齐心协力', pinyin: 'qí xīn xié lì', meaning: '大家一条心，共同努力' },
        { word: '穷尽', pinyin: 'qióng jìn', meaning: '用完，没有了' },
        { word: '智叟', pinyin: 'zhì sǒu', meaning: '聪明的老人（故事中的反面人物）' },
        { word: '坚持不懈', pinyin: 'jiān chí bù xiè', meaning: '坚持到底，毫不松懈' }
      ],
      moral: '这个故事告诉我们，无论多么大的困难，只要有恒心、有毅力，坚持不懈地努力，就一定能够克服困难，取得成功。世上无难事，只怕有心人。'
    },
    questions: [
      {
        id: 'q3077_1',
        question: '愚公为什么要搬山？',
        options: [
          { label: 'A', text: '山上有很多宝藏' },
          { label: 'B', text: '两座大山挡住了去路，进出不方便' },
          { label: 'C', text: '山上没有树' },
          { label: 'D', text: '别人让他搬的' }
        ],
        answer: 'B',
        explanation: '太行山和王屋山挡住了愚公家的去路，进出要绕很远的路，太不方便了，所以他决定搬山。'
      },
      {
        id: 'q3077_2',
        question: '智叟为什么嘲笑愚公？',
        options: [
          { label: 'A', text: '愚公没有钱' },
          { label: 'B', text: '愚公年纪太大了，搬不动那么大的山' },
          { label: 'C', text: '愚公没有工具' },
          { label: 'D', text: '山太远了' }
        ],
        answer: 'B',
        explanation: '智叟认为愚公年纪太大了，剩下的力气连小山都搬不动，搬两座大山太傻了。'
      },
      {
        id: 'q3077_3',
        question: '愚公是怎样回答智叟的？',
        options: [
          { label: 'A', text: '承认自己搬不动' },
          { label: 'B', text: '说子子孙孙无穷尽，而山不会再增高' },
          { label: 'C', text: '不理会智叟' },
          { label: 'D', text: '请别人帮忙' }
        ],
        answer: 'B',
        explanation: '愚公说："我死了有儿子，儿子又生孙子，子子孙孙是没有穷尽的，而山不会再增高，何愁挖不平呢？"'
      },
      {
        id: 'q3077_4',
        question: '山最后是怎么搬走的？',
        options: [
          { label: 'A', text: '愚公自己搬走的' },
          { label: 'B', text: '天帝被愚公精神感动，命大力神搬走的' },
          { label: 'C', text: '山自己消失了' },
          { label: 'D', text: '智叟帮忙搬走的' }
        ],
        answer: 'B',
        explanation: '天帝被愚公的精神感动了，命令大力神把两座大山搬走了。'
      },
      {
        id: 'q3077_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '搬山很容易' },
          { label: 'B', text: '只要有毅力，坚持不懈，就能克服困难' },
          { label: 'C', text: '年纪大了不能干活' },
          { label: 'D', text: '山搬不完' }
        ],
        answer: 'B',
        explanation: '故事告诉我们只要有恒心、有毅力，不怕困难，坚持不懈地努力，就一定能够成功。'
      }
    ]
  },

  // ==================== 第78课 ====================
  {
    id: 3078,
    title: '《完璧归赵》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 78,
    readingTime: 10,
    author: '司马迁',
    source: '西汉·司马迁《史记·廉颇蔺相如列传》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20diplomat%20holding%20jade%20bi%20disc%20facing%20king%20in%20palace%2C%20dramatic%20tension%2C%20traditional%20Chinese%20historical%20painting&image_size=landscape_4_3',
    text: `<p>战国时期，赵国得到了一块非常珍贵的宝玉——和氏{璧|bì}。秦国的秦昭王听说后，派人送信给赵王，说愿意用十五座城来换这块宝玉。</p>
<p>赵王知道秦国一向不讲信用，如果不给，怕秦国出兵攻打；如果给，又怕白白被骗走宝玉。正在左右为难的时候，大臣{蔺|lìn}相如主动请{缨|yīng}，带着和氏璧出使秦国。</p>
<p>秦昭王拿到宝玉后，爱不释手，只顾着欣赏，却{绝|jué}口不提割让十五座城的事。蔺相如看出了秦王的{真|zhēn}心，就上前说："大王，这块宝玉上有一个小瑕疵，请让我指给您看。"秦王把宝玉交还给蔺相如。</p>
<p>蔺相如拿到宝玉后，退到柱子旁边，{怒|nù}发冲冠地说："大王想要宝玉却不肯割城，如果大王硬要强夺，我就把宝玉和我的头一起撞碎在这柱子上！"秦王怕他真的摔碎宝玉，连忙道歉，并答应划城。</p>
<p>蔺相如知道秦王不会真正割城，就暗中派人把宝玉送回了赵国，自己则留在秦国{据|jù}理力争。最后，他安全地回到了赵国。</p>
<p>"完{璧|bì}归赵"这个成语，意思是把完好的宝玉送回赵国，比喻将原物完好地归还主人。这个故事表现了蔺相如的机智勇敢和不畏强权的精神。</p>`,
    explanation: {
      summary: '蔺相如带着和氏璧出使秦国，发现秦王无意割城后，巧妙地要回宝玉，并派人送回赵国，最终完好归还。比喻将原物完好地归还主人。',
      keyPoints: [
        '故事出自《史记·廉颇蔺相如列传》',
        '和氏璧：非常珍贵的宝玉',
        '蔺相如识破秦王的阴谋，巧妙要回宝玉',
        '怒发冲冠，以命相威胁保护宝玉',
        '完璧归赵：将原物完好归还'
      ],
      vocabulary: [
        { word: '完璧归赵', pinyin: 'wán bì guī zhào', meaning: '把完好宝玉送回赵国，比喻原物完好归还' },
        { word: '和氏璧', pinyin: 'hé shì bì', meaning: '春秋时期著名的宝玉' },
        { word: '怒发冲冠', pinyin: 'nù fà chōng guān', meaning: '愤怒得头发竖起把帽子顶起来了' },
        { word: '爱不释手', pinyin: 'ài bù shì shǒu', meaning: '喜爱得舍不得放手' },
        { word: '据理力争', pinyin: 'jù lǐ lì zhēng', meaning: '依据道理尽力争辩' }
      ],
      moral: '这个故事表现了蔺相如面对强权时的机智勇敢。他不畏强暴，有勇有谋，凭借自己的智慧保住了国家的宝物。告诉我们面对困难和威胁时，要勇敢机智，善于用智慧解决问题。'
    },
    questions: [
      {
        id: 'q3078_1',
        question: '秦昭王想用什么换和氏璧？',
        options: [
          { label: 'A', text: '十箱黄金' },
          { label: 'B', text: '十五座城' },
          { label: 'C', text: '一千匹马' },
          { label: 'D', text: '一万名士兵' }
        ],
        answer: 'B',
        explanation: '秦昭王写信给赵王，说愿意用十五座城来换和氏璧，但实际上并不想真正割让城池。'
      },
      {
        id: 'q3078_2',
        question: '蔺相如是怎样要回宝玉的？',
        options: [
          { label: 'A', text: '直接抢回来' },
          { label: 'B', text: '说宝玉有瑕疵，让秦王交给他指看' },
          { label: 'C', text: '偷偷拿回来' },
          { label: 'D', text: '让别人帮忙' }
        ],
        answer: 'B',
        explanation: '蔺相如说宝玉上有小瑕疵要指给秦王看，秦王把宝玉交还给了他，然后他就用宝玉和生命威胁秦王。'
      },
      {
        id: 'q3078_3',
        question: '蔺相如为什么能保护宝玉？',
        options: [
          { label: 'A', text: '因为他力气很大' },
          { label: 'B', text: '因为他机智勇敢，不怕强权' },
          { label: 'C', text: '因为秦王很善良' },
          { label: 'D', text: '因为有很多人帮他' }
        ],
        answer: 'B',
        explanation: '蔺相如识破了秦王的阴谋，用机智和勇气保住了宝玉，最终完好地送回了赵国。'
      },
      {
        id: 'q3078_4',
        question: '"完璧归赵"是什么意思？',
        options: [
          { label: 'A', text: '赵国被打败了' },
          { label: 'B', text: '把完好的宝玉送回赵国，比喻原物完好归还' },
          { label: 'C', text: '秦国很强' },
          { label: 'D', text: '宝玉很值钱' }
        ],
        answer: 'B',
        explanation: '"完璧归赵"意思是把完好无损的和氏璧送回赵国，后来比喻将原物完好无损地归还主人。'
      },
      {
        id: 'q3078_5',
        question: '这个故事表现了蔺相如什么品质？',
        options: [
          { label: 'A', text: '跑得很快' },
          { label: 'B', text: '机智勇敢，不畏强权' },
          { label: 'C', text: '力气很大' },
          { label: 'D', text: '唱歌好听' }
        ],
        answer: 'B',
        explanation: '故事表现了蔺相如面对强秦时的机智勇敢，他不畏强暴，有勇有谋，用智慧保住了国家的宝物。'
      }
    ]
  },

  // ==================== 第79课 ====================
  {
    id: 3079,
    title: '《负荆请罪》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 79,
    readingTime: 10,
    author: '司马迁',
    source: '西汉·司马迁《史记·廉颇蔺相如列传》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20general%20carrying%20thorny%20branches%20on%20back%20apologizing%20to%20minister%2C%20traditional%20Chinese%20historical%20painting%2C%20palace%20scene&image_size=landscape_4_3',
    text: `<p>战国时期，赵国有两位重臣：一位是大将军{廉|lián}{颇|pō}，一位是宰相蔺相如。蔺相如因为在{渑|miǎn}池会上立了大功，又被封为上卿，职位比廉颇还高。</p>
<p>廉颇对此非常不服气。他说："我是赵国的大将军，出生入死打了那么多胜仗。蔺相如不过是凭一张嘴说说话，职位竟然比我还高！真是{耻|chǐ}辱！我见到他，一定要好好{羞|xiū}辱他一番！"</p>
<p>蔺相如听说后，就处处躲着廉颇。上朝的时候，他称{病|bìng}不去；出门的时候，远远看见廉颇的车来了，他就赶紧让自己的车避到一边。蔺相如的门客们很不理解，觉得蔺相如太胆小了。</p>
<p>蔺相如解释说："你们觉得秦王和廉颇将军谁更厉害？我连秦王都不怕，怎么会怕廉颇将军呢？我之所以躲着他，是因为如果我们两人闹矛盾，秦国就会趁虚而入。我这样做，是为了国家的利益啊！"</p>
<p>廉颇听到这番话后，深感惭愧。他觉得自己太自私了，只顾个人面子，却不考虑国家利益。于是，廉颇脱去上衣，背着{荆|jīng}条，亲自到蔺相如家请罪。从此，两人成了{刎|wěn}颈之交，同心协力保卫赵国。</p>
<p>"负荆请罪"这个成语，意思是背着荆条去请罪，表示诚恳地向人道歉赔罪。这个故事告诉我们，知错能改是美德，为了大局应该放下个人面子。</p>`,
    explanation: {
      summary: '蔺相如职位高于廉颇，廉颇不服气想要羞辱他。蔺相如处处回避，为了国家利益。廉颇知道后深感惭愧，背着荆条去请罪，两人成为好友。',
      keyPoints: [
        '故事出自《史记·廉颇蔺相如列传》',
        '廉颇因蔺相如职位比自己高而不服',
        '蔺相如处处回避是为了国家利益',
        '廉颇知错能改，负荆请罪',
        '负荆请罪：背着荆条向人道歉赔罪'
      ],
      vocabulary: [
        { word: '负荆请罪', pinyin: 'fù jīng qǐng zuì', meaning: '背着荆条去请罪，表示诚恳道歉' },
        { word: '廉颇', pinyin: 'Lián Pō', meaning: '赵国大将军' },
        { word: '刎颈之交', pinyin: 'wěn jǐng zhī jiāo', meaning: '生死之交，同生共死的朋友' },
        { word: '趁虚而入', pinyin: 'chèn xū ér rù', meaning: '趁着空虚而进入' },
        { word: '惭愧', pinyin: 'cán kuì', meaning: '因为自己有缺点或做错了事而感到不安' }
      ],
      moral: '这个故事告诉我们，知错能改是美德。廉颇能认识到自己的错误，放下大将军的面子去请罪，非常难得。同时也告诉我们，个人恩怨要让位于国家利益，要有大局观。'
    },
    questions: [
      {
        id: 'q3079_1',
        question: '廉颇为什么不服气？',
        options: [
          { label: 'A', text: '蔺相如打了胜仗' },
          { label: 'B', text: '蔺相如职位比他高，他觉得蔺相如只凭嘴巴' },
          { label: 'C', text: '蔺相如不尊重他' },
          { label: 'D', text: '蔺相如抢了他的马' }
        ],
        answer: 'B',
        explanation: '廉颇认为自己出生入死打了那么多胜仗，而蔺相如只凭说话就职位比自己高，心里不服气。'
      },
      {
        id: 'q3079_2',
        question: '蔺相如为什么处处躲着廉颇？',
        options: [
          { label: 'A', text: '他害怕廉颇' },
          { label: 'B', text: '不想和廉颇闹矛盾，怕秦国趁虚而入' },
          { label: 'C', text: '他不喜欢廉颇' },
          { label: 'D', text: '他生病了' }
        ],
        answer: 'B',
        explanation: '蔺相如不怕廉颇，但他怕两个人闹矛盾后秦国趁虚而入，他是为了国家利益才处处回避的。'
      },
      {
        id: 'q3079_3',
        question: '廉颇是怎样向蔺相如请罪的？',
        options: [
          { label: 'A', text: '写了一封道歉信' },
          { label: 'B', text: '脱去上衣，背着荆条亲自登门请罪' },
          { label: 'C', text: '送了贵重礼物' },
          { label: 'D', text: '让别人替他道歉' }
        ],
        answer: 'B',
        explanation: '廉颇脱去上衣，背上背着荆条，亲自到蔺相如家去请罪，表示诚恳道歉。'
      },
      {
        id: 'q3079_4',
        question: '"负荆请罪"是什么意思？',
        options: [
          { label: 'A', text: '背着很重的东西' },
          { label: 'B', text: '背着荆条去请罪，表示诚恳道歉' },
          { label: 'C', text: '受了很大的惩罚' },
          { label: 'D', text: '打了一次败仗' }
        ],
        answer: 'B',
        explanation: '"负"是背着的意思，"荆"是荆条。负荆请罪就是背着荆条去向人请罪，表示诚恳地赔礼道歉。'
      },
      {
        id: 'q3079_5',
        question: '这个故事告诉我们什么道理？',
        options: [
          { label: 'A', text: '职位高就厉害' },
          { label: 'B', text: '知错能改是美德，个人恩怨要让位于大局' },
          { label: 'C', text: '将军比文官厉害' },
          { label: 'D', text: '打架不好' }
        ],
        answer: 'B',
        explanation: '故事告诉我们知错能改是美德，廉颇能放下面子去请罪很难得。同时也告诉我们，个人恩怨要让位于国家利益，要有大局观。'
      }
    ]
  },

  // ==================== 第80课 ====================
  {
    id: 3080,
    title: '《纸上谈兵》',
    category: 'story',
    categoryLabel: '成语故事',
    grade: 3,
    day: 80,
    readingTime: 10,
    author: '司马迁',
    source: '西汉·司马迁《史记·廉颇蔺相如列传》',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20young%20general%20studying%20military%20books%20at%20desk%2C%20then%20army%20defeated%20in%20battle%2C%20traditional%20Chinese%20historical%20painting&image_size=landscape_4_3',
    text: `<p>战国时期，赵国有个将军叫赵括。他是名将赵{奢|shē}的儿子，从小就熟读兵书，谈论起军事来头头是道，连他父亲都说不过他。</p>
<p>但是，赵奢并不看好自己的儿子。他说："打仗是关系到生死存亡的大事，赵括却把它看得太简单了。他只会纸上谈兵，没有真正的实战经验。将来赵国不用他还好，如果用了他，一定会吃大亏的。"</p>
<p>后来，秦国攻打赵国。赵王中了秦国的反间计，撤掉了有经验的老将廉颇，改用赵括为主将。赵括上任后，把廉颇制定的作战方案全部改了，按照兵书上的理论重新部署。</p>
<p>秦国大将白起得知赵括当了主将，非常高兴。他用了一个{诱|yòu}敌深入的计策，把赵军引入包围圈。赵括在战场上完全不知道怎么办，因为他学的那些兵法在实际情况面前根本用不上。最后，赵军被秦军包围了四十多天，粮食断绝，赵括在突围时被乱箭射死，四十万赵军投降后全被{坑|kēng}杀。</p>
<p>"纸上谈兵"这个成语，比喻只会空谈理论，不能解决实际问题。这个故事告诉我们，学习知识不能只停留在书本上，还要结合实际，注重实践经验。光有理论没有实践，遇到实际情况就会束手无策。</p>`,
    explanation: {
      summary: '赵括从小熟读兵书，谈论军事头头是道，但没有实战经验。赵王用他替代廉颇，结果被秦军包围，四十万赵军全军覆没。比喻空谈理论不切实际。',
      keyPoints: [
        '故事出自《史记·廉颇蔺相如列传》',
        '赵括熟读兵书但没有实战经验',
        '赵奢早就看出赵括只会纸上谈兵',
        '赵括替代廉颇后被秦军大败',
        '比喻空谈理论，不能解决实际问题'
      ],
      vocabulary: [
        { word: '纸上谈兵', pinyin: 'zhǐ shàng tán bīng', meaning: '在纸面上谈论用兵，比喻空谈理论' },
        { word: '头头是道', pinyin: 'tóu tóu shì dào', meaning: '说话或做事有条有理' },
        { word: '反间计', pinyin: 'fǎn jiàn jì', meaning: '离间敌人内部的计策' },
        { word: '束手无策', pinyin: 'shù shǒu wú cè', meaning: '一点办法也没有' },
        { word: '诱敌深入', pinyin: 'yòu dí shēn rù', meaning: '引诱敌人进入自己的包围圈' }
      ],
      moral: '这个故事告诉我们，光有理论知识是不够的，还要有实践经验。理论要和实践相结合，才能真正解决问题。否则，再多的理论知识在实际情况面前也是无用的。'
    },
    questions: [
      {
        id: 'q3080_1',
        question: '赵括有什么特点？',
        options: [
          { label: 'A', text: '武功高强' },
          { label: 'B', text: '熟读兵书，谈论军事头头是道' },
          { label: 'C', text: '跑得很快' },
          { label: 'D', text: '射箭很准' }
        ],
        answer: 'B',
        explanation: '赵括从小熟读兵书，谈论起军事来头头是道，连他父亲都说不过他。'
      },
      {
        id: 'q3080_2',
        question: '赵奢对儿子赵括的评价是什么？',
        options: [
          { label: 'A', text: '认为赵括是最优秀的将军' },
          { label: 'B', text: '认为赵括只会纸上谈兵，缺乏实战经验' },
          { label: 'C', text: '认为赵括太胆小' },
          { label: 'D', text: '认为赵括应该多读书' }
        ],
        answer: 'B',
        explanation: '赵奢说赵括只会纸上谈兵，没有真正的实战经验，如果用他一定会吃大亏。'
      },
      {
        id: 'q3080_3',
        question: '赵括替代廉颇后做了什么？',
        options: [
          { label: 'A', text: '继续执行廉颇的作战方案' },
          { label: 'B', text: '把廉颇的方案全部改了，按兵书理论重新部署' },
          { label: 'C', text: '主动和秦国议和' },
          { label: 'D', text: '加强防御工事' }
        ],
        answer: 'B',
        explanation: '赵括把廉颇制定的作战方案全部改了，按照兵书上的理论重新部署，脱离了实际情况。'
      },
      {
        id: 'q3080_4',
        question: '赵括最后的结果是什么？',
        options: [
          { label: 'A', text: '打了大胜仗' },
          { label: 'B', text: '赵军被包围，赵括战死，四十万赵军投降被杀' },
          { label: 'C', text: '和秦国讲和了' },
          { label: 'D', text: '当了大官' }
        ],
        answer: 'B',
        explanation: '赵括被秦军包围，四十多天后粮食断绝，赵括在突围时被射死，四十万赵军投降后全被坑杀。'
      },
      {
        id: 'q3080_5',
        question: '"纸上谈兵"告诉我们什么道理？',
        options: [
          { label: 'A', text: '兵书没有用' },
          { label: 'B', text: '理论要和实践相结合，光有理论是不够的' },
          { label: 'C', text: '打仗很可怕' },
          { label: 'D', text: '年轻人不能当将军' }
        ],
        answer: 'B',
        explanation: '故事告诉我们光有理论知识是不够的，理论要和实践相结合，否则遇到实际情况就会束手无策。'
      }
    ]
  }
];
