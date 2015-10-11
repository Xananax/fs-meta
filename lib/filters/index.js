'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _image = require('./image');

var _image2 = _interopRequireDefault(_image);

var _exif = require('./exif');

var _exif2 = _interopRequireDefault(_exif);

var _id3 = require('./id3');

var _id32 = _interopRequireDefault(_id3);

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

var _filesize = require('./filesize');

var _filesize2 = _interopRequireDefault(_filesize);

var _types = require('./types');

var _types2 = _interopRequireDefault(_types);

var _dirSize = require('./dirSize');

var _dirSize2 = _interopRequireDefault(_dirSize);

exports['default'] = {
	image: _image2['default'],
	exif: _exif2['default'],
	id3: _id32['default'],
	text: _text2['default'],
	data: _data2['default'],
	filesize: _filesize2['default'],
	types: _types2['default']
};
module.exports = exports['default'];