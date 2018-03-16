var helpers = require('./helpers')

test('can do doubleSha256', () => {
  var name = 'Bitcoin'

  expect(
    helpers.doubleSha256(name)
  ).toBe(
    '1ab3b6827ceeea24155245b11418dd6021d6f2d4e7193172f3f8dc03c650ef6f'
  )
})
