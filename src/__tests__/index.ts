import { unique, createReport, count } from '../index';

describe('unique()', () => {
  const list = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  const result = [1, 2, 3, 4];
  const output = unique(list);

  it('should return a list length lesser than origin', () => {
    expect(output.length).toBeLessThan(list.length);
  });
  it('should return an arry of unique items', () => {
    expect(output).toEqual(result);
  });
});

describe('createReport()', () => {
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

  const result = createReport(input, 'age', ['name', 'email']);
  it('should return a result that matches output', () => {
    expect(output).toEqual(result);
  });
});

describe('count()', () => {
  const input = new Map([
    [
      30,
      [
        { name: 'Jon Doe', email: 'jon@email.com' },
        { name: 'Json', email: 'test@email.com' },
      ],
    ],
    [28, [{ name: 'Jane Doe', email: 'jane@email.com' }]],
  ]);

  const output = new Map([
    [30, 2],
    [28, 1],
  ]);

  const result = count(input);
  it('should return a result that matches output', () => {
    expect(output).toEqual(result);
  });
});
