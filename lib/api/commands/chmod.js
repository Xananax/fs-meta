'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeChmod;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

var _parameterTypesMode = require('../parameterTypes/mode');

var _parameterTypesMode2 = _interopRequireDefault(_parameterTypesMode);

function makeChmod(fs) {
	return {
		name: 'chmod',
		description: 'chmod changes the file mode bits of each given file according to mode, which can be either a symbolic representation of changes to make, or an octal number representing the bit pattern for the new mode bits.',
		parameters: [_parameterTypesSrc2['default'], _parameterTypesMode2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;
			var mode = _ref.mode;

			fs.chmod(src, mode).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];