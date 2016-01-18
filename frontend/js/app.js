var cablinkApp = angular.module('cablinkApp', ['ui.router']);
cablinkApp.config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {
    var home = {
        title: 'Home',
        url: '/',
        templateUrl: 'index'
    },
    products = {
        title: 'Products',
        url: '/products',
        templateUrl: 'products',
        controller: 'productListCtrl'
    },
    categories = {
        title: 'Categories',
        url: '/admin/categories',
        templateUrl: 'admin/categories',
        controller: 'categoryListCtrl'
    },
    category_add = {
        title: 'Add Category',
        url: '/admin/categories/add',
        templateUrl: 'admin/category/add',
        controller: 'categoryAddCtrl'
    },
    product_add = {
        title: 'Add Product',
        url: '/admin/products/add',
        templateUrl: 'admin/product/add',
        controller: 'productAddCtrl'
    },
    otherwise = {
        title: 'Home',
        url: "*path",
        templateUrl: 'admin/dashboard'
    };
    $stateProvider
        .state('home', home)
        .state('products', products)
        .state('categories', categories)
        .state('category_add', category_add)
        .state('product_add', product_add)
        //.state("otherwise", otherwise)
    ;
    $locationProvider.html5Mode(true);
}]);