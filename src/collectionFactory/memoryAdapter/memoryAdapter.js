import addFile from './addFile';
import addGroup from './addGroup';
import editFile from './editFile';
import editGroup from './editGroup';
import getFileById from './getFileById';
import getFileByPath from './getFileByPath';
import getGroupById from './getGroupById';
import getGroupByName from './getGroupByName';
import removeFile from './removeFile';
import removeGroup from './removeGroup';
import getRootGroups from './getRootGroups';

function persistFactory(fs,db,filename){
	filename = filename || '__fsmeta-Memory_adapter__.json';
	return {
		load(cb){
			fs.readJson(filename)
			.then(json=>{				
				db.groups.indexes.id = json.groups.indexes.id;
				db.groups.indexes.name = json.groups.indexes.name;
				db.groups.items = json.groups.items;
				db.files.indexes.id = json.files.indexes.id;
				db.files.indexes.path = json.files.indexes.path;
				db.files.items = json.files.items;
				cb();
			})
			.error(cb)
		}
	,	save(cb){
			fs.writeJson(filename,db)
				.then(()=>cb())
				.error(cb);
		}
	}
}

function noOpPersistFactory(db){
	return {
		load(cb){
			return cb()
		}
	,	save(cb){
			return cb()
		}
	}
}

export default function createMemoryAdapter(fs,settings){

	const db = {
		groups:{
			indexes:{
				id:{
					id0:0
				,	id1:1
				}
			,	name:{
					__root__:0
				,	favorites:1
				}
			}
		,	items:[
				{
					name:'__root__'
				,	id:'id0'
				,	groups:['id1']
				,	files:[]
				}
			,	{
					name:'favorites'
				,	id:'id1'
				,	groups:[]
				,	files:[]
				}
			]
		}
	,	files:{
			indexes:{
				id:{}
			,	path:{}
			}
		,	items:[]
		}
	};

	const persist = settings && settings.collectionPersist ? 
		 	(typeof settings.collectionPersist === 'function' ?
				settings.collectionPersist :
				persistFactory(fs,db,settings.collectionPersist)) :
			noOpPersistFactory()
	;

	return {
		getGroupById(id,options,cb){
			return getGroupById(db,id,options,cb);
		}
	,	getFileById(id,options,cb){
			return getFileById(db,id,options,cb);
		}
	,	getFileByPath(path,options,cb){
			return getFileByPath(db,path,options,cb);
		}
 	,	getGroupByName(name,options,cb){
 			return getGroupByName(db,name,options,cb);
 		}
	,	addGroup(group,options,cb){
			return addGroup(db,group,options,cb,persist);
		}
	,	addFile(file,options,cb){
			return addFile(db,file,options,cb,persist);
		}
	,	editGroup(newGroup,options,cb){
			return editGroup(db,newGroup,options,cb,persist);
		}
	,	editFile(newFile,options,cb){
			return editFile(db,newFile,options,cb,persist);
		}
	,	removeFile(id,options,cb){
			return removeFile(db,id,options,cb,persist)
		}
	,	removeGroup(id,options,cb){
			return removeGroup(db,id,options,cb,persist)
		}
	,	getRootGroups(options,cb){
			return getRootGroups(db,options,cb)
		}
	,	save(options,cb){
			return persist.save(cb);
		}
	,	load(options,cb){
			return persist.load(()=>cb(null,db));
		}
	,	dump(options,cb){
			return cb(null,db);
		}
	}

}