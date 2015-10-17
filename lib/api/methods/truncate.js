'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeTruncate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

var _argumentTypesLen = require('../argumentTypes/len');

var _argumentTypesLen2 = _interopRequireDefault(_argumentTypesLen);

function makeTruncate(fs) {
	return {
		name: 'truncate',
		description: 'Cause the regular file named by path to be truncated to a size of precisely length bytes. If the file previously was larger than this size, the extra data is lost.  If the file previously was shorter, it is extended, and the extended part reads as null bytes. The file offset is not changed.',
		consume: ':',
		args: [_argumentTypesSrc2['default'], _argumentTypesLen2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;
			var len = _ref.len;

			fs.truncate(src, len).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];