'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = getMetaRecursive;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getMeta = require('./getMeta');

var _getMeta2 = _interopRequireDefault(_getMeta);

var _traverse = require('./traverse');

var _traverse2 = _interopRequireDefault(_traverse);

function getMetaRecursive(fs, src, options, cb) {
	var files = [];
	var indexes = {};
	var directories = {};
	if (typeof options == 'function') {
		cb = options;
		options = null;
	}
	(0, _traverse2['default'])(fs, src, options, function (filePath, stats, options, next) {
		(0, _getMeta2['default'])(fs, filePath, options, function (err, meta) {
			var index = files.push(meta) - 1;
			indexes[meta.path] = index;
			if (!directories[meta.dirname]) {
				directories[meta.dirname] = [];
			}
			directories[meta.dirname].push(index);
			if (meta.isDirectory) {
				meta.files = directories[meta.path];
			}
			next();
		}, stats);
	}, function (err) {
		return err ? cb(err) : cb(null, { indexes: indexes, files: files });
	});
}

module.exports = exports['default'];