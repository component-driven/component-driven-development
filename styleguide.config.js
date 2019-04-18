const path = require('path');
const glob = require('glob');
const webpackConfig = require('./webpack.config');

// styleguidist server --exercise
const isExercises = !!process.argv.find(x => x === '--exercise');

const config = {
	serverPort: isExercises ? 6061 : 6060,
	title: 'Component-driven development workshop',
	styleguideDir: 'build/styleguide',
	assetsDir: 'public',
	styleguideComponents: {
		Wrapper: path.join(__dirname, 'src/StyleGuideWrapper'),
	},
	// Read examples from Component.md files only, not from Readme.md
	getExampleFilename: x => x.replace(/\.js$/, '.md'),
	skipComponentsWithoutExample: true,
	pagePerSection: true,
	exampleMode: 'expand',
	usageMode: 'expand',
	webpackConfig,
};

if (isExercises) {
	// Generate sections for all exercises
	const exercisesRoot = path.join(__dirname, `src/exercises`);
	const exercises = glob.sync(`${exercisesRoot}/*`);
	config.sections = exercises.map(folder => ({
		name: path
			.basename(folder)
			.replace(/(\d)-/, '')
			.replace(/_/g, ' '),
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
			name: 'Primitives',
			components: 'src/components/core/**/[A-Z]*.js',
		},
		{
			name: 'UI Patterns',
			content: 'src/components/patterns/Readme.md',
			components: 'src/components/patterns/**/[A-Z]*.js',
		},
	];
}

module.exports = config;
