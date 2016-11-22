const tape = require('tape');
const req = require('../src/request.js');

tape('testing url builder functions correctly concatenate urls', function (t) {
  t.ok(req.wikiUrlBuilder('horse') === 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&titles=horse&format=json', 'It should correctly format query string');
  t.ok(req.nomadUrlBuilder('/amsterdam-netherlands') === 'https://nomadlist.com/api/v2/list/cities/amsterdam-netherlands', 'It should correctly format query string');
  t.end();
});

tape('testing request function for Nomad API when passed amsterdam returns JSON', function (t) {
  req.nomadRequest('/amsterdam-netherlands', (err, data) => {
    if (err) { t.error(); }
    t.ok(data, 'We should have recieved data!');
    t.ok(typeof data === 'string', 'Our data should be a string... of JSON!');
    let parsed = JSON.parse(data);
    let type = parsed.type;
    let city = parsed.result[0].info.city.name;
    t.equal(type, 'cities', 'type of data should be cities');
    t.equal(city, 'Amsterdam', 'city should be amsterdam');
    t.end();
  });
});

// tape('testing request function for wikipedia API returns JSON', function (t) {
//
// });
//
// tape('testing request function for wikipedia API returns JSON', function (t) {
//
// });
