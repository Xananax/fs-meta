import src from '../parameterTypes/src';
import dest from '../parameterTypes/dest';
import clobber from '../parameterTypes/clobber';
import limit from '../parameterTypes/concurrentMovesLimit';

export default function makeMove(fs){
	return {
		name:'move'
	,	description:'Moves a file or directory, even across devices.'
	,	consume:':'
	,	parameters:[
			src
		,	dest
		]
	,	optionalParameters:[
			clobber
		,	limit
		]
	,	run({src,dest,clobber,limit},cb){
			fs.move(src,dest,{clobber,limit})
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}