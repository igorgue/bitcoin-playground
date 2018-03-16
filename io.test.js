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
    bytesStream.read(3)
  ).toBe(
    'coi'
  )

  expect(
    bytesStream.read(1)
  ).toBe(
    'n'
  )

  expect(
    bytesStream.read(1)
  ).toBe(
    ''
  )
})
