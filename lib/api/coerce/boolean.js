'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = coerce;
var trueVals = /true|1/i;

function coerce(arg) {
	if (typeof arg == 'boolean') {
		return arg;
	}
	if (typeof arg == 'string') {
		return trueVals.test(arg) ? true : false;
	}
	if (typeof arg == 'number') {
		return arg > 0;
	}
	return !!arg;
}

module.exports = exports['default'];