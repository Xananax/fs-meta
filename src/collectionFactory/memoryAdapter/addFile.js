import isUndefined from '../utils/isUndefined';

export default function addFile(db,file,options,cb,{save}){

	const {path} = file;

	const index = db.files.items.push(file) -1 ;
	const id = 'id-'+index;
	file.id = id;
	db.files.indexes.id[id] = index;
	db.files.indexes.path[path] = index;
	if(file.groups.length){
		file.groups = file.groups.map(groupId=>{
			const index = db.groups.indexes.id[groupId];
			if(isUndefined(index)){return false;}
			const group = db.groups.items[index];
			if(isUndefined(group)){return false;}
			if(group.files.indexOf(id)<0){
				group.files.push(id);
			}
			return groupId;
		}).filter(Boolean);
	}
	save(()=>cb(null,file));
}