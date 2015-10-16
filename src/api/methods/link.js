import src from '../argumentTypes/src';
import dest from '../argumentTypes/dest';

export default function makeLink(fs){
	return {
		name:'link'
	,	description:'creates a new link (also known as a hard link) to an existing file.'
	,	consume:':'
	,	args:[
			src
		,	dest
		]
	,	run({src,dest},cb){
			fs.link(src,dest)
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}