const Req = require('request');

function nomadUrlBuilder (query) {
  query = (query[0] === '/') ? query.slice(1) : query;
  const nomad = 'https://nomadlist.com/api/v2/list/cities/';
  return `${nomad}${query}`;
}

function nomadCountryUrlBuilder (country) {
  return 'https://nomadlist.com/api/v2/list/countries/' + country.toLowerCase();
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

function cityImageCheck (currentImgUrl, country, cb) {
  Req(currentImgUrl, (err, res) => {
    if (err) cb(null);
    else if (res.statusCode >= 400) {
      Req(nomadCountryUrlBuilder(country), (err, res, body) => {
        if (err) cb(null);
        else {
          let parsed = JSON.parse(body);
          let newImg = `https://nomadlist.com${parsed.result[0].media.image['1500']}`;
          cb(newImg);
        }
      });
    } else {
      cb(currentImgUrl);
    }
  });
}

module.exports = {
  nomadUrlBuilder,
  nomadCountryUrlBuilder,
  nomadRequest,
  cityImageCheck
};
