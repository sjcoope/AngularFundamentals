(function () {
    'use strict';

    angular
        .module('SJCNet.AngularFundamentals.App')
        .controller('DirectivesCtrl', [
            '$scope', 'providerService',
            function ($scope, providerService) {
                $scope.services = providerService.getServices();
            }
        ]);

})();