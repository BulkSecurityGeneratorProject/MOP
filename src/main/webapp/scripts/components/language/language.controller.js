'use strict';

angular.module('mopApp')
    .controller('LanguageController', function ($scope, $translate, Language) {
        $scope.changeLanguage = function (languageKey) {
            $translate.use(languageKey);
        };

        Language.getAll().then(function (languages) {
            $scope.languages = languages;
        });
    });
