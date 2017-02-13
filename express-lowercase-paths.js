var url = require("url")

module.exports = function lowercasePaths() {
  return function _lowercasePaths(req, res, next) {
    if (req.path.toLowerCase() !== req.path) {
      var parsedUrl = url.parse(req.originalUrl)
      parsedUrl.pathname = parsedUrl.pathname.toLowerCase()
      res.redirect(url.format(parsedUrl))
    } else {
      next()
    }
  }
}
