module.exports = function (app) {
    var path = require('path');
    app.get('/admin', function (req, res) {
        res.sendFile(path.join(global.dirname + '/admin/views/login.html'));
    });
    app.get('/admin/dashboard', function(req, res) {
        res.sendFile(path.join(global.dirname + '/admin/index.html'));
    });
};