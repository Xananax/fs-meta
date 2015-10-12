'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _argumentTypesAccessMode = require('./argumentTypes/accessMode');

var _argumentTypesAccessMode2 = _interopRequireDefault(_argumentTypesAccessMode);

var _argumentTypesAtime = require('./argumentTypes/atime');

var _argumentTypesAtime2 = _interopRequireDefault(_argumentTypesAtime);

var _argumentTypesData = require('./argumentTypes/data');

var _argumentTypesData2 = _interopRequireDefault(_argumentTypesData);

var _argumentTypesDest = require('./argumentTypes/dest');

var _argumentTypesDest2 = _interopRequireDefault(_argumentTypesDest);

var _argumentTypesGid = require('./argumentTypes/gid');

var _argumentTypesGid2 = _interopRequireDefault(_argumentTypesGid);

var _argumentTypesJson = require('./argumentTypes/json');

var _argumentTypesJson2 = _interopRequireDefault(_argumentTypesJson);

var _argumentTypesLen = require('./argumentTypes/len');

var _argumentTypesLen2 = _interopRequireDefault(_argumentTypesLen);

var _argumentTypesMode = require('./argumentTypes/mode');

var _argumentTypesMode2 = _interopRequireDefault(_argumentTypesMode);

var _argumentTypesMtime = require('./argumentTypes/mtime');

var _argumentTypesMtime2 = _interopRequireDefault(_argumentTypesMtime);

var _argumentTypesRealPathCache = require('./argumentTypes/realPathCache');

var _argumentTypesRealPathCache2 = _interopRequireDefault(_argumentTypesRealPathCache);

var _argumentTypesSrc = require('./argumentTypes/src');

var _argumentTypesSrc2 = _interopRequireDefault(_argumentTypesSrc);

var _argumentTypesUid = require('./argumentTypes/uid');

var _argumentTypesUid2 = _interopRequireDefault(_argumentTypesUid);

var _makeOptionsArgument = require('./makeOptionsArgument');

var _makeOptionsArgument2 = _interopRequireDefault(_makeOptionsArgument);

