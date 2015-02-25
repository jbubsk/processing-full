module.exports = function (gulp) {
    var del = require('del').sync,
        path = {
            clean: ['build/*.*'],
            clean_temp: ['build/temp']
        };

    gulp.task('clean', function () {
        del(path.clean);
    });

    gulp.task('clean-temp', function () {
        del(path.clean_temp);
    });
};
