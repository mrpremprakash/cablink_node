myDemoApp.controller('loginCtrl', function ($scope, $http) {
        //$scope.loginForm = {};
        $scope.submitForm = function(isValid) {
            $http({
                method  : 'POST',
                url     : 'process.php',
                data    : $.param($scope.loginForm),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
                .success(function(data) {
                    console.log(data);
                    if (!data.success) {
                        // if not successful, bind errors to error variables
                        $scope.errorName = data.errors.name;
                        $scope.errorSuperhero = data.errors.superheroAlias;
                    } else {
                        // if successful, bind success message to message
                        $scope.message = data.message;
                    }
                });
        }
    })
    .controller('AboutUsCtrl', function ($scope) {
        $scope.message = 'Hello! we are on About Us Page';

    }).controller('categoryListCtrl', function ($scope, categoryService) {
    $scope.categories = [];
    categoryService.getCategories().then(function(data) {
        $scope.categories = data;
    });
}).controller('categoryAddCtrl', function ($scope, categoryService) {
        $scope.categories = [];
        $scope.categoryForm = [];
        categoryService.getCategories().then(function(data) {
            $scope.categories = data;
        });
        $scope.submitForm = function(isValid) {
            if (isValid) {
                categoryService.saveCategory($scope.categoryForm).then(function(data) {
                    if (data.data.error) {
                        alert(data.data.data.message);
                    } else {
                        $scope.categoryForm = [];
                        alert('Category added successfully!');
                        $scope.categories = data.data;
                    }
                });
            }
        }
    })
    .controller('ContactUsCtrl', function ($scope) {
        $scope.message = 'Hello! we are on Contact Us Page';
    });