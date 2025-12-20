const decks = [
    {
        name: 'top_10',
        characters: [
            { char: '我', pinyin: 'wǒ', meaning: 'me' },
            { char: '你', pinyin: 'nǐ', meaning: 'you' },
            { char: '他', pinyin: 'tā', meaning: 'he' },
            { char: '她', pinyin: 'tā', meaning: 'she' },
            { char: '好', pinyin: 'hǎo', meaning: 'good' },
            { char: '是', pinyin: 'shì', meaning: 'to be' },
            { char: '的', pinyin: 'de', meaning: 'of' },
            { char: '了', pinyin: 'le', meaning: 'particle' },
            { char: '在', pinyin: 'zài', meaning: 'at' },
            { char: '有', pinyin: 'yǒu', meaning: 'to have' }
        ]
    },
    {
        name: 'top_50',
        characters: [
            { char: '人', pinyin: 'rén', meaning: 'person' },
            { char: '大', pinyin: 'dà', meaning: 'big' },
            { char: '小', pinyin: 'xiǎo', meaning: 'small' },
            { char: '中', pinyin: 'zhōng', meaning: 'middle' },
            { char: '国', pinyin: 'guó', meaning: 'country' },
            { char: '学', pinyin: 'xué', meaning: 'to study' },
            { char: '生', pinyin: 'shēng', meaning: 'life' },
            { char: '来', pinyin: 'lái', meaning: 'to come' },
            { char: '去', pinyin: 'qù', meaning: 'to go' },
            { char: '说', pinyin: 'shuō', meaning: 'to speak' },
            { char: '看', pinyin: 'kàn', meaning: 'to see' },
            { char: '听', pinyin: 'tīng', meaning: 'to listen' },
            { char: '吃', pinyin: 'chī', meaning: 'to eat' },
            { char: '喝', pinyin: 'hē', meaning: 'to drink' },
            { char: '走', pinyin: 'zǒu', meaning: 'to walk' },
            { char: '跑', pinyin: 'pǎo', meaning: 'to run' },
            { char: '坐', pinyin: 'zuò', meaning: 'to sit' },
            { char: '站', pinyin: 'zhàn', meaning: 'to stand' },
            { char: '睡', pinyin: 'shuì', meaning: 'to sleep' },
            { char: '起', pinyin: 'qǐ', meaning: 'to rise' },
            { char: '家', pinyin: 'jiā', meaning: 'home' },
            { char: '书', pinyin: 'shū', meaning: 'book' },
            { char: '水', pinyin: 'shuǐ', meaning: 'water' },
            { char: '火', pinyin: 'huǒ', meaning: 'fire' },
            { char: '天', pinyin: 'tiān', meaning: 'sky' },
            { char: '地', pinyin: 'dì', meaning: 'ground' },
            { char: '日', pinyin: 'rì', meaning: 'sun' },
            { char: '月', pinyin: 'yuè', meaning: 'moon' },
            { char: '年', pinyin: 'nián', meaning: 'year' },
            { char: '时', pinyin: 'shí', meaning: 'time' },
            { char: '分', pinyin: 'fēn', meaning: 'minute' },
            { char: '点', pinyin: 'diǎn', meaning: 'point' },
            { char: '多', pinyin: 'duō', meaning: 'many' },
            { char: '少', pinyin: 'shǎo', meaning: 'few' },
            { char: '新', pinyin: 'xīn', meaning: 'new' },
            { char: '老', pinyin: 'lǎo', meaning: 'old' },
            { char: '爱', pinyin: 'ài', meaning: 'love' },
            { char: '心', pinyin: 'xīn', meaning: 'heart' },
            { char: '想', pinyin: 'xiǎng', meaning: 'to think' },
            { char: '知', pinyin: 'zhī', meaning: 'to know' },
            { char: '道', pinyin: 'dào', meaning: 'way' },
            { char: '做', pinyin: 'zuò', meaning: 'to do' },
            { char: '工', pinyin: 'gōng', meaning: 'work' },
            { char: '作', pinyin: 'zuò', meaning: 'to make' },
            { char: '买', pinyin: 'mǎi', meaning: 'to buy' },
            { char: '卖', pinyin: 'mài', meaning: 'to sell' },
            { char: '钱', pinyin: 'qián', meaning: 'money' },
            { char: '开', pinyin: 'kāi', meaning: 'to open' },
            { char: '关', pinyin: 'guān', meaning: 'to close' },
            { char: '门', pinyin: 'mén', meaning: 'door' }
        ]
    },
    {
        name: 'radicals',
        characters: [
            {
                id: '1', char: '一', pinyin: 'yī', meaning: 'one'
            },
            {
                id: '2', char: '丨', pinyin: 'shù', meaning: 'line'
            },
            {
                id: '3', char: '丶', pinyin: 'diǎn', meaning: 'dot'
            },
            {
                id: '4', char: '丿', pinyin: 'piě', meaning: 'slash'
            },
            {
                id: '5', char: '乙', pinyin: 'yǐ', meaning: 'second'
            },
            {
                id: '6', char: '亅', pinyin: 'gōu', meaning: 'hook'
            },
            {
                id: '7', char: '二', pinyin: 'èr', meaning: 'two'
            },
            {
                id: '8', char: '亠', pinyin: 'tóu', meaning: 'lid'
            },
            {
                id: '9', char: '人', pinyin: 'rén', meaning: 'person'
            },
            {
                id: '10', char: '儿', pinyin: 'ér', meaning: 'legs'
            },
            {
                id: '11', char: '入', pinyin: 'rù', meaning: 'enter'
            },
            {
                id: '12', char: '八', pinyin: 'bā', meaning: 'eight'
            },
            {
                id: '13', char: '冂', pinyin: 'jiǒng', meaning: 'down box'
            },
            {
                id: '14', char: '冖', pinyin: 'mì', meaning: 'cover'
            },
            {
                id: '15', char: '冫', pinyin: 'bīng', meaning: 'ice'
            },
            {
                id: '16', char: '几', pinyin: 'jī, jǐ', meaning: 'table'
            },
            {
                id: '17', char: '凵', pinyin: 'qǔ', meaning: 'open box'
            },
            {
                id: '18', char: '刀', pinyin: 'dāo', meaning: 'knife'
            },
            {
                id: '19', char: '力', pinyin: 'lì', meaning: 'power'
            },
            {
                id: '20', char: '勹', pinyin: 'bāo', meaning: 'wrap'
            },
            {
                id: '21', char: '匕', pinyin: 'bǐ', meaning: 'ladle'
            },
            {
                id: '22', char: '匚', pinyin: 'fāng', meaning: 'right open box'
            },
            {
                id: '23', char: '匸', pinyin: 'xǐ', meaning: 'hiding enclosure'
            },
            {
                id: '24', char: '十', pinyin: 'shí', meaning: 'ten'
            },
            {
                id: '25', char: '卜', pinyin: 'bǔ', meaning: 'divination'
            },
            {
                id: '26', char: '卩', pinyin: 'jié', meaning: 'seal'
            },
            {
                id: '27', char: '厂', pinyin: 'hàn', meaning: 'cliff'
            },
            {
                id: '28', char: '厶', pinyin: 'sī', meaning: 'private'
            },
            {
                id: '29', char: '又', pinyin: 'yòu', meaning: 'again'
            },
            {
                id: '30', char: '口', pinyin: 'kǒu', meaning: 'mouth'
            },
            {
                id: '31', char: '囗', pinyin: 'wéi', meaning: 'enclosure'
            },
            {
                id: '32', char: '土', pinyin: 'tǔ', meaning: 'earth'
            },
            {
                id: '33', char: '士', pinyin: 'shì', meaning: 'scholar'
            },
            {
                id: '34', char: '夂', pinyin: 'zhī', meaning: 'go'
            },
            {
                id: '35', char: '夊', pinyin: 'suī', meaning: 'go slowly'
            },
            {
                id: '36', char: '夕', pinyin: 'xī', meaning: 'night'
            },
            {
                id: '37', char: '大', pinyin: 'dà', meaning: 'big'
            },
            {
                id: '38', char: '女', pinyin: 'nǚ', meaning: 'woman'
            },
            {
                id: '39', char: '子', pinyin: 'zǐ', meaning: 'child'
            },
            {
                id: '40', char: '宀', pinyin: 'gài', meaning: 'roof'
            },
            {
                id: '41', char: '寸', pinyin: 'cùn', meaning: 'inch'
            },
            {
                id: '42', char: '小', pinyin: 'xiǎo', meaning: 'small'
            },
            {
                id: '43', char: '尢', pinyin: 'yóu', meaning: 'lame'
            },
            {
                id: '44', char: '尸', pinyin: 'shī', meaning: 'corpse'
            },
            {
                id: '45', char: '屮', pinyin: 'chè', meaning: 'sprout'
            },
            {
                id: '46', char: '山', pinyin: 'shān', meaning: 'mountain'
            },
            {
                id: '47', char: '川', pinyin: 'chuān', meaning: 'river'
            },
            {
                id: '48', char: '工', pinyin: 'gōng', meaning: 'work'
            },
            {
                id: '49', char: '己', pinyin: 'jǐ', meaning: 'oneself'
            },
            {
                id: '50', char: '巾', pinyin: 'jīn', meaning: 'towel'
            },
            {
                id: '51', char: '干', pinyin: 'gān', meaning: 'dry'
            },
            {
                id: '52', char: '幺', pinyin: 'yāo', meaning: 'thread'
            },
            {
                id: '53', char: '广', pinyin: 'guǎng', meaning: 'shelter'
            },
            {
                id: '54', char: '廴', pinyin: 'yǐn', meaning: 'stride'
            },
            {
                id: '55', char: '廾', pinyin: 'gǒng', meaning: 'hands joined'
            },
            {
                id: '56', char: '弋', pinyin: 'yì', meaning: 'shoot with a bow'
            },
            {
                id: '57', char: '弓', pinyin: 'gōng', meaning: 'bow'
            },
            {
                id: '58', char: '彐', pinyin: 'jì', meaning: 'snout'
            },
            {
                id: '59', char: '彡', pinyin: 'shān', meaning: 'hair'
            },
            {
                id: '60', char: '彳', pinyin: 'chì', meaning: 'step'
            },
            {
                id: '61', char: '心', pinyin: 'xīn', meaning: 'heart'
            },
            {
                id: '62', char: '戈', pinyin: 'gē', meaning: 'spear'
            },
            {
                id: '63', char: '户', pinyin: 'hù', meaning: 'door'
            },
            {
                id: '64', char: '手', pinyin: 'shǒu', meaning: 'hand'
            },
            {
                id: '65', char: '支', pinyin: 'zhī', meaning: 'branch'
            },
            {
                id: '66', char: '攴', pinyin: 'pū', meaning: 'rap'
            },
            {
                id: '67', char: '文', pinyin: 'wén', meaning: 'script'
            },
            {
                id: '68', char: '斗', pinyin: 'dǒu', meaning: 'dipper'
            },
            {
                id: '69', char: '斤', pinyin: 'jīn', meaning: 'axe'
            },
            {
                id: '70', char: '方', pinyin: 'fāng', meaning: 'square'
            },
            {
                id: '71', char: '无', pinyin: 'wú', meaning: 'not'
            },
            {
                id: '72', char: '日', pinyin: 'rì', meaning: 'sun'
            },
            {
                id: '73', char: '曰', pinyin: 'yuē', meaning: 'say'
            },
            {
                id: '74', char: '月', pinyin: 'yuè', meaning: 'moon'
            },
            {
                id: '75', char: '木', pinyin: 'mù', meaning: 'tree'
            },
            {
                id: '76', char: '欠', pinyin: 'qiàn', meaning: 'lack'
            },
            {
                id: '77', char: '止', pinyin: 'zhǐ', meaning: 'stop'
            },
            {
                id: '78', char: '歹', pinyin: 'dǎi', meaning: 'death'
            },
            {
                id: '79', char: '殳', pinyin: 'shū', meaning: 'weapon'
            },
            {
                id: '80', char: '母', pinyin: 'mǔ', meaning: 'mother'
            },
            {
                id: '81', char: '比', pinyin: 'bǐ', meaning: 'compare'
            },
            {
                id: '82', char: '毛', pinyin: 'máo', meaning: 'fur'
            },
            {
                id: '83', char: '氏', pinyin: 'shì', meaning: 'clan'
            },
            {
                id: '84', char: '气', pinyin: 'qì', meaning: 'steam'
            },
            {
                id: '85', char: '水', pinyin: 'shuǐ', meaning: 'water'
            },
            {
                id: '86', char: '火', pinyin: 'huǒ', meaning: 'fire'
            },
            {
                id: '87', char: '爪', pinyin: 'zhǎo', meaning: 'claw'
            },
            {
                id: '88', char: '父', pinyin: 'fù', meaning: 'father'
            },
            {
                id: '89', char: '爻', pinyin: 'yáo', meaning: 'lines on a trigram'
            },
            {
                id: '90', char: '爿', pinyin: 'qiáng', meaning: 'half of a tree trunk'
            },
            {
                id: '91', char: '片', pinyin: 'piàn', meaning: 'slice'
            },
            {
                id: '92', char: '牙', pinyin: 'yá', meaning: 'tooth'
            },
            {
                id: '93', char: '牛', pinyin: 'niú', meaning: 'cow'
            },
            {
                id: '94', char: '犭', pinyin: 'quǎn', meaning: 'dog'
            },
            {
                id: '95', char: '玄', pinyin: 'xuán', meaning: 'profound'
            },
            {
                id: '96', char: '玉', pinyin: 'yù', meaning: 'jade'
            },
            {
                id: '97', char: '瓜', pinyin: 'guā', meaning: 'melon'
            },
            {
                id: '98', char: '瓦', pinyin: 'wǎ', meaning: 'tile'
            },
            {
                id: '99', char: '甘', pinyin: 'gān', meaning: 'sweet'
            },
            {
                id: '100', char: '生', pinyin: 'shēng', meaning: 'life'
            },
            {
                id: '101', char: '用', pinyin: 'yòng', meaning: 'use'
            },
            {
                id: '102', char: '田', pinyin: 'tián', meaning: 'field'
            },
            {
                id: '103', char: '疋', pinyin: 'pǐ', meaning: 'cloth'
            },
            {
                id: '104', char: '疒', pinyin: 'bìng', meaning: 'ill'
            },
            {
                id: '105', char: '癶', pinyin: 'bō', meaning: 'foot steps'
            },
            {
                id: '106', char: '白', pinyin: 'bái', meaning: 'white'
            },
            {
                id: '107', char: '皮', pinyin: 'pí', meaning: 'skin'
            },
            {
                id: '108', char: '皿', pinyin: 'mǐn', meaning: 'dish'
            },
            {
                id: '109', char: '目', pinyin: 'mù', meaning: 'eye'
            },
            {
                id: '110', char: '矛', pinyin: 'máo', meaning: 'spear'
            },
            {
                id: '111', char: '矢', pinyin: 'shǐ', meaning: 'arrow'
            },
            {
                id: '112', char: '石', pinyin: 'shí', meaning: 'stone'
            },
            {
                id: '113', char: '示', pinyin: 'shì', meaning: 'spirit'
            },
            {
                id: '114', char: '禸', pinyin: 'róu', meaning: 'track'
            },
            {
                id: '115', char: '禾', pinyin: 'hé', meaning: 'grain'
            },
            {
                id: '116', char: '穴', pinyin: 'xuè', meaning: 'cave'
            },
            {
                id: '117', char: '立', pinyin: 'lì', meaning: 'stand'
            },
            {
                id: '118', char: '竹', pinyin: 'zhú', meaning: 'bamboo'
            },
            {
                id: '119', char: '米', pinyin: 'mǐ', meaning: 'rice'
            },
            {
                id: '120', char: '纟', pinyin: 'sī', meaning: 'silk'
            },
            {
                id: '121', char: '缶', pinyin: 'fǒu', meaning: 'jar'
            },
            {
                id: '122', char: '网', pinyin: 'wǎng', meaning: 'net'
            },
            {
                id: '123', char: '羊', pinyin: 'yáng', meaning: 'sheep'
            },
            {
                id: '124', char: '羽', pinyin: 'yǔ', meaning: 'feather'
            },
            {
                id: '125', char: '老', pinyin: 'lǎo', meaning: 'old'
            },
            {
                id: '126', char: '而', pinyin: 'ér', meaning: 'and'
            },
            {
                id: '127', char: '耒', pinyin: 'lěi', meaning: 'plow'
            },
            {
                id: '128', char: '耳', pinyin: 'ěr', meaning: 'ear'
            },
            {
                id: '129', char: '聿', pinyin: 'yù', meaning: 'brush'
            },
            {
                id: '130', char: '肉', pinyin: 'ròu', meaning: 'meat'
            },
            {
                id: '131', char: '臣', pinyin: 'chén', meaning: 'minister'
            },
            {
                id: '132', char: '自', pinyin: 'zì', meaning: 'oneself'
            },
            {
                id: '133', char: '至', pinyin: 'zhì', meaning: 'arrive'
            },
            {
                id: '134', char: '臼', pinyin: 'jiù', meaning: 'mortar'
            },
            {
                id: '135', char: '舌', pinyin: 'shé', meaning: 'tongue'
            },
            {
                id: '136', char: '舛', pinyin: 'chuǎn', meaning: 'contrary'
            },
            {
                id: '137', char: '舟', pinyin: 'zhōu', meaning: 'boat'
            },
            {
                id: '138', char: '艮', pinyin: 'gèn', meaning: 'mountain'
            },
            {
                id: '139', char: '色', pinyin: 'sè', meaning: 'color'
            },
            {
                id: '140', char: '艹', pinyin: 'cǎo', meaning: 'grass'
            },
            {
                id: '141', char: '虍', pinyin: 'hǔ', meaning: 'tiger'
            },
            {
                id: '142', char: '虫', pinyin: 'chóng', meaning: 'insect'
            },
            {
                id: '143', char: '血', pinyin: 'xuě', meaning: 'blood'
            },
            {
                id: '144', char: '行', pinyin: 'xíng', meaning: 'walk'
            },
            {
                id: '145', char: '衣', pinyin: 'yī', meaning: 'clothes'
            },
            {
                id: '146', char: '西', pinyin: 'xī', meaning: 'west'
            },
            {
                id: '147', char: '见', pinyin: 'jiàn', meaning: 'see'
            },
            {
                id: '148', char: '角', pinyin: 'jiǎo', meaning: 'horn'
            },
            {
                id: '149', char: '讠', pinyin: 'yán', meaning: 'speech'
            },
            {
                id: '150', char: '谷', pinyin: 'gǔ', meaning: 'valley'
            },
            {
                id: '151', char: '豆', pinyin: 'dòu', meaning: 'bean'
            },
            {
                id: '152', char: '豕', pinyin: 'shǐ', meaning: 'pig'
            },
            {
                id: '153', char: '豸', pinyin: 'zhì', meaning: 'badger'
            },
            {
                id: '154', char: '贝', pinyin: 'bèi', meaning: 'shell'
            },
            {
                id: '155', char: '赤', pinyin: 'chì', meaning: 'red'
            },
            {
                id: '156', char: '走', pinyin: 'zǒu', meaning: 'walk'
            },
            {
                id: '157', char: '足', pinyin: 'zú', meaning: 'foot'
            },
            {
                id: '158', char: '身', pinyin: 'shēn', meaning: 'body'
            },
            {
                id: '159', char: '车', pinyin: 'chē', meaning: 'cart'
            },
            {
                id: '160', char: '辛', pinyin: 'xīn', meaning: 'bitter'
            },
            {
                id: '161', char: '辰', pinyin: 'chén', meaning: 'morning'
            },
            {
                id: '162', char: '辶', pinyin: 'chuò', meaning: 'walk'
            },
            {
                id: '163', char: '邑', pinyin: 'yì', meaning: 'city'
            },
            {
                id: '164', char: '酉', pinyin: 'yǒu', meaning: 'wine'
            },
            {
                id: '165', char: '釆', pinyin: 'biàn', meaning: 'distinguish'
            },
            {
                id: '166', char: '里', pinyin: 'lǐ', meaning: 'village'
            },
            {
                id: '167', char: '钅', pinyin: 'jīn', meaning: 'metal'
            },
            {
                id: '168', char: '长', pinyin: 'cháng', meaning: 'long'
            },
            {
                id: '169', char: '门', pinyin: 'mén', meaning: 'gate'
            },
            {
                id: '170', char: '阜', pinyin: 'fù', meaning: 'mound'
            },
            {
                id: '171', char: '隶', pinyin: 'lì', meaning: 'slave'
            },
            {
                id: '172', char: '隹', pinyin: 'zhuī', meaning: 'short-tailed bird'
            },
            {
                id: '173', char: '雨', pinyin: 'yǔ', meaning: 'rain'
            },
            {
                id: '174', char: '青', pinyin: 'qīng', meaning: 'blue'
            },
            {
                id: '175', char: '非', pinyin: 'fēi', meaning: 'wrong'
            },
            {
                id: '176', char: '面', pinyin: 'miàn', meaning: 'face'
            },
            {
                id: '177', char: '革', pinyin: 'gé', meaning: 'leather'
            },
            {
                id: '178', char: '韦', pinyin: 'wěi', meaning: 'soft leather'
            },
            {
                id: '179', char: '韭', pinyin: 'jiǔ', meaning: 'chives'
            },
            {
                id: '180', char: '音', pinyin: 'yīn', meaning: 'sound'
            },
            {
                id: '181', char: '页', pinyin: 'yè', meaning: 'page'
            },
            {
                id: '182', char: '风', pinyin: 'fēng', meaning: 'wind'
            },
            {
                id: '183', char: '飞', pinyin: 'fēi', meaning: 'fly'
            },
            {
                id: '184', char: '饣', pinyin: 'shí', meaning: 'eat'
            },
            {
                id: '185', char: '首', pinyin: 'shǒu', meaning: 'head'
            },
            {
                id: '186', char: '香', pinyin: 'xiāng', meaning: 'fragrant'
            },
            {
                id: '187', char: '马', pinyin: 'mǎ', meaning: 'horse'
            },
            {
                id: '188', char: '骨', pinyin: 'gǔ', meaning: 'bone'
            },
            {
                id: '189', char: '高', pinyin: 'gāo', meaning: 'high'
            },
            {
                id: '190', char: '髟', pinyin: 'biāo', meaning: 'long hair'
            },
            {
                id: '191', char: '鬥', pinyin: 'dòu', meaning: 'fight'
            },
            {
                id: '192', char: '鬯', pinyin: 'chàng', meaning: 'sacrificial wine'
            },
            {
                id: '193', char: '鬲', pinyin: 'lì', meaning: 'cauldron'
            },
            {
                id: '194', char: '鬼', pinyin: 'guǐ', meaning: 'ghost'
            },
            {
                id: '195', char: '鱼', pinyin: 'yú', meaning: 'fish'
            },
            {
                id: '196', char: '鸟', pinyin: 'niǎo', meaning: 'bird'
            },
            {
                id: '197', char: '卤', pinyin: 'lǔ', meaning: 'salty'
            },
            {
                id: '198', char: '鹿', pinyin: 'lù', meaning: 'deer'
            },
            {
                id: '199', char: '麦', pinyin: 'mài', meaning: 'wheat'
            },
            {
                id: '200', char: '麻', pinyin: 'má', meaning: 'hemp'
            },
            {
                id: '201', char: '黄', pinyin: 'huáng', meaning: 'yellow'
            },
            {
                id: '202', char: '黍', pinyin: 'shǔ', meaning: 'millet'
            },
            {
                id: '203', char: '黑', pinyin: 'hēi', meaning: 'black'
            },
            {
                id: '204', char: '黹', pinyin: 'zhǐ', meaning: 'embroidery'
            },
            {
                id: '205', char: '黾', pinyin: 'mǐn', meaning: 'frog'
            },
            {
                id: '206', char: '鼎', pinyin: 'dǐng', meaning: 'tripod'
            },
            {
                id: '207', char: '鼓', pinyin: 'gǔ', meaning: 'drum'
            },
            {
                id: '208', char: '鼠', pinyin: 'shǔ', meaning: 'rat'
            },
            {
                id: '209', char: '鼻', pinyin: 'bí', meaning: 'nose'
            },
            {
                id: '210', char: '齐', pinyin: 'qí', meaning: 'even'
            },
            {
                id: '211', char: '齿', pinyin: 'chǐ', meaning: 'tooth'
            },
            {
                id: '212', char: '龙', pinyin: 'lóng', meaning: 'dragon'
            },
            {
                id: '213', char: '龟', pinyin: 'guī', meaning: 'turtle'
            },
            {
                id: '214', char: '龠', pinyin: 'yuè', meaning: 'flute'
            }
        ]
    }
];

