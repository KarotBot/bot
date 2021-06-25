require('dotenv').config()
const { GCommands, Color } = require("gcommands")
const Discord = require("discord.js");
const client = new Discord.Client({disableMentions:"all"});

client.events = new Discord.Collection();
require(`./handlers/event`)(client);

process.on('uncaughtException', (error) => { console.log(error) });

client.on('guildCreate', (guild) => client.events.get("guildCreate").run(guild));

client.on('guildDelete', (guild) => client.events.get("guildDelete").run(guild));

client.on("debug", async info => console.log(info));

client.on('ready', () => client.events.get("ready").run(client));

client.on('message', async(message) => {
       if(!message.guild) return;
       var in_prefix = await client.dispatcher.getGuildPrefix(message.guild.id);

       
      if(["client", "token", "env", "process", "process.env"].some(v => message.content.toLowerCase().includes(v.toLowerCase()))) {
           return;
      }

  if (message.content === "<@"+client.user.id+">" || message.content == "<@!"+client.user.id+">") {

		return message.channel.send(`**Hi, my name is Karot!** <:kt_hey:822468640103202858> \nMy prefix is \`${in_prefix}\`. Use the \`${in_prefix}help\` command if you want to find out what I can do!`);
  }
 })

client.login(process.env.TOKEN);