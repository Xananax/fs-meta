'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeReadLink;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesSrc = require('../argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

function makeReadLink(fs) {
	return {
		name: 'readlink',
		description: 'places the contents of the symbolic link pathname in the buffer buf, which has size bufsiz.  readlink() does not append a null byte to buf.  It will truncate the contents (to a length of bufsiz characters), in case the buffer is too small to hold all of the contents.',
		consume: ':',
		args: [_argumentTypesSrc2['default']],
		run: function run(_ref, cb) {
			var src = _ref.src;

			fs.readlink(src).then(function (result) {
				return cb(null, result);
			}).error(cb);
		}
	};
}

module.exports = exports['default'];