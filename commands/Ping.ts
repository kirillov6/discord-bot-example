import {
	Command,
	CommandMessage,
	Description
} from '@typeit/discord';

export abstract class Ping {
	@Command('ping')
	@Description('отвечает "pong"')
	private ping(message: CommandMessage) {
		message.reply('pong');
	}
}