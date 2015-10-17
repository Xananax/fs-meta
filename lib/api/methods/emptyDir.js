'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeEmptyDir;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

function makeEmptyDir(fs) {
	return {
		name: 'emptyDir',
		description: 'Ensures that a directory is empty. If the directory does not exist, it is created. The directory itself is not deleted.',
		consume: ':',
		args: [_argumentTypesSrc2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;

			fs.emptyDir(src).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];