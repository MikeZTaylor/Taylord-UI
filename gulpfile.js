var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('nunjucks_one', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('boilerplate/blog/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['boilerplate/blog/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('boilerplate/blog'));
});

gulp.task('nunjucks_two', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('boilerplate/portfolio/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['boilerplate/portfolio/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('boilerplate/portfolio'));
});

gulp.task('nunjucks_three', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('boilerplate/product/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['boilerplate/product/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('boilerplate/product'));
});


gulp.task('nunjucks', ['nunjucks_one', 'nunjucks_two', 'nunjucks_three']);
