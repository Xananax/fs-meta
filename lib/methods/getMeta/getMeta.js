'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = getMeta;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _processStat = require('./processStat');

var _processStat2 = _interopRequireDefault(_processStat);

function getMeta(fs, src, options, cb, stat) {
	if (typeof options == 'function') {
		cb = options;
		options = null;
	}
	if (stat) {
		return (0, _processStat2['default'])(fs, src, options, cb)(null, stat);
	}
	var lstat = options && 'lstat' in options ? options.lstat : true;
	if (lstat) {
		fs.lstat(src, (0, _processStat2['default'])(fs, src, options, cb));
	} else {
		fs.stat(src, (0, _processStat2['default'])(fs, src, options, cb));
	}
}

module.exports = exports['default'];