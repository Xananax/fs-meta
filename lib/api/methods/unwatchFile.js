'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeUnWatchFile;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

function makeUnWatchFile(fs, _ref) {
	var watchListener = _ref.watchListener;

	return {
		name: 'unwatchFile',
		description: 'Stops watching a file',
		consume: ':',
		args: [_argumentTypesSrc2['default']],
		run: function run(_ref2, cb) {
			var src = _ref2.src;

			fs.unwatchFile(src, watchListener).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];