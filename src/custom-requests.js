const url = 'https://nomadlist.com/api/v2/filter/city?c=1&f1_target=';
const USDtoGBP = 0.805886193;

const urlParams = {
  living_cost: 'short_term_cost_in_usd&f1_type=lt&f1_max=',
  temp_warmer: 'temperatureC&f1_type=gt&f1_min=',
  temp_colder: 'temperatureC&f1_type=lt&f1_max=',
  internet: 'internet_speed&f1_type=gt&f1_min=',
  safety: 'safety_level&f1_type=gt&f1_min=',
  coffee: 'coffee_in_cafe&f1_type=lt&f1_max='
};

const convertDataForQuery = {

  // convert from percentage value to a score from 0-5
  safety: function (value) { return value / 20; },
  living_cost: function (value) {
    return Math.ceiling(value / USDtoGBP);
  },
  coffee: function (value) { Math.ceiling(value / USDtoGBP); }
};

function makeUrl (type, val) {
  if (convertDataForQuery[type]) {
    val = convertDataForQuery[type](val);
  }
  let fullUrl = `${url}${urlParams[type]}${val}`;
  return fullUrl;
}

module.exports = makeUrl;
