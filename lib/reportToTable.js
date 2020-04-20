module.exports = function reportToTable(reportMap) {
  return [...reportMap].map(([key, report]) => ({ key, ...report }));
};
