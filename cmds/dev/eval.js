const Discord = require('discord.js');
const {MessageEmbed} = require("discord.js")
function clean(text) {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

module.exports = {
	name: 'eval',
	description: 'Eval command',
	category: "dev",
  slash: false,
	cooldown: 0,
    	run: async(client, slash, message, args) => {
    if (!["403500416631046145"].includes(message.author.id)) return message.react('822475199755583488').catch(e => message.react('❌'));

      if(!args[0]) return message.react('😔')
      try {
          var evaled = eval(args.join(" "));
          if (typeof evaled !== 'string')
              evaled = require('util').inspect(evaled);
          
          client.users.cache.get('403500416631046145').send(`🆘 Evaled **${args.join(" ")}** by **${message.author.tag}** *[${message.author.id}]* in **${message.guild.name}**`);
          
          var embed = new MessageEmbed()
            .setColor("#e54918")
            .addField("Input: ", "```js\n" + args.join(" ") + "```")
            .addField("Output: ", "```js\n" + clean(evaled) + "```")
           .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));
          message.inlineReply(embed)
      } catch (err) {
        var embed = new MessageEmbed()
            .setColor("#e54918")
            .addField("Input: ", "```js\n" + args.join(" ") + "```")
            .addField("Output: ", "```js\n" + clean(err) + "```")
            .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));
        message.inlineReply(embed)
      }
}
};