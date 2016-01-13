myDemoApp.controller('productListCtrl', function($scope, $http, productService) {
    $scope.products = [];
    productService.getProducts().then(function(data) {
        $scope.products = data;
    });
}).controller('productAddCtrl', function($scope, $http, categoryService, productService) {
    $scope.categories = [];
    categoryService.getCategories().then(function(data) {
        $scope.categories = data;
    });
    $scope.productForm = [];
    $scope.submitForm = function(isValid) {

        if (isValid) {
            var data = [];

            data.push('name='+$scope.productForm.name);
            data.push('category_id='+$scope.productForm.category_id);
            data.push('price='+$scope.productForm.price);
            data.push('status='+$scope.productForm.status);

            productService.saveProduct(data).then(function(data) {
                if (data.data.error) {
                    alert(data.data.data.message);
                } else {
                    alert('Product added successfully!');
                    $scope.productForm = [];
                }
            });
        }
    }
})
;