// Packages
import test from 'ava'

// Root
import m from '.'

test('currenci', t => {
  const curr = m.random()
  const prev = m.random()
  t.true(m.list.length === 118)
  t.not(curr, prev)
})
