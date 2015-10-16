const reg = /true|false|0|1/i;

export default function validEncoding(args){
	return (
		(typeof args === 'boolean') ||
		(typeof args === 'number' && (args===1 || args===0)) ||
		(typeof args === 'string' && args.match(reg))
	)
}