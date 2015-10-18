import isFunction from './utils/isFunction';
import isUndefined from './utils/isUndefined';
import extractId from './utils/extractId';

export default function editGroup(adapter,newGroup,options,cb){

	if(isFunction(options)){
		cb = options;
		options = null;
	}

	var {id,name,groups,files} = newGroup;

	if(isUndefined(id)){return cb(new Error('group does not have an id'));}

	groups = groups && groups.map(extractId).filter(Boolean) || [];
	files = files && files.map(extractId).filter(Boolean) || [];

	options = Object.assign({},options)

	adapter.editGroup({id,name,groups,files},options,cb)
}