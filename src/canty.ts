import { Client } from "./structures/Client";
import { token } from "./config.json";

const client: Client = new Client({ intents: ["Guilds", "GuildBans", "GuildMembers", "GuildWebhooks", "GuildEmojisAndStickers",] }); // Creates a new Client

client.start(token); // Starts the Discord Bot
export { client }; // Exports Client