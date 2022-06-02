import { Event } from "../structures/Event";
import config from "../config.json";
import { EmbedBuilder } from "discord.js";
import { client } from "../canty";

export default new Event('guildCreate', async (guild) => {
    let owner = await guild.fetchOwner()
    const guildSize: number = client.guilds.cache.size;

    const newGuildEmbed = new EmbedBuilder()
    .setTitle('Novo servidor!')
    .setAuthor({ name: guild.name, iconURL: (await owner).displayAvatarURL() })
    .setThumbnail(guild.iconURL())
    .addFields([
        { name: '💳 ID do Servidor', value: `${guild.id}`, inline: true },
        { name: '👤 Quantidade de Membros', value: `${guild.memberCount}`, inline: true },
        { name: '👑 Dono do Servidor', value: `${owner.user.tag}`, inline: true }
    ])
    .setTimestamp()
    .setFooter({ text: `${guildSize} servidores! >:3`, iconURL: client.user.avatarURL() })
    .setColor(client.color);

    const logChannel: any = await client.channels.cache.get(config.guild.serverLogChannel);
    logChannel.send({ embeds: [newGuildEmbed] });
});