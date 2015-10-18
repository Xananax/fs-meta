import commands from './commands/index';

export default function makeCommands(fs,opts){
	return commands.map(m=>m(fs,opts))
}