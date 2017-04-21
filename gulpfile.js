var gulp = require('gulp'),
    webserver = require('gulp-webserver');

var config = {
        server: {
            fallback: 'index.html',
            host: "0.0.0.0",
            port: 9000,
            livereload: true,
            directoryListing: true,
            open: 'http://0.0.0.0:9000/index.html'
        }
    };

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver(config.server));
});