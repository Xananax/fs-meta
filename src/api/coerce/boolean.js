var trueVals = /true|1/i;

export default function coerce(arg){
	if(typeof arg == 'boolean'){return arg;}
	if(typeof arg == 'string'){
		return trueVals.test(arg) ? true : false;
	}
	if(typeof arg == 'number'){
		return (arg > 0)
	}
	return !!arg;
}