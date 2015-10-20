'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeStat;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

function makeStat(fs) {
	return {
		name: 'stat',
		description: 'return information about a file pointed to by buf.  No permissions are required on the file itself',
		parameters: [_parameterTypesSrc2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;

			fs.stat(src).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];