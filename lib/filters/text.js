'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = textFilter;

var _types = require('./types');

var formats = _types.extensions.text;

function textFilter(obj, options, cb, fs) {
	if (!formats.test(obj.extension)) {
		return cb(null, obj);
	}
	fs.readFile(obj.path, { encoding: 'utf8' }, function (err, contents) {
		if (err) {
			return cb(err);
		}
		obj.contents = contents;
		return cb(null, obj);
	});
}

module.exports = exports['default'];