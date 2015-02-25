angular.module('router')
    .constant('appConfig', {
        api: '/api'
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        'use strict';

        function template(templateName) {
            return 'modules/' + templateName + '/template.html';
        }

        $urlRouterProvider.
            otherwise('/processes');

        $stateProvider

        /************************** MAIN ROUTES ***************************/

            .state('processes', {
                url: '/processes',
                templateUrl: template('processes/list'),
                controller: 'ProcessesController'
            })

            .state('processes.expand', {
                url: '/details/:processId',
                templateUrl: template('processes/process_details'),
                controller: 'ExpandProcessController',
                resolve: {
                    process: function ($stateParams, PassService) {
                        return PassService.getObject($stateParams.processId);
                    }
                }
            })

            .state('processes.expand.details', {
                url: '/group/:group',
                templateUrl: template('processes/group_details'),
                controller: 'GroupDetailsController',
                resolve: {
                    data: function ($stateParams, ProcessingService) {
                        return ProcessingService.getGroupDetails({
                            id: $stateParams.processId,
                            group: $stateParams.group
                        }).then(function (result) {
                            return result.data;
                        });
                    }
                }
            });
    });