'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _apido = require('apido');

var _apido2 = _interopRequireDefault(_apido);

var _commandsFactory = require('./commandsFactory');

var _commandsFactory2 = _interopRequireDefault(_commandsFactory);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

exports['default'] = _bluebird2['default'].promisify(function makeAPI(fs, options, cb) {

	if (typeof options == 'function') {
		cb = options;
		options = null;
	}

	var commands = (0, _commandsFactory2['default'])(fs, options);

	(0, _apido2['default'])({
		name: 'fs',
		description: 'file system manager',
		commands: commands
	}).then(function (api) {
		cb(null, api);
	}).error(cb);
});
module.exports = exports['default'];