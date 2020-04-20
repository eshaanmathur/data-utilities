const tableToSheet = require('../lib/tableToSheet');

describe('tableToSheet', () => {
  const input = [
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

  const output = [
    ['key', 'count', 'rank'],
    ['one', 1, 3],
    ['two', 2, 2],
    ['three', 3, 1],
  ];

  const result = tableToSheet(input);

  test('should match the output', () => {
    expect(result).toEqual(output);
  });
});
