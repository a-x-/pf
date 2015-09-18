/* doc: https://docs.mongodb.org/getting-started/node/import-data/ */

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var assert = require('assert');

var url = 'mongodb://localhost:27017/pf';
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");

    var record =    {
        "year" : 2015,
        "mounth" : 9,
        "caterogy" : "transport",
        "tags" : [
            "metro",
            "troyka"
        ],

        "isRepeated" : true,
        "repeatUntil" : Infinity,
        "value" : 1400,
        "repeatPeriod" : "1m",
        "comment" : "Жаль, нет автоматизации",
        "dayMonth" : "17.09"
    };

    // insertDocument(db, record, function() {
    //     db.close();
    // });

    // db.adminCommand( { listDatabases: 1 } );

    findRestaurants(db, function() {
        db.close();
    });

});

var findRestaurants = function(db, callback) {
   console.log('findRestaurants');
   var cursor =db.collection('pf').find( );
   console.log('cursor', db.collection('pf').count(function(err, count) {
       assert.equal(null, err);
       console.log('count');
   }));
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      console.log('*');
      if (doc != null) {
         console.dir(doc);
      } else {
      console.log('end');
         callback();
      }
   });
};


var insertDocument = function(db, record, callback) {
    db.collection('pf').insertOne( record, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the restaurants collection.");
        callback(result);
    });
};

