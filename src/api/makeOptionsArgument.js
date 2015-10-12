import toType from '../utils/toType';

export default function options(description,def){
	if(typeof description !== 'string'){
		var descriptionStr = '';
		for(var n in description){
			descriptionStr+=`${n}: (${toType(def[n])}) ${description[n]} Defaults to '${def[n]}'\n`;
		}
		description = descriptionStr;
	}
	return {
		name:'options'
	,	description
	,	defaults:def
	,	required:false
	,	coerce(args){
			return Object.assign({},def,args);
		}
	}
}