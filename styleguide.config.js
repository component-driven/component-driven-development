const path = require('path');
const glob = require('glob');
const webpackConfig = require('react-scripts/config/webpack.config');

// styleguidist server --exercise
const isExercises = !!process.argv.find(x => x === '--exercise');

// Patch Create React App webpack config with Babel plugin for styled-components
try {
	const loaders = webpackConfig.module.rules[1].oneOf;
	const babelLoader = loaders.find(loader =>
		loader.loader.includes('babel-loader')
	);
	babelLoader.options.plugins = ['babel-plugin-styled-components'];
} catch (err) {}

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
			name: 'Primitives',
			components: 'src/components/core/**/[A-Z]*.js',
		},
		{
			name: 'UI Patterns',
			components: 'src/components/patterns/**/[A-Z]*.js',
		},
	];
}

module.exports = config;
