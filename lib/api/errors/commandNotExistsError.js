'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

exports['default'] = function (commandName) {
	return {
		response: 'error',
		status: 500,
		commandName: commandName,
		message: commandName + ' is not a recognized command'
	};
};

module.exports = exports['default'];