var Category = require(global.dirname + '/models/category');
module.exports = function(app) {
    var path = require('path');
    app.get('/admin/categories', function (req, res) {
        res.sendFile(path.join(global.dirname + global.admin_view + '/category/list.html'));
    });
    app.get('/admin/category/add', function (req, res) {
        res.sendFile(path.join(global.dirname + global.admin_view + '/category/add.html'));
    });
    app.post('/admin/category/add', function (req, res) {
        if(req.body.parent_id) {
            Category.getLevel(req.body.parent_id, function(level) {
                req.body.level = level;
                Category.save(res, req, function () {
                    Category.getCategories(res);
                });
            });
        } else {
            req.body.level = 0;
            Category.save(res, req, function () {
                Category.getCategories(res);
            });
        }
    });
    app.get('/admin/categories/result', function (req, res) {
        Category.getCategories(res);
    });
};