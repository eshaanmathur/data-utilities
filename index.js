const unique = require('./lib/unique');
const count = require('./lib/count');
const rank = require('./lib/rank');
const parseCsv = require('./lib/parse-csv');
const parseSheet = require('./lib/parse-sheet');
const reportToTable = require('./lib/reportToTable');
const tableToSheet = require('./lib/tableToSheet');

module.exports = { unique, count, rank, parseCsv, parseSheet, reportToTable, tableToSheet };
