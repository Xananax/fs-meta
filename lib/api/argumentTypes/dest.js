'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _validatorsPath = require('../validators/path');

var _validatorsPath2 = _interopRequireDefault(_validatorsPath);

var _coercePath = require('../coerce/path');

var _coercePath2 = _interopRequireDefault(_coercePath);

exports['default'] = {
	name: 'dest',
	description: 'the destination path of the operation',
	valid: 'path',
	validate: _validatorsPath2['default'],
	coerce: _coercePath2['default']
};
module.exports = exports['default'];