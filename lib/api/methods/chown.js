'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeChown;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

var _argumentTypesUid = require('../argumentTypes/uid');

var _argumentTypesUid2 = _interopRequireDefault(_argumentTypesUid);

var _argumentTypesGid = require('../argumentTypes/gid');

var _argumentTypesGid2 = _interopRequireDefault(_argumentTypesGid);

function makeChown(fs) {
	return {
		name: 'chown',
		description: 'Change the owner and/or group of each FILE to OWNER and/or GROUP.',
		consume: ':',
		args: [_argumentTypesSrc2['default'], _argumentTypesUid2['default'], _argumentTypesGid2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;
			var uid = _ref.uid;
			var gid = _ref.gid;

			fs.chown(src, uid, gid).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];