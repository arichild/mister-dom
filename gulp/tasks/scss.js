import dartSass from 'sass';
import gulpSass from 'gulp-sass';

import prefixer from 'gulp-autoprefixer';
import clean from 'gulp-clean-css';
import concat from 'gulp-concat';
import map from 'gulp-sourcemaps';

const sass = gulpSass(dartSass);

export const scss = () => {
	return app.gulp.src(app.path.src.scss)
		.pipe(map.init())
		.pipe(sass({
			outputStyle: 'expanded'
		}).on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(app.gulp.dest(app.path.build.css))
}
