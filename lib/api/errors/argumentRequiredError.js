'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

exports['default'] = function (commandName, arg, details) {
	return {
		response: 'error',
		status: 500,
		commandName: commandName,
		message: '\'' + arg + '\' is required',
		details: details
	};
};

module.exports = exports['default'];