"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = exists;

function exists(fs, path, cb) {
	fs.exists(path, function (exists) {
		if (!exists) {
			return cb(new Error(path + " does not exist"), false);
		}
		return cb(null, true);
	});
}

module.exports = exports["default"];