module.exports = {
	plugins: ['jest'],
	extends: ['plugin:jest/recommended'],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		browser: true,
	},
	rules: {
		quotes: ['error', 'single', { avoidEscape: true }],
		'comma-dangle': ['error', 'always-multiline'],
	},
	settings: {
		react: {
			version: '17.0.2',
		},
	},
};
