const madridWiki = {'batchcomplete': '', 'query': {'pages': {'41188263': {'pageid': 41188263, 'ns': 0, 'title': 'Madrid', 'extract': "<p><b>Madrid</b> (<span><span>/<span><span title=\"'m' in 'my'\">m</span><span title=\"/\u0259/ 'a' in 'about'\">\u0259</span><span title=\"/\u02c8/ primary stress follows\">\u02c8</span><span title=\"'d' in 'dye'\">d</span><span title=\"'r' in 'rye'\">r</span><span title=\"/\u026a/ short 'i' in 'bid'\">\u026a</span><span title=\"'d' in 'dye'\">d</span></span>/</span></span>, <small>Spanish:\u00a0</small><span title=\"Representation in the International Phonetic Alphabet (IPA)\">[ma\u02c8\u00f0\u027ei\u00f0]</span>, <small>locally:\u00a0</small><span title=\"Representation in the International Phonetic Alphabet (IPA)\">[ma\u02c8\u00f0\u027ei\u03b8, -\u02c8\u00f0\u027ei]</span>) is the capital of Spain, and the largest municipality of the Community of Madrid. The population of the city is almost 3.2\u00a0million with a metropolitan area population of approximately 6.5 million. It is the third-largest city in the European Union, after London and Berlin, and its metropolitan area is the third-largest in the European Union after London and Paris. Located in south-western Europe, the city spans a total of 604.3\u00a0km<sup>2</sup> (233.3\u00a0sq\u00a0mi).</p>\n<p>The city is located on the Manzanares in the centre of both the country and the Community of Madrid (which comprises the city of Madrid, its conurbation and extended suburbs and villages); this community is bordered by the autonomous communities of Castile and Le\u00f3n and Castile-La Mancha. As the capital city of Spain, seat of government, and residence of the Spanish monarch, Madrid is also the political, economic and cultural centre of Spain. The current mayor is Manuela Carmena from Ahora Madrid.</p>\n<p>The Madrid urban agglomeration has the third-largest GDP in the European Union and its influences in politics, education, entertainment, environment, media, fashion, science, culture, and the arts all contribute to its status as one of the world's major global cities. Madrid is home to two world-famous football clubs, Real Madrid and Atl\u00e9tico de Madrid. Due to its economic output, high standard of living, and market size, Madrid is considered the major financial centre of Southern Europe and the Iberian Peninsula; it hosts the head offices of the vast majority of major Spanish companies, such as Telef\u00f3nica, Iberia, and Repsol. Madrid is the 17th most liveable city in the world according to Monocle magazine, in its 2014 index.</p>\n<p>Madrid houses the headquarters of the World Tourism Organization (UNWTO), belonging to the United Nations Organization (UN), the SEGIB, the Organization of Ibero-American States (OEI), and the Public Interest Oversight Board (PIOB). It also hosts major international regulators of Spanish: the Standing Committee of the Association of Spanish Language Academies, headquarters of the Royal Spanish Academy (RAE), the Cervantes Institute and the Foundation of Urgent Spanish (Fund\u00e9u BBVA). Madrid organises fairs such as FITUR, ARCO, SIMO TCI and the Cibeles Madrid Fashion Week.</p>\n<p>While Madrid possesses modern infrastructure, it has preserved the look and feel of many of its historic neighbourhoods and streets. Its landmarks include the Royal Palace of Madrid; the Royal Theatre with its restored 1850 Opera House; the Buen Retiro Park, founded in 1631; the 19th-century National Library building (founded in 1712) containing some of Spain's historical archives; a large number of national museums, and the Golden Triangle of Art, located along the Paseo del Prado and comprising three art museums: Prado Museum, the Reina Sof\u00eda Museum, a museum of modern art, and the Thyssen-Bornemisza Museum, which completes the shortcomings of the other two museums. Cibeles Palace and Fountain have become one of the monument symbols of the city.</p>\n<p></p>\n"}}}};
const tape = require('tape');
const city_obj = require('../../src/cities/wiki.js');
const req = require('../../src/request.js');

function test () {
  tape('testing url builder functions correctly concatenate urls', function (t) {
    t.ok(req.wikiUrlBuilder('london') === 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&titles=london&format=json', 'It should correctly format query string');
    t.end();
  });

  tape('testing request function for wikipedia API when passed london returns JSON', function (t) {
    req.wikiRequest('George Town', 'South Africa', (err, data) => {
      if (err) { t.error(); }
      t.ok(data, 'We should have recieved data!');
      t.ok(typeof data === 'string', 'Our data should be a string... of JSON!');
      let parsed = JSON.parse(data);
      let result = parsed.query.pages[Object.keys(parsed.query.pages)[0]].title;
      t.ok(result, 'Should return useful information');
      t.end();
    });
  });

  tape('testing request function for Wikipedia API should return placeholder text when no article found', function (t) {
    req.wikiRequest('/lghrusfhuoerhi', 'spain', (err, data) => {
      if (err) t.error();
      t.ok(data.indexOf('is a city in') > -1);
    });
    t.end();
  });

  tape('check that we return the description of the city as a string', function (t) {
    let extract = 'Madrid (/məˈdrɪd/, Spanish: [maˈðɾið], locally: [maˈðɾiθ, -ˈðɾi]) is the capital of Spain, and the largest municipality of the Community of Madrid. The population of the city is almost 3.2 million with a metropolitan area population of approximately 6.5 million. It is the third-largest city in the European Union, after London and Berlin, and its metropolitan area is the third-largest in the European Union after London and Paris.';
    t.equal(city_obj(madridWiki), extract, 'returns correct extract');
    t.end();
  });
}
module.exports = test;
