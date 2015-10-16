import validate from '../validators/path';
import coerce from '../coerce/path';

export default {
	name:'dest'
,	description:'the destination path of the operation'
,	valid:'path'
,	validate
,	coerce
}