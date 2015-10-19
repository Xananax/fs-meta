'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeUtimes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

var _parameterTypesAtime = require('../parameterTypes/atime');

var _parameterTypesAtime2 = _interopRequireDefault(_parameterTypesAtime);

var _parameterTypesMtime = require('../parameterTypes/mtime');

var _parameterTypesMtime2 = _interopRequireDefault(_parameterTypesMtime);

function makeUtimes(fs) {
	return {
		name: 'utimes',
		description: 'changes the access and modification times of the inode specified by filename to the actime and modtime fields of times respectively.',
		consume: ':',
		parameters: [_parameterTypesSrc2['default'], _parameterTypesAtime2['default'], _parameterTypesMtime2['default']],
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