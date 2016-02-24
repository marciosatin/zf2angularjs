var categoria = angular.module('Categoria', ['ngRoute', 'ngResource']);

categoria.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: 'projetoangular/templates/categoria.html' 
        });
}]);