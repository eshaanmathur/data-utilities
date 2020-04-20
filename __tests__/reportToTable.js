const reportToTable = require('../lib/reportToTable');

describe('reportToTable', () => {
  const input = new Map([
    ['one', { count: 1, rank: 3 }],
    ['two', { count: 2, rank: 2 }],
    ['three', { count: 3, rank: 1 }],
  ]);
  const output = [
    {
      key: 'one',
      count: 1,
      rank: 3,
    },
    {
      key: 'two',
      count: 2,
      rank: 2,
    },
    {
      key: 'three',
      count: 3,
      rank: 1,
    },
  ];

  const result = reportToTable(input);

  test('should match the output', () => {
    expect(result).toEqual(output);
  });
});
