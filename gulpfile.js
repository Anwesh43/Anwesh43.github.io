var gulp = require('gulp');
var browserify = require('browserify');
var fs = require('fs');
gulp.task('compile-es6',function(){
    browserify('./index.js').transform('babelify',{presets:['es2015','react']}).bundle().pipe(fs.createWriteStream('./bundle.js'));
});
gulp.task('watch-es6file',function(){
    gulp.watch('./index.js',['compile-es6']);
});
gulp.task('default',['compile-es6','watch-es6file']);
