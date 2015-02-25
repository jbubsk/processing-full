angular.module('processes')
    .controller('ExpandProcessController', function ($scope, process, $state, PassService) {

        $scope.process = process;

        $scope.firstIconUrl = process.metrics === 'succeed' || process.metrics === 'accepted' ?
            'images/arrow_up_green.png' :
            'images/arrow_down_red.png';
        $scope.secondIconUrl = process.metrics === 'succeed' || process.metrics === 'accepted' ?
            'images/arrow_up_green.png' :
            'images/arrow_down_red.png';
        $scope.thirdIconUrl = 'images/arrow_right_yellow.png';
        $scope.fourthIconUrl = $scope.thirdIconUrl;
        $scope.pcIconUrl = 'images/pc_120x120.png';

        $scope.openDetails = function (group, event) {
            event.stopPropagation();
            PassService.setObject(group, process);
            $state.go('processes.expand.details', {group: group});
        };

        $scope.getProgress = function (progrees) {
            var fixedProgress = progrees;
            if (progrees > 95) {
                fixedProgress = progrees - 6;
            }
            return {width: fixedProgress + '%'};
        };
    })
    .controller('UnitChartController', function ($scope, ChartService) {
        ChartService.drawUnitTestChart($scope);
    })
    .controller('FunctionalChartController', function ($scope, ChartService) {
        ChartService.drawFuncTestChart($scope);
    })
    .controller('ResultController', function ($scope) {
        var resultCaption = {
                rejected: 'Change Rejected',
                accepted: 'Change Accepted'
            },
            result = {
                rejected: 'Metrics Reduction',
                complete: 'Complete',
                succeed: 'Succeed',
                accepted: 'Auto-merged',
                fail: 'Build failed'
            };
        $scope.process.resultMetricsCaption = resultCaption[$scope.process.state];
        $scope.process.resultMetrics = result[$scope.process.state];
    });