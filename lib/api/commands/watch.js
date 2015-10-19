'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeWatch;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

var _parameterTypesPersistent = require('../parameterTypes/persistent');

var _parameterTypesPersistent2 = _interopRequireDefault(_parameterTypesPersistent);

var _parameterTypesRecursive = require('../parameterTypes/recursive');

var _parameterTypesRecursive2 = _interopRequireDefault(_parameterTypesRecursive);

function makeWatch(fs, _ref) {
	var watchListener = _ref.watchListener;

	return {
		name: 'watch',
		description: 'Watches a file or directory.',
		consume: ':',
		parameters: [_parameterTypesSrc2['default']],
		optionalParameters: [_parameterTypesPersistent2['default'], _parameterTypesRecursive2['default']],
		run: function run(_ref2, cb) {
			var src = _ref2.src;
			var persistent = _ref2.persistent;
			var recursive = _ref2.recursive;

			fs.watch(src, { persistent: persistent, recursive: recursive }, listener).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];