'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeCommands;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commands = require('./commands');

var _commands2 = _interopRequireDefault(_commands);

function makeCommands(fs, opts) {
	return _commands2['default'].map(function (m) {
		return m(fs, opts);
	});
}

module.exports = exports['default'];