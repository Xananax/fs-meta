import getGroupByIndex from './utils/getGroupByIndex';
import isUndefined from '../utils/isUndefined';

export default function getRootGroups(db,options,cb){

	const index = db.groups.indexes.id['id0'];

	if(isUndefined(index)){return cb(new Error(`root group was not found`));}

	return getGroupByIndex(db,index,options,cb)

}