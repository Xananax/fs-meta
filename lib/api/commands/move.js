'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeMove;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

var _parameterTypesDest = require('../parameterTypes/dest');

var _parameterTypesDest2 = _interopRequireDefault(_parameterTypesDest);

var _parameterTypesClobber = require('../parameterTypes/clobber');

var _parameterTypesClobber2 = _interopRequireDefault(_parameterTypesClobber);

var _parameterTypesConcurrentMovesLimit = require('../parameterTypes/concurrentMovesLimit');

var _parameterTypesConcurrentMovesLimit2 = _interopRequireDefault(_parameterTypesConcurrentMovesLimit);

function makeMove(fs) {
	return {
		name: 'move',
		description: 'Moves a file or directory, even across devices.',
		parameters: [_parameterTypesSrc2['default'], _parameterTypesDest2['default']],
		optionalParameters: [_parameterTypesClobber2['default'], _parameterTypesConcurrentMovesLimit2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;
			var dest = _ref.dest;
			var clobber = _ref.clobber;
			var limit = _ref.limit;

			fs.move(src, dest, { clobber: clobber, limit: limit }).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];