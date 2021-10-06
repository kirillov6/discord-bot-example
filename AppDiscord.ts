import {
	Discord,
	CommandMessage,
	CommandNotFound
} from '@typeit/discord';

import * as path from 'path';

const { prefix } = require(`./config.json`);

@Discord(prefix, {
	import: [
		path.join(__dirname, 'commands', '*.[jt]s'),
		path.join(__dirname, 'events', '*.[jt]s')
	]
}) 
export abstract class AppDiscord {
	@CommandNotFound()
	private notFound(message: CommandMessage) {
		message.reply('command not found')
		.then(msg => {
			msg.delete({timeout: 5000});
		});
	}
}