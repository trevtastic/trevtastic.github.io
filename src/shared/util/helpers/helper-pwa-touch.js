const timeStamp = new Date().getTime();
const touchIconDest = '/images/common/touch';
const favIconDest = '/images/common/favicon';

// List of pwa icon support tags
const htmlLinks = {
	'apple-touch-icon': {
		rel: 'apple-touch-icon',
		sizes: '180x180',
		href: touchIconDest + '/apple-touch-icon.png?v=' + timeStamp
	},
	'apple-touch-startup-image-1096': {
		rel: 'apple-touch-startup-image',
		media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
		href: touchIconDest + '/apple-launch-640x1096.png?v=' + timeStamp
	},
	'apple-touch-startup-image-1136': {
		rel: 'apple-touch-startup-image',
		media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
		href: touchIconDest + '/apple-launch-640x1136.png?v=' + timeStamp
	},
	'favicon-180': {
		rel: 'icon',
		type: 'image/png',
		sizes: '180x180',
		href: favIconDest + '/favicon-180x180.png?v=' + timeStamp
	},
	'favicon-96': {
		rel: 'icon',
		type: 'image/png',
		sizes: '96x96',
		href: favIconDest + '/favicon-96x96.png?v=' + timeStamp
	},
	'favicon-32': {
		rel: 'icon',
		type: 'image/png',
		sizes: '32x32',
		href: favIconDest + '/favicon-32x32.png?v=' + timeStamp
	},
	'favicon-16': {
		rel: 'icon',
		type: 'image/png',
		sizes: '16x16',
		href: favIconDest + '/favicon-16x16.png?v=' + timeStamp
	},
	'favicon': {
		rel: 'shortcut icon',
		href: '/favicon.ico?v=' + timeStamp
	},
	'manifest': {
		rel: 'manifest',
		href: '/manifest.json?v=' + timeStamp
	},
	'safari-pinned-tab': {
		rel: 'mask-icon',
		color: '#f62b54',
		href: touchIconDest + '/safari-pinned-tab.svg?v=' + timeStamp
	}
};

// Meta content
const metadata = {
	'description': {
		name: 'description',
		content: 'Welcome to MERN.'
	},
	'keywords': {
		name: 'keywords',
		content: 'web development, software development, software engineering'
	},
	'msapplication-config': {
		name: 'msapplication-config',
		content: '/browserconfig.xml'
	},
	'theme-color': {
		name: 'theme-color',
		content:'#000000'
	},
	'apple-web-capable': {
		name: 'apple-mobile-web-app-capable',
		content: 'yes'
	},
	'apple-web-status-bar': {
		name: 'apple-mobile-web-app-status-bar',
		content: '#000000'
	},
	'apple-web-status-bar-style': {
		name: 'apple-mobile-web-app-status-bar-style',
		content: 'black' // default, black, black-translucent
	},
	'apple-web-title': {
		name: 'apple-mobile-web-app-title',
		content: 'MERN App'
	},
	'og-site-name': {
		property: 'og:site_name',
		content: 'MERN'
	},
	'og-image-secure': {
		property: 'og:image_secure',
		content: 'https://mern.com/images/content/bg/site-poster.jpg?v=' + timeStamp
	},
	'og-title': {
		property: 'og:title',
		content: 'MERN | Web development'
	},
	'og-description': {
		property: 'og:description',
		content: 'Web development.'
	},
	'og-type': {
		property: 'og:type',
		content: 'website'
	},
	'og-url': {
		property: 'og:url',
		content: 'https://mern.com'
	}
};

module.exports = { htmlLinks, metadata };