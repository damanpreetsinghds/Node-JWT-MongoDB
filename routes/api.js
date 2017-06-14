var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

/**
 * Local imports*/
var logManager = require('../utils/log-manager.js');
var authentication = require('../authentication/authenticator.js');
var apiHandler = require('./apiHandler');

/**
 * Global vars*/
var logger = logManager.getLogger();


router.post('/authenticate', apiHandler.user.authenticate);


router.get('/', authentication.ensureAuthenticated, apiHandler.user.homepage);

module.exports = router;
