module.exports = function (gulp) {
    var nodemon = require('gulp-nodemon');

    gulp.task('run-dev-env', ['clean-temp'], function () {
        return nodemon({
            script: 'server.js',
            env: {
                'NODE_ENV': 'dev',
                'PORT': 8200
            },
            nodeArgs: ['--debug'],
            watch: ['none']
        });
    });

    gulp.task('run-prod-env', ['clean-temp'], function () {
        return nodemon({
            script: 'server.js',
            env: {
                'NODE_ENV': 'prod',
                'PORT': 8200
            },
            nodeArgs: ['--debug'],
            watch: ['none']
        });
    });

};