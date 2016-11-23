function getValues (json) {
  if (typeof json !== 'object') json = JSON.parse(json);
  var returnObj = {};
  returnObj.city = `${json.result[0].info.city.name}`;
  returnObj.country = `${json.result[0].info.country.name}`;
  returnObj.coffee = `$${json.result[0].cost.coffee_in_cafe.USD}`;
  returnObj.cost = `$${json.result[0].cost.nomad.USD}`;
  returnObj.temp = `${json.result[0].info.weather.temperature.celsius}°C`;
  returnObj.image = `https://nomadlist.com${json.result[0].media.image['1500']}`;
  returnObj.safety = `${(json.result[0].scores.safety) * 100}%`;
  returnObj.internet = `${json.result[0].info.internet.speed.download} MBPS`;

  return returnObj;
}

module.exports = getValues;
