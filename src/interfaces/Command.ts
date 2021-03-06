import { ChatInputApplicationCommandData, CommandInteraction, PermissionResolvable, Locale, GuildMember, Options, CommandInteractionOptionResolver } from "discord.js";
import { Client } from "../structures/Client";

export interface ExtendedInteraction extends CommandInteraction {
    member: GuildMember;
    options: CommandInteractionOptionResolver
}

interface RunOptions {
    client: Client,
    interaction: ExtendedInteraction;
}

type RunFunction = (options: RunOptions) => any;

export type CommandType = {
    userPermissions?: PermissionResolvable[];
    locale?: Locale;
    category: string;
    run: RunFunction;
} & ChatInputApplicationCommandData;