const test = require(`tape`);
const handlebars = require(`../public/views/handlebars.js`);

test(`Can fill the page by passing an object`, (t) => {
  const schema = {
    city: 'MADRID',
    cost: '$1000',
    temp: '30C',
    internet: 'good',
    air: '78%',
    coffee: '$2',
    description: 'Madrid, what a town. A hell of a town. A town that never slows down ;)'
  };
  var html = handlebars.fill(schema);
  t.ok(html.indexOf('MADRID') > -1, 'should fill city name');
  t.ok(html.indexOf('$1000') > -1, 'should fill city cost');
  t.ok(html.indexOf('30C') > -1, 'should fill city temp');
  t.ok(html.indexOf('good') > -1, 'should fill internet quality');
  t.ok(html.indexOf('78%') > -1, 'should fill air quality wow, what a test!');
  t.ok(html.indexOf('$2') > -1, 'should fill coffee price');
  t.ok(html.indexOf('Madrid, what a town. A hell of a town. A town that never slows down') > -1, 'should fill description');
  t.end();
});
