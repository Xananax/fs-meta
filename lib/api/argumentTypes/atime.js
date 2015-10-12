'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _validatorsSystemTime = require('../validators/systemTime');

var _validatorsSystemTime2 = _interopRequireDefault(_validatorsSystemTime);

exports['default'] = {
	name: 'atime',
	description: '',
	valid_values: '',
	required: true,
	valid: _validatorsSystemTime2['default']
};
module.exports = exports['default'];