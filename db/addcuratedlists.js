var fs = require('fs');
var path = require('path');
var MongoClient = require('mongodb').MongoClient;

var lists = require('../_curated-lists/' + path.basename(process.argv[2]));

// retrieve the items from a file, must be an array of objects
MongoClient.connect(process.env.MONGODB_URI_PRODUCTION, function(err, db) {
  if (err) {
    console.log('there was an error connecting to the database');
    console.error(err);
  }
  db.collection('curatedlists').insertMany(lists, function(dbErr, result) {
    if (dbErr) {
      console.log('there was an error when inserting documents');
      console.error(dbErr);
    }
    if (result) {
      console.log(result.insertedCount + ' list documents were added to the curatedlists collection');
    }
    db.close();
  });
});

  
