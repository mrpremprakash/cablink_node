module.exports = (function() {
    'use strict';
    var router = require('express').Router();
    var path = require('path');

    router.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    });
    router.get('/dashboard', function(req, res) {
        res.sendFile(path.join(__dirname + '/views/dashboard.html'));
    });
    router.get('/categories', function(req, res) {
        res.sendFile(path.join(__dirname + '/views/category/list.html'));
    });
    router.get('/category/add', function(req, res) {
        res.sendFile(path.join(__dirname + '/views/category/add.html'));
    });
    router.post('/category/add', function(req, res) {
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
    router.get('/categories/result', function(req, res) {
        new global.category()
            .fetchAll()
            .then(function(model) {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(model));
            });
    });
    router.get('/products', function(req, res) {
        res.sendFile(path.join(__dirname + '/views/product/list.html'));
    });
    router.get('/product/add', function(req, res) {
        res.sendFile(path.join(__dirname + '/views/product/add.html'));
    });
    router.post('/product/add', function(req, res) {
        global.product.where('name', req.body.name).count('product_id')
            .then(function(count) {
                if(!count) {
                    global.product.forge({
                            name: req.body.name,
                            category_id: req.body.category_id,
                            status: req.body.status,
                            price: req.body.price,
                            img: 'products/default.png',
                        })
                        .save()
                        .then(function (product) {
                            new global.product()
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
    router.get('/products/result', function(req, res) {
        new global.product()
            .fetchAll()
            .then(function(model) {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(model));
            });
    });
    return router;
})();