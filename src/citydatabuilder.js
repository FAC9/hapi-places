const cityList = require('./cities/citylist');
const getData = require('./cities/getdata');
const Req = require('./request');
const wikiParse = require('./cities/wiki');

function cityDataBuilder (url, cb, cities = cityList) {
  if (!url) {
    let city = cities[Math.floor(Math.random() * cities.length)];
    Req.nomadRequest(city, (err, data) => {
      if (err) {
        cb(err);
      } else {
        let schema = getData(data);
        let city = schema.city;
        Req.wikiRequest(city, (err, data) => {
          if (err) {
            cb(err);
          } else {
            schema.description = wikiParse(data);
            schema.wiki = 'https://en.wikipedia.org/wiki/' + city.replace(' ', '_');
            cb(null, schema);
          }
        });
      }
    });
  } else {
    let customCityList = [];
    Req.generalRequest(url, (err, data) => {
      if (err) {
        throw err;
      }
      customCityList = JSON.parse(data).slugs;
      cityDataBuilder('', cb, customCityList);
    });
  }
  // else do similar, but something like this....
//   let city = cityList[Math.floor(Math.random() * cityList.length)];
//   Req.generalRequest(url, (err, data) => {
//     if (err) {
//       cb(err);
//     } else {
//       let schema = getData(data);
//       let city = schema.city;
//       Req.wikiRequest(city, (err, data) => {
//         if (err) {
//           cb(err);
//         } else {
//           schema.description = wikiParse(data);
//           schema.wiki = 'https://en.wikipedia.org/wiki/' + city.replace(' ', '_');
//           cb(null, schema);
//         }
//       });
//     }
//   });
// }
}

module.exports = cityDataBuilder;
