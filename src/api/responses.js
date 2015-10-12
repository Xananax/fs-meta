import fileNotFoundError from './errors/fileNotFoundError';

export function createJsonError(message,commandDetails){
	return {
		response:'error'
	,	message
	,	commandDetails
	}
}

export function createJsonAnswer(query,result){
	return {
		response:'success'
	,	status:200
	,	result
	,	query
	}
}

export function errorToJson(commandName,err){
	if(err.code == 'ENOENT'){
		return fileNotFoundError(
				commandName
			,	(err.message.match(/'(.*?)'$/)||['',''])[1]
		)
	}
	return {
		response:'error'
	,	commandName
	,	name:err.name
	,	status:err.status || 500
	,	code:err.code || 0
	,	message:err.message
	,	stack:err.stack.split(/\n/)
	}
}