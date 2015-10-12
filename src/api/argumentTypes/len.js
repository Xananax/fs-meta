import valid from '../validators/number'
export default {
	name:'len'
,	description:''
,	valid_values:''
,	required:true
,	valid
,	coerce(args){
		return parseInt(args)
	}
}