var knex = require(global.dirname + '/db');
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
        knex('products').insert({
            name: req.body.name,
            category_id: req.body.category_id,
            status: req.body.status,
            price: req.body.price,
            description: req.body.description,
            img: 'products/product-1.jpg'
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
    },
    fetch: function(req, res) {
        var product_name = req.query.term.replace("'", "\\'").toLowerCase();
        knex('products')
            .whereRaw("LOWER(name) LIKE '%" + product_name + "%'")
            .select('*')
            .then(function(rows) {
                res.setHeader('Content-Type', 'application/json');
                res.send(rows);
            })
    }
};