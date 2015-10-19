'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeEnsureLink;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

function makeEnsureLink(fs) {
	return {
		name: 'ensureLink',
		description: 'Ensures that the link exists. If the directory structure does not exist, it is created.',
		consume: ':',
		parameters: [_parameterTypesSrc2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;

			fs.ensureLink(src).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];