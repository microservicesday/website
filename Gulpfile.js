'use strict';

var gulp        = require('gulp');
var path        = require('path');
var _           = require('lodash');

var handlebars  = require('gulp-compile-handlebars');
var rename      = require('gulp-rename');
var less        = require('gulp-less');
var CleanCSS    = require('less-plugin-clean-css');
var AutoPrefix  = require('less-plugin-autoprefix');
var serve       = require('gulp-serve');
var ghPages     = require('gulp-gh-pages');
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');
var babelify    = require('babelify');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');

var templateData = {
  metadata: require('./data/metadata'),
  about:    require('./data/about'),
  speakers: require('./data/speakers'),
  agenda:   require('./data/agenda'),
  conduct:  require('./data/conduct'),
  hotels:   require('./data/hotels') 
};

gulp.task('html', function () {
    return gulp.src('pages/index.handlebars')
        .pipe(handlebars(templateData, {
            // Options
            batch : ['./pages/partials'],
            helpers: {
                json: function(context) {
                    return JSON.stringify(context);
                }
            }
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
  return gulp.src('./styles/*.less')
    .pipe(less({
        paths: [path.join(__dirname, 'styles', 'includes')],
        plugins: [
            new AutoPrefix({ browsers: ['last 2 versions'] }),
            new CleanCSS({ advanced: true })
        ]
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
  gulp.src('./images/**/*')
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('data', function() {
  gulp.src('./data/*.json')
    .pipe(gulp.dest('./dist/data'));
});

gulp.task('static', function() {
  gulp.src('./static/**/*')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('js-vendor', function() {
  gulp.src([
    './node_modules/headhesive/dist/headhesive.js'
    ])
    .pipe(uglify())
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('js-src', function() {
    browserify({
      entries: './js/main.js',
      debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('gh-pages', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('watch', function() {
  gulp.watch(['./pages/**/*.handlebars', './data/*.json'], ['html']);
  gulp.watch('./styles/**/*.less', ['css']);
  gulp.watch('./images/**/*', ['images']);
  gulp.watch('./js/**/*', ['js']);
});

gulp.task('serve-dist', serve({
  root: ['dist'],
  port: 4000
}));

gulp.task('js', ['js-src', 'js-vendor']);
gulp.task('build', ['html', 'css', 'js', 'images', 'static', 'data']);
gulp.task('serve', ['build', 'watch', 'serve-dist']);
gulp.task('deploy', ['build', 'gh-pages']);
gulp.task('default', ['serve']);
