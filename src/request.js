const nomadCountryUrlBuilder = require('./lib/nomadrequest').nomadCountryUrlBuilder;
const nomadUrlBuilder = require('./lib/nomadrequest').nomadUrlBuilder;
const nomadRequest = require('./lib/nomadrequest').nomadRequest;
const cityImageCheck = require('./lib/nomadrequest').cityImageCheck;
const wikiUrlBuilder = require('./lib/wikirequest').wikiUrlBuilder;
const wikiRequest = require('./lib/wikirequest').wikiRequest;
const lookupIsoCode = require('./lib/lookupisocode');
const generalRequest = require('./lib/generalRequest');

module.exports = {
  nomadRequest,
  nomadCountryUrlBuilder,
  wikiRequest,
  generalRequest,
  wikiUrlBuilder,
  nomadUrlBuilder,
  cityImageCheck,
  lookupIsoCode
};
