var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var shell = require('gulp-shell');
var runSequence = require('run-sequence').use(gulp);

gulp.task('babel', function() {
  return gulp.src("./src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});

gulp.task('watch', function() {
  gulp.watch('./src/*.js', ['babel'])
});

gulp.task('run-force', function(){
  return gulp.src('./dist/all.js').pipe(shell([
    'node <%= file.path %>'
  ]));
})

gulp.task('run', function(){
  runSequence('babel', 'run-force');
});


gulp.task('default', ['babel', 'watch']);


