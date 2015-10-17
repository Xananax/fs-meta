'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeChmod;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

var _argumentTypesMode = require('../argumentTypes/mode');

var _argumentTypesMode2 = _interopRequireDefault(_argumentTypesMode);

function makeChmod(fs) {
	return {
		name: 'chmod',
		description: 'chmod changes the file mode bits of each given file according to mode, which can be either a symbolic representation of changes to make, or an octal number representing the bit pattern for the new mode bits.',
		consume: ':',
		args: [_argumentTypesSrc2['default'], _argumentTypesMode2['default']],
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