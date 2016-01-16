var Category = require('./models/category');
var Product = require('./models/product');
module.exports = (function() {
    'use strict';
    var router = require('express').Router();
    var path = require('path');

    router.get('/admin', function(req, res) {
        res.sendFile(path.join(__dirname + '/admin/index.html'));
    });
    router.get('/admin/dashboard', function(req, res) {
        res.sendFile(path.join(__dirname + '/admin/views/dashboard.html'));
    });
    router.get('/admin/categories', function(req, res) {
        res.sendFile(path.join(__dirname + '/admin/views/category/list.html'));
    });
    router.get('/admin/category/add', function(req, res) {
        res.sendFile(path.join(__dirname + '/admin/views/category/add.html'));
    });
    router.post('/admin/category/add', function(req, res) {
        global.category.where('name', req.body.name).count('category_id')
            .then(function(count) {
                if(!count) {
                    global.category.forge({
                            name: req.body.name,
                            parent_id: req.body.parent_id
                        })
                        .save()
                        .then(function (category) {
                            new global.category()
                                .fetchAll()
                                .then(function(model) {
                                    res.setHeader('Content-Type', 'application/json');
                                    res.send(JSON.stringify(model));
                                });
                        })
                        .catch(function (err) {
                            res.status(500).json({error: true, data: {message: err.message}});
                        });
                } else {
                    res.json({error: true, data: {message: "'" + req.body.name +"' already exists"}});
                }
            });

    });
    router.get('/admin/categories/result', function(req, res) {
        Category.getCategories(res);
    });
    router.get('/admin/products', function(req, res) {
        res.sendFile(path.join(__dirname + '/admin/views/product/list.html'));
    });
    router.get('/admin/product/add', function(req, res) {
        res.sendFile(path.join(__dirname + '/admin/views/product/add.html'));
    });
    router.post('/admin/product/add', function(req, res) {
        Product.save(res, req);
    });
    router.get('/admin/products/result', function(req, res) {
        Product.getProducts(res);
        //new global.product()
        //    .fetchAll()
        //    .then(function(model) {
        //        res.setHeader('Content-Type', 'application/json');
        //        res.send(JSON.stringify(model));
        //    });
    });
    return router;
})();