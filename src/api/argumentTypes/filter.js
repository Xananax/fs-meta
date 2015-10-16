import regExpEscape from '../../utils/regExpEscape';

export default {
	name:'filter'
,	description:'Function or RegExp to filter copied files. If function, return true to include, false to exclude. If RegExp, same as function, where filter is filter.test.'
,	valid:['RegExp','Function','String']
,	validate(arg){
		return (typeof arg == 'string' || arg instanceof RegExp || typeof arg == 'function');
	}
,	coerce(arg){
		if(typeof arg == 'string'){
			return regExpEscape(arg);
		}
		return arg;
	}
}