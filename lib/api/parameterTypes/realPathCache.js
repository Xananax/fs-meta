'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _validatorsObject = require('../validators/object');

var _validatorsObject2 = _interopRequireDefault(_validatorsObject);

exports['default'] = {
	name: 'cache',
	description: 'a cache object to speed up lookups',
	valid: 'object',
	validate: _validatorsObject2['default']
};
module.exports = exports['default'];