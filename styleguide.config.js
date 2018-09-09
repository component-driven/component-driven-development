const path = require('path');
const glob = require('glob');

// styleguidist server --exercise
const shouldShowExercises = !!process.argv.find(x => x === '--exercise');

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
	pagePerSection: true,
	exampleMode: 'expand',
};

if (shouldShowExercises) {
	// Generate sections for all exercises
	const exercisesRoot = path.join(__dirname, `src/exercises`);
	const exercises = glob.sync(`${exercisesRoot}/exercise*`);
	config.sections = exercises.map((folder, index) => ({
		name: `Exercise ${index + 1}`,
		content: `${folder}/Readme.md`,
		components: `${folder}/**/*.js`,
	}));
} else {
	// Styleguide
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
