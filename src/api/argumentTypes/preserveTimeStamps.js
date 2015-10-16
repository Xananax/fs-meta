import validate from '../validators/boolean';
import coerce from '../coerce/boolean';

export default {
	name:'clobber'
,	description:'will set last modification and access times to the ones of the original source files.'
,	valid:'boolean'
,	default:false
,	validate
,	coerce
}