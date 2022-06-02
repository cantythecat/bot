import { EmbedBuilder } from "discord.js";
import config from "../config.json";
import { client } from "../canty";
import { Event } from "../structures/Event";

export default new Event('guildDelete', async(guild) => {
    const guildSize: number = client.guilds.cache.size;

    const lostGuildEmbed = new EmbedBuilder()
    .setAuthor({ name: guild.name })
    .setTitle('-1 Servidor')
    .setThumbnail(guild.iconURL())
    .addFields([
        { name: '💳 ID do Servidor', value: `${guild.id}`, inline: true },
    ])
    .setTimestamp()
    .setFooter({ text: `${guildSize} servidores! :(`, iconURL: client.user.avatarURL() })
    .setColor("#d45355");

    const logChannel: any = await client.channels.cache.get(config.guild.serverLogChannel);
    logChannel.send({ embeds: [lostGuildEmbed] });
});