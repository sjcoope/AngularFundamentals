(function() {

	'use strict';

	angular.module('SJCNet.AngularFundamentals.App').factory('detailsService',
		function () {

			var details = [
				{ id: 1, text: 'Scope' },
				{ id: 2, text: 'Data Binding' },
				{ id: 3, text: 'Routing' },
				{ id: 4, text: 'Providers' },
			];

			var getDetails = function (detailCount) {
				
				if (detailCount > details.length) {
					defaultCount = details.length;
				}

				return details.slice(0, detailCount);
			};

			return {
			    getDetails: getDetails
			};
		});

})();