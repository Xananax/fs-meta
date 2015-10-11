'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = dirSize;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exifParser = require('exif-parser');

var _exifParser2 = _interopRequireDefault(_exifParser);

function dirSize(obj, options, cb, fs) {
	if (!obj.isDirectory) {
		return cb(null, obj);
	}
	fs.readdir(obj.path, function (err, files) {
		if (err) {
			return cb(err);
		}
		var size = 0;
		if (!files.length) {
			return cb(null, obj);
		}
		var i = 0;
		var length = files.length;
		(function next() {
			if (i >= length) {
				obj.size = size;
				return cb(null, obj);
			}
			currFile = files[i++];
			fs.stat(obj.path + '/' + currFile, function (err, stat) {
				if (err) {
					return cb(err);
				}
				size += stat.size;
				next();
			});
		})();
	});
}

module.exports = exports['default'];