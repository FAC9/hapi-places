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

// Nomad Api
tape('testing request function for Nomad API when passed london returns JSON', function (t) {
  req.nomadRequest('/london-united-kingdom', (err, data) => {
    if (err) { t.error(); }
    t.ok(data, 'We should have recieved data!');
    t.ok(typeof data === 'string', 'Our data should be a string... of JSON!');
    let parsed = JSON.parse(data);
    let type = parsed.type;
    let city = parsed.result[0].info.city.name;
    t.equal(type, 'cities', 'type of data should be cities');
    t.equal(city, 'London', 'city should be London');
    t.end();
  });
});

tape('testing request function for Nomad API should throw error when incorrect url given', function (t) {
  req.nomadRequest('/lundun-united-kingdum', (err, data) => {
    if (err) {
      t.pass('should throw error');
    } else {
      t.error('Should not return data');
    }
  });
  t.end();
});

// Wikipedia
tape('testing request function for wikipedia API when passed london returns JSON', function (t) {
  req.wikiRequest('London', (err, data) => {
    if (err) { t.error(); }
    t.ok(data, 'We should have recieved data!');
    t.ok(typeof data === 'string', 'Our data should be a string... of JSON!');
    let parsed = JSON.parse(data);
    let result = parsed.query.pages[Object.keys(parsed.query.pages)[0]].title;
    t.ok(result, 'should return useful information');
    t.end();
  });
});

tape('testing request function for Wikipedia API should throw error when incorrect url given', function (t) {
  req.wikiRequest('/lghrusfhuoerhi', (err, data) => {
    if (err) {
      t.pass('should throw error');
    } else {
      t.error('Should not return data');
    }
  });
  t.end();
});
