import { Command } from "../../structures/Command";

export default new Command({
    name: "ping",
    description: "🐱 ⋆ Canty ︙ Replies with pong!",
    run: async ({ interaction }) => {
        interaction.followUp({ content: "Pong! Cantyinho tunado com os intents agora vai dominar o mundo! Confia >:3" })
    }
})