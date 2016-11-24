const tape = require('tape');
const server = require('../src/server.js');
const city_obj = require('../src/cities/wiki.js');
const madridWiki = {'batchcomplete': '', 'query': {'pages': {'41188263': {'pageid': 41188263, 'ns': 0, 'title': 'Madrid', 'extract': "<p><b>Madrid</b> (<span><span>/<span><span title=\"'m' in 'my'\">m</span><span title=\"/\u0259/ 'a' in 'about'\">\u0259</span><span title=\"/\u02c8/ primary stress follows\">\u02c8</span><span title=\"'d' in 'dye'\">d</span><span title=\"'r' in 'rye'\">r</span><span title=\"/\u026a/ short 'i' in 'bid'\">\u026a</span><span title=\"'d' in 'dye'\">d</span></span>/</span></span>, <small>Spanish:\u00a0</small><span title=\"Representation in the International Phonetic Alphabet (IPA)\">[ma\u02c8\u00f0\u027ei\u00f0]</span>, <small>locally:\u00a0</small><span title=\"Representation in the International Phonetic Alphabet (IPA)\">[ma\u02c8\u00f0\u027ei\u03b8, -\u02c8\u00f0\u027ei]</span>) is the capital of Spain, and the largest municipality of the Community of Madrid. The population of the city is almost 3.2\u00a0million with a metropolitan area population of approximately 6.5 million. It is the third-largest city in the European Union, after London and Berlin, and its metropolitan area is the third-largest in the European Union after London and Paris. Located in south-western Europe, the city spans a total of 604.3\u00a0km<sup>2</sup> (233.3\u00a0sq\u00a0mi).</p>\n<p>The city is located on the Manzanares in the centre of both the country and the Community of Madrid (which comprises the city of Madrid, its conurbation and extended suburbs and villages); this community is bordered by the autonomous communities of Castile and Le\u00f3n and Castile-La Mancha. As the capital city of Spain, seat of government, and residence of the Spanish monarch, Madrid is also the political, economic and cultural centre of Spain. The current mayor is Manuela Carmena from Ahora Madrid.</p>\n<p>The Madrid urban agglomeration has the third-largest GDP in the European Union and its influences in politics, education, entertainment, environment, media, fashion, science, culture, and the arts all contribute to its status as one of the world's major global cities. Madrid is home to two world-famous football clubs, Real Madrid and Atl\u00e9tico de Madrid. Due to its economic output, high standard of living, and market size, Madrid is considered the major financial centre of Southern Europe and the Iberian Peninsula; it hosts the head offices of the vast majority of major Spanish companies, such as Telef\u00f3nica, Iberia, and Repsol. Madrid is the 17th most liveable city in the world according to Monocle magazine, in its 2014 index.</p>\n<p>Madrid houses the headquarters of the World Tourism Organization (UNWTO), belonging to the United Nations Organization (UN), the SEGIB, the Organization of Ibero-American States (OEI), and the Public Interest Oversight Board (PIOB). It also hosts major international regulators of Spanish: the Standing Committee of the Association of Spanish Language Academies, headquarters of the Royal Spanish Academy (RAE), the Cervantes Institute and the Foundation of Urgent Spanish (Fund\u00e9u BBVA). Madrid organises fairs such as FITUR, ARCO, SIMO TCI and the Cibeles Madrid Fashion Week.</p>\n<p>While Madrid possesses modern infrastructure, it has preserved the look and feel of many of its historic neighbourhoods and streets. Its landmarks include the Royal Palace of Madrid; the Royal Theatre with its restored 1850 Opera House; the Buen Retiro Park, founded in 1631; the 19th-century National Library building (founded in 1712) containing some of Spain's historical archives; a large number of national museums, and the Golden Triangle of Art, located along the Paseo del Prado and comprising three art museums: Prado Museum, the Reina Sof\u00eda Museum, a museum of modern art, and the Thyssen-Bornemisza Museum, which completes the shortcomings of the other two museums. Cibeles Palace and Fountain have become one of the monument symbols of the city.</p>\n<p></p>\n"}}}};
const getData = require('../src/cities/getdata.js');
const amsterdamJson = {'ok': true, 'updated': {'epoch': 1479825108, 'time': '2016-11-22T14:31:48+00:00', 'cache': false}, 'type': 'cities', 'result': [{'info': {'city': {'name': 'Amsterdam', 'url': '\/amsterdam-netherlands', 'slug': 'amsterdam-netherlands'}, 'country': {'name': 'Netherlands', 'url': '\/country\/netherlands', 'slug': 'netherlands'}, 'region': {'name': 'Europe', 'url': '\/region\/europe', 'slug': 'europe'}, 'internet': {'speed': {'download': 10}}, 'weather': {'type': 'Mostly Cloudy', 'humidity': {'label': 'Humid', 'value': 0.79}, 'temperature': {'celsius': 12, 'fahrenheit': 53}}, 'location': {'latitude': 52.3702157, 'longitude': 4.8951679}, 'monthsToVisit': [6, 7, 8, 9]}, 'people': {'checkins': '8'}, 'scores': {'nomadScore': 0.72, 'nomad_score': 0.72, 'life_score': 0.79, 'free_wifi_available': 0.8, 'peace_score': 1, 'fragile_states_index': 28.2, 'freedom_score': 1, 'press_freedom_index': 8.76, 'nightlife': 1, 'leisure': 0.8, 'places_to_work': 0.8, 'aircon': 0.4, 'safety': 0.8, 'friendly_to_foreigners': 0.98, 'racism': 0.8, 'lgbt_friendly': 1, 'female_friendly': 0.8}, 'media': {'image': {'250': '\/assets\/img\/cities\/amsterdam-netherlands-250px.jpg', '500': '\/assets\/img\/cities\/amsterdam-netherlands-500px.jpg', '1000': '\/assets\/img\/cities\/amsterdam-netherlands-1000px.jpg', '1500': '\/assets\/img\/cities\/amsterdam-netherlands-1500px.jpg'}}, 'cost': {'local': {'USD': 1975, 'EUR': 1860}, 'nomad': {'USD': 3274, 'EUR': 3082}, 'expat': {'USD': 3739, 'EUR': 3520}, 'longTerm': {'USD': 3739, 'EUR': 3520}, 'shortTerm': {'USD': 3274, 'EUR': 3082}, 'hotel': {'EUR': 87, 'USD': 93}, 'airbnb_median': {'USD': 147, 'EUR': 147}, 'airbnb_vs_apartment_price_ratio': 2.64135565625, 'non_alcoholic_drink_in_cafe': {'EUR': 2.5, 'USD': 2.66}, 'beer_in_cafe': {'EUR': 5, 'USD': 5.31}, 'coffee_in_cafe': {'EUR': 3.5227272727273, 'USD': 3.74}, 'coworking': {'monthly': {'EUR': 240, 'USD': 254.93}}, 'exchange_rate': {'USD': 1.0621913006532}}, 'tags': ['places of worship', 'churches', 'nightlife', 'cycling', 'marijuana', 'edm', 'nightlife', 'golf', 'legal weed']}], 'endpoint_examples': ['\/api\/v2\/list\/places', '\/api\/v2\/list\/cities', '\/api\/v2\/list\/cities\/amsterdam-netherlands', '\/api\/v2\/list\/countries', '\/api\/v2\/list\/countries\/netherlands', '\/api\/v2\/list\/regions', '\/api\/v2\/list\/regions\/europe', '\/api\/v2\/list\/cities\/amsterdam-netherlands\/places\/work', '\/api\/v2\/list\/cities\/amsterdam-netherlands\/places\/sleep']};
const req = require('../src/request.js');

