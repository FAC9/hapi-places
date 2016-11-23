const server = require('../src/server.js');
const tape = require('tape');

function test () {
  tape('Should return 200 when we send a query for better/cheaper/etc', (t) => {
    let options = {
      method: 'GET',
      url: '/request?type=coffee&value=1.43'
    };
    server.inject(options, (rep) => {
      t.ok(rep.statusCode === 200, 'status code should be 200');
      t.end();
    });
  });
}

module.exports = test;
