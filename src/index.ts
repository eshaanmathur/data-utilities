export function pick(obj: { [key: string]: any }, keys: string[]): { [key: string]: any } {
  return Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key)));
}

export function unique<T>(list: T[]): T[] {
  const setList = new Set(list);
  return [...setList];
}

export function parseCsv(text: string, s = ','): string[][] {
  return text
    .trim()
    .split('\n')
    .map((row) => row.trim().split(s));
}

export function parseSheet(sheet: any[][]): Array<{ [key: string]: any }> {
  const [headers, ...rows] = sheet;
  return rows.map((row) => Object.fromEntries(headers.map((key, idx) => [key, row[idx]])));
}

export function toSheet(table: { [key: string]: any }[]): any[][] {
  const headers = unique(table.map(Object.keys).flat()).sort();
  const rows = table.map((item) => headers.map((key) => (item[key] === undefined ? null : item[key])));
  return [headers, ...rows];
}

export function count(report: Map<any, any>, filterFn?: (item: any) => boolean): Map<any, number> {
  const countReport = new Map();

  for (const [key, reportItems] of report.entries()) {
    if (filterFn === undefined) {
      countReport.set(key, reportItems.length);
    } else {
      countReport.set(key, reportItems.filter(filterFn).length);
    }
  }

  return countReport;
}

export function percentage(report: Map<any, any>, filterFn?: (item: any) => boolean): Map<any, number> {
  const countReport = count(report, filterFn);
  const list = [...countReport];
  const total = [...countReport.values()].reduce((sum, itemCount) => sum + itemCount, 0);
  const percentageReport = new Map(list.map(([key, itemCount]) => [key, itemCount / total]));
  return percentageReport;
}

export function rank(report: Map<any, any>, filterFn?: (item: any) => boolean): Map<any, number> {
  const countReport = count(report, filterFn);
  const list = [...countReport];
  const sorted = list.sort((aItem, bItem) => {
    const b = bItem[1];
    const a = aItem[1];

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

export function createReport(tableData: { [key: string]: any }[], key: string, pickKeys: string[]): Map<any, any> {
  const report = new Map();

  tableData.forEach((item) => {
    const reportKey = item[key];

    if (report.has(reportKey)) {
      report.set(reportKey, [...report.get(reportKey), pick(item, pickKeys)]);
    } else {
      report.set(reportKey, [pick(item, pickKeys)]);
    }
  });

  return report;
}
