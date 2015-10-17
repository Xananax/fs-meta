'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeLchown;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

var _argumentTypesUid = require('../argumentTypes/uid');

var _argumentTypesUid2 = _interopRequireDefault(_argumentTypesUid);

var _argumentTypesGid = require('../argumentTypes/gid');

var _argumentTypesGid2 = _interopRequireDefault(_argumentTypesGid);

function makeLchown(fs) {
	return {
		name: 'lchown',
		description: 'lchown is like chown, but does not dereference symbolic links.',
		consume: ':',
		args: [_argumentTypesSrc2['default'], _argumentTypesUid2['default'], _argumentTypesGid2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;

			fs.lchown(src).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];