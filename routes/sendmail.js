'use strict';

const express = require('express');
const router = express.Router();

const nodemailer =require('nodemailer');

const {
    sendMail
} = require("../modules/mail/mailController");

router.get('/send',sendMail);

module.exports = router;