module.exports = function (gulp) {
    var uglify = require('gulp-uglify'),
        config = require('./config');

    gulp.task('uglify-scripts', function () {
        return gulp.src(config.build_path + config.name + '.js')
            .pipe(gulp.dest(config.build_path));
    });
};