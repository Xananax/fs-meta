'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeReadFile;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

var _parameterTypesEncoding = require('../parameterTypes/encoding');

var _parameterTypesEncoding2 = _interopRequireDefault(_parameterTypesEncoding);

var _parameterTypesFileFlag = require('../parameterTypes/fileFlag');

var _parameterTypesFileFlag2 = _interopRequireDefault(_parameterTypesFileFlag);

function makeReadFile(fs) {
	return {
		name: 'readFile',
		description: 'Reads a file contents',
		consume: ':',
		parameters: [_parameterTypesSrc2['default']],
		optionalParameters: [_parameterTypesEncoding2['default'], _parameterTypesFileFlag2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;
			var encoding = _ref.encoding;
			var flag = _ref.flag;

			fs.readFile(src, { encoding: encoding, flag: flag }).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];