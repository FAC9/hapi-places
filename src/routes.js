const Req = require('./request');
const cityDataBuilder = require('./citydatabuilder');

// define routes -
// /cost-cheaper   (inside handler function, we want to pass uri for cheapest results call to general request function)
// /temp-colder

// /temp-warmer
// /internet-faster
// /air-better
// /coffee-cheaper
module.exports = [

  {
    method: 'GET',
    path: '/',
    handler: (req, rep) => {
      // var schema = cityDataBuilder();
      // There should be function here which uses the following sequence;
      // // 1. Randomly pick citylist uri
      // // 2. Generate Nomadlist API call with that uri
      // // 3. When receiving data, retrieve appropriate values and put them in schema object
      // // 4. Take city value, then make wikipedia api call
      // // 5. Retrieve wikipedia data, then parse response data, store in schema object as description value
      // // 6. also parse in wikipedia link
      // results object is then injected into view
      const schema = {
        city: 'MADRID',
        cost: '$1000',
        temp: '30C',
        internet: 'good',
        air: '78%',
        coffee: '$2',
        description: 'Madrid, what a town. A hell of a town. A town that never slows down ;)',
        wiki: 'https://wikipedia.org'
      };
      rep.view('index', schema);
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
