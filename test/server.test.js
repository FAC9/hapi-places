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
