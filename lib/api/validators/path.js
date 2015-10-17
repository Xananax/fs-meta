'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = validPath;

function validPath(args) {
	return typeof args == 'string' || Array.isArray(args);
}

module.exports = exports['default'];