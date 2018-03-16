var hexlify = (string) => {
  var buffer = Buffer.from(string)

  return buffer.toString('hex')
}

var unhexlify = (hex) => {
  var result = ''

  for (var i = 0, l = hex.length; i < l; i += 2) {
    result += String.fromCharCode(parseInt(hex.substr(i, 2), 16))
  }

  return result
}

module.exports = {
  hexlify: hexlify,
  unhexlify: unhexlify
}
