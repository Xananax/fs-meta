import {F_OK,R_OK,W_OK,X_OK} from 'fs';

function createMask(arr){
	var nMask = 0, nFlag = 0, nLen = arr.length > 32 ? 32 : arr.length;
	for (nFlag; nFlag < nLen; nMask |= arr[nFlag] << nFlag++);
	return nMask;
}

export default {
	name:'mode'
,	description:''
,	valid_values:''
,	required:true
,	valid(args){
		return (
			(typeof args == 'number') ||
			(typeof args == 'string' && args.match(/[frwx]+/))
		)
	}
,	coerce(args){
		if(typeof args == 'string'){
			return createMask(args.split('').map((letter)=>{
				if(letter == 'f'){return F_OK}
				if(letter == 'r'){return R_OK}
				if(letter == 'w'){return W_OK}
				if(letter == 'x'){return X_OK}
			}))
		}
		return args;
	}
}