var verifySystem = require('./vendor/workshop-setup').verifySystem;

verifySystem([
	verifySystem.validators.node('>=8.6.0'),
	verifySystem.validators.npm('>=5.4.0'),
	function verifyDeps() {
		// Doesn't really verify dependencies, just checks that the user has
		// installed them at least once. Real verification would be too slow
		try {
			require('react');
		} catch (err) {
			return 'You need to install dependencies: run `npm install` in your terminal.';
		}
		return null;
	},
]).then(
	function() {
		// Everything is good!
	},
	function(error) {
		console.log();
		console.log();
		console.error(error);
		console.log();
		console.log();
		process.exit(1);
	}
);
