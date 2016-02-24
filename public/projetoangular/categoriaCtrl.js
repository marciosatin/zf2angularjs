categoria.controller('CategoriaCtrl', ['$scope', 'CategoriaSrv', function($scope, $categoriaSrv){
    $scope.nome = "Marcio";    
    $scope.load = function () {
        $scope.registros = $categoriaSrv.query();
    };
    $scope.load();
}]);