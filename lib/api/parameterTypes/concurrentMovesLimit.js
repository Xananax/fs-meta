'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _validatorsNumber = require('../validators/number');

var _validatorsNumber2 = _interopRequireDefault(_validatorsNumber);

exports['default'] = {
	name: 'limit',
	description: 'number of concurrent moves',
	valid: 'number',
	'default': 16,
	validate: _validatorsNumber2['default']
};
module.exports = exports['default'];