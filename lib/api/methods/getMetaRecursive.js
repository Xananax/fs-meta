'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeGetMetaRecursive;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

var _argumentTypesLstat = require('../argumentTypes/lstat');

var _argumentTypesLstat2 = _interopRequireDefault(_argumentTypesLstat);

var _argumentTypesFollowSymLinks = require('../argumentTypes/followSymLinks');

var _argumentTypesFollowSymLinks2 = _interopRequireDefault(_argumentTypesFollowSymLinks);

function makeGetMetaRecursive(fs, _ref) {
	var filters = _ref.filters;

	return {
		name: 'getMetaRecursive',
		description: 'returns recursive extended stat about a directory and contents, or a file',
		consume: ':',
		args: [_argumentTypesSrc2['default']],
		optionalArgs: [_argumentTypesLstat2['default'], _argumentTypesFollowSymLinks2['default']],
		run: function run(_ref2, cb) {
			var src = _ref2.src;
			var lstat = _ref2.lstat;
			var followSymLinks = _ref2.followSymLinks;

			fs.getMetaRecursive(src, { lstat: lstat, followSymLinks: followSymLinks, filters: filters }).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];