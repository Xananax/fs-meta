import filters from './filters';
import makeBox from './makeBox';
import statToObj from './statToObj';

var fs = makeBox();
var sync = makeBox(null,{sync:true});
var unpromised = makeBox(null,{unpromised:true});

fs.boxed = makeBox;
fs.sync = sync;
fs.unpromised = unpromised;
fs.filters = filters;
fs.statToObj = statToObj;

export default fs;