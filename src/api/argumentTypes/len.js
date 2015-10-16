import validate from '../validators/number'
export default {
	name:'len'
,	description:'length to cut off at'
,	valid:'number'
,	validate
,	coerce(args){
		return parseInt(args)
	}
}