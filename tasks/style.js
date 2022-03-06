const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefixer = require('gulp-autoprefixer');
const bs = require('browser-sync');
// const clean = require('gulp-clean-css');

module.exports = function style() {
  return src('src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefixer())
    .pipe(dest('dist/css/'))
    .pipe(bs.stream())
}

