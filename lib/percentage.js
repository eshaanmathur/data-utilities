function percentage(countReport) {
  const list = [...countReport];
  const total = [...countReport.values()].reduce((sum, { count }) => sum + count, 0);
  const report = new Map(list.map(([key, { count }]) => [key, { count, percentage: count / total }]));
  return report;
}

module.exports = percentage;
