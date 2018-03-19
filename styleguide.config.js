const path = require('path');
module.exports = {
	styleguideDir: 'build/styleguide',
	styleguideComponents: {
		Wrapper: path.join(__dirname, 'src/styleguide/ThemeWrapper'),
	},
};
