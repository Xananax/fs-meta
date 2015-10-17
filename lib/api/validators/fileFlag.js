'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = validFileMode;
var reg = /r|w|a|x/i;

function validFileMode(args) {
	return typeof args === 'string' && args.match(reg);
}

module.exports = exports['default'];