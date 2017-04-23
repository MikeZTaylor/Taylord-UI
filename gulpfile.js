var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('nunjucks_one', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('templates/blog/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['templates/blog/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('templates/blog'));
});

gulp.task('nunjucks_two', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('templates/portfolio/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['templates/portfolio/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('templates/portfolio'));
});

gulp.task('nunjucks_three', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('templates/product/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['templates/product/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('templates/product'));
});


gulp.task('nunjucks', ['nunjucks_one', 'nunjucks_two', 'nunjucks_three']);
