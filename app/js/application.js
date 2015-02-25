(function (angular) {
    "use strict";

    var modules = [],
        dependencies = [];

    modules.push({module: 'processes', dependencies: ['chart.js']});
    modules.push({module: 'router', dependencies: ['ui.router']});
    modules.push({module: 'services'});
    modules.push({module: 'ngAnimate'});

    modules.forEach(function (item) {
        angular.module(item.module, item.dependencies || []);
    });

    modules.forEach(function (item) {
        dependencies.push(item.module);
    });

    angular.module('application', dependencies);

})(angular);