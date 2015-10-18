export default function getGroupParents(db,id,cb){
	return db.groups.items.filter(group=>{
		var index = group.groups.indexOf(id);
		return (index>=0);
	})
}