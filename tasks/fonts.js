const { src, dest } = require('gulp');
const ttfToWoff2 = require('gulp-ttftowoff2');
const ttf2woff = require('gulp-ttf2woff');
const bs = require('browser-sync');

module.exports = {
  toWoff2: function() {
    return src("src/fonts/*.ttf")
      .pipe(ttfToWoff2())
      .pipe(dest("./dist/fonts/"))
      .pipe(bs.stream());
  },
  toWoff: function() {
    return src("src/fonts/*.ttf")
      .pipe(ttf2woff())
      .pipe(dest("./dist/fonts/"))
      .pipe(bs.stream());
  }
}


