'use-strict';

/**
 * Module imports*/
var MongoClient = require('mongodb').MongoClient;
var config = require('config');

/**
 *  Global vars
 * */
var db;

module.exports.getConnection = function (callback) {
    if (!db) {
        MongoClient.connect(config.MONGO_URI, function (err, database) {
            if (err) {
                throw err;
            }
            db = database;
            callback(db);
        });
    } else {
        callback(db);
    }
};