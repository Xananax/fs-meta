'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeLink;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

var _parameterTypesDest = require('../parameterTypes/dest');

var _parameterTypesDest2 = _interopRequireDefault(_parameterTypesDest);

function makeLink(fs) {
	return {
		name: 'link',
		description: 'creates a new link (also known as a hard link) to an existing file.',
		consume: ':',
		parameters: [_parameterTypesSrc2['default'], _parameterTypesDest2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;
			var dest = _ref.dest;

			fs.link(src, dest).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];