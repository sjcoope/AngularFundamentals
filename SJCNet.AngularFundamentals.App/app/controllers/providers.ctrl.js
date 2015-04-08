(function () {
    'use strict';

    angular
        .module('SJCNet.AngularFundamentals.App')
        .controller('ProvidersCtrl', [
            '$scope', 'providerService',
            function ($scope, providerService) {
                $scope.specialisedObjects = providerService.getSpecialisedObjects();
                $scope.services = providerService.getServices();
            }
        ]);
})();