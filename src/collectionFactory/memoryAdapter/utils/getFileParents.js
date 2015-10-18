export default function getFileParents(db,id,cb){
	return db.files.items.filter(file=>{
		var index = file.groups.indexOf(id);
		return (index>=0);
	})	
}