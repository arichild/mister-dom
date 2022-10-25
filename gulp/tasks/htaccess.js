export const htaccess = () => {
	return app.gulp.src(app.path.src.htaccess, {dots: true})
		.pipe(app.gulp.dest(app.path.build.htaccess));
}