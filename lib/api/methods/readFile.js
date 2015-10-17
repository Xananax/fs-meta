'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeReadFile;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

var _argumentTypesEncoding = require('../argumentTypes/encoding');

var _argumentTypesEncoding2 = _interopRequireDefault(_argumentTypesEncoding);

var _argumentTypesFileFlag = require('../argumentTypes/fileFlag');

var _argumentTypesFileFlag2 = _interopRequireDefault(_argumentTypesFileFlag);

function makeReadFile(fs) {
	return {
		name: 'readFile',
		description: 'Reads a file contents',
		consume: ':',
		args: [_argumentTypesSrc2['default']],
		optionalArgs: [_argumentTypesEncoding2['default'], _argumentTypesFileFlag2['default']],
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