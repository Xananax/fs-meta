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
,	'readdirp'
]

const methodsWithTwoPaths = [
	'rename'
,	'link'
,	'symlink'
,	'readlink'
,	'copy'
,	'move'
]

const lastSlashRegex = /\/$/
const firstSlashRegex = /^\//

export default function makeBox(rootDir,opts){
	var sync = opts && opts.sync;
	var methodsFrom = sync ? methodsSync : methods;
	var filters = opts && opts.filters? opts.filters : [];
	var unpromised = opts && opts.unpromised
	var obj = {};
	obj.filters = filters;
	for(let name in methods){
		obj[name] = methods[name];
	}
	if(rootDir){
		obj.root = rootDir.replace(lastSlashRegex,'');
		for(let name of methodsWithPath){
			if(obj[name]){
				let fn = (opts && opts.methods && opts.methods[name]) ? 
					opts.methods[name].bind({super:obj[name]}) : 
					obj[name]
				;
				obj[name] = methodsReturnsPath.indexOf(name)>=0 ?
					function boxedToRootReturnsPath(src,options,cb){
						src = src ? obj.root+'/'+src.replace(firstSlashRegex,'') : obj.root;
						if(typeof options == 'function'){
							cb = options;
							options = null;
						}
						options = Object.assign({},options,{root:obj.root});
						const filters = options.filters ? obj.filters.concat(options.filters) : obj.filters;
						options.filters = filters;
						return fn(src,options,cb);
					} 
					:
					function boxedToRoot(src,...args){
						src = src ? obj.root+'/'+src.replace(firstSlashRegex,'') : obj.root;
						return fn(src,...args);
					}
			}
		}
		for(let name of methodsWithTwoPaths){
			if(obj[name]){
				let fn = (opts && opts.methods && opts.methods[name]) ? 
					opts.methods[name].bind({super:obj[name]}):
					obj[name]
				;
				obj[name] = function boxedToRootTwoPaths(src,dest,...args){
					src = src ? obj.root +'/'+src.replace(firstSlashRegex,'') : obj.root;
					dest = dest ? obj.root +'/'+ dest.replace(firstSlashRegex,'') : obj.root;
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