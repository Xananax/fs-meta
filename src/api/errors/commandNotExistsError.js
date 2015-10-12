export default function(commandName){
	return{	
		response:'error'
	,	status:500
	,	commandName
	,	message:`${commandName} is not a recognized command`
	}
}