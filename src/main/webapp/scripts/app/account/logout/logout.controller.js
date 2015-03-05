'use strict';

angular.module('mopApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
