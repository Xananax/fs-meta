import getGroupById from './getGroupById'
import removeFromParents from './utils/removeFromParents';
import splice from '../utils/splice';

export default function removeGroup(db,id,options,cb,{save}){
	const {cascade} = options;
	getGroupById(db,id,options,(err,group)=>{
		if(err){return cb(err);}
		const {name} = group;
		const index = db.groups.indexes.id[id];
		if(cascade){
			removeFromParents(db,id,'files','groups')
			removeFromParents(db,id,'groups','groups')
		}
		delete db.groups.indexes.name[name]
		delete db.groups.indexes.id[id];
		db.groups.items  = splice(index,1,db.groups.items);
		save(()=>cb(null,group));
	})
}