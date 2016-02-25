var categoria = angular.module('Categoria', ['ngRoute', 'ngResource']);

categoria.config(['$routeProvider', function($routeProvider) {
        $routeProvider
                .when('/categorias', {
                    templateUrl: 'projetoangular/templates/categoria.html'
                })
                .when('/categorias/novo/', {
                    templateUrl: 'projetoangular/templates/novacategoria.html'
                })
                .when('/categorias/editar/:id', {
                    templateUrl: 'projetoangular/templates/editarcategoria.html'
                });
    }]);