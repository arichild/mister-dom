import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

export const lib = () => {
  return app.gulp.src(app.path.src.lib)
    .pipe(uglify())
    .pipe(concat('lib.min.js'))
    .pipe(app.gulp.dest(app.path.build.lib));
}
