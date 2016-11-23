const Req = require('request');

function nomadUrlBuilder (query) {
  query = (query[0] === '/') ? query.slice(1) : query;
  const nomad = 'https://nomadlist.com/api/v2/list/cities/';
  return `${nomad}${query}`;
}

function wikiUrlBuilder (city) {
  return `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&titles=${city}&format=json`;
}

function nomadRequest (query, cb) {
  Req(nomadUrlBuilder(query), (err, res, body) => {
    if (err) {
      cb(err);
    } else if (JSON.parse(body).result[0].info.city.name === null) {
      cb('Invalid data returned', null);
    } else {
      cb(null, body);
    }
  });
}

function wikiRequest (city, cb) {
  Req(wikiUrlBuilder(city), (err, res, body) => {
    if (err) {
      cb(err);
    } else if (JSON.parse(body).query.pages[-1]) {
      wikiUrlBuilder(city, (err, res, body) => {
        if (err) {
          cb(err);
        } else if (JSON.parse(body).query.pages[-1]) {
          cb('Invalid data returned', null);
        } else {
          cb(null, body);
        }
      });
    } else {
      cb(null, body);
    }
  });
}

function lookupIsoCode (countryName) {
  const codes = require('./countries.js');
  let country = codes.find(cn => cn['Name'] === countryName);
  let isoCode = (country['Code'] || '');
  return isoCode.toLowerCase();
}

function generalRequest (url, cb) {
  Req(url, (err, res, body) => {
    if (err) { throw err; }
    cb(null, body);
  });
}

module.exports = {
  nomadRequest,
  wikiRequest,
  generalRequest,
  wikiUrlBuilder,
  nomadUrlBuilder,
  lookupIsoCode
};