function test () {
  tape('Testing whether the server is running at localhost', function (t) {
    server.start((err) => {
      if (err) t.error();
      else t.pass('server should run on local host');
      server.stop(() => {
        t.end();
      });
    });
  });

  tape('check the route', (t) => {
    var options = {
      method: 'GET',
      url: '/'
    };
    server.inject(options, (response) => {
      t.equals(response.statusCode, 200, 'status code is 200');
    //  t.equal(response.payload, '', 'payload contains no content');
      t.end();
    });
  });

  tape('testing url builder functions correctly concatenate urls', function (t) {
    t.ok(req.wikiUrlBuilder('london') === 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&titles=london&format=json', 'It should correctly format query string');
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

  tape('testing cityImageCheck can take an image url, and if it cannot be found, request a new url', function (t) {
    t.equal(req.nomadCountryUrlBuilder('China'), 'https://nomadlist.com/api/v2/list/countries/china', 'returns concatenated string');
    req.cityImageCheck('https://nomadlist.com/assets/img/cities/china-1500px.jpg', 'china', function (d) {
      t.ok(d === 'https://nomadlist.com/assets/img/cities/xian-china-1500px.jpg', 'returns a new url');
    });
    req.cityImageCheck('https://nomadlist.com/assets/img/cities/xian-china-1500px.jpg', 'china', function (d) {
      t.ok(d === 'https://nomadlist.com/assets/img/cities/xian-china-1500px.jpg', 'returns the same url if found');
    });
    t.end();
  });

  tape('check that getdata functionr returns an object', (t) => {
    t.ok(typeof getData(amsterdamJson) === 'object', 'function returns an object');
    t.equal(getData(amsterdamJson).city, 'Amsterdam', 'city name correct');
    t.equal(getData(amsterdamJson).country, 'Netherlands', 'country name correct');
    t.equal(getData(amsterdamJson).coffee, '£3.01');
    t.equal(getData(amsterdamJson).cost, '£2,638.47');
    t.equal(getData(amsterdamJson).temp, '12°C');
    t.equal(getData(amsterdamJson).image, 'https://nomadlist.com/assets/img/cities/amsterdam-netherlands-1500px.jpg');
    t.equal(getData(amsterdamJson).safety, '80%');
    t.equal(getData(amsterdamJson).internet, '10 MBPS', 'internet spped correct');
    t.end();
  });
}

module.exports = test;
