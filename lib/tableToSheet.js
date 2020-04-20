const flattenDeep = require('lodash/flattenDeep');
const unique = require('./unique');

module.exports = function tableToSheet(tables) {
  const headers = unique(flattenDeep(tables.map(Object.keys)));
  const rows = tables.map(Object.values);
  return [headers, ...rows];
};
