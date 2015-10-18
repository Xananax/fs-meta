import getMeta from './getMeta';

export default function symbolicLinkStat(fs,obj,src,options,cb){
	const link = obj;
	return fs.realpath(src,function(err,realPath){
		if(err){return cb(err);}
		const src = realpath;
		getMeta(fs,src,options,function(err,obj){
			if(err){return cb(err);}
			obj.link = link;
			return cb(null,obj);
		});
	})
}