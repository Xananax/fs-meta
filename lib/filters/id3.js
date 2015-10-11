'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = id3Filter;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _id3js = require('id3js');

var _id3js2 = _interopRequireDefault(_id3js);

function id3Filter(obj, options, cb) {
	if (obj.extension !== 'mp3') {
		return cb(null, obj);
	}
	(0, _id3js2['default'])({ file: obj.path, type: _id3js2['default'].OPEN_LOCAL }, function (err, tags) {
		if (err) {
			return cb(err);
		}
		for (var n in tags.v1) {
			if (typeof tags.v1[n] !== 'string') {
				continue;
			}
			tags.v1[n] = tags.v1[n].replace(/\u0000/g, '');
		}
		obj.tags = tags;
		return cb(null, obj);
	});
}

module.exports = exports['default'];