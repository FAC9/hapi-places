const cityList = require('./cities/citylist');
const getData = require('./cities/getdata');
const Req = require('./request');
const wikiParse = require('./cities/wiki');

function cityDataBuilder (url, cb, cities = cityList) {
  if (url) {
    Req.generalRequest(url, (err, data) => {
      if (err) {
        cb(err);
      }
      let customCityList = JSON.parse(data).slugs;
      cityDataBuilder('', cb, customCityList);
    });
  } else {
    let city = cities[Math.floor(Math.random() * cities.length)];
    Req.nomadRequest(city, (err, data) => {
      if (err) {
        cb(err);
      } else {
        let schema = getData(data);
        let city = schema.city;
        Req.cityImageCheck(schema.image, schema.country, function (img) {
          schema.image = img || schema.image;
          Req.wikiRequest(city, (err, data) => {
            if (err) {
              cb(err);
            } else {
              schema.description = wikiParse(data);
              schema.wiki = 'https://en.wikipedia.org/wiki/' + city.replace(' ', '_');
              cb(null, schema);
            }
          });
        });
      }
    });
  }
}

module.exports = cityDataBuilder;
