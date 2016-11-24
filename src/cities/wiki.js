function parseWiki (city) {
  if (typeof city === 'string') {
    if (city.indexOf('is a city in') > -1) {
      return city;
    } else {
      city = JSON.parse(city);
    }
  }
  // get wikipedia text from json object
  let wikiFullTextHtml = Object.keys(city.query.pages).map((item) => { return city.query.pages[item]; })[0].extract;

  // regex to remove html tags from wikipedia text
  let wikiFullTextParsed = wikiFullTextHtml.replace(/<(.|\n)*?>/g, '');

  // regex to extract the first 3 sentences from wikipedia text
  let wikiExtract = wikiFullTextParsed.split(/\.\s(?=[A-Z])/).slice(0, 3).join('. ') + '.';

  return wikiExtract;
}

module.exports = parseWiki;
