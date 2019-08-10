const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const checkAuth = require('./utils/auth.js');

require('dotenv').config();
port = process.env.PORT || 5000;

const uristring = 
  process.env.MONGODB_URI || 
'mongodb://localhost:27017/openweather';

//Instantiate express
const app = express();

mongoose.connect(uristring);

//use javascript global promise instead of deprecated mongoose
mongoose.Promise = global.Promise;

//log database errors to console
mongoose.connection.on('error', console.error.bind(console, "MongoDB Connection error"));

app.locals.WEATHER_API = process.env.WEATHER_API;

app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: true}));

app.use(checkAuth);

require('./routes/weather.js')(app);

// Listen on port
app.listen(port, function () {
    console.log('Open Weather listening on port ' + port);
});