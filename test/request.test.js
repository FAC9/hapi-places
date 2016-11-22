const tape = require('tape');
const req = require('../src/request.js');

tape('testing url builder functions correctly concatenate urls', function (t) {
  t.ok(req.wikiUrlBuilder('horse') === 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&titles=horse&format=json', 'It should correctly format query string');
  t.ok(req.nomadUrlBuilder('/amsterdam-netherlands') === 'https://nomadlist.com/api/v2/list/cities/amsterdam-netherlands', 'It should correctly format query string');
  t.end();
});

// tape('testing request function for wikipedia API returns JSON', function (t) {
//
// });

// tape('testing request function for wikipedia API returns JSON', function (t) {
//
// });
//
// tape('testing request function for wikipedia API returns JSON', function (t) {
//
// });
