import { ChatInputApplicationCommandData, CommandInteraction, PermissionResolvable, Locale, GuildMember } from "discord.js";
import { Client } from "../structures/Client";

export interface ExtendedInteraction extends CommandInteraction {
    member: GuildMember;
}

interface RunOptions {
    client: Client,
    interaction: ExtendedInteraction;
}

type RunFunction = (options: RunOptions) => any;

export type CommandType = {
    userPermissions?: PermissionResolvable[];
    locale?: Locale;
    run: RunFunction;
} & ChatInputApplicationCommandData;