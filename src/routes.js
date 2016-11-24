const cityDataBuilder = require('./citydatabuilder');
const customUrlBuilder = require('./custom-requests.js');

const home = {
  method: 'GET',
  path: '/',
  handler: (req, rep) => {
    cityDataBuilder('', (err, schema) => {
      if (err) {
        throw err;
      } else {
        rep.view('index', schema);
      }
    });
  }
};

const request = {
  method: 'GET',
  path: '/request',
  handler: (req, rep) => {
    let qType = req.query.type;
    let qValue = req.query.value;
    let nomadUrl = customUrlBuilder(qType, qValue);
    cityDataBuilder(nomadUrl, (err, schema) => {
      if (err) {
        throw err;
      } else {
        rep.view('index', schema);
      }
    });
  }
};

const files = {
  method: 'GET',
  path: '/{path*}',
  handler: {
    directory: {
      path: '.'
    }
  }
};

module.exports = [
  home,
  request,
  files
];
