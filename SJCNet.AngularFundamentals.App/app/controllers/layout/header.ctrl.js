(function () {
    'use strict';

    angular
        .module('SJCNet.AngularFundamentals.App')
        .controller('HeaderCtrl', HeaderCtrl);

    function HeaderCtrl() {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;

        activate();

        function activate() {
        }
    }
})();