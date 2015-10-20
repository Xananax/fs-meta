'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeSymLink;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

var _parameterTypesDest = require('../parameterTypes/dest');

var _parameterTypesDest2 = _interopRequireDefault(_parameterTypesDest);

function makeSymLink(fs) {
	return {
		name: 'symlink',
		description: 'creates a symbolic link named linkpath which contains the string tparameteret.',
		parameters: [_parameterTypesSrc2['default'], _parameterTypesDest2['default']],
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