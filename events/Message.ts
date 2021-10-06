import {
	Client,
	On,
	ArgsOf
} from '@typeit/discord';

export abstract class Message {
	@On('message')
	private onMessage(
		[message]: ArgsOf<'message'>,
		client: Client
	) {
		console.log(`${message.author.tag}: ${message.content}`);

		if (message.author.id != client.user.id)
			message.delete({timeout: 5000});
	}
}