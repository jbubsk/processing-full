var express = require('express'),
    app = express(),
    http = require('http'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    router = require('./src/router'),
    port = process.env.PORT || 8000;


app.use(express.static(__dirname + '/build'));

app.use(compression());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/api', router);

module.exports = {
    startExpress: function () {
        http.createServer(app).listen(port);
        console.info('*** HTTP Server is started listening ' + port + '***');
    }
};