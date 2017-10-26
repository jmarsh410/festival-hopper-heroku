var dbFunctions = require('./database-functions');

var dataRoutes = [
  {
    url: '/curated',
    propName: 'categories',
    data: dbFunctions.getAllCuratedLists,
  },
  {
    url: '/curated/:listId',
    propName: 'beerList',
    data: dbFunctions.getCuratedBeerList,
  }
];

module.exports = dataRoutes;
