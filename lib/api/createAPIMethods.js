'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = createMethods;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _methods = require('./methods');

var _createAPIMethodDescriptor = require('./createAPIMethodDescriptor');

var _createAPIMethodDescriptor2 = _interopRequireDefault(_createAPIMethodDescriptor);

var _responses = require('./responses');

var _errorsArgumentRequiredError = require('./errors/argumentRequiredError');

var _errorsArgumentRequiredError2 = _interopRequireDefault(_errorsArgumentRequiredError);

var _errorsArgumentValueInvalidError = require('./errors/argumentValueInvalidError');

var _errorsArgumentValueInvalidError2 = _interopRequireDefault(_errorsArgumentValueInvalidError);

function createMethods(fsm) {
	var methods = {};
	var generalDescriptor = {};

	var _loop = function (methodName) {
		var _methodsData$methodName = _methods.methodsData[methodName];
		var args = _methodsData$methodName.args;
		var name = _methodsData$methodName.name;
		var description = _methodsData$methodName.description;

		var argLength = args.length;
		var commandDetails = (0, _createAPIMethodDescriptor2['default'])(name, description, args);
		generalDescriptor[methodName] = commandDetails;
		methods[methodName] = function method(givenArgs, cb) {
			var i = 0;
			var finalArgs = [];
			var query = { methodName: methodName, args: givenArgs };
			if (!cb || !(typeof cb == 'function')) {
				throw new Error('no callback provided');
			}
			if (givenArgs[0] == '/--help') {
				return cb(null, (0, _responses.createJsonAnswer)(commandDetails));
			}
			while (i < argLength) {
				var arg = givenArgs[i];
				var argProps = args[i];
				if (typeof arg == 'undefined' && argProps.required) {
					return cb((0, _errorsArgumentRequiredError2['default'])(methodName, argProps.name, commandDetails));
				}
				if (argProps.valid) {
					if (!argProps.valid(arg)) {
						return cb((0, _errorsArgumentValueInvalidError2['default'])(methodName, argProps.name, arg, commandDetails));
					}
				}
				finalArgs.push(argProps.coerce ? argProps.coerce(arg) : arg);
				i++;
			}
			fsm[name].apply(fsm, finalArgs).then(function (result) {
				return cb(null, (0, _responses.createJsonAnswer)(query, result));
			}).error(function (err) {
				return cb((0, _responses.errorToJson)(methodName, err));
			});
		};
	};

	for (var methodName in _methods.methodsData) {
		_loop(methodName);
	}
	methods['--help'] = function method(givenArgs, cb) {
		return cb(null, (0, _responses.createJsonAnswer)('help', generalDescriptor));
	};
	return methods;
}

module.exports = exports['default'];