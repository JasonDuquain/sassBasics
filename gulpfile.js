var gulp = require('gulp');
var sass = require('gulp-sass'); 
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
//var breakpoint = require('breakpoint-sass');


gulp.task('styles', function() {
    gulp.src('scss/**/*scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
    })).on('error', sass.logError)
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', ['styles'], function() {
    gulp.watch('scss/**/*scss', ['styles']);
});

gulp.task('default', ['watch']);