var express = require('express');
var knex = require('./db');
var bookshelf = require('bookshelf')(knex);
//var Category = require('./models/category');
var Category = bookshelf.Model.extend({
    tableName: 'categories'
});
var Product = bookshelf.Model.extend({
    tableName: 'products'
});
global.category = Category;
global.product = Product;
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
var routes = require('./routes');
app.use('/', routes);
app.listen(3000);