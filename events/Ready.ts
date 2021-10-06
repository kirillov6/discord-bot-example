import {
	Client,
	On,
	ArgsOf
} from '@typeit/discord';

export abstract class Ready {
	@On('ready')
	private onReady(
		[]: ArgsOf<'ready'>,
		client: Client
	) {
		client.user.setActivity('Create tutorial bot', { type: 'STREAMING'});
	}
}