'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeCommands;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commandsIndex = require('./commands/index');

var _commandsIndex2 = _interopRequireDefault(_commandsIndex);

function makeCommands(fs, opts) {
	return _commandsIndex2['default'].map(function (m) {
		return m(fs, opts);
	});
}

module.exports = exports['default'];