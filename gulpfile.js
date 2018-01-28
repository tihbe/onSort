// Update: Hey Folks - I've got a full Gulpfile with everything else over at https://github.com/wesbos/React-For-Beginners-Starter-Files

var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var reactify = require('reactify');
var babelify = require('babelify');
var watchify = require('watchify');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var fs = require("fs");

function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end');
}

function buildScript(file, watch) {

  var props = {
    entries: ['./src/webapp/' + file],
    debug : false
  };

  var br = browserify(props).transform("babelify", {presets: ["es2015", "react"]});
  var bundler = watch ? watchify(br) : br ;

  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source(file))
      .pipe(rename("onsort.js"))
      .pipe(gulp.dest('./dist/js/'));
  }

  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });

  return rebundle();
}


gulp.task('scripts', function() {
  return buildScript('main.jsx', false);
});

gulp.task('default', ['scripts'], function() {
  return buildScript('main.jsx', true);
});
