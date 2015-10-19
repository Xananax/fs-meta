'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeGetMetaRecursive;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

var _parameterTypesLstat = require('../parameterTypes/lstat');

var _parameterTypesLstat2 = _interopRequireDefault(_parameterTypesLstat);

var _parameterTypesFollowSymLinks = require('../parameterTypes/followSymLinks');

var _parameterTypesFollowSymLinks2 = _interopRequireDefault(_parameterTypesFollowSymLinks);

function makeGetMetaRecursive(fs, _ref) {
	var filters = _ref.filters;

	return {
		name: 'getMetaRecursive',
		description: 'returns recursive extended stat about a directory and contents, or a file',
		consume: ':',
		parameters: [_parameterTypesSrc2['default']],
		optionalParameters: [_parameterTypesLstat2['default'], _parameterTypesFollowSymLinks2['default']],
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