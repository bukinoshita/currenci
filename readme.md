# currenci [![Build Status](https://travis-ci.org/bukinoshita/currenci.svg?branch=master)](https://travis-ci.org/bukinoshita/currenci) [![codecov](https://codecov.io/gh/bukinoshita/currenci/branch/master/graph/badge.svg)](https://codecov.io/gh/bukinoshita/currenci)

> List of currencies and get random currency

## Install

```
$ yarn add currenci
```

## Usage

```js
const currenci = require('currenci')

currenci.random()
// => { "name": "Canadian Dollar", "symbol": "$", "code": "CAD" }

currenci.list
// => [ { "name": "US Dollar", "symbol": "$", "code": "USD" }, ...]
```

## API

### currenci

#### .list

Returns an `array`

#### .random()

Returns a random currency

## Related

- [transform-currency](https://github.com/bukinoshita/transform-currency) — Transform currency code to symbol
- [has-currency-code](https://github.com/bukinoshita/has-currency-code) — Check if given string has currency code
- [find-currency-code](https://github.com/bukinoshita/find-currency-code) — Find currency code from given string

## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
