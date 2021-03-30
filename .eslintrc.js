module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['airbnb-base'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		indent: ['off'],
		'no-tabs': ['off'],
		'no-console': ['off'],
		'no-plusplus': ['off'],
		'linebreak-style': ['off'],
		'prefer-object-spread': ['off'],
		'operator-assignment': ['error', 'never'],
	},
};
