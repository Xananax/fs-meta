'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeOutputJson;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

var _parameterTypesJson = require('../parameterTypes/json');

var _parameterTypesJson2 = _interopRequireDefault(_parameterTypesJson);

function makeOutputJson(fs) {
	return {
		name: 'outputJson',
		description: 'Almost the same as writeJson, except that if the directory does not exist, it\'s created.',
		consume: ':',
		parameters: [_parameterTypesSrc2['default'], _parameterTypesJson2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;
			var json = _ref.json;

			fs.outputJson(src, json).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];