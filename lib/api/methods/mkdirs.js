'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeMkdirs;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

function makeMkdirs(fs) {
	return {
		name: 'mkdirs',
		description: 'Creates a directory. If the parent hierarchy doesn\'t exist, it\'s created. Like mkdir -p.',
		consume: ':',
		args: [_argumentTypesSrc2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;

			fs.mkdirs(src).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];