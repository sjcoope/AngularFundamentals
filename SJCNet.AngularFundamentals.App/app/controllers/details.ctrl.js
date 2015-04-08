(function () {
    'use strict';

    angular
        .module('SJCNet.AngularFundamentals.App')
        .controller('DetailsCtrl', [
            '$scope', 'detailsService',
            function ($scope, detailsService) {

                $scope.sortColumn = 'id';

                $scope.details = detailsService.getDetails();

                $scope.changeSort = function (sortColumn) {
                    $scope.sortColumn = sortColumn;
                };

            }
        ]);
})();