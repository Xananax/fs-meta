'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _validatorsNumber = require('../validators/number');

var _validatorsNumber2 = _interopRequireDefault(_validatorsNumber);

exports['default'] = {
	name: 'interval',
	description: 'polling interval (not always used, depends on the operating system capabilities)',
	valid: 'milliseconds',
	'default': 5007,
	validate: _validatorsNumber2['default']
};
module.exports = exports['default'];