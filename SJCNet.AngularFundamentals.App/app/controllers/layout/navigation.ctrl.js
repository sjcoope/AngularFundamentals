(function () {
	'use strict';

	angular
        .module('SJCNet.AngularFundamentals.App')
        .controller('NavigationCtrl', NavigationCtrl);

	function NavigationCtrl() {
		/* jshint validthis: true */
		var vm = this;

		vm.activate = activate;

		activate();

		function activate() {
		}
	}
})();