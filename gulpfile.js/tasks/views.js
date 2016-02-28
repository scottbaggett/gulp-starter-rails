var config  = require('../config')
var changed = require('gulp-changed')
var gulp    = require('gulp')
var path    = require('path')
var browserSync   = require('browser-sync')

var paths = {
  src: path.join(config.root.src, config.tasks.views.src, '/**')
}

var viewsTask = function() {
  browserSync.reload()
}

gulp.task('views', viewsTask)
module.exports = viewsTask
