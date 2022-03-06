const browserSync = require('browser-sync');

module.exports = function bs() {
  browserSync.init({
    server: {
      baseDir: 'dist/',
    },
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware("*", function (req, res) {
          res.writeHead(302, {
            location: "404.html"
          });
          res.end("Redirecting!");
        });
      }
    },
  })
}
