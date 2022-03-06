const { src, dest } = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const bs = require('browser-sync');

config = {
  mode: {
    symbol: true
  }
};

module.exports = function svg() {
  return src('src/svg/*.svg')
    .pipe(svgSprite(config))
    .pipe(dest('dist/'))
    .pipe(bs.stream())
}

