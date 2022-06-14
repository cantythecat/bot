import { Client } from "./structures/Client";
import { token } from "./config.json";
import { connectDatabase } from "./db/mongoose";

const client: Client = new Client({ intents: ["Guilds", "GuildBans", "GuildMembers", "GuildWebhooks", "GuildEmojisAndStickers",] }); // Creates a new Client

const connect = async () => {
    await connectDatabase() // Connects to Mongo Database.
}

connect();
client.start(token); // Starts the Discord Bot
export { client }; // Exports Client