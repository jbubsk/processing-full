var groupDetails = require('../../services/group_details');

module.exports = function (req, res, next) {
    groupDetails(req.body, function (err, result) {
        if (err) {
            console.error('Error occurred while getting process details: ' + err);
            res.send(err);
        } else {
            res.json({
                result: result
            });
        }
    })
};