const count = require('../lib/count');

describe('count utility', () => {
  const input = ['one', 'two', 'two', 'three', 'three', 'three'];
  const output = new Map([
    ['one', { count: 1 }],
    ['two', { count: 2 }],
    ['three', { count: 3 }],
  ]);
  const result = count(input);
  test('should match the output', () => {
    expect(result).toEqual(output);
  });
});
