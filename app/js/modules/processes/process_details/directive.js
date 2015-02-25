angular.module('processes')
    .directive('metricsArrow', function () {
        return {
            restrict: 'EA',
            scope: {
                iconUrl: '=iconUrl',
                value: '=',
                text: '@',
                align: '@'
            },
            replace: true,
            template: '<div class="icon-wrapper-big arrow fl">' +
            '<img ng-src="{{iconUrl}}" align="middle"/>' +
            '<span class="icon-text" ng-class="{{align}}" ng-bind="value"></span>' +
            '<span class="inscription">{{text}}</span>' +
            '</div>'
        }
    });