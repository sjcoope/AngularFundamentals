(function () {
    'use strict';

    angular
        .module('SJCNet.AngularFundamentals.App')
        .controller('MainCtrl',
            ['$scope',
            function($scope) {
                console.log('MainCtrl Initialized');

            }
        ]);
})();