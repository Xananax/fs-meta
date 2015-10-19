'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _validatorsNumber = require('../validators/number');

var _validatorsNumber2 = _interopRequireDefault(_validatorsNumber);

exports['default'] = {
	name: 'len',
	description: 'length to cut off at',
	valid: 'number',
	validate: _validatorsNumber2['default'],
	coerce: function coerce(args) {
		return parseInt(args);
	}
};
module.exports = exports['default'];