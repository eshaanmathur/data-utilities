const percentage = require('../lib/percentage');

describe('percentage', () => {
  const input = new Map([
    ['one', { count: 1 }],
    ['two', { count: 2 }],
    ['three', { count: 3 }],
  ]);
  const output = new Map([
    ['one', { count: 1, percentage: 1 / 6 }],
    ['two', { count: 2, percentage: 2 / 6 }],
    ['three', { count: 3, percentage: 3 / 6 }],
  ]);

  const result = percentage(input);

  test('should match the output', () => {
    expect(result).toEqual(output);
  });
});
