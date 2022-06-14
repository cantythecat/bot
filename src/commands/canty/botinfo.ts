import { EmbedBuilder, version } from "discord.js";
import { Command } from "../../structures/Command";

export default new Command({
    name: "botinfo",
    description: "🐱 ⋆ Canty ︙ Basic bot info",
    category: "canty",
    run: async ({ client, interaction }) => {
        let embed = new EmbedBuilder()
        .setAuthor({ name: "🐱 Canty Ovitty", iconURL: "https://media.discordapp.net/attachments/797887925005451294/986061231372771388/Canty.png" })
        .setDescription(
            `Olá, meu nome é Canty Ovitty! O Gatinho Espacial do Discord!\nCriado para divertir o dia a dia dos usuários e servidores!\nDesenvolvido com muito amor e carinho! \n \nMeus criadores: \n**Mig** - Criador ([Clique aqui](https://twitter.com/MigTurinho?s=09))\n**Pug** - Programador ([Clique aqui](https://twitter.com/pugbot_?s=09)) \n \nEu fui criado em\n<:typescript:986063882743345192> **[TypeScript](https://www.typescriptlang.org)** utilizando <:discordjs:868201517545566298> **[Discord.js](https://discord.js.org/#/)** \nTenho vários comandos legais para você se divertir e ajudar o servidor! \n\n**Redes Sociais**\n<:github:986066852331548692> Github ([Clique aqui](https://github.com/cantythecat))\n<:youbug:986066843380908052> Youtube ([Clique aqui](https://www.youtube.com/channel/UCOzuQiOcI4Y16Ulx5U6ARbg))\n<:Twitter:859149539365355530> Twitter ([Clique aqui](https://twitter.com/CantyBot))\n\n**Informações Tecnicas**\nVersão: 2.1.3 \nBuild: Q2b-${version} \n NodeJS LTS: Não \n \n**Data de Criação** \n25 de abril de 2021`
        )
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter({
            text: `${interaction.user.username} - ${client.guilds.cache.size} Servidores!`,
            iconURL: interaction.user.displayAvatarURL()
          })
        .setColor(client.color);
      await interaction.followUp({ content: `${interaction.member}`, embeds: [embed] });
    }
});