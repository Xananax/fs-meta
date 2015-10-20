'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeReadDir;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

function makeReadDir(fs) {
	return {
		name: 'readdir',
		description: 'list files in a directory',
		parameters: [_parameterTypesSrc2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;

			fs.readdir(src).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];