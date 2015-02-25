angular.module('processes')
    .factory('ChartService', function () {
        var labels = ['', ''],
            options = {
                segmentShowStroke: true,
                percentageInnerCutout: 2,
                animationSteps: 50,
                showTooltips: false
            },
            colours = [
                { // green
                    fillColor: 'rgb(114,172,77)',
                    strokeColor: 'rgb(114,172,77)',
                    pointColor: 'rgb(114,172,77)',
                    pointStrokeColor: 'rgb(114,172,77)',
                    pointHighlightFill: 'rgb(114,172,77)',
                    pointHighlightStroke: 'rgb(114,172,77)'
                },
                { // orange
                    fillColor: 'rgb(235,125,60)',
                    strokeColor: 'rgb(235,125,60)',
                    pointColor: 'rgb(235,125,60)',
                    pointStrokeColor: 'rgb(235,125,60)',
                    pointHighlightFill: 'rgb(235,125,60)',
                    pointHighlightStroke: 'rgb(235,125,60)'
                }
            ];

        return {
            drawUnitTestChart: function ($scope) {
                $scope.data = [$scope.process.uTestPassed, $scope.process.uTestFailed];

                $scope.labels = labels;
                $scope.options = options;
                $scope.colours = colours;
            },
            drawFuncTestChart: function ($scope) {
                $scope.data = [$scope.process.fTestPassed, $scope.process.fTestFailed];

                $scope.labels = labels;
                $scope.options = options;
                $scope.colours = colours;
            }
        }
    });