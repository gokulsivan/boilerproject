'use strict';

const express = require('express');
const router = express.Router();


const { 
    generateToken, checkSession
} = require('../utilities/redis');
const { 
    signUp , authenticateUser , showUser 
} = require(".././modules/dataauth/dataauthController");

router.post('/signup', signUp);
router.post('/login', authenticateUser, generateToken);
router.get('/showuser', checkSession, showUser);

module.exports = router;