var express = require('express');
var knex = require('./db');

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static('admin/js'));
var routes = require('./routes');

console.log(__dirname);
app.use('/', routes);
app.listen(3000);