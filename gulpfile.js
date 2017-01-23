const gulp = require('gulp');
//const browserify = require('browserify'); //allows packaging
//const babel = require('gulp-babel'); //translates JSX to browser-compatible Javascript
//const source = require('vinyl-source-stream'); //Use conventional text streams at the start of your gulp or vinyl pipelines
const eslint = require('gulp-eslint');

//gulp.task('lint', function() {
gulp.task('default', function() {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(['vide-module-blueprint.js'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint({ fix: true }))
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(gulp.dest('.'))
        .pipe(eslint.failAfterError());  
});

/*gulp.task('default', ['lint'], function() {
    return browserify('./source/vide-module-blueprint.js')
        .transform(babelify, {presets: ['es2015'], plugins: ['transform-object-rest-spread']})
        .bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest('./bin/'));
});*/
