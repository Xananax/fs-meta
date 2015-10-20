
const validCommands = ['get','add','root','remove','edit']

export default function collections(fs){
	return {
		name:'collections'
	,	description:'manages collections of files'
		,	parameters:[
			{
				name:'command'
			,	valid:validCommands
			,	validate(arg){
					return (validCommands.indexOf(arg)>=0);
				}
			}
		]
	,	optionalParameters:[
			{
				name:'file_id'
			,	description:'a file id'
			}
		,	{
				name:'group_id'
			,	description:'a group id'
			}
		,	{
				name:'file_path'
			,	description:'a file path'
			}
		,	{
				name:'group_name'
			,	description:'a group name'
			}
		,	{
				name:'groups'
			,	description:'an array of group ids'
			}
		,	{
				name:'files'
			,	description:'an array of file ids'
			}
		]
	,	run({command,dest,clobber,preserveTimestamps,filter},cb){
			fs.copy(src,dest,{clobber,preserveTimestamps,filter})
				.then(result=>cb(null,result))
				.error(cb)
			;
		}
	}
}