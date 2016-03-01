'use strict';

angular.module('myApp', ['ngRoute', 'myApp.controllers'])
       .config(['$routeProvider', function($routeProvider) {
        $routeProvider
                .when('/categorias', {
                    templateUrl: 'projetoangular/templates/categoria.html',
                    controller: 'CategoriaCtrl'
                })
                .when('/categorias/novo/', {
                    templateUrl: 'projetoangular/templates/novacategoria.html',
                    controller: 'CategoriaCtrl'
                })
                .when('/categorias/editar/:id', {
                    templateUrl: 'projetoangular/templates/editarcategoria.html',
                    controller: 'CategoriaCtrl'
                })
                .when('/produtos', {
                    templateUrl: 'projetoangular/templates/produto.html',
                    controller: 'ProdutoCtrl'
                })
                .when('/produtos/novo/', {
                    templateUrl: 'projetoangular/templates/novoproduto.html',
                    controller: 'ProdutoCtrl'
                })
                .when('/produtos/editar/:id', {
                    templateUrl: 'projetoangular/templates/editarproduto.html',
                    controller: 'ProdutoCtrl'
                });
    }]);