export default function(commandName,arg,details){
	return{	
		response:'error'
	,	status:500
	,	commandName
	,	message:`'${arg}' is required`
	,	details
	}
}