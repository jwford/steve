/* Rembemer to rename this file to config.ts! */
import { KlasaClientOptions } from 'klasa';

export const TOKENS = {
	BOT_TOKEN: '', // put your bot's token here
	GENIUS: '' // get a genius api key and put it here (https://docs.genius.com/)
};

export const CLIENT_ID = ''; // put your bot's client id here

export const DB_CONNECTION_STRING = ''; // mongodb connection string goes here

export const LAVALINK_ENABLE = true;
export const LAVALINK_PORT = 8080;
export const LAVALINK_HOST = '';
export const LAVALINK_PASSWORD = '';

export const NAME = 'Steve';

export const TUATARIA = true;

export const CLIENT_OPTIONS: KlasaClientOptions = {
	commandEditing: true,
	createPiecesFolders: false,
	disableMentions: 'everyone',
	noPrefixDM: true,
	prefix: 's;',
	regexPrefix: /Steve, /i,
	prefixCaseInsensitive: true,
	presence: {
		activity: {
			name: '',
			type: ''
		}
	},
	providers: {
		default: 'mongodb'
	},
	lavalink: {
		host: `${LAVALINK_HOST}:${LAVALINK_PORT}`,
		password: LAVALINK_PASSWORD,
		userID: CLIENT_ID,
		shardCount: 0
	},
	readyMessage: client => `Logged in and ready to serve ${client.guilds.cache.size} guilds as ${client.user.tag}.`
};

export const MAGIC8BALL_RESPONSES = [

];

export const DOCS = {

};
