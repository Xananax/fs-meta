import src from '../parameterTypes/src';
import dest from '../parameterTypes/dest';

export default function makeLink(fs){
	return {
		name:'link'
	,	description:'creates a new link (also known as a hard link) to an existing file.'
	,	consume:':'
	,	parameters:[
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