import apido from 'apido';
import methodsMaker from './methods';
import fs from '../'
import Promise from 'bluebird'

export default Promise.promisify(function makeAPI(fs,path,options,cb){
	if(typeof options == 'function'){
		cb = options;
		options = null;
	}

	const boxed = fs.boxed(path,options);
	const methods = methodsMaker(boxed,options);

	apido({
		name:'fs'
	,	description:'file system manager'
	,	methods
	})
	.then(api=>{
		cb(null,api);
	})
	.error(cb)
})