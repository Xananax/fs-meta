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
	if (typeof options == 'function') {
		cb = options;
		options = null;
	}
	(0, _traverse2['default'])(fs, src, options, function (filePath, stats, options, next) {
		return (0, _getMeta2['default'])(filePath, options, function (err, stats) {
			files.push(stats);
			next();
		}, stats);
	}, function (err) {
		return err ? cb(err) : cb(null, files);
	});
}

module.exports = exports['default'];