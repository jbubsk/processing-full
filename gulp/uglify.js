module.exports = function (gulp) {
    var uglify = require('gulp-uglify'),
        cssMinifier = require('gulp-minify-css'),
        config = require('./config');

    gulp.task('uglify-scripts', ['copy-scripts'],function () {
        return gulp.src(config.build_path + config.name + '.js')
            .pipe(uglify())
            .pipe(gulp.dest(config.build_path));
    });

    gulp.task('minify-css', ['copy-css'], function () {
        return gulp.src(config.build_path + config.name + '.css')
            .pipe(cssMinifier())
            .pipe(gulp.dest(config.build_path));
    });
};