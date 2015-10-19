'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _validatorsSystemTime = require('../validators/systemTime');

var _validatorsSystemTime2 = _interopRequireDefault(_validatorsSystemTime);

exports['default'] = {
	name: 'atime',
	description: 'access time',
	valid: 'time',
	validate: _validatorsSystemTime2['default']
};
module.exports = exports['default'];