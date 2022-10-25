import changed  from 'gulp-changed';

export const img = () => {
	return app.gulp.src(app.path.src.img)
		.pipe(changed(app.path.build.img))
		.pipe(app.gulp.dest(app.path.build.img));
}