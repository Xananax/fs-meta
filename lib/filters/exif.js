'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = exifFilter;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exifParser = require('exif-parser');

var _exifParser2 = _interopRequireDefault(_exifParser);

function exifFilter(obj, options, cb, fs) {
	if (obj.extension !== 'jpeg' && obj.extension !== 'jpg') {
		return cb(null, obj);
	}
	fs.readFile(obj.path, function (err, buffer) {
		if (err) {
			return cb(err);
		}
		var parser = _exifParser2['default'].create(buffer);
		var result = parser.parse();
		obj.tags = result.tags;
		if (result.hasThumbnail()) {
			var _result$getThumbnailSize = result.getThumbnailSize();

			var width = _result$getThumbnailSize.width;
			var height = _result$getThumbnailSize.height;

			var tnbBuffer = result.getThumbnailBuffer();
			obj.thumbnail = { width: width, height: height, tnbBuffer: tnbBuffer };
		}
		cb(null, obj);
	});
}

module.exports = exports['default'];