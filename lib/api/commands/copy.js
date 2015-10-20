'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeCopy;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

var _parameterTypesDest = require('../parameterTypes/dest');

var _parameterTypesDest2 = _interopRequireDefault(_parameterTypesDest);

var _parameterTypesClobber = require('../parameterTypes/clobber');

var _parameterTypesClobber2 = _interopRequireDefault(_parameterTypesClobber);

var _parameterTypesPreserveTimeStamps = require('../parameterTypes/preserveTimeStamps');

var _parameterTypesPreserveTimeStamps2 = _interopRequireDefault(_parameterTypesPreserveTimeStamps);

var _parameterTypesFilter = require('../parameterTypes/filter');

var _parameterTypesFilter2 = _interopRequireDefault(_parameterTypesFilter);

function makeCopy(fs) {
	return {
		name: 'copy',
		description: 'Copy a file or directory. The directory can have contents. Like cp -r.',
		parameters: [_parameterTypesSrc2['default'], _parameterTypesDest2['default']],
		optionalParameters: [_parameterTypesClobber2['default'], _parameterTypesPreserveTimeStamps2['default'], _parameterTypesFilter2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;
			var dest = _ref.dest;
			var clobber = _ref.clobber;
			var preserveTimestamps = _ref.preserveTimestamps;
			var filter = _ref.filter;

			fs.copy(src, dest, { clobber: clobber, preserveTimestamps: preserveTimestamps, filter: filter }).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];