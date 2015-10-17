'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = coerceToPath;

function coerceToPath(arg) {
	if (Array.isArray(arg)) {
		return '/' + arg.join('/');
	}
	return arg;
}

module.exports = exports['default'];