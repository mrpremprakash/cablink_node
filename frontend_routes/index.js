module.exports = function (app) {
    var path = require('path');
    app.get('/', function (req, res) {
        res.render(path.join(global.dirname + '/frontend/layout.html'));
    });
    app.get('/index', function(req, res) {
        res.sendFile(path.join(global.dirname + '/frontend/views/index.html'));
    });
    app.get('/products', function(req, res) {
        res.sendFile(path.join(global.dirname + '/frontend/views/products.html'));
    });
};