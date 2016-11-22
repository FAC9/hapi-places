const Handlebars = require('handlebars');
const fs = require('fs');
const Path = require('path');

const source = fs.readFileSync(Path.join(__dirname, '/index.hbs'));
const template = Handlebars.compile(source.toString());

function fill (schema) {
  var html = template(schema);
  return html;
}
// server.route({
//   path: '/',
//   handler: function(request, reply){
//     async api request(err, () => {
//       reply.view(index.hbs, obj)
//     })
//   }
// })

module.exports.fill = fill;
