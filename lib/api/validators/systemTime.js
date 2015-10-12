'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = valid;
var numbers = /\d+/;

function valid(args) {
	return typeof args == 'string' && args.match(numbers) || typeof args == 'number' || args instanceof Date;
}

module.exports = exports['default'];