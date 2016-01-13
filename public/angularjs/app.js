//here we need to inject ui.router as we using it for routing
var myDemoApp = angular.module('myDemoApp', ['ui.router']);
myDemoApp.config(['$stateProvider', function ($stateProvider) {
    var dashboard = {title: 'Login', url: '/',templateUrl: 'login'},
        categories = {title: 'Categories', url: '/categories',templateUrl: 'categories',controller: 'categoryListCtrl'},
        category_add = {title: 'Add Category', url: '/categories/add',templateUrl: 'category/add',controller: 'categoryAddCtrl'},
        products = {title: 'Products', url: '/products',templateUrl: 'products',controller: 'productListCtrl'},
        product_add = {title: 'Add Product', url: '/products/add',templateUrl: 'product/add',controller: 'productAddCtrl'},
        otherwise = {title: 'Home', url: "*path",templateUrl: 'dashboard'};
    $stateProvider
        .state('dashboard', dashboard)
        .state('categories', categories)
        .state('category_add', category_add)
        .state('products', products)
        .state('product_add', product_add)
        .state("otherwise", otherwise);
}]);
//below line is to change page title dynamically. Currently it does not work.
myDemoApp.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);