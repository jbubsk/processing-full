var processes = require('../../services/processes');

module.exports = function (req, res, next) {
    processes(req.body, function (err, result) {
        if (err) {
            console.err('Error occurred while getting processes: ' + err);
            res.send(err);
        } else {
            res.json({
                result: result
            });
        }
    })
};