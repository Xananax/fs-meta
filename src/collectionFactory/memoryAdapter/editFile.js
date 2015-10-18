import getFileById from './getFileById';

export default function editFile(db,newFile,options,cb,{save}){

	var {id,path,groups} = newFile;

	getFileById(db,id,{recursion:0},(err,file)=>{

		if(err){return cb(err);}

		const index = db.files.indexes.id[id];

		if(file.path!==path){		
			delete db.files.indexes.path[file.path];
			db.files.indexes.path[path] = index;
		}

		const _file = Object.assign({},file,{id,path,groups})
		db.files.items[index] = _file;

		save(()=>cb(null,_file));
	})
}