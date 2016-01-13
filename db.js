module.exports = (function() {
    var knex = require('knex')({
        client: 'mysql',
        connection: {
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'cablink',
            charset  : 'utf8'
        }
    });
    return knex;
})();

