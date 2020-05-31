const countries = require('../components/countries/1.network');

const routes = function (server) {
  server.use('/countries_api', countries);
};

module.exports = routes;
