'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeRename;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

var _parameterTypesDest = require('../parameterTypes/dest');

var _parameterTypesDest2 = _interopRequireDefault(_parameterTypesDest);

function makeRename(fs) {
	return {
		name: 'rename',
		description: 'renames a file, moving it between directories if required.',
		parameters: [_parameterTypesSrc2['default'], _parameterTypesDest2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;
			var dest = _ref.dest;

			fs.rename(src, dest).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];