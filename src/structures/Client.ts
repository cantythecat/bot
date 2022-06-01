import { Client as DiscordClient, ClientOptions, Collection } from "discord.js";
import { CommandType } from "../interfaces/Command";

class Client extends DiscordClient {
    commands: Collection<string, CommandType> = new Collection(); // Commands

    public constructor(options: ClientOptions) {
        super(options);
    }

    start(token: string) {
        this.login(token);
    }
}

export { Client };