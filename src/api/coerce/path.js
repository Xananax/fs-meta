export default function coerceToPath(arg){
	if(Array.isArray(arg)){return '/'+arg.join('/');}
	return arg;
}