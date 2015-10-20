import src from '../parameterTypes/src';
import lstat from '../parameterTypes/lstat';
import followSymLinks from '../parameterTypes/followSymLinks';

export default function makeGetMeta(fs,{filters}){
	return {
		name:'getMeta'
	,	description:'Returns extended stat about the file'
		,	parameters:[
			src
		]
	,	optionalParameters:[
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