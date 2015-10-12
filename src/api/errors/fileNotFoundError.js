export default function(commandName,path){
	return{
		response:'error'	
	,	status:404
	,	commandName
	,	message:`${path} was not found`
	}
}