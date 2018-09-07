const fs = require('fs');
const path = require('path');
const args = require('node-args');
const chalk = require('chalk');

// Show an error message and quit
const die = message => {
	console.error(chalk.red(message));
	console.error();
	process.exit(1);
};

// styleguidist server --exercise 1 => 01
const exercise = args.exercise && args.exercise.toString().padStart(2, '0');

const config = {
	title: 'Component-driven development workshop',
	styleguideDir: 'build/styleguide',
	assetsDir: 'public',
	styleguideComponents: {
		Wrapper: path.join(__dirname, 'src/Provider'),
	},
	// Read examples from Component.md files only, not from Readme.md
	getExampleFilename: x => x.replace(/\.js$/, '.md'),
	skipComponentsWithoutExample: true,
	exampleMode: 'expand',
};

if (exercise) {
	// Load components from an exercise folder
	const exerciseFolder = path.join(
		__dirname,
		`src/exercises/exercise${exercise}`
	);
	if (!fs.existsSync(exerciseFolder)) {
		die(`Exercise ${args.exercise} not found`);
	}

	config.title = `Exercise ${args.exercise}`;
	config.sections = [
		{
			name: config.title,
			content: `${exerciseFolder}/Readme.md`,
			components: `${exerciseFolder}/**/*.js`,
		},
	];
} else {
	config.sections = [
		{
			name: 'Foundation',
			content: 'docs/Foundation.md',
			sections: [
				{
					name: 'Colors',
					content: 'docs/Colors.md',
				},
				{
					name: 'Typography',
					content: 'docs/Typography.md',
				},
				{
					name: 'Spacing',
					content: 'docs/Spacing.md',
				},
			],
		},
		{
			name: 'Components',
			components: 'src/components/core/**/[A-Z]*.js',
		},
		{
			name: 'Patterns',
			components: 'src/components/app/**/*.js',
		},
	];
}

module.exports = config;
