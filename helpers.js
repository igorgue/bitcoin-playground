var supersha = require('supersha')

function doubleSha256(data) {
  data = new Buffer(data)

  return supersha.sha256(
    supersha.sha256(data)
  ).toString('hex')
}

module.exports = {
  'doubleSha256': doubleSha256
}
