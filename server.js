var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static('frontend'));
app.use(express.static('admin/js'));

app.engine('html', require('ejs').renderFile);

app.use(session({
    secret: 'ssshhhhh',
    resave: true,
    saveUninitialized: true
}));

global.dirname = __dirname;
global.admin_view = '/admin/views';

var myLogger = function (req, res, next) {
    //sess = req.session;
    ////Session set when user Request our app via URL
    //if(sess.email) {
    //    /*
    //     * This line check Session existence.
    //     * If it existed will do some action.
    //     */
    //    next();
    //} else{
    //    //res.render('/admin');
    //    res.sendFile(path.join(global.dirname + '/admin/views/login.html'));
    //}
    next();
};
app.use(myLogger);

//var path = require('path');
//var sess;
//app.get('/admin',function(req, res){
//
//});

var frontendRt = require('./frontend_routes/index')(app);

var adminRt = require('./admin_routes/index')(app);
var adminCategoryRt = require('./admin_routes/category')(app);
var adminProductRt = require('./admin_routes/product')(app);

app.listen(3000);