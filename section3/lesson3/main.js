var app = angular.module('application', []);

app.controller('ParentController', function ($scope, $rootScope) {
    //$scope.name = "Parent";
    //
    //$scope.reset = function () {
    //  $scope.name = "Parent";
    //};

});

app.controller('ChildController', function ($scope, $rootScope) {

    $scope.reset = function () {
        $rootScope.name = "Reset By Child";
    };

});


