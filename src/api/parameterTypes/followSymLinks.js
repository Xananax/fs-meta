import validate from '../validators/boolean';
import coerce from '../coerce/boolean';

export default {
	name:'followSymLinks'
,	description:'if true, will follow symlinks'
,	valid:'boolean'
,	default:false
,	validate
,	coerce
}