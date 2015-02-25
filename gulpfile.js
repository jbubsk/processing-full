var gulp = require('gulp');

require('./gulp/clean')(gulp);
require('./gulp/angular')(gulp);
require('./gulp/copy')(gulp);
require('./gulp/uglify')(gulp);
require('./gulp/run_node')(gulp);
require('./gulp/client_watch')(gulp);

gulp.task('build-scripts', ['uglify-scripts', 'copy-html']);
gulp.task('build-css', ['minify-css']);
gulp.task('build-images', ['copy-images']);

gulp.task('build', ['build-scripts', 'build-css', 'build-images']);

gulp.task('run-dev', ['client-watch'], function () {
    gulp.start('run-dev-env', ['build']);
});

gulp.task('run-prod', ['client-watch'], function () {
    gulp.start('run-prod-env', ['build']);
});