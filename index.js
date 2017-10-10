'use strict';

import path from 'path';
import gutil from 'gulp-util';
import through from 'through2';

import * as babel from 'babel-core';

// function relPath(base, filePath) {
// 	filePath = filePath.replace(/\\/g, '/');
// 	base = base.replace(/\\/g, '/');

// 	if (filePath.indexOf(base) !== 0) {
// 		return filePath;
// 	}

// 	const newPath = filePath.slice(base.length);

// 	if (newPath[0] === '/') {
// 		return newPath.slice(1);
// 	}

// 	return newPath;
// }

// function transformFilename(file) {
// 	// Save the old path for later
// 	file.revOrigPath = file.path;
// 	file.revOrigBase = file.base;
// 	file.revHash = revHash(file.contents);

// 	file.path = modifyFilename(file.path, (filename, extension) => {
// 		const extIndex = filename.indexOf('.');

// 		filename = extIndex === -1 ?
// 			revPath(filename, file.revHash) :
// 			revPath(filename.slice(0, extIndex), file.revHash) + filename.slice(extIndex);

// 		return filename + extension;
// 	});
// }

function transpile() {
	const pathMap = {};

	return through.obj((file, enc, cb) => {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		console.log(file);

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-rev', 'Streaming not supported'));
			return;
		}

		if (path.extname(file.path) === '.js') {
			babel.transform()
		}

		cb(null, file);
	});
};

export default transpile;