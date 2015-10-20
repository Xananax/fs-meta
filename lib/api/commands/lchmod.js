'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeLchmod;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

var _parameterTypesMode = require('../parameterTypes/mode');

var _parameterTypesMode2 = _interopRequireDefault(_parameterTypesMode);

function makeLchmod(fs) {
	return {
		name: 'lchmod',
		description: 'lchmod is like chmod, but does not dereference symbolic links.',
		parameters: [_parameterTypesSrc2['default'], _parameterTypesMode2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;
			var mode = _ref.mode;

			fs.lchmod(src, mode).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];