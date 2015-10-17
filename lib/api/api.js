'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _apido = require('apido');

var _apido2 = _interopRequireDefault(_apido);

var _methods = require('./methods');

var _methods2 = _interopRequireDefault(_methods);

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

exports['default'] = _bluebird2['default'].promisify(function makeAPI(fs, path, options, cb) {
	if (typeof options == 'function') {
		cb = options;
		options = null;
	}

	var boxed = fs.boxed(path, options);
	var methods = (0, _methods2['default'])(boxed, options);

	(0, _apido2['default'])({
		name: 'fs',
		description: 'file system manager',
		methods: methods
	}).then(function (api) {
		cb(null, api);
	}).error(cb);
});
module.exports = exports['default'];