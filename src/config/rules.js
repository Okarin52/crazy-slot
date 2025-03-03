const SLOT_RULES = [
  {
    range: [1, 1],
    type: '修行の道（精進デー）',
    details: {
      calories: null,
      restrictions: [
        '米、納豆、漬物、味噌汁のみ許可',
        '社食の場合はうどん・そば選択可'
      ]
    }
  },
  {
    range: [2, 10],
    type: '厳格な食事制限',
    details: {
      calories: 1500,
      restrictions: []
    }
  },
  {
    range: [11, 25],
    type: '厳しい食事管理',
    details: {
      calories: 1600,
      restrictions: []
    }
  },
  {
    range: [26, 50],
    type: '標準的な食事制限',
    details: {
      calories: 1700,
      restrictions: []
    }
  },
  {
    range: [51, 75],
    type: '緩やかな食事管理',
    details: {
      calories: 1800,
      restrictions: []
    }
  },
  {
    range: [76, 90],
    type: '余裕のある食事プラン',
    details: {
      calories: 1900,
      restrictions: []
    }
  },
  {
    range: [91, 97],
    type: '贅沢な食事プラン',
    details: {
      calories: 2000,
      restrictions: []
    }
  },
  {
    range: [98, 100],
    type: '無制限の宴（チートデー）',
    details: {
      calories: null,
      restrictions: ['制限なし']
    }
  }
];

module.exports = {
  SLOT_RULES
};
