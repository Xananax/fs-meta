import commands from './commands';

export default function makeCommands(fs,opts){
	return commands.map(m=>m(fs,opts))
}