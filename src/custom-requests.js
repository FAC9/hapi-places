let firstPart = 'https://nomadlist.com/api/v2/filter/city?c=1&f1_target=';

let parts = {
  living_cost: 'short_term_cost_in_usd&f1_type=lt&f1_max=',
  temp_warmer: 'temperatureC&f1_type=gt&f1_min=',
  temp_colder: 'temperatureC&f1_type=lt&f1_max=',
  internet: 'internet_speed&f1_type=gt&f1_min=',
  safety: 'safety_level&f1_type=gt&f1_min=',
  coffee: 'coffee_in_cafe&f1_type=lt&f1_max='
};

function makeUrl (type, val) {
  return `${firstPart}${parts[type]}${val}`;
}

module.exports = makeUrl;

// `https://nomadlist.com/api/v2/filter/city?c=1&f1_target=short_term_cost_in_usd&f1_type=lt&f1_max=${cost}`
//
// `https://nomadlist.com/api/v2/filter/city?c=1&f1_target=temperatureC&f1_type=gt&f1_min=${temp}`;
// `https://nomadlist.com/api/v2/filter/city?c=1&f1_target=temperatureC&f1_type=lt&f1_max=${temp}`;
//
// `https://nomadlist.com/api/v2/filter/city?c=1&f1_target=internet_speed&f1_type=gt&f1_min=${internet}`;
//
// `https://nomadlist.com/api/v2/filter/city?c=1&f1_target=safety_level&f1_type=gt&f1_min=${safety}`;
//
// `https://nomadlist.com/api/v2/filter/city?c=1&f1_target=coffee_in_cafe&f1_type=lt&f1_max=${maxCoffee}`
