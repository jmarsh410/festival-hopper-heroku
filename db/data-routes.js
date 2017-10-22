var dbFunctions = require('./database-functions');

var dataRoutes = [
  {
    url: '/curated',
    componentName: 'categories',
    data: dbFunctions.getAllCuratedLists,
  },
];

module.exports = dataRoutes;
