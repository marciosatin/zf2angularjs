'use strict';

angular.module('myApp.controllers', ['ngRoute', 'myApp.services'])
        .controller('CategoriaCtrl', ['$scope', 'CategoriaSrv', '$location', '$routeParams',
            function($scope, CategoriaSrv, $location, $routeParams) {
                $scope.load = function() {
                    $scope.registros = CategoriaSrv.query();
                };

                $scope.get = function() {
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
            }])
        .controller('ProdutoCtrl', ['$scope', 'ProdutoSrv', 'CategoriaSrv',  '$location', '$routeParams',
            function($scope, ProdutoSrv, CategoriaSrv, $location, $routeParams) {
                $scope.load = function() {
                    $scope.registros = ProdutoSrv.query();
                };

                $scope.get = function() {
                    $scope.item = ProdutoSrv.get({id: $routeParams.id});
                };
                
                $scope.getCategorias = function() {
                    $scope.categorias = CategoriaSrv.query();
                };
                $scope.getCategorias();

                $scope.add = function(item) {
                    $scope.result = ProdutoSrv.save(
                            {},
                            item,
                            function(data, status, headers, config) {
                                $location.path('/produtos');
                            },
                            function(data, status, headers, config) {
                                alert('Erro ao inserir registro' + data.messages[0]);
                            }
                    );
                };

                $scope.editar = function(item) {
                    console.log(item);
                    $scope.result = ProdutoSrv.update(
                            {id: $routeParams.id},
                    item,
                            function(data, status, headers, config) {
                                $location.path('/produtos');
                            },
                            function(data, status, headers, config) {
                                alert('Erro ao editar registro' + data);
                            }
                    );
                };

                $scope.delete = function(id) {
                    if (confirm("Deseja realmente excluir o registro?")) {
                        ProdutoSrv.remove(
                                {id: id},
                        {},
                                function(data, status, headers, config) {
                                    $location.path('/produtos');
                                },
                                function(data, status, headers, config) {
                                    alert('Erro ao editar registro' + data.messages[0]);
                                }
                        );
                    }
                };
            }]);