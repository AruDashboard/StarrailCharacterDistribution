export interface RowInfo {
  key: string;
  image: string;
}

export interface ColInfo {
  key: string;
  image: string;
}

export interface CharacterInfo {
  name: string;
  rank: number;
  element: string;
  path: string;
  image: string;
}

export interface CharacterTableData {
  version: string;
  rows: RowInfo[];
  cols: ColInfo[];
  characters: CharacterInfo[];
}

const CHARACTERS: CharacterTableData = {
  version: '4.6',
  rows: [
    {
      key: '物理',
      image: '物理.png',
    },
    {
      key: '火',
      image: '火.png',
    },
    {
      key: '冰',
      image: '冰.png',
    },
    {
      key: '雷',
      image: '雷.png',
    },
    {
      key: '风',
      image: '风.png',
    },
    {
      key: '量子',
      image: '量子.png',
    },
    {
      key: '虚数',
      image: '虚数.png',
    },
  ],
  cols: [
    {
      key: '毁灭',
      image: '毁灭.webp',
    },
    {
      key: '巡猎',
      image: '巡猎.webp',
    },
    {
      key: '智识',
      image: '智识.webp',
    },
    {
      key: '同谐',
      image: '同谐.webp',
    },
    {
      key: '虚无',
      image: '虚无.webp',
    },
    {
      key: '存护',
      image: '存护.webp',
    },
    {
      key: '丰饶',
      image: '丰饶.webp',
    },
    {
      key: '记忆',
      image: '记忆.webp',
    },
    {
      key: '欢愉',
      image: '欢愉.webp',
    },
  ],
  characters: [
    // 1.0
    { name: '姬子', element: '火', path: '智识', rank: 5, image: '姬子.png' },
    { name: '瓦尔特', element: '虚数', path: '虚无', rank: 5, image: '瓦尔特.png' },
    { name: '布洛妮娅', element: '风', path: '同谐', rank: 5, image: '布洛妮娅.png' },
    { name: '杰帕德', element: '冰', path: '存护', rank: 5, image: '杰帕德.png' },
    { name: '克拉拉', element: '物理', path: '毁灭', rank: 5, image: '克拉拉.png' },
    { name: '彦卿', element: '冰', path: '巡猎', rank: 5, image: '彦卿.png' },
    { name: '白露', element: '雷', path: '丰饶', rank: 5, image: '白露.png' },
    { name: '三月七', element: '冰', path: '存护', rank: 4, image: '三月七.png' },
    { name: '丹恒', element: '风', path: '巡猎', rank: 4, image: '丹恒.png' },
    { name: '艾丝妲', element: '火', path: '同谐', rank: 4, image: '艾丝妲.png' },
    { name: '阿兰', element: '雷', path: '毁灭', rank: 4, image: '阿兰.png' },
    { name: '黑塔', element: '冰', path: '智识', rank: 4, image: '黑塔.png' },
    { name: '娜塔莎', element: '物理', path: '丰饶', rank: 4, image: '娜塔莎.png' },
    { name: '希露瓦', element: '雷', path: '智识', rank: 4, image: '希露瓦.png' },
    { name: '佩拉', element: '冰', path: '虚无', rank: 4, image: '佩拉.png' },
    { name: '桑博', element: '风', path: '虚无', rank: 4, image: '桑博.png' },
    { name: '虎克', element: '火', path: '毁灭', rank: 4, image: '虎克.png' },
    { name: '青雀', element: '量子', path: '智识', rank: 4, image: '青雀.png' },
    { name: '素裳', element: '物理', path: '巡猎', rank: 4, image: '素裳.png' },
    { name: '停云', element: '雷', path: '同谐', rank: 4, image: '停云.png' },
    { name: '希儿', element: '量子', path: '巡猎', rank: 5, image: '希儿.png' },
    { name: '景元', element: '雷', path: '智识', rank: 5, image: '景元.png' },

    //  1.1
    { name: '银狼', element: '量子', path: '虚无', rank: 5, image: '银狼.png' },
    { name: '罗刹', element: '虚数', path: '丰饶', rank: 5, image: '罗刹.png' },
    { name: '驭空', element: '虚数', path: '同谐', rank: 4, image: '驭空.png' },

    //  1.2
    { name: '刃', element: '风', path: '毁灭', rank: 5, image: '刃.png' },
    { name: '卡芙卡', element: '雷', path: '虚无', rank: 5, image: '卡芙卡.png' },
    { name: '卢卡', element: '物理', path: '虚无', rank: 4, image: '卢卡.png' },

    //  1.3
    { name: '丹恒•饮月', element: '虚数', path: '毁灭', rank: 5, image: '丹恒•饮月.png' },
    { name: '符玄', element: '量子', path: '存护', rank: 5, image: '符玄.png' },
    { name: '玲可', element: '量子', path: '丰饶', rank: 4, image: '玲可.png' },

    //  1.4
    { name: '镜流', element: '冰', path: '毁灭', rank: 5, image: '镜流.png' },
    { name: '托帕&账账', element: '火', path: '巡猎', rank: 5, image: '托帕&账账.png' },
    { name: '桂乃芬', element: '火', path: '虚无', rank: 4, image: '桂乃芬.png' },

    //  1.5
    { name: '藿藿', element: '风', path: '丰饶', rank: 5, image: '藿藿.png' },
    { name: '银枝', element: '物理', path: '智识', rank: 5, image: '银枝.png' },
    { name: '寒鸦', element: '物理', path: '同谐', rank: 4, image: '寒鸦.png' },

    //  1.6
    { name: '阮•梅', element: '冰', path: '同谐', rank: 5, image: '阮•梅.png' },
    { name: '雪衣', element: '量子', path: '毁灭', rank: 4, image: '雪衣.png' },
    { name: '真理医生', element: '虚数', path: '巡猎', rank: 5, image: '真理医生.png' },

    //  2.0
    { name: '黑天鹅', element: '风', path: '虚无', rank: 5, image: '黑天鹅.png' },
    { name: '米沙', element: '冰', path: '毁灭', rank: 4, image: '米沙.png' },
    { name: '花火', element: '量子', path: '同谐', rank: 5, image: '花火.png' },

    //  2.1
    { name: '黄泉', element: '雷', path: '虚无', rank: 5, image: '黄泉.png' },
    { name: '加拉赫', element: '火', path: '丰饶', rank: 4, image: '加拉赫.png' },
    { name: '砂金', element: '虚数', path: '存护', rank: 5, image: '砂金.png' },

    //  2.2
    { name: '知更鸟', element: '物理', path: '同谐', rank: 5, image: '知更鸟.png' },
    { name: '波提欧', element: '物理', path: '巡猎', rank: 5, image: '波提欧.png' },

    //  2.3
    { name: '流萤', element: '火', path: '毁灭', rank: 5, image: '流萤.png' },
    { name: '翡翠', element: '量子', path: '智识', rank: 5, image: '翡翠.png' },

    //  2.4
    { name: '云璃', element: '物理', path: '毁灭', rank: 5, image: '云璃.png' },
    { name: '三月七•巡猎', element: '虚数', path: '巡猎', rank: 4, image: '三月七•巡猎.png' },
    { name: '椒丘', element: '火', path: '虚无', rank: 5, image: '椒丘.png' },

    //  2.5
    { name: '飞霄', element: '风', path: '巡猎', rank: 5, image: '飞霄.png' },
    { name: '貊泽', element: '雷', path: '巡猎', rank: 4, image: '貊泽.png' },
    { name: '灵砂', element: '火', path: '丰饶', rank: 5, image: '灵砂.png' },

    //  2.6
    { name: '乱破', element: '虚数', path: '智识', rank: 5, image: '乱破.png' },

    //  2.7
    { name: '星期日', element: '虚数', path: '同谐', rank: 5, image: '星期日.png' },
    { name: '忘归人', element: '火', path: '虚无', rank: 5, image: '忘归人.png' },

    //  3.0
    { name: '大黑塔', element: '冰', path: '智识', rank: 5, image: '大黑塔.png' },
    { name: '阿格莱雅', element: '雷', path: '记忆', rank: 5, image: '阿格莱雅.png' },

    //  3.1
    { name: '缇宝', element: '量子', path: '同谐', rank: 5, image: '缇宝.png' },
    { name: '万敌', element: '虚数', path: '毁灭', rank: 5, image: '万敌.png' },

    //  3.2
    { name: '遐蝶', element: '量子', path: '记忆', rank: 5, image: '遐蝶.png' },
    { name: '那刻夏', element: '风', path: '智识', rank: 5, image: '那刻夏.png' },

    //  3.3
    { name: '风堇', element: '风', path: '记忆', rank: 5, image: '风堇.png' },
    { name: '赛飞儿', element: '量子', path: '虚无', rank: 5, image: '赛飞儿.png' },

    //  3.4
    { name: '白厄', element: '物理', path: '毁灭', rank: 5, image: '白厄.png' },
    { name: 'Saber', element: '风', path: '毁灭', rank: 5, image: 'Saber.png' },
    { name: 'Archer', element: '量子', path: '巡猎', rank: 5, image: 'Archer.png' },

    //  3.5
    { name: '海瑟音', element: '物理', path: '虚无', rank: 5, image: '海瑟音.png' },
    { name: '刻律德菈', element: '风', path: '同谐', rank: 5, image: '刻律德菈.png' },

    //  3.6
    { name: '长夜月', element: '冰', path: '记忆', rank: 5, image: '长夜月.png' },
    { name: '丹恒•腾荒', element: '物理', path: '存护', rank: 5, image: '丹恒•腾荒.png' },

    //  3.7
    { name: '昔涟', element: '冰', path: '记忆', rank: 5, image: '昔涟.png' },

    //  3.8
    { name: '大丽花', element: '火', path: '虚无', rank: 5, image: '大丽花.png' },

    //  4.0
    { name: '爻光', element: '物理', path: '欢愉', rank: 5, image: '爻光.png' },
    { name: '火花', element: '火', path: '欢愉', rank: 5, image: '火花.png' },

    //  4.1
    { name: '不死途', element: '雷', path: '巡猎', rank: 5, image: '不死途.png' },

    //  4.2
    { name: '银狼LV.999', element: '虚数', path: '欢愉', rank: 5, image: '银狼LV.999.png' },

    //  4.3
    { name: '绯英', element: '物理', path: '欢愉', rank: 5, image: '绯英.png' },
    { name: '千冶•刃', element: '火', path: '虚无', rank: 5, image: '千冶•刃.png' },

    //  4.4
    { name: '姬子•启行', element: '火', path: '智识', rank: 5, image: '姬子•启行.png' },
    { name: '吉尔伽美什', element: '雷', path: '毁灭', rank: 5, image: '吉尔伽美什.png' },
    { name: '远坂凛', element: '量子', path: '智识', rank: 5, image: '远坂凛.png' },

    //  4.5
    { name: '知更鸟•晴歌', element: '风', path: '记忆', rank: 5, image: '知更鸟•晴歌.png' },
    { name: '砂金•戏浪', element: '量子', path: '欢愉', rank: 5, image: '砂金•戏浪.png' },

    //  4.6
    { name: '真珠', element: '冰', path: '欢愉', rank: 5, image: '真珠.png' },
  ],
};

export default CHARACTERS;
