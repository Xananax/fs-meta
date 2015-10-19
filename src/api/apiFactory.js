import apido from 'apido';
import commandsFactory from './commandsFactory';
import Promise from 'bluebird'

export default Promise.promisify(function makeAPI(fs,options,cb){
	
	if(typeof options == 'function'){
		cb = options;
		options = null;
	}

	const commands = commandsFactory(fs,options);

	apido({
		name:'fs'
	,	description:'file system manager'
	,	commands
	})
	.then(api=>{
		cb(null,api);
	})
	.error(cb)
})