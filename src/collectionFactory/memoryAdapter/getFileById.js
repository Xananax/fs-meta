import getFileByIndex from './utils/getFileByIndex';
import isUndefined from '../utils/isUndefined';

export default function getFileById(db,id,options,cb){

	const index = db.files.indexes.id[id];

	if(isUndefined(index)){return cb(new Error(`file id ${id} not found`));}

	return getFileByIndex(db,index,options,cb);
}