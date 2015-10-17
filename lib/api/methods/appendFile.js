'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeAppendFile;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

var _argumentTypesData = require('../argumentTypes/data');

var _argumentTypesData2 = _interopRequireDefault(_argumentTypesData);

var _argumentTypesEncoding = require('../argumentTypes/encoding');

var _argumentTypesEncoding2 = _interopRequireDefault(_argumentTypesEncoding);

var _argumentTypesMode = require('../argumentTypes/mode');

var _argumentTypesMode2 = _interopRequireDefault(_argumentTypesMode);

var _argumentTypesFileFlag = require('../argumentTypes/fileFlag');

var _argumentTypesFileFlag2 = _interopRequireDefault(_argumentTypesFileFlag);

function makeAppendFile(fs) {
	return {
		name: 'appendFile',
		description: 'Asynchronously append data to a file, creating the file if it does not yet exist. data can be a string or a buffer.',
		consume: ':',
		args: [_argumentTypesSrc2['default'], _argumentTypesData2['default']],
		optionalArgs: [_argumentTypesEncoding2['default'], _argumentTypesMode2['default'], _argumentTypesFileFlag2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;
			var data = _ref.data;
			var encoding = _ref.encoding;
			var mode = _ref.mode;
			var flag = _ref.flag;

			fs.appendFile(src, data, { encoding: encoding, mode: mode, flag: flag }).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];