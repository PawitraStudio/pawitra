/*=== Gulp Plugins ===*/

var gulp         = require('gulp');
var browserSync  = require('browser-sync'),
var reload       = browserSync.reload,
var url          = 'pawitrastudio.dev'
var autoprefixer = require('gulp-autoprefixer');
var sass         = require('gulp-sass');
var cssnano      = require('gulp-cssnano');
var rename       = require('gulp-rename');
var watch        = require('gulp-watch');


/*=== Browser Sync ===*/

gulp.task('browser-sync', function() {
	var files = [
					'**/*.php',
          './js/*.js'
					'**/*.{png,jpg,gif}'
				];
	browserSync.init(files, {

		// Read here http://www.browsersync.io/docs/options/
		proxy: url,

		// port: 8080,

		// Tunnel the Browsersync server through a random Public URL
		// tunnel: true,

		// Attempt to use the URL "http://my-private-site.localtunnel.me"
		// tunnel: "ppress",

		// Inject CSS changes
		injectChanges: true

	});
});

/*=== Sass -> Prefix -> Minify ===*/

gulp.task('styles', function () {

    gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(cssnano())
    // .pipe(rename( {suffix: '.min'} ))
    .pipe(gulp.dest('./'))

});

/*=== Watch Styles ===*/

gulp.task('watch', function() {

  	gulp.watch('./scss/**/*.scss', ['styles']);
    gulp.watch('./**/**').on('change', reload) ;

});

/*=== Default Gulp task run watch ===*/

gulp.task('default', ['browser-sync', 'watch']);
