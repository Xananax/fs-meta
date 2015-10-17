'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsRegExpEscape = require('../../utils/regExpEscape');

var _utilsRegExpEscape2 = _interopRequireDefault(_utilsRegExpEscape);

exports['default'] = {
	name: 'filter',
	description: 'Function or RegExp to filter copied files. If function, return true to include, false to exclude. If RegExp, same as function, where filter is filter.test.',
	valid: ['RegExp', 'Function', 'String'],
	validate: function validate(arg) {
		return typeof arg == 'string' || arg instanceof RegExp || typeof arg == 'function';
	},
	coerce: function coerce(arg) {
		if (typeof arg == 'string') {
			return (0, _utilsRegExpEscape2['default'])(arg);
		}
		return arg;
	}
};
module.exports = exports['default'];