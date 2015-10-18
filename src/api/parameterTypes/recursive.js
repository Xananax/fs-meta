import validate from '../validators/boolean';
import coerce from '../coerce/boolean';

export default {
	name:'recursive'
,	description:'If true, watches a directory recursively'
,	valid:'boolean'
,	default:false
,	validate
,	coerce
}