import src from '../parameterTypes/src';
import persistent from '../parameterTypes/persistent';
import recursive from '../parameterTypes/recursive';

export default function makeWatch(fs,{watchListener}){
	return {
		name:'watch'
	,	description:'Watches a file or directory.'
	,	consume:':'
	,	parameters:[
			src
		]
	,	optionalParameters:[
			persistent
		,	recursive
		]
	,	run({src,persistent,recursive},cb){
			fs.watch(src,{persistent,recursive},listener)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}