'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = validFileMode;
var reg = /([rwx\-]|[0-7])+/;

function validFileMode(args) {
	return typeof args == 'number' || typeof args === 'string' && args.match(reg);
}

module.exports = exports['default'];