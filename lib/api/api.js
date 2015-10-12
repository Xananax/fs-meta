'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = createAPI;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _createAPIMethods = require('./createAPIMethods');

var _createAPIMethods2 = _interopRequireDefault(_createAPIMethods);

var _responses = require('./responses');

var _errorsCommandNotExistsError = require('./errors/commandNotExistsError');

var _errorsCommandNotExistsError2 = _interopRequireDefault(_errorsCommandNotExistsError);

var _errorsArgumentWrongTypeError = require('./errors/argumentWrongTypeError');

var _errorsArgumentWrongTypeError2 = _interopRequireDefault(_errorsArgumentWrongTypeError);

var _utilsToType = require('../utils/toType');

var _utilsToType2 = _interopRequireDefault(_utilsToType);

var _utilsRegExpEscape = require('../utils/regExpEscape');

var _utilsRegExpEscape2 = _interopRequireDefault(_utilsRegExpEscape);

function createAPI(fs, path, options) {

	var methods = (0, _createAPIMethods2['default'])(fs.boxed(path));
	var separator = options && options.separator || ':';
	var commandSeparator = options && options.commandSeparator || '/';
	var commandRegExp = new RegExp((0, _utilsRegExpEscape2['default'])(commandSeparator) + '(.+)');

	function processCommand(methodName, args, cb) {
		if (!(methodName in methods)) {
			return cb((0, _errorsCommandNotExistsError2['default'])(methodName));
		}
		if (!Array.isArray(args)) {
			return cb((0, _errorsArgumentWrongTypeError2['default'])(methodName, (0, _utilsToType2['default'])(args), 'array'));
		}
		var fn = methods[methodName];
		fn(args, cb);
	}

	function run(path, options, cb) {
		if (typeof options == 'function') {
			cb = options;
			options = null;
		}
		path = path.replace(/^\/|\/$/, '');
		var args = path.split(separator);
		var firstArg = args[0].split(commandRegExp);
		var command = firstArg[0];
		if (firstArg[1]) {
			args[0] = '/' + firstArg[1];
		} else {
			args.shift();
		}
		args.push(options);
		return processCommand(command, args, cb);
	}

	function middleware(req, res) {
		return run(req.path, req.query, function (err, result) {
			if (err) {
				return res.json(err);
			}
			res.json(result);
		});
	}

	processCommand.middleware = middleware;
	processCommand.run = run;
	return processCommand;
}

module.exports = exports['default'];