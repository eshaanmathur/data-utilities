function pick(obj, keys) {
  return Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key)));
}

function tableToReport(tableData, key, pickKeys) {
  const report = tableData.map(item => [item[key], pick(item, pickKeys)]);
  return new Map(report);
}

module.exports = tableToReport;
