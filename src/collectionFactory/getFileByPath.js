import isFunction from './utils/isFunction';
import isUndefined from './utils/isUndefined';

export default function getFileByPath(adapter,path,options,cb){

	if(isFunction(options)){
		cb = options;
		options = null;
	}

	if(isUndefined(path)){return cb(new Error('path was undefined'));}

	options = Object.assign({},options)

	return adapter.getFileByPath(path,options,cb);

}