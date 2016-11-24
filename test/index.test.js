const routes = require('./lib/route_test.js');
const server_test = require('./lib/server_test.js');
const wiki_test = require('./lib/wiki_test.js');
const nomad_test = require('./lib/nomad_test.js');

routes();
wiki_test();
server_test();
nomad_test();
