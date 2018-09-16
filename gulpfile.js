let gulp = require('gulp');
let sass = require('gulp-sass');


gulp.task('styles', function(done) {
	return gulp.src('./app/assets/styles/**/*.scss')
		.pipe(sass()).on('error', sass.logError)
		.pipe(gulp.dest('./app/temp/styles'));
	done()
});

gulp.task('watch', gulp.series('styles', function() {
	gulp.watch('./app/assets/styles/**/*.scss', gulp.series('styles'));
}));
