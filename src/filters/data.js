import ini from 'ini';
import YAML from 'js-yaml';
import xml2js from 'xml2js';

const formats = /ini|yaml|xml|json/i

function readJson(contents,obj,cb){
	try{
		obj.data = JSON.parse(contents);
		return cb(null,obj);
	}catch(err){
		return cb(err);
	}
}

function readXML(contents,obj,cb){
	xml2js.parseString(contents,function(err,data){
		if(err){return cb(err);}
		obj.data = data;
		return cb(null,obj)
	});
}

function readYAML(contents,obj,cb){
	try{
		obj.data = YAML.safeLoad(
			contents
		,	{filename:obj.path,schema:YAML.DEFAULT_FULL_SCHEMA}
		);
		return cb(null,obj);
	}
	catch(err){
		return cb(err);
	}
}

function readINI(contents,obj,cb){
	try{
		obj.data = ini.parse(contents);
		return cb(null,obj);
	}
	catch(err){
		return cb(err);
	}
}

function parseData(contents,obj,cb){
	let ext = obj.extension;
	switch(ext){
		case 'json':
			return readJson(contents,obj,cb);break;
		case 'xml':
			return readXML(contents,obj,cb);break;
		case 'yaml':
		case 'yml':
			return readYAML(contents,obj,cb);break;
		case 'ini':
			return readINI(contents,obj,cb);break;
		default: break;
	}
	return cb(null,obj);
}

export default function dataFilter(obj,options,cb,fs){
	if(!formats.test(obj.extension)){return cb(null,obj);}
	if(!obj.contents){
		fs.readFile(obj.path,{encoding:'utf8'},function(err,contents){
			if(err){return cb(err);}
			return parseData(contents,obj,cb);
		});
		return;
	}
	parseData(obj.contents,obj,cb);
}