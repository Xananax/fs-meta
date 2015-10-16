import validate from '../validators/boolean';
import coerce from '../coerce/boolean';

export default {
	name:'lstat'
,	description:'If true, will use lstat instead of stat.'
,	valid:'boolean'
,	default:false
,	validate
,	coerce
}