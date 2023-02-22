'use strict';


const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const http = require('http');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');
const nodemailer =require('nodemailer');

const passportConfig = require('./config/passportConfig');
// require('./mongoModels');
const mysqlModels = require('./mysqlModels');
const routes = require('./routes');
const loggerUtil = require('./utilities/logger');
const responseUtil = require('./utilities/response');
const multer = require('multer');
const upload = multer();


const app = express();
/*-- CORS --*/
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization, Content-Type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});
const server = http.createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit: 1000000
}));
app.use(express.json({
  limit: '50mb'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb', extended:false }));
app.use(compression());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(morgan('combined', { stream: loggerUtil.stream }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
passportConfig.serializeUser();
passportConfig.deserializeUser();
passportConfig.configureStrategy();
app.use(routes);
app.use(upload.array()); 

app.use((req, res, next) => {
  responseUtil.notFoundErrorResponse(res, req);
});

mysqlModels.sequelize.sync().then(function () {
  loggerUtil.log({
    message: 'Mysql DB connected',
    level: 'info'
  });
  const port = process.env.PORT || 3000;
  server.listen(port, (error) => {
    if (error) {
      loggerUtil.error({
        message: `Server error - ${error.toString()}`,
        level: 'error'
      });
    } else {
      loggerUtil.log({
        message: `Server listening at port ${port}`,
        level: 'info'
      });
    }
  });
});
