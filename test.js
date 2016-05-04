import test from 'ava'
import appendSupurb from './index'

test('adds something awesome to what I give', t => {
  const input = 'Han solo is'
  const output = appendSupurb(input)
  t.true(output.startsWith(input + ' '))
})

test('defaults to empty string', t => {
  const input = undefined
  const output = appendSupurb(input)
  t.false(output.includes('undefined'))
})
