import isFunction from './utils/isFunction';
import isUndefined from './utils/isUndefined';
import extractId from './utils/extractId';

export default function editFile(adapter,newFile,options,cb){

	if(isFunction(options)){
		cb = options;
		options = null;
	}

	var {id,path,groups} = newFile;

	if(isUndefined(id)){return cb(new Error('file does not have an id'));}

	groups = groups && groups.map(extractId).filter(Boolean) || [];

	options = Object.assign({},options)

	adapter.editFile({id,path,groups},options,cb);

}