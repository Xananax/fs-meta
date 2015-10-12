'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

exports['default'] = function (commandName, givenType, neededType) {
	return {
		response: 'error',
		status: 500,
		commandName: commandName,
		message: 'Wrong argument type. \'' + givenType + '\' was given, when ' + neededType + ' was needed'
	};
};

module.exports = exports['default'];