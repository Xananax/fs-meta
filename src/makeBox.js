import methods from './methods';
import methodsSync from './methodsSync';
import Promise from 'bluebird';

const methodsReturnsPath = [
	'getMeta'
,	'getMetaRecursive'
]

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
		obj.root = rootDir.replace(/\/$/,'');
		for(let name of methodsWithPath){
			if(obj[name]){
				let fn = obj[name];
				obj[name] = methodsReturnsPath.indexOf(name)>=0 ?
					function boxedToRootReturnsPath(src,options,cb){
						src = src ? obj.root+src : obj.root;
						if(typeof options == 'function'){
							cb = options;
							options = null;
						}
						options = Object.assign({},options,{root:obj.root});
						return fn(src,options,cb);
					} 
					:
					function boxedToRoot(src,...args){
						src = src ? obj.root+src : obj.root;
						console.log(name,src)
						return fn(src,...args);
					}
			}
		}
		for(let name of methodsWithTwoPaths){
			if(obj[name]){
				let fn = obj[name] 
				obj[name] = function boxedToRootTwoPaths(src,dest,...args){
					src = src ? obj.root + src : obj.root;
					dest = dest ? obj.root + dest : obj.root;
					return fn(src,dest,...args);
				}
			}
		}
	}
	if(!sync && !unpromised){
		for(let name in obj){
			if(!Object.prototype.hasOwnProperty.call(obj,name)){continue;}
			if(!(typeof obj[name] == 'function')){continue;}
			obj[name] = Promise.promisify(obj[name]);
		}
	}
	obj.readDir = obj.readdir;
	return obj;
}