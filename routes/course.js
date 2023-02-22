'use strict';

const express = require('express');
const router = express.Router();

const db = require("../mysqlModels");
const{ 
    getCourseDetails, getCourseStudent, addCourseDetails
} = require('../modules/course/courseController');

router.get('/all', getCourseDetails);
router.post('/add', addCourseDetails);
router.get('/student', getCourseStudent);

module.exports = router;