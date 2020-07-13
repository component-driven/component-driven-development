const fs = require('fs');
const path = require('path');
const glob = require('glob');

// styleguidist server --exercises
const isExercises = !!process.argv.find(x => x === '--exercises');

const borderedStyle = {
	border: '1px solid #e8e8e8',
	borderRadius: 3,
	padding: 16,
};

// Prepare Markdown file to use as final result:
// 1. Remove ```js ... ``` markers from Markdown
// 2. Replace <></> with a <div /> that looks like a Styleguidist example,
//    but without an editor
const markdownToCodeExample = s =>
	s
		.replace(/^```\w*$/gm, '')
		.replace(/<>/, `<div style={${JSON.stringify(borderedStyle)}}>`)
		.replace(/<\/>/, `</div>`);

const config = {
	serverPort: isExercises ? 6061 : 6060,
	title: isExercises
		? 'Design systems for React developers'
		: 'Component-driven',
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
		if (settings && typeof settings.file === 'string') {
			const filepath = path.resolve(
				path.dirname(exampleFilePath),
				settings.file
			);
			const { file, ...restSettings } = settings;
			const rawContent = fs.readFileSync(filepath, 'utf8');
			const content =
				filepath.endsWith('.md') && lang === 'jsx'
					? markdownToCodeExample(rawContent)
					: rawContent;
			return {
				content,
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
	const exercises = glob.sync(`${exercisesRoot}/*`);
	config.sections = exercises.map(folder => ({
		name: path
			.basename(folder)
			.replace(/^(\d+)-/, '$1. ')
			.replace(/_/g, ' '),
		content: `${folder}/Readme.md`,
		sectionDepth: 1,
		sections: [
			{
				name: 'Task',
				content: `${folder}/Readme.md`,
			},
			{
				name: 'Exercises',
				components: `${folder}/*.js`,
			},
		],
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
}

module.exports = config;
