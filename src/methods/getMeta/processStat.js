import applyFilters from './applyFilters';
import symbolicLinkStat from './symbolicLinkStat';
import statToObj from '../../statToObj';

export default function processStat(fs,src,options,cb){
	const rootDir = options && options.root || '';
	return function statCB(err,stat){
		if(err){return cb(err);}
		const obj = statToObj(src,stat,rootDir);
		if(options && obj.isSymbolicLink && options.followSymLinks){
			return symbolicLinkStat(fs,obj,src,options,cb);
		}
		return applyFilters(fs,obj,options,cb);
	}
}