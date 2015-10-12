'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _fs = require('fs');

function createMask(arr) {
	var nMask = 0,
	    nFlag = 0,
	    nLen = arr.length > 32 ? 32 : arr.length;
	for (nFlag; nFlag < nLen; nMask |= arr[nFlag] << nFlag++);
	return nMask;
}

exports['default'] = {
	name: 'mode',
	description: '',
	valid_values: '',
	required: true,
	valid: function valid(args) {
		return typeof args == 'number' || typeof args == 'string' && args.match(/[frwx]+/);
	},
	coerce: function coerce(args) {
		if (typeof args == 'string') {
			return createMask(args.split('').map(function (letter) {
				if (letter == 'f') {
					return _fs.F_OK;
				}
				if (letter == 'r') {
					return _fs.R_OK;
				}
				if (letter == 'w') {
					return _fs.W_OK;
				}
				if (letter == 'x') {
					return _fs.X_OK;
				}
			}));
		}
		return args;
	}
};
module.exports = exports['default'];