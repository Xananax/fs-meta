import validate from '../validators/fileMode';

export default {
	name:'mode'
,	description:'permissons'
,	valid:'octal'
,	default:0o666
,	validate
}