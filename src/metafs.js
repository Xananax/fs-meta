import filters from './filters';
import makeBox from './makeBox';
import statToObj from './statToObj';
import api from './api'
var fs = makeBox();
var sync = makeBox(null,true);
var unpromised = makeBox(null,true,true);

fs.boxed = makeBox;
fs.syncFs = sync;
fs.filters = filters;
fs.statToObj = statToObj;
fs.makeAPI = function(path,opts){
	return api(fs,path,opts);
}
export default fs;