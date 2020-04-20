const unique = require('../lib/unique');

describe('unique utility', () => {
  const list = [1, 2, 2, 3, 3, 3];
  const result = [1, 2, 3];
  const output = unique(list);

  test('should return a list length lesser than origin', () => {
    expect(output.length).toBeLessThan(list.length);
  });

  test('should return a list of only unique values', () => {
    expect(output.length).toBe(result.length);
    expect(output).toEqual(result);
  });
});
