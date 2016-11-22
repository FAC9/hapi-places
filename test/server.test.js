const server = require('../src/server.js');
const tape = require('tape');

tape('Server should start', (t) => {
  server.start((err) => {
    if (err) { t.error(); }
    t.pass('server is running!');
    server.stop(() => {
      t.end();
    });
  });
});

tape('Test server using injection', (t) => {
  server.inject('/', (res) => {
    t.ok(res.statusCode === 200, 'homepage request should return statuscode 200');
    t.ok(res.payload.indexOf('background: linear-gradient') > -1, 'This should return the homepage');
  });
  server.inject('letsdancebydavidbowie', (res) => {
    t.ok(res.statusCode >= 400, 'should error with bad request');
    t.end();
  });
});
