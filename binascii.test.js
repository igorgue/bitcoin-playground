var binascii = require('./binascii')

var name = 'Bitcoin'
var hex = '426974636f696e'

test('generates a hexstring from ascii', () => {
  expect(
    binascii.hexlify(name)
  ).toBe(
    hex
  )
})

test('generates ascii from hex', () => {
  expect(
    binascii.unhexlify(hex)
  ).toBe(
    name
  )
})
