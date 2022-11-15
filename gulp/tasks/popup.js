export const popup = () => {
  return app.gulp.src(app.path.src.popup)
    .pipe(app.gulp.dest(app.path.build.popup));
}
