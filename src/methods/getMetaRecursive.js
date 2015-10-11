import getMeta from './getMeta';
import traverse from './traverse';

export default function getMetaRecursive(fs,src,options,cb){
	const files = [];
	const indexes = {};
	const directories = {}
	if(typeof options == 'function'){
		cb = options;
		options = null;
	}
	traverse(fs,src,options
	,	(filePath,stats,options,next)=>{
			getMeta(
				fs
			,	filePath
			,	options
			,	(err,meta)=>{
					var index = files.push(meta) - 1;
					indexes[meta.path] = index;
					if(!directories[meta.dirname]){directories[meta.dirname] = [];}
					directories[meta.dirname].push(index);
					if(meta.isDirectory){
						meta.files = directories[meta.path];
					}
					next();
				}
			,	stats
			)
		}
	,	(err)=>err?cb(err):cb(null,{indexes,files})
	)
}