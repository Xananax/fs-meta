import getMeta from './getMeta';
import traverse from './traverse';

export default function getMetaRecursive(fs,src,options,cb){
	const files = [];
	if(typeof options == 'function'){
		cb = options;
		options = null;
	}
	traverse(fs,src,options
	,	(filePath,stats,options,next)=>getMeta(
			filePath
		,	options
		,	(err,stats)=>{
				files.push(stats);
				next();
			}
		,	stats
		)
	,	(err)=>err?cb(err):cb(null,files)
	)
}