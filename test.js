'use strict'

import test from 'ava'
import m from './'

test(t => {
  const curr = m.random()
  const prev = m.random()
  t.true(m.list.length === 118)
  t.not(curr, prev)
})
