module.exports = {
	root: true,
	env: {
		browser: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: [
		'plugin:vue/recommended',
	],
	settings: {
		'import/resolver': {
			alias: {
				map: [
					['~', '.'],
					['@', '.'],
				],
				extensions: ['.js', '.vue'],
			},
		},
	},

	// add your custom rules here
	rules: {
		// #region ESLint base override

		// Use single quote
		quotes: ['error', 'single', {
			avoidEscape: true,
			allowTemplateLiterals: true,
		}],

		// Require trailing comma on multiline
		'comma-dangle': ['error', 'always-multiline'],
		'import/prefer-default-export': 'off',

		// #endregion

		// #region Vue override

		// Indent for HTML in .vue files
		'vue/html-indent': ['error'],

		// To prevent self-closing on normal HTML tag
		'vue/html-self-closing': ['error', {
			html: {
				normal: 'never',
			},
		}],

		// Allow maximum attrs per line to 3
		'vue/max-attributes-per-line': ['error', {
			singleline: 3,
		}],

		// Allow single line html elenment
		"vue/singleline-html-element-content-newline": 0,
		// #endregion
	},
};
