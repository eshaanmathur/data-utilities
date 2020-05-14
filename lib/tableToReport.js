function pick(obj, keys) {
  return Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key)));
}

function tableToReport(tableData, key, pickKeys) {
  const report = new Map();

  tableData.forEach(item => {
    const reportKey = item[key];

    if (report.has(reportKey)) {
      report.set(reportKey, [...report.get(reportKey), pick(item, pickKeys)]);
    } else {
      report.set(reportKey, [pick(item, pickKeys)]);
    }
  });

  return report;
}

module.exports = tableToReport;
