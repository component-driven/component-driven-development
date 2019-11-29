const { src, dest } = require('gulp');
const watch = require('gulp-watch');
const through = require('through2');

// We need to escape \ when used with constructor
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
const CommentStartTpl = '(?:\\/\\/\\s|\\/\\*\\s?|<!--\\s?)';
const CommentEndTpl = '.*?\\n';

const getRegEx = entity =>
	` *?${CommentStartTpl}${entity}_START${CommentEndTpl}((.|\n|\r)*?) *${CommentStartTpl}${entity}_END${CommentEndTpl}`;

const REGEX = {
	final: new RegExp(getRegEx('FINAL'), 'g'),
	workshop: new RegExp(getRegEx('WORKSHOP'), 'g'),
	comment: new RegExp(getRegEx('COMMENT'), 'g'),
};

function createFinalContents(contents) {
	return contents
		.replace(REGEX.final, '$1')
		.replace(REGEX.workshop, '')
		.replace(REGEX.comment, '');
}

function createWorkshopContents(contents) {
	return contents
		.replace(REGEX.workshop, '$1')
		.replace(REGEX.final, '')
		.replace(REGEX.comment, '');
}

function transformTemplate(options = { transformFunc: () => {} }) {
	return through.obj((file, _, callback) => {
		if (file.isNull()) return callback(null, file); // pass along
		if (file.isStream())
			return callback(
				new Error('gulp-transform-workshop: Streaming not supported')
			);

		const newContents = options.transformFunc(file.contents.toString('utf8'));
		file.contents = Buffer.from(newContents);
		callback(null, file);
	});
}

const transformAll = () =>
	src('src/exercises/1-Introduction/templates/*')
		.pipe(
			transformTemplate({
				transformFunc: createWorkshopContents,
			})
		)
		.pipe(
			dest(file => {
				return file.base + '/../';
			})
		)
		.pipe(src('src/exercises/1-Introduction/templates/*'))
		.pipe(
			transformTemplate({
				transformFunc: createFinalContents,
			})
		)
		.pipe(
			dest(file => {
				return file.base + '/../final';
			})
		);

exports.default = transformAll;
exports.watch = () =>
	watch('src/exercises/1-Introduction/templates/*', () => {
		transformAll();
	});
