import src from '../argumentTypes/src';
import persistent from '../argumentTypes/persistent';
import interval from '../argumentTypes/watchInterval';

export default function makeWatchFile(fs,{watchListener}){
	return {
		name:'watchFile'
	,	description:'Watch for changes on filename.'
	,	consume:':'
	,	args:[
			src
		]
	,	optionalArgs:[
			persistent
		,	interval
		]
	,	run({src,persistent,interval},cb){
			fs.watchFile(src,{persistent,interval},watchListener)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}