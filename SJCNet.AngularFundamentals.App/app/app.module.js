(function () {
    'use strict';

    var app = angular.module('SJCNet.AngularFundamentals.App', [
        'ngRoute'
    ]);

    app.run(['$route', function ($route) {
        console.log('Angular App has started');

    }]);

    app.config(['$routeProvider', function ($routeProvider) {
        console.log('Angular config initialized');

        $routeProvider
            .when('/', { templateUrl: 'app/controllers/welcome.html', controller: 'WelcomeCtrl', title: 'Welcome' })
            .when('/modelbinding', { templateUrl: 'app/controllers/modelbinding.html', controller: 'ModelBindingCtrl', title: 'Model Binding' })
            .when('/directives', { templateUrl: 'app/controllers/directives.html', controller: 'DirectivesCtrl', title: 'Directives' })
            .when('/providers', { templateUrl: 'app/controllers/providers.html', controller: 'ProvidersCtrl', title: 'Providers' })
            .when('/details', { templateUrl: 'app/controllers/details.html', controller: 'DetailsCtrl', title: 'Details' });

        $routeProvider.otherwise({ redirectTo: '/' });
    }]);

})();