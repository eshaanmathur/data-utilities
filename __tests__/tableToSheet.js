const tableToSheet = require('../lib/tableToSheet');

describe('tableToSheet', () => {
  const input = [
    {
      key: 'one',
      count: 0,
      rank: 3,
      select: 'yes',
    },
    {
      key: 'two',
      count: 2,
      rank: 2,
      foo: 'bar',
    },
    {
      key: 'three',
      count: 3,
      rank: 1,
    },
  ];

  const output = [
    ['count', 'foo', 'key', 'rank', 'select'],
    [0, null, 'one', 3, 'yes'],
    [2, 'bar', 'two', 2, null],
    [3, null, 'three', 1, null],
  ];

  const result = tableToSheet(input);

  test('should match the output', () => {
    expect(result).toEqual(output);
  });
});
