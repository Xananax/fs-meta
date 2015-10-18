import getGroupByName from './getGroupByName';
import isUndefined from '../utils/isUndefined';

export default function addGroup(db,group,options,cb,{save}){

	const {name} = group;

	getGroupByName(db,name,options,(err,found)=>{

		if(found){return cb(new Error(`group ${name} already exists`));}

		const index = db.groups.items.push(group) -1;
		const id = 'id-'+index;;
		group.id = id;
		
		db.groups.indexes.id[id] = index;
		db.groups.indexes.name[name] = index;

		if(group.files.length){
			group.files = group.files.map(fileId=>{
				const index = db.files.indexes.id[fileId];
				if(isUndefined(index)){return false;}
				const file = db.files.items[index];
				if(isUndefined(file)){return false;}
				if(file.groups.indexOf(id)<0){
					file.groups.push(id);
				}
				return fileId;
			}).filter(Boolean);
		}

		save(()=>cb(null,group));
	})

}