const Req = require('request');

function wikiUrlBuilder (city) {
  return `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&titles=${city}&format=json`;
}

function wikiRequest (city, country, cb) {
  Req(wikiUrlBuilder(city), (err, res, body) => {
    let cityCheckRegEx = /city|town|capital|population|country|climate/ig;
    if (err) {
      cb(err);
    } else if (JSON.parse(body).query.pages[-1] || body.split(cityCheckRegEx).length < 2) {
      cb(null, `${city} is a city in ${country}. Click here to find about more on Wikipedia.`);
    } else {
      cb(null, body);
    }
  });
}

module.exports = {
  wikiUrlBuilder,
  wikiRequest
};
