'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = processStat;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _applyFilters = require('./applyFilters');

var _applyFilters2 = _interopRequireDefault(_applyFilters);

var _symbolicLinkStat = require('./symbolicLinkStat');

var _symbolicLinkStat2 = _interopRequireDefault(_symbolicLinkStat);

var _statToObj = require('../../statToObj');

var _statToObj2 = _interopRequireDefault(_statToObj);

function processStat(fs, src, options, cb) {
	var rootDir = options && options.root || '';
	return function statCB(err, stat) {
		if (err) {
			return cb(err);
		}
		var obj = (0, _statToObj2['default'])(src, stat, rootDir);
		if (options && obj.isSymbolicLink && options.followSymLinks) {
			return (0, _symbolicLinkStat2['default'])(fs, obj, src, options, cb);
		}
		return (0, _applyFilters2['default'])(fs, obj, options, cb);
	};
}

module.exports = exports['default'];