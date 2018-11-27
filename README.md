# This package is no longer maintained - its funcionality can be found in Express >2.3.3

Very similar to the unmaintained project [express-uncapitalize](https://github.com/jamiesteven/express-uncapitalize), this middleware redirects any requests which contain uppercase chars to their lowercase forms. With two main changes from the original:

  1. Works with all utf-8 strings in paths
  1. Keeps query parameters intact

# Installation

    npm install express-lowercase-paths

# Usage

    var lowercasePaths = require("express-lowercase-paths")
    app.use(lowercasePaths())
