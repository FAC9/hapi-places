const hapi = require('hapi');
const vision = require('vision');
const path = require('path');
const inert = require('inert');
const routes = require('./routes.js');
const server = new hapi.Server();

server.connection({
  port: process.env.PORT || 8000,
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
});
module.exports = server;
