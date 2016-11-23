const cityDataBuilder = require('./citydatabuilder');
const custom = require('./custom-requests.js');
module.exports = [

  {
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
  },
  {
    method: 'GET',
    path: '/w',
    handler: (req, rep) => {
      let qType = req.query.type;
      let qValue = req.query.value;
      let nomadUrl = custom(qType, qValue);
      cityDataBuilder(nomadUrl, (err, schema) => {
        if (err) {
          throw err;
        } else {
          rep.view('index', schema);
        }
      });
    }
  },
  {
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: {
        path: '.'
      }
    }
  }
];
