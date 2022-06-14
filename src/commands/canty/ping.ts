import { Message, EmbedBuilder } from "discord.js";
import { Command } from "../../structures/Command";

export default new Command({
    name: "ping",
    description: "🐱 ⋆ Canty ︙ Replies with pong!",
    category: "canty",
    run: async ({ client, interaction }) => {
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;
    
        interaction.editReply(`\\🐱 Miando...`).then(async (pingMessage: Message) => {
          const ping: number =
            pingMessage.createdTimestamp - interaction.createdTimestamp;
    
          let pingEmbed: any = new EmbedBuilder()
            .setAuthor({ name: `🐱 Meow!` })
            .setDescription(
              `🧶 | **Tempo de Ignorância:** \`${ping}ms\` \n\\⚡| **Latência do API:** \`${[
                Math.round(client.ws.ping),
              ]}ms\` \n \n\\🛏️ **Uptime:** ${hours} horas, ${minutes} minutos e ${seconds} segundos.`
            )
            .setColor(client.color)
            .setThumbnail("https://media.giphy.com/media/fvA1ieS8rEV8Y/giphy.gif");
          pingMessage.edit({ embeds: [pingEmbed] });
        });
    }
})