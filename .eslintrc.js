module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['plugin:react/recommended', 'standard', 'prettier'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.js', '.jsx'],
			},
		],
		'import/no-named-as-default': 0,
		'no-console': 'off',
		'no-unused-vars': 'off',
		'no-plusplus': 'off',
		'linebreak-style': 0,
		'react/prop-types': 0,
		'import/no-unresolved': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/tabindex-no-positive': 'off',
		'no-shadow': 'off',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: true,
			},
		],
		'no-unused-expressions': [
			'error',
			{
				allowTernary: true,
				allowShortCircuit: true,
			},
		],
		'react/jsx-no-bind': 'off',
		'no-nested-ternary': 'off',
		'no-param-reassign': 'off',
		camelcase: 'off',
		'jsx-a11y/no-noninteractive-element-interactions': 'off',
		'jsx-a11y/label-has-associated-control': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
			},
		],
		'react/no-array-index-key': 'off',
	},
};
