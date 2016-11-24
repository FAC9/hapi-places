const Req = require('request');

function generalRequest (url, cb) {
  Req(url, (err, res, body) => {
    if (err) { cb(err); }
    cb(null, body);
  });
}

module.exports = generalRequest;
