'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeWatchFile;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

var _argumentTypesPersistent = require('../argumentTypes/persistent');

var _argumentTypesPersistent2 = _interopRequireDefault(_argumentTypesPersistent);

var _argumentTypesWatchInterval = require('../argumentTypes/watchInterval');

var _argumentTypesWatchInterval2 = _interopRequireDefault(_argumentTypesWatchInterval);

function makeWatchFile(fs, _ref) {
	var watchListener = _ref.watchListener;

	return {
		name: 'watchFile',
		description: 'Watch for changes on filename.',
		consume: ':',
		args: [_argumentTypesSrc2['default']],
		optionalArgs: [_argumentTypesPersistent2['default'], _argumentTypesWatchInterval2['default']],
		run: function run(_ref2, cb) {
			var src = _ref2.src;
			var persistent = _ref2.persistent;
			var interval = _ref2.interval;

			fs.watchFile(src, { persistent: persistent, interval: interval }, watchListener).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];