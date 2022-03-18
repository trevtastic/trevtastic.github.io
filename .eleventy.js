module.exports = function ( eleventyConfig ) {

	// plugins
	const htmlmin = require( 'html-minifier' );
	const markdownIt = require( 'markdown-it' );
	const markdowItAttrs = require( 'markdown-it-attrs' );
	const markdownItReplaceLink = require( 'markdown-it-replace-link' );

	// set up env variables
	require( 'dotenv' ).config();

	// options
	const markdowItOpts = {
		html: true, // enable HTML tags in source.
		breaks: true,
		linkify: true,
		replaceLink: function ( link, env ) { // format links

			let preRegex   = /^(?:http[s]*:\/\/|mailto:|\/|#).+$/i,
				postRegex  = /(?:index)*\.m(?:d|md|kd|arkdown)$/,
				imgRegex   = /[\w.-]+(?:jpg|png|gif|svg|webp)$/i,
				relRegex   = /\/?(\.+)\//g, isDev = process.env.MODE !== 'production',
				ltrimRegex = /^\//, publicPath = '/',
				relMatch   = link.match( relRegex );

			// debug
			// console.log( 'Link before: ', link );

			// set public path for production
			if ( ! isDev ) {
				publicPath += '/';
			}

			// resolve relative links
			if ( relMatch ) {
				let linkSrc   = env.page.url.split( '/' ).filter( ( el ) => el !== '' );
				// process results
				for ( let dot of relMatch ) {
					if ( dot.replace( '/', '' ) === '..' ) {
						linkSrc.pop();
						continue;
					}
				}
				// combine
				link = publicPath + linkSrc.join( '/' );
			} else if ( postRegex.test( link ) ) { // resolve markdown file links
				link = publicPath + env.page.url.replace( ltrimRegex, '' ) + link.replace( postRegex, '' ); // + env.page.outputFileExtension
			} else if ( match = link.match( imgRegex ) ) { // resolve images and icons
				link = publicPath + 'assets/img/content/' + match[ 0 ];
			} else if ( preRegex.test( link ) ) { // resolve absolute links
				// do nothing
			} else { // fallback
				link = publicPath + link.replace( ltrimRegex, '' );
			}

			// debug
			// console.log( 'Link after: ', link );

			return link;
		}
	};

	// init plugins
	const markdownLib = (
		markdownIt( markdowItOpts )
			.use( markdowItAttrs )
			.use( markdownItReplaceLink )
	);

	// register plugins
	eleventyConfig.setLibrary( 'md', markdownLib );
	
	// add transforms
	eleventyConfig.addPassthroughCopy( { 'src/client/content/assets/img': 'assets/img/content' } );
	eleventyConfig.addTransform( 'htmlmin', function ( content ) {
		if ( this.outputPath && this.outputPath.endsWith( '.html' ) ) {
			let minified = htmlmin.minify( content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true
			});

			return minified;
		}

		return content;
	});

	// return config
	return {
		dir: {
			input:   'src/client/content',
			output:  'docs',
			layouts: '_layouts'
		},
		markdownTemplateEngine: 'njk',
		// pathPrefix: '/folder'
	};

};