const fs = require('fs');
const path = require('path');
const glob = require('glob');
const webpackConfig = require('./webpack.config');

const EXERCISES = [[1, 4], [5, 5]];

// styleguidist server --exercise
const isExercises = !!process.argv.find(x => x === '--exercise');
const workshopId = 0; // TODO: take workshop ID as a CLI argument

const config = {
	serverPort: isExercises ? 6061 : 6060,
	title: 'Component-driven design systems workshop',
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
	updateExample(props, exampleFilePath) {
		const { settings, lang } = props;
		if (typeof settings.file === 'string') {
			const filepath = path.resolve(
				path.dirname(exampleFilePath),
				settings.file
			);
			const { file, ...restSettings } = settings;
			return {
				content: fs.readFileSync(filepath, 'utf8'),
				settings: restSettings,
				lang,
			};
		}
		return props;
	},
};

if (isExercises) {
	// Generate sections for all exercises
	const exercisesRoot = path.join(__dirname, `src/exercises`);
	const [first, last] = EXERCISES[workshopId];
	const exercises = glob.sync(`${exercisesRoot}/*`).slice(first - 1, last);
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
			content: 'src/components/primitives/Readme.md',
			components: 'src/components/primitives/**/[A-Z]*.js',
		},
		{
			name: 'UI Patterns',
			content: 'src/components/patterns/Readme.md',
			components: 'src/components/patterns/**/[A-Z]*.js',
		},
	];
}

module.exports = config;
