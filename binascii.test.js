var binascii = require('./binascii')

var name = 'igor guerrero'
var hex = '69676f7220677565727265726f'

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
