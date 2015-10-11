import methods from './methods';
import methodsSync from './methodsSync';
import Promise from 'bluebird';

const methodsWithPath = [
	'truncate'
,	'chown'
,	'lchown'
,	'chmod'
,	'lchmod'
,	'stat'
,	'lstat'
,	'realpath'
,	'unlink'
,	'rmdir'
,	'mkdir'
,	'readdir'
,	'open'
,	'utimes'
,	'readFile'
,	'writeFile'
,	'appendFile'
,	'watchFile'
,	'unwatchFile'
,	'watch'
,	'exists'
,	'access'
,	'createReadStream'
,	'createWriteStream'
,	'traverse'
,	'createOutputStream'
,	'emptyDir'
,	'ensureFile'
,	'ensureDir'
,	'ensureLink'
,	'ensureSymLink'
,	'mkdirs'
,	'mkdirp'
,	'outputFile'
,	'outputJson'
,	'readJson'
,	'remove'
,	'writeJson'
,	'getMeta'
,	'getMetaRecursive'
]

const methodsWithTwoPaths = [
	'rename'
,	'link'
,	'symlink'
,	'readlink'
,	'copy'
,	'move'
]

export default function makeBox(rootDir,sync,unpromised){
	var methodsFrom = sync ? methodsSync : methods;
	var obj = {};
	for(let name in methods){
		obj[name] = methods[name];
	}
	if(rootDir){
		rootDir = rootDir.replace(/\/$/,'')+'/';
		for(let name of methodsWithPath){
			if(obj[name]){
				obj[name] = function(src,...args){
					src = src ? rootDir+src : rootDir;
					methods[name](src,...args);
				}
			}
		}
		for(let name of methodsWithTwoPaths){
			if(obj[name]){
				obj[name] = function(src,dest,...args){
					src = src ? rootDir + src : rootDir;
					dest = dest ? rootDir + dest : rootDir;
					methods[name](src,dest,...args);
				}
			}
		}
	}
	if(!sync && !unpromised){
		for(let name in obj){
			if(!Object.prototype.hasOwnProperty.call(obj,name)){continue;}
			obj[name] = Promise.promisify(obj[name]);
		}
	}
	obj.readDir = obj.readdir;
	return obj;
}