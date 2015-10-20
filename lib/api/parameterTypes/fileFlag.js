'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _validatorsFileFlag = require('../validators/fileFlag');

var _validatorsFileFlag2 = _interopRequireDefault(_validatorsFileFlag);

exports['default'] = {
	name: 'flag',
	description: 'file flag',
	valid: ['r', 'a', 'x', 'w'],
	validate: _validatorsFileFlag2['default']
};
module.exports = exports['default'];