'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = sizeFilter;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _filesize = require('filesize');

var _filesize2 = _interopRequireDefault(_filesize);

function sizeFilter(obj, options, cb) {
	if (!obj.size) {
		return cb(null, obj);
	}
	obj.humanSize = (0, _filesize2['default'])(obj.size);
	return cb(null, obj);
}

module.exports = exports['default'];