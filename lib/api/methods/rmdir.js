'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeRmDir;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

function makeRmDir(fs) {
	return {
		name: 'rmdir',
		description: 'Remove the DIRECTORY(ies), if they are empty.',
		consume: ':',
		args: [_argumentTypesSrc2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;

			fs.rmdir(src).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];