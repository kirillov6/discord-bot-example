import './AppDiscord';
import { Client } from '@typeit/discord';

require('dotenv').config();

async function run() {
	const client = new Client({
		classes: [
			`${__dirname}/*Discord.[jt]s`
		],
		variablesChar: ':'
	});

  await client.login(process.env.DISCORD_TOKEN);
}

run();