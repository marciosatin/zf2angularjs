'use strict';

angular.module('myApp.services', ['ngResource'])
       .factory('CategoriaSrv', ['$resource', function($resource) {
            return $resource(
                    '/api/categoria/:id',
                    {id: '@id'},
            {
                update: {
                    method: 'PUT'
                }
            }
            );
        }]
    )
    .factory('ProdutoSrv', ['$resource', function($resource) {
            return $resource(
                    '/api/produto/:id',
                    {id: '@id'},
                    {
                        update: {
                            method: 'PUT'
                        }
                    }
            );
        }]
    );