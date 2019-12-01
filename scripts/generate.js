const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const chokidar = require('chokidar');

const isWatching = !!process.argv.find(x => x === '--watch');

const sourceGlob = 'src/exercises/*/templates/*';

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

function saveFile(filepath, contents) {
	mkdirp.sync(path.dirname(filepath));
	fs.writeFileSync(filepath, createWorkshopContents(contents));
}

function transformTemplateFile(filepath) {
	console.log('👉', filepath);
	const directory = path.dirname(path.dirname(filepath));
	const name = path.basename(filepath);
	const contents = fs.readFileSync(filepath, 'utf8');
	saveFile(path.join(directory, name), createWorkshopContents(contents));
	saveFile(path.join(directory, 'final', name), createFinalContents(contents));
}

const watcher = chokidar
	.watch(sourceGlob)
	.on('add', transformTemplateFile)
	.on('change', transformTemplateFile)
	.on('ready', () => {
		if (!isWatching) {
			// Stop watching after the initial processing completed
			watcher.close();
		}
	});
