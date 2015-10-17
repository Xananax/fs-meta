'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeMove;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

var _argumentTypesDest = require('../argumentTypes/dest');

var _argumentTypesDest2 = _interopRequireDefault(_argumentTypesDest);

var _argumentTypesClobber = require('../argumentTypes/clobber');

var _argumentTypesClobber2 = _interopRequireDefault(_argumentTypesClobber);

var _argumentTypesConcurrentMovesLimit = require('../argumentTypes/concurrentMovesLimit');

var _argumentTypesConcurrentMovesLimit2 = _interopRequireDefault(_argumentTypesConcurrentMovesLimit);

function makeMove(fs) {
	return {
		name: 'move',
		description: 'Moves a file or directory, even across devices.',
		consume: ':',
		args: [_argumentTypesSrc2['default'], _argumentTypesDest2['default']],
		optionalArgs: [_argumentTypesClobber2['default'], _argumentTypesConcurrentMovesLimit2['default']],
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