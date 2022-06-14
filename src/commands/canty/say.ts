import { Command } from "../../structures/Command";

export default new Command({
  name: "say",
  description: "🐱 ⋆ Canty ︙ I will say anything you want!",
  category: "canty",
  options: [
    {
      name: "message",
      description: "The message you want me to speak.",
      type: 3,
      required: true,
    },
  ],
  run: async ({ interaction }) => {
    let messageToSay = interaction.options.getString("message");
    if (messageToSay.length > 1900)
      return interaction.channel.send({
        content:
          "MEOW! <:CantyBravo2:966075647363526676> Sua mensagem é muito grande! >:3",
      });

    await interaction.deleteReply().catch((O_o) => {});

    if (interaction.user.id == "702135586240200756")
      return interaction.channel.send({ content: messageToSay });
    if (interaction.user.id == "715586111719735360")
      return interaction.channel.send({ content: messageToSay });

    if (interaction.member.permissions.has("MentionEveryone"))
      return interaction.channel.send({
        content: `${messageToSay}\n \nMensagem enviada por ${interaction.member}`,
      });

    messageToSay = messageToSay.replace(/@everyone/gi, "never gonna give you up");
    messageToSay = messageToSay.replace(/@here/gi, "never gonna let you down");
    messageToSay = messageToSay.replace(/@&/gi, "never gonna run around and desert you");

    try {
        await interaction.channel.send({
          content: `${messageToSay}\n \nMensagem enviada por ${interaction.member}`,
        });
      } catch (err) {
        console.log(err);
        interaction.channel.send({
          content: "MEOW! Algo deu errado ao falar esta mensagem. <:CantyTriste:966075647522902026>",
        });
      }
  },
});
