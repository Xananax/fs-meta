'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeRename;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

var _argumentTypesDest = require('../argumentTypes/dest');

var _argumentTypesDest2 = _interopRequireDefault(_argumentTypesDest);

function makeRename(fs) {
	return {
		name: 'rename',
		description: 'renames a file, moving it between directories if required.',
		consume: ':',
		args: [_argumentTypesSrc2['default'], _argumentTypesDest2['default']],
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