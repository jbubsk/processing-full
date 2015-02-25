var ngAnnotate = require('gulp-ng-annotate'),
    concat = require('gulp-concat'),
    templateCache = require('gulp-angular-templatecache'),
    minifyHTML = require('gulp-minify-html'),
    config = require('../gulp/config');

module.exports = function (gulp) {

    gulp.task('ng-annotate', ['clean'], function () {
        return gulp.src(config.script_path + '**/*.js')
            .pipe(ngAnnotate())
            .pipe(concat('annotate.js'))
            .pipe(gulp.dest(config.build_path + 'temp'));
    });

    gulp.task('ng-tpl', ['clean'], function () {
        return gulp.src(config.script_path + 'modules/**/template.html')
            .pipe(minifyHTML())
            .pipe(templateCache('templates.js', {module: 'application', root: 'modules/'}))
            .pipe(gulp.dest(config.build_path + 'temp'));
    });
};