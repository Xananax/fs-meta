export default function applyFilters(fs,obj,options,cb){
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