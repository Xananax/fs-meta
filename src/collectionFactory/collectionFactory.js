import memoryAdapter from './memoryAdapter';

import isUndefined from './utils/isUndefined';
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

export default function collectionFactory(fs,settings){

	var adapter = (settings && settings.adapter) || memoryAdapter(fs,settings);

	const methods = {
		getGroup(options,cb){
			if(options && options.group_id){
				return getGroupById(adapter,options.group_id,options,cb);
			}else if(options && options.group_name){
				return getGroupByName(adapter,options.group_name,options,cb);
			}
			return cb(new Error('getGroup needs a name or an id parameter'));
		}
	,	getFile(options,cb){
			if(options && options.file_id){
				return getFileById(adapter,options.file_id,options,cb);
			}else if(options && options.file_path){
				return getFileByPath(adapter,options.file_path,options,cb)
			}
			return cb(new Error('getFile needs a path or an id parameter'))
		}
	,	addGroup(options,cb){
			if(options && options.group){
				return addGroup(adapter,options.group,options,cb);
			}
			return cb(new Error('addGroup needs a group parameter'));
		}
	,	addFile(options,cb){
			if(options && options.file){
				return addFile(adapter,options.file,options,cb);
			}
			return cb(new Error('addFile needs a file parameter'));
		}
	,	editGroup(options,cb){
			if(options && options.group){
				return editGroup(adapter,options.group,options,cb);
			}
			return cb(new Error('editGroup needs a group parameter'))
		}
	,	editFile(options,cb){
			if(options && options.file){
				return editFile(adapter,options.file,options,cb);
			}
			return cb(new Error('editFile needs a file parameter'))
		}
	,	removeFile(options,cb){
			if(options && (options.file || options.file_id)){
				return removeFile(adapter,options.file||options.file_id,options,cb)
			}
			return cb(new Error('removeFile needs a file or an id parameter'));
		}
	,	removeGroup(options,cb){
			if(options && (options.group || options.group_id)){
				return removeGroup(adapter,options.group||options.group_id,options,cb)
			}
			return cb(new Error('removeGroup needs a group or an id parameter'));
		}
	,	rootGroup(options,cb){
			return getRootGroups(adapter,options,cb);
		}
	,	load(options,cb){
			return adapter.load(options,cb);
		}
	,	save(options,cb){
			return adapter.save(options,cb);
		}
	,	dump(options,cb){
			return adapter.dump(options,cb);
		}
	};

	function changeAdapter(newAdapter){
		adapter = newAdapter;
	}

	function run(methodName,options,cb){
		const length = arguments.length;
		if(length==0){
			throw new Error('no callback specified');
		}
		else if(length==1){//cb
			cb = methodName;
			methodName = null;
		}
		else if(length==2){//methodName,cb
			cb = options;
			options = null;
		}
		options = options ? options : {};
		const dbClass = (options.file || options.file_path || options.file_id) ? 
			'File' : 
			(options.group || options.group_id || options.group_name) ? 
				'Group' : ''
		;
		methodName = (!methodName || /root/i.test(methodName)) ? 'rootGroup' : methodName;
		const commandName = `${methodName}${dbClass}`;
		const command = methods[commandName];
		if(isUndefined(command)){
			return cb(new Error(`${dbClass}/${methodName} does no exist`));
		};
		command(options,cb);
	}
	run.adapter = changeAdapter;

	return run;

}
