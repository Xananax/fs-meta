import statToObj from '../statToObj';

export default function getMeta(fs,src,options,cb,stat){
	if(typeof options == 'function'){
		cb = options;
		options = null;
	}
	if(stat){
		return processStat(src,options,cb)(null,stat);
	}
	var lstat = (options && ('lstat' in options)) ? options.lstat : true;
	if(lstat){
		fs.lstat(src,processStat(fs,src,options,cb))
	}else{
		fs.stat(src,processStat(fs,src,options,cb))
	}
}

function applyFilters(fs,obj,options,cb){
	if(options && options.filters && options.filters.length){
		const {filters} = options;
		const {length} = filters;
		(function nextFilter(i){
			if(i>=length){return cb(null,obj);}
			let filter = filters[i];
			if(!filter){return nextFilter(i+1);}
			if(typeof filter !== 'function'){
				throw new Error('filter is not a function')
			}
			filter(obj,options,function(err,obj){
				if(err){return cb(err);}
				nextFilter(i+1);
			},fs)
		})(0);
		return;
	}
	return cb(null,obj);
}

function processStat(fs,src,options,cb){
	return function statCB(err,stat){
		if(err){return cb(err);}
		const obj = statToObj(src,stat);
		if(options && obj.isSymbolicLink && options.followSymLinks){
			return symbolicLinkStat(fs,obj,src,options,cb);
		}
		return applyFilters(fs,obj,options,cb);
	}
}

function symbolicLinkStat(fs,obj,src,options,cb){
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

