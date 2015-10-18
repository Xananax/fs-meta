import validate from '../validators/boolean';
import coerce from '../coerce/boolean';

export default {
	name:'persistent'
,	description:'if true, the file watch will be persistent'
,	valid:'boolean'
,	default:true
,	validate
,	coerce
}