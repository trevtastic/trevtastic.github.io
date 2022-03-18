// Import vendor modules

const gulp = require( 'gulp' );
const autoprefixer = require( 'autoprefixer' );
const babel = require( 'gulp-babel' );
const concat = require( 'gulp-concat' );
const cssnano = require( 'cssnano' );
const del = require( 'del' );
const gulpIf = require( 'gulp-if' );
const postcss = require( 'gulp-postcss' );
const rename = require( 'gulp-rename' );
const sass = require( 'gulp-sass' )( require( 'sass' ) );
const gulpTerser = require( 'gulp-terser' );
const { minify } = require( 'terser' );

// set up env variables
require( 'dotenv' ).config();

// Common variables
const resolve = {
	publicPath:  'docs',
	srcPath:     'src/client',
	serverPath:  'src/server',
	sharedPath:  'src/shared',
	cssDestPath: '/assets/css/gen',
	jsDestPath:  '/assets/js/gen',
	distPath:    '/build',
	jsPath:      '/legacy',
	jsUtilPath:  '/util',
	scssPath:    '/scss',
	workersPath: '/workers'
};

// Cleanup tasks

function cleanTask()
{
	return del([
		// delete everything in the client build folder
		resolve.srcPath + resolve.distPath + '/**/*',
		// delete all generated css and sourcemaps in the public `css` folder
		resolve.publicPath + resolve.cssDestPath + '/**/*.css*',
		// delete all generated js and sourcemaps in the public `js` folder
		resolve.publicPath + resolve.jsDestPath + '/**/*.js*',
		// delete all public js workers minified and sourcemaps
		resolve.publicPath + '/*.map'
	]);
}

// Copy tasks

function copyAllCssTask()
{
	return gulp.src(
		resolve.srcPath + resolve.distPath + '/**/*.css*'
	)
	.pipe( gulp.dest( resolve.publicPath + resolve.cssDestPath ) );
}

function copyAllJsTask()
{
	return gulp.src(
		resolve.srcPath + resolve.distPath + '/**/*.js*'
	)
	.pipe( gulp.dest( resolve.publicPath + resolve.jsDestPath ) );
}

function copyTemplatesTask()
{
	return gulp.src([
		resolve.srcPath + resolve.distPath + '/**/*.njk*',
		'!' + resolve.srcPath + resolve.distPath + '/**/*.css*',
		'!' + resolve.srcPath + resolve.distPath + '/**/*.js*'
	])
	.pipe( gulp.dest( resolve.srcPath + '/content/_layouts' ) );
}

// Define environment
function getEnv()
{
	return process.env.MODE !== 'production';
}

// Javascript tasks

function jsTask()
{
	const devMode = getEnv();

	return gulp.src(
		[
			resolve.srcPath + resolve.jsPath + '/index.js',
			// resolve.sharedPath + resolve.jsUtilPath + '/bootstrap/v3/transition.js',
			// resolve.sharedPath + resolve.jsUtilPath + '/bootstrap/v3/alert.js',
			// resolve.sharedPath + resolve.jsUtilPath + '/bootstrap/v3/button.js',
			// resolve.sharedPath + resolve.jsUtilPath + '/bootstrap/v3/carousel.js',
			// resolve.sharedPath + resolve.jsUtilPath + '/bootstrap/v3/collapse.js',
			// resolve.sharedPath + resolve.jsUtilPath + '/bootstrap/v3/dropdown.js',
			// resolve.sharedPath + resolve.jsUtilPath + '/bootstrap/v3/modal.js',
			// resolve.sharedPath + resolve.jsUtilPath + '/bootstrap/v3/tooltip.js',
			// resolve.sharedPath + resolve.jsUtilPath + '/bootstrap/v3/popover.js',
			// resolve.sharedPath + resolve.jsUtilPath + '/bootstrap/v3/scrollspy.js',
			// resolve.sharedPath + resolve.jsUtilPath + '/bootstrap/v3/tab.js',
			// resolve.sharedPath + resolve.jsUtilPath + '/bootstrap/v3/affix.js',
			resolve.srcPath + resolve.jsPath + '/main.js'
		],
		{ sourcemaps: ! devMode }
	)
	.pipe( babel({
		presets: [ '@babel/preset-env' ],
		plugins: []
	}))
	.pipe( concat( 'all.js' ) )
	.pipe( gulpIf( ! devMode, gulpTerser( { ecma: 5 }, minify ) ) )
	.pipe( gulpIf( ! devMode, rename({
		suffix: '.min',
		extname: '.js'
	})))
	.pipe( gulp.dest( resolve.srcPath + resolve.distPath, { sourcemaps: '.' } ) );
}

// Sass tasks

function scssTask() 
{
	const devMode = getEnv();

	let postModules = [
		autoprefixer({
			env: 'legacy'
		})
	];
	
	if ( ! devMode )
	{
		postModules.push(
			cssnano({
				preset: [
					'default',
					{
						discardComments: { removeAll: true }
					}
				]
			})
		);
	}

	return gulp.src(
		[ resolve.srcPath + resolve.scssPath + '/bootstrap-3/**/*.scss' ],
		{ sourcemaps: ! devMode }
	)
	.pipe( sass().on( 'error', sass.logError ) )
	.pipe( postcss( postModules ) )
	.pipe( gulpIf( ! devMode, rename({
		suffix: '.min',
		extname: '.css'
	})))
	.pipe( gulp.dest( resolve.srcPath + resolve.distPath, { sourcemaps: '.' } ) );
}

// Web workers task

function swTask()
{
	const devMode = getEnv();

	return gulp.src(
		[
			resolve.srcPath + resolve.workersPath + '/service/main.js'
		],
		{ sourcemaps: ! devMode }
	)
	.pipe( babel({
		presets: [ '@babel/preset-env' ],
		plugins: []
	}))
	.pipe( concat( 'sw.js' ) )
	.pipe( gulpIf( ! devMode, gulpTerser( {}, minify ) ) )
	.pipe( gulp.dest( resolve.publicPath, { sourcemaps: '.' } ) );
}

exports.clean = cleanTask;
exports.default = gulp.series(
	gulp.parallel(
		scssTask,
		jsTask,
		swTask
	),
	copyAllCssTask,
	copyAllJsTask,
	copyTemplatesTask
);