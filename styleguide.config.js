const path = require('path');
module.exports = {
	sections: [
		{
			name: 'Foundation',
			content: 'docs/Foundation.md',
		},
		{
			name: 'Core components',
			components: 'src/components/core/*.js',
		},
		{
			name: 'App components',
			components: 'src/components/app/**/*.js',
		},
	],
	styleguideDir: 'build/styleguide',
	styleguideComponents: {
		Wrapper: path.join(__dirname, 'src/Provider'),
	},
};
