var knex = require( global.dirname +'/db');
module.exports = {
    table_name: 'categories',
    getCategories: function(res) {
        knex.select('*').from(this.table_name)
            .then(function(rows) {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(rows));
            }).catch(function(error) {
            return error;
        });
    },
    save: function(res, req, cb) {
        knex(this.table_name).insert({
            name: req.body.name,
            parent_id: req.body.parent_id,
            level: req.body.level,
            status: 'active'
        }).then(function(row) {
            cb(row);
        }).catch(function(error) {
            var result = {
                status: 0,
                message: error
            };
            res.setHeader('Content-Type', 'application/json');
            res.send(result);
        });
    },
    getLevel: function(parent_id, cb) {
        knex.first('*')
            .from(this.table_name)
            .where('category_id', parent_id)
            .then(function(row) {
                row.level = row.level + 1;
                cb(row.level);
            }).catch(function(error) {
            return error;
        });
    }
};