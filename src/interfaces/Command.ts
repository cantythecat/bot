import { ChatInputApplicationCommandData, CommandInteraction, PermissionResolvable, Locale } from "discord.js";
import { Client } from "../structures/Client";

interface RunOptions {
    client: Client,
    interaction: CommandInteraction
}

type RunFunction = (options: RunOptions) => any;

export type CommandType = {
    userPermissions?: PermissionResolvable[];
    locale?: Locale;
    run: RunFunction;
} & ChatInputApplicationCommandData;