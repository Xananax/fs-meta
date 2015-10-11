'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = imageFilter;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _imageSize = require('image-size');

var _imageSize2 = _interopRequireDefault(_imageSize);

var formats = /bmp|gif|jpe?g|png|psd|tiff|webp|svg/;

function imageFilter(obj, options, cb) {
	if (!formats.test(obj.extension)) {
		return cb(null, obj);
	}

	var _sizeOf = (0, _imageSize2['default'])(obj.path);

	var width = _sizeOf.width;
	var height = _sizeOf.height;

	obj.dimensions = { width: width, height: height };
	cb(null, obj);
}

module.exports = exports['default'];