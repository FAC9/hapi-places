function parseWiki (city) {
  if (typeof city !== 'object') city = JSON.parse(city);
  var html = Object.keys(city.query.pages).map((item) => { return city.query.pages[item]; })[0];
  var extract = html.extract;
  var title = html.title;

  if (extract.substring(0, 4) == '<ul>') {
    return `${title} is a fantastic city...`;
  }
  // var html = Object.values(city.query.pages)[0].extract;
  extract = extract.replace(/<(.|\n)*?>/g, '');
  extract = extract.split(/\.\s(?=[A-Z])/).slice(0, 3).join('. ') + '.';
  // extract = extract.replace(/(\w*\s){1,2}([\[\(].*[\]\)])(.*)/, '$3');
//  console.log(html);
  return `${extract}`;
}

module.exports = parseWiki;
