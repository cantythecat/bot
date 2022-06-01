import { ApplicationCommandDataResolvable, Client as DiscordClient, ClientEvents, ClientOptions, Collection, ColorResolvable } from "discord.js";
import { Event } from "./Event";
import { CommandType } from "../interfaces/Command";
import glob from "glob";
import { promisify } from "util";
import { RegisterCommandsOptions } from "../interfaces/client";

const globPromise = promisify(glob);

class Client extends DiscordClient {
    commands: Collection<string, CommandType> = new Collection(); // Commands
    color: ColorResolvable = "#BA5583";

    public constructor(options: ClientOptions) {
        super(options);
    }

    async importFile(filePath: string) {
        return (await import(filePath))?.default;
    }

    start(token: string) {
        this.registerModules()
        this.login(token);
    }

    async registerCommands({ commands, guildId }: RegisterCommandsOptions) {
        if (guildId) {
            this.guilds.cache.get(guildId)?.commands.set(commands);
            console.log(`Registered Guild ONLY commands in guild ${guildId}`)
        } else {
            this.application.commands.set(commands);
            console.log('Registered GLOBAL commands.');
        }
    }

    async registerModules() {
        // Commands
        const slashCommands: ApplicationCommandDataResolvable[] = [];
        const commandFiles = await globPromise(`${__dirname}/../commands/*/*{.ts,.js}`);
    
        commandFiles.forEach(async (filePath) => {
            const command: CommandType = await this.importFile(filePath);
            if (!command.name) return;
    
            this.commands.set(command.name, command);
            slashCommands.push(command);
        });
    
        this.on("ready", () => {
            this.registerCommands({
                commands: slashCommands,
            });
        });
    
        // Events
        const eventFiles = await globPromise(`${__dirname}/../events/*{.ts,.js}`);
    
        eventFiles.forEach(async (filePath) => {
            const event: Event<keyof ClientEvents> = await this.importFile(filePath);
            this.on(event.event, event.run)
        });
    }
}

export { Client };