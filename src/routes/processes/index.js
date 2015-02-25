var processes = require('../../services/processes'),
    util = require('util'),
    fs = require('fs');

module.exports = function (req, res, next) {
    processes(req.body, function (err, result) {
        if (err) {
            console.err('Error occurred while getting processes: ' + err);
            res.send(err);
        } else {
            fs.writeFileSync('./build/data.json', JSON.stringify(result) , 'utf-8');
            res.json({
                result: result
            });
        }
    })
};