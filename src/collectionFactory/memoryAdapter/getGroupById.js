import getGroupByIndex from './utils/getGroupByIndex';
import isUndefined from '../utils/isUndefined';

export default function getGroupById(db,id,options,cb){

	const index = db.groups.indexes.id[id];

	if(isUndefined(index)){return cb(new Error(`group id ${id} not found`));}

	return getGroupByIndex(db,index,options,cb)

}