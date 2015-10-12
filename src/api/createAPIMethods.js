import {methodsData} from './methods';
import createMethodDescriptor from './createAPIMethodDescriptor'
import {createJsonAnswer,createJsonError,errorToJson} from './responses';
import argumentRequiredError from './errors/argumentRequiredError';
import argumentValueInvalidError from './errors/argumentValueInvalidError';

export default function createMethods(fsm){
	const methods = {};
	let generalDescriptor = {}
	for(let methodName in methodsData){
		let {args,name,description} = methodsData[methodName];
		let argLength = args.length;
		let commandDetails = createMethodDescriptor(name,description,args);
		generalDescriptor[methodName] = commandDetails;
		methods[methodName] = function method(givenArgs,cb){
			var i = 0;
			var finalArgs = [];
			var query = {methodName,args:givenArgs}
			if(!cb || !(typeof cb == 'function')){throw new Error('no callback provided');}
			if(givenArgs[0]=='/--help'){
				return cb(null,createJsonAnswer(commandDetails))
			}
			while(i<argLength){
				let arg = givenArgs[i];
				let argProps = args[i];
				if((typeof arg=='undefined') && argProps.required){
					return cb(argumentRequiredError(methodName,argProps.name,commandDetails))
				}
				if(argProps.valid){
					if(!argProps.valid(arg)){
						return cb(argumentValueInvalidError(methodName,argProps.name,arg,commandDetails))
					}
				}
				finalArgs.push(argProps.coerce? argProps.coerce(arg) : arg);
				i++;
			}
			fsm[name](...finalArgs)
				.then(result=>cb(null,createJsonAnswer(query,result)))
				.error(err=>cb(errorToJson(methodName,err)))
			;
		}
	}
	methods['--help'] = function method(givenArgs,cb){
		return cb(null,createJsonAnswer('help',generalDescriptor))
	}
	return methods;
}