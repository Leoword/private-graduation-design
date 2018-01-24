'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = module.exports = express();
const router = require('./route');

app.use(cookieParser());
app.use(bodyParser.json({ type: '*/json', limit: '32mb'}));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
}));

app.use('/api', router);