'use-strict'


/**
 * Local imports*/
var logManager = require('../../utils/log-manager.js');
var db = require('../../server/db.js');

/**
 * Global vars*/
var logger = logManager.getLogger();


exports.homepage = function (req, res) {
    res.json({message: 'Authentication successful !'});
};


exports.authenticate = function (req, res) {

    var username = req.body.username;
    var password = req.body.password;

    if (!username || !password) {
        return res.json({message: 'Missing password'});
    }

    db.authenticate(username, password, function (err, data) {

        if (err == 'IncorrectPassword') {
            return res.send({success: false, message: 'Invalid credentials.'})
        }
        if (err) {
            return res.send({success: false, error: err});
        }
        res.json({success: true, token: data['token']})
    })

}