'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

exports['default'] = function (commandName, arg, value, details) {
	return {
		response: 'error',
		status: 500,
		commandName: commandName,
		message: 'the value ' + value + ' provided to \'' + arg + '\' is invalid',
		details: details
	};
};

module.exports = exports['default'];