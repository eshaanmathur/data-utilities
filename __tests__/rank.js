const rank = require('../lib/rank');

describe('rank', () => {
  const input = new Map([
    ['one', { count: 1 }],
    ['two', { count: 2 }],
    ['three', { count: 3 }],
  ]);
  const output = new Map([
    ['one', { count: 1, rank: 3 }],
    ['two', { count: 2, rank: 2 }],
    ['three', { count: 3, rank: 1 }],
  ]);

  const result = rank(input);

  test('should match the output', () => {
    expect(result).toEqual(output);
  });
});
