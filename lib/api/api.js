'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _apido = require('apido');

var _apido2 = _interopRequireDefault(_apido);

var _commands = require('./commands');

var _commands2 = _interopRequireDefault(_commands);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

exports['default'] = _bluebird2['default'].promisify(function makeAPI(fs, path, options, cb) {

	if (typeof options == 'function') {
		cb = options;
		options = null;
	}

	var boxed = fs.boxed(path, options);
	var commands = (0, _commands2['default'])(boxed, options);

	(0, _apido2['default'])({
		name: 'fs',
		description: 'file system manager',
		commands: commands
	}).then(function (api) {
		cb(null, api);
	}).error(cb);
});
module.exports = exports['default'];