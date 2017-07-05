'use-strict'


/**
 * Module imports*/
var jwt = require('jsonwebtoken');
var config = require('config');
/**
 * Local imports*/

var logManager = require('../utils/log-manager.js');


/**
 * Global vars*/
var logger = logManager.getLogger();


module.exports.authenticationToken = function (user) {

    return jwt.sign(user, config.secretKey);

}
