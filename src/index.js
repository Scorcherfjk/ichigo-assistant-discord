const Discord = require("discord.js");

const config = require("./config");
const DiscordController = require("./controllers/discord.controller");
const discordController = new DiscordController();
const logger = require("./services/logger.service");

const client = new Discord.Client();
client.login(config.token);

client.on("ready", () => {
  logger.info({ label: client.user.username, message: `Conected like ${client.user.tag}`});
});

client.on("message", async (msg) => {
  if (msg.author.bot) return;

  if (msg.channel.type === 'dm') {
    logger.info({ label: msg.author.username, message: `Message received '${msg.content}'` })
    const { has_reaction, reaction, message } = await discordController.receive(
      msg
    );

    if (has_reaction) {
      msg.react(reaction);
    }
    msg.reply(message);
    logger.info({ label: 'bot', message: `Message received '${msg.content}'` })
  }
});
