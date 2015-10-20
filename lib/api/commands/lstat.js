'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeLstat;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

function makeLstat(fs) {
	return {
		name: 'lstat',
		description: 'lstat is identical to stat, except that if pathname is a symbolic link, then it returns information about the link itself, not the file that it refers to.',
		parameters: [_parameterTypesSrc2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;

			fs.lstat(src).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];