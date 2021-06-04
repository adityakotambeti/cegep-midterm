var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var wordCheck = require('./routes/wordCheck');
var bodyParser = require('body-parser')


var app = express();

// parse application/json
app.use(bodyParser.json())

app.use('/api/wordCheck', wordCheck);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;