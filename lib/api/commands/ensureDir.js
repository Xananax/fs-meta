'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeEnsureDir;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

function makeEnsureDir(fs) {
	return {
		name: 'ensureDir',
		description: 'Ensures that the directory exists. If the directory structure does not exist, it is created.',
		consume: ':',
		parameters: [_parameterTypesSrc2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;

			fs.ensureDir(src).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];