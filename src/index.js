export function pick(obj, keys) {
  return Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key)));
}

export function unique(list) {
  return [...new Set(list)];
}

export function parseCsv(text, s = ',') {
  return text
    .trim()
    .split('\n')
    .map(row => row.trim().split(s));
}

export function parseSheet(sheet) {
  const [headers, ...rows] = sheet;
  return rows.map(row => Object.fromEntries(headers.map((key, idx) => [key, row[idx]])));
}

export function toSheet(table) {
  const headers = unique(table.map(Object.keys).flat()).sort();
  const rows = table.map(item => headers.map(key => (item[key] === undefined ? null : item[key])));
  return [headers, ...rows];
}

export function count(report, filterFn = null) {
  const countReport = new Map();

  for (const [key, reportItems] of report.entries()) {
    if (filterFn === null) {
      countReport.set(key, reportItems.length);
    } else {
      countReport.set(key, reportItems.filter(filterFn).length);
    }
  }

  return countReport;
}

export function percentage(report, filterFn = null) {
  const countReport = count(report, filterFn);
  const list = [...countReport];
  const total = [...countReport.values()].reduce((sum, itemCount) => sum + itemCount, 0);
  const percentageReport = new Map(list.map(([key, itemCount]) => [key, itemCount / total]));
  return percentageReport;
}

export function rank(report, filterFn = null) {
  const countReport = count(report, filterFn);
  const list = [...countReport];
  const sorted = list.sort(([_a, a], [_b, b]) => {
    if (a > b) {
      return -1;
    }

    if (a < b) {
      return 1;
    }

    return 0;
  });

  return new Map(sorted.map(([key], idx) => [key, idx]));
}

export function createReport(tableData, key, pickKeys) {
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
