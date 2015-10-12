export default function(commandName,arg,value,details){
	return{	
		response:'error'
	,	status:500
	,	commandName
	,	message:`the value ${value} provided to '${arg}' is invalid`
	,	details
	}
}