'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = statToObj;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mime = require('mime');

var _mime2 = _interopRequireDefault(_mime);

function statToObj(src, stat) {
	var dev = stat.dev;
	var ino = stat.ino;
	var mode = stat.mode;
	var nlink = stat.nlink;
	var uid = stat.uid;
	var gid = stat.gid;
	var rdev = stat.rdev;
	var size = stat.size;
	var blksize = stat.blksize;
	var blocks = stat.blocks;
	var atime = stat.atime;
	var mtime = stat.mtime;
	var ctime = stat.ctime;
	var birthtime = stat.birthtime;

	var ext = _path2['default'].extname(src);
	var basename = _path2['default'].basename(src, ext);
	var dirname = _path2['default'].dirname(src);
	var mimeType = stat.isDirectory() ? 'inode/directory' : _mime2['default'].lookup(src) || 'application/octet-stream';
	var obj = {
		basename: basename,
		filename: basename + ext,
		path: src,
		dirname: dirname,
		extension: ext.replace(/^\./, '').toLowerCase(),
		isFile: stat.isFile(),
		isDirectory: stat.isDirectory(),
		isBlockDevice: stat.isBlockDevice(),
		isCharacterDevice: stat.isCharacterDevice(),
		isSymbolicLink: stat.isSymbolicLink && stat.isSymbolicLink() || false,
		isFIFO: stat.isFIFO(),
		isSocket: stat.isSocket(),
		isHidden: /^\./.test(basename),
		mimeType: mimeType,
		mime: mimeType.split('/'),
		dev: dev, ino: ino, mode: mode, nlink: nlink, uid: uid, gid: gid, rdev: rdev, size: size, blksize: blksize, blocks: blocks, atime: atime, mtime: mtime, ctime: ctime, birthtime: birthtime
	};
	return obj;
}

module.exports = exports['default'];