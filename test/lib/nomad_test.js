const tape = require('tape');
const getData = require('../../src/cities/getdata.js');
const amsterdamJson = {'ok': true, 'updated': {'epoch': 1479825108, 'time': '2016-11-22T14:31:48+00:00', 'cache': false}, 'type': 'cities', 'result': [{'info': {'city': {'name': 'Amsterdam', 'url': '\/amsterdam-netherlands', 'slug': 'amsterdam-netherlands'}, 'country': {'name': 'Netherlands', 'url': '\/country\/netherlands', 'slug': 'netherlands'}, 'region': {'name': 'Europe', 'url': '\/region\/europe', 'slug': 'europe'}, 'internet': {'speed': {'download': 10}}, 'weather': {'type': 'Mostly Cloudy', 'humidity': {'label': 'Humid', 'value': 0.79}, 'temperature': {'celsius': 12, 'fahrenheit': 53}}, 'location': {'latitude': 52.3702157, 'longitude': 4.8951679}, 'monthsToVisit': [6, 7, 8, 9]}, 'people': {'checkins': '8'}, 'scores': {'nomadScore': 0.72, 'nomad_score': 0.72, 'life_score': 0.79, 'free_wifi_available': 0.8, 'peace_score': 1, 'fragile_states_index': 28.2, 'freedom_score': 1, 'press_freedom_index': 8.76, 'nightlife': 1, 'leisure': 0.8, 'places_to_work': 0.8, 'aircon': 0.4, 'safety': 0.8, 'friendly_to_foreigners': 0.98, 'racism': 0.8, 'lgbt_friendly': 1, 'female_friendly': 0.8}, 'media': {'image': {'250': '\/assets\/img\/cities\/amsterdam-netherlands-250px.jpg', '500': '\/assets\/img\/cities\/amsterdam-netherlands-500px.jpg', '1000': '\/assets\/img\/cities\/amsterdam-netherlands-1000px.jpg', '1500': '\/assets\/img\/cities\/amsterdam-netherlands-1500px.jpg'}}, 'cost': {'local': {'USD': 1975, 'EUR': 1860}, 'nomad': {'USD': 3274, 'EUR': 3082}, 'expat': {'USD': 3739, 'EUR': 3520}, 'longTerm': {'USD': 3739, 'EUR': 3520}, 'shortTerm': {'USD': 3274, 'EUR': 3082}, 'hotel': {'EUR': 87, 'USD': 93}, 'airbnb_median': {'USD': 147, 'EUR': 147}, 'airbnb_vs_apartment_price_ratio': 2.64135565625, 'non_alcoholic_drink_in_cafe': {'EUR': 2.5, 'USD': 2.66}, 'beer_in_cafe': {'EUR': 5, 'USD': 5.31}, 'coffee_in_cafe': {'EUR': 3.5227272727273, 'USD': 3.74}, 'coworking': {'monthly': {'EUR': 240, 'USD': 254.93}}, 'exchange_rate': {'USD': 1.0621913006532}}, 'tags': ['places of worship', 'churches', 'nightlife', 'cycling', 'marijuana', 'edm', 'nightlife', 'golf', 'legal weed']}], 'endpoint_examples': ['\/api\/v2\/list\/places', '\/api\/v2\/list\/cities', '\/api\/v2\/list\/cities\/amsterdam-netherlands', '\/api\/v2\/list\/countries', '\/api\/v2\/list\/countries\/netherlands', '\/api\/v2\/list\/regions', '\/api\/v2\/list\/regions\/europe', '\/api\/v2\/list\/cities\/amsterdam-netherlands\/places\/work', '\/api\/v2\/list\/cities\/amsterdam-netherlands\/places\/sleep']};
const req = require('../../src/request.js');

function test () {
  tape('testing url builder functions correctly concatenate urls', function (t) {
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
