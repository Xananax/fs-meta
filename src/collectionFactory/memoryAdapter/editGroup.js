import getGroupById from './getGroupById';

export default function editGroup(db,newGroup,options,cb,{save}){

	var {id,name,groups,files} = newGroup;

	getGroupById(db,id,{recursion:0},(err,group)=>{

		if(err){return cb(err);}

		const index = db.groups.indexes.id[id];

		if(group.name!==name){		
			delete db.groups.indexes.name[group.name];
			db.groups.indexes.name[name] = index;
		}

		const _group = Object.assign({},group,{id,name,groups,files})
		db.groups.items[index] = _group;

		save(()=>cb(null,_group));
	})
}