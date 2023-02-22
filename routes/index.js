'use strict';

const express = require('express');
const router = express.Router();

const data = require('../modules/data');
const student = require('./student');
const user = require('./user');
const course = require('./course');
const sendmail = require('./sendmail')
const upload = require('./upload');
const redisdatas = require('./redisdatas');
const authorize = require('./authorize');
// const { authorize } = require('passport');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/get_data', data.getData);
router.post('/get_data', data.getData);

router.use('/user', user);
router.use('/student', student);
router.use('/course',course);
router.use('/sendmail', sendmail);
router.use('/upload', upload);
router.use("/redisdata",redisdatas)
router.use('/authorize', authorize)
module.exports = router;
