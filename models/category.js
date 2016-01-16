var knex = require('../db');
module.exports = {
    table_name: 'categories',
    getCategories: function(res) {
        knex.select('*').from('categories')
            .then(function(rows) {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(rows));
            }).catch(function(error) {
            return error;
        });
    }
};