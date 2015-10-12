'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

exports['default'] = function (commandName, path) {
	return {
		response: 'error',
		status: 404,
		commandName: commandName,
		message: path + ' was not found'
	};
};

module.exports = exports['default'];