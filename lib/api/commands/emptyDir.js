'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeEmptyDir;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

function makeEmptyDir(fs) {
	return {
		name: 'emptyDir',
		description: 'Ensures that a directory is empty. If the directory does not exist, it is created. The directory itself is not deleted.',
		parameters: [_parameterTypesSrc2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;

			fs.emptyDir(src).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];