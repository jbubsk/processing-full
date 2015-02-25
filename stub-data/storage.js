var data = [];

function getRandomTests(number) {
    var tests = [],
        i = 0;

    for (i; i < number; i++) {
        tests.push({
            name: 'Test# ' + i + 1,
            duration: Math.random() * 100
        });
    }
    return tests;
}

function getInitialData() {
    var item,
        itemNumber = 10,
        stateMatrix = {
            firewall: {
                0: 'pending',
                1: 'accepted',
                2: 'running',
                3: 'rejected'
            },
            build: {
                0: 'pending',
                1: 'succeed',
                2: 'pending',
                3: 'fail'
            }
        };

    function getRandomStatus() {
        var result = parseInt(Math.random() * 10, 0);
        while (result > 3) {
            result = parseInt(Math.random() * 10, 0);
        }
        return result;
    }

    data.length = 0;
    for (itemNumber; itemNumber > 0; itemNumber--) {
        item = {};
        item.id = itemNumber;
        item.type = parseInt(Math.random() * 10, 0) % 3 === 0 ? 'firewall' : 'build';
        item.name = 'task#' + itemNumber * 3 + parseInt(Math.random() * 100, 0);
        item.owner = itemNumber % 2 === 0 ? 'nickson' + itemNumber : 'fed' + itemNumber + 3;
        item.state = stateMatrix[item.type][getRandomStatus()];

        /* generate random statuses of processes */

        if (item.state === 'pending') {
            item.metrics = item.state;
            item.build = item.state;
            item.unitTest = item.state;
            item.functionalTest = item.state;
        } else if (item.state === 'running') {
            item.metrics = item.state;
            item.build = 'pending';
            item.unitTest = 'pending';
            item.functionalTest = 'pending';
        } else if (item.state === 'rejected') {
            item.metrics = 'rejected';
            item.build = itemNumber % 2 === 0 ? 'pending' : 'accepted';
            item.unitTest = item.build;
            item.functionalTest = item.build;
        } else if (item.state === 'fail') {
            item.metrics = item.state;
            item.build = item.state;
            item.unitTest = item.state;
            item.functionalTest = item.state;
        } else if (item.state === 'succeed') {
            item.metrics = item.state;
            item.build = item.state;
            item.unitTest = item.state;
            item.functionalTest = item.state;
        } else if (item.state === 'accepted') {
            item.metrics = item.state;
            item.build = item.state;
            item.unitTest = item.state;
            item.functionalTest = item.state;
        }

        if (item.state !== 'pending') {
            var random = parseInt(Math.random() * 10000, 0);

            item.timeStarted = new Date().getTime() - random;
            item.buildTime = new Date().getTime() - random + 100;

            item.uTestPassed = parseInt(Math.random() * 100, 0);
            item.uTestFailed = parseInt(Math.random() * 100, 0);
            item.uTestFailedPerc = parseInt(item.uTestFailed / ((item.uTestPassed + item.uTestFailed) / 100), 0);
            item.uTestPassedPerc = 100 - item.uTestFailedPerc;

            item.fTestPassed = parseInt(Math.random() * 100, 0);
            item.fTestFailed = parseInt(Math.random() * 100, 0);
            item.fTestFailedPerc = parseInt(item.fTestFailed / ((item.fTestPassed + item.fTestFailed) / 100), 0);
            item.fTestPassedPerc = 100 - item.fTestFailedPerc;

            item.uTestCoverage = parseInt(Math.random() * 100, 0);
            item.fTestCoverage = parseInt(Math.random() * 100, 0);

            item.metricsDetails = {
                details: 'It\'s details about metrics',
                test: 'Some information about test',
                maintainability: 'Some information about maintainability',
                security: 'Some information about security',
                workmanship: 'Some information about workmanship'
            };

            item.buildDetails = {
                details: 'It\'s details about build tests',
                numberOfClasses: parseInt(Math.random() * 100, 0),
                duration: Math.random() * 100,
                result: item.build
            };

            item.uTestDetails = {
                details: 'It\'s details about unit tests',
                passed: getRandomTests(item.uTestPassed),
                failed: getRandomTests(item.uTestFailed)
            };

            item.fTestDetails = {
                details: 'It\'s details about functional tests',
                passed: getRandomTests(item.fTestPassed),
                failed: getRandomTests(item.fTestFailed)
            };
        }

        data.push(item);
    }

    return data;
}

function getGroupData(id, group, callback) {
    var integerId = parseInt(id, 0);


    function getResult(item) {
        var result = '';

        if (group === 'metrics') {
            result = item.metricsDetails;
        } else if (group === 'build') {
            result = item.buildDetails;
        } else if (group === 'uTests') {
            result = item.uTestDetails;
        } else if (group === 'fTests') {
            result = item.fTestDetails;
        } else {
            result = 'Data can not be received';
        }

        return result;
    }

    data.forEach(function (item) {
        var result = "";
        if (item.id === integerId) {
            result = getResult(item);
            if (typeof  result !== 'string') {
                callback(null, result);
            } else {
                callback(result, null);
            }
            return false;
        } else {
            return true;
        }
    });
}

function updateData() {
    return data;
}

module.exports = {
    getInitialData: getInitialData,
    getGroupData: getGroupData,
    updateData: updateData
};