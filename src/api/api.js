import createAPIMethods from './createAPIMethods';
import {createJsonError} from './responses';
import commandNotExistsError from './errors/commandNotExistsError'
import argumentWrongTypeError from './errors/argumentWrongTypeError'
import toType from '../utils/toType'
import regExpEscape from '../utils/regExpEscape';

export default function createAPI(fs,path,options){

	const methods = createAPIMethods(fs.boxed(path));
	const separator = (options && options.separator) || ':';
	const commandSeparator = (options && options.commandSeparator) || '/';
	const commandRegExp = new RegExp(regExpEscape(commandSeparator)+'(.+)');
	
	function processCommand(methodName,args,cb){
		if(!(methodName in methods)){return cb(commandNotExistsError(methodName))}
		if(!Array.isArray(args)){return cb(argumentWrongTypeError(methodName,toType(args),'array'))}
		const fn = methods[methodName];
		fn(args,cb);
	}

	function run(path,options,cb){
		if(typeof options == 'function'){
			cb = options;
			options = null;
		}
		path = path.replace(/^\/|\/$/,'');
		var args = path.split(separator);
		var firstArg = args[0].split(commandRegExp);
		var command = firstArg[0];
		if(firstArg[1]){
			args[0] = '/'+firstArg[1];
		}else{
			args.shift();
		}
		args.push(options);
		return processCommand(command,args,cb);
	}

	function middleware(req,res){
		return run(req.path,req.query,(err,result)=>{
			if(err){return res.json(err);}
			res.json(result);
		});
	}

	processCommand.middleware = middleware;
	processCommand.run = run;
	return processCommand;
}