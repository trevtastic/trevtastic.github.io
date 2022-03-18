'use strict';

// load node path module
const path = require( 'path' );
const autoprefixer = require( 'autoprefixer' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const CssMinimizerPlugin = require( 'css-minimizer-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const TerserPlugin = require( 'terser-webpack-plugin' );
const webpack = require( 'webpack' );

// Load custom scripts
const getTemplateParams = require( './src/shared/util/helpers/helper-webpack-scripts.js' );
const { htmlLinks, metadata } = require( './src/shared/util/helpers/helper-pwa-touch.js' );

// Set up env variables
require( 'dotenv' ).config();

// Config

function Config( env, argv )
{
	// Custom params
	const theme = 'bluegrey';
	const timeStamp = new Date().getTime();
	const cssDest = '/assets/css/gen/';
	const jsDest = '/assets/js/gen/';
	const jsLib = '/assets/js/lib/';

	// entry descriptor: manual sort
	const entries = {
		vendor: {
			destCSS: cssDest,
			destJS: jsDest
		},
		bundle: {
			destCSS: cssDest,
			destJS: jsDest
		},
		app: {
			import: '/src/client/app',
			destCSS: cssDest,
			destJS: jsDest
		},
		common: {
			import: '/src/client/common',
			destCSS: cssDest,
			destJS: jsDest
		},
	};

	// define environment
	const envMode = process.env.MODE;
	const devMode = envMode !== 'production';

	// define namespace
	const name = devMode ? '[name].[chunkhash]' : '[name].[contenthash]';

	return {

		entry: (function () {
			let all = {},
				entry;

			for ( entry in entries )
			{
				if (
					Object.prototype.hasOwnProperty.call( entries, entry ) &&
					entries[ entry ][ 'import' ]
				) {
					all[ entry ] = {
						filename: name + '.js',
						import: entries[ entry ][ 'import' ]
					};
				}
			}

			return all;
		})(),

		devtool: false, // how to generate source maps

		externals: {
			jquery: 'jQuery',
			lodash: 'lodash',
			underscore: '_'
		},

		mode: envMode,

		module: {
			rules: [
				{
					test: /\.jsx?$/, // match both .js and .jsx files
					exclude: [ /node_modules/, /.+\.config.js/ ],
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								[
									'@babel/preset-env',
									{
										ignoreBrowserslistConfig: false,
										browserslistEnv: 'modern',
										debug: devMode,
										useBuiltIns: 'usage',
										corejs: '3.21'
									}
								],
								[
									'@babel/preset-react',
									{
										development: devMode
									}
								]
							],
							plugins: []
						}
					}
				},
				{
					test: /\.(sa|sc|c)ss$/, // match both .sass and .scss files
					use: [
						{
							loader: MiniCssExtractPlugin.loader
						},
						{
							loader: 'css-loader',
							options: { url: false }
						},
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									plugins: [
										[
											autoprefixer,
											{
												env: 'modern'
											}
										]
									]
								}
							}
						},
						{
							loader: 'sass-loader'
						}
					] // Loaders are applied from last to first
				},
				{
					test: /\.(jpe?g|png|gif|svg)$/, // match jpg, jpeg, png, gif and svg files
					use: {
						loader: 'url-loader',
						options: {
							limit: 40000,
							outputPath: path.resolve( 'src', 'shared', 'assets', 'images' ),
						}
					}
				}
			]
		},

		optimization: {
			chunkIds: "deterministic",
			splitChunks: {
				chunks: 'all',
				automaticNameDelimiter: '.',
				cacheGroups: {
					vendor: {
						name: 'vendor',
						test: /[\\/]node_modules[\\/]/,
						filename: name + '.js'
					},
					bundle: {
						name: 'bundle',
						test: function ( module, chunks ) {
							const paths = [
								path.resolve( 'src', 'client', 'react', 'components' ),
								path.resolve( 'src', 'client', 'react', 'constants' ),
								path.resolve( 'src', 'client', 'react', 'containers' ),
								path.resolve( 'src', 'client', 'react', 'context' ),
								path.resolve( 'src', 'client', 'react', 'helpers' ),
								path.resolve( 'src', 'client', 'react', 'hooks' ),
								path.resolve( 'src', 'client', 'react', 'layouts' ),
								path.resolve( 'src', 'client', 'react', 'redux' ),
								path.resolve( 'src', 'client', 'util' )
							];

							if ( module.resource != undefined )
							{
								for ( let item of paths )
								{
									if ( module.resource.includes( item ) ) {
										return true;
									}
								}
							}

							return false;
						},
						minChunks: 1,
						filename: name + '.js'
					}
				}
			},
			minimizer: [
				new TerserPlugin({
					parallel: true,
					terserOptions: {
						compress: true,
						ecma: 6,
						mangle: true
					}
				}),
				new CssMinimizerPlugin({
					minimizerOptions: {
						preset: [
							'default',
							{
								discardComments: { removeAll: true }
							}
						]
					}
				})
			]
		},

		output: {
			filename: name + '.js',
			path: path.resolve( 'src', 'client', 'build' ), // the target directory for all output files
		},

		performance: {
			hints: ! devMode ? 'warning' : false
		},

		plugins: [
			// Define env variables
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify( envMode )
			}),

			// Write out our compiled .js scripts to html page
			new HtmlWebpackPlugin({
				appMountId: 'appMountPoint',
				devMode,
				entries,
				filename: 'react.njk',
				inject: false,
				links: htmlLinks,
				meta: metadata,
				minify: {
					collapseInlineTagWhitespace: false,
					collapseWhitespace: false,
				},
				mobile: true,
				scripts: [
					{
						type: 'text/javascript',
						src: ( ! devMode ? jsLib + 'jquery-3.5.1.min.js' : jsLib + 'jquery-3.5.1.js' )
					}
				],
				template: 'src/shared/templates/react.ejs',
				templateParameters: getTemplateParams,
				theme,
				timeStamp
			}),
			new HtmlWebpackPlugin({
				appMountId: 'appMountPoint',
				devMode,
				entries,
				filename: 'legacy.njk',
				inject: false,
				links: [
					htmlLinks.favicon
				],
				meta: [
					metadata.description,
					metadata.keywords
				],
				minify: {
					collapseInlineTagWhitespace: false,
					collapseWhitespace: false,
					keepClosingSlash: true, // for xhtml
				},
				mobile: true,
				scripts: [
					{
						type: 'text/javascript',
						src: ( ! devMode ? jsLib + 'jquery-1.12.4.min.js' : jsLib + 'jquery-1.12.4.js' )
					}
				],
				template: 'src/shared/templates/legacy.ejs',
				templateParameters: getTemplateParams,
				theme,
				timeStamp
			}),
			new HtmlWebpackPlugin({
				appMountId: 'appMountPoint',
				devMode,
				entries,
				filename: 'standard.njk',
				inject: false,
				links: htmlLinks,
				meta: metadata,
				minify: {
					collapseInlineTagWhitespace: false,
					collapseWhitespace: false,
				},
				mobile: true,
				scripts: [
					{
						type: 'text/javascript',
						src: ( ! devMode ? jsLib + 'jquery-3.5.1.min.js' : jsLib + 'jquery-3.5.1.js' )
					}
				],
				template: 'src/shared/templates/standard.ejs',
				templateParameters: getTemplateParams,
				theme,
				timeStamp
			}),
			
			// Extract css
			new MiniCssExtractPlugin({
				filename: name + '.css',
				// runtime: false, // disable lazy loading css files
			}),

			// Generate source maps
			! devMode ? new webpack.SourceMapDevToolPlugin({
				append: '\n//# sourceMappingURL=[url]',
				exclude: [ new RegExp( 'vendor\.[a-z0-9]+\.js' ) ],
				filename: name + '[ext].map'
			}) : function() {}
		],

		resolve: {
			extensions: [ '.js', '.jsx' ],
			modules: [
				path.resolve( 'node_modules' ),
				path.resolve( 'src' )
			],
			alias: {
				App: path.resolve( 'src', 'client', 'app' ),
				Legacy: path.resolve( 'src', 'client', 'legacy' ),
				Server: path.resolve( 'src', 'server' ),
				Scss: path.resolve( 'src', 'client', 'scss' ),
				Shared: path.resolve( 'src', 'shared' ),
				Workers: path.resolve( 'src', 'client', 'workers' )
			}
		},

		target: 'web',

	};
}

module.exports = Config;