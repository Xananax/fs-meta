export default function validPath(args){
	return ((typeof args == 'string') || Array.isArray(args));
}