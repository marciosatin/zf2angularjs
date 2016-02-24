var categoria = angular.module('Categoria', ['ngRoute']);

categoria.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: 'projetoangular/templates/categoria.html' 
        });
}]);