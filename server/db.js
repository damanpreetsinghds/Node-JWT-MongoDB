'use-strict'


/**
 * Local imports*/

var dbUtils = require('../utils/dbUtils.js');
var logManager = require('../utils/log-manager.js');
var constant = require('../helper/constant.js');
var security = require('../utils/security.js');
var authentication = require('../authentication/authenticator.js');

/**
 * Global vars
 * */
var logger = logManager.getLogger();


exports.authenticate = function (username, password, cb) {
    logger.info('[db] authenticate', username, password);

    try {
        var tableName = constant.collections.USER_INFO_COLLECTION;
        dbUtils.getConnection(function (db) {
            db.collection(tableName).findOne({'username': username}, function (err, user) {
                // if there are any errors, return the error

                if (err) {
                    return cb(err, null);
                }

                if (user) {
                    if (security.comparePassword(password, user['password'])) {
                        var token = authentication.authenticationToken(user['_id'].toString());
                        return cb(null, token)
                    } else {
                        return cb('IncorrectPassword', null);
                    }
                }
                return cb('MissingUser', null);


            });
        });
    } catch (e) {
    }

};

exports.signup = function (username, password, cb) {

    try {
        var tableName = constant.collections.USER_INFO_COLLECTION;
        dbUtils.getConnection(function (db) {
            db.collection(tableName).findOne({'username': username}, function (err, user) {
                // if there are any errors, return the error

                if (err) {
                    return cb(err, null);
                }

                if (user) {
                    return cb('ExistingUser', null);
                }

                var data = {
                    username: username,
                    password: security.encryptPassword(password)
                };

                db.collection(tableName).insertOne(data, function (err, result) {
                    if (err) {
                        return cb(err, null);
                    }
                    return cb(null, true);
                });
            });

        });
    } catch (e) {
    }
};

