const tape = require('tape');
const server = require('../src/server.js');

tape('Testing whether the server is running at localhost', function (t) {
  server.start((err) => {
    if (err) t.error();
    else t.pass();
    server.stop();
    t.end();
  });
});

// tape('',)
