'use strict'

const unique = require('unique-random-array')
const currencies = require('./currencies')

module.exports = unique(currencies)
