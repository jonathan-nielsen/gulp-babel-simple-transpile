'use strict';

const path = require('path');
const gutil = require('gulp-util');
const through = require('through2');
const babel = require('babel-core');
const applySourceMap = require('vinyl-sourcemaps-apply');
const objectAssign = require('object-assign');

module.exports = function(options) {
	options = options || {
		presets: ['env']
	};

	return through.obj(function(file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-esnext', 'Streaming not supported'));
			return;
		}

		try {
			const fileOptions = objectAssign({}, options);

			if (file.sourceMap) {
				fileOptions.sourceFileName = file.relative;
				fileOptions.sourceMapTarget = file.relative;
			}

			const str = file.contents.toString();
			const res = babel.transform(str, fileOptions);

			file.contents = new Buffer(res.code);

			if (res.map && file.sourceMap) {
				applySourceMap(file, res.map);
			}

			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-esnext', err, { fileName: file.path }));
		}

		cb();
	});
};