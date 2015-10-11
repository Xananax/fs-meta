'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = readdir_recursive;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _readdirp = require('readdirp');

var _readdirp2 = _interopRequireDefault(_readdirp);

function readdir_recursive(src, options, operation, cb) {
	if (typeof options == 'function') {
		cb = operation;
		operation = options;
		options = null;
	}
	options = Object.assign({}, options, {
		root: src
	});
	var stream = (0, _readdirp2['default'])(options);
	return operation && cb ? stream.on('error', cb).on('data', function (entry) {
		if (operation(entry) == false) {
			stream.destroy();
			cb();
		}
	}).on('end', cb) : stream;
}

module.exports = exports['default'];