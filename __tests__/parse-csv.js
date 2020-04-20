const parseCsv = require('../lib/parse-csv');

describe('parse csv', () => {
  const rawText = 'name,email\nJon Doe,jon@example.com';
  const result = [
    ['name', 'email'],
    ['Jon Doe', 'jon@example.com'],
  ];
  const output = parseCsv(rawText, ',');

  test('should output a sheet data type', () => {
    expect(output).toEqual(result);
  });
});
