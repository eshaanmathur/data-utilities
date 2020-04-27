const flattenDeep = require('lodash/flattenDeep');
const unique = require('./unique');

module.exports = function tableToSheet(tables) {
  const headers = unique(flattenDeep(tables.map(Object.keys))).sort();
  const rows = tables.map(item => headers.map(key => item[key] || null));
  return [headers, ...rows];
};
