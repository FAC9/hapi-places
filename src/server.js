const hapi = require('hapi');
const server = new hapi.Server();
const vision = require('vision');
const path = require('path');
const inert = require('inert');
const routes = require('./routes.js');

server.connection({
  port: 8000,
  routes: {
    files: {
      relativeTo: path.join(__dirname, '../public')
    }
  }
});

server.register([inert, vision], (err) => {
  if (err) console.log(err);
  server.views({
    engines: {
      hbs: require('handlebars')
    },
    relativeTo: __dirname,
    path: '../public/views'
  });

  server.route(routes);

  server.start((err) => {
    if (err) console.log(err);
    console.log(`server running`);
  });
});
module.exports = server;
