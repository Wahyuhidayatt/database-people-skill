var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');

// var questions = require('./routes/questions');
// var users = require('./routes/users');
// var answers = require('./routes/answers')

var app = express();
app.use(logger('dev'))
mongoose.promise = global.promise
mongoose.connect('mongodb://localhost/people-skill');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000)

// app.use('/api/answer', answers)
// app.use('/api/question', questions);
// app.use('/api/users', users)

module.exports = app
