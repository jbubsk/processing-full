module.exports = function (gulp) {
    var config = require('./config'),
        concat = require('gulp-concat'),
        sass = require('gulp-sass')

    gulp.task('copy-html', function () {
        gulp.src(config.app_path + 'index.html')
            .pipe(gulp.dest(config.build_path));
    });

    gulp.task('copy-scripts', ['ng-tpl', 'ng-annotate'], function () {
        return gulp.src([
            config.bower_path + 'angular/angular.min.js',
            config.bower_path + 'angular-ui-router/release/angular-ui-router.min.js',
            config.bower_path + 'angular-animate/angular-animate.min.js',
            config.bower_path + 'Chart.js/Chart.min.js',
            config.bower_path + 'angular-chart.js/angular-chart.js',
            config.build_path + '**/*.js'
        ])
            .pipe(concat(config.name + '.js'))
            .pipe(gulp.dest(config.build_path));
    });

    gulp.task('copy-images', function () {
        gulp.src([
            config.images_path + '*.*'
        ])
            .pipe(gulp.dest(config.build_path + 'images'));
    });

    gulp.task('copy-css', ['compile-css'], function () {
        return gulp.src([
            config.bower_path + 'bootstrap/dist/css/bootstrap.min.css',
            config.bower_path + 'angular-chart.js/dist/angular-chart.css',
            config.build_path + 'temp/*.css'
        ])
            .pipe(concat(config.name + '.css'))
            .pipe(gulp.dest(config.build_path));

    });

    gulp.task('compile-css', function () {
        return gulp.src(config.css_path + '*.scss')
            .pipe(sass())
            .pipe(gulp.dest(config.build_path + 'temp'));

    });
};