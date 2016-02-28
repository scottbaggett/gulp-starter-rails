var config = require('../config')
var gulp   = require('gulp')
var path   = require('path')
var watch  = require('gulp-watch')

var watchTask = function() {
  var watchableTasks = ['fonts', 'iconFont', 'images', 'svgSprite','html', 'css', 'views']

  watchableTasks.forEach(function(taskName) {
    var task = config.tasks[taskName]
    if(task) {

      if(taskName == "views") {
        var glob = path.join(config.root.app, task.src, '**/*.{' + task.extensions.join(',') + '}')
      } else {
        var glob = path.join(config.root.src, task.src, '**/*.{' + task.extensions.join(',') + '}')
      }


      watch(glob, function() {
       require('./' + taskName)()
      })
    }
  })
}

gulp.task('views', function(){

})

gulp.task('watch', ['browserSync', 'views'], watchTask)
module.exports = watchTask
