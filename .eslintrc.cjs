module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		es2021: true,
		node: true,
		jest: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended'
	],
	globals: {
		Atomics: 'readonly',
		jQuery: 'readonly',
		SharedArrayBuffer: 'readonly',
		wp: 'readonly',
	},
	parser: '@babel/eslint-parser',
	parserOptions: {
		babelOptions: {
			presets: [ '@babel/preset-react' ]
		},
		ecmaFeatures: {
			impliedStrict: true,
			jsx: true
		},
		ecmaVersion: 'latest',
		requireConfigFile: false,
		sourceType: 'module'
	},
	plugins: [
		'@babel',
		'react',
		'react-hooks'
	],
	rules: {
		'no-console': 'off',
		'no-unused-vars': 'off',
		'react/display-name': 'off',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'@babel/new-cap': 'error', // handles decorators (@Decorator)
		'@babel/no-invalid-this': 'off', // handles class fields and private class methods
		'@babel/no-unused-expressions': 'off', // handles do expressions
		'@babel/object-curly-spacing': 'off', // handles export * as x from "mod";
		'@babel/semi': 'error', // Handles class properties
	},
	settings: {
		'react': {
			version: 'detect'
		}
	}
};