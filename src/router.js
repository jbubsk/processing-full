var express = require('express'),
    router = express.Router(),
    processes = require('../src/routes/processes'),
    group_details = require('../src/routes/group_details');

router.get('/processes', processes);
router.post('/group_details', group_details);

module.exports = router;