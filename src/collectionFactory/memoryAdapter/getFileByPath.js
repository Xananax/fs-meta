import getFileByIndex from './utils/getFileByIndex';
import isUndefined from '../utils/isUndefined';

export default function getFileByPath(db,path,options,cb){

	const index = db.files.indexes.path[path];
	
	if(isUndefined(index)){return cb(new Error(`file path ${path} does not exist`));}

	return getFileByIndex(db,index,options,cb);
}