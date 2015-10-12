export default function(commandName,givenType,neededType){
	return{	
		response:'error'
	,	status:500
	,	commandName
	,	message:`Wrong argument type. '${givenType}' was given, when ${neededType} was needed`
	}
}