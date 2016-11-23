function getValues (json) {
  if (typeof json !== 'object') json = JSON.parse(json);
  const USDtoGBP = 0.805886193;
  var returnObj = {};
  returnObj.city = `${json.result[0].info.city.name}`;
  returnObj.country = `${json.result[0].info.country.name}`;
  returnObj.coffee = `£${(json.result[0].cost.coffee_in_cafe.USD * USDtoGBP).toFixed(2)}`;
  returnObj.cost = `£${Number((json.result[0].cost.nomad.USD * USDtoGBP).toFixed(2)).toLocaleString()}`;
  returnObj.temp = `${json.result[0].info.weather.temperature.celsius}°C`;
  returnObj.image = `https://nomadlist.com${json.result[0].media.image['1500']}`;
  returnObj.safety = `${(json.result[0].scores.safety) * 100}%`;
  returnObj.internet = `${json.result[0].info.internet.speed.download} MBPS`;

  return returnObj;
}

module.exports = getValues;
