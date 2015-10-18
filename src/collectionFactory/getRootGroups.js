import isFunction from './utils/isFunction';
import isUndefined from './utils/isUndefined';

export default function getRootGroups(adapter,options,cb){

	if(typeof options=='function'){
		cb = options;
		options = null;
	}

	if(!options){
		options = {recursion:1}
	}
	else if(!options.recursion || options.recursion<1){
		options.recursion=1;
	}

	adapter.getRootGroups(options,cb);

}