'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = valid;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsToType = require('../../utils/toType');

var _utilsToType2 = _interopRequireDefault(_utilsToType);

function valid(args) {
	return (0, _utilsToType2['default'])(args) == 'object';
}

module.exports = exports['default'];