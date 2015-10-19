'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeAccess;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

var _parameterTypesAccessMode = require('../parameterTypes/accessMode');

var _parameterTypesAccessMode2 = _interopRequireDefault(_parameterTypesAccessMode);

function makeAccess(fs) {
	return {
		name: 'access',
		description: 'Tests a user\'s permissions for the file specified by path. mode is an optional integer that specifies the accessibility checks to be performed. The following constants define the possible values of mode. It is possible to create a mask consisting of the bitwise OR of two or more values.',
		consume: ':',
		parameters: [_parameterTypesSrc2['default']],
		optionalParameters: [_parameterTypesAccessMode2['default']],
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