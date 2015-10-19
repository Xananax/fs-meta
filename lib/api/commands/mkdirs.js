'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeMkdirs;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

function makeMkdirs(fs) {
	return {
		name: 'mkdirs',
		description: 'Creates a directory. If the parent hierarchy doesn\'t exist, it\'s created. Like mkdir -p.',
		consume: ':',
		parameters: [_parameterTypesSrc2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;

			fs.mkdirs(src).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];