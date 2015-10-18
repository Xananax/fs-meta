import getGroupByIndex from './utils/getGroupByIndex';
import isUndefined from '../utils/isUndefined';

export default function getGroupByName(db,name,options,cb){

	const index = db.groups.indexes.name[name];

	if(isUndefined(index)){return cb(new Error(`group name ${name} does not exist`));}

	return getGroupByIndex(db,index,options,cb);
}