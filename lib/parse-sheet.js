function parseSheet(sheet) {
  const [headers, ...rows] = sheet;
  return rows.map(row => Object.fromEntries(headers.map((key, idx) => [key, row[idx]])));
}

module.exports = parseSheet;
