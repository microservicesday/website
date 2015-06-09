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
var ghPages        = require('gulp-gh-pages');

var templateData = {
    metadata: require('./data/metadata'),
    about:    require('./data/about'),
    agenda:   require('./data/agenda'),
    conduct:  require('./data/conduct')
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

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('watch', function() {
  gulp.watch(['./pages/**/*.handlebars', './data/*.json'], ['html']);
  gulp.watch('./styles/**/*.less', ['css']);
  gulp.watch('./images/*', ['images']);
});

gulp.task('serve-dist', serve({
  root: ['dist'],
  port: 4000
}));

gulp.task('build', ['html', 'css', 'images']);
gulp.task('serve', ['build', 'watch', 'serve-dist']);
gulp.task('default', ['serve']);
