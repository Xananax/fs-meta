'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeWriteJson;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

var _argumentTypesJson = require('../argumentTypes/json');

var _argumentTypesJson2 = _interopRequireDefault(_argumentTypesJson);

function makeWriteJson(fs) {
	return {
		name: 'writeJson',
		description: 'Writes an object to a JSON file',
		consume: ':',
		args: [_argumentTypesSrc2['default'], _argumentTypesJson2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;
			var json = _ref.json;

			fs.writeJson(src, json).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];