var methodsData = {
	copy: {
		name: 'copy',
		description: 'Copy a file or directory. The directory can have contents. Like cp -r.',
		args: [_argumentTypesSrc2['default'], _argumentTypesDest2['default'], (0, _makeOptionsArgument2['default'])({
			clobber: '(boolean) overwrite existing file or directory',
			preserveTimestamps: '(boolean) will set last modification and access times to the ones of the original source files, default is false.',
			filter: 'Function or RegExp to filter copied files. If function, return true to include, false to exclude. If RegExp, same as function, where filter is filter.test.'
		}, {
			clobber: false,
			preserveTimestamps: false,
			filter: false
		})]
	},
	getmeta: {
		name: 'getMeta',
		description: '',
		args: [_argumentTypesSrc2['default'], (0, _makeOptionsArgument2['default'])({
			lstat: '',
			'followSymLinks': '',
			filters: ''
		}, {
			lstat: true,
			followSymLinks: true,
			filters: []
		})]
	},
	getmetarecursive: {
		name: 'getMetaRecursive',
		description: '',
		args: [_argumentTypesSrc2['default'], (0, _makeOptionsArgument2['default'])({
			lstat: '',
			'followSymLinks': '',
			filters: ''
		}, {
			lstat: true,
			followSymLinks: true,
			filters: []
		})]
	},
	emptydir: {
		name: 'emptyDir',
		description: 'Ensures that a directory is empty. If the directory does not exist, it is created. The directory itself is not deleted.',
		args: [_argumentTypesSrc2['default']]
	},
	ensurefile: {
		name: 'ensureFile',
		description: 'Ensures that the file exists. If the file that is requested to be created is in directories that do not exist, these directories are created. If the file already exists, it is NOT MODIFIED.',
		args: [_argumentTypesSrc2['default']]
	},
	ensuredir: {
		name: 'ensureDir',
		description: 'Ensures that the directory exists. If the directory structure does not exist, it is created.',
		args: [_argumentTypesSrc2['default']]
	},
	ensurelink: {
		name: 'ensureLink',
		description: 'Ensures that the link exists. If the directory structure does not exist, it is created.',
		args: [_argumentTypesSrc2['default']]
	},
	ensuresymlink: {
		name: 'ensureSymlink',
		description: 'Ensures that the symlink exists. If the directory structure does not exist, it is created.',
		args: [_argumentTypesSrc2['default']]
	},
	mkdirs: {
		name: 'mkdirs',
		description: 'Creates a directory. If the parent hierarchy doesn\'t exist, it\'s created. Like mkdir -p.',
		args: [_argumentTypesSrc2['default']]
	},
	move: {
		name: 'move',
		description: 'Moves a file or directory, even across devices.',
		args: [_argumentTypesSrc2['default'], _argumentTypesDest2['default'], (0, _makeOptionsArgument2['default'])({
			clobber: '(boolean) overwrite existing file or directory',
			limit: '(number): number of concurrent moves'
		}, {
			clobber: false,
			limit: 16
		})]
	},
	outputfile: {
		name: 'outputFile',
		description: 'Almost the same as writeFile (i.e. it overwrites), except that if the parent directory does not exist, it\'s created.',
		args: [_argumentTypesSrc2['default'], _argumentTypesData2['default']]
	},
	outputjson: {
		name: 'outputJson',
		description: 'Almost the same as writeJson, except that if the directory does not exist, it\'s created.',
		args: [_argumentTypesSrc2['default'], _argumentTypesJson2['default']]
	},
	readjson: {
		name: 'readJson',
		description: 'Reads a JSON file and then parses it into an object.',
		args: [_argumentTypesSrc2['default']]
	},
	remove: {
		name: 'remove',
		description: 'Removes a file or directory. The directory can have contents. Like rm -rf',
		args: [_argumentTypesSrc2['default']]
	},
	writejson: {
		name: 'writeJson',
		description: 'Writes an object to a JSON file',
		args: [_argumentTypesSrc2['default'], _argumentTypesJson2['default']]
	},
	rename: {
		name: 'rename',
		description: 'renames a file, moving it between directories if required.',
		args: [_argumentTypesSrc2['default'], _argumentTypesDest2['default']]
	},
	truncate: {
		name: 'truncate',
		description: 'Cause the regular file named by path to be truncated to a size of precisely length bytes. If the file previously was larger than this size, the extra data is lost.  If the file previously was shorter, it is extended, and the extended part reads as null bytes. The file offset is not changed.',
		args: [_argumentTypesSrc2['default'], _argumentTypesLen2['default']]
	},
	chown: {
		name: 'chown',
		description: 'Change the owner and/or group of each FILE to OWNER and/or GROUP.',
		args: [_argumentTypesSrc2['default'], _argumentTypesUid2['default'], _argumentTypesGid2['default']]
	},
	lchown: {
		name: 'lchown',
		description: 'lchown is like chown, but does not dereference symbolic links.',
		args: [_argumentTypesSrc2['default']]
	},
	chmod: {
		name: 'chmod',
		description: 'chmod changes the file mode bits of each given file according to mode, which can be either a symbolic representation of changes to make, or an octal number representing the bit pattern for the new mode bits.',
		args: [_argumentTypesSrc2['default'], _argumentTypesMode2['default']]
	},
	lchmod: {
		name: 'lchmod',
		description: 'lchmod is like chmod, but does not dereference symbolic links.',
		args: [_argumentTypesSrc2['default'], _argumentTypesMode2['default']]
	},
	stat: {
		name: 'stat',
		description: 'return information about a file pointed to by buf.  No permissions are required on the file itself',
		args: [_argumentTypesSrc2['default']]
	},
	lstat: {
		name: 'lstat',
		description: 'lstat is identical to stat, except that if pathname is a symbolic link, then it returns information about the link itself, not the file that it refers to.',
		args: [_argumentTypesSrc2['default']]
	},
	link: {
		name: 'link',
		description: 'creates a new link (also known as a hard link) to an existing file.',
		args: [_argumentTypesSrc2['default'], _argumentTypesDest2['default']]
	},
	symlink: {
		name: 'symlink',
		description: 'creates a symbolic link named linkpath which contains the string target.',
		args: [_argumentTypesSrc2['default'], _argumentTypesDest2['default']]
	},
	readlink: {
		name: 'readlink',
		description: 'places the contents of the symbolic link pathname in the buffer buf, which has size bufsiz.  readlink() does not append a null byte to buf.  It will truncate the contents (to a length of bufsiz characters), in case the buffer is too small to hold all of the contents.',
		args: [_argumentTypesSrc2['default']]
	},
	realpath: {
		name: 'realpath',
		description: 'expands all symbolic links and resolves references to /./, /../ and extra ' / ' characters in the null-terminated string named by path to produce a canonicalized absolute pathname. The resulting path will have no symbolic link, /./ or /../ components.',
		args: [_argumentTypesSrc2['default'], _argumentTypesRealPathCache2['default']]
	},
	unlink: {
		name: 'unlink',
		description: 'deletes a name from the filesystem.  If that name was the last link to a file and no processes have the file open, the file is deleted and the space it was using is made available for reuse.',
		args: [_argumentTypesSrc2['default']]
	},
	rmdir: {
		name: 'rmdir',
		description: 'Remove the DIRECTORY(ies), if they are empty.',
		args: [_argumentTypesSrc2['default']]
	},
	mkdir: {
		name: 'mkdir',
		description: 'attempts to create a directory named pathname.',
		args: [_argumentTypesSrc2['default'], _argumentTypesMode2['default']]
	},
	readdir: {
		name: 'readdir',
		description: 'list files in a directory',
		args: [_argumentTypesSrc2['default']]
	},
	utimes: {
		name: 'utimes',
		description: 'changes the access and modification times of the inode specified by filename to the actime and modtime fields of times respectively.',
		args: [_argumentTypesSrc2['default'], _argumentTypesAtime2['default'], _argumentTypesMtime2['default']]
	},
	readfile: {
		name: 'readFile',
		description: '',
		args: [_argumentTypesSrc2['default'], (0, _makeOptionsArgument2['default'])({}, {
			encoding: 'utf8',
			flag: 'r'
		})]
	},
	writefile: {
		name: 'writeFile',
		description: '',
		args: [_argumentTypesSrc2['default'], _argumentTypesData2['default'], (0, _makeOptionsArgument2['default'])({}, {
			encoding: 'utf8',
			mode: 438,
			flag: 'r'
		})]
	},
	appendfile: {
		name: 'appendFile',
		description: '',
		args: [_argumentTypesSrc2['default'], _argumentTypesData2['default'], (0, _makeOptionsArgument2['default'])({}, {
			encoding: 'utf8',
			mode: 438,
			flag: 'a'
		})]
	},
	watchfile: {
		name: 'watchFile',
		description: '',
		args: [_argumentTypesSrc2['default'], (0, _makeOptionsArgument2['default'])({}, {
			persistent: true,
			interval: 5007
		}), 'listener']
	},
	unwatchfile: {
		name: 'unwatchFile',
		description: '',
		args: [_argumentTypesSrc2['default'], 'listener']
	},
	watch: {
		name: 'watch',
		description: '',
		args: [_argumentTypesSrc2['default'], (0, _makeOptionsArgument2['default'])({}, {
			persistent: true,
			recursive: false
		}), 'listener']
	},
	access: {
		name: 'access',
		description: '',
		args: [_argumentTypesSrc2['default'], _argumentTypesAccessMode2['default']]
	}
};
exports.methodsData = methodsData;