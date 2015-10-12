export default function createMethodDescriptor(name,description,args){
	const argsOrder = [];
	const argsDetails = {}
	args.forEach(({name,description,valid_values,required})=>{
		argsDetails[name] = {description,valid_values,required}
		argsOrder.push(required ? name : `[${name}]`)
	});
	const summary = `${name}(${argsOrder.join(',')})`
	return {
		name
	,	summary
	,	description
	,	argsDetails
	}
}