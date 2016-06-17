/*=== Gulp Plugins ===*/

var gulp         = require('gulp');
			browserSync  = require('browser-sync'),
			reload       = browserSync.reload,
			url          = 'pawitrastudio.dev'

var autoprefixer = require('gulp-autoprefixer');
var sass         = require('gulp-sass');
var rename       = require('gulp-rename');
var notify       = require('gulp-notify');
var watch        = require('gulp-watch');

/*=== Browser Sync ===*/

gulp.task('browser-sync', function() {
	var files = [
					'**/*.php',
          './js/*.js'
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
    .pipe(sass().on('error', notify.onError( {title: 'Gulp',
    message: 'Error: <%= error.message %>'})))
		.pipe(autoprefixer({ browsers: ['last 2 versions'] }))

    .pipe(gulp.dest('./'))
});

/*=== Watch Styles ===*/

gulp.task('watch', function() {

  	gulp.watch('./scss/**/*.scss', ['styles']);
    gulp.watch('./**/**').on('change', reload) ;

});

/*=== Default Gulp task run watch ===*/

gulp.task('default', ['browser-sync', 'watch']);
