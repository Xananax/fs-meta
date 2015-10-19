'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeMkdir;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

var _parameterTypesMode = require('../parameterTypes/mode');

var _parameterTypesMode2 = _interopRequireDefault(_parameterTypesMode);

function makeMkdir(fs) {
	return {
		name: 'mkdir',
		description: 'attempts to create a directory named pathname.',
		consume: ':',
		parameters: [_parameterTypesSrc2['default']],
		optionalParameters: [_parameterTypesMode2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;
			var mode = _ref.mode;

			fs.mkdir(src, mode).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];