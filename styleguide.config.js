const fs = require('fs');
const path = require('path');
const glob = require('glob');

const EXERCISES = {
	'workshop-cdd': [1, 5],
	'workshop-rcl': [6, 6],
};

// styleguidist server --exercises-cdd OR styleguidist server --exercises-rcl
const isExercisesCdd = !!process.argv.find(x => x === '--exercises-cdd');
const isExercisesRcl = !!process.argv.find(x => x === '--exercises-rcl');

const mode = isExercisesCdd
	? 'workshop-cdd'
	: isExercisesRcl
	? 'workshop-rcl'
	: 'styleguide';

const config = {
	serverPort: mode === 'styleguide' ? 6060 : 6061,
	title: 'Component-driven design systems workshop',
	styleguideDir: 'public/styleguide',
	assetsDir: 'static',
	styleguideComponents: {
		Wrapper: path.join(__dirname, 'src/ThemeProvider'),
	},
	// Read examples from Component.md files only, not from Readme.md
	getExampleFilename: x => x.replace(/\.js$/, '.md'),
	skipComponentsWithoutExample: true,
	pagePerSection: true,
	exampleMode: 'expand',
	usageMode: 'expand',
	styles: {
		StyleGuide: {
			'@global img': {
				maxWidth: '100%',
			},
		},
	},
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
				},
			],
		},
	},
	require: [path.join(__dirname, 'styleguide.setup.js')],
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

if (mode === 'styleguide') {
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
			name: 'Layout Primitives',
			content: 'src/components/layout/Readme.md',
			components: 'src/components/layout/**/[A-Z]*.js',
		},
		{
			name: 'UI Patterns',
			content: 'src/components/patterns/Readme.md',
			components: 'src/components/patterns/**/[A-Z]*.js',
		},
	];
} else {
	// Generate sections for all exercises
	const exercisesRoot = path.join(__dirname, `src/exercises`);
	const [first, last] = EXERCISES[mode];
	const exercises = glob.sync(`${exercisesRoot}/*`).slice(first - 1, last);
	config.sections = exercises.map(folder => ({
		name: path
			.basename(folder)
			.replace(/(\d)-/, '')
			.replace(/_/g, ' '),
		content: `${folder}/Readme.md`,
		components: `${folder}/**/*.js`,
	}));
}

module.exports = config;
