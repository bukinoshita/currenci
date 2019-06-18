// Packages
const unique = require('unique-random-array')

// Lib
const currencies = require('./currencies')

module.exports = unique(currencies)
