import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

export const js = () => {
	return app.gulp.src(app.path.src.js)
		.pipe(uglify())
		.pipe(concat('main.js'))
		.pipe(app.gulp.dest(app.path.build.js));
}
