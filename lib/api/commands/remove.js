'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeRemove;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

function makeRemove(fs) {
	return {
		name: 'remove',
		description: 'Removes a file or directory. The directory can have contents. Like rm -rf',
		parameters: [_parameterTypesSrc2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;

			fs.remove(src).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];