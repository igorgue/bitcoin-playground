var encoding = 'utf-8'

var textEncoding = require('text-encoding')

var encoder = new textEncoding.TextEncoder(encoding).encoder
var decoder = new textEncoding.TextDecoder().decoder

class BytesIO {
  constructor(data) {
    // Init stuff
    this.data = encoder(data, true)
    this.offset = 0
  }

  read(bytesAmount) {
    var dv = new DataView(this.data.buffer)
    var res = []

    for (var i = 0; i < bytesAmount; i++) {
      res.append(dv.read(i))
    }
    this.offset = bytesAmount

    return res
  }
}

module.exports = {
  BytesIO: BytesIO
}
