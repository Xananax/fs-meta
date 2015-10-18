import isFunction from './utils/isFunction';
import isUndefined from './utils/isUndefined';
import extractId from './utils/extractId';

export default function addFile(adapter,file,options,cb){

	if(isFunction(options)){
		cb = options;
		options = null;
	}

	if(typeof file == 'string'){
		file = {path:file};
	}

	var {path,groups} = file;

	if(isUndefined(path)){return cb(new Error('file does not have a path'))}

	options = Object.assign({},options)

	groups = groups && groups.map(extractId).filter(Boolean) || [];

	adapter.addFile({path,groups},options,cb);
}