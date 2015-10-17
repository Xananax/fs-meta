'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeCopy;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

var _argumentTypesDest = require('../argumentTypes/dest');

var _argumentTypesDest2 = _interopRequireDefault(_argumentTypesDest);

var _argumentTypesClobber = require('../argumentTypes/clobber');

var _argumentTypesClobber2 = _interopRequireDefault(_argumentTypesClobber);

var _argumentTypesPreserveTimeStamps = require('../argumentTypes/preserveTimeStamps');

var _argumentTypesPreserveTimeStamps2 = _interopRequireDefault(_argumentTypesPreserveTimeStamps);

var _argumentTypesFilter = require('../argumentTypes/filter');

var _argumentTypesFilter2 = _interopRequireDefault(_argumentTypesFilter);

function makeCopy(fs) {
	return {
		name: 'copy',
		description: 'Copy a file or directory. The directory can have contents. Like cp -r.',
		consume: ':',
		args: [_argumentTypesSrc2['default'], _argumentTypesDest2['default']],
		optionalArgs: [_argumentTypesClobber2['default'], _argumentTypesPreserveTimeStamps2['default'], _argumentTypesFilter2['default']],
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