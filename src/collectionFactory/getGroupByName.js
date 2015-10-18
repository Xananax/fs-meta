import isFunction from './utils/isFunction';
import isUndefined from './utils/isUndefined';

export default function getGroupByName(adapter,name,options,cb){

	if(isFunction(options)){
		cb = options;
		options = null;
	}

	if(isUndefined(name)){return cb(new Error('name was undefined'))}

	options = Object.assign({},options)

	return adapter.getGroupByName(name,options,cb);

}