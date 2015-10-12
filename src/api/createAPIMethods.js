import {methodsData} from './methods';
import createMethodDescriptor from './createAPIMethodDescriptor'
import {createJsonAnswer,createJsonError,errorToJson} from './responses';

export default function createMethods(fsm){
	const methods = {};
	for(let methodName in methodsData){
		let {args,name,description} = methodsData[methodName];
		let argLength = args.length;
		let commandDetails = createMethodDescriptor(name,description,args);
		methods[methodName] = function method(givenArgs,cb){
			var i = 0;
			var finalArgs = [];
			if(!cb || !(typeof cb == 'function')){throw new Error('no callback provided');}
			if(givenArgs[0]=='help'){
				return cb(null,createJsonAnswer(commandDetails))
			}
			while(i<argLength){
				let arg = givenArgs[i];
				let argProps = args[i];
				if(typeof arg== 'undefined' && argProps.required){
					return cb(createJsonError(`'${argProps.name}' is required`,commandDetails))
				}
				if(argProps.valid){
					if(!argProps.valid(arg)){
						return cb(createJsonError(`the value provided to '${argProps.name}' is invalid`,commandDetails))
					}
				}
				finalArgs.push(argProps.coerce? argProps.coerce(arg) : arg);
				i++;
			}
			fsm[name](...finalArgs)
				.then(result=>cb(null,createJsonAnswer(result)))
				.error(err=>cb(errorToJson(err)))
			;
		}
	}
	return methods;
}