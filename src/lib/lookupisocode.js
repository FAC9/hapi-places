const codes = require('./countries.js');

function lookupIsoCode (countryName) {
  let country = codes.find(cn => cn['Name'] === countryName);
  let isoCode = '';
  if (country) {
    isoCode = country['Code'];
  }
  // let isoCode = (country['Code'] || '');  //country can be undefined
  return isoCode.toLowerCase();
}

module.exports = lookupIsoCode;
