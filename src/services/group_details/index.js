var getGroupDetails = require('../../../stub-data/storage').getGroupData;

module.exports = function (params, callback) {
    console.info('requested "group_details" service');
    getGroupDetails(params.id, params.group, function (err, result) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};