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


module.exports.ensureAuthenticated = function (req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.access_token || req.headers['x-access-token'];
    logger.info('[authenticator] token ', token);
    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, config.secretKey, function (err, decoded) {
            if (err) {
                return res.json({success: false, message: 'Failed to authenticate token.'});
            } else {
                // if everything is good, save to request for use in other routes
                req.user = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(401).send({
            success: false,
            message: 'missing token'
        });

    }
};

module.exports.authenticationToken = function (user) {

    return jwt.sign(user, config.secretKey, {
        expiresIn: 60 * 60 // expires in 1 hour
    });

}
