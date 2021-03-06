'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeWatchFile;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

var _parameterTypesPersistent = require('../parameterTypes/persistent');

var _parameterTypesPersistent2 = _interopRequireDefault(_parameterTypesPersistent);

var _parameterTypesWatchInterval = require('../parameterTypes/watchInterval');

var _parameterTypesWatchInterval2 = _interopRequireDefault(_parameterTypesWatchInterval);

function makeWatchFile(fs, _ref) {
	var watchListener = _ref.watchListener;

	return {
		name: 'watchFile',
		description: 'Watch for changes on filename.',
		parameters: [_parameterTypesSrc2['default']],
		optionalParameters: [_parameterTypesPersistent2['default'], _parameterTypesWatchInterval2['default']],
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