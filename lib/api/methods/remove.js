'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeRemove;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

function makeRemove(fs) {
	return {
		name: 'remove',
		description: 'Removes a file or directory. The directory can have contents. Like rm -rf',
		consume: ':',
		args: [_argumentTypesSrc2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;

			fs.remove(src).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];