var numbers = /\d+/;

export default function valid(args){
	return (
		(typeof args == 'number') ||
		(typeof args == 'string' && args.match(numbers))
	)
}