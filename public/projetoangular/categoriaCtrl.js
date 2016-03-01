categoria.controller('CategoriaCtrl', ['$scope', 'CategoriaSrv', '$location', '$routeParams',
    function($scope, CategoriaSrv, $location, $routeParams) {
        $scope.load = function() {
            $scope.registros = CategoriaSrv.query();
        };
        
        $scope.get = function () {
            $scope.item = CategoriaSrv.get({id: $routeParams.id});
        };

        $scope.add = function(item) {
            $scope.result = CategoriaSrv.save(
                    {},
                    item,
                    function(data, status, headers, config) {
                        $location.path('/categorias');
                    },
                    function(data, status, headers, config) {
                        alert('Erro ao inserir registro' + data.messages[0]);
                    }
            );
        };

        $scope.editar = function(item) {
            $scope.result = CategoriaSrv.update(
                    {id: $routeParams.id},
                    item,
                    function(data, status, headers, config) {
                        $location.path('/categorias');
                    },
                    function(data, status, headers, config) {
                        alert('Erro ao editar registro' + data.messages[0]);
                    }
            );
        };
        
        $scope.delete = function(id) {
            if (confirm("Deseja realmente excluir o registro?")) {
                CategoriaSrv.remove(
                    {id: id},
                    {},
                    function(data, status, headers, config) {
                        $location.path('/categorias');
                    },
                    function(data, status, headers, config) {
                        alert('Erro ao editar registro' + data.messages[0]);
                    }
                );
            }
        };
    }]);