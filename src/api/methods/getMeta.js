import src from '../argumentTypes/src';
import lstat from '../argumentTypes/lstat';
import followSymLinks from '../argumentTypes/followSymLinks';

export default function makeGetMeta(fs,{filters}){
	return {
		name:'getMeta'
	,	description:'Returns extended stat about the file'
	,	consume:':'
	,	args:[
			src
		]
	,	optionalArgs:[
			lstat
		,	followSymLinks
		]
	,	run({src,lstat,followSymLinks},cb){
			fs.getMeta(src,{lstat,followSymLinks,filters})
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}