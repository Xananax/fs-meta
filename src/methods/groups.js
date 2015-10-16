function groupAdd(getGroup,getFile,{id,name},{files,groups,adapter},cb){
	var group = getGroup(id,name);
	if(!group){
		return cb(new Error(`group id ${id} does not exist`))
	}
	if(groups){
		group.groups.
	}
}

function groupRemove(getGroup,getFile,{id,name},{files,groups,adapter},cb){

}

function groupGet(getGroup,getFile,{id,name},{recursion,adapter}],cb){

}

function groupsSet()

var ids = 0;

export default function createGroupSet(groups,files){

	const groupsById = {};
	const groupsByName = {};
	const filesByPath = {};
	groups.forEach(group=>{
		groupsById[group.id] = group;
		groupsById[group.name] = group;
		return group;
	});

	files.forEach(file=>{
		filesByPath[file.path] = file;
	});

	groups.forEach(group=>{
		if(group.groups){
			group.groups = group.groups.map(groupId=>groupsById[groupId]);
		}
		if(group.files){
			group.files = group.files.map(filePath=>{
				var file = filesByPath[filePath]}
				if(!files.groups){file.groups = [];}
				files.groups.push(group);
			);
		}
	});

	function getGroup(groupId,groupName){
		if(groupId){
			return groupsById[groupId];
		}
		var group = groupsByName[groupName]
		if(!group){
			group = {
				name:groupName
			,	id:ids++
			,	groups:[]
			,	files:[]
			}
			groupsByName[groupName] = group;
		}
		return group;
	}

	function getFile(filePath){
		return filesByPath[file];
	}

}