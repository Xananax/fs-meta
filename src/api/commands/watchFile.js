import src from '../parameterTypes/src';
import persistent from '../parameterTypes/persistent';
import interval from '../parameterTypes/watchInterval';

export default function makeWatchFile(fs,{watchListener}){
	return {
		name:'watchFile'
	,	description:'Watch for changes on filename.'
		,	parameters:[
			src
		]
	,	optionalParameters:[
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