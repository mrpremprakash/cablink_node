myDemoApp.service('categoryService', function($http, $q) {
    var categories = [];
    var deferred = $q.defer();
    this.getCategories = function() {
        return $http.get('admin/categories/result?limit=10')
            .then(function (response) {
                deferred.resolve(response.data);
                categories = response.data;
                return deferred.promise;
            }, function (response) {
                console.log(response);
            });
    }
    this.saveCategory = function(data) {
        return $http({
            method  : 'POST',
            url     : 'admin/category/add',
            data    : 'name='+ data.name +'&parent_id='+ data.parent_id,  // pass in data as strings
            headers : {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}  // set the headers so angular passing info as form data (not request payload)
        }).success(function(data) {
            //deferred.resolve(data.data);
            //categories = data.data;
            //return deferred.promise;
            return data;
        });
    }
});