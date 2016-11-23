const request = require('request');
const allUrls = require('./citylist.js').slice(300, 500);

function nomadRequest (query, cb) {
  request(query, (err, res, body) => {
    if (err) {
      cb(err);
    } else {
      cb(null, {body: body, res: res});
    }
  });
}
let missingWiki = 0;
function checkUrl () {
  while (allUrls.length > 0) {
    let url = `https://nomadlist.com/api/v2/list/cities${allUrls.shift()}`;
    nomadRequest(url, (err, data) => {
      if (err) throw err;
      let cityName = JSON.parse(data.body).result[0].info.city.name;
      let wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&titles=${cityName}&format=json`;
      nomadRequest(wikiUrl, (err, data) => {
        if (err) throw err;
        let cityMatches = data.body.split(/city/ig).length - 1;
        if (cityMatches < 1) {
          console.log('error: ' + data.res.statusCode + ' ' + cityName + ' ' + wikiUrl);
          missingWiki++;
          console.log(missingWiki);
        }
      });
    });
    checkUrl();
  }
}

checkUrl();
// });
