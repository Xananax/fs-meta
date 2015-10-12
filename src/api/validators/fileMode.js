var reg = /([rwx\-]|[0-7])+/;

export default function validFileMode(args){
	return (
		(typeof args == 'number') ||
		(typeof args === 'string' && args.match(reg))
	)
}