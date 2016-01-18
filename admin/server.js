var express = require('express');
var knex = require('./db');
var bookshelf = require('bookshelf')(knex);

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
var routes = require('./routes');
app.use('/', routes);
app.listen(3000);