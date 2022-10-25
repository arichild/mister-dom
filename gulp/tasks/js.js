import concat from 'gulp-concat';

export const js = () => {
	return app.gulp.src(app.path.src.js)
		.pipe(concat('main.js'))
		.pipe(app.gulp.dest(app.path.build.js));
}