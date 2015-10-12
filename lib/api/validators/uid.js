'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = valid;
var numbers = /\d+/;

function valid(args) {
	return typeof args == 'number' || typeof args == 'string' && args.match(numbers);
}

module.exports = exports['default'];