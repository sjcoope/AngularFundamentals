(function () {
    'use strict';

    angular
        .module('SJCNet.AngularFundamentals.App')
        .controller('ModelBindingCtrl', [
            '$scope',
            function ($scope) {

                $scope.text = 'One';

            }
        ]);
})();