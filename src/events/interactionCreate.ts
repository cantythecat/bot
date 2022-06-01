import { client } from "../canty";
import { ExtendedInteraction } from "../interfaces/Command";
import { Event } from "../structures/Event";

export default new Event('interactionCreate', async (interaction) => {
    // Chat Input Commands
    if (interaction.isChatInputCommand()) {
        await interaction.deferReply();
        const command = client.commands.get(interaction.commandName)

        if (!command) return interaction.followUp({ content: "MEOW! Este comando não foi encontrado! :(" });

        command.run({
            client,
            interaction: interaction as ExtendedInteraction
        })
    }
});