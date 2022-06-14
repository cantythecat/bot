import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";
import { Command } from "../../structures/Command";

export default new Command({
  name: "vote",
  description: "🐱 ⋆ Canty ︙ Vote for Canty!",
  category: "info",
  run: async ({ client, interaction }) => {
    let voteEmbed = new EmbedBuilder()
      .setAuthor({ name: "⭐ Vote no Canty!", iconURL: client.user.avatarURL() })
      .setDescription(
        "O Canty está agora no Top.gg! \nE você agora pode votar em mim! \n \nVote em mim para me ajudar a crescer! \nE mais pessoas me conhecerem!"
      )
      .setThumbnail(client.user.displayAvatarURL({ extension: "png" }))
      .setFooter({
        text: `${interaction.user.tag}`,
        iconURL: interaction.user.displayAvatarURL({ forceStatic: false }),
      })
      .setColor(client.color);

    let button = new ButtonBuilder()
    .setLabel('🐱 Clique aqui para votar!')
    .setStyle(ButtonStyle.Link)
    .setURL("https://top.gg/bot/833829718015869008")

    let voteRow: any = new ActionRowBuilder().addComponents([button])

    interaction.followUp({
      content: `${interaction.user}`,
      embeds: [voteEmbed],
      components: [voteRow]
    });
  },
});