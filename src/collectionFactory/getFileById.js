import isFunction from './utils/isFunction';
import isUndefined from './utils/isUndefined';

export default function getFileById(adapter,id,options,cb){

	if(isFunction(options)){
		cb = options;
		options = null;
	}

	if(isUndefined(id)){return cb(new Error('id was undefined'));}

	options = Object.assign({},options)

	return adapter.getFileById(id,options,cb);
}