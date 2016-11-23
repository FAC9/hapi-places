function parseWiki (city) {
  if (city.indexOf('is a magical place') > -1) return city;
  if (typeof city !== 'object') city = JSON.parse(city);
  var html = Object.keys(city.query.pages).map((item) => { return city.query.pages[item]; })[0].extract;
  // var html = Object.values(city.query.pages)[0].extract;
  html = html.replace(/<(.|\n)*?>/g, '');
  html = html.split(/\.\s(?=[A-Z])/).slice(0, 3).join('. ') + '.';
//  console.log(html);
  return html;
}

module.exports = parseWiki;
