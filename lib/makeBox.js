'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = makeBox;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _methods = require('./methods');

var _methods2 = _interopRequireDefault(_methods);

var _methodsSync = require('./methodsSync');

var _methodsSync2 = _interopRequireDefault(_methodsSync);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var methodsWithPath = ['truncate', 'chown', 'lchown', 'chmod', 'lchmod', 'stat', 'lstat', 'realpath', 'unlink', 'rmdir', 'mkdir', 'readdir', 'open', 'utimes', 'readFile', 'writeFile', 'appendFile', 'watchFile', 'unwatchFile', 'watch', 'exists', 'access', 'createReadStream', 'createWriteStream', 'traverse', 'createOutputStream', 'emptyDir', 'ensureFile', 'ensureDir', 'ensureLink', 'ensureSymLink', 'mkdirs', 'mkdirp', 'outputFile', 'outputJson', 'readJson', 'remove', 'writeJson', 'getMeta', 'getMetaRecursive'];

var methodsWithTwoPaths = ['rename', 'link', 'symlink', 'readlink', 'copy', 'move'];

function makeBox(rootDir, sync, unpromised) {
	var methodsFrom = sync ? _methodsSync2['default'] : _methods2['default'];
	var obj = {};
	for (var _name in _methods2['default']) {
		obj[_name] = _methods2['default'][_name];
	}
	if (rootDir) {
		rootDir = rootDir.replace(/\/$/, '') + '/';
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			var _loop = function () {
				var name = _step.value;

				if (obj[name]) {
					obj[name] = function (src) {
						src = src ? rootDir + src : rootDir;

						for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
							args[_key - 1] = arguments[_key];
						}

						_methods2['default'][name].apply(_methods2['default'], [src].concat(args));
					};
				}
			};

			for (var _iterator = methodsWithPath[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				_loop();
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator['return']) {
					_iterator['return']();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			var _loop2 = function () {
				var name = _step2.value;

				if (obj[name]) {
					obj[name] = function (src, dest) {
						src = src ? rootDir + src : rootDir;
						dest = dest ? rootDir + dest : rootDir;

						for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
							args[_key2 - 2] = arguments[_key2];
						}

						_methods2['default'][name].apply(_methods2['default'], [src, dest].concat(args));
					};
				}
			};

			for (var _iterator2 = methodsWithTwoPaths[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				_loop2();
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2['return']) {
					_iterator2['return']();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}
	}
	if (!sync && !unpromised) {
		for (var _name2 in obj) {
			if (!Object.prototype.hasOwnProperty.call(obj, _name2)) {
				continue;
			}
			obj[_name2] = _bluebird2['default'].promisify(obj[_name2]);
		}
	}
	obj.readDir = obj.readdir;
	return obj;
}

module.exports = exports['default'];