(function () {

    'use strict';

    // Factory Implementation
    //angular.module('SJCNet.AngularFundamentals.App').factory('providerService',
    //    function () {
    //        return new Ctor();
    //    }
    //);

    // Service Implementation
    angular.module('SJCNet.AngularFundamentals.App').service('providerService', Ctor);

    var specialisedObjects = [];
    var services = [];

    function Ctor() {
        // Initialize lists
        var specialisedObjects = [
            { id: 1, text: 'Controllers' },
            { id: 2, text: 'Directives' },
            { id: 3, text: 'Features' },
            { id: 4, text: 'Animations' },
        ];

        var services = [
            { id: 1, text: 'Provider' },
            { id: 2, text: 'Value' },
            { id: 3, text: 'Factory' },
            { id: 4, text: 'Service' },
            { id: 5, text: 'Constant' }
        ];

        this.getSpecialisedObjects = function (count) {

            if (count > specialisedObjects.length) {
                count = specialisedObjects.length;
            }

            return specialisedObjects.slice(0, count);
        };

        this.getServices = function (count) {
            if (count > services.length) {
                count = services.length;
            }

            return services.slice(0, count);
        };
    }

})();