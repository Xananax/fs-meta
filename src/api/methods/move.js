import src from '../argumentTypes/src';
import dest from '../argumentTypes/dest';
import clobber from '../argumentTypes/clobber';
import limit from '../argumentTypes/concurrentMovesLimit';

export default function makeMove(fs){
	return {
		name:'move'
	,	description:'Moves a file or directory, even across devices.'
	,	consume:':'
	,	args:[
			src
		,	dest
		]
	,	optionalArgs:[
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