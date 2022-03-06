const { watch, parallel } = require('gulp');

module.exports = function watching() {
  watch('src/**/*.html', parallel('html'));
  watch('src/**/*.scss', parallel('style'));
  watch('src/**/*.js', parallel('scripts'));
  watch('src/**/*.ttf', parallel('ttfToWoff'));
  watch('src/**/*.ttf', parallel('ttfToWoff2'));
  watch('src/**/*.svg', parallel('svg'));
}
