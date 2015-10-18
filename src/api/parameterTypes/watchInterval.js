import validate from '../validators/number';

export default {
	name:'interval'
,	description:'polling interval (not always used, depends on the operating system capabilities)'
,	valid:'milliseconds'
,	default:5007
,	validate
}