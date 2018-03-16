var encoding = 'utf-8'

class BytesIO {
  constructor(data) {
    // Init stuff
    this.data = Buffer.from(data, encoding)
    this.offset = 0
  }

  read(bytesAmount) {
    var buff = this.data.slice(this.offset, this.offset + bytesAmount)
    var data = buff.toString('ascii', this.offset, buff.length)

    this.offset += bytesAmount

    return data
  }
}

module.exports = {
  BytesIO: BytesIO
}
