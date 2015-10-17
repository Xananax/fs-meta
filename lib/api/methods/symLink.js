'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeSymLink;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

var _argumentTypesDest = require('../argumentTypes/dest');

var _argumentTypesDest2 = _interopRequireDefault(_argumentTypesDest);

function makeSymLink(fs) {
	return {
		name: 'symlink',
		description: 'creates a symbolic link named linkpath which contains the string target.',
		consume: ':',
		args: [_argumentTypesSrc2['default'], _argumentTypesDest2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;
			var dest = _ref.dest;

			fs.symlink(src, dest).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];