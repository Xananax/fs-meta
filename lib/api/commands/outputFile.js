'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeOutputFile;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

var _parameterTypesData = require('../parameterTypes/data');

var _parameterTypesData2 = _interopRequireDefault(_parameterTypesData);

function makeOutputFile(fs) {
	return {
		name: 'outputFile',
		description: 'Almost the same as writeFile (i.e. it overwrites), except that if the parent directory does not exist, it\'s created.',
		parameters: [_parameterTypesSrc2['default'], _parameterTypesData2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;
			var data = _ref.data;

			fs.outputFile(src, data).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];