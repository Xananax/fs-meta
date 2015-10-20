'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeLchown;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parameterTypesSrc = require('../parameterTypes/src');

var _parameterTypesSrc2 = _interopRequireDefault(_parameterTypesSrc);

var _parameterTypesUid = require('../parameterTypes/uid');

var _parameterTypesUid2 = _interopRequireDefault(_parameterTypesUid);

var _parameterTypesGid = require('../parameterTypes/gid');

var _parameterTypesGid2 = _interopRequireDefault(_parameterTypesGid);

function makeLchown(fs) {
	return {
		name: 'lchown',
		description: 'lchown is like chown, but does not dereference symbolic links.',
		parameters: [_parameterTypesSrc2['default'], _parameterTypesUid2['default'], _parameterTypesGid2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;

			fs.lchown(src).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];