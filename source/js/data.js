'use strict';
(function() {
  var TEAMS_RESULTS_UNSORTED = [
    {
      name: "Друзья друзей Друзя",
      game1: {
        qestions: 12,
        points: 11.5,
        rating: 1,
      },
      game2: {
        qestions: 15,
        points: 19,
        rating: 10,
      },
      game3: {
        qestions: 5,
        points: 5.5,
        rating: 2,
      },
      game4: {
        qestions: 19,
        points: 20.5,
        rating: 9,
      },
      game5: {
        qestions: 14,
        points: 19.5,
        rating: 2,
      }
    },
  
    {
      name: "Торговые воротнички",
      game1: {
        qestions: 23,
        points: 33.5,
        rating: 11,
      },
      game2: {
        qestions: 17,
        points: 22,
        rating: 14,
      },
      game3: {
        qestions: 15,
        points: 20.5,
        rating: 16,
      },
      game4: {
        qestions: 16,
        points: 20,
        rating: 8,
      },
      game5: {
        qestions: 22,
        points: 29,
        rating: 13,
      }
    },
  
    {
      name: "Корги Чака Норриса",
      game1: {
        qestions: 17,
        points: 20,
        rating: 4,
      },
      game2: {
        qestions: 16,
        points: 20.5,
        rating: 12,
      },
      game3: {
        qestions: 11,
        points: 13,
        rating: 7,
      },
      game4: {
        qestions: 15,
        points: 17.5,
        rating: 5,
      },
      game5: {
        qestions: 21,
        points: 28,
        rating: 11.5,
      }
    },
  
    {
      name: "Мозголатура",
      game1: {
        qestions: 25,
        points: 36.5,
        rating: 12,
      },
      game2: {
        qestions: 11,
        points: 15.5,
        rating: 5.5,
      },
      game3: {
        qestions: 14,
        points: 19,
        rating: 15,
      },
      game4: {
        qestions: 19,
        points: 25.5,
        rating: 13,
      },
      game5: {
        qestions: 23,
        points: 35,
        rating: 15,
      }
    },
  
    {
      name: "SVARщики",
      game1: {
        qestions: 18,
        points: 23.5,
        rating: 8,
      },
      game2: {
        qestions: 12,
        points: 15.5,
        rating: 5.5,
      },
      game3: {
        qestions: 9,
        points: 11,
        rating: 6,
      },
      game4: {
        qestions: 9,
        points: 10,
        rating: 1,
      },
      game5: {
        qestions: 15,
        points: 20,
        rating: 3,
      }
    },
  
    {
      name: "Клевер",
      game1: {
        qestions: 17,
        points: 21,
        rating: 5,
      },
      game2: {
        qestions: 10,
        points: 11.5,
        rating: 2,
      },
      game3: {
        qestions: 7,
        points: 6,
        rating: 3,
      },
      game4: {
        qestions: 12,
        points: 13.5,
        rating: 2,
      },
      game5: {
        qestions: 17,
        points: 23,
        rating: 4,
      }
    },
  
    {
      name: "Калабаха чебураха",
      game1: {
        qestions: 29,
        points: 37,
        rating: 13,
      },
      game2: {
        qestions: 18,
        points: 21.5,
        rating: 13,
      },
      game3: {
        qestions: 16,
        points: 21.5,
        rating: 17,
      },
      game4: {
        qestions: 27,
        points: 35,
        rating: 15,
      },
      game5: {
        qestions: 24,
        points: 34,
        rating: 14,
      }
    },
  
    {
      name: "Излишки разума",
      game1: {
        qestions: 21,
        points: 28.5,
        rating: 9,
      },
      game2: {
        qestions: 13,
        points: 16.5,
        rating: 8,
      },
      game3: {
        qestions: 11,
        points: 13.5, 
        rating: 8,
      },
      game4: {
        qestions: 19,
        points: 25, 
        rating: 12,
      },
      game5: {
        qestions: 20,
        points: 27.5,
        rating: 9.5,
      }
    },
  
    {
      name: "Синергия",
      game1: {
        qestions: 19,
        points: 23,
        rating: 7,
      },
      game2: {
        qestions: 12,
        points: 16,
        rating: 7,
      },
      game3: {
        qestions: 12,
        points: 14.5,
        rating: 9,
      },
      game4: {
        qestions: 17,
        points: 22,
        rating: 10,
      },
      game5: {
        qestions: 20,
        points: 27,
        rating: 7.5,
      }
    },
  
    {
      name: "Шесть извилин",
      game1: {
        qestions: 31,
        points: 40.5,
        rating: 14,
      },
      game2: {
        qestions: 21,
        points: 27,
        rating: 15,
      },
      game3: {
        qestions: 14,
        points: 18,
        rating: 13,
      },
      game4: {
        qestions: 14,
        points: 16.5,
        rating: 4,
      },
      game5: {
        qestions: 27,
        points: 37.5,
        rating: 16,
      }
    },
  
    {
      name: "Роковые ботаники",
      game1: {
        qestions: 17,
        points: 22.5,
        rating: 6,
      },
      game2: {
        qestions: 9,
        points: 13,
        rating: 3,
      },
      game3: {
        qestions: 6,
        points: 7.5,
        rating: 5,
      },
      game4: {
        qestions: 11,
        points: 15,
        rating: 3,
      },
      game5: {
        qestions: 18,
        points: 24.5,
        rating: 5,
      }
    },
  
    {
      name: "Пламя",
      game1: {
        qestions: 13,
        points: 15,
        rating: 3,
      },
      game2: {
        qestions:  12,
        points: 14,
        rating: 4,
      },
      game3: {
        qestions: 6,
        points: 6.5,
        rating: 4,
      },
      game4: {
        qestions: 0,
        points: 0,
        rating: 0,
      },
      game5: {
        qestions: 0,
        points: 0,
        rating: 0,
      }
    },
  
    {
      name: "Диплодоки",
      game1: {
        qestions: 0,
        points: 0,
        rating: 0,
      },
      game2: {
        qestions: 13,
        points: 17.5,
        rating: 9,
      },
      game3: {
        qestions: 14,
        points: 16,
        rating: 12,
      },
      game4: {
        qestions: 20,
        points: 26,
        rating: 14,
      },
      game5: {
        qestions: 19,
        points: 27,
        rating: 7.5,
      }
    },
  
    {
      // aka Отложенный успех
      name: "Always moving forward",
      game1: {
        qestions: 0,
        points: 0,
        rating: 0,
      },
      game2: {
        qestions: 8,
        points: 10.5,
        rating: 1,
      },
      game3: {
        qestions: 4,
        points: 4,
        rating: 1,
      },
      game4: {
        qestions: 0,
        points: 0,
        rating: 0,
      },
      game5: {
        qestions: 0,
        points: 0,
        rating: 0,
      }
    },
  
    {
      name: "Томат и паэлья",
      game1: {
        qestions: 23,
        points: 30,
        rating: 10,
      },
      game2: {
        qestions: 16,
        points: 19.5,
        rating: 11,
      },
      game3: {
        qestions: 12,
        points: 15,
        rating: 10,
      },
      game4: {
        qestions: 18,
        points: 23,
        rating: 11,
      },
      game5: {
        qestions: 20,
        points: 25.5,
        rating: 6,
      }
    },
  
    {
      name: "Якорь",
      game1: {
        qestions: 11,
        points: 12.5,
        rating: 12,
      },
      game2: {
        points: 0,
        qestions: 0,
        rating: 0,
      },
      game3: {
        qestions: 0,
        points: 0,
        rating: 0,
      },
      game4: {
        qestions: 0,
        points: 0,
        rating: 0,
      },
      game5: {
        qestions: 0,
        points: 0,
        rating: 0,
      }
    },
  
    {
      name: "Экстрим",
      game1: {
        qestions: 0,
        points: 0,
        rating: 0,
      },
      game2: {
        points: 0,
        qestions: 0,
        rating: 0,
      },
      game3: {
        qestions: 16,
        points: 18.5,
        rating: 14,
      },
      game4: {
        qestions: 14,
        points: 18,
        rating: 6.5,
      },
      game5: {
        qestions: 20,
        points: 28,
        rating: 11.5,
      }
    },
  
    {
      name: "Кусочек брюнуста",
      game1: {
        qestions: 0,
        points: 0,
        rating: 0,
      },
      game2: {
        points: 0,
        qestions: 0,
        rating: 0,
      },
      game3: {
        qestions: 12,
        points: 15.5,
        rating: 11,
      },
      game4: {
        qestions: 15,
        points: 18,
        rating: 6.5,
      },
      game5: {
        qestions: 19,
        points: 27.5,
        rating: 9.5,
      }
    },

    {
      name: "Коллективный разум",
      game1: {
        qestions: 0,
        points: 0,
        rating: 0,
      },
      game2: {
        points: 0,
        qestions: 0,
        rating: 0,
      },
      game3: {
        qestions: 0,
        points: 0,
        rating: 0,
      },
      game4: {
        qestions: 0,
        points: 0,
        rating: 0,
      },
      game5: {
        qestions: 12,
        points: 15,
        rating: 1,
      }
    },
  ];


  // Sort alphabetically
  var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 }
  ];
  var TEAMS_RESULTS = TEAMS_RESULTS_UNSORTED.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

  window.data = {
    teams_results: TEAMS_RESULTS,
  };
})()
