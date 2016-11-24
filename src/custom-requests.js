let firstPart = 'https://nomadlist.com/api/v2/filter/city?c=1&f1_target=';

let urlParams = {
  living_cost: 'short_term_cost_in_usd&f1_type=lt&f1_max=',
  temp_warmer: 'temperatureC&f1_type=gt&f1_min=',
  temp_colder: 'temperatureC&f1_type=lt&f1_max=',
  internet: 'internet_speed&f1_type=gt&f1_min=',
  safety: 'safety_level&f1_type=gt&f1_min=',
  coffee: 'coffee_in_cafe&f1_type=lt&f1_max='
};

var convertData = {

  // convert from percentage value to a score from 0-5
  safety: function (value) { return value / 20; }
};

function makeUrl (type, val) {
  if (convertData[type]) { val = convertData[type](val); }
  return `${firstPart}${urlParams[type]}${val}`;
}

module.exports = makeUrl;
