const numbers = /\d+/;

export default function validNumber(args){
	return (
		(typeof args == 'number') ||
		(typeof args == 'string' && args.match(numbers))
	)
}