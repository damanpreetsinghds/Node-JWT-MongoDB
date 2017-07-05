var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

/**
 * Local imports*/
var logManager = require('../utils/log-manager.js');
var apiHandler = require('./apiHandler');

/**
 * Global vars*/
var logger = logManager.getLogger();


router.post('/authenticate', apiHandler.user.authenticate);

router.post('/signup', apiHandler.user.signup);


router.get('/', apiHandler.user.homepage);


module.exports = router;
