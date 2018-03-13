var bitcoin = require('./bitcoin')

test('can get the binascii module', () => {
  expect(
    bitcoin.binascii
  ).not.toBe(
    null
  )
})
