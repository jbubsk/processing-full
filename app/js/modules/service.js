angular.module('services', [])
    .factory('ProcessingService', function ($http, appConfig) {

        return {
            getInitialData: function () {
                return $http.get(appConfig.api + '/processes');
            },
            getGroupDetails: function (data) {
                return $http.post(appConfig.api + '/group_details', data);
            }
        }
    })

    .factory('PassService', function () {
        var objects = {};

        return {
            getObject: function (key) {
                return objects[key];
            },
            setObject: function (key, data) {
                objects[key] = data;
            }
        }
    });