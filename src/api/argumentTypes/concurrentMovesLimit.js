import validate from '../validators/number';

export default {
	name:'limit'
,	description:'number of concurrent moves'
,	valid:'number'
,	default:16
,	validate
}