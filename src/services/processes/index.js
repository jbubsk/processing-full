var dataStorage = require('../../../stub-data/storage');

module.exports = function (params, callback) {
    callback(null, dataStorage.getInitialData());
};