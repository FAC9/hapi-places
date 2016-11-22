function getValues (json) {
  var returnObj = {};
  returnObj.cityName = `${json.result[0].info.city.name}`;
  returnObj.country = `${json.result[0].info.country.name}`;
  returnObj.coffee = `$${json.result[0].cost.coffee_in_cafe.USD}`;
  returnObj.living_cost = `$${json.result[0].cost.nomad.USD}`;
  returnObj.temp = `${json.result[0].info.weather.temperature.celsius}°C`;
  returnObj.image = `https://nomadlist.com${json.result[0].media.image['1500']}`;
  returnObj.safety = `${(json.result[0].scores.safety) * 100}%`;
  returnObj.internetSpeed = `${json.result[0].info.internet.speed.download} MBPS`;
  // var result = json.result;
  // returnObj.living_cost = `$${result[0].cost.local.USD}`;
  // returnObj.image = `http://nomadlist.com/${amsterdam.result[0].media.image['1500']}`;
  // console.log(returnObj);
  return returnObj;
}

module.exports = getValues;
