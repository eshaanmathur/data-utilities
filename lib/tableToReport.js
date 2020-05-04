function tableToReport(tableData, key) {
  const report = tableData.map(item => [item[key], item]);
  return new Map(report);
}

module.exports = tableToReport;
