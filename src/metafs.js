import filters from './filters';
import makeBox from './makeBox';
import statToObj from './statToObj';

var fs = makeBox();
var sync = makeBox(null,true);
var unpromised = makeBox(null,true,true);

fs.boxed = makeBox;
fs.syncFs = sync;
fs.filters = filters;
fs.statToObj = statToObj;

export default fs;