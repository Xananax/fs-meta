'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeUtimes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

var _argumentTypesAtime = require('../argumentTypes/atime');

var _argumentTypesAtime2 = _interopRequireDefault(_argumentTypesAtime);

var _argumentTypesMtime = require('../argumentTypes/mtime');

var _argumentTypesMtime2 = _interopRequireDefault(_argumentTypesMtime);

function makeUtimes(fs) {
	return {
		name: 'utimes',
		description: 'changes the access and modification times of the inode specified by filename to the actime and modtime fields of times respectively.',
		consume: ':',
		args: [_argumentTypesSrc2['default'], _argumentTypesAtime2['default'], _argumentTypesMtime2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;
			var atime = _ref.atime;
			var mtime = _ref.mtime;

			fs.utimes(src, atime, mtime).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];