const cityDataBuilder = require('./citydatabuilder');

// define routes
// /cost-cheaper
// /temp-warmer
// /internet-faster
// /air-better
// /coffee-cheaper
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
    path: '/{path*}',
    handler: {
      directory: {
        path: '.'
      }
    }
  }
];
