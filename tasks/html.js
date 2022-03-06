const { src, dest } = require('gulp');
const bs = require('browser-sync');

module.exports = function html() {
  return src('src/**/*.html')
    .pipe(dest('dist'))
    .pipe(bs.stream());
}
