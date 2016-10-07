var gulp = require('gulp');
//var header = require('gulp-header');
var GulpFlow = require("gulp-flowcheck");
var gulpFlow = new GulpFlow();
var babel = require('gulp-babel');
var rename = require('gulp-rename');

function compileFlow(inDir, outDir) {
    return function () {
        gulp.src(inDir)
          .pipe(babel({
              plugins: ["transform-flow-strip-types", "transform-react-jsx"],
              presets: ['es2015']
          }))
          .pipe(rename({ extname: '.js' }))
          .pipe(gulp.dest(outDir));
    }
}

gulp.task('transform-flow', compileFlow('src/flow/*', 'www/js/*'));
gulp.task('transform-index', compileFlow('src/index.jsx', 'www/*'));

gulp.task('type-check', function () {
    gulp.src('src/flow/*.jsx')
    .pipe(gulpFlow.check())
    .pipe(gulpFlow.reporter())
})
gulp.task('default', ['type-check', 'transform-flow', 'transform-index']);