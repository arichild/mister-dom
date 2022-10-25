import svgSprite from 'gulp-svg-sprite'
import cheerio from 'gulp-cheerio'
import replace from 'gulp-replace'

export const svg = () => {
	return app.gulp.src(app.path.src.svg)
    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
        $('[class]').removeAttr('class');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: `../svg/symbols.svg`,
          example: true
        }
      }
    }))
	  .pipe(app.gulp.dest(app.path.build.img));
}