var gulp = require('gulp');



var minifyHtml = require("gulp-minify-html");
	gulp.task('htmltask', function () { 
    		gulp.src('*.html')
   		.pipe(minifyHtml())
   		.pipe(gulp.dest('dist'))
	});
	






var minifycss = require('gulp-clean-css');
gulp.task('csstask',function(){
  gulp.src('./css/*.css')
  .pipe(minifycss ())
  .pipe(gulp.dest('./dist/css'));
});