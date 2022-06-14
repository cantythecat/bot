import { ApplicationCommandDataResolvable, Client as DiscordClient, ClientEvents, ClientOptions, Collection, ColorResolvable } from "discord.js";
import { Event } from "./Event";
import { CommandType } from "../interfaces/Command";
import glob from "glob";
import { promisify } from "util";
import { importFile } from "../api/importFiles";

interface RegisterCommandsOptions {
    guildId?: string;
    commands: ApplicationCommandDataResolvable[];
}

const globPromise = promisify(glob);

class Client extends DiscordClient {
    commands: Collection<string, CommandType> = new Collection(); // Commands
    color: ColorResolvable = "#BA5583";

    public constructor(options: ClientOptions) {
        super(options);
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
            const command: CommandType = await importFile(filePath);
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
            const event: Event<keyof ClientEvents> = await importFile(filePath);
            this.on(event.event, event.run)
        });
    }
}

export { Client };