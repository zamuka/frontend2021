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
    strict: ['off'],
		indent: ['off'],
		'no-tabs': ['off'],
    'func-names': ['off'],
		'no-console': ['off'],
		'no-plusplus': ['off'],
		'linebreak-style': ['off'],
    'no-restricted-syntax': ['off'],
		'prefer-object-spread': ['off'],
    'prefer-arrow-callback': ['off'],
		'operator-assignment': ['error', 'never'],
	},
    'import/prefer-default-export': ['off'],
    'import/extensions': ['off'],
};
