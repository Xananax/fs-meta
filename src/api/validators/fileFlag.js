var reg = /r|w|a|x/i;

export default function validFileMode(args){
	return (typeof args === 'string' && args.match(reg))
}