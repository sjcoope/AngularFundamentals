(function () {
    angular
        .module('SJCNet.AngularFundamentals.App')
        .directive('scServiceItem', function () {
            return {
                restrict: 'A',
                template: '<td>{{item.id}}</td><td>{{item.text}}</td>'
            };
        });
})()