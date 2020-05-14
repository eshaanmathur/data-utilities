const tableToReport = require('../lib/tableToReport');

describe('tableToReport', () => {
  const input = [
    {
      name: 'Jon Doe',
      age: 30,
      email: 'jon@email.com',
    },
    {
      name: 'Jane Doe',
      age: 28,
      email: 'jane@email.com',
    },
    {
      name: 'Json',
      age: 30,
      email: 'test@email.com',
    },
  ];

  const output = new Map([
    [
      30,
      [
        { name: 'Jon Doe', email: 'jon@email.com' },
        { name: 'Json', email: 'test@email.com' },
      ],
    ],
    [28, [{ name: 'Jane Doe', email: 'jane@email.com' }]],
  ]);

  const result = tableToReport(input, 'age', ['name', 'email']);

  test('should match the output', () => {
    expect(result).toEqual(output);
  });
});
