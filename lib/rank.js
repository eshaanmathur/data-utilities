function rank(countReport) {
  const list = [...countReport];
  const sorted = list.sort(([_a, { count: a }], [_b, { count: b }]) => {
    if (a > b) {
      return -1;
    }

    if (a < b) {
      return 1;
    }

    return 0;
  });

  return new Map(sorted.map(([key, { count }], idx) => [key, { count, rank: idx + 1 }]));
}

module.exports = rank;
