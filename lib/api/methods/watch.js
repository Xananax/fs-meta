'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeWatch;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

var _argumentTypesPersistent = require('../argumentTypes/persistent');

var _argumentTypesPersistent2 = _interopRequireDefault(_argumentTypesPersistent);

var _argumentTypesRecursive = require('../argumentTypes/recursive');

var _argumentTypesRecursive2 = _interopRequireDefault(_argumentTypesRecursive);

function makeWatch(fs, _ref) {
	var watchListener = _ref.watchListener;

	return {
		name: 'watch',
		description: 'Watches a file or directory.',
		consume: ':',
		args: [_argumentTypesSrc2['default']],
		optionalArgs: [_argumentTypesPersistent2['default'], _argumentTypesRecursive2['default']],
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