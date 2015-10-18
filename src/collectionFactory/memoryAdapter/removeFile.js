import getFileById from './getFileById'
import removeFromParents from './utils/removeFromParents';
import splice from '../utils/splice';

export default function removeFile(db,id,options,cb,{save}){
	
	const {cascade} = options

	getFileById(db,id,options,(err,file)=>{
		if(err){return cb(err);}
		const {path} = file;
		const index = db.files.indexes.id[id];
		if(cascade){
			removeFromParents(db,id,'files','groups')
			removeFromParents(db,id,'groups','files')
		}
		delete db.files.indexes.id[id];
		delete db.files.indexes.path[file.path];
		db.files.items  = splice(index,1,db.files.items);
		save(()=>cb(null,file))
	})
}