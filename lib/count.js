const unique = require('./unique');

function count(items) {
  return new Map(unique(items).map(key => [key, { count: items.filter(i => i === key).length }]));
}

module.exports = count;
