'use strict';

const express = require('express');
const router = express.Router();

const { uploadFile } = require('../utilities/uploadFile');
const{
    uploadSingle
} = require('../modules/uploadaws/uploadAwsController');

router.post("/uploadimage",uploadFile, uploadSingle);


module.exports = router;