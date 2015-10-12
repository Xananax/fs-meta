import createAPIMethods from './createAPIMethods';
import {createJsonError} from './responses';

var reg = /\/(.+)/;

export default function createAPI(fs,path,options){

	const methods = createAPIMethods(fs.boxed(path));

	function processCommand(methodName,args,cb){
		if(!(methodName in methods)){return cb(createJsonError(`${methodName} is not a recognized command`))}
		const fn = methods[methodName];
		fn(args,cb);
	}

	function middleWare(req,res){
		var path = req.path.replace(/^\/|\/$/,'');
		var options = req.query;
		var args = path.split(':');
		var firstArg = args[0].split(reg);
		var command = firstArg[0];
		if(firstArg[1]){
			args[0] = firstArg[1];
		}else{
			args.shift();
		}
		args.push(options);
		return processCommand(command,args,(err,result)=>{
			if(err){return res.json(err);}
			res.json(result);
		});
	}

	processCommand.middleWare = middleWare;

	return processCommand;
}