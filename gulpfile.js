var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('boilerplate/blog/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['boilerplate/blog/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('boilerplate/blog'));
});

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('boilerplate/portfolio/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['boilerplate/portfolio/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('boilerplate/portfolio'));
});
