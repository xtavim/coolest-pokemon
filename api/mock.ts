
export const getLeaderboard = () =>
  [{
    name: 'Kakuna',
    dexNumber: '14',
    wins: 0,
    losses: 10,
    winRate: (0 * 100 / (0 + 10)).toFixed(0)
  },
  {
    name: 'MewTwo',
    dexNumber: '150',
    wins: 10,
    losses: 0,
    winRate: (10 * 100 / (10 + 0)).toFixed(0)
  },
  {
    name: 'Beartic',
    dexNumber: '614',
    wins: 7,
    losses: 2,
    winRate: (7 * 100 / (7 + 2)).toFixed(0)
  },
  {
    name: 'Weavile',
    dexNumber: '461',
    wins: 4,
    losses: 5,
    winRate: (4 * 100 / (4 + 5)).toFixed(0)
  },
  {
    name: 'Cyndaquill',
    dexNumber: '155',
    wins: 5,
    losses: 3,
    winRate: (5 * 100 / (5 + 3)).toFixed(0)
  }]
    .sort((a, b) => Number(b.winRate) - Number(a.winRate))