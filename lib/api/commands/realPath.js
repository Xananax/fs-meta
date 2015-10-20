'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeRealPath;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

function makeRealPath(fs, _ref) {
	var realPathCache = _ref.realPathCache;

	return {
		name: 'realpath',
		description: 'expands all symbolic links and resolves references to /./, /../ and extra / characters in the null-terminated string named by path to produce a canonicalized absolute pathname. The resulting path will have no symbolic link, /./ or /../ components.',
		parameters: [_parameterTypesSrc2['default']],
		run: function run(_ref2, cb) {
			var src = _ref2.src;
			var cache = _ref2.cache;

			fs.realpath(src, realPathCache).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];