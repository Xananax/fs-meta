'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.createJsonError = createJsonError;
exports.createJsonAnswer = createJsonAnswer;
exports.errorToJson = errorToJson;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _errorsFileNotFoundError = require('./errors/fileNotFoundError');

var _errorsFileNotFoundError2 = _interopRequireDefault(_errorsFileNotFoundError);

function createJsonError(message, commandDetails) {
	return {
		response: 'error',
		message: message,
		commandDetails: commandDetails
	};
}

function createJsonAnswer(query, result) {
	return {
		response: 'success',
		status: 200,
		result: result,
		query: query
	};
}

function errorToJson(commandName, err) {
	if (err.code == 'ENOENT') {
		return (0, _errorsFileNotFoundError2['default'])(commandName, (err.message.match(/'(.*?)'$/) || ['', ''])[1]);
	}
	return {
		response: 'error',
		commandName: commandName,
		name: err.name,
		status: err.status || 500,
		code: err.code || 0,
		message: err.message,
		stack: err.stack.split(/\n/)
	};
}