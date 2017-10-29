var MongoClient = require('mongodb').MongoClient;

function getAllCuratedLists() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(process.env.MONGODB_URI, (err, db) => {
      if (err) {
        reject(err);
      }
      // find 
      db.collection('curatedlists').find().toArray((findErr, docs) => {
        if (findErr) {
          console.log('could not get curated lists');
          return console.log(findErr);
        }
        var mappedDocs = docs.map(function(doc){
          delete doc.beers;
          return doc;
        });
        return resolve(mappedDocs);
      });
    });
  });
}

function getCuratedBeerList(listId) {
  console.log(listId);
  // in SSR listID will be a match object. looks like this: { path: '/curated', url: '/curated', isExact: true, params: {} }
  if (listId && listId.params) {
    listId = listId.params.listId;
  }
  return new Promise((resolve, reject) => {
    // requires that a listid be provided as a parameter
    if (!listId) {
      reject('a listid query was not provided ');
    }
    MongoClient.connect(process.env.MONGODB_URI, (err, db) => {
      if (err) {
        reject(err);
      }
      db.collection('curatedlists').find({ id: listId }).next((findErr, result) => {
        if (findErr) {
          return reject(findErr);
        }
        console.log(result);
        return resolve(result);
      });
    });
  });
}

var dbFunctions = {
  getAllCuratedLists: getAllCuratedLists,
  getCuratedBeerList: getCuratedBeerList,
};

module.exports = dbFunctions;
