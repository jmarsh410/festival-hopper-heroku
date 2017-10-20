var dbFunctions = require('./database-functions');

var dataRoutes = [
  {
    url: '/curated',
    data: dbFunctions.getAllCuratedLists,
  },
];

module.exports = dataRoutes;
