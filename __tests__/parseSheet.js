const parseSheet = require('../lib/parseSheet');

describe('parse sheet', () => {
  const input = [
    ['name', 'email'],
    ['Jon Doe', 'jon@example.com'],
  ];
  const result = [
    {
      name: 'Jon Doe',
      email: 'jon@example.com',
    },
  ];
  const output = parseSheet(input);

  test('should output an object with the first row as keys', () => {
    expect(output).toEqual(result);
  });
});
