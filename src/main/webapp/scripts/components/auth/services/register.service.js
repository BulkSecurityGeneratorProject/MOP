'use strict';

angular.module('mopApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


