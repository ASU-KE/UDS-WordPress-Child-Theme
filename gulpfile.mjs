import gulp from 'gulp';
import { deleteAsync } from 'del';
import filter from 'gulp-filter';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
const sass = gulpSass(dartSass);

/**
 * Compile SCSS to CSS
 */
gulp.task("compile-minify-sass", function () {
	return gulp.src( './src/sass/child-theme.scss', { sourcemaps: true } )
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(cleanCSS())
	.pipe(rename({ suffix: ".min" }))
	.pipe(gulp.dest('./dist/css', { sourcemaps: '.' }));
});

/**
 * Front-end Javascript compilation. Scripts enqueued in the front-end of the site.
 */
gulp.task("front-end-scripts", function() {
	const scripts = [
		"./src/js/child-theme.js",
	]

	// Create uglifified min.js
	return gulp
		.src(scripts, { allowEmpty: true })
		.pipe(babel({ presets: ["@babel/preset-env"] }))
		.pipe(concat("theme.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest("./dist/js"));
	});