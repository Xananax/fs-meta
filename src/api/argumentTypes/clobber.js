import validate from '../validators/boolean';
import coerce from '../coerce/boolean';

export default {
	name:'clobber'
,	description:'overwrite existing file or directory'
,	valid:'boolean'
,	default:false
,	validate
,	coerce
}