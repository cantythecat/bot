import { validCommand } from "../api/validCommand";
import { client } from "../canty";
import { ExtendedInteraction } from "../interfaces/Command";
import { Event } from "../structures/Event";

export default new Event('interactionCreate', async (interaction) => {
    // Chat Input Commands
    if (interaction.isChatInputCommand()) {
        await interaction.deferReply();
        const command = client.commands.get(interaction.commandName);

        if (!command) return interaction.followUp({ content: "MEOW! Este comando não foi encontrado! :(" });
        if (validCommand(interaction, command) === false) return; // Checks if the command isn't valid.

        try {
            command.run({
                client,
                interaction: interaction as ExtendedInteraction
            });
        } catch (error) {
            return interaction.followUp({ content: `MEOW! Algo deu errado ao executar este comando! Erro: \`${error}\`` });
        }
    }
});