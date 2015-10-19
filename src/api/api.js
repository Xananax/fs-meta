import apido from 'apido';
import commandsMaker from './commands';
import Promise from 'bluebird'

export default Promise.promisify(function makeAPI(fs,path,options,cb){
	
	if(typeof options == 'function'){
		cb = options;
		options = null;
	}

	const boxed = fs.boxed(path,options);
	const commands = commandsMaker(boxed,options);

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