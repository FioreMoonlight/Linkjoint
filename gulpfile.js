var gulp = require('gulp');
var sass = require('gulp-sass');
var gcmq = require('gulp-group-css-media-queries');

gulp.task('sass',function(){
    return gulp.src('sass/**/*.scss').pipe(sass()).pipe(gulp.dest('css'))
});
gulp.task('cmq',function(){
    return gulp.src('css/**/*.css').pipe(gcmq()).pipe(gulp.dest('dist'));
})
gulp.task('watch',function(){
    gulp.watch('./sass/**/*.scss',['sass']);
    // gulp.watch('./css/**/*.css',['cmq']);
})
 
// gulp.watch('./scss/**/*.scss',['scss_cpi','cmq']);