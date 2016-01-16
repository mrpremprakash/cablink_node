var knex = require('../db');
module.exports = {
    table_name: 'products',
    getProducts: function(res) {
        knex.select('*').from('products')
            .then(function(rows) {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(rows));
            }).catch(function(error) {
            return error;
        });
    },
    productExists: function(params) {
        knex('products').where({
            name: params.name,
            category_id:  params.category_id
        })
        .select('product_id')
        .then(function(row) {
            console.log(row);
        })
    },
    save: function(res, req) {
        this.productExists({
            name: req.body.name,
            category_id: req.body.category_id
        });
        knex('products').insert({
            name: req.body.name,
            category_id: req.body.category_id,
            status: req.body.status,
            price: req.body.price,
            img: 'products/default.png'
        }).then(function(row) {
            var result = {
                status: 1,
                message: 'Product added successfully'
            };
            res.setHeader('Content-Type', 'application/json');
            res.send(result);
        }).catch(function(error) {
            var result = {
                status: 0,
                message: error
            };
            res.setHeader('Content-Type', 'application/json');
            res.send(result);
        });


    }
};

//global.product.where('name', req.body.name).count('product_id')
//    .then(function(count) {
//        if(!count) {
//            global.product.forge({
//                    name: req.body.name,
//                    category_id: req.body.category_id,
//                    status: req.body.status,
//                    price: req.body.price,
//                    img: 'products/default.png',
//                })
//                .save()
//                .then(function (product) {
//                    new global.product()
//                        .fetchAll()
//                        .then(function(model) {
//                            res.setHeader('Content-Type', 'application/json');
//                            res.send(JSON.stringify(model));
//                        });
//                })
//                .catch(function (err) {
//                    res.status(500).json({error: true, data: {message: err.message}});
//                });
//        } else {
//            res.json({error: true, data: {message: "'" + req.body.name +"' already exists"}});
//        }
//    });
