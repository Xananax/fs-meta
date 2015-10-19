'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeReadJson;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

function makeReadJson(fs) {
	return {
		name: 'readJson',
		description: 'Reads a JSON file and then parses it into an object.',
		consume: ':',
		parameters: [_parameterTypesSrc2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;

			fs.readJson(src).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];