import {
    Client,
	Command,
	CommandMessage,
	Description
} from '@typeit/discord';

export abstract class Help {
	@Command('help')
	@Description('выводит список доступных команд')
	private help(message: CommandMessage) {
        var commands = Client.getCommands();
        var cmdMap = new Map<string, string>();
        for (let i = 0; i < commands.length; ++i) {
            let cmd = commands[i];

            let cmdSignature = cmd.commandName.toString().split(' ');
            let cmdName = cmdSignature.shift();
            
            if (cmdName === 'help')
                continue;

            let cmdSignatureLen = cmdSignature.length;
            if (cmdSignatureLen > 0) {
                cmdName += ' [';
                for (let j = 0; j < cmdSignatureLen; ++j) {
                    cmdName += `${cmdSignature[j].replace(Client.variablesChar, '')}`;
                    if (j < cmdSignatureLen - 1)
                        cmdName += ', ';

                }
                cmdName += ']';
            }

            cmdMap.set(cmdName, cmd.description ?? ':thinking:');
        }

        cmdMap = new Map([...cmdMap.entries()].sort());

        var helpList = 'Список доступных команд:\n';
        for (let cmd of cmdMap.entries())
            helpList += `**${cmd[0]}** - ${cmd[1]}\n`;

        message.channel.send(helpList);
	}
}