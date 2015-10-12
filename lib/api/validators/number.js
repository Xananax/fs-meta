'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = validNumber;
var numbers = /\d+/;

function validNumber(args) {
	return typeof args == 'number' || typeof args == 'string' && args.match(numbers);
}

module.exports = exports['default'];