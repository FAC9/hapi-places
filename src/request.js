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
function cityImageCheck (currentImgUrl, country, cb) {
  Req(currentImgUrl, (err, res, body) => {
    if (err) cb(null);
    else if (res.statusCode >= 400) {
      Req(`https://nomadlist.com/api/v2/list/countries/${country.toLowerCase()}`, (err, res, newBody) => {
        if (err) cb(null);
        else {
          let parsedResponse = JSON.parse(newBody);
          let newImg = `https://nomadlist.com/${parsedResponse.result[0].media.image['1500']}`;
          console.log('No Image Available, replaced with Country image at: ', newImg);
          cb(newImg);
        }
      });
    } else {
      cb(currentImgUrl);
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
  cityImageCheck
};
