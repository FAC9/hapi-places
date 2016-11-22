const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'citiesraw.json'), 'utf8', function (err, data) {
  if (err) throw err;
  data = JSON.parse(data);
  var array = data.result;
  array = array.map(function (c, i, a) {
    return `'${c.info.city.url}'`;
  });
  fs.writeFile(path.join(__dirname, 'citylist.js'), 'module.exports = ' + array, 'utf8');
});
