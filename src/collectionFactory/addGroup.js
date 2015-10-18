import isFunction from './utils/isFunction';
import isUndefined from './utils/isUndefined';
import extractId from './utils/extractId';

export default function addGroup(adapter,group,options,cb){

	if(isFunction(options)){
		cb = options;
		options = null;
	}

	if(typeof group == 'string' || typeof group == 'number'){
		group = {name:group};
	}
	var {name,groups,files} = group;

	if(isUndefined(name)){return cb(new Error('group does not have a name'));}

	options = Object.assign({},options)

	groups = group.groups && groups.map(extractId).filter(Boolean) || [];
	files = files && files.map(extractId).filter(Boolean) || [];

	adapter.addGroup({name,groups,files},options,cb);
}