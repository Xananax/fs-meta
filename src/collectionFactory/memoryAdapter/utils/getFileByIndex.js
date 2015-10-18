import getCollection from './getCollection';
import getGroupById from '../getGroupById';
import isUndefined from '../../utils/isUndefined';
export default function getFileByIndex(db,index,options,cb){

	const file = db.files.items[index];

	if(isUndefined(file)){return cb(new Error(`file index ${index} not found`));}

	getCollection(db,file.groups,options,getGroupById,(err,groups)=>{
		if(err){return cb(err);}
		return cb(null,Object.assign({},file,{groups}))
	})
}