import { Command } from '../../structures/Command';
import { ActionRowBuilder, ButtonStyle, EmbedBuilder } from "discord.js";
import { ButtonBuilder } from '@discordjs/builders';

export default new Command({
    name: "support",
    description: "🐱 ⋆ Canty ︙ Support server for help",
    category: "canty",
    run: async ({ client, interaction }) => {
        if (interaction.guild.id === "954748555002798171") return interaction.followUp({ content: `${interaction.member}, MEOW! <:CantyBravo1:966075647359352872> Este já é o servidor de suporte!  :3` })

        let embed = new EmbedBuilder()
        .setAuthor({ name: "Suporte ao Bot", iconURL: client.user.displayAvatarURL() })
        .setDescription(`Precisando de Suporte? Entre no Servidor\ndo Canty para obter suporte completo sobre o bot\nE tenha todas as suas dúvidas respondidas.`)
        .setFooter({ text: `${interaction.member.user.tag}`, iconURL: interaction.member.avatarURL() })
        .setColor(client.color);

        let button = new ButtonBuilder()
        .setLabel('Clique aqui para suporte')
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.gg/xanDKfGUvW")

        let supportRow: any = new ActionRowBuilder().addComponents([button])

        await interaction.followUp({
            content: `${interaction.member}`,
            components: [supportRow],
            embeds: [embed],
        })
    }
});