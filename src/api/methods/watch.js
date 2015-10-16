import src from '../argumentTypes/src';
import persistent from '../argumentTypes/persistent';
import recursive from '../argumentTypes/recursive';

export default function makeWatch(fs,{watchListener}){
	return {
		name:'watch'
	,	description:'Watches a file or directory.'
	,	consume:':'
	,	args:[
			src
		]
	,	optionalArgs:[
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