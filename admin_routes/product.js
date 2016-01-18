var Product = require(global.dirname + '/models/product');
module.exports = function(app) {
    var path = require('path');
    app.get('/admin/products', function (req, res) {
        res.sendFile(path.join(global.dirname + global.admin_view + '/product/list.html'));
    });
    app.get('/admin/product/add', function (req, res) {
        res.sendFile(path.join(global.dirname + global.admin_view + '/product/add.html'));
    });
    app.post('/admin/product/add', function (req, res) {
        Product.save(res, req);
    });
    app.get('/admin/products/result', function (req, res) {
        Product.getProducts(res);
    });
    app.get('/admin/product/fetch', function (req, res) {
        Product.fetch(req, res);
    });
};