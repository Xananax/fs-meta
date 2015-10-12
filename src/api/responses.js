export function createJsonError(message,commandDetails){
	return {
		response:'error'
	,	message
	,	commandDetails
	}
}

export function createJsonAnswer(result){
	return {
		response:'success'
	,	result
	}
}

export function errorToJson(err){
	return {
		name:err.name
	,	message:err.message
	,	stack:err.stack.split(/\n/)
	}
}