'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = validEncoding;
var reg = /true|false|0|1/i;

function validEncoding(args) {
	return typeof args === 'boolean' || typeof args === 'number' && (args === 1 || args === 0) || typeof args === 'string' && args.match(reg);
}

module.exports = exports['default'];