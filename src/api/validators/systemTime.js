const numbers = /\d+/;
export default function valid(args){
	return (
		(typeof args == 'string' && args.match(numbers)) ||
		(typeof args == 'number') ||
		(args instanceof Date)
	)
}