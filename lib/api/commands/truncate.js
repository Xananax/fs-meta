'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeTruncate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

var _parameterTypesLen = require('../parameterTypes/len');

var _parameterTypesLen2 = _interopRequireDefault(_parameterTypesLen);

function makeTruncate(fs) {
	return {
		name: 'truncate',
		description: 'Cause the regular file named by path to be truncated to a size of precisely length bytes. If the file previously was lparameterer than this size, the extra data is lost.  If the file previously was shorter, it is extended, and the extended part reads as null bytes. The file offset is not changed.',
		consume: ':',
		parameters: [_parameterTypesSrc2['default'], _parameterTypesLen2['default']],
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