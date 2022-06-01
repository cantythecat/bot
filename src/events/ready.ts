import { Event } from "../structures/Event";

export default new Event("ready", (client) => {
  const guildSize: number = client.guilds.cache.size;

  console.log("Canty está miando novamente!");
  client.user.setPresence({
    activities: [
      {
        name: `🐱 Canty está miando em ${guildSize} servidores!`,
        type: 0,
      },
    ],
    status: "online",
  });
  
  let statuses = [
    `🐱 Canty está miando em ${guildSize} servidores!`,
    "Meow! adoro morangos 🍓",
    "Me adicione! eu não moido :3",
    "yay! pugs são legais",
    "eca, não gosto de alface 🤢",
    "a dona chica é mau, não confie nela",
    "Eu vim do espaço, olha que legal :3",
    "Meu sonhos é ser o maior bot do mundo :3",
    "Você gosta de morangos?",
    "Adoro Mimir 😴",
    "Minecraft",
    "Eu vou dominar o mundo >:3",
    "Vote Canty para presidente!",
    "🐧 Linux Supremacy",
  ];

  setInterval(function () {
    let newStatus: string =
      statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setPresence({
      activities: [
        {
          name: `${newStatus}`,
          type: 0,
        },
      ],
      status: "online",
    });
  }, 480000);
});