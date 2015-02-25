angular.module('processes')
    .controller('GroupDetailsController', function ($scope, data, $stateParams, PassService, $state) {
        $scope.view = $stateParams.group;
        $scope.model = data.result;

        $scope.stopClick = function (event) {
            event.stopPropagation();
        };

        $scope.close = function () {
            PassService.setObject($stateParams.processId, $scope.process);
            $state.go('processes.expand', {processId: $stateParams.processId});
        };
    });
