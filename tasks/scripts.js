const { src, dest } = require('gulp');
const bs = require('browser-sync');
const babel = require('gulp-babel');

module.exports = function scripts() {
  return src('src/js/index.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(dest('dist/js/'))
    .pipe(bs.stream())
}
