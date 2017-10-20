var MongoClient = require('mongodb').MongoClient;

function getAllCuratedLists() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(process.env.FH_MONGO_DB, (err, db) => {
      if (err) {
        reject(err);
      }
      db.collection('curatedlists').find().toArray((findErr, docs) => {
        if (findErr) {
          console.log('could not get curated lists');
          return console.log(findErr);
        }
        return resolve(docs);
      });
    });
  });
}

var dbFunctions = {
  getAllCuratedLists: getAllCuratedLists,
};

module.exports = dbFunctions;
