'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = symbolicLinkStat;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getMeta = require('./getMeta');

var _getMeta2 = _interopRequireDefault(_getMeta);

function symbolicLinkStat(fs, obj, src, options, cb) {
	var link = obj;
	return fs.realpath(src, function (err, realPath) {
		if (err) {
			return cb(err);
		}
		var src = realpath;
		(0, _getMeta2['default'])(fs, src, options, function (err, obj) {
			if (err) {
				return cb(err);
			}
			obj.link = link;
			return cb(null, obj);
		});
	});
}

module.exports = exports['default'];