'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _validatorsBoolean = require('../validators/boolean');

var _validatorsBoolean2 = _interopRequireDefault(_validatorsBoolean);

var _coerceBoolean = require('../coerce/boolean');

var _coerceBoolean2 = _interopRequireDefault(_coerceBoolean);

exports['default'] = {
	name: 'lstat',
	description: 'If true, will use lstat instead of stat.',
	valid: 'boolean',
	'default': false,
	validate: _validatorsBoolean2['default'],
	coerce: _coerceBoolean2['default']
};
module.exports = exports['default'];