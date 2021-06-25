const Discord = require("discord.js")

module.exports = {
  name: 'vote',
  description: 'Help out the bot a little!',
  category: "utility",
  aliases: ["top.gg","top", "discordbotlist"],
  slash: true,
  cooldown: 5,
  run: async(client, slash, message, args) => {
    if(message) {
    const embed = new Discord.MessageEmbed()
      .setColor('#e54918')
      .setTitle('Help out the bot a little!')
      .addField('Top.gg', '[Click here](https://top.gg/bot/822391645697212416/vote)')
      .addField('DiscordBotList', '[Click here](https://discordbotlist.com/bots/karot/upvote)')
      .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));
      message.inlineReply(embed)
                  .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
      }
      
      const embed = new Discord.MessageEmbed()
      .setColor('#e54918')
      .setTitle('Help out the bot a little!')
      .addField('Top.gg', '[Click here](https://top.gg/bot/822391645697212416/vote)')
      .addField('DiscordBotList', '[Click here](https://discordbotlist.com/bots/karot/upvote)')
      .setFooter(`karot.xyz`)

      return embed
  },
};