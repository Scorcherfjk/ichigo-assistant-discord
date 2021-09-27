const Discord = require('discord.js');
const config = require('./config');

const client = new Discord.Client();
client.login(config.token);


client.on('ready', () => {
  console.log(`Conected like ${client.user.tag}`);
});

client.on('message', async (msg) => {
  
  if (msg.author.bot) return;
  console.log('He recibido el mensaje ', msg.channel.type)

  if (msg.channel.type === 'dm') {
    if (msg.content.toLocaleLowerCase() === 'hola') {
      msg.reply('Hola');
    }
  }
});