'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeUnWatchFile;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

function makeUnWatchFile(fs, _ref) {
	var watchListener = _ref.watchListener;

	return {
		name: 'unwatchFile',
		description: 'Stops watching a file',
		consume: ':',
		parameters: [_parameterTypesSrc2['default']],
		run: function run(_ref2, cb) {
			var src = _ref2.src;

			fs.unwatchFile(src, watchListener).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];