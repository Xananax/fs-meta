'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeRmDir;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

function makeRmDir(fs) {
	return {
		name: 'rmdir',
		description: 'Remove the DIRECTORY(ies), if they are empty.',
		parameters: [_parameterTypesSrc2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;

			fs.rmdir(src).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];