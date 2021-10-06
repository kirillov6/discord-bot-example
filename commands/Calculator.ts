import {
	Command,
	CommandMessage,
    Description
} from '@typeit/discord';

export abstract class Calculator {
	@Command('sum :arg1 :arg2')
	private sum(message: CommandMessage) {
        const myArg1 = message.args.arg1;
        const myArg2 = message.args.arg2;

        if ((typeof myArg1 === 'number') && (typeof myArg2 === 'number'))
            message.reply(`${myArg1} + ${myArg2} = ${myArg1 + myArg2}`);
        else
            message.reply('bad arguments');
	}

    @Command('dif :arg1 :arg2')
	private dif(message: CommandMessage) {
		const { arg1, arg2 } = message.args;

        if ((typeof arg1 === 'number') && (typeof arg2 === 'number'))
            message.reply(`${arg1} - ${arg2} = ${arg1 - arg2}`);
        else
            message.reply('bad arguments');
	}
}