'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeWriteFile;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

var _parameterTypesData = require('../parameterTypes/data');

var _parameterTypesData2 = _interopRequireDefault(_parameterTypesData);

var _parameterTypesEncoding = require('../parameterTypes/encoding');

var _parameterTypesEncoding2 = _interopRequireDefault(_parameterTypesEncoding);

var _parameterTypesMode = require('../parameterTypes/mode');

var _parameterTypesMode2 = _interopRequireDefault(_parameterTypesMode);

var _parameterTypesFileFlag = require('../parameterTypes/fileFlag');

var _parameterTypesFileFlag2 = _interopRequireDefault(_parameterTypesFileFlag);

function makeWriteFile(fs) {
	return {
		name: 'writeFile',
		description: 'Writes data to a file, replacing the file if it already exists.',
		consume: ':',
		parameters: [_parameterTypesSrc2['default'], _parameterTypesData2['default']],
		optionalParameters: [_parameterTypesEncoding2['default'], _parameterTypesMode2['default'], _parameterTypesFileFlag2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;
			var data = _ref.data;
			var encoding = _ref.encoding;
			var mode = _ref.mode;
			var flag = _ref.flag;

			fs.writeFile(src, data, { encoding: encoding, mode: mode, flag: flag }).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];