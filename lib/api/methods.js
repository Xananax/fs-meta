'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeMethods;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _methodsIndex = require('./methods/index');

var _methodsIndex2 = _interopRequireDefault(_methodsIndex);

function makeMethods(fs, opts) {
	return _methodsIndex2['default'].map(function (m) {
		return m(fs, opts);
	});
}

module.exports = exports['default'];