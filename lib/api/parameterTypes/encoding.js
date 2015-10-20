'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _validatorsEncoding = require('../validators/encoding');

var _validatorsEncoding2 = _interopRequireDefault(_validatorsEncoding);

exports['default'] = {
	name: 'encoding',
	description: 'encoding of the file',
	valid: 'utf8',
	'default': 'utf8',
	validate: _validatorsEncoding2['default']
};
module.exports = exports['default'];