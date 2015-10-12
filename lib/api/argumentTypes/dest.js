'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _validatorsString = require('../validators/string');

var _validatorsString2 = _interopRequireDefault(_validatorsString);

exports['default'] = {
	name: 'destination',
	description: 'the destination path of the operation',
	valid_values: '',
	required: true,
	valid: _validatorsString2['default']
};
module.exports = exports['default'];