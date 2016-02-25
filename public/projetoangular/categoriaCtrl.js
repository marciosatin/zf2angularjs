categoria.controller('CategoriaCtrl', ['$scope', 'CategoriaSrv', '$location', function($scope, CategoriaSrv, $location) {
        $scope.nome = "Marcio";
        $scope.load = function() {
            $scope.registros = CategoriaSrv.query();
        };
        $scope.load();

        $scope.add = function(item) {
            $scope.result = CategoriaSrv.save(
                    {},
                    item,
                    function(data, status, headers, config) {
                        $location.path('/categorias');
                    },
                    function(data, status, headers, config) {
                        alert('Erro ao inserir registo' + data.messages[0]);
                    }
            );
        };
    }]);