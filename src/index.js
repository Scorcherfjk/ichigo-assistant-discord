const Discord = require("discord.js");

const config = require("./config");
const DiscordController = require("./controllers/discord.controller");
const discordController = new DiscordController();

const client = new Discord.Client();
client.login(config.token);

client.on("ready", () => {
  console.log(`Conected like ${client.user.tag}`);
});

client.on("message", async (msg) => {
  if (msg.author.bot) return;

  if (msg.channel.type === 'dm') {
  // if (msg.content.toLocaleLowerCase() === "hola") {
    const { has_reaction, reaction, message } = await discordController.receive(
      msg
    );

    if (has_reaction) {
      msg.react(reaction);
    }
    msg.reply(message);
  // }
  }
});
