categoria.factory('CategoriaSrv', ['$resource', function($resource) {
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
        );