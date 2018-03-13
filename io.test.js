var io = require('./io')

var name = 'Bitcoin'

test('can read bytes from a string', () => {
  var bytesStream = new io.BytesIO(name)

  expect(
    bytesStream.read(3)
  ).toBe(
    'Bit'
  )

  expect(
    bytesStream.read(4)
  ).toBe(
    'coin'
  )
})
