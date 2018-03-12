var gulp = require('gulp');
var webserver = require('gulp-webserver');
var compilesass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var mincss = require('gulp-clean-css');

gulp.task('compileSass', function() {
    gulp.src('./css/style.scss')
        .pipe(compilesass())
        .pipe(gulp.dest('./dist/'))
})

//压缩html
var options = {
    removeComments: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    minifyJS: true,
    minifyCSS: true
}
gulp.task('minHtml', function() {
    gulp.src('./index.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./html/'))
})
gulp.task('minCss', function() {
    gulp.src('./css/style.css')
        .pipe(mincss())
        .pipe(gulp.dest('./dist/'))
})