const tape = require('tape');
const server = require('../../src/server.js');

function test () {
  tape('Testing whether the server is running at localhost', function (t) {
    server.start((err) => {
      if (err) t.error();
      else t.pass('server should run on local host');
      server.stop(() => {
        t.end();
      });
    });
  });

  tape('check the route', (t) => {
    var options = {
      method: 'GET',
      url: '/'
    };
    server.inject(options, (response) => {
      t.equals(response.statusCode, 200, 'status code is 200');
    //  t.equal(response.payload, '', 'payload contains no content');
      t.end();
    });
  });
}

module.exports = test;
