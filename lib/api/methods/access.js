'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeAccess;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

var _argumentTypesAccessMode = require('../argumentTypes/accessMode');

var _argumentTypesAccessMode2 = _interopRequireDefault(_argumentTypesAccessMode);

function makeAccess(fs) {
	return {
		name: 'access',
		description: 'Tests a user\'s permissions for the file specified by path. mode is an optional integer that specifies the accessibility checks to be performed. The following constants define the possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values.',
		consume: ':',
		args: [_argumentTypesSrc2['default']],
		optionalArgs: [_argumentTypesAccessMode2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;
			var mode = _ref.mode;

			fs.access(src, mode).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];