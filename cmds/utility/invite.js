const Discord = require("discord.js")

module.exports = {
  name: 'invite',
  description: 'Heard you like Karots :>',
  category: "utility",
  aliases: ["add","givbot", "bot"],
  slash: true,
  cooldown: 5,
  run: async(client, slash, message, args) => {
    if(message) {
    const embed = new Discord.MessageEmbed()
      .setColor('#e54918')
      .setTitle('Heard you like Karots :>')
      .addField('Bot invite:', '[Click here](https://invite.karot.xyz)')
      .addField('Support server:', '[Click here](https://discord.com/invite/9Byp7mWfMF)')
      .setFooter(`${message.author.tag} • karot.xyz`, message.author.avatarURL({dynamic:true}));
      message.inlineReply(embed)
                  .catch(error =>
            message.inlineReply("<:kt_pain:822491637023899678> I need the `EMBED_LINKS` permission for this command.")
        );
      }
      
      const embed = new Discord.MessageEmbed()
      .setColor('#e54918')
      .setTitle('Heard you like Karots :>')
          .addField('Bot invite:', '[Click here](https://invite.karot.xyz)')
          .addField('Support server:', '[Click here](https://discord.com/invite/9Byp7mWfMF)')
      .setFooter(`karot.xyz`)

      return embed
  },
};