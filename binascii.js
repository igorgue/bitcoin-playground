var hexlify = (string) => {
  var result = ''

  for (var i = 0; i < string.length; i++) {
    var hex = string.charCodeAt(i).toString(16)

    result += hex
  }

  return result
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
