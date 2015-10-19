import filters from './filters';
import makeBox from './makeBox';
import statToObj from './statToObj';
import api from './api'
var fs = makeBox();
var sync = makeBox(null,{sync:true});
var unpromised = makeBox(null,{unpromised:true});

fs.boxed = makeBox;
fs.sync = sync;
fs.unpromised = unpromised;
fs.filters = filters;
fs.statToObj = statToObj;
fs.makeAPI = function(path,opts){
	return api(fs,path,opts);
}
export default fs;