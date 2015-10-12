'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _validatorsUid = require('../validators/uid');

var _validatorsUid2 = _interopRequireDefault(_validatorsUid);

exports['default'] = {
	name: 'gid',
	description: '',
	valid_values: '',
	required: true,
	valid: _validatorsUid2['default']
};
module.exports = exports['default'];