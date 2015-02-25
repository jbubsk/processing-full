angular.module('processes')
    .controller('ProcessesController', function ($scope, $state, ProcessingService, PassService) {
        var iconMap = {
                firewall: {
                    running: {
                        icon: 'images/fw_blue.jpg',
                        rowClass: 'rowBlue'
                    },
                    rejected: {
                        icon: 'images/fw_red.jpg',
                        rowClass: 'rowRed'
                    },
                    accepted: {
                        icon: 'images/fw_green.jpg',
                        rowClass: 'rowGreen'
                    },
                    pending: {
                        icon: 'images/fw_grey.jpg',
                        rowClass: 'rowGrey'
                    }
                },
                build: {
                    succeed: {
                        icon: 'images/build_green.jpg',
                        rowClass: 'rowGreen'
                    },
                    pending: {
                        icon: 'images/build_grey.jpg',
                        rowClass: 'rowGrey'
                    },
                    fail: {
                        icon: 'images/build_red.jpg',
                        rowClass: 'rowRed'
                    },
                    running: {
                        icon: 'images/build_blue.jpg',
                        rowClass: 'rowRed'
                    }
                }
            },
            states = {
                pending: 'Pending',
                running: 'Running',
                rejected: 'Rejected',
                fail: 'Fail',
                succeed: 'Succeed',
                accepted: 'Accepted'
            },
            blocks = {
                pending: 'grey',
                running: 'blue',
                rejected: 'red',
                fail: 'red',
                succeed: 'green',
                accepted: 'green'
            };

        if($state.params.processId || $state.params.group){
            $state.go('processes');
        }
        $scope.processList = [];

        ProcessingService.getInitialData()
            .success(function (data, status, headers, config) {
                if (data.result) {
                    data.result.forEach(function (item) {
                        item.iconUrl = iconMap[item.type][item.state].icon;
                        item.rowClass = iconMap[item.type][item.state].rowClass;
                        item.stateCaption = states[item.state];

                        item.metricsClass = blocks[item.metrics];
                        item.buildClass = blocks[item.build];
                        item.uTestClass = blocks[item.unitTest];
                        item.fTestClass = blocks[item.functionalTest];
                    });
                    $scope.processList = data.result;
                } else {
                    console.warn('No data received');
                }
            })
            .error(function (data, status, headers, config) {
                console.error(data);
            });

        $scope.expand = function (process) {
            if (process.state !== 'pending' && process.state !== 'running') {
                $scope.templateProcess = process.name;
                PassService.setObject(process.id, process);
                $state.go('processes.expand', {processId: process.id});
            }
        };
    });