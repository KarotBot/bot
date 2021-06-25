const {MessageEmbed} = require("discord.js")

module.exports = {
    name: "prefix",
    description: "HOW I DO DIS??!??!??",
    category: "config",
    expectedArgs: '<prefix>',
    minArgs: 1,
    cooldown: 5,
    slash: false,
    userRequiredPermissions: "MANAGE_GUILD",
    run: async(client, slash, message, args) => {
      if(message) {
          if(args[0]) {
               client.dispatcher.setGuildPrefix(args[0], message.guild.id)
              return message.inlineReply("<:kt_suhlas:822473993780068393> **The prefix was set successfully!**", {allowedMentions: { parse: ['users'], repliedUser: true }})
          } else {
              var kurvaspecifikujtenjeblyprefixtykokotzamrdany = new MessageEmbed()
              .addField('<:kt_nesuhlas:822475199755583488> Something went wrong...', 'You must specify the prefix!')
              .setColor('#e54918')
              .setFooter(message.author.tag, message.author.avatarURL({dynamic:true}));
              return message.channel.send(kurvaspecifikujtenjeblyprefixtykokotzamrdany)
             .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
          }
          return;
      }

      client.user.setGuildPrefix(slash.data.options[0].value, slash.guild_id)
      client.api.interactions(slash.id, slash.token).callback.post({
          data: {
              type: 4,
              data: {
                  content: "**The prefix was set successfully!**", 
                  ephemeral: true
              }
          }
      })
    }
};