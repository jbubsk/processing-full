var config = require('../gulp/config');

module.exports = function (gulp) {
    gulp.task('client-watch', function () {
        var watch_path = config.app_path + '**/*.*';
        console.info(watch_path);
        gulp.watch(watch_path, ['build']);
    });
};