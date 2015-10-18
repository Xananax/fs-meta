import isFunction from './utils/isFunction';
import isUndefined from './utils/isUndefined';
import extractId from './utils/extractId';

export default function removeFile(adapter,file,options,cb){

	if(isFunction(options)){
		cb = options;
		options = null;
	}

	const id = extractId(file);

	if(isUndefined(id)){return cb(new Error('could not find id'));}

	options = Object.assign({cascade:true},options)
	
	adapter.removeFile(id,options,cb);	
}