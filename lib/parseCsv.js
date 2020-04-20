function parseCsv(text = '', s = ',') {
  return text
    .trim()
    .split('\n')
    .map(row => row.trim().split(s));
}

module.exports = parseCsv;
