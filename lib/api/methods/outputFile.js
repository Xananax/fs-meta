'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeOutputFile;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

var _argumentTypesData = require('../argumentTypes/data');

var _argumentTypesData2 = _interopRequireDefault(_argumentTypesData);

function makeOutputFile(fs) {
	return {
		name: 'outputFile',
		description: 'Almost the same as writeFile (i.e. it overwrites), except that if the parent directory does not exist, it\'s created.',
		consume: ':',
		args: [_argumentTypesSrc2['default'], _argumentTypesData2['default']],
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