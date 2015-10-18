import getCollection from './getCollection';
import getGroupById from '../getGroupById';
import getFileById from '../getFileById';
import isUndefined from '../../utils/isUndefined';
export default function getGroupByIndex(db,index,options,cb){

	const group = db.groups.items[index];
	
	if(isUndefined(group)){return cb(new Error(`group index ${index} not found`));}

	getCollection(db,group.groups,options,getGroupById,(err,groups)=>{
		if(err){return cb(err);}
		getCollection(db,group.files,options,getFileById,(err,files)=>{
			if(err){return cb(err);}
			return cb(null,Object.assign({},group,{files,groups}))
		})
	})	
}