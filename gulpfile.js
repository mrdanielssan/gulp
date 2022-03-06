const { parallel } = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');
const fonts =  tasks.fonts;

exports.style = tasks.style;
exports.scripts = tasks.scripts;
exports.html = tasks.html;
exports.ttfToWoff2 = fonts.toWoff2;
exports.ttfToWoff = fonts.toWoff;
exports.svg = tasks.svg;
exports.bs = tasks.bs;
exports.watch = tasks.watch;

exports.fonts = parallel(
  exports.ttfToWoff,
  exports.ttfToWoff2,
);

exports.default = parallel(
  exports.style,
  exports.scripts,
  exports.html,
  exports.svg,
  exports.bs,
  exports.watch
)
