'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = getMeta;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _statToObj = require('../statToObj');

var _statToObj2 = _interopRequireDefault(_statToObj);

function getMeta(fs, src, options, cb, stat) {
	if (typeof options == 'function') {
		cb = options;
		options = null;
	}
	if (stat) {
		return processStat(fs, src, options, cb)(null, stat);
	}
	var lstat = options && 'lstat' in options ? options.lstat : true;
	if (lstat) {
		fs.lstat(src, processStat(fs, src, options, cb));
	} else {
		fs.stat(src, processStat(fs, src, options, cb));
	}
}

function applyFilters(fs, obj, options, cb) {
	if (options && options.filters && options.filters.length) {
		var _ret = (function () {
			var filters = options.filters;
			var length = filters.length;

			(function nextFilter(_x) {
				var _again = true;

				_function: while (_again) {
					var i = _x;
					filter = undefined;
					_again = false;

					if (i >= length) {
						return cb(null, obj);
					}
					var filter = filters[i];
					if (!filter) {
						_x = i + 1;
						_again = true;
						continue _function;
					}
					if (typeof filter !== 'function') {
						throw new Error('filter is not a function');
					}
					filter(obj, options, function (err, obj) {
						if (err) {
							return cb(err);
						}
						nextFilter(i + 1);
					}, fs);
				}
			})(0);
			return {
				v: undefined
			};
		})();

		if (typeof _ret === 'object') return _ret.v;
	}
	return cb(null, obj);
}

function processStat(fs, src, options, cb) {
	var rootDir = options && options.root || '';
	return function statCB(err, stat) {
		if (err) {
			return cb(err);
		}
		var obj = (0, _statToObj2['default'])(src, stat, rootDir);
		if (options && obj.isSymbolicLink && options.followSymLinks) {
			return symbolicLinkStat(fs, obj, src, options, cb);
		}
		return applyFilters(fs, obj, options, cb);
	};
}

function symbolicLinkStat(fs, obj, src, options, cb) {
	var link = obj;
	return fs.realpath(src, function (err, realPath) {
		if (err) {
			return cb(err);
		}
		var src = realpath;
		getMeta(fs, src, options, function (err, obj) {
			if (err) {
				return cb(err);
			}
			obj.link = link;
			return cb(null, obj);
		});
	});
}
module.exports = exports['default'];