'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeStat;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

function makeStat(fs) {
	return {
		name: 'stat',
		description: 'return information about a file pointed to by buf.  No permissions are required on the file itself',
		consume: ':',
		args: [_argumentTypesSrc2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;

			fs.stat(src).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];