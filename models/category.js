module.exports = (function() {
    var Category = bookshelf.Model.extend({
        tableName: 'categories',
        getCategories: function() {
            return this.fetchAll();
        }
    });
    return Category;
})();