import validate from '../validators/path';
import coerce from '../coerce/path';

export default {
	name:'src'
,	description:'the source path of the operation'
,	valid:'path'
,	validate
,	coerce
}