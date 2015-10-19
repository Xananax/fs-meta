'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _validatorsFileMode = require('../validators/fileMode');

var _validatorsFileMode2 = _interopRequireDefault(_validatorsFileMode);

exports['default'] = {
	name: 'mode',
	description: 'permissons',
	valid: 'octal',
	'default': 438,
	validate: _validatorsFileMode2['default']
};
module.exports = exports['default'];