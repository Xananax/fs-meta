'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeLchmod;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

var _argumentTypesMode = require('../argumentTypes/mode');

var _argumentTypesMode2 = _interopRequireDefault(_argumentTypesMode);

function makeLchmod(fs) {
	return {
		name: 'lchmod',
		description: 'lchmod is like chmod, but does not dereference symbolic links.',
		consume: ':',
		args: [_argumentTypesSrc2['default'], _argumentTypesMode2['default']],
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