import toType from '../../utils/toType';

export default function valid(args){
	return (toType(args) == 'object')
